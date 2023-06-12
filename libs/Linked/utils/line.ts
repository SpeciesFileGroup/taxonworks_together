interface ICoordinates {
  x: number
  y: number
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  from: ICoordinates,
  to: ICoordinates
): void {
  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.strokeStyle = '#FFFFFF'
  ctx.stroke()
}
