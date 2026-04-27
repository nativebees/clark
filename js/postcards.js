// ============================================================
// Pacific Loop Postcards — Vintage Tourism Poster Style
// Each function returns an SVG string.
// All postcards: 400 x 240 viewBox, banner at bottom.
// ============================================================

function buildPostcard(scene, name, defs = '') {
  return `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="postcard">
    <defs>${defs}</defs>
    ${scene}
    <g transform="translate(200,220)">
      <rect x="-160" y="-18" width="320" height="36" fill="#faf3e0" opacity="0.95" stroke="#2a1f17" stroke-width="1"/>
      <text x="0" y="6" text-anchor="middle" font-family="Georgia, serif" font-size="20" font-weight="bold" fill="#2a1f17" letter-spacing="3" font-style="italic">${name}</text>
    </g>
  </svg>`;
}

const postcards = {

  // ============================================================
  // PASO ROBLES — Vineyard hills at sunset
  // ============================================================
  paso: buildPostcard(`
    <rect width="400" height="240" fill="url(#paso_sky)"/>
    <!-- Distant rolling hills -->
    <path d="M0,120 Q60,100 120,115 Q180,95 240,110 Q300,95 360,115 L400,108 L400,160 L0,160 Z" fill="#a07a5a" opacity="0.75"/>
    <path d="M0,140 Q80,120 160,135 Q240,118 320,138 L400,130 L400,170 L0,170 Z" fill="#8a6a4a"/>
    <!-- Sun -->
    <circle cx="320" cy="80" r="28" fill="#f4c878" opacity="0.95"/>
    <circle cx="320" cy="80" r="40" fill="#f4c878" opacity="0.25"/>
    <!-- Clouds -->
    <ellipse cx="100" cy="55" rx="38" ry="8" fill="#faf3e0" opacity="0.7"/>
    <ellipse cx="125" cy="60" rx="22" ry="5" fill="#faf3e0" opacity="0.6"/>
    <!-- Vineyard rows (foreground) -->
    <rect y="160" width="400" height="80" fill="#7a8a4a"/>
    <g stroke="#3a4a2a" stroke-width="2" opacity="0.8">
      ${Array.from({length: 12}, (_, i) => `<line x1="${i*35}" y1="170" x2="${i*35 - 20}" y2="220"/>`).join('')}
    </g>
    <g fill="#5a6a3a" opacity="0.9">
      ${Array.from({length: 12}, (_, i) => Array.from({length: 6}, (_, j) =>
        `<circle cx="${i*35 - j*4}" cy="${175 + j*8}" r="4"/>`
      ).join('')).join('')}
    </g>
    <!-- Cypress accent trees on hill -->
    <ellipse cx="80" cy="135" rx="4" ry="14" fill="#3a4a2a"/>
    <ellipse cx="92" cy="138" rx="3" ry="11" fill="#3a4a2a"/>
    <ellipse cx="280" cy="128" rx="4" ry="14" fill="#3a4a2a"/>
  `, 'PASO ROBLES', `
    <linearGradient id="paso_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f4c8a0"/>
      <stop offset="60%" stop-color="#f0b890"/>
      <stop offset="100%" stop-color="#e8a878"/>
    </linearGradient>
  `),

  // ============================================================
  // CARMEL — Cypress tree on the beach with ocean
  // ============================================================
  carmel: buildPostcard(`
    <rect width="400" height="240" fill="url(#carmel_sky)"/>
    <!-- Distant headland -->
    <path d="M0,140 Q60,125 120,135 Q200,115 280,130 L400,125 L400,160 L0,160 Z" fill="#7a8a6a" opacity="0.75"/>
    <!-- Ocean -->
    <rect y="155" width="400" height="40" fill="url(#carmel_water)"/>
    <!-- Wave foam -->
    <path d="M0,170 Q100,165 200,172 T400,170" stroke="#faf3e0" stroke-width="1.2" fill="none" opacity="0.6"/>
    <path d="M0,180 Q100,176 200,182 T400,180" stroke="#faf3e0" stroke-width="0.8" fill="none" opacity="0.5"/>
    <!-- Sandy beach -->
    <rect y="195" width="400" height="45" fill="#e8d4a8"/>
    <!-- Beach texture lines -->
    <path d="M0,210 Q100,206 200,212 T400,210" stroke="#c8b488" stroke-width="0.6" fill="none" opacity="0.6"/>
    <!-- Rocky outcropping the cypress sits on (subtle, not dominant) -->
    <path d="M75,210 Q105,200 145,205 Q170,200 185,210 L185,225 L75,225 Z" fill="#7a6a4a" opacity="0.85"/>
    <path d="M75,218 Q105,212 145,215 Q170,212 185,218 L185,225 L75,225 Z" fill="#5a4a2a" opacity="0.85"/>
    <!-- Iconic Lone Cypress (signature element) — wind-swept silhouette -->
    <g transform="translate(120,0)">
      <!-- Gnarled trunk leaning into the wind -->
      <path d="M-2,200 Q-5,160 -8,130 Q-12,100 -8,80 Q-4,75 0,78 Q4,90 8,110 Q12,140 10,170 Q8,190 4,200 Z" fill="#2a1810"/>
      <!-- Lower branches -->
      <path d="M-6,120 Q-20,118 -35,115 Q-22,122 -8,123 Z" fill="#2a1810"/>
      <path d="M5,115 Q22,108 38,112 Q24,118 8,118 Z" fill="#2a1810"/>
      <!-- Wind-swept flat canopy (the iconic shape) -->
      <ellipse cx="0" cy="78" rx="55" ry="7" fill="#3a4a2a"/>
      <ellipse cx="-25" cy="73" rx="22" ry="6" fill="#4a5a3a"/>
      <ellipse cx="20" cy="73" rx="28" ry="6" fill="#4a5a3a"/>
      <ellipse cx="-40" cy="80" rx="15" ry="4" fill="#3a4a2a"/>
      <ellipse cx="45" cy="80" rx="18" ry="4" fill="#3a4a2a"/>
      <!-- Top texture suggesting branches -->
      <line x1="-30" y1="78" x2="-25" y2="68" stroke="#2a3a1a" stroke-width="0.6"/>
      <line x1="-15" y1="76" x2="-12" y2="68" stroke="#2a3a1a" stroke-width="0.6"/>
      <line x1="0" y1="75" x2="2" y2="65" stroke="#2a3a1a" stroke-width="0.6"/>
      <line x1="20" y1="76" x2="22" y2="68" stroke="#2a3a1a" stroke-width="0.6"/>
      <line x1="35" y1="78" x2="32" y2="70" stroke="#2a3a1a" stroke-width="0.6"/>
    </g>
    <!-- Sun in sky -->
    <circle cx="320" cy="55" r="22" fill="#f8d870"/>
    <circle cx="320" cy="55" r="32" fill="#f8d870" opacity="0.3"/>
    <!-- Distant sailboat -->
    <g transform="translate(280,148)">
      <polygon points="0,0 0,-15 8,0" fill="#faf3e0"/>
      <polygon points="0,0 0,-12 -6,0" fill="#faf3e0" opacity="0.85"/>
      <line x1="-3" y1="0" x2="6" y2="0" stroke="#2a1f17" stroke-width="0.8"/>
    </g>
    <!-- Birds -->
    <path d="M180,55 q3,-3 6,0 q3,-3 6,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
    <path d="M210,65 q2.5,-2 5,0 q2.5,-2 5,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
  `, 'CARMEL-BY-THE-SEA', `
    <linearGradient id="carmel_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a8c8d8"/>
      <stop offset="100%" stop-color="#e8d4b0"/>
    </linearGradient>
    <linearGradient id="carmel_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5a8a9a"/>
      <stop offset="100%" stop-color="#3d6a7a"/>
    </linearGradient>
  `),

  // ============================================================
  // PCH (San Francisco) — Golden Gate Bridge
  // ============================================================
  pch: buildPostcard(`
    <rect width="400" height="240" fill="url(#sf_sky)"/>
    <!-- Distant headlands -->
    <path d="M0,135 Q60,120 120,130 Q180,115 240,135 Q300,120 360,138 L400,130 L400,165 L0,165 Z" fill="#7a8a6a" opacity="0.75"/>
    <path d="M0,145 Q80,135 160,143 Q240,130 320,145 L400,143 L400,170 L0,170 Z" fill="#6a7a5a" opacity="0.9"/>
    <!-- Clouds -->
    <ellipse cx="80" cy="50" rx="38" ry="9" fill="#faf3e0" opacity="0.75"/>
    <ellipse cx="105" cy="55" rx="25" ry="6" fill="#faf3e0" opacity="0.65"/>
    <ellipse cx="280" cy="40" rx="42" ry="10" fill="#faf3e0" opacity="0.7"/>
    <ellipse cx="312" cy="48" rx="28" ry="7" fill="#faf3e0" opacity="0.55"/>
    <!-- Bay water -->
    <rect y="165" width="400" height="40" fill="url(#sf_water)"/>
    <!-- Bridge tower 1 (left, larger) -->
    <g transform="translate(100,0)">
      <rect x="-5" y="50" width="10" height="115" fill="#a04020"/>
      <rect x="-8" y="50" width="16" height="6" fill="#7a2810"/>
      <rect x="-7" y="78" width="14" height="3" fill="#7a2810"/>
      <rect x="-7" y="105" width="14" height="3" fill="#7a2810"/>
      <rect x="-7" y="132" width="14" height="3" fill="#7a2810"/>
      <polygon points="-8,50 8,50 5,42 -5,42" fill="#7a2810"/>
    </g>
    <!-- Bridge tower 2 (right, smaller for perspective) -->
    <g transform="translate(290,0)">
      <rect x="-4" y="72" width="8" height="93" fill="#a04020"/>
      <rect x="-6" y="72" width="12" height="5" fill="#7a2810"/>
      <rect x="-5" y="92" width="10" height="2" fill="#7a2810"/>
      <rect x="-5" y="115" width="10" height="2" fill="#7a2810"/>
      <rect x="-5" y="138" width="10" height="2" fill="#7a2810"/>
      <polygon points="-6,72 6,72 4,66 -4,66" fill="#7a2810"/>
    </g>
    <!-- Main suspension cables -->
    <path d="M100,50 Q195,108 290,72" stroke="#a04020" stroke-width="2.5" fill="none"/>
    <path d="M100,55 Q195,113 290,77" stroke="#a04020" stroke-width="1.8" fill="none" opacity="0.7"/>
    <!-- Roadway -->
    <rect x="40" y="115" width="320" height="5" fill="#a04020"/>
    <rect x="40" y="120" width="320" height="2" fill="#7a2810"/>
    <!-- Vertical suspension lines -->
    <g stroke="#a04020" stroke-width="0.9" opacity="0.85">
      <line x1="120" y1="62" x2="120" y2="115"/>
      <line x1="140" y1="75" x2="140" y2="115"/>
      <line x1="160" y1="86" x2="160" y2="115"/>
      <line x1="180" y1="94" x2="180" y2="115"/>
      <line x1="200" y1="98" x2="200" y2="115"/>
      <line x1="220" y1="96" x2="220" y2="115"/>
      <line x1="240" y1="90" x2="240" y2="115"/>
      <line x1="260" y1="80" x2="260" y2="115"/>
      <line x1="280" y1="70" x2="280" y2="115"/>
    </g>
    <!-- Foreground hill silhouettes -->
    <path d="M0,200 Q40,180 80,195 Q120,175 160,190 L160,240 L0,240 Z" fill="#7a6a3f"/>
    <path d="M0,215 Q40,200 80,210 Q120,195 160,210 L160,240 L0,240 Z" fill="#5a4a2a"/>
    <path d="M250,210 Q300,195 350,205 Q380,200 400,210 L400,240 L250,240 Z" fill="#7a6a3f"/>
  `, 'SAN FRANCISCO', `
    <linearGradient id="sf_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d4c5a0"/>
      <stop offset="60%" stop-color="#e8d4a8"/>
      <stop offset="100%" stop-color="#f0d8a0"/>
    </linearGradient>
    <linearGradient id="sf_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5a8a9a"/>
      <stop offset="100%" stop-color="#3d6a7a"/>
    </linearGradient>
  `),

  // ============================================================
  // MARIN — Same scene from headlands side
  // ============================================================
  marin: buildPostcard(`
    <rect width="400" height="240" fill="url(#marin_sky)"/>
    <!-- Distant SF skyline (silhouette across the bay) -->
    <g fill="#5a4a3a" opacity="0.6">
      <rect x="240" y="115" width="6" height="20"/>
      <rect x="248" y="118" width="5" height="17"/>
      <rect x="255" y="110" width="7" height="25"/>
      <polygon points="262,110 268,100 262,135"/>
      <rect x="270" y="115" width="6" height="20"/>
      <rect x="278" y="120" width="5" height="15"/>
      <rect x="285" y="112" width="7" height="23"/>
      <rect x="294" y="118" width="5" height="17"/>
      <rect x="301" y="115" width="6" height="20"/>
      <rect x="309" y="120" width="5" height="15"/>
      <rect x="316" y="113" width="7" height="22"/>
    </g>
    <!-- Bay water -->
    <rect y="135" width="400" height="55" fill="url(#marin_water)"/>
    <!-- Distant Bridge (small in background) -->
    <g transform="translate(170,0)" opacity="0.65">
      <rect x="-2" y="100" width="4" height="40" fill="#a04020"/>
      <rect x="50" y="105" width="3" height="35" fill="#a04020"/>
      <path d="M0,100 Q26,118 51,105" stroke="#a04020" stroke-width="1.2" fill="none"/>
      <rect x="-10" y="125" width="70" height="2" fill="#a04020"/>
    </g>
    <!-- Foreground rolling Marin hills (golden California hills) -->
    <path d="M0,170 Q50,145 100,160 Q150,140 200,165 Q250,140 300,160 Q350,150 400,165 L400,240 L0,240 Z" fill="#c8a868"/>
    <path d="M0,185 Q60,165 120,180 Q180,160 240,180 Q300,165 360,180 L400,180 L400,240 L0,240 Z" fill="#a88848"/>
    <path d="M0,210 Q80,195 160,210 Q240,195 320,210 L400,210 L400,240 L0,240 Z" fill="#886820"/>
    <!-- Eucalyptus trees on hillside -->
    <g transform="translate(60,170)">
      <rect x="-1" y="0" width="2" height="30" fill="#3a2a1a"/>
      <ellipse cx="0" cy="-3" rx="10" ry="14" fill="#5a6a4a"/>
    </g>
    <g transform="translate(85,175)">
      <rect x="-1" y="0" width="2" height="25" fill="#3a2a1a"/>
      <ellipse cx="0" cy="-2" rx="8" ry="12" fill="#5a6a4a"/>
    </g>
    <g transform="translate(330,175)">
      <rect x="-1" y="0" width="2" height="28" fill="#3a2a1a"/>
      <ellipse cx="0" cy="-3" rx="9" ry="13" fill="#5a6a4a"/>
    </g>
    <!-- Sun -->
    <circle cx="60" cy="55" r="22" fill="#f4c878" opacity="0.9"/>
    <circle cx="60" cy="55" r="32" fill="#f4c878" opacity="0.25"/>
    <!-- Clouds -->
    <ellipse cx="200" cy="45" rx="35" ry="7" fill="#faf3e0" opacity="0.7"/>
    <ellipse cx="225" cy="50" rx="22" ry="5" fill="#faf3e0" opacity="0.55"/>
  `, 'MARIN HEADLANDS', `
    <linearGradient id="marin_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d8b890"/>
      <stop offset="100%" stop-color="#f0d4a0"/>
    </linearGradient>
    <linearGradient id="marin_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a7a8a"/>
      <stop offset="100%" stop-color="#3a6a7a"/>
    </linearGradient>
  `),

  // ============================================================
  // EUREKA / Avenue of the Giants — towering redwoods
  // ============================================================
  redwoods: buildPostcard(`
    <rect width="400" height="240" fill="url(#red_sky)"/>
    <!-- Light rays through forest -->
    <path d="M180,0 L160,240 L220,240 L240,0 Z" fill="#f8e8b0" opacity="0.25"/>
    <path d="M280,0 L260,240 L320,240 L340,0 Z" fill="#f8e8b0" opacity="0.18"/>
    <!-- Forest floor -->
    <rect y="195" width="400" height="45" fill="#3a2a1a"/>
    <path d="M0,195 Q100,190 200,198 T400,195" stroke="#5a3a1a" stroke-width="0.8" fill="none" opacity="0.6"/>
    <!-- Background redwood trunks (smaller, in distance) -->
    <rect x="0" y="40" width="18" height="160" fill="#4a2810" opacity="0.6"/>
    <rect x="380" y="50" width="20" height="150" fill="#4a2810" opacity="0.6"/>
    <rect x="160" y="60" width="14" height="140" fill="#3a1f08" opacity="0.5"/>
    <!-- Mid-ground trunks -->
    <rect x="55" y="20" width="32" height="180" fill="#5a3018"/>
    <ellipse cx="71" cy="20" rx="28" ry="18" fill="#3a4a2a" opacity="0.7"/>
    <rect x="320" y="15" width="36" height="185" fill="#5a3018"/>
    <ellipse cx="338" cy="15" rx="32" ry="20" fill="#3a4a2a" opacity="0.75"/>
    <!-- Hero foreground redwood (huge, dominates frame) -->
    <rect x="195" y="0" width="55" height="200" fill="#6a3a18"/>
    <!-- Bark texture on hero tree -->
    <line x1="200" y1="20" x2="200" y2="195" stroke="#4a2810" stroke-width="1.5" opacity="0.7"/>
    <line x1="210" y1="30" x2="210" y2="195" stroke="#4a2810" stroke-width="1" opacity="0.6"/>
    <line x1="220" y1="15" x2="220" y2="195" stroke="#4a2810" stroke-width="1.5" opacity="0.7"/>
    <line x1="230" y1="40" x2="230" y2="195" stroke="#4a2810" stroke-width="1" opacity="0.6"/>
    <line x1="240" y1="25" x2="240" y2="195" stroke="#4a2810" stroke-width="1.2" opacity="0.65"/>
    <!-- Tiny car on the road for scale -->
    <rect x="180" y="208" width="14" height="6" rx="1.5" fill="#a04020"/>
    <rect x="183" y="205" width="8" height="4" fill="#7a2810"/>
    <circle cx="183" cy="215" r="1.5" fill="#1a1a1a"/>
    <circle cx="191" cy="215" r="1.5" fill="#1a1a1a"/>
    <!-- Road surface -->
    <rect y="218" width="400" height="22" fill="#2a1f17"/>
    <line x1="0" y1="228" x2="400" y2="228" stroke="#f4c878" stroke-width="0.8" stroke-dasharray="8 6" opacity="0.6"/>
    <!-- Ferns at base -->
    <path d="M30,200 Q35,185 40,200 M35,200 Q40,180 45,200 M40,200 Q45,185 50,200" stroke="#3a5a2a" stroke-width="1" fill="none"/>
    <path d="M350,200 Q355,185 360,200 M355,200 Q360,180 365,200 M360,200 Q365,185 370,200" stroke="#3a5a2a" stroke-width="1" fill="none"/>
  `, 'AVENUE OF THE GIANTS', `
    <linearGradient id="red_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a4a2a"/>
      <stop offset="50%" stop-color="#5a6a3a"/>
      <stop offset="100%" stop-color="#3a2a1a"/>
    </linearGradient>
  `),

  // ============================================================
  // BANDON — Sea stacks and Face Rock at sunset
  // ============================================================
  bandon: buildPostcard(`
    <rect width="400" height="240" fill="url(#bandon_sky)"/>
    <!-- Soft moon (early evening, blue hour) -->
    <circle cx="320" cy="55" r="20" fill="#faf3e0" opacity="0.9"/>
    <circle cx="320" cy="55" r="28" fill="#faf3e0" opacity="0.2"/>
    <circle cx="316" cy="50" r="3" fill="#a8b8c8" opacity="0.5"/>
    <circle cx="324" cy="58" r="2" fill="#a8b8c8" opacity="0.4"/>
    <!-- Clouds -->
    <ellipse cx="80" cy="50" rx="40" ry="7" fill="#faf3e0" opacity="0.6"/>
    <ellipse cx="110" cy="55" rx="25" ry="5" fill="#faf3e0" opacity="0.5"/>
    <ellipse cx="200" cy="40" rx="35" ry="6" fill="#faf3e0" opacity="0.55"/>
    <!-- Distant horizon sea -->
    <rect y="125" width="400" height="50" fill="url(#bandon_water)"/>
    <!-- Wave lines on the open water -->
    <path d="M0,140 Q100,137 200,142 T400,140" stroke="#faf3e0" stroke-width="0.7" fill="none" opacity="0.4"/>
    <path d="M0,155 Q100,152 200,157 T400,155" stroke="#faf3e0" stroke-width="0.6" fill="none" opacity="0.35"/>
    <!-- Sea stacks (silhouettes against blue water) -->
    <path d="M40,160 L42,135 Q48,125 54,135 L52,160 Z" fill="#3a3548" opacity="0.85"/>
    <path d="M75,170 L77,110 Q85,90 95,105 Q98,130 95,170 Z" fill="#2d2838"/>
    <!-- Hero Face Rock — recognizable profile -->
    <path d="M125,175 L128,80 Q140,55 158,75 Q165,82 168,95 Q160,90 152,95 Q148,105 155,115 Q160,125 158,140 Q156,160 152,175 Z" fill="#1a1525"/>
    <path d="M260,175 L262,90 Q275,68 290,85 Q294,115 292,150 Q288,170 282,175 Z" fill="#2d2838"/>
    <path d="M325,170 L328,105 Q340,85 350,105 Q352,140 348,170 Z" fill="#3a3548" opacity="0.92"/>
    <path d="M360,165 L362,125 Q368,115 374,125 L372,165 Z" fill="#3a3548" opacity="0.85"/>
    <!-- Wet sand reflecting twilight sky -->
    <rect y="175" width="400" height="65" fill="url(#bandon_sand)"/>
    <!-- Reflections of sea stacks on wet sand -->
    <path d="M125,175 L128,200 Q140,210 158,200 L168,175 Z" fill="#2a2535" opacity="0.5"/>
    <path d="M260,175 L262,195 Q275,205 290,195 L292,175 Z" fill="#2a2535" opacity="0.5"/>
    <path d="M75,175 L77,193 Q85,200 95,193 L95,175 Z" fill="#2a2535" opacity="0.45"/>
    <!-- Wave foam at the shoreline -->
    <path d="M0,178 Q100,181 200,178 T400,178" stroke="#faf3e0" stroke-width="1" fill="none" opacity="0.7"/>
    <path d="M0,185 Q100,188 200,185 T400,185" stroke="#faf3e0" stroke-width="0.6" fill="none" opacity="0.5"/>
    <!-- Footprints in the sand -->
    <ellipse cx="200" cy="215" rx="2" ry="1.2" fill="#3a3528" opacity="0.6"/>
    <ellipse cx="206" cy="220" rx="2" ry="1.2" fill="#3a3528" opacity="0.6"/>
    <ellipse cx="212" cy="215" rx="2" ry="1.2" fill="#3a3528" opacity="0.6"/>
    <ellipse cx="218" cy="220" rx="2" ry="1.2" fill="#3a3528" opacity="0.6"/>
    <!-- Tiny dog paw prints alongside (Bowie!) -->
    <circle cx="225" cy="218" r="0.8" fill="#3a3528" opacity="0.6"/>
    <circle cx="231" cy="222" r="0.8" fill="#3a3528" opacity="0.6"/>
    <circle cx="237" cy="218" r="0.8" fill="#3a3528" opacity="0.6"/>
  `, 'BANDON', `
    <linearGradient id="bandon_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a4868"/>
      <stop offset="50%" stop-color="#6a7898"/>
      <stop offset="100%" stop-color="#a098a8"/>
    </linearGradient>
    <linearGradient id="bandon_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5a6878"/>
      <stop offset="100%" stop-color="#3a4858"/>
    </linearGradient>
    <linearGradient id="bandon_sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9090a0"/>
      <stop offset="100%" stop-color="#5a5868"/>
    </linearGradient>
  `),

  // ============================================================
  // OREGON COAST (Day 7 drive) — Lighthouse on cliff
  // ============================================================
  oregon: buildPostcard(`
    <rect width="400" height="240" fill="url(#or_sky)"/>
    <!-- Distant ocean horizon -->
    <rect y="115" width="400" height="55" fill="url(#or_water)"/>
    <!-- Distant cape/cliffs in background -->
    <path d="M0,118 Q80,105 160,115 Q240,100 320,115 L400,110 L400,135 L0,135 Z" fill="#5a6a4a" opacity="0.7"/>
    <!-- Wave lines -->
    <path d="M0,150 Q100,147 200,152 T400,150" stroke="#faf3e0" stroke-width="0.8" fill="none" opacity="0.5"/>
    <path d="M0,160 Q100,157 200,162 T400,160" stroke="#faf3e0" stroke-width="0.6" fill="none" opacity="0.4"/>
    <!-- Hero promontory cliff (right side) -->
    <path d="M240,170 Q260,140 290,135 L400,135 L400,240 L240,240 Z" fill="#6a5a3a"/>
    <path d="M240,170 Q260,140 290,135 L320,135 L310,165 L290,170 Z" fill="#7a6a4a"/>
    <!-- Lighthouse on cliff -->
    <g transform="translate(310,0)">
      <!-- Base -->
      <rect x="-12" y="125" width="24" height="12" fill="#faf3e0"/>
      <!-- Tower -->
      <path d="M-8,75 L-10,125 L10,125 L8,75 Z" fill="#faf3e0"/>
      <!-- Red bands -->
      <rect x="-9" y="90" width="18" height="6" fill="#a04020"/>
      <rect x="-9" y="108" width="18" height="6" fill="#a04020"/>
      <!-- Light room -->
      <rect x="-6" y="65" width="12" height="12" fill="#7a2810"/>
      <circle cx="0" cy="71" r="2.5" fill="#f8d870"/>
      <!-- Light glow -->
      <ellipse cx="0" cy="71" rx="20" ry="4" fill="#f8d870" opacity="0.5"/>
      <!-- Roof/cap -->
      <polygon points="-7,65 7,65 0,55" fill="#3a1f17"/>
      <!-- Tiny weather vane -->
      <line x1="0" y1="55" x2="0" y2="48" stroke="#2a1f17" stroke-width="1"/>
    </g>
    <!-- Foreground meadow / left side -->
    <path d="M0,155 Q40,150 80,158 Q120,148 160,155 Q200,150 240,160 L240,240 L0,240 Z" fill="#5a6a4a"/>
    <path d="M0,175 Q60,168 120,175 Q180,168 240,178 L240,240 L0,240 Z" fill="#4a5a3a"/>
    <!-- Wildflowers (yellow dots) -->
    ${Array.from({length: 12}, (_, i) => `<circle cx="${20 + i*18}" cy="${190 + (i%3)*8}" r="1.2" fill="#f4c878"/>`).join('')}
    <!-- Highway 101 winding -->
    <path d="M0,225 Q60,222 120,228 Q180,222 240,235" stroke="#2a1f17" stroke-width="6" fill="none"/>
    <path d="M0,225 Q60,222 120,228 Q180,222 240,235" stroke="#f4c878" stroke-width="0.8" fill="none" stroke-dasharray="6 5" opacity="0.7"/>
    <!-- Sun -->
    <circle cx="100" cy="50" r="22" fill="#f8d870"/>
    <circle cx="100" cy="50" r="32" fill="#f8d870" opacity="0.3"/>
    <!-- Birds -->
    <path d="M250,55 q3,-3 6,0 q3,-3 6,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
    <path d="M275,65 q2.5,-2 5,0 q2.5,-2 5,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
  `, 'OREGON COAST', `
    <linearGradient id="or_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a8c8d8"/>
      <stop offset="100%" stop-color="#d8d4b8"/>
    </linearGradient>
    <linearGradient id="or_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a7a8a"/>
      <stop offset="100%" stop-color="#2d5363"/>
    </linearGradient>
  `),

  // ============================================================
  // CANNON BEACH — Hero shot of Haystack Rock at sunset
  // ============================================================
  haystack: buildPostcard(`
    <rect width="400" height="240" fill="url(#hs_sky)"/>
    <!-- Sun, low and large -->
    <circle cx="100" cy="115" r="38" fill="#f8c060" opacity="0.95"/>
    <circle cx="100" cy="115" r="55" fill="#f8c060" opacity="0.3"/>
    <!-- Ocean -->
    <rect y="135" width="400" height="50" fill="url(#hs_water)"/>
    <!-- Sun reflection -->
    <ellipse cx="100" cy="155" rx="50" ry="3" fill="#f8c060" opacity="0.6"/>
    <ellipse cx="100" cy="170" rx="80" ry="2" fill="#f8c060" opacity="0.4"/>
    <!-- Wave lines -->
    <path d="M0,165 Q100,162 200,168 T400,165" stroke="#faf3e0" stroke-width="0.8" fill="none" opacity="0.5"/>
    <!-- HAYSTACK ROCK — the hero -->
    <path d="M220,185 L225,75 Q235,50 250,42 Q268,38 280,55 Q295,75 290,120 Q288,150 282,175 Q278,185 270,185 Z" fill="#2a1f17"/>
    <!-- Highlight on rock from sun -->
    <path d="M225,75 Q235,50 250,42 Q268,38 280,55 Q272,55 250,55 Q235,60 225,80 Z" fill="#5a3a2a" opacity="0.5"/>
    <!-- The Needles (smaller rocks near Haystack) -->
    <path d="M200,180 L202,140 Q210,128 218,140 L216,180 Z" fill="#2a1f17"/>
    <path d="M305,180 L307,155 Q315,148 320,158 L318,180 Z" fill="#2a1f17" opacity="0.92"/>
    <path d="M335,180 L337,165 Q342,160 346,165 L344,180 Z" fill="#2a1f17" opacity="0.85"/>
    <!-- Wet sandy beach -->
    <rect y="185" width="400" height="55" fill="url(#hs_sand)"/>
    <!-- Reflections on wet sand -->
    <path d="M220,185 L225,210 Q240,218 270,215 L282,185 Z" fill="#3a2818" opacity="0.55"/>
    <path d="M200,185 L202,200 Q210,205 218,200 L216,185 Z" fill="#3a2818" opacity="0.4"/>
    <!-- Wave foam line -->
    <path d="M0,190 Q100,193 200,190 T400,190" stroke="#faf3e0" stroke-width="1.2" fill="none" opacity="0.65"/>
    <path d="M0,200 Q100,202 200,199 T400,200" stroke="#faf3e0" stroke-width="0.7" fill="none" opacity="0.45"/>
    <!-- Tiny figure on beach for scale -->
    <ellipse cx="120" cy="215" rx="2" ry="1" fill="#2a1f17"/>
    <line x1="120" y1="215" x2="120" y2="208" stroke="#2a1f17" stroke-width="1.5"/>
    <circle cx="120" cy="206" r="1.5" fill="#2a1f17"/>
    <!-- Tiny dog beside figure -->
    <ellipse cx="128" cy="218" rx="3" ry="1.2" fill="#3a2a1a"/>
    <rect x="126" y="216" width="1" height="3" fill="#3a2a1a"/>
    <rect x="129" y="216" width="1" height="3" fill="#3a2a1a"/>
    <!-- Distant clouds -->
    <ellipse cx="280" cy="50" rx="50" ry="8" fill="#faf3e0" opacity="0.5"/>
    <ellipse cx="320" cy="58" rx="35" ry="6" fill="#faf3e0" opacity="0.4"/>
  `, 'CANNON BEACH', `
    <linearGradient id="hs_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c890b0"/>
      <stop offset="40%" stop-color="#e8a890"/>
      <stop offset="80%" stop-color="#f4c890"/>
      <stop offset="100%" stop-color="#f8d8a0"/>
    </linearGradient>
    <linearGradient id="hs_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a06860"/>
      <stop offset="100%" stop-color="#5a3838"/>
    </linearGradient>
    <linearGradient id="hs_sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d8a880"/>
      <stop offset="100%" stop-color="#8a6440"/>
    </linearGradient>
  `),

  // ============================================================
  // BEND — High desert with Three Sisters peaks
  // ============================================================
  bend: buildPostcard(`
    <rect width="400" height="240" fill="url(#bend_sky)"/>
    <!-- Sun -->
    <circle cx="320" cy="55" r="22" fill="#f8d870"/>
    <circle cx="320" cy="55" r="32" fill="#f8d870" opacity="0.3"/>
    <!-- Three Sisters peaks (signature) -->
    <!-- South Sister (left) -->
    <path d="M40,160 L100,55 L160,160 Z" fill="#6a7a8a"/>
    <path d="M100,55 L160,160 L130,160 L115,90 Z" fill="#5a6a7a"/>
    <!-- Snow cap -->
    <path d="M88,80 L100,55 L112,80 Q105,75 100,75 Q95,75 88,80 Z" fill="#faf3e0"/>
    <!-- Middle Sister -->
    <path d="M130,160 L185,40 L240,160 Z" fill="#7a8a9a"/>
    <path d="M185,40 L240,160 L210,160 L200,75 Z" fill="#5a6a7a"/>
    <path d="M173,65 L185,40 L197,65 Q190,60 185,60 Q180,60 173,65 Z" fill="#faf3e0"/>
    <!-- North Sister -->
    <path d="M210,160 L260,70 L320,160 Z" fill="#6a7a8a"/>
    <path d="M260,70 L320,160 L290,160 L275,100 Z" fill="#5a6a7a"/>
    <path d="M250,90 L260,70 L270,90 Q264,86 260,86 Q256,86 250,90 Z" fill="#faf3e0"/>
    <!-- Pine forest base of mountains -->
    <path d="M0,160 L0,200 L400,200 L400,160 Q350,155 300,162 Q250,158 200,165 Q150,158 100,162 Q50,158 0,160 Z" fill="#3a4a2a"/>
    <!-- Individual pines along ridge -->
    <g fill="#2a3a1a">
      ${Array.from({length: 16}, (_, i) => {
        const x = 20 + i*24;
        const h = 10 + (i%3)*4;
        return `<polygon points="${x-4},162 ${x+4},162 ${x},${162-h}"/>`;
      }).join('')}
    </g>
    <!-- Deschutes River (winding) -->
    <path d="M0,210 Q60,205 100,212 Q160,208 200,215 Q260,210 320,218 L400,215" stroke="#5a8a9a" stroke-width="6" fill="none"/>
    <path d="M0,210 Q60,205 100,212 Q160,208 200,215 Q260,210 320,218 L400,215" stroke="#7aaabe" stroke-width="2" fill="none" opacity="0.7"/>
    <!-- River banks -->
    <rect y="200" width="400" height="40" fill="#7a8a4a"/>
    <path d="M0,215 Q60,210 100,217 Q160,213 200,220 Q260,215 320,223 L400,220" stroke="#5a8a9a" stroke-width="6" fill="none"/>
    <!-- Foreground wildflowers -->
    ${Array.from({length: 10}, (_, i) => `<circle cx="${20 + i*38}" cy="${230 + (i%3)*4}" r="1.5" fill="#f4c878"/>`).join('')}
    ${Array.from({length: 8}, (_, i) => `<circle cx="${30 + i*45}" cy="${235 + (i%2)*3}" r="1.2" fill="#a04020"/>`).join('')}
  `, 'BEND', `
    <linearGradient id="bend_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#88b8d4"/>
      <stop offset="100%" stop-color="#d8d8b8"/>
    </linearGradient>
  `),

  // ============================================================
  // TRUCKEE — Donner Lake with Sierra peaks
  // ============================================================
  truckee: buildPostcard(`
    <rect width="400" height="240" fill="url(#tr_sky)"/>
    <!-- Far distant Sierra Nevada peaks -->
    <path d="M0,80 L40,40 L80,65 L130,30 L180,55 L230,35 L280,60 L330,40 L380,65 L400,55 L400,135 L0,135 Z" fill="#7a8898" opacity="0.55"/>
    <!-- Snow caps on far peaks -->
    <path d="M125,38 L130,30 L135,38 Z M225,42 L230,35 L235,42 Z M325,47 L330,40 L335,47 Z" fill="#faf3e0"/>
    <!-- Closer mountain ridge — Sierra granite, dramatic -->
    <path d="M0,135 L60,70 L130,110 L210,55 L290,105 L360,75 L400,110 L400,160 L0,160 Z" fill="#3a4a5a"/>
    <!-- Ridge highlights / shading -->
    <path d="M60,70 L130,110 L90,110 Z" fill="#2a3a4a" opacity="0.55"/>
    <path d="M210,55 L290,105 L240,105 Z" fill="#2a3a4a" opacity="0.55"/>
    <path d="M290,105 L360,75 L325,105 Z" fill="#5a6a7a" opacity="0.4"/>
    <!-- Snow on closer peaks (more substantial) -->
    <path d="M48,90 L60,70 L72,90 Q66,82 60,82 Q54,82 48,90 Z" fill="#faf3e0"/>
    <path d="M198,75 L210,55 L222,75 Q216,67 210,67 Q204,67 198,75 Z" fill="#faf3e0"/>
    <!-- Vast lake (bigger than Donner — Tahoe is the expansive one) -->
    <rect y="160" width="400" height="80" fill="url(#tr_water)"/>
    <!-- Lake surface highlights -->
    <ellipse cx="200" cy="180" rx="180" ry="3" fill="#a8c8d4" opacity="0.25"/>
    <!-- Long lake reflections of mountains -->
    <path d="M60,160 L130,200 L60,200 Z" fill="#3a4a5a" opacity="0.3"/>
    <path d="M210,160 L290,200 L210,200 Z" fill="#3a4a5a" opacity="0.3"/>
    <!-- Snow reflections -->
    <ellipse cx="60" cy="180" rx="6" ry="2" fill="#faf3e0" opacity="0.35"/>
    <ellipse cx="210" cy="180" rx="6" ry="2" fill="#faf3e0" opacity="0.35"/>
    <!-- Lake ripples (bigger lake = more lines) -->
    <line x1="40" y1="190" x2="120" y2="190" stroke="#a8c8d4" stroke-width="0.7" opacity="0.5"/>
    <line x1="180" y1="200" x2="260" y2="200" stroke="#a8c8d4" stroke-width="0.7" opacity="0.5"/>
    <line x1="280" y1="215" x2="380" y2="215" stroke="#a8c8d4" stroke-width="0.7" opacity="0.4"/>
    <line x1="60" y1="220" x2="160" y2="220" stroke="#a8c8d4" stroke-width="0.7" opacity="0.4"/>
    <!-- Pine trees framing edges -->
    <g fill="#1a3a2a">
      <polygon points="15,180 30,180 22,148"/>
      <polygon points="18,168 28,168 23,140"/>
      <polygon points="35,178 47,178 41,150"/>
      <polygon points="370,180 385,180 377,148"/>
      <polygon points="372,168 382,168 377,140"/>
      <polygon points="355,178 367,178 361,150"/>
    </g>
    <!-- Sailboat on the vast lake -->
    <g transform="translate(160,200)">
      <polygon points="0,0 0,-18 10,0" fill="#faf3e0"/>
      <polygon points="0,0 0,-14 -7,0" fill="#faf3e0" opacity="0.85"/>
      <line x1="-4" y1="0" x2="8" y2="0" stroke="#2a1f17" stroke-width="0.8"/>
      <ellipse cx="2" cy="2" rx="1" ry="3" fill="#faf3e0" opacity="0.4"/>
    </g>
    <!-- Second smaller boat -->
    <g transform="translate(280,210)">
      <polygon points="0,0 0,-12 6,0" fill="#faf3e0"/>
      <line x1="-2" y1="0" x2="5" y2="0" stroke="#2a1f17" stroke-width="0.5"/>
    </g>
    <!-- Birds -->
    <path d="M120,40 q3,-3 6,0 q3,-3 6,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
    <path d="M150,50 q2.5,-2 5,0 q2.5,-2 5,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
    <path d="M270,35 q2.5,-2 5,0 q2.5,-2 5,0" stroke="#2a1f17" stroke-width="1" fill="none"/>
  `, 'LAKE TAHOE', `
    <linearGradient id="tr_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#88b8d4"/>
      <stop offset="100%" stop-color="#d8e0d0"/>
    </linearGradient>
    <linearGradient id="tr_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a7898"/>
      <stop offset="100%" stop-color="#1d4763"/>
    </linearGradient>
  `),

  // ============================================================
  // DONNER (rest day) — Donner Lake morning glass
  // ============================================================
  donner: buildPostcard(`
    <rect width="400" height="240" fill="url(#dn_sky)"/>
    <!-- Sun rising behind peaks -->
    <circle cx="200" cy="65" r="28" fill="#f8d870" opacity="0.95"/>
    <circle cx="200" cy="65" r="42" fill="#f8d870" opacity="0.3"/>
    <!-- Distant peaks against rising sun -->
    <path d="M0,80 L80,30 L150,70 L220,20 L300,60 L400,40 L400,120 L0,120 Z" fill="#3a4a5a" opacity="0.85"/>
    <path d="M70,40 L80,30 L90,40 Z M215,30 L220,20 L225,30 Z M295,68 L300,60 L305,68 Z" fill="#faf3e0"/>
    <!-- Closer ridge -->
    <path d="M0,115 L60,90 L120,110 L200,85 L280,108 L350,92 L400,108 L400,160 L0,160 Z" fill="#2a3a4a"/>
    <!-- Lake (still, mirror) -->
    <rect y="160" width="400" height="60" fill="url(#dn_water)"/>
    <!-- Reflection of peaks -->
    <path d="M0,160 L80,210 L150,170 L220,220 L300,180 L400,200 L400,160 Z" fill="#3a4a5a" opacity="0.4"/>
    <path d="M70,200 L80,210 L90,200 Z M215,210 L220,220 L225,210 Z" fill="#faf3e0" opacity="0.3"/>
    <!-- Mist / morning fog -->
    <ellipse cx="100" cy="160" rx="70" ry="6" fill="#faf3e0" opacity="0.5"/>
    <ellipse cx="280" cy="162" rx="80" ry="5" fill="#faf3e0" opacity="0.45"/>
    <ellipse cx="200" cy="158" rx="50" ry="4" fill="#faf3e0" opacity="0.35"/>
    <!-- Pine trees at shore -->
    <g fill="#1a3a2a">
      <polygon points="20,160 32,160 26,135"/>
      <polygon points="40,160 52,160 46,138"/>
      <polygon points="60,160 70,160 65,142"/>
      <polygon points="350,160 362,160 356,135"/>
      <polygon points="370,160 380,160 375,138"/>
    </g>
    <!-- Foreground beach/dock -->
    <rect y="218" width="400" height="22" fill="#d8c898"/>
    <!-- Wooden dock -->
    <rect x="170" y="210" width="60" height="3" fill="#5a3818"/>
    <rect x="172" y="213" width="3" height="8" fill="#5a3818"/>
    <rect x="225" y="213" width="3" height="8" fill="#5a3818"/>
  `, 'DONNER LAKE', `
    <linearGradient id="dn_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0c890"/>
      <stop offset="60%" stop-color="#f4d8a8"/>
      <stop offset="100%" stop-color="#e8d4a8"/>
    </linearGradient>
    <linearGradient id="dn_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5a7a8a"/>
      <stop offset="100%" stop-color="#3a5a6a"/>
    </linearGradient>
  `),

  // ============================================================
  // MAMMOTH LAKES — Eastern Sierra alpine
  // ============================================================
  mammoth: buildPostcard(`
    <rect width="400" height="240" fill="url(#mm_sky)"/>
    <!-- Sun -->
    <circle cx="60" cy="55" r="20" fill="#f8d870"/>
    <circle cx="60" cy="55" r="30" fill="#f8d870" opacity="0.3"/>
    <!-- Distant Sierra crest -->
    <path d="M0,90 L80,30 L150,70 L230,20 L310,55 L380,35 L400,55 L400,140 L0,140 Z" fill="#5a6a7a" opacity="0.7"/>
    <!-- Snow caps on distant peaks -->
    <path d="M70,42 L80,30 L90,42 Z M223,30 L230,20 L237,30 Z M303,63 L310,55 L317,63 Z" fill="#faf3e0"/>
    <!-- Closer Mammoth Mountain -->
    <path d="M150,140 L240,40 L330,140 Z" fill="#3a4a5a"/>
    <!-- Mammoth snow patches (it has snow even in summer) -->
    <path d="M225,55 L240,40 L255,55 Z" fill="#faf3e0"/>
    <path d="M210,80 Q220,75 230,82 Q220,84 215,82 Z" fill="#faf3e0" opacity="0.85"/>
    <path d="M260,90 Q270,85 280,92 Q270,94 265,92 Z" fill="#faf3e0" opacity="0.75"/>
    <!-- Mountain shading -->
    <path d="M240,40 L330,140 L290,140 L265,75 Z" fill="#2a3a4a" opacity="0.6"/>
    <!-- Lake in foreground basin (Twin Lakes feel) — irregular natural shape -->
    <path d="M30,180 Q80,168 150,172 Q220,168 280,175 Q340,170 380,180 Q360,195 300,200 Q220,205 150,202 Q80,200 30,195 Z" fill="url(#mm_water)"/>
    <!-- Lake reflection of mountains -->
    <path d="M150,175 Q200,180 240,195 Q280,180 330,175 Q280,200 240,200 Q200,200 150,195 Z" fill="#3a4a5a" opacity="0.35"/>
    <!-- Lake ripples -->
    <line x1="80" y1="186" x2="130" y2="186" stroke="#a8c8d4" stroke-width="0.6" opacity="0.5"/>
    <line x1="180" y1="195" x2="250" y2="195" stroke="#a8c8d4" stroke-width="0.6" opacity="0.5"/>
    <!-- Pine forest around lake -->
    <g fill="#2a4a3a">
      ${Array.from({length: 10}, (_, i) => {
        const x = 30 + i*42;
        return `<polygon points="${x-5},155 ${x+5},155 ${x},135"/>
                <polygon points="${x-4},148 ${x+4},148 ${x},133"/>`;
      }).join('')}
    </g>
    <g fill="#1a3a2a">
      <polygon points="20,200 35,200 27,180"/>
      <polygon points="22,190 33,190 27,172"/>
      <polygon points="370,200 385,200 377,180"/>
      <polygon points="372,190 383,190 377,172"/>
      <polygon points="40,205 50,205 45,190"/>
      <polygon points="355,205 365,205 360,190"/>
    </g>
    <!-- A small cabin -->
    <g transform="translate(80,195)">
      <rect x="0" y="0" width="22" height="14" fill="#7a4828"/>
      <polygon points="-3,0 25,0 11,-9" fill="#3a1f10"/>
      <rect x="9" y="6" width="5" height="8" fill="#f4c878"/>
      <rect x="3" y="3" width="3" height="3" fill="#5a3818"/>
    </g>
    <!-- Foreground meadow -->
    <rect y="200" width="400" height="40" fill="#5a7a4a"/>
    <!-- Wildflowers -->
    ${Array.from({length: 12}, (_, i) => `<circle cx="${20 + i*32}" cy="${215 + (i%3)*5}" r="1.4" fill="#f4c878"/>`).join('')}
    ${Array.from({length: 8}, (_, i) => `<circle cx="${30 + i*45}" cy="${225 + (i%2)*3}" r="1.2" fill="#c890a8"/>`).join('')}
  `, 'MAMMOTH LAKES', `
    <linearGradient id="mm_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a0c0d4"/>
      <stop offset="100%" stop-color="#d8d8b8"/>
    </linearGradient>
    <linearGradient id="mm_water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a8aa8"/>
      <stop offset="100%" stop-color="#2d5363"/>
    </linearGradient>
  `),

  // ============================================================
  // PALM SPRINGS — Pool, palms, mountains
  // ============================================================
  desert: buildPostcard(`
    <rect width="400" height="240" fill="url(#ps_sky)"/>
    <!-- Mountains (San Jacinto silhouette) -->
    <path d="M0,120 L60,80 L100,100 L160,60 L220,90 L290,70 L350,95 L400,85 L400,145 L0,145 Z" fill="#7a5a7a" opacity="0.85"/>
    <path d="M0,135 L70,105 L130,120 L190,95 L260,115 L320,100 L400,115 L400,150 L0,150 Z" fill="#5a3a5a"/>
    <!-- Snow caps (subtle on highest) -->
    <path d="M152,67 L160,60 L168,67 Z" fill="#faf3e0" opacity="0.7"/>
    <path d="M283,77 L290,70 L297,77" fill="#faf3e0" opacity="0.6"/>
    <!-- Pool deck -->
    <rect y="148" width="400" height="92" fill="#f0e0c0"/>
    <!-- Pool -->
    <rect x="60" y="170" width="280" height="55" fill="url(#ps_pool)" rx="2"/>
    <!-- Pool ripples -->
    <line x1="80" y1="180" x2="120" y2="180" stroke="#faf3e0" stroke-width="0.8" opacity="0.6"/>
    <line x1="170" y1="190" x2="220" y2="190" stroke="#faf3e0" stroke-width="0.8" opacity="0.6"/>
    <line x1="240" y1="205" x2="290" y2="205" stroke="#faf3e0" stroke-width="0.8" opacity="0.5"/>
    <line x1="100" y1="215" x2="140" y2="215" stroke="#faf3e0" stroke-width="0.8" opacity="0.5"/>
    <!-- Palm trees — left -->
    <g transform="translate(40,0)">
      <line x1="0" y1="240" x2="0" y2="80" stroke="#3a2a1a" stroke-width="3"/>
      <path d="M0,80 Q-25,55 -40,65 Q-20,72 -3,80 Z" fill="#4a6b3f"/>
      <path d="M0,80 Q25,55 40,65 Q20,72 3,80 Z" fill="#4a6b3f"/>
      <path d="M0,80 Q-15,50 -25,40 Q-8,55 -2,78 Z" fill="#3a5b2f"/>
      <path d="M0,80 Q15,50 25,40 Q8,55 2,78 Z" fill="#3a5b2f"/>
      <path d="M0,80 Q-30,75 -45,85 Q-22,80 -3,82 Z" fill="#5a7b4f"/>
      <path d="M0,80 Q30,75 45,85 Q22,80 3,82 Z" fill="#5a7b4f"/>
      <!-- Coconut cluster -->
      <circle cx="-3" cy="83" r="2" fill="#5a3818"/>
      <circle cx="3" cy="84" r="2" fill="#5a3818"/>
    </g>
    <g transform="translate(70,0)">
      <line x1="0" y1="240" x2="0" y2="100" stroke="#3a2a1a" stroke-width="2.5"/>
      <path d="M0,100 Q-20,80 -32,88 Q-15,93 -3,100 Z" fill="#4a6b3f"/>
      <path d="M0,100 Q20,80 32,88 Q15,93 3,100 Z" fill="#4a6b3f"/>
      <path d="M0,100 Q-12,72 -20,65 Q-6,80 -2,98 Z" fill="#3a5b2f"/>
      <path d="M0,100 Q12,72 20,65 Q6,80 2,98 Z" fill="#3a5b2f"/>
    </g>
    <!-- Palm trees — right -->
    <g transform="translate(360,0)">
      <line x1="0" y1="240" x2="0" y2="70" stroke="#3a2a1a" stroke-width="3"/>
      <path d="M0,70 Q-25,45 -40,55 Q-20,62 -3,70 Z" fill="#4a6b3f"/>
      <path d="M0,70 Q25,45 40,55 Q20,62 3,70 Z" fill="#4a6b3f"/>
      <path d="M0,70 Q-15,40 -25,30 Q-8,45 -2,68 Z" fill="#3a5b2f"/>
      <path d="M0,70 Q15,40 25,30 Q8,45 2,68 Z" fill="#3a5b2f"/>
      <path d="M0,70 Q-30,65 -45,75 Q-22,70 -3,72 Z" fill="#5a7b4f"/>
      <path d="M0,70 Q30,65 45,75 Q22,70 3,72 Z" fill="#5a7b4f"/>
      <circle cx="-3" cy="73" r="2" fill="#5a3818"/>
      <circle cx="3" cy="74" r="2" fill="#5a3818"/>
    </g>
    <g transform="translate(330,0)">
      <line x1="0" y1="240" x2="0" y2="95" stroke="#3a2a1a" stroke-width="2.5"/>
      <path d="M0,95 Q-20,75 -32,83 Q-15,88 -3,95 Z" fill="#4a6b3f"/>
      <path d="M0,95 Q20,75 32,83 Q15,88 3,95 Z" fill="#4a6b3f"/>
    </g>
    <!-- Pool ladder -->
    <rect x="320" y="170" width="2" height="30" fill="#a8c8d4"/>
    <rect x="328" y="170" width="2" height="30" fill="#a8c8d4"/>
    <line x1="320" y1="178" x2="330" y2="178" stroke="#a8c8d4" stroke-width="1.5"/>
    <line x1="320" y1="186" x2="330" y2="186" stroke="#a8c8d4" stroke-width="1.5"/>
  `, 'PALM SPRINGS', `
    <linearGradient id="ps_sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e8a878"/>
      <stop offset="50%" stop-color="#d8a890"/>
      <stop offset="100%" stop-color="#c898a0"/>
    </linearGradient>
    <linearGradient id="ps_pool" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5ab0c0"/>
      <stop offset="100%" stop-color="#3a8a9a"/>
    </linearGradient>
  `)
};

// Export for browser global
if (typeof window !== 'undefined') {
  window.postcards = postcards;
}
