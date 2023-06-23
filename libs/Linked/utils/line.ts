interface ICoordinates {
  x: number
  y: number
}

interface LineOptions {
  color: string
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  from: ICoordinates,
  to: ICoordinates,
  opts?: LineOptions
): void {
  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.strokeStyle = opts?.color || '#FFFFFF'
  ctx.stroke()
}
