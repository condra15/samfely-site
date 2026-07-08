const baseStyle = (x, y, size, rotation, skewX = 0, skewY = 0) => ({
  position: 'absolute', pointerEvents: 'none', opacity: 0.4,
  left: x, top: y,
  transform: `rotate(${rotation}deg) skewX(${skewX}deg) skewY(${skewY}deg)`,
});

function HashLines({ color, lines }) {
  return lines.map((l, i) => (
    <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]}
      stroke={color} strokeWidth={l[4] || 2} opacity={l[5] || 0.55} strokeLinecap="round" />
  ));
}

export function DoodleLightning({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#EF9F27';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <polygon points="28,4 16,22 22,22 18,44 34,24 27,24" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />
      <HashLines color={c} lines={[
        [18,12,28,18,2.5,.5],[17,16,27,22,2.5,.45],[19,20,26,24,2,.5],
        [20,24,28,28,2.5,.45],[19,28,27,32,2,.5],[20,32,26,36,2.5,.45],
        [21,36,25,40,2,.4],[24,14,19,20,2,.4],[26,22,20,28,2,.45],
        [25,30,21,36,2,.4],[22,10,26,16,1.5,.35],[23,26,28,30,1.5,.35],
      ]} />
    </svg>
  );
}

export function DoodleStar({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#E24B4A';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <polygon points="24,4 28,18 44,18 32,26 36,40 24,32 12,40 16,26 4,18 20,18" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />
      <HashLines color={c} lines={[
        [16,16,32,20,2.5,.5],[14,20,34,24,2,.45],[16,24,32,28,2.5,.5],
        [18,28,30,32,2,.45],[20,32,28,36,2.5,.4],[22,14,26,18,2,.4],
        [28,20,18,26,2,.45],[26,26,16,32,1.8,.4],[30,16,20,22,1.5,.35],
        [24,30,22,34,1.5,.35],
      ]} />
    </svg>
  );
}

export function DoodleHeart({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#D4537E';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 40C24 40 6 30 6 18C6 12 10 8 15 8C19 8 22 11 24 14C26 11 29 8 33 8C38 8 42 12 42 18C42 30 24 40 24 40Z" stroke={c} strokeWidth="2.5" strokeLinejoin="round" />
      <HashLines color={c} lines={[
        [12,14,22,18,2.5,.5],[10,18,24,22,2,.45],[12,22,26,26,2.5,.5],
        [14,26,28,30,2,.45],[18,30,26,34,2.5,.4],[20,34,24,38,2,.35],
        [26,14,36,18,2,.45],[28,18,38,22,2.5,.4],[26,22,36,26,2,.45],
        [24,26,34,30,1.8,.4],[16,16,20,20,1.5,.35],[30,16,34,20,1.5,.35],
      ]} />
    </svg>
  );
}

export function DoodleLightbulb({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#EF9F27';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 34C18 30 12 26 12 18C12 12 17 6 24 6C31 6 36 12 36 18C36 26 30 30 30 34" />
      <line x1="18" y1="38" x2="30" y2="38" /><line x1="20" y1="42" x2="28" y2="42" />
      <line x1="24" y1="14" x2="24" y2="10" strokeWidth="2" />
      <line x1="18" y1="16" x2="15" y2="13" strokeWidth="2" />
      <line x1="30" y1="16" x2="33" y2="13" strokeWidth="2" />
    </svg>
  );
}

export function DoodleMusic({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#7F77DD';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
      <ellipse cx="14" cy="34" rx="6" ry="4" /><line x1="20" y1="34" x2="20" y2="10" />
      <ellipse cx="32" cy="30" rx="6" ry="4" /><line x1="38" y1="30" x2="38" y2="8" />
      <line x1="20" y1="10" x2="38" y2="8" strokeWidth="3" />
    </svg>
  );
}

export function DoodlePlane({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#1D9E75';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 24L42 8L30 42L24 28L6 24Z" /><line x1="24" y1="28" x2="42" y2="8" />
    </svg>
  );
}

