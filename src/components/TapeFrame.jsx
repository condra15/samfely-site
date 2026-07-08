const colorSets = [
  ['#EF9F27', '#85B7EB', '#97C459', '#ED93B1'],
  ['#AFA9EC', '#F0997B', '#5DCAA5', '#EF9F27'],
  ['#378ADD', '#E24B4A', '#7F77DD', '#1D9E75'],
  ['#D4537E', '#639922', '#85B7EB', '#D85A30'],
  ['#97C459', '#AFA9EC', '#EF9F27', '#378ADD'],
];

export default function TapeFrame({ children, colorSet = 0, className = '' }) {
  const cs = colorSets[colorSet % colorSets.length];
  const tapeStyle = (top, left, right, bottom, rot, color) => ({
    position: 'absolute', width: 32, height: 15,
    background: color, opacity: 0.7, borderRadius: 2,
    transform: `rotate(${rot}deg)`, zIndex: 2,
    ...(top !== null ? { top } : {}),
    ...(bottom !== null ? { bottom } : {}),
    ...(left !== null ? { left } : {}),
    ...(right !== null ? { right } : {}),
  });

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} className={className}>
      <div style={tapeStyle(-7, -7, null, null, -45, cs[0])} />
      <div style={tapeStyle(-7, null, -7, null, 45, cs[1])} />
      <div style={tapeStyle(null, -7, null, -7, 45, cs[2])} />
      <div style={tapeStyle(null, null, -7, -7, -45, cs[3])} />
      {children}
    </div>
  );
}
