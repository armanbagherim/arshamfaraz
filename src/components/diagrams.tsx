import React from "react";

const INK = "#1c1a16";
const GOLD = "#b58a45";
const SOFT = "#8a857a";

/** Traction system schematic. */
export function TractionDiagram() {
  return (
    <svg viewBox="0 0 520 560" style={{ width: "100%", height: "auto", direction: "ltr" }}>
      <defs>
        <marker id="arrowT" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7" fill="none" stroke={GOLD} strokeWidth="1.1" />
        </marker>
      </defs>
      {/* machine room */}
      <rect x="30" y="26" width="460" height="104" fill="none" stroke={INK} strokeWidth="1.2" />
      <text x="44" y="44" fontSize="11" fill={SOFT}>موتورخانه</text>
      {/* motor + sheave */}
      <rect x="150" y="62" width="86" height="46" fill="none" stroke={INK} strokeWidth="1.2" />
      <text x="193" y="90" fontSize="10.5" fill={INK} textAnchor="middle">موتور</text>
      <circle cx="300" cy="85" r="24" fill="none" stroke={GOLD} strokeWidth="1.4" />
      <circle cx="300" cy="85" r="3" fill={GOLD} />
      <text x="300" y="46" fontSize="10.5" fill={INK} textAnchor="middle">قرقره رانش</text>
      <line x1="236" y1="85" x2="276" y2="85" stroke={INK} strokeWidth="1.2" />
      {/* control cabinet */}
      <rect x="404" y="58" width="66" height="52" fill="none" stroke={INK} strokeWidth="1.2" />
      <text x="437" y="88" fontSize="10.5" fill={INK} textAnchor="middle">کنترلر</text>
      {/* shaft */}
      <line x1="30" y1="130" x2="30" y2="530" stroke={INK} strokeWidth="1.2" />
      <line x1="490" y1="130" x2="490" y2="530" stroke={INK} strokeWidth="1.2" />
      <line x1="30" y1="530" x2="490" y2="530" stroke={INK} strokeWidth="1.2" />
      <text x="44" y="548" fontSize="10" fill={SOFT}>چاهک</text>
      {/* ropes */}
      <line x1="286" y1="100" x2="182" y2="330" stroke={INK} strokeWidth="1.1" />
      <line x1="300" y1="100" x2="300" y2="318" stroke={INK} strokeWidth="1.1" />
      <line x1="314" y1="100" x2="410" y2="200" stroke={INK} strokeWidth="1.1" />
      {/* counterweight */}
      <rect x="96" y="330" width="86" height="120" fill="none" stroke={INK} strokeWidth="1.2" />
      <line x1="96" y1="356" x2="182" y2="356" stroke={SOFT} strokeWidth="0.8" />
      <line x1="96" y1="424" x2="182" y2="424" stroke={SOFT} strokeWidth="0.8" />
      <text x="139" y="396" fontSize="10.5" fill={INK} textAnchor="middle">وزنه تعادل</text>
      {/* car */}
      <rect x="330" y="200" width="160" height="170" fill="none" stroke={GOLD} strokeWidth="1.5" />
      <rect x="348" y="222" width="124" height="110" fill="none" stroke={SOFT} strokeWidth="0.9" />
      <text x="410" y="284" fontSize="11" fill={INK} textAnchor="middle">کابین</text>
      <text x="410" y="300" fontSize="9.5" fill={SOFT} textAnchor="middle">قاب و فریم حمل بار</text>
      <line x1="410" y1="200" x2="410" y2="184" stroke={INK} strokeWidth="1" />
      <text x="412" y="180" fontSize="9.5" fill={SOFT}>شِگ و کابل فولادی</text>
      {/* buffer */}
      <rect x="392" y="498" width="36" height="22" fill="none" stroke={INK} strokeWidth="1.1" />
      <text x="410" y="544" fontSize="9.5" fill={SOFT} textAnchor="middle">بافر</text>
      {/* flow */}
      <path d="M437 110 L437 190" fill="none" stroke={GOLD} strokeWidth="1" markerEnd="url(#arrowT)" />
      <text x="446" y="156" fontSize="9" fill={GOLD}>فرمان حرکت</text>
    </svg>
  );
}