export function DoodleRainbow({ x, y, size = 56, rotation = 0, skewX = 0, skewY = 0 }) {
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size * 0.7} viewBox="0 0 56 38" fill="none" strokeWidth="3" strokeLinecap="round">
      <path d="M6 34 Q28 2 50 34" stroke="#E24B4A" /><path d="M12 34 Q28 8 44 34" stroke="#EF9F27" />
      <path d="M18 34 Q28 14 38 34" stroke="#639922" /><path d="M24 34 Q28 20 32 34" stroke="#378ADD" />
    </svg>
  );
}

export function DoodleSun({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#EF9F27';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="8" />
      <line x1="24" y1="6" x2="24" y2="12" /><line x1="24" y1="36" x2="24" y2="42" />
      <line x1="6" y1="24" x2="12" y2="24" /><line x1="36" y1="24" x2="42" y2="24" />
      <line x1="11" y1="11" x2="15" y2="15" /><line x1="33" y1="33" x2="37" y2="37" />
      <line x1="37" y1="11" x2="33" y2="15" /><line x1="15" y1="33" x2="11" y2="37" />
    </svg>
  );
}

export function DoodleBook({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#378ADD';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 38V14" /><path d="M24 14C24 14 20 10 8 10V34C20 34 24 38 24 38" />
      <path d="M24 14C24 14 28 10 40 10V34C28 34 24 38 24 38" />
      <line x1="12" y1="18" x2="20" y2="18" strokeWidth="2" /><line x1="12" y1="23" x2="18" y2="23" strokeWidth="2" />
      <line x1="28" y1="18" x2="36" y2="18" strokeWidth="2" /><line x1="30" y1="23" x2="36" y2="23" strokeWidth="2" />
    </svg>
  );
}

export function DoodlePlanet({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#7F77DD';
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="24" cy="24" r="10" /><ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(-20 24 24)" />
    </svg>
  );
}

export function DoodleMath({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0 }) {
  const c = color || '#7F77DD';
  return (
    <svg style={{ ...baseStyle(x, y, size, rotation, skewX, skewY), opacity: 0.1 }} width={size} height={size * 0.5} viewBox="0 0 48 24">
      <text x="2" y="20" fill={c} stroke="none" fontFamily="Patrick Hand, cursive" fontSize="22">2+3</text>
    </svg>
  );
}

export function DoodleStickFigure({ x, y, size = 48, rotation = 0, color, skewX = 0, skewY = 0, pose = 0 }) {
  const c = color || '#D85A30';
  const poses = [
    <g key="0"><circle cx="24" cy="10" r="5"/><line x1="24" y1="15" x2="24" y2="30"/><line x1="24" y1="20" x2="14" y2="28"/><line x1="24" y1="20" x2="34" y2="28"/><line x1="24" y1="30" x2="16" y2="42"/><line x1="24" y1="30" x2="32" y2="42"/></g>,
    <g key="1"><circle cx="24" cy="10" r="5"/><line x1="24" y1="15" x2="24" y2="30"/><line x1="24" y1="20" x2="14" y2="14"/><line x1="24" y1="20" x2="34" y2="14"/><line x1="24" y1="30" x2="16" y2="42"/><line x1="24" y1="30" x2="32" y2="42"/></g>,
    <g key="2"><circle cx="24" cy="10" r="5"/><line x1="24" y1="15" x2="24" y2="30"/><line x1="24" y1="20" x2="36" y2="20"/><line x1="24" y1="20" x2="12" y2="20"/><line x1="24" y1="30" x2="18" y2="42"/><line x1="24" y1="30" x2="30" y2="42"/></g>,
    <g key="3"><circle cx="24" cy="10" r="5"/><line x1="24" y1="15" x2="24" y2="30"/><line x1="24" y1="20" x2="34" y2="12"/><line x1="24" y1="20" x2="14" y2="26"/><line x1="24" y1="30" x2="20" y2="42"/><line x1="24" y1="30" x2="34" y2="38"/></g>,
  ];
  return (
    <svg style={baseStyle(x, y, size, rotation, skewX, skewY)} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {poses[pose % poses.length]}
    </svg>
  );
}

