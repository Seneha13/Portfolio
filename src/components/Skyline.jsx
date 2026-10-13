// Simple Dubai skyline: Burj Khalifa, Burj Al Arab, Dubai Frame and towers
export default function Skyline() {
  return (
    <div className="sky" aria-hidden="true">
      <svg viewBox="0 0 1200 160" preserveAspectRatio="none" fill="currentColor">
        <rect x="0" y="130" width="1200" height="30" />
        {/* towers */}
        <rect x="20" y="96" width="36" height="64" /><rect x="62" y="70" width="28" height="90" />
        <rect x="96" y="104" width="40" height="56" /><rect x="150" y="82" width="30" height="78" />
        {/* Dubai Frame */}
        <rect x="215" y="62" width="9" height="98" /><rect x="268" y="62" width="9" height="98" /><rect x="215" y="54" width="62" height="12" />
        <rect x="300" y="92" width="34" height="68" /><rect x="340" y="74" width="26" height="86" />
        {/* Burj Khalifa */}
        <polygon points="560,160 560,92 568,66 574,44 580,26 585,0 590,26 596,44 602,66 610,92 610,160" />
        <rect x="520" y="86" width="28" height="74" /><rect x="622" y="76" width="30" height="84" />
        <rect x="664" y="100" width="40" height="60" /><rect x="712" y="64" width="26" height="96" />
        {/* Burj Al Arab */}
        <path d="M800 160 L800 78 Q812 44 862 18 Q854 70 854 160 Z" /><rect x="858" y="104" width="6" height="56" />
        <rect x="890" y="88" width="34" height="72" /><rect x="930" y="108" width="40" height="52" />
        <rect x="980" y="72" width="28" height="88" /><rect x="1016" y="98" width="36" height="62" />
        <rect x="1062" y="80" width="30" height="80" /><rect x="1100" y="104" width="44" height="56" />
        <rect x="1150" y="90" width="30" height="70" />
      </svg>
    </div>
  )
}
