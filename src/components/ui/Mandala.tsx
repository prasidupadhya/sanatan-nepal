export default function Mandala() {
  return (
    <svg className="mandala" viewBox="0 0 600 600" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {[90, 130, 195, 235, 275].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} />
        ))}
        {Array.from({ length: 24 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 15} 300 300)`}>
            <path d="M300 25 Q365 125 300 205 Q235 125 300 25Z" />
            <path d="M300 105 Q385 235 300 290 Q215 235 300 105Z" />
            <circle cx="300" cy="47" r="5" />
          </g>
        ))}
      </g>
      <text
        x="300"
        y="323"
        textAnchor="middle"
        fill="currentColor"
        fontSize="78"
      >
        ॐ
      </text>
    </svg>
  );
}
