"use client";

export default function AbstractVisual() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital rings */}
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="35"
          fill="none"
          stroke="#D97706"
          strokeWidth="0.8"
          opacity="0.3"
          transform="rotate(-20 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="45"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="0.6"
          opacity="0.2"
          transform="rotate(30 100 100)"
        />
        <ellipse
          cx="100"
          cy="100"
          rx="60"
          ry="55"
          fill="none"
          stroke="#D97706"
          strokeWidth="0.5"
          opacity="0.15"
          transform="rotate(-50 100 100)"
        />

        {/* Connection lines */}
        <line x1="60" y1="70" x2="130" y2="90" stroke="#D97706" strokeWidth="0.5" opacity="0.2" />
        <line x1="80" y1="120" x2="140" y2="80" stroke="#3B82F6" strokeWidth="0.5" opacity="0.15" />
        <line x1="100" y1="55" x2="75" y2="130" stroke="#D97706" strokeWidth="0.4" opacity="0.12" />

        {/* Nodes */}
        <circle cx="100" cy="100" r="6" fill="#D97706" opacity="0.7" />
        <circle cx="100" cy="100" r="12" fill="none" stroke="#D97706" strokeWidth="0.5" opacity="0.3" />

        <circle cx="60" cy="70" r="3.5" fill="#1A1A1A" opacity="0.6" />
        <circle cx="130" cy="90" r="3" fill="#D97706" opacity="0.5" />
        <circle cx="80" cy="130" r="2.5" fill="#3B82F6" opacity="0.4" />
        <circle cx="140" cy="75" r="2" fill="#1A1A1A" opacity="0.4" />
        <circle cx="75" cy="100" r="2" fill="#D97706" opacity="0.35" />
        <circle cx="120" cy="120" r="2.5" fill="#3B82F6" opacity="0.3" />
        <circle cx="100" cy="55" r="2" fill="#D97706" opacity="0.4" />
        <circle cx="55" cy="110" r="1.5" fill="#1A1A1A" opacity="0.25" />
        <circle cx="145" cy="105" r="1.5" fill="#D97706" opacity="0.25" />
      </svg>
    </div>
  );
}
