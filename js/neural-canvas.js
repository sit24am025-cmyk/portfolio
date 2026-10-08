/**
 * =====================================================================
 * NEURAL NETWORK CANVAS PARTICLES
 * =====================================================================
 * Lightweight, high-performance canvas simulation rendering an AI/neural
 * network constellation with glowing synaptic connections and subtle mouse
 * interaction.
 */

class NeuralCanvas {
  constructor(canvasId = "neural-canvas") {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.animationFrameId = null;
    this.isRunning = false;

    this.init();
  }

  init() {
    this.resize();
    this.createParticles();
    this.addEventListeners();
    this.start();
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;

    this.ctx.scale(this.dpr, this.dpr);
  }

  createParticles() {
    // Number of nodes proportional to screen area
    const count = Math.floor((this.width * this.height) / 16000);
    this.particles = [];

    const colors = [
      "rgba(0, 245, 212, ",   // Cyan
      "rgba(121, 40, 202, ",   // Purple
      "rgba(0, 112, 243, ",   // Electric Blue
      "rgba(56, 189, 248, "   // Sky Blue
    ];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.4 + 0.2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulseVal: Math.random() * Math.PI
      });
    }
  }

  addEventListeners() {
    window.addEventListener("resize", () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Touch support for mobile
    window.addEventListener("touchmove", (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener("touchend", () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    const maxDist = 130;
    const maxDistSq = maxDist * maxDist;

    // Draw synaptic lines between close particles
    for (let i = 0; i < this.particles.length; i++) {
      const p1 = this.particles[i];

      // Update positions
      p1.x += p1.vx;
      p1.y += p1.vy;
      p1.pulseVal += p1.pulseSpeed;

      // Bounce against edges
      if (p1.x < 0 || p1.x > this.width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > this.height) p1.vy *= -1;

      // Mouse subtle interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p1.x - this.mouse.x;
        const dy = p1.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 1.5;
          p1.x += (dx / dist) * force;
          p1.y += (dy / dist) * force;
        }
      }

      // Draw particle node
      const currentAlpha = p1.baseAlpha + Math.sin(p1.pulseVal) * 0.15;
      this.ctx.beginPath();
      this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${p1.colorBase}${Math.max(0.1, currentAlpha)})`;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = "rgba(0, 245, 212, 0.4)";
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Connect with neighbors
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const distance = Math.sqrt(distSq);
          const alpha = (1 - distance / maxDist) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }

    if (this.isRunning) {
      this.animationFrameId = requestAnimationFrame(() => this.draw());
    }
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.draw();
    }
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// Instantiate on load
document.addEventListener("DOMContentLoaded", () => {
  window.neuralCanvasInstance = new NeuralCanvas("neural-canvas");
});
