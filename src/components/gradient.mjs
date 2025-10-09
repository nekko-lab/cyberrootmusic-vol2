// src/assets/gradient.mjs

export class Gradient {
  constructor() {
    this.bubbles = [];
  }

  initGradient(selector) {
    this.canvas = document.querySelector(selector);
    this.ctx = this.canvas.getContext('2d');
    this.resize();

    // 泡を生成
    for (let i = 0; i < 50; i++) {
      this.bubbles.push(this.createBubble());
    }

    window.addEventListener('resize', () => this.resize());
    this.animate();
    return this;
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createBubble() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      r: Math.random() * 10 + 5,
      speed: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.3,
    };
  }

  drawBackground() {
    const g = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    g.addColorStop(0, '#a8d8ff');
    g.addColorStop(1, '#ffffff');
    this.ctx.fillStyle = g;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBubbles() {
    this.ctx.fillStyle = 'rgba(255,255,255,0.8)';
    for (let b of this.bubbles) {
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha})`;
      this.ctx.fill();

      // 位置更新（下方向へ）
      b.y += b.speed;
      if (b.y - b.r > this.canvas.height) {
        // 画面下まで行ったら上から再出現
        b.y = -b.r;
        b.x = Math.random() * this.canvas.width;
        b.r = Math.random() * 10 + 5;
        b.speed = Math.random() * 0.5 + 0.2;
        b.alpha = Math.random() * 0.5 + 0.3;
      }
    }
  }

  animate() {
    this.drawBackground();
    this.drawBubbles();
    requestAnimationFrame(() => this.animate());
  }
}
