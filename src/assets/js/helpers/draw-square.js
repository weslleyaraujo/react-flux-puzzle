export default function({pixel, canvas, row, colors}) {
  const lines = row.get('lines');
  const context = canvas.getContext('2d');

  lines.forEach((line, x) => line.forEach((item, y) => {
    context.fillStyle = item.get('active') ? colors.active : colors.inactive;
    context.fillRect(
      x * pixel,
      y * pixel,
      pixel,
      pixel
    );
  }));
};