export function BigShape({ type, x, y, size, color, rotation = 0 }) {
  const s = { position: 'absolute', left: x, top: y, pointerEvents: 'none', transform: `rotate(${rotation}deg)` };
  const shapes = {
    circle: <svg style={s} width={size} height={size} viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="3.5" opacity="0.5" strokeDasharray="10 7" /></svg>,
    triangle: <svg style={s} width={size} height={size} viewBox="0 0 100 100"><polygon points="50,8 95,88 5,88" fill="none" stroke={color} strokeWidth="3.5" opacity="0.5" strokeDasharray="10 7" /></svg>,
    square: <svg style={s} width={size} height={size} viewBox="0 0 100 100"><rect x="8" y="8" width="84" height="84" rx="12" fill="none" stroke={color} strokeWidth="3.5" opacity="0.5" strokeDasharray="10 7" /></svg>,
    star: <svg style={s} width={size} height={size} viewBox="0 0 100 100"><polygon points="50,5 61,38 95,38 68,58 79,90 50,70 21,90 32,58 5,38 39,38" fill="none" stroke={color} strokeWidth="3.5" opacity="0.45" strokeDasharray="10 7" /></svg>,
  };
  return shapes[type] || shapes.circle;
}

export function DoodleScatter({ variant = 'default' }) {
  const layouts = {
    hero: [
      { C: BigShape, p: { type: 'circle', x: '-3%', y: '-5%', size: 300, color: '#85B7EB', rotation: 0 } },
      { C: BigShape, p: { type: 'triangle', x: '70%', y: '-3%', size: 260, color: '#97C459', rotation: 15 } },
      { C: BigShape, p: { type: 'square', x: '75%', y: '50%', size: 240, color: '#AFA9EC', rotation: -20 } },
      { C: BigShape, p: { type: 'circle', x: '-6%', y: '55%', size: 280, color: '#FABE7B', rotation: 0 } },
      { C: BigShape, p: { type: 'star', x: '35%', y: '70%', size: 220, color: '#ED93B1', rotation: 10 } },
      { C: BigShape, p: { type: 'triangle', x: '25%', y: '-8%', size: 180, color: '#F0997B', rotation: -25 } },
      { C: BigShape, p: { type: 'circle', x: '50%', y: '30%', size: 200, color: '#5DCAA5', rotation: 0 } },
      { C: BigShape, p: { type: 'square', x: '-8%', y: '25%', size: 180, color: '#ED93B1', rotation: 30 } },
      { C: DoodleLightning, p: { x: '4%', y: '12%', size: 70, rotation: 12, skewX: 3, skewY: -2 } },
      { C: DoodleStar, p: { x: '88%', y: '8%', size: 70, rotation: -15, skewX: -4, skewY: 2, color: '#E24B4A' } },
      { C: DoodleHeart, p: { x: '92%', y: '55%', size: 70, rotation: 10, skewX: 2, skewY: -3, color: '#D4537E' } },
      { C: DoodlePlane, p: { x: '6%', y: '65%', size: 70, rotation: 25, skewX: -3, skewY: 2, color: '#1D9E75' } },
      { C: DoodleSun, p: { x: '50%', y: '3%', size: 70, rotation: 8, skewX: 2, skewY: 1 } },
      { C: DoodleMusic, p: { x: '85%', y: '80%', size: 70, rotation: -12, skewX: 3, skewY: -2 } },
      { C: DoodleBook, p: { x: '3%', y: '40%', size: 70, rotation: -8, skewX: -2, skewY: 3 } },
      { C: DoodleStickFigure, p: { x: '90%', y: '35%', size: 70, rotation: 5, skewX: 2, skewY: -1, pose: 1 } },
      { C: DoodleMath, p: { x: '8%', y: '85%', size: 70, rotation: -5, skewX: 3, skewY: 0 } },
      { C: DoodleLightbulb, p: { x: '45%', y: '88%', size: 70, rotation: 7, skewX: -2, skewY: 1 } },
      { C: DoodleRainbow, p: { x: '75%', y: '65%', size: 70, rotation: -8, skewX: 2, skewY: -1 } },
      { C: DoodlePlanet, p: { x: '15%', y: '5%', size: 70, rotation: 20, skewX: -3, skewY: 2 } },
      { C: DoodleStickFigure, p: { x: '3%', y: '88%', size: 70, rotation: -10, skewX: 2, skewY: 1, pose: 3 } },
    ],
    default: [
      { C: BigShape, p: { type: 'circle', x: '75%', y: '-6%', size: 240, color: '#ED93B1', rotation: 0 } },
      { C: BigShape, p: { type: 'square', x: '-5%', y: '40%', size: 220, color: '#85B7EB', rotation: 12 } },
      { C: BigShape, p: { type: 'triangle', x: '65%', y: '55%', size: 200, color: '#FABE7B', rotation: -10 } },
      { C: BigShape, p: { type: 'circle', x: '30%', y: '-5%', size: 180, color: '#AFA9EC', rotation: 0 } },
      { C: BigShape, p: { type: 'star', x: '80%', y: '30%', size: 160, color: '#97C459', rotation: 20 } },
      { C: BigShape, p: { type: 'square', x: '10%', y: '70%', size: 180, color: '#5DCAA5', rotation: -15 } },
      { C: DoodleLightbulb, p: { x: '5%', y: '15%', size: 40, rotation: 10, skewX: -3, skewY: 2 } },
      { C: DoodleStar, p: { x: '90%', y: '20%', size: 36, rotation: -20, skewX: 4, skewY: -2 } },
      { C: DoodlePlanet, p: { x: '88%', y: '70%', size: 38, rotation: 8, skewX: -2, skewY: 3 } },
      { C: DoodleRainbow, p: { x: '3%', y: '75%', size: 50, rotation: -5, skewX: 2, skewY: -1 } },
      { C: DoodleStickFigure, p: { x: '92%', y: '45%', size: 32, rotation: -8, skewX: 3, skewY: 1, pose: 2 } },
      { C: DoodleHeart, p: { x: '4%', y: '55%', size: 30, rotation: 12, skewX: -2, skewY: 3 } },
      { C: DoodlePlane, p: { x: '48%', y: '85%', size: 34, rotation: 15, skewX: 2, skewY: -1 } },
    ],
    sparse: [
      { C: BigShape, p: { type: 'circle', x: '80%', y: '5%', size: 200, color: '#97C459', rotation: 0 } },
      { C: BigShape, p: { type: 'square', x: '-4%', y: '45%', size: 180, color: '#AFA9EC', rotation: -15 } },
      { C: BigShape, p: { type: 'triangle', x: '40%', y: '65%', size: 160, color: '#FABE7B', rotation: 10 } },
      { C: BigShape, p: { type: 'circle', x: '20%', y: '-5%', size: 150, color: '#ED93B1', rotation: 0 } },
      { C: BigShape, p: { type: 'star', x: '70%', y: '50%', size: 140, color: '#85B7EB', rotation: -20 } },
      { C: DoodleHeart, p: { x: '6%', y: '20%', size: 32, rotation: 15, skewX: -3, skewY: 2 } },
      { C: DoodleLightning, p: { x: '90%', y: '65%', size: 36, rotation: -10, skewX: 2, skewY: -3 } },
      { C: DoodleStickFigure, p: { x: '4%', y: '70%', size: 30, rotation: 5, skewX: -2, skewY: 1, pose: 3 } },
      { C: DoodleSun, p: { x: '92%', y: '15%', size: 32, rotation: 10, skewX: 3, skewY: -1 } },
      { C: DoodleBook, p: { x: '50%', y: '90%', size: 34, rotation: -8, skewX: -2, skewY: 2 } },
    ],
  };
  const items = layouts[variant] || layouts.default;
  return <>{items.map(({ C, p }, i) => <C key={i} {...p} />)}</>;
}
