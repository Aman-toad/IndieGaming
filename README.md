# ⚔️ Hyper Light Breaker | Immersive Web Experience

A high-performance, cinematic gaming website built with **React** and **GSAP**.  
This project pushes modern frontend development beyond conventional UI by implementing **2.5D parallax**, **scroll-linked storytelling**, and **hardware-accelerated interactions**.

It is designed to replicate the feel of a premium AAA game landing experience directly in the browser.

---

## 🕹️ Live Demo

🔗 **[View the Experience]((https://dash-liart-five.vercel.app/))**

---

## 🚀 Technical Highlights

### 1. Cinematic Hero Transition

- **Dynamic Video Masking**  
  Three-stage video hero that morphs from ambient background → focused cinematic view using **GSAP clip-path animations**

- **3D Perspective Shifting**  
  Reactive tilt effect using:

  - `transform: perspective`
  - GSAP `quickSetter`
  - Mouse coordinate tracking

  Achieves 3D depth **without heavy libraries like Three.js**

---

### 2. Interactive Armory (Bento Grid)

- **Mouse-Follow Glow Effect**  
  High-performance spotlight using:

  - CSS variables
  - GSAP quickSetter
  - GPU-accelerated rendering

  Creates synchronized "flashlight" interaction across multiple components.

- **Staggered Scroll Orchestration**

  Uses GSAP ScrollTrigger for:

  - Precise animation timing
  - Smooth entrance sequencing
  - Zero layout thrashing

---

### 3. Procedural Bestiary

- **Sticky Scroll Viewing Chamber**

  Split-screen architecture where:

  - Visual assets remain fixed
  - Technical content scrolls independently

- **Atmospheric Rendering Effects**

  Real-time effects using:

  - SVG filters
  - CSS gradients
  - Scanlines
  - Glitch overlays

  Maintains authentic game-style presentation.

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | React 18 (Vite) |
| Animation Engine | GSAP (GreenSock) |
| GSAP Plugins | ScrollTrigger, Flip, useGSAP |
| Styling | Tailwind CSS + CSS Variables |
| Rendering Strategy | GPU-accelerated transforms |
| Media & Icons | Custom SVGs 

---

## 🧠 Master-Level Implementation Details

### Performance-First Animation Architecture
