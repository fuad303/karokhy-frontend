const MountainBackground = () => {
  return (
    <svg
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* === SKY === */}
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f4f8fc" />
          <stop offset="100%" stopColor="#eaf1f8" />
        </linearGradient>

        {/* === SOFT BLUE AURA === */}
        <radialGradient id="softAura" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#0070f3" stopOpacity="0.08" />
          <stop offset="60%" stopColor="#0070f3" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* === ATMOSPHERIC FOG === */}
        <linearGradient id="fogGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* === MOUNTAIN LAYERS === */}
        <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef4fa" />
          <stop offset="100%" stopColor="#dde8f2" />
        </linearGradient>

        <linearGradient id="mountainMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbe7f2" />
          <stop offset="100%" stopColor="#c3d5e6" />
        </linearGradient>

        <linearGradient id="mountainNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8cee3" />
          <stop offset="100%" stopColor="#9fb8cf" />
        </linearGradient>
      </defs>

      {/* === BACKGROUND SKY === */}
      <rect width="1920" height="1080" fill="url(#skyGradient)" />
      <rect width="1920" height="1080" fill="url(#softAura)" />

      {/* === DISTANT FOG === */}
      <rect y="300" width="1920" height="350" fill="url(#fogGradient)" />

      {/* === FAR MOUNTAINS === */}
      <path
        d="M0 520 Q 420 430 840 520 T 1680 500 Q 1860 520 1920 540 L1920 1080 L0 1080 Z"
        fill="url(#mountainFar)"
      >
        <animate
          attributeName="d"
          dur="40s"
          repeatCount="indefinite"
          values="
            M0 520 Q 420 430 840 520 T 1680 500 Q 1860 520 1920 540 L1920 1080 L0 1080 Z;
            M0 510 Q 420 420 840 510 T 1680 490 Q 1860 510 1920 530 L1920 1080 L0 1080 Z;
            M0 520 Q 420 430 840 520 T 1680 500 Q 1860 520 1920 540 L1920 1080 L0 1080 Z
          "
        />
      </path>

      {/* === MID MOUNTAINS === */}
      <path
        d="M0 650 Q 320 560 640 640 Q 960 600 1280 650 Q 1600 680 1920 700 L1920 1080 L0 1080 Z"
        fill="url(#mountainMid)"
      >
        <animate
          attributeName="d"
          dur="28s"
          repeatCount="indefinite"
          values="
            M0 650 Q 320 560 640 640 Q 960 600 1280 650 Q 1600 680 1920 700 L1920 1080 L0 1080 Z;
            M0 640 Q 320 550 640 630 Q 960 590 1280 640 Q 1600 670 1920 690 L1920 1080 L0 1080 Z;
            M0 650 Q 320 560 640 640 Q 960 600 1280 650 Q 1600 680 1920 700 L1920 1080 L0 1080 Z
          "
        />
      </path>

      {/* === FOREGROUND MOUNTAINS === */}
      <path
        d="M0 780 Q 260 720 520 780 Q 780 760 1040 800 Q 1300 780 1560 820 Q 1760 800 1920 840 L1920 1080 L0 1080 Z"
        fill="url(#mountainNear)"
      >
        <animate
          attributeName="d"
          dur="18s"
          repeatCount="indefinite"
          values="
            M0 780 Q 260 720 520 780 Q 780 760 1040 800 Q 1300 780 1560 820 Q 1760 800 1920 840 L1920 1080 L0 1080 Z;
            M0 770 Q 260 710 520 770 Q 780 750 1040 790 Q 1300 770 1560 810 Q 1760 790 1920 830 L1920 1080 L0 1080 Z;
            M0 780 Q 260 720 520 780 Q 780 760 1040 800 Q 1300 780 1560 820 Q 1760 800 1920 840 L1920 1080 L0 1080 Z
          "
        />
      </path>

      {/* === BOTTOM PRIMARY GLOW === */}
      <rect y="950" width="1920" height="130" fill="#0070f3" opacity="0.08">
        <animate
          attributeName="opacity"
          dur="10s"
          repeatCount="indefinite"
          values="0.05;0.1;0.05"
        />
      </rect>
    </svg>
  );
};

export default MountainBackground;
