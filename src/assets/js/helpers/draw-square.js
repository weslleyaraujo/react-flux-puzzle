export default function({pixel, canvas, row, colors}) {
  let lines = row.get('lines');
  let context = canvas.getContext('2d');

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
