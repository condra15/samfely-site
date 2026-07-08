const colors = ['#E24B4A', '#EF9F27', '#639922', '#378ADD', '#7F77DD', '#D85A30', '#1D9E75', '#D4537E'];

export default function RainbowText({ text, tag: Tag = 'span', className = '' }) {
  let colorIndex = 0;
  return (
    <Tag className={className}>
      {text.split('').map((char, i) => {
        if (char === ' ' || char === ',' || char === '&') {
          return <span key={i} style={{ color: '#2c2c2a' }}>{char}</span>;
        }
        const color = colors[colorIndex % colors.length];
        colorIndex++;
        return <span key={i} style={{ color }}>{char}</span>;
      })}
    </Tag>
  );
}
