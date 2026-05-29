'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

type MeshDef = { hex: string; rMin: number; rMax: number; a0: string }

const MESH_DEFS: MeshDef[] = [
  { hex: '#808080', rMin: 0.55, rMax: 0.75, a0: 'cc' },
  { hex: '#383838', rMin: 0.20, rMax: 0.30, a0: '66' },
  { hex: '#606060', rMin: 0.38, rMax: 0.52, a0: '99' },
  { hex: '#484848', rMin: 0.50, rMax: 0.68, a0: 'aa' },
  { hex: '#585858', rMin: 0.42, rMax: 0.58, a0: '88' },
  { hex: '#202020', rMin: 0.18, rMax: 0.28, a0: '55' },
  { hex: '#505050', rMin: 0.48, rMax: 0.65, a0: '99' },
  { hex: '#101010', rMin: 0.12, rMax: 0.22, a0: '44' },
]

type MeshNode = {
  x: number; y: number
  vx: number; vy: number
  hex: string; a0: string
  r: number
}

function initMeshNodes(): MeshNode[] {
  return MESH_DEFS.map((def) => ({
    x:  Math.random(),
    y:  Math.random(),
    vx: (Math.random() - 0.5) * 0.00025,
    vy: (Math.random() - 0.5) * 0.00025,
    hex: def.hex,
    a0: def.a0,
    r: def.rMin + Math.random() * (def.rMax - def.rMin),
  }))
}

function drawMesh(
  ctx: CanvasRenderingContext2D,
  nodes: MeshNode[],
  W: number, H: number
) {
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, W, H)
  nodes.forEach(n => {
    const cx = n.x * W
    const cy = n.y * H
    const r  = n.r * Math.max(W, H)
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
    grd.addColorStop(0,    n.hex + n.a0)
    grd.addColorStop(0.55, n.hex + '55')
    grd.addColorStop(1,    n.hex + '00')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, W, H)
  })
}

export default function Home() {
  const bgRef     = useRef<HTMLCanvasElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logoRef   = useRef<HTMLImageElement>(null)
  const mouseRef  = useRef({ x: 0, y: 0 })
  const orientRef = useRef<{ x: number; y: number } | null>(null)
  const calibRef  = useRef<{ beta: number; gamma: number } | null>(null)

  const [showOrientBtn, setShowOrientBtn] = useState(false)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouch) return

    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission === 'function'
    ) {
      setShowOrientBtn(true)
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', onOrientation)
    }

    return () => window.removeEventListener('deviceorientation', onOrientation)
  }, [])

  function onOrientation(e: DeviceOrientationEvent) {
    const gamma = e.gamma ?? 0
    const beta  = e.beta  ?? 0
    if (!calibRef.current) {
      calibRef.current = { beta, gamma }
    }
    const dg = gamma - calibRef.current.gamma
    const db = beta  - calibRef.current.beta
    orientRef.current = {
      x: Math.max(-1, Math.min(1, dg / 45)),
      y: Math.max(-1, Math.min(1, db / 45)),
    }
    setShowOrientBtn(false)
  }

  async function requestOrientationPermission() {
    try {
      const req = (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission
      const result = await req()
      if (result === 'granted') {
        window.addEventListener('deviceorientation', onOrientation)
      }
    } catch {
      // permission denied or unavailable
    }
    setShowOrientBtn(false)
  }

  useEffect(() => {
    const bg     = bgRef.current
    const canvas = canvasRef.current
    if (!bg || !canvas) return

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const bgCtx = bg.getContext('2d')!
    const ctx   = canvas.getContext('2d')!

    let W = window.innerWidth
    let H = window.innerHeight
    const DPR = window.devicePixelRatio || 1
    let PW = 0, PH = 0
    let imgData = ctx.createImageData(1, 1)
    let grainCount = 0

    const meshNodes = initMeshNodes()

    const resize = () => {
      W  = window.innerWidth
      H  = window.innerHeight
      PW = Math.floor(W * DPR)
      PH = Math.floor(H * DPR)
      bg.width  = W;  bg.height = H
      canvas.width  = PW;  canvas.height = PH
      canvas.style.width  = `${W}px`
      canvas.style.height = `${H}px`
      imgData    = ctx.createImageData(PW, PH)
      grainCount = Math.floor(PW * PH * 0.018)
    }
    resize()
    window.addEventListener('resize', resize)

    let raf: number
    let frame = 0
    let shadowX = 0, shadowY = 0

    const tick = () => {
      frame++

      const logo = logoRef.current
      if (logo) {
        let targetX = 0, targetY = 0
        const orient = orientRef.current

        if (orient) {
          targetX = orient.x * 70
          targetY = orient.y * 70
        } else {
          const rect = logo.getBoundingClientRect()
          const lx = rect.left + rect.width / 2
          const ly = rect.top + rect.height / 2
          const mx = mouseRef.current.x || lx
          const my = mouseRef.current.y || ly
          const dx = lx - mx
          const dy = ly - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = Math.sqrt(W * W + H * H) / 2
          const t = Math.min(dist / maxDist, 1)
          targetX = dist > 0.001 ? (dx / dist) * t * 60 : 0
          targetY = dist > 0.001 ? (dy / dist) * t * 60 : 0
        }

        shadowX += (targetX - shadowX) * 0.1
        shadowY += (targetY - shadowY) * 0.1
        logo.style.filter = `brightness(0) invert(1) drop-shadow(${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 20px rgba(0,0,0,0.75))`
      }

      if (frame % 2 === 0) {
        meshNodes.forEach(n => {
          n.x += n.vx;  n.y += n.vy
          if (n.x < 0.05 || n.x > 0.95) n.vx *= -1
          if (n.y < 0.05 || n.y > 0.95) n.vy *= -1
        })
        drawMesh(bgCtx, meshNodes, W, H)
      }

      if (frame % 3 === 0) {
        const data = imgData.data
        data.fill(0)
        for (let i = 0; i < grainCount; i++) {
          const base = ((Math.random() * PH | 0) * PW + (Math.random() * PW | 0)) * 4
          data[base]     = 255
          data[base + 1] = 255
          data[base + 2] = 255
          data[base + 3] = 50
        }
        ctx.putImageData(imgData, 0, 0)
      }

      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <main className={styles.root}>
      <canvas ref={bgRef}     className={styles.bgCanvas} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/assets/LHL-v5-2.svg"
          alt="Lee Hill Labs"
          className={styles.logo}
        />

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Community Emergency Platform</p>
          <h1 className={styles.headline}>
            The coordination layer communities need.
          </h1>
          <p className={styles.body}>
            Lee Hill Labs is building emergency coordination infrastructure
            for neighborhoods facing wildfires, floods, and disasters.
            Real-time group check-ins, household coordination, and escape
            route sharing — built for when it matters most.
          </p>
          <a href="mailto:john@leehilllabs.com" className={styles.cta}>
            Get in touch
          </a>
        </section>
      </div>

      {showOrientBtn && (
        <button className={styles.orientBtn} onClick={requestOrientationPermission}>
          Hold naturally &middot; tap to enable tilt
        </button>
      )}
    </main>
  )
}