/** Hydraulic system schematic. */
export function HydraulicDiagram() {
  return (
    <svg viewBox="0 0 520 560" style={{ width: "100%", height: "auto", direction: "ltr" }}>
      <defs>
        <marker id="arrowH" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7" fill="none" stroke={GOLD} strokeWidth="1.1" />
        </marker>
      </defs>
      {/* ground */}
      <line x1="40" y1="500" x2="500" y2="500" stroke={INK} strokeWidth="1.2" />
      <text x="44" y="518" fontSize="10" fill={SOFT}>چاهک</text>
      {/* car */}
      <rect x="150" y="250" width="180" height="200" fill="none" stroke={GOLD} strokeWidth="1.5" />
      <rect x="170" y="274" width="140" height="130" fill="none" stroke={SOFT} strokeWidth="0.9" />
      <text x="240" y="346" fontSize="11" fill={INK} textAnchor="middle">کابین</text>
      <text x="240" y="362" fontSize="9.5" fill={SOFT} textAnchor="middle">سوار بر پیستون</text>
      {/* cylinder */}
      <rect x="222" y="384" width="36" height="116" fill="none" stroke={INK} strokeWidth="1.2" />
      <rect x="230" y="430" width="20" height="70" fill={SOFT} opacity="0.18" />
      <text x="262" y="452" fontSize="10" fill={SOFT}>جک و پیستون</text>
      {/* pump unit */}
      <rect x="380" y="330" width="110" height="150" fill="none" stroke={INK} strokeWidth="1.2" />
      <rect x="398" y="352" width="74" height="40" fill="none" stroke={INK} strokeWidth="1" />
      <text x="435" y="376" fontSize="10" fill={INK} textAnchor="middle">پمپ + موتور</text>
      <rect x="398" y="410" width="74" height="36" fill="none" stroke={INK} strokeWidth="1" />
      <text x="435" y="432" fontSize="10" fill={INK} textAnchor="middle">شیر کنترلی</text>
      <rect x="398" y="440" width="74" height="26" fill="none" stroke={SOFT} strokeWidth="0.9" />
      <text x="435" y="458" fontSize="9.5" fill={SOFT} textAnchor="middle">مخزن روغن</text>
      {/* pipe */}
      <line x1="380" y1="440" x2="258" y2="440" stroke={GOLD} strokeWidth="1.2" markerEnd="url(#arrowH)" />
      <text x="298" y="432" fontSize="9" fill={GOLD}>روغن پرفشار</text>
      {/* controller */}
      <rect x="380" y="250" width="110" height="56" fill="none" stroke={INK} strokeWidth="1.2" />
      <text x="435" y="282" fontSize="10.5" fill={INK} textAnchor="middle">کنترلر</text>
      <line x1="435" y1="306" x2="435" y2="330" stroke={GOLD} strokeWidth="1" markerEnd="url(#arrowH)" />
      {/* travel note */}
      <path d="M120 250 L120 450" fill="none" stroke={SOFT} strokeWidth="0.8" strokeDasharray="3 4" />
      <line x1="114" y1="250" x2="126" y2="250" stroke={SOFT} strokeWidth="0.8" />
      <line x1="114" y1="450" x2="126" y2="450" stroke={SOFT} strokeWidth="0.8" />
      <text x="112" y="354" fontSize="9.5" fill={SOFT} textAnchor="end">مسیر حرکت</text>
    </svg>
  );
}

/** Door opening types: three doorways with leaf layout. */
export function DoorDiagram() {
  const doors = [
    {
      t: "بازشونده از وسط",
      x: 20,
      panels: (
        <>
          <rect x="8" y="22" width="58" height="120" fill={INK} opacity="0.08" stroke={INK} strokeWidth="1" />
          <rect x="74" y="22" width="58" height="120" fill={INK} opacity="0.08" stroke={INK} strokeWidth="1" />
        </>
      ),
    },
    {
      t: "تلسکوپی دومنله",
      x: 190,
      panels: (
        <>
          <rect x="8" y="22" width="28" height="120" fill={INK} opacity="0.06" stroke={INK} strokeWidth="0.9" />
          <rect x="36" y="22" width="30" height="120" fill={INK} opacity="0.13" stroke={INK} strokeWidth="0.9" />
          <rect x="74" y="22" width="28" height="120" fill={INK} opacity="0.06" stroke={INK} strokeWidth="0.9" />
          <rect x="102" y="22" width="30" height="120" fill={INK} opacity="0.13" stroke={INK} strokeWidth="0.9" />
        </>
      ),
    },
    {
      t: "لغزنده تک‌پنل",
      x: 360,
      panels: (
        <>
          <rect x="8" y="22" width="124" height="120" fill={INK} opacity="0.08" stroke={INK} strokeWidth="1" />
          <line x1="8" y1="82" x2="132" y2="82" stroke={GOLD} strokeWidth="1.4" />
        </>
      ),
    },
  ];
  return (
    <svg viewBox="0 0 520 220" style={{ width: "100%", height: "auto", direction: "rtl" }}>
      {doors.map((d, i) => (
        <g key={i} transform={`translate(${d.x},20)`}>
          <rect x="0" y="10" width="140" height="160" fill="none" stroke={INK} strokeWidth="1.2" />
          <rect x="0" y="10" width="140" height="6" fill={GOLD} opacity="0.55" />
          {d.panels}
          <text x="70" y="188" fontSize="11" fill={INK} textAnchor="middle">
            {d.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
