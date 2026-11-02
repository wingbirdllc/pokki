import type { SceneKind } from "@/lib/types";

/**
 * Original editorial illustrations drawn for the POKKI demo.
 * They are representative scenes, NOT photographs of any third-party product.
 */

const P = {
  bgWarm: "#ece4d3",
  bgDeep: "#211e1b",
  bgIvory: "#f1eadb",
  ink: "#1b1916",
  cream: "#f6f1e7",
  sand: "#d8c9a8",
  gold: "#cbb27a",
  goldDeep: "#8a6d2f",
  walnut: "#5a4030",
  walnutLight: "#7a5a43",
  charcoal: "#2e2a26",
  stone: "#bdb3a1",
  linen: "#e3d6bb",
};

function Frame({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="800" height="1000" fill={bg} />
      {children}
    </svg>
  );
}

function Floor({ y = 760, color = P.sand }: { y?: number; color?: string }) {
  return <rect x="0" y={y} width="800" height={1000 - y} fill={color} opacity="0.55" />;
}

function Sun({ cx = 600, cy = 230, r = 120, color = P.gold }) {
  return <circle cx={cx} cy={cy} r={r} fill={color} opacity="0.35" />;
}

function ThrowScene() {
  return (
    <Frame bg={P.bgWarm}>
      <Sun />
      <Floor />
      {/* sofa arm */}
      <rect x="120" y="520" width="560" height="240" rx="26" fill={P.charcoal} />
      <rect x="120" y="470" width="150" height="290" rx="30" fill={P.charcoal} />
      {/* draped throw */}
      <path
        d="M250 480 C 330 470 520 470 640 520 L 660 800 C 560 780 420 820 300 790 L 250 700 Z"
        fill={P.linen}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${270 + i * 6} ${520 + i * 40} C 400 ${510 + i * 40} 520 ${540 + i * 40} 650 ${560 + i * 40}`}
          stroke={P.sand}
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
      ))}
      {/* fringe */}
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1={300 + i * 16}
          y1={792 - i * 0.6}
          x2={296 + i * 16}
          y2={846 - i * 0.6}
          stroke={P.linen}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
      {/* side table + vase */}
      <rect x="690" y="640" width="14" height="180" fill={P.walnut} />
      <ellipse cx="697" cy="640" rx="60" ry="10" fill={P.walnutLight} />
      <path d="M672 636 C 660 580 724 580 722 636 Z" fill={P.cream} />
      <path d="M697 584 C 690 540 700 520 716 500" stroke={P.goldDeep} strokeWidth="3" fill="none" />
    </Frame>
  );
}

function PourOverScene() {
  return (
    <Frame bg={P.bgIvory}>
      <Sun cx={200} cy={220} r={140} />
      <Floor y={740} />
      {/* cup */}
      <path d="M270 640 L 530 640 L 505 810 C 500 840 300 840 295 810 Z" fill={P.cream} />
      <path d="M530 680 C 600 670 610 770 520 770" stroke={P.cream} strokeWidth="22" fill="none" strokeLinecap="round" />
      {/* dripper cone */}
      <path d="M230 470 L 570 470 L 470 640 L 330 640 Z" fill={P.cream} stroke={P.sand} strokeWidth="3" />
      <rect x="215" y="450" width="370" height="30" rx="8" fill={P.cream} stroke={P.sand} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={300 + i * 50} y1="480" x2={345 + i * 30} y2="635" stroke={P.sand} strokeWidth="3" />
      ))}
      {/* drips */}
      <circle cx="400" cy="680" r="7" fill={P.goldDeep} />
      <circle cx="400" cy="722" r="5" fill={P.goldDeep} opacity="0.6" />
      {/* filter paper */}
      <path d="M290 430 L 510 430 L 470 470 L 330 470 Z" fill="#fffdf7" stroke={P.sand} strokeWidth="2" />
      {/* kettle shadow */}
      <ellipse cx="400" cy="846" rx="260" ry="14" fill={P.ink} opacity="0.12" />
    </Frame>
  );
}

function CubesScene() {
  const cube = (x: number, y: number, w: number, h: number, fill: string, rot = 0) => (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <rect x={x} y={y} width={w} height={h} rx="22" fill={fill} />
      <rect x={x + 18} y={y + 18} width={w - 36} height="16" rx="8" fill={P.ink} opacity="0.18" />
      <line x1={x + 30} y1={y + 70} x2={x + w - 30} y2={y + 70} stroke={P.cream} strokeWidth="3" opacity="0.5" />
      <circle cx={x + w - 34} cy={y + 26} r="7" fill={P.gold} />
    </g>
  );
  return (
    <Frame bg={P.bgDeep}>
      <Sun cx={620} cy={210} r={130} />
      <rect x="0" y="780" width="800" height="220" fill="#171513" />
      {cube(130, 560, 360, 220, P.stone)}
      {cube(300, 380, 320, 190, P.charcoal, -2)}
      {cube(180, 250, 260, 150, P.sand, 3)}
      {/* luggage tag */}
      <path d="M600 640 L 690 640 L 720 690 L 690 740 L 600 740 Z" fill={P.cream} />
      <circle cx="623" cy="690" r="9" fill={P.bgDeep} />
      <path d="M600 690 C 540 690 520 620 470 610" stroke={P.gold} strokeWidth="4" fill="none" />
    </Frame>
  );
}

function TrayScene() {
  return (
    <Frame bg={P.bgWarm}>
      <Sun cx={620} cy={200} r={110} />
      <Floor y={720} color={P.walnutLight} />
      {/* tray body */}
      <path d="M130 560 L 670 560 L 640 720 L 160 720 Z" fill={P.walnut} />
      <rect x="130" y="545" width="540" height="22" rx="6" fill={P.walnutLight} />
      {/* dividers */}
      <rect x="300" y="565" width="10" height="150" fill={P.walnutLight} />
      <rect x="480" y="565" width="10" height="150" fill={P.walnutLight} />
      {/* pens */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={170 + i * 36} y={430 - i * 14} width="14" height="190" rx="5" fill={i === 1 ? P.gold : P.ink} transform={`rotate(${-6 + i * 5} ${177 + i * 36} 600)`} />
      ))}
      {/* notebook */}
      <rect x="325" y="500" width="130" height="190" rx="6" fill={P.cream} />
      <line x1="345" y1="540" x2="435" y2="540" stroke={P.sand} strokeWidth="3" />
      <line x1="345" y1="566" x2="415" y2="566" stroke={P.sand} strokeWidth="3" />
      {/* clip + small items */}
      <circle cx="560" cy="650" r="34" fill={P.gold} />
      <circle cx="560" cy="650" r="20" fill={P.walnut} />
      <rect x="520" y="590" width="80" height="20" rx="10" fill={P.cream} />
      {/* plant */}
      <path d="M730 740 C 700 640 760 600 740 520" stroke={P.goldDeep} strokeWidth="5" fill="none" />
      <ellipse cx="716" cy="640" rx="10" ry="26" fill={P.goldDeep} opacity="0.7" transform="rotate(-24 716 640)" />
    </Frame>
  );
}

function CategoryScene({ kind }: { kind: SceneKind }) {
  const map: Record<string, React.ReactNode> = {
    home: <ThrowScene />,
    kitchen: <PourOverScene />,
    travel: <CubesScene />,
    desk: <TrayScene />,
  };
  return <>{map[kind]}</>;
}

export function Scene({ kind }: { kind: SceneKind }) {
  switch (kind) {
    case "throw":
      return <ThrowScene />;
    case "pourover":
      return <PourOverScene />;
    case "cubes":
      return <CubesScene />;
    case "tray":
      return <TrayScene />;
    default:
      return <CategoryScene kind={kind} />;
  }
}

/** Resolves `scene:<kind>` image sources; real files use next/image elsewhere. */
export function isScene(src: string): src is `scene:${SceneKind}` {
  return src.startsWith("scene:");
}
export function sceneKind(src: string): SceneKind {
  return src.replace("scene:", "") as SceneKind;
}
