export default class Sprite {
  constructor(x, y, radius, speed, color) {
    Object.assign(this, { x, y, radius, speed, color });
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}
