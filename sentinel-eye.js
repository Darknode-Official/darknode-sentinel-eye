// ============================================================================
// SENTINEL EYE — Global Cyber Threat Detection & Counter-Operations Platform
// Global cyber threat detection and prediction platform
// Copyright (c) 2026 SpartanKing18. All rights reserved.
// ============================================================================
// NORAD-grade cyber early warning system: monitors nation-state cyber force
// readiness, global network anomalies, dark web signals, APT operational tempo,
// and geopolitical triggers that precede cyber operations.
// ============================================================================

// SENTINEL EYE — Global Cyber Threat Detection & Prediction Platform
// Data Arrays & Core Utilities
// Global cyber threat detection and prediction platform

var esc = function(s) {
  return String(s != null ? s : '').replace(/[&<>"']/g, function(c) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
};

// ============================================================================
// NATION-STATE CYBER PROFILES
// ============================================================================
var NATION_STATE_PROFILES = [
  {
    id: 'us', name: 'United States', flag: '[US]', threatLevel: 1, tier: 1,
    cyberCommand: 'US Cyber Command / NSA TAO',
    aptGroups: ['Equation Group', 'TAO', 'Longhorn'],
    knownOps: ['Stuxnet (joint w/ Israel)', 'Olympic Games', 'PRISM', 'Tailored Access Operations', 'Shadow Brokers leak tools'],
    capabilities: { offense: 10, defense: 9, intel: 10 },
    currentPosture: 'ACTIVE DEFENSE',
    primaryTargets: ['Russia', 'China', 'Iran', 'North Korea', 'Counter-terrorism'],
    recentActivity: [
      { date: '2026-09-10', description: 'CYBERCOM hunt-forward mission deployed to allied nation' },
      { date: '2026-09-05', description: 'NSA advisory on Chinese pre-positioning in telecom infrastructure' },
      { date: '2026-08-28', description: 'Defensive cyber ops supporting NATO exercises in Baltic region' },
      { date: '2026-08-15', description: 'Joint operation with Five Eyes disrupting ransomware infrastructure' }
    ]
  },
  {
    id: 'ru', name: 'Russia', flag: '[RU]', threatLevel: 5, tier: 1,
    cyberCommand: 'GRU Unit 74455 / SVR / FSB Center 16',
    aptGroups: ['APT28 (Fancy Bear)', 'APT29 (Cozy Bear)', 'Sandworm', 'Turla', 'Gamaredon'],
    knownOps: ['NotPetya', 'SolarWinds', 'Ukraine grid attacks (2015/2016)', 'US election interference (2016)', 'Viasat hack (2022)', 'WhisperGate'],
    capabilities: { offense: 9, defense: 7, intel: 9 },
    currentPosture: 'OFFENSIVE POSTURE',
    primaryTargets: ['Ukraine', 'NATO members', 'US critical infrastructure', 'EU government networks', 'Energy sector'],
    recentActivity: [
      { date: '2026-09-12', description: 'Sandworm scanning NATO member SCADA systems detected' },
      { date: '2026-09-08', description: 'APT29 spear-phishing campaign targeting EU diplomatic corps' },
      { date: '2026-09-01', description: 'GRU infrastructure staging detected in Eastern European hosting providers' },
      { date: '2026-08-20', description: 'Turla C2 beacon activity in government networks of 3 NATO nations' }
    ]
  },
  {
    id: 'cn', name: 'China', flag: '[CN]', threatLevel: 5, tier: 1,
    cyberCommand: 'PLA Strategic Support Force / MSS',
    aptGroups: ['APT41', 'Volt Typhoon', 'Salt Typhoon', 'APT1 (Unit 61398)', 'Hafnium', 'Winnti', 'Stone Panda'],
    knownOps: ['OPM breach (22M records)', 'Volt Typhoon critical infrastructure pre-positioning', 'Salt Typhoon telecom infiltration', 'IP theft campaigns ($500B+/yr est.)', 'Microsoft Exchange exploitation'],
    capabilities: { offense: 9, defense: 8, intel: 10 },
    currentPosture: 'PRE-POSITIONING',
    primaryTargets: ['US critical infrastructure', 'Taiwan', 'Defense industrial base', 'Semiconductor industry', 'Telecom providers'],
    recentActivity: [
      { date: '2026-09-11', description: 'Volt Typhoon activity detected in US water utility SCADA networks' },
      { date: '2026-09-07', description: 'Salt Typhoon maintaining persistent access in 4 major telecom providers' },
      { date: '2026-09-02', description: 'APT41 supply chain compromise targeting cloud service providers' },
      { date: '2026-08-25', description: 'MSS-linked actors probing Taiwan semiconductor manufacturer networks' }
    ]
  },
  {
    id: 'kp', name: 'North Korea', flag: '[KP]', threatLevel: 4, tier: 2,
    cyberCommand: 'RGB Bureau 121',
    aptGroups: ['Lazarus Group', 'Kimsuky', 'Andariel', 'BlueNoroff', 'ScarCruft'],
    knownOps: ['Sony Pictures hack (2014)', 'WannaCry (2017)', 'Bangladesh Bank heist ($81M)', 'Crypto theft ($2B+ total)', 'Ronin Bridge ($625M)', 'Harmony Bridge ($100M)'],
    capabilities: { offense: 7, defense: 3, intel: 6 },
    currentPosture: 'ACTIVE OPERATIONS',
    primaryTargets: ['Cryptocurrency exchanges', 'Financial institutions', 'South Korea', 'Defense contractors', 'DeFi protocols'],
    recentActivity: [
      { date: '2026-09-10', description: 'Lazarus targeting DeFi bridge protocols with novel exploit chain' },
      { date: '2026-09-06', description: 'Kimsuky phishing campaign against South Korean defense researchers' },
      { date: '2026-08-30', description: 'BlueNoroff social engineering attack on crypto venture capital firms' },
      { date: '2026-08-22', description: 'Andariel deploying custom ransomware against South Korean enterprises' }
    ]
  },
  {
    id: 'ir', name: 'Iran', flag: '[IR]', threatLevel: 4, tier: 2,
    cyberCommand: 'IRGC Cyber Command / MOIS',
    aptGroups: ['APT33 (Elfin)', 'APT34 (OilRig)', 'APT35 (Charming Kitten)', 'MuddyWater', 'Moses Staff'],
    knownOps: ['Shamoon (Saudi Aramco)', 'Albanian government attacks (2022)', 'US dam access (2013)', 'Israeli water system attacks', 'Predatory Sparrow retaliation'],
    capabilities: { offense: 7, defense: 5, intel: 6 },
    currentPosture: 'ELEVATED READINESS',
    primaryTargets: ['Israel', 'Saudi Arabia', 'US government', 'Oil & gas sector', 'Middle East rivals'],
    recentActivity: [
      { date: '2026-09-09', description: 'APT33 deploying wiper malware variants against Gulf state oil infrastructure' },
      { date: '2026-09-04', description: 'MuddyWater targeting US defense contractors with spear-phishing' },
      { date: '2026-08-27', description: 'APT35 credential harvesting campaign against Israeli tech sector' },
      { date: '2026-08-18', description: 'IRGC-linked actors scanning Israeli critical infrastructure SCADA systems' }
    ]
  },
  {
    id: 'il', name: 'Israel', flag: '[IL]', threatLevel: 2, tier: 1,
    cyberCommand: 'Unit 8200 / Israel National Cyber Directorate',
    aptGroups: ['Unit 8200 Operations', 'Candiru', 'NSO Group (private)'],
    knownOps: ['Stuxnet (joint w/ US)', 'Duqu', 'Flame', 'Pegasus spyware platform', 'Iranian nuclear facility sabotage'],
    capabilities: { offense: 9, defense: 8, intel: 9 },
    currentPosture: 'ACTIVE DEFENSE',
    primaryTargets: ['Iran', 'Hezbollah', 'Hamas', 'Regional adversaries', 'Counter-terrorism'],
    recentActivity: [
      { date: '2026-09-08', description: 'Cyber operations supporting regional intelligence collection' },
      { date: '2026-09-03', description: 'Defensive operations against Iranian APT targeting power grid' },
      { date: '2026-08-26', description: 'Unit 8200 intelligence sharing with Five Eyes on Iranian capabilities' },
      { date: '2026-08-19', description: 'Counter-cyber operations disrupting Hezbollah communication infrastructure' }
    ]
  },
  {
    id: 'gb', name: 'United Kingdom', flag: '[UK]', threatLevel: 1, tier: 1,
    cyberCommand: 'GCHQ / National Cyber Security Centre (NCSC)',
    aptGroups: ['GCHQ Operations'],
    knownOps: ['Joint operations with NSA (Five Eyes)', 'Belgacom hack', 'Counter-ISIS cyber operations', 'Russian election interference disruption'],
    capabilities: { offense: 8, defense: 8, intel: 9 },
    currentPosture: 'ACTIVE DEFENSE',
    primaryTargets: ['Russia', 'China', 'Counter-terrorism', 'Organized cybercrime'],
    recentActivity: [
      { date: '2026-09-07', description: 'NCSC advisory on Russian threat to UK critical infrastructure' },
      { date: '2026-09-01', description: 'Joint Five Eyes operation disrupting ransomware group infrastructure' },
      { date: '2026-08-24', description: 'GCHQ supporting NATO cyber defense exercise' },
      { date: '2026-08-16', description: 'Counter-espionage operations against Chinese MSS targeting UK universities' }
    ]
  },
  {
    id: 'fr', name: 'France', flag: '[FR]', threatLevel: 1, tier: 2,
    cyberCommand: 'ANSSI / DGSE',
    aptGroups: ['Animal Farm (attributed)'],
    knownOps: ['Babar malware', 'Dino/Casper operations', 'Counter-terrorism cyber ops in Sahel', 'Olympic Games 2024 cyber defense'],
    capabilities: { offense: 7, defense: 8, intel: 7 },
    currentPosture: 'DEFENSIVE',
    primaryTargets: ['Counter-terrorism', 'Russian influence operations', 'Chinese espionage', 'Economic espionage defense'],
    recentActivity: [
      { date: '2026-09-06', description: 'ANSSI published joint advisory with CISA on Chinese espionage TTPs' },
      { date: '2026-08-29', description: 'DGSE cyber component supporting counter-terrorism operations' },
      { date: '2026-08-21', description: 'Defensive measures deployed against Russian disinformation networks' },
      { date: '2026-08-14', description: 'CERT-FR incident response to ransomware attack on hospital network' }
    ]
  },
  {
    id: 'in', name: 'India', flag: '[IN]', threatLevel: 2, tier: 2,
    cyberCommand: 'NTRO / Defence Cyber Agency',
    aptGroups: ['SideWinder', 'Patchwork', 'Dropping Elephant'],
    knownOps: ['SideWinder campaigns against Pakistan/China', 'Patchwork espionage operations', 'Cyber operations during border tensions'],
    capabilities: { offense: 6, defense: 5, intel: 6 },
    currentPosture: 'ELEVATED READINESS',
    primaryTargets: ['Pakistan', 'China', 'Counter-terrorism', 'Regional intelligence'],
    recentActivity: [
      { date: '2026-09-05', description: 'SideWinder campaign targeting Pakistani military networks' },
      { date: '2026-08-28', description: 'NTRO defensive ops against Chinese APT probing power grid' },
      { date: '2026-08-20', description: 'Patchwork intelligence collection targeting regional diplomatic communications' },
      { date: '2026-08-12', description: 'Defence Cyber Agency exercise simulating cross-border cyber conflict' }
    ]
  },
  {
    id: 'pk', name: 'Pakistan', flag: '[PK]', threatLevel: 3, tier: 3,
    cyberCommand: 'ISI Cyber Wing / Pakistan Cyber Force',
    aptGroups: ['Transparent Tribe', 'SideCopy'],
    knownOps: ['Transparent Tribe campaigns against India', 'Operation C-Major', 'Kashmir-themed phishing operations'],
    capabilities: { offense: 4, defense: 3, intel: 5 },
    currentPosture: 'ACTIVE RECONNAISSANCE',
    primaryTargets: ['India', 'Afghan government', 'Regional intelligence', 'Kashmir-related targets'],
    recentActivity: [
      { date: '2026-09-04', description: 'Transparent Tribe deploying CrimsonRAT against Indian defense officials' },
      { date: '2026-08-27', description: 'SideCopy mimicking SideWinder TTPs in espionage campaign' },
      { date: '2026-08-19', description: 'Phishing campaign with Kashmir conflict lures targeting Indian military' },
      { date: '2026-08-11', description: 'Infrastructure staging detected for new espionage campaign' }
    ]
  },
  {
    id: 'tr', name: 'Turkey', flag: '[TR]', threatLevel: 2, tier: 3,
    cyberCommand: 'MIT Cyber Operations',
    aptGroups: ['StrongPity', 'Sea Turtle'],
    knownOps: ['StrongPity watering hole attacks', 'Sea Turtle DNS hijacking campaign', 'Regional espionage operations'],
    capabilities: { offense: 5, defense: 4, intel: 5 },
    currentPosture: 'ACTIVE RECONNAISSANCE',
    primaryTargets: ['Kurdish organizations', 'Regional rivals', 'EU diplomatic networks', 'Opposition figures'],
    recentActivity: [
      { date: '2026-09-03', description: 'Sea Turtle DNS hijacking targeting Middle Eastern government domains' },
      { date: '2026-08-26', description: 'StrongPity distributing trojanized communication apps' },
      { date: '2026-08-18', description: 'MIT-linked espionage targeting Kurdish diaspora in Europe' },
      { date: '2026-08-10', description: 'Cyber reconnaissance against regional rival diplomatic networks' }
    ]
  },
  {
    id: 'vn', name: 'Vietnam', flag: '[VN]', threatLevel: 2, tier: 3,
    cyberCommand: 'Ministry of Public Security / APT32 Operations',
    aptGroups: ['APT32 (OceanLotus)', 'Lotus Blossom'],
    knownOps: ['OceanLotus espionage campaigns', 'COVID-19 research theft', 'South China Sea-related espionage', 'Targeting of foreign corporations in Vietnam'],
    capabilities: { offense: 5, defense: 3, intel: 5 },
    currentPosture: 'ACTIVE ESPIONAGE',
    primaryTargets: ['ASEAN rivals', 'Foreign corporations in Vietnam', 'Dissident groups', 'South China Sea disputants'],
    recentActivity: [
      { date: '2026-09-02', description: 'OceanLotus targeting foreign automotive manufacturers in Vietnam' },
      { date: '2026-08-25', description: 'Espionage campaign against ASEAN diplomatic communications' },
      { date: '2026-08-17', description: 'Watering hole attack on Vietnamese dissident media outlets' },
      { date: '2026-08-09', description: 'Lotus Blossom targeting South China Sea policy researchers' }
    ]
  }
];

// ============================================================================
// APT GROUP DATABASE (35+ groups)
// ============================================================================
var APT_GROUPS = [
  {
    id: 'apt28', name: 'APT28', aliases: ['Fancy Bear', 'Sofacy', 'Pawn Storm', 'Sednit', 'STRONTIUM'],
    nationState: 'Russia (GRU Unit 26165)', active: true,
    campaigns: [
      { name: 'Operation Pawn Storm', startDate: '2014-01', targets: 'NATO, EU governments, media', status: 'ongoing' },
      { name: 'DNC Breach', startDate: '2016-03', targets: 'US Democratic National Committee', status: 'completed' },
      { name: 'Bundestag Hack', startDate: '2015-04', targets: 'German Parliament', status: 'completed' },
      { name: 'EU Diplomatic Campaign 2026', startDate: '2026-06', targets: 'EU foreign ministries', status: 'active' }
    ],
    tools: ['X-Tunnel', 'Seduploader', 'Zebrocy', 'GoDownloader', 'X-Agent', 'Komplex'],
    mitreAttack: ['T1566.001', 'T1190', 'T1078', 'T1059.001', 'T1053.005', 'T1071.001', 'T1027', 'T1003'],
    infrastructure: { domains: 847, ips: 312, hostingPrefs: 'Eastern European bullet-proof hosting, compromised legitimate servers' },
    activityPattern: { peakHours: '06:00-14:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['EU diplomatic networks', 'NATO logistics systems', 'Defense contractors'],
    threatLevel: 5
  },
  {
    id: 'apt29', name: 'APT29', aliases: ['Cozy Bear', 'The Dukes', 'NOBELIUM', 'Midnight Blizzard', 'YTTRIUM'],
    nationState: 'Russia (SVR)', active: true,
    campaigns: [
      { name: 'SolarWinds (SUNBURST)', startDate: '2020-03', targets: 'US government agencies, Fortune 500', status: 'completed' },
      { name: 'COVID-19 vaccine research theft', startDate: '2020-07', targets: 'Pharmaceutical companies', status: 'completed' },
      { name: 'Microsoft 365 campaign', startDate: '2023-11', targets: 'Microsoft corporate, US government email', status: 'completed' },
      { name: 'Diplomatic Phishing 2026', startDate: '2026-04', targets: 'EU/NATO diplomatic staff', status: 'active' }
    ],
    tools: ['SUNBURST', 'TEARDROP', 'Raindrop', 'WellMess', 'WellMail', 'EnvyScout', 'FoggyWeb', 'MagicWeb'],
    mitreAttack: ['T1195.002', 'T1199', 'T1078.004', 'T1556', 'T1550.001', 'T1059.001', 'T1071.001', 'T1027.002'],
    infrastructure: { domains: 1253, ips: 487, hostingPrefs: 'Compromised legitimate infrastructure, cloud services (Azure, AWS)' },
    activityPattern: { peakHours: '07:00-16:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Government cloud environments', 'Diplomatic communications', 'Technology companies'],
    threatLevel: 5
  },
  {
    id: 'sandworm', name: 'Sandworm', aliases: ['Voodoo Bear', 'IRIDIUM', 'Seashell Blizzard', 'TeleBots', 'BlackEnergy Group'],
    nationState: 'Russia (GRU Unit 74455)', active: true,
    campaigns: [
      { name: 'Ukraine Power Grid Attack', startDate: '2015-12', targets: 'Ukrainian power companies', status: 'completed' },
      { name: 'NotPetya', startDate: '2017-06', targets: 'Ukraine (global collateral)', status: 'completed' },
      { name: 'Olympic Destroyer', startDate: '2018-02', targets: 'PyeongChang Winter Olympics', status: 'completed' },
      { name: 'Industroyer2', startDate: '2022-04', targets: 'Ukrainian power grid', status: 'completed' },
      { name: 'Critical Infrastructure Campaign 2026', startDate: '2026-07', targets: 'NATO member SCADA/ICS', status: 'active' }
    ],
    tools: ['BlackEnergy', 'Industroyer', 'Industroyer2', 'NotPetya', 'Olympic Destroyer', 'CaddyWiper', 'ArguePatch'],
    mitreAttack: ['T1190', 'T1059', 'T1485', 'T1498', 'T1565', 'T1070', 'T1021', 'T1105'],
    infrastructure: { domains: 623, ips: 198, hostingPrefs: 'Compromised ISP infrastructure, Tor hidden services' },
    activityPattern: { peakHours: '05:00-15:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['NATO critical infrastructure', 'Ukrainian systems', 'Energy sector ICS/SCADA'],
    threatLevel: 5
  },
  {
    id: 'turla', name: 'Turla', aliases: ['Snake', 'Venomous Bear', 'Uroburos', 'KRYPTON', 'Waterbug'],
    nationState: 'Russia (FSB Center 16)', active: true,
    campaigns: [
      { name: 'Snake malware campaign', startDate: '2003-01', targets: 'Government networks worldwide', status: 'disrupted' },
      { name: 'Satellite C2 operations', startDate: '2015-09', targets: 'Diplomatic targets via satellite hijacking', status: 'completed' },
      { name: 'Government Espionage 2026', startDate: '2026-02', targets: 'European government networks', status: 'active' }
    ],
    tools: ['Snake', 'Carbon', 'Kazuar', 'Crutch', 'TinyTurla', 'Capibar', 'DeliveryCheck'],
    mitreAttack: ['T1071.001', 'T1573', 'T1008', 'T1036', 'T1055', 'T1560', 'T1041', 'T1090.003'],
    infrastructure: { domains: 412, ips: 156, hostingPrefs: 'Hijacked satellite downlinks, compromised embassy networks' },
    activityPattern: { peakHours: '06:00-14:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['EU government networks', 'Diplomatic missions', 'Defense ministries'],
    threatLevel: 4
  },
  {
    id: 'apt41', name: 'APT41', aliases: ['Double Dragon', 'BARIUM', 'Winnti Group', 'Wicked Panda'],
    nationState: 'China (MSS)', active: true,
    campaigns: [
      { name: 'Global supply chain attacks', startDate: '2017-01', targets: 'Software companies, gaming', status: 'ongoing' },
      { name: 'State government compromise', startDate: '2021-05', targets: 'US state governments', status: 'completed' },
      { name: 'Cloud Provider Campaign', startDate: '2026-03', targets: 'Major cloud service providers', status: 'active' }
    ],
    tools: ['ShadowPad', 'Winnti', 'POISONPLUG', 'CROSSWALK', 'LOWKEY', 'Cobalt Strike (modified)', 'DUSTPAN'],
    mitreAttack: ['T1195.002', 'T1059.001', 'T1053', 'T1078', 'T1190', 'T1003', 'T1071', 'T1560'],
    infrastructure: { domains: 1567, ips: 723, hostingPrefs: 'Chinese hosting providers, compromised cloud infrastructure' },
    activityPattern: { peakHours: '00:00-08:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['Cloud providers', 'Semiconductor companies', 'Healthcare data', 'Gaming companies'],
    threatLevel: 5
  },
  {
    id: 'volt_typhoon', name: 'Volt Typhoon', aliases: ['BRONZE SILHOUETTE', 'Vanguard Panda', 'DEV-0391', 'Insidious Taurus'],
    nationState: 'China (PLA)', active: true,
    campaigns: [
      { name: 'US Critical Infrastructure Pre-positioning', startDate: '2021-06', targets: 'US power, water, telecom, ports', status: 'active' },
      { name: 'Guam military base targeting', startDate: '2023-01', targets: 'US Pacific military installations', status: 'active' },
      { name: 'Water Utility Infiltration', startDate: '2026-01', targets: 'US municipal water systems', status: 'active' }
    ],
    tools: ['Living-off-the-land binaries (LOLBins)', 'SOHO router botnets (KV-botnet)', 'Custom web shells', 'ntdsutil', 'netsh'],
    mitreAttack: ['T1078', 'T1133', 'T1059.001', 'T1003.003', 'T1018', 'T1046', 'T1090', 'T1572'],
    infrastructure: { domains: 234, ips: 1847, hostingPrefs: 'Compromised SOHO routers, ASUS/Cisco/Netgear edge devices' },
    activityPattern: { peakHours: '01:00-09:00 UTC', peakDays: 'Mon-Sun' },
    currentTargets: ['US water utilities', 'US power grid', 'US telecom backbone', 'Pacific military logistics'],
    threatLevel: 5
  },
  {
    id: 'salt_typhoon', name: 'Salt Typhoon', aliases: ['GhostEmperor', 'FamousSparrow', 'UNC2286'],
    nationState: 'China (MSS)', active: true,
    campaigns: [
      { name: 'US Telecom Infiltration', startDate: '2023-06', targets: 'AT&T, Verizon, T-Mobile, Lumen', status: 'active' },
      { name: 'Lawful Intercept Compromise', startDate: '2024-01', targets: 'CALEA wiretap systems', status: 'active' },
      { name: 'Global Telecom Expansion', startDate: '2026-04', targets: 'European and Asian telecom providers', status: 'active' }
    ],
    tools: ['Demodex rootkit', 'GhostEmperor implant', 'Custom kernel drivers', 'Modified Mimikatz'],
    mitreAttack: ['T1190', 'T1014', 'T1078', 'T1557', 'T1040', 'T1565', 'T1573', 'T1048'],
    infrastructure: { domains: 178, ips: 423, hostingPrefs: 'Compromised telecom infrastructure, cloud VPS in multiple countries' },
    activityPattern: { peakHours: '00:00-10:00 UTC', peakDays: 'Mon-Sun' },
    currentTargets: ['Major US telecom providers', 'Lawful intercept systems', 'European 5G networks'],
    threatLevel: 5
  },
  {
    id: 'apt1', name: 'APT1', aliases: ['Comment Crew', 'Comment Panda', 'PLA Unit 61398'],
    nationState: 'China (PLA Unit 61398)', active: true,
    campaigns: [
      { name: 'Economic espionage campaign', startDate: '2006-01', targets: '141+ organizations across 20 industries', status: 'completed' },
      { name: 'Industrial IP Theft 2026', startDate: '2026-01', targets: 'Advanced manufacturing, aerospace', status: 'active' }
    ],
    tools: ['WEBC2', 'BISCUIT', 'CALENDAR', 'GLOOXMAIL', 'GETMAIL', 'MANITSME'],
    mitreAttack: ['T1566.001', 'T1059', 'T1071.001', 'T1560', 'T1005', 'T1041', 'T1078', 'T1003'],
    infrastructure: { domains: 937, ips: 849, hostingPrefs: 'Shanghai-based infrastructure, compromised hosting worldwide' },
    activityPattern: { peakHours: '00:00-08:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Aerospace industry', 'Advanced manufacturing', 'Energy technology'],
    threatLevel: 4
  },
  {
    id: 'lazarus', name: 'Lazarus Group', aliases: ['HIDDEN COBRA', 'Zinc', 'Diamond Sleet', 'Labyrinth Chollima'],
    nationState: 'North Korea (RGB)', active: true,
    campaigns: [
      { name: 'Sony Pictures', startDate: '2014-11', targets: 'Sony Pictures Entertainment', status: 'completed' },
      { name: 'WannaCry', startDate: '2017-05', targets: 'Global (200K+ systems)', status: 'completed' },
      { name: 'Crypto heist campaign', startDate: '2018-01', targets: 'Cryptocurrency exchanges and DeFi', status: 'ongoing' },
      { name: 'DeFi Bridge Exploits 2026', startDate: '2026-05', targets: 'Cross-chain bridge protocols', status: 'active' }
    ],
    tools: ['FALLCHILL', 'Manuscrypt', 'HOPLIGHT', 'AppleJeus', 'TraderTraitor', 'BLINDINGCAN', 'DTrack'],
    mitreAttack: ['T1566.001', 'T1189', 'T1059', 'T1105', 'T1027', 'T1486', 'T1565', 'T1048'],
    infrastructure: { domains: 567, ips: 234, hostingPrefs: 'Compromised servers worldwide, mixing services for crypto' },
    activityPattern: { peakHours: '00:00-09:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['DeFi protocols', 'Cryptocurrency exchanges', 'Blockchain bridges', 'Crypto venture capital'],
    threatLevel: 5
  },
  {
    id: 'kimsuky', name: 'Kimsuky', aliases: ['Velvet Chollima', 'Thallium', 'Black Banshee', 'Emerald Sleet'],
    nationState: 'North Korea (RGB)', active: true,
    campaigns: [
      { name: 'South Korean government espionage', startDate: '2012-01', targets: 'South Korean government, think tanks', status: 'ongoing' },
      { name: 'Defense Research Theft 2026', startDate: '2026-03', targets: 'South Korean defense researchers', status: 'active' }
    ],
    tools: ['BabyShark', 'AppleSeed', 'FlowerPower', 'GoldDragon', 'RandomQuery', 'ReconShark'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059.005', 'T1547', 'T1003', 'T1005', 'T1041', 'T1071'],
    infrastructure: { domains: 389, ips: 145, hostingPrefs: 'Free hosting services, compromised Korean web servers' },
    activityPattern: { peakHours: '23:00-08:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['South Korean defense sector', 'Nuclear policy researchers', 'Defector organizations'],
    threatLevel: 4
  },
  {
    id: 'andariel', name: 'Andariel', aliases: ['Silent Chollima', 'Stonefly', 'Onyx Sleet', 'Plutonium'],
    nationState: 'North Korea (RGB)', active: true,
    campaigns: [
      { name: 'South Korean defense targeting', startDate: '2015-01', targets: 'South Korean defense, aerospace', status: 'ongoing' },
      { name: 'Enterprise Ransomware 2026', startDate: '2026-06', targets: 'South Korean enterprises', status: 'active' }
    ],
    tools: ['Maui ransomware', 'DTrack', 'YamaBot', 'MagicRAT', 'EarlyRat', 'NukeSped'],
    mitreAttack: ['T1190', 'T1059', 'T1486', 'T1082', 'T1005', 'T1071', 'T1027', 'T1047'],
    infrastructure: { domains: 201, ips: 98, hostingPrefs: 'Compromised South Korean servers, VPS providers' },
    activityPattern: { peakHours: '23:00-07:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['South Korean defense industry', 'Healthcare organizations', 'Nuclear energy sector'],
    threatLevel: 4
  },
  {
    id: 'apt33', name: 'APT33', aliases: ['Elfin', 'Magnallium', 'Refined Kitten', 'Peach Sandstorm'],
    nationState: 'Iran (IRGC)', active: true,
    campaigns: [
      { name: 'Shamoon operations', startDate: '2012-08', targets: 'Saudi Aramco, RasGas', status: 'completed' },
      { name: 'Gulf Oil Infrastructure 2026', startDate: '2026-05', targets: 'Gulf state oil and gas SCADA', status: 'active' }
    ],
    tools: ['Shamoon', 'StoneDrill', 'Tickler', 'POWERTON', 'TURNEDUP', 'ShapeShift'],
    mitreAttack: ['T1566.002', 'T1059', 'T1485', 'T1561', 'T1003', 'T1021', 'T1071', 'T1110'],
    infrastructure: { domains: 312, ips: 134, hostingPrefs: 'Iranian hosting, compromised Middle Eastern servers' },
    activityPattern: { peakHours: '04:30-12:30 UTC', peakDays: 'Sat-Thu' },
    currentTargets: ['Gulf state energy sector', 'Aviation industry', 'Petrochemical companies'],
    threatLevel: 4
  },
  {
    id: 'apt34', name: 'APT34', aliases: ['OilRig', 'Helix Kitten', 'IRN2', 'Hazel Sandstorm'],
    nationState: 'Iran (MOIS)', active: true,
    campaigns: [
      { name: 'Middle East government espionage', startDate: '2014-01', targets: 'Gulf state governments', status: 'ongoing' },
      { name: 'Diplomatic Intelligence 2026', startDate: '2026-02', targets: 'Gulf diplomatic networks', status: 'active' }
    ],
    tools: ['BONDUPDATER', 'QUADAGENT', 'RDAT', 'Karkoff', 'DNSpionage', 'SideTwist', 'Menorah'],
    mitreAttack: ['T1566.001', 'T1059.005', 'T1071.004', 'T1053', 'T1078', 'T1560', 'T1041', 'T1003'],
    infrastructure: { domains: 445, ips: 167, hostingPrefs: 'DNS tunneling infrastructure, compromised web servers' },
    activityPattern: { peakHours: '04:30-12:30 UTC', peakDays: 'Sat-Thu' },
    currentTargets: ['Gulf state governments', 'Financial sector', 'Telecom companies'],
    threatLevel: 4
  },
  {
    id: 'apt35', name: 'APT35', aliases: ['Charming Kitten', 'Phosphorus', 'Mint Sandstorm', 'NewsBeef', 'TA453'],
    nationState: 'Iran (IRGC)', active: true,
    campaigns: [
      { name: 'Academic credential harvesting', startDate: '2014-01', targets: 'US/UK universities, think tanks', status: 'ongoing' },
      { name: 'Israel Tech Espionage 2026', startDate: '2026-04', targets: 'Israeli tech and defense sector', status: 'active' }
    ],
    tools: ['HYPERSCRAPE', 'PowerLess', 'BellaCiao', 'MediaPl', 'KORG', 'CharmPower'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059.001', 'T1078', 'T1003', 'T1005', 'T1041', 'T1071.001'],
    infrastructure: { domains: 523, ips: 198, hostingPrefs: 'Typosquatted domains, compromised university infrastructure' },
    activityPattern: { peakHours: '04:00-12:00 UTC', peakDays: 'Sat-Thu' },
    currentTargets: ['Israeli technology sector', 'Nuclear policy experts', 'Journalists and activists'],
    threatLevel: 4
  },
  {
    id: 'muddywater', name: 'MuddyWater', aliases: ['Mercury', 'Mango Sandstorm', 'Static Kitten', 'TEMP.Zagros'],
    nationState: 'Iran (MOIS)', active: true,
    campaigns: [
      { name: 'Middle East government targeting', startDate: '2017-01', targets: 'Regional government agencies', status: 'ongoing' },
      { name: 'US Defense Phishing 2026', startDate: '2026-06', targets: 'US defense contractors', status: 'active' }
    ],
    tools: ['POWERSTATS', 'MuddyC2Go', 'PhonyC2', 'SHARPSTATS', 'Atera Agent (abused)', 'SimpleHelp (abused)'],
    mitreAttack: ['T1566.001', 'T1059.001', 'T1204', 'T1053', 'T1219', 'T1071', 'T1003', 'T1027'],
    infrastructure: { domains: 289, ips: 112, hostingPrefs: 'Abused legitimate remote access tools, cloud hosting' },
    activityPattern: { peakHours: '05:00-13:00 UTC', peakDays: 'Sat-Wed' },
    currentTargets: ['US defense contractors', 'Middle East governments', 'Telecom providers'],
    threatLevel: 3
  },
  {
    id: 'unit8200', name: 'Unit 8200 Operations', aliases: ['Duqu developers', 'Flame operators'],
    nationState: 'Israel (Unit 8200)', active: true,
    campaigns: [
      { name: 'Stuxnet (joint w/ US)', startDate: '2007-01', targets: 'Iranian nuclear program', status: 'completed' },
      { name: 'Regional Counter-threat Ops', startDate: '2026-01', targets: 'Iranian and proxy threat infrastructure', status: 'active' }
    ],
    tools: ['Stuxnet', 'Duqu', 'Flame', 'Gauss', 'Custom zero-day exploits'],
    mitreAttack: ['T1190', 'T1091', 'T1195', 'T1059', 'T1027', 'T1014', 'T1573', 'T1485'],
    infrastructure: { domains: 156, ips: 89, hostingPrefs: 'Highly compartmentalized, zero-day dependent' },
    activityPattern: { peakHours: '05:00-15:00 UTC', peakDays: 'Sun-Thu' },
    currentTargets: ['Iranian nuclear program', 'Hezbollah networks', 'Regional threat actors'],
    threatLevel: 3
  },
  {
    id: 'equation', name: 'Equation Group', aliases: ['EQGRP', 'Tilded Platform'],
    nationState: 'United States (NSA TAO)', active: true,
    campaigns: [
      { name: 'Global surveillance infrastructure', startDate: '2001-01', targets: 'Worldwide targets of interest', status: 'ongoing' },
      { name: 'Post-Shadow Brokers operations', startDate: '2017-06', targets: 'Nation-state targets', status: 'active' }
    ],
    tools: ['EquationDrug', 'GrayFish', 'DoubleFantasy', 'TripleFantasy', 'EQUATIONLASER', 'Fanny worm'],
    mitreAttack: ['T1195', 'T1542', 'T1014', 'T1027', 'T1573', 'T1071', 'T1059', 'T1005'],
    infrastructure: { domains: 300, ips: 500, hostingPrefs: 'Global relay network, firmware-level persistence' },
    activityPattern: { peakHours: '13:00-22:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Nation-state intelligence targets', 'Counter-proliferation', 'Counter-terrorism'],
    threatLevel: 3
  },
  {
    id: 'tao', name: 'TAO', aliases: ['Tailored Access Operations', 'NSA TAO'],
    nationState: 'United States (NSA)', active: true,
    campaigns: [
      { name: 'QUANTUM/FOXACID web exploitation', startDate: '2008-01', targets: 'Global intelligence targets', status: 'ongoing' },
      { name: 'Hunt Forward Operations 2026', startDate: '2026-01', targets: 'Allied network defense', status: 'active' }
    ],
    tools: ['QUANTUM', 'FOXACID', 'UNITEDRAKE', 'VALIDATOR', 'OLYMPUSFIRE', 'IRATEMONK'],
    mitreAttack: ['T1195.002', 'T1190', 'T1189', 'T1557', 'T1059', 'T1014', 'T1542', 'T1573'],
    infrastructure: { domains: 200, ips: 800, hostingPrefs: 'Classified infrastructure, global relay points' },
    activityPattern: { peakHours: '12:00-23:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Counter-intelligence', 'Counter-proliferation', 'Hunt-forward mission support'],
    threatLevel: 3
  },
  {
    id: 'oceanlotus', name: 'OceanLotus', aliases: ['APT32', 'Canvas Cyclone', 'SeaLotus', 'Cobalt Kitty'],
    nationState: 'Vietnam (MPS)', active: true,
    campaigns: [
      { name: 'Regional espionage', startDate: '2014-01', targets: 'ASEAN countries, dissidents', status: 'ongoing' },
      { name: 'ASEAN Diplomatic 2026', startDate: '2026-03', targets: 'ASEAN diplomatic communications', status: 'active' }
    ],
    tools: ['METALJACK', 'Kerrdown', 'Cobalt Strike (modified)', 'PhantomNet', 'Ratsnif'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059', 'T1055', 'T1003', 'T1005', 'T1041', 'T1071'],
    infrastructure: { domains: 678, ips: 234, hostingPrefs: 'Southeast Asian hosting, compromised legitimate websites' },
    activityPattern: { peakHours: '01:00-09:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Foreign auto manufacturers in Vietnam', 'ASEAN diplomatic staff', 'Dissident groups'],
    threatLevel: 3
  },
  {
    id: 'sidewinder', name: 'SideWinder', aliases: ['Rattlesnake', 'T-APT-04', 'Razor Tiger'],
    nationState: 'India (NTRO)', active: true,
    campaigns: [
      { name: 'Pakistan military targeting', startDate: '2012-01', targets: 'Pakistan military and government', status: 'ongoing' },
      { name: 'Pakistan Defense Ops 2026', startDate: '2026-04', targets: 'Pakistani military networks', status: 'active' }
    ],
    tools: ['SideWinder implant', 'StealerBot', 'Custom .NET backdoors', 'HTA downloader'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059.005', 'T1547', 'T1003', 'T1005', 'T1071', 'T1027'],
    infrastructure: { domains: 456, ips: 123, hostingPrefs: 'Indian hosting providers, typosquatted domains' },
    activityPattern: { peakHours: '03:00-11:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Pakistani military', 'Chinese government agencies', 'Sri Lankan government'],
    threatLevel: 3
  },
  {
    id: 'gamaredon', name: 'Gamaredon', aliases: ['Primitive Bear', 'Shuckworm', 'Actinium', 'Aqua Blizzard'],
    nationState: 'Russia (FSB Crimea)', active: true,
    campaigns: [
      { name: 'Ukraine government targeting', startDate: '2014-01', targets: 'Ukrainian government agencies', status: 'ongoing' },
      { name: 'Ukraine Persistent Ops 2026', startDate: '2026-01', targets: 'Ukrainian government and military', status: 'active' }
    ],
    tools: ['Pterodo', 'QuietSieve', 'ObfuBerry', 'GammaLoad', 'GammaSteel', 'Armageddon'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059.005', 'T1547.001', 'T1003', 'T1071', 'T1005', 'T1041'],
    infrastructure: { domains: 2345, ips: 876, hostingPrefs: 'High-volume domain registration, Crimean/Russian hosting' },
    activityPattern: { peakHours: '05:00-15:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Ukrainian government', 'Ukrainian military', 'Ukrainian critical infrastructure'],
    threatLevel: 4
  },
  {
    id: 'hafnium', name: 'Hafnium', aliases: ['Silk Typhoon', 'HAFNIUM'],
    nationState: 'China (MSS)', active: true,
    campaigns: [
      { name: 'Microsoft Exchange exploitation', startDate: '2021-01', targets: 'Global Exchange servers (250K+)', status: 'completed' },
      { name: 'Zero-Day Exploitation 2026', startDate: '2026-05', targets: 'Enterprise collaboration platforms', status: 'active' }
    ],
    tools: ['China Chopper', 'ASPXSpy', 'Covenant', 'Nishang', 'PowerCat', 'Custom web shells'],
    mitreAttack: ['T1190', 'T1505.003', 'T1059.001', 'T1003', 'T1560', 'T1041', 'T1078', 'T1071'],
    infrastructure: { domains: 312, ips: 567, hostingPrefs: 'Leased VPS in United States, compromised servers' },
    activityPattern: { peakHours: '00:00-08:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['Enterprise collaboration platforms', 'US defense contractors', 'Research institutions'],
    threatLevel: 4
  },
  {
    id: 'darkhotel', name: 'DarkHotel', aliases: ['Luder', 'Shadow Crane', 'Dubnium'],
    nationState: 'South Korea (NIS - attributed)', active: true,
    campaigns: [
      { name: 'Hotel WiFi exploitation', startDate: '2007-01', targets: 'Business executives in luxury hotels', status: 'ongoing' },
      { name: 'Executive Targeting 2026', startDate: '2026-02', targets: 'Foreign executives visiting Asia', status: 'active' }
    ],
    tools: ['DarkHotel implant', 'Inexsmar', 'Tapaoux', 'Pioneer', 'Karba'],
    mitreAttack: ['T1189', 'T1566.001', 'T1204', 'T1059', 'T1547', 'T1056', 'T1003', 'T1071'],
    infrastructure: { domains: 234, ips: 89, hostingPrefs: 'Compromised hotel networks, premium hosting' },
    activityPattern: { peakHours: '23:00-07:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Business executives', 'Diplomats', 'Government officials traveling in Asia'],
    threatLevel: 3
  },
  {
    id: 'winnti', name: 'Winnti', aliases: ['APT41 subset', 'Barium', 'Wicked Spider'],
    nationState: 'China (MSS/PLA)', active: true,
    campaigns: [
      { name: 'Gaming industry supply chain', startDate: '2012-01', targets: 'Online gaming companies', status: 'ongoing' },
      { name: 'Tech Supply Chain 2026', startDate: '2026-01', targets: 'Technology supply chains', status: 'active' }
    ],
    tools: ['Winnti RAT', 'ShadowPad', 'PlugX', 'CROSSWALK', 'Spyder'],
    mitreAttack: ['T1195.002', 'T1059', 'T1055', 'T1014', 'T1027', 'T1071', 'T1003', 'T1041'],
    infrastructure: { domains: 789, ips: 345, hostingPrefs: 'Chinese cloud, compromised gaming infrastructure' },
    activityPattern: { peakHours: '00:00-09:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['Gaming companies', 'Semiconductor firms', 'Cloud service providers'],
    threatLevel: 4
  },
  {
    id: 'stonepanda', name: 'Stone Panda', aliases: ['APT10', 'MenuPass', 'Red Apollo', 'POTASSIUM'],
    nationState: 'China (MSS Tianjin)', active: true,
    campaigns: [
      { name: 'Cloud Hopper', startDate: '2016-01', targets: 'Managed service providers globally', status: 'completed' },
      { name: 'MSP Exploitation 2026', startDate: '2026-03', targets: 'Global managed service providers', status: 'active' }
    ],
    tools: ['QuasarRAT', 'PlugX', 'Poison Ivy', 'ChChes', 'RedLeaves', 'ANEL'],
    mitreAttack: ['T1199', 'T1078', 'T1059', 'T1053', 'T1003', 'T1041', 'T1071', 'T1560'],
    infrastructure: { domains: 567, ips: 234, hostingPrefs: 'Compromised MSP infrastructure, Chinese hosting' },
    activityPattern: { peakHours: '00:00-09:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Managed service providers', 'Japanese defense sector', 'Pharmaceutical companies'],
    threatLevel: 4
  },
  {
    id: 'machete', name: 'Machete', aliases: ['El Machete', 'APT-C-43'],
    nationState: 'Unknown (Latin America)', active: true,
    campaigns: [
      { name: 'Latin American military espionage', startDate: '2010-01', targets: 'Latin American military organizations', status: 'ongoing' },
      { name: 'Regional Military Intel 2026', startDate: '2026-04', targets: 'Colombian and Ecuadorian military', status: 'active' }
    ],
    tools: ['Machete malware', 'Pythy', 'Custom Python backdoors'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059.006', 'T1005', 'T1113', 'T1056', 'T1041', 'T1071'],
    infrastructure: { domains: 123, ips: 56, hostingPrefs: 'Latin American hosting providers, free dynamic DNS' },
    activityPattern: { peakHours: '12:00-22:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Latin American military', 'Diplomatic missions', 'Government agencies'],
    threatLevel: 2
  },
  {
    id: 'darkside', name: 'DarkSide', aliases: ['Carbon Spider (overlap)'],
    nationState: 'Russia (Cybercriminal - state-tolerated)', active: false,
    campaigns: [
      { name: 'Colonial Pipeline attack', startDate: '2021-05', targets: 'Colonial Pipeline (US fuel supply)', status: 'completed' },
      { name: 'Ransomware-as-a-Service operations', startDate: '2020-08', targets: 'US and EU enterprises', status: 'shutdown' }
    ],
    tools: ['DarkSide ransomware', 'Custom data exfiltration tools', 'Cobalt Strike'],
    mitreAttack: ['T1486', 'T1078', 'T1059', 'T1560', 'T1041', 'T1071', 'T1027', 'T1003'],
    infrastructure: { domains: 89, ips: 45, hostingPrefs: 'Bullet-proof Russian hosting, Tor hidden services' },
    activityPattern: { peakHours: '08:00-18:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: [], threatLevel: 1
  },
  {
    id: 'revil', name: 'REvil', aliases: ['Sodinokibi', 'Gold Southfield', 'Pinchy Spider'],
    nationState: 'Russia (Cybercriminal - state-tolerated)', active: false,
    campaigns: [
      { name: 'Kaseya supply chain attack', startDate: '2021-07', targets: '1,500+ organizations via Kaseya VSA', status: 'completed' },
      { name: 'JBS Foods attack', startDate: '2021-05', targets: 'JBS Foods ($11M ransom)', status: 'completed' }
    ],
    tools: ['REvil/Sodinokibi ransomware', 'Custom exfiltration tools', 'Cobalt Strike'],
    mitreAttack: ['T1486', 'T1195.002', 'T1059', 'T1078', 'T1560', 'T1041', 'T1071', 'T1490'],
    infrastructure: { domains: 123, ips: 67, hostingPrefs: 'Tor hidden services, Russian bullet-proof hosting' },
    activityPattern: { peakHours: '07:00-17:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: [], threatLevel: 1
  },
  {
    id: 'conti', name: 'Conti', aliases: ['Wizard Spider', 'Gold Ulrick', 'DEV-0193'],
    nationState: 'Russia (Cybercriminal - state-tolerated)', active: false,
    campaigns: [
      { name: 'Global ransomware operations', startDate: '2020-05', targets: '1,000+ organizations globally', status: 'shutdown' },
      { name: 'Costa Rica government attack', startDate: '2022-04', targets: 'Costa Rica government', status: 'completed' }
    ],
    tools: ['Conti ransomware', 'BazarLoader', 'TrickBot', 'Anchor', 'Cobalt Strike'],
    mitreAttack: ['T1486', 'T1059', 'T1078', 'T1003', 'T1021', 'T1560', 'T1041', 'T1490'],
    infrastructure: { domains: 234, ips: 156, hostingPrefs: 'Russian hosting, Tor services' },
    activityPattern: { peakHours: '07:00-19:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: [], threatLevel: 1
  },
  {
    id: 'lockbit', name: 'LockBit', aliases: ['Gold Mystic', 'LockBit Gang', 'Bitwise Spider'],
    nationState: 'Russia (Cybercriminal)', active: true,
    campaigns: [
      { name: 'LockBit 3.0 RaaS operations', startDate: '2022-06', targets: 'Global enterprises', status: 'disrupted' },
      { name: 'ICBC Financial Services attack', startDate: '2023-11', targets: 'ICBC', status: 'completed' },
      { name: 'LockBit 4.0 Resurgence', startDate: '2026-06', targets: 'Global manufacturing and healthcare', status: 'active' }
    ],
    tools: ['LockBit 3.0/4.0 ransomware', 'StealBit', 'Cobalt Strike', 'Metasploit'],
    mitreAttack: ['T1486', 'T1078', 'T1190', 'T1059', 'T1003', 'T1560', 'T1041', 'T1490'],
    infrastructure: { domains: 345, ips: 234, hostingPrefs: 'Tor hidden services, bullet-proof hosting globally' },
    activityPattern: { peakHours: '06:00-20:00 UTC', peakDays: 'Mon-Sun' },
    currentTargets: ['Healthcare organizations', 'Manufacturing sector', 'Financial services'],
    threatLevel: 4
  },
  {
    id: 'blackcat', name: 'BlackCat', aliases: ['ALPHV', 'Sphynx', 'Noberus'],
    nationState: 'Russia (Cybercriminal)', active: true,
    campaigns: [
      { name: 'Change Healthcare attack', startDate: '2024-02', targets: 'Change Healthcare', status: 'completed' },
      { name: 'Healthcare Sector Campaign', startDate: '2026-07', targets: 'US hospital networks', status: 'active' }
    ],
    tools: ['ALPHV/BlackCat ransomware (Rust)', 'ExMatter', 'Eamfo', 'Cobalt Strike'],
    mitreAttack: ['T1486', 'T1078', 'T1059', 'T1190', 'T1003', 'T1560', 'T1041', 'T1490'],
    infrastructure: { domains: 189, ips: 123, hostingPrefs: 'Tor hidden services, compromised cloud accounts' },
    activityPattern: { peakHours: '08:00-22:00 UTC', peakDays: 'Mon-Sun' },
    currentTargets: ['US healthcare organizations', 'Financial services', 'Legal firms'],
    threatLevel: 4
  },
  {
    id: 'clop', name: 'Cl0p', aliases: ['TA505 (affiliate)', 'FIN11 (overlap)', 'Lace Tempest'],
    nationState: 'Russia (Cybercriminal)', active: true,
    campaigns: [
      { name: 'MOVEit Transfer exploitation', startDate: '2023-05', targets: '2,500+ organizations', status: 'completed' },
      { name: 'File Transfer Zero-Day Campaign', startDate: '2026-08', targets: 'Enterprise file transfer solutions', status: 'active' }
    ],
    tools: ['Cl0p ransomware', 'DEWMODE', 'LEMURLOOT', 'TrueBot', 'FlawedAmmyy'],
    mitreAttack: ['T1190', 'T1486', 'T1059', 'T1505.003', 'T1078', 'T1560', 'T1041', 'T1071'],
    infrastructure: { domains: 267, ips: 178, hostingPrefs: 'Tor leak sites, exploited file transfer infrastructure' },
    activityPattern: { peakHours: '06:00-16:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Enterprise file transfer platforms', 'Managed file transfer services'],
    threatLevel: 4
  },
  {
    id: 'transparent_tribe', name: 'Transparent Tribe', aliases: ['APT36', 'Mythic Leopard', 'ProjectM'],
    nationState: 'Pakistan (ISI)', active: true,
    campaigns: [
      { name: 'Indian military targeting', startDate: '2013-01', targets: 'Indian military and government', status: 'ongoing' },
      { name: 'Indian Defense RAT Campaign', startDate: '2026-05', targets: 'Indian defense officials', status: 'active' }
    ],
    tools: ['CrimsonRAT', 'ObliqueRAT', 'Peppy RAT', 'Custom Android spyware'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059', 'T1547', 'T1005', 'T1113', 'T1041', 'T1071'],
    infrastructure: { domains: 234, ips: 89, hostingPrefs: 'Pakistani hosting, free hosting services' },
    activityPattern: { peakHours: '03:00-11:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['Indian military personnel', 'Indian government officials'],
    threatLevel: 3
  },
  {
    id: 'strongpity', name: 'StrongPity', aliases: ['Promethium', 'APT-C-41'],
    nationState: 'Turkey (MIT)', active: true,
    campaigns: [
      { name: 'Watering hole attacks', startDate: '2016-01', targets: 'Kurdish organizations', status: 'ongoing' },
      { name: 'Trojanized Apps Campaign', startDate: '2026-02', targets: 'Kurdish diaspora in Europe', status: 'active' }
    ],
    tools: ['StrongPity implant', 'Trojanized WinRAR/TrueCrypt', 'Custom Android spyware'],
    mitreAttack: ['T1189', 'T1195.002', 'T1204', 'T1059', 'T1547', 'T1005', 'T1056', 'T1041'],
    infrastructure: { domains: 156, ips: 67, hostingPrefs: 'Turkish and European hosting' },
    activityPattern: { peakHours: '06:00-16:00 UTC', peakDays: 'Mon-Fri' },
    currentTargets: ['Kurdish organizations', 'Political opposition'],
    threatLevel: 2
  },
  {
    id: 'scarcruft', name: 'ScarCruft', aliases: ['APT37', 'Reaper', 'Group123', 'Ricochet Chollima'],
    nationState: 'North Korea (MSS)', active: true,
    campaigns: [
      { name: 'South Korean targeting', startDate: '2012-01', targets: 'South Korean government and military', status: 'ongoing' },
      { name: 'Defector Surveillance 2026', startDate: '2026-03', targets: 'North Korean defectors', status: 'active' }
    ],
    tools: ['RokRAT', 'BLUELIGHT', 'Goldbackdoor', 'Dolphin', 'M2RAT'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059', 'T1547', 'T1113', 'T1005', 'T1041', 'T1071'],
    infrastructure: { domains: 178, ips: 67, hostingPrefs: 'Cloud services (pCloud, Yandex, OneDrive)' },
    activityPattern: { peakHours: '23:00-08:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['North Korean defectors', 'South Korean government', 'Journalists'],
    threatLevel: 3
  },
  {
    id: 'bluenoroff', name: 'BlueNoroff', aliases: ['APT38', 'Stardust Chollima', 'Sapphire Sleet'],
    nationState: 'North Korea (RGB)', active: true,
    campaigns: [
      { name: 'Bangladesh Bank heist', startDate: '2016-02', targets: 'Bangladesh Bank ($81M)', status: 'completed' },
      { name: 'Crypto VC Social Engineering', startDate: '2026-06', targets: 'Crypto venture capital firms', status: 'active' }
    ],
    tools: ['SWIFT malware', 'TraderTraitor', 'AppleJeus', 'COPPERHEDGE', 'Custom macOS malware'],
    mitreAttack: ['T1566.001', 'T1204', 'T1059', 'T1078', 'T1005', 'T1565', 'T1041', 'T1071'],
    infrastructure: { domains: 345, ips: 112, hostingPrefs: 'Compromised fintech infrastructure' },
    activityPattern: { peakHours: '23:00-09:00 UTC', peakDays: 'Mon-Sat' },
    currentTargets: ['Cryptocurrency exchanges', 'DeFi platforms', 'Crypto venture capital'],
    threatLevel: 4
  },
  {
    id: 'mosesstaff', name: 'Moses Staff', aliases: ['Abraham Ax (linked)', 'Marigold Sandstorm'],
    nationState: 'Iran (IRGC)', active: true,
    campaigns: [
      { name: 'Israeli organization attacks', startDate: '2021-09', targets: 'Israeli companies and government', status: 'ongoing' },
      { name: 'Wiper Operations 2026', startDate: '2026-04', targets: 'Israeli technology companies', status: 'active' }
    ],
    tools: ['StrifeWater RAT', 'DCSrv (wiper)', 'PyDCrypt', 'Custom disk encryptors'],
    mitreAttack: ['T1190', 'T1059', 'T1485', 'T1561', 'T1078', 'T1003', 'T1071', 'T1027'],
    infrastructure: { domains: 89, ips: 34, hostingPrefs: 'Compromised servers, Tor hidden services' },
    activityPattern: { peakHours: '04:00-12:00 UTC', peakDays: 'Sat-Thu' },
    currentTargets: ['Israeli technology sector', 'Israeli government agencies'],
    threatLevel: 3
  }
];

// ============================================================================
// THREAT PREDICTIONS (26 active predictions)
// ============================================================================
var THREAT_PREDICTIONS = [
  { id: 'pred-001', adversary: 'Volt Typhoon', targetSector: 'Water Utilities', targetCountry: 'United States', attackType: 'disruption', timeline: '72h', confidence: 87, indicators: ['SOHO router botnet expansion in US water utility ASNs', 'Increased SCADA protocol scanning from known Volt Typhoon IPs', 'New C2 domains registered mimicking water utility vendors', 'PLC-targeting malware samples detected in threat feeds'], recommendedActions: ['Isolate OT networks from IT', 'Audit SOHO router firmware in utility networks', 'Enable enhanced logging on SCADA systems', 'Deploy ICS-specific IDS signatures'], historicalAccuracy: 78, status: 'active', timestamp: '2026-09-13T02:14:00Z' },
  { id: 'pred-002', adversary: 'Sandworm', targetSector: 'Energy Grid', targetCountry: 'NATO Baltic States', attackType: 'disruption', timeline: '1week', confidence: 73, indicators: ['Sandworm scanning Baltic state power grid SCADA', 'Industroyer2 variant in Eastern European honeypots', 'Russian military exercises near Baltic borders', 'Increased GRU SIGINT activity in region'], recommendedActions: ['Alert Baltic CERT teams', 'Deploy ICS monitoring sensors', 'Prepare grid isolation procedures', 'Coordinate with NATO CCDCOE'], historicalAccuracy: 82, status: 'active', timestamp: '2026-09-12T18:30:00Z' },
  { id: 'pred-003', adversary: 'Lazarus Group', targetSector: 'Cryptocurrency/DeFi', targetCountry: 'Global', attackType: 'financial', timeline: '48h', confidence: 91, indicators: ['New TraderTraitor variant with bridge exploit code', 'Lazarus wallets consolidating through mixers', 'Social engineering of bridge protocol developers', 'Zero-day in cross-chain bridge smart contract'], recommendedActions: ['Alert major DeFi bridge operators', 'Monitor Lazarus wallet addresses', 'Audit bridge smart contract permissions', 'Enable multi-sig enforcement'], historicalAccuracy: 85, status: 'active', timestamp: '2026-09-13T04:22:00Z' },
  { id: 'pred-004', adversary: 'APT33', targetSector: 'Oil & Gas', targetCountry: 'Saudi Arabia', attackType: 'destruction', timeline: '1week', confidence: 68, indicators: ['New Shamoon variant with ICS modules detected', 'APT33 infrastructure staging in Gulf hosting', 'Iranian military rhetoric escalating', 'Reconnaissance of Saudi SCADA vendors'], recommendedActions: ['Elevate SOC monitoring for Shamoon IOCs', 'Verify OT network segmentation', 'Update ICS incident response playbooks', 'Brief facility operators on social engineering'], historicalAccuracy: 71, status: 'active', timestamp: '2026-09-12T14:00:00Z' },
  { id: 'pred-005', adversary: 'APT29', targetSector: 'Government', targetCountry: 'European Union', attackType: 'espionage', timeline: '24h', confidence: 94, indicators: ['EnvyScout phishing lures themed around EU summit', 'APT29 C2 activated targeting EU diplomatic IPs', 'New MagicWeb variant for EU identity federation', 'SVR HUMINT indicates tasking against EU policy'], recommendedActions: ['Alert EU diplomatic security services', 'Block known APT29 C2 indicators', 'Audit federated identity configurations', 'Implement phishing-resistant MFA'], historicalAccuracy: 88, status: 'active', timestamp: '2026-09-13T06:15:00Z' },
  { id: 'pred-006', adversary: 'Salt Typhoon', targetSector: 'Telecommunications', targetCountry: 'United States', attackType: 'espionage', timeline: '24h', confidence: 92, indicators: ['Persistent access confirmed in 4 major US telecoms', 'CALEA wiretap queries from anomalous IPs', 'New GhostEmperor rootkit in telecom core networks', 'Targeted collection of government official CDRs'], recommendedActions: ['Deploy enhanced network monitoring in telecom core', 'Audit CALEA system access logs', 'Implement zero-trust for core network management', 'Coordinate with FBI and CISA'], historicalAccuracy: 90, status: 'active', timestamp: '2026-09-13T01:30:00Z' },
  { id: 'pred-007', adversary: 'Cl0p', targetSector: 'Enterprise Technology', targetCountry: 'Global', attackType: 'ransomware', timeline: '48h', confidence: 79, indicators: ['Cl0p operators probing file transfer solutions', 'Dark web recruitment for MFT exploit devs', 'Cl0p staging infrastructure activated', 'Increased scanning of MFT ports globally'], recommendedActions: ['Audit all MFT solutions for latest patches', 'Implement network segmentation for file transfer', 'Enable enhanced file transfer monitoring', 'Prepare for mass data exfiltration'], historicalAccuracy: 83, status: 'active', timestamp: '2026-09-12T22:45:00Z' },
  { id: 'pred-008', adversary: 'APT41', targetSector: 'Cloud Services', targetCountry: 'United States', attackType: 'espionage', timeline: '72h', confidence: 76, indicators: ['APT41 ShadowPad with cloud API modules', 'Reconnaissance of cloud management plane endpoints', 'Supply chain probing of cloud dependencies', 'Chinese MSS tasking indicates cloud targeting'], recommendedActions: ['Alert major cloud providers to APT41 IOCs', 'Audit cloud management plane access controls', 'Monitor for anomalous cloud API calls', 'Review supply chain integrity'], historicalAccuracy: 74, status: 'active', timestamp: '2026-09-12T20:00:00Z' },
  { id: 'pred-009', adversary: 'Kimsuky', targetSector: 'Defense', targetCountry: 'South Korea', attackType: 'espionage', timeline: '24h', confidence: 88, indicators: ['ReconShark phishing targeting defense researchers', 'New Kimsuky C2 domains mimicking defense journals', 'Credential harvesting targeting KAIST emails', 'Korean defense-themed lure documents detected'], recommendedActions: ['Alert South Korean defense institutions', 'Block newly registered suspicious domains', 'Enforce phishing-resistant authentication', 'Deploy ReconShark detection'], historicalAccuracy: 81, status: 'active', timestamp: '2026-09-13T03:00:00Z' },
  { id: 'pred-010', adversary: 'LockBit 4.0', targetSector: 'Healthcare', targetCountry: 'United States', attackType: 'ransomware', timeline: '48h', confidence: 82, indicators: ['LockBit affiliates purchasing healthcare VPN creds', 'New variant with healthcare data ID modules', 'Reconnaissance scanning of US hospital perimeters', 'LockBit leak site indicating healthcare targeting'], recommendedActions: ['Verify VPN MFA enforcement', 'Update endpoint protection signatures', 'Test backup and recovery procedures', 'Brief healthcare IT on ransomware indicators'], historicalAccuracy: 79, status: 'active', timestamp: '2026-09-12T16:30:00Z' },
  { id: 'pred-011', adversary: 'Transparent Tribe', targetSector: 'Military', targetCountry: 'India', attackType: 'espionage', timeline: '72h', confidence: 74, indicators: ['CrimsonRAT with new anti-analysis features', 'Phishing lures themed around border tensions', 'Infrastructure with Indian defense-themed domains', 'Android spyware targeting military messaging apps'], recommendedActions: ['Alert Indian defense personnel', 'Block Transparent Tribe domains', 'Audit military mobile device management', 'Deploy enhanced email filtering'], historicalAccuracy: 72, status: 'active', timestamp: '2026-09-12T12:15:00Z' },
  { id: 'pred-012', adversary: 'APT35', targetSector: 'Technology', targetCountry: 'Israel', attackType: 'espionage', timeline: '48h', confidence: 80, indicators: ['Charming Kitten targeting Israeli tech companies', 'New BellaCiao variant for Israeli configurations', 'Social media recon of Israeli tech employees', 'IRGC tasking aligned with nuclear tensions'], recommendedActions: ['Alert Israeli tech security teams', 'Monitor for BellaCiao IOCs', 'Audit employee social media exposure', 'Enhance R&D system authentication'], historicalAccuracy: 76, status: 'active', timestamp: '2026-09-12T10:45:00Z' },
  { id: 'pred-013', adversary: 'BlackCat/ALPHV', targetSector: 'Healthcare', targetCountry: 'United States', attackType: 'ransomware', timeline: '72h', confidence: 71, indicators: ['BlackCat purchasing hospital network access', 'New ALPHV with billing system targeting', 'Scanning of US hospital EHR endpoints', 'Dark web discussion of healthcare follow-ons'], recommendedActions: ['Audit initial access broker listings', 'Patch EHR systems', 'Implement clinical network segmentation', 'Review cyber insurance coverage'], historicalAccuracy: 73, status: 'active', timestamp: '2026-09-11T23:00:00Z' },
  { id: 'pred-014', adversary: 'Gamaredon', targetSector: 'Government', targetCountry: 'Ukraine', attackType: 'espionage', timeline: '24h', confidence: 95, indicators: ['Massive domain registration burst by known Gamaredon emails', 'GammaSteel compiled within last 24 hours', 'Phishing with Ukrainian military document lures', 'C2 beaconing from Ukrainian government IPs'], recommendedActions: ['Alert CERT-UA with latest IOCs', 'Deploy Gamaredon-specific YARA rules', 'Implement USB device restrictions', 'Block suspicious .site and .space domains'], historicalAccuracy: 92, status: 'active', timestamp: '2026-09-13T05:30:00Z' },
  { id: 'pred-015', adversary: 'Turla', targetSector: 'Government', targetCountry: 'France', attackType: 'espionage', timeline: '1week', confidence: 65, indicators: ['TinyTurla-NG beacon in French government traffic', 'Turla SSL certificate patterns on new infrastructure', 'FSB tasking against French foreign policy', 'DNS queries to known Turla tunneling infra'], recommendedActions: ['Alert ANSSI with Turla indicators', 'Audit DNS logs for tunneling', 'Deploy enhanced diplomatic monitoring', 'Review VPN access logs'], historicalAccuracy: 70, status: 'monitoring', timestamp: '2026-09-11T20:15:00Z' },
  { id: 'pred-016', adversary: 'SideWinder', targetSector: 'Military', targetCountry: 'Pakistan', attackType: 'espionage', timeline: '48h', confidence: 77, indicators: ['SideWinder phishing targeting Pakistani military domains', 'New StealerBot for Pakistan-specific targets', 'India-Pakistan border tensions elevating', 'HTA downloader with Pakistani military content'], recommendedActions: ['Alert Pakistani military cybersecurity', 'Block known SideWinder domains', 'Implement enhanced email security', 'Monitor for StealerBot C2'], historicalAccuracy: 75, status: 'active', timestamp: '2026-09-12T08:30:00Z' },
  { id: 'pred-017', adversary: 'OceanLotus', targetSector: 'Manufacturing', targetCountry: 'Vietnam', attackType: 'espionage', timeline: '72h', confidence: 69, indicators: ['OceanLotus watering hole on Vietnamese business sites', 'PhantomNet C2 targeting foreign auto manufacturers', 'Recon of factory network perimeters from Vietnamese IPs', 'METALJACK with industrial targeting capabilities'], recommendedActions: ['Alert foreign manufacturers in Vietnam', 'Monitor for METALJACK IOCs', 'Audit web proxy logs', 'Implement application whitelisting'], historicalAccuracy: 67, status: 'monitoring', timestamp: '2026-09-11T14:00:00Z' },
  { id: 'pred-018', adversary: 'MuddyWater', targetSector: 'Defense', targetCountry: 'United States', attackType: 'espionage', timeline: '1week', confidence: 72, indicators: ['MuddyC2Go targeting US defense contractor IPs', 'Phishing lures themed around defense procurement', 'Legitimate remote access tools being staged', 'MOIS tasking indicates US defense prioritization'], recommendedActions: ['Alert DIB sector cybersecurity teams', 'Monitor for legitimate remote access tool abuse', 'Block MuddyWater C2 indicators', 'Audit contractor VPN access'], historicalAccuracy: 70, status: 'active', timestamp: '2026-09-12T06:00:00Z' },
  { id: 'pred-019', adversary: 'Sandworm', targetSector: 'Telecommunications', targetCountry: 'Ukraine', attackType: 'disruption', timeline: '48h', confidence: 85, indicators: ['Sandworm scanning Ukrainian telecom backbone', 'CaddyWiper with telecom-specific functionality', 'Correlated with Russian military tempo increase', 'Pattern of telecom attacks preceding kinetic ops'], recommendedActions: ['Alert Ukrainian telecom operators', 'Deploy Sandworm ICS detection rules', 'Verify backup comms readiness', 'Coordinate with CERT-UA and NATO CCDCOE'], historicalAccuracy: 86, status: 'active', timestamp: '2026-09-13T00:45:00Z' },
  { id: 'pred-020', adversary: 'APT29', targetSector: 'Cloud Infrastructure', targetCountry: 'United States', attackType: 'espionage', timeline: '72h', confidence: 78, indicators: ['APT29 probing Microsoft 365 government tenants', 'New FoggyWeb variant for Azure AD Federation', 'Credential stuffing against cloud admin accounts', 'SVR prioritizes US cloud government services'], recommendedActions: ['Audit Azure AD Federation Server configs', 'Implement conditional access for admin accounts', 'Deploy enhanced cloud management monitoring', 'Review OAuth application permissions'], historicalAccuracy: 80, status: 'active', timestamp: '2026-09-12T04:30:00Z' },
  { id: 'pred-021', adversary: 'APT1', targetSector: 'Aerospace', targetCountry: 'United States', attackType: 'espionage', timeline: '1week', confidence: 66, indicators: ['APT1-linked domains mimicking aerospace portals', 'WEBC2 variant in aerospace threat feeds', 'PLA SIGINT on fighter jet development programs', 'Social engineering targeting aerospace engineers'], recommendedActions: ['Alert aerospace contractors', 'Block newly registered suspicious domains', 'Brief employees on social engineering', 'Audit contractor portal access logs'], historicalAccuracy: 68, status: 'monitoring', timestamp: '2026-09-11T16:00:00Z' },
  { id: 'pred-022', adversary: 'DarkHotel', targetSector: 'Government/Corporate', targetCountry: 'Japan', attackType: 'espionage', timeline: '72h', confidence: 63, indicators: ['Hotel WiFi exploit toolkit updated', 'Japanese business delegation identified as targets', 'DarkHotel infrastructure near major conference', 'Zero-day browser exploit matching procurement patterns'], recommendedActions: ['Alert Japanese diplomatic security', 'Deploy VPN requirements for travel', 'Issue travel advisory for conference attendees', 'Coordinate with hotel security'], historicalAccuracy: 65, status: 'monitoring', timestamp: '2026-09-11T11:30:00Z' },
  { id: 'pred-023', adversary: 'Sea Turtle', targetSector: 'Government', targetCountry: 'Middle East', attackType: 'espionage', timeline: '1week', confidence: 61, indicators: ['DNS hijacking on Middle Eastern government domains', 'New SSL certificates mimicking government services', 'Turkish intelligence tasking against regional rivals', 'BGP anomalies affecting Middle Eastern ASNs'], recommendedActions: ['Implement DNSSEC', 'Monitor certificate transparency logs', 'Alert regional CERT teams', 'Audit DNS registrar security'], historicalAccuracy: 64, status: 'monitoring', timestamp: '2026-09-11T09:00:00Z' },
  { id: 'pred-024', adversary: 'Moses Staff', targetSector: 'Technology', targetCountry: 'Israel', attackType: 'destruction', timeline: '1week', confidence: 70, indicators: ['New DCSrv wiper for Israeli systems', 'Moses Staff leak site updated', 'IRGC rhetoric against Israeli tech escalating', 'Exploitation attempts against Israeli platforms'], recommendedActions: ['Alert Israeli tech companies', 'Verify offline backup integrity', 'Deploy wiper-specific detection', 'Implement application whitelisting'], historicalAccuracy: 69, status: 'active', timestamp: '2026-09-12T02:15:00Z' },
  { id: 'pred-025', adversary: 'Andariel', targetSector: 'Nuclear Energy', targetCountry: 'South Korea', attackType: 'espionage', timeline: '48h', confidence: 75, indicators: ['Andariel malware targeting nuclear facility systems', 'Recon of South Korean nuclear research networks', 'NK intelligence prioritizes nuclear tech acquisition', 'NukeSped with nuclear-specific data harvesting'], recommendedActions: ['Alert nuclear facility operators', 'Deploy ICS monitoring for nuclear systems', 'Audit remote access to nuclear networks', 'Coordinate with KINAC'], historicalAccuracy: 73, status: 'active', timestamp: '2026-09-12T15:45:00Z' },
  { id: 'pred-026', adversary: 'Volt Typhoon + Salt Typhoon', targetSector: 'Multi-sector Critical Infrastructure', targetCountry: 'United States', attackType: 'disruption', timeline: '1week', confidence: 81, indicators: ['Coordinated pre-positioning across water, power, telecom', 'PLA planning documents indicate cyber-kinetic scenarios', 'Taiwan Strait tensions at highest level since 2022', 'Both groups activating dormant implants'], recommendedActions: ['Elevate national cyber threat level to SEVERE', 'Activate CISA Shields Up protocol', 'Deploy monitoring to all critical infrastructure', 'Brief White House NSC', 'Activate Five Eyes information sharing'], historicalAccuracy: 77, status: 'active', timestamp: '2026-09-13T07:00:00Z' }
];

// ============================================================================
// EARLY WARNING INDICATORS (44 entries)
// ============================================================================
var EARLY_WARNING_INDICATORS = [
  { id: 'ew-001', category: 'infra_staging', timestamp: '2026-09-13T06:30:00Z', source: 'DNS Passive Monitoring', confidence: 89, nationState: 'China', description: '47 new domains registered mimicking US water utility vendor portals via Volt Typhoon-linked registrant', recommendedAction: 'Block domains at DNS resolver level, alert US water utilities', severity: 'critical' },
  { id: 'ew-002', category: 'recon_surge', timestamp: '2026-09-13T05:15:00Z', source: 'Global Honeypot Network', confidence: 85, nationState: 'Russia', description: '340% increase in SCADA protocol scanning from known Sandworm IP ranges targeting NATO Baltic states', recommendedAction: 'Alert Baltic CERTs, deploy ICS-specific honeypots', severity: 'critical' },
  { id: 'ew-003', category: 'darkweb', timestamp: '2026-09-13T04:00:00Z', source: 'Dark Web Intelligence', confidence: 92, nationState: 'North Korea', description: 'Lazarus-affiliated actor purchasing cross-chain bridge zero-day exploit for $2.5M on underground market', recommendedAction: 'Alert major DeFi bridge operators, increase monitoring', severity: 'critical' },
  { id: 'ew-004', category: 'supply_chain', timestamp: '2026-09-13T03:45:00Z', source: 'Software Supply Chain Monitor', confidence: 78, nationState: 'China', description: 'Anomalous access patterns on major cloud provider package repository from APT41-linked infrastructure', recommendedAction: 'Audit cloud provider package integrity, alert DevSecOps teams', severity: 'high' },
  { id: 'ew-005', category: 'bgp_anomaly', timestamp: '2026-09-13T03:30:00Z', source: 'BGP Monitoring Service', confidence: 94, nationState: 'Unknown', description: 'Suspicious BGP route announcement attempting to redirect traffic for major US bank ASN through Eastern European AS', recommendedAction: 'Alert affected financial institution, notify upstream providers', severity: 'critical' },
  { id: 'ew-006', category: 'dns_anomaly', timestamp: '2026-09-13T02:55:00Z', source: 'DNS Monitoring', confidence: 87, nationState: 'Iran', description: 'DNS records for Saudi Arabian oil company SCADA portals changed to point to Iranian-hosted infrastructure', recommendedAction: 'Implement DNSSEC validation, alert Saudi CERT', severity: 'critical' },
  { id: 'ew-007', category: 'infra_staging', timestamp: '2026-09-13T02:30:00Z', source: 'SSL Certificate Transparency', confidence: 83, nationState: 'Russia', description: '23 SSL certificates issued for domains mimicking NATO logistics portals, privacy-protected registration', recommendedAction: 'Block certificate hashes, alert NATO cyber defense', severity: 'high' },
  { id: 'ew-008', category: 'recon_surge', timestamp: '2026-09-13T02:00:00Z', source: 'ICS-CERT', confidence: 81, nationState: 'Iran', description: 'Targeted DNS enumeration of US energy sector SCADA domains from APT33-attributed infrastructure', recommendedAction: 'Alert US energy sector, deploy enhanced perimeter monitoring', severity: 'high' },
  { id: 'ew-009', category: 'darkweb', timestamp: '2026-09-13T01:30:00Z', source: 'Dark Web Intelligence', confidence: 88, nationState: 'Russia', description: 'LockBit 4.0 affiliates purchasing initial access to 12 US hospital networks from access brokers', recommendedAction: 'Alert HHS and affected hospitals, verify VPN patching', severity: 'critical' },
  { id: 'ew-010', category: 'cable_monitor', timestamp: '2026-09-13T01:00:00Z', source: 'Submarine Cable Monitoring', confidence: 72, nationState: 'Unknown', description: 'Traffic pattern anomalies on transatlantic submarine cable near known Russian submarine patrol areas', recommendedAction: 'Increase monitoring of affected cable systems, alert NCSC', severity: 'medium' },
  { id: 'ew-011', category: 'infra_staging', timestamp: '2026-09-12T23:30:00Z', source: 'Cloud Infrastructure Monitor', confidence: 86, nationState: 'China', description: 'APT41 provisioning VPS instances across 8 cloud providers using stolen payment cards for C2', recommendedAction: 'Report to cloud providers for takedown, update C2 blocklists', severity: 'high' },
  { id: 'ew-012', category: 'supply_chain', timestamp: '2026-09-12T22:45:00Z', source: 'Package Registry Monitor', confidence: 76, nationState: 'North Korea', description: 'Typosquatted npm packages targeting cryptocurrency development tools by Lazarus-linked accounts', recommendedAction: 'Report packages for removal, alert crypto developer community', severity: 'high' },
  { id: 'ew-013', category: 'recon_surge', timestamp: '2026-09-12T22:00:00Z', source: 'Network Telemetry', confidence: 84, nationState: 'China', description: 'Salt Typhoon expanding recon to European telecom providers, scanning Huawei 5G management interfaces', recommendedAction: 'Alert European telecom operators, audit 5G management access', severity: 'high' },
  { id: 'ew-014', category: 'bgp_anomaly', timestamp: '2026-09-12T21:15:00Z', source: 'RIPE BGP Monitor', confidence: 91, nationState: 'Russia', description: 'Russian AS briefly announcing more-specific routes for Ukrainian government IP space', recommendedAction: 'Alert Ukrainian CERT, implement RPKI validation', severity: 'critical' },
  { id: 'ew-015', category: 'darkweb', timestamp: '2026-09-12T20:30:00Z', source: 'Underground Forum Monitor', confidence: 79, nationState: 'Russia', description: 'Cl0p operators recruiting exploit developers specializing in enterprise file transfer platforms', recommendedAction: 'Audit all MFT solutions, implement enhanced monitoring', severity: 'high' },
  { id: 'ew-016', category: 'dns_anomaly', timestamp: '2026-09-12T19:45:00Z', source: 'Passive DNS', confidence: 82, nationState: 'Turkey', description: 'Sea Turtle DNS hijacking campaign affecting 6 Middle Eastern government domains', recommendedAction: 'Alert affected governments, implement DNSSEC', severity: 'high' },
  { id: 'ew-017', category: 'infra_staging', timestamp: '2026-09-12T19:00:00Z', source: 'Threat Intelligence Platform', confidence: 90, nationState: 'North Korea', description: 'Kimsuky registering 34 domains mimicking South Korean defense research journals', recommendedAction: 'Block domains, alert South Korean defense sector', severity: 'high' },
  { id: 'ew-018', category: 'recon_surge', timestamp: '2026-09-12T18:15:00Z', source: 'IDS Network', confidence: 77, nationState: 'Iran', description: 'MuddyWater scanning US defense contractor VPN endpoints with credential stuffing', recommendedAction: 'Enforce MFA on all VPN access, deploy rate limiting', severity: 'high' },
  { id: 'ew-019', category: 'supply_chain', timestamp: '2026-09-12T17:30:00Z', source: 'Software Integrity Monitor', confidence: 85, nationState: 'Russia', description: 'Anomalous code commit in widely-used open source library by account linked to APT29', recommendedAction: 'Review commit for backdoor insertion, alert maintainers', severity: 'critical' },
  { id: 'ew-020', category: 'cable_monitor', timestamp: '2026-09-12T16:45:00Z', source: 'SIGINT', confidence: 68, nationState: 'China', description: 'Chinese research vessel conducting extended operations near Pacific submarine cable landing sites', recommendedAction: 'Increase maritime surveillance, verify cable integrity', severity: 'medium' },
  { id: 'ew-021', category: 'darkweb', timestamp: '2026-09-12T16:00:00Z', source: 'Dark Web Monitor', confidence: 86, nationState: 'Unknown', description: 'Windows kernel zero-day being auctioned on exclusive underground marketplace for $4M starting bid', recommendedAction: 'Alert Microsoft MSRC, prepare contingency patches', severity: 'critical' },
  { id: 'ew-022', category: 'infra_staging', timestamp: '2026-09-12T15:15:00Z', source: 'Cloud Monitor', confidence: 80, nationState: 'Iran', description: 'APT35 setting up credential harvesting infrastructure mimicking Israeli tech company login portals', recommendedAction: 'Alert Israeli tech sector, block phishing domains', severity: 'high' },
  { id: 'ew-023', category: 'bgp_anomaly', timestamp: '2026-09-12T14:30:00Z', source: 'BGP Stream', confidence: 88, nationState: 'China', description: 'China Telecom AS briefly announcing routes for European government IP ranges', recommendedAction: 'Alert affected European governments, verify RPKI', severity: 'high' },
  { id: 'ew-024', category: 'recon_surge', timestamp: '2026-09-12T13:45:00Z', source: 'Honeypot Network', confidence: 83, nationState: 'North Korea', description: 'Andariel group systematically scanning South Korean nuclear facility network ranges', recommendedAction: 'Alert KINAC, deploy nuclear-specific IDS signatures', severity: 'critical' },
  { id: 'ew-025', category: 'supply_chain', timestamp: '2026-09-12T13:00:00Z', source: 'Firmware Analysis', confidence: 74, nationState: 'China', description: 'Suspicious firmware modifications in network equipment destined for allied government installations', recommendedAction: 'Quarantine equipment, conduct full firmware analysis', severity: 'critical' },
  { id: 'ew-026', category: 'dns_anomaly', timestamp: '2026-09-12T12:15:00Z', source: 'DNS Monitoring', confidence: 79, nationState: 'Russia', description: 'Turla DNS tunneling detected from 3 European government networks to .xyz domains', recommendedAction: 'Alert affected governments, block DNS tunneling patterns', severity: 'high' },
  { id: 'ew-027', category: 'darkweb', timestamp: '2026-09-12T11:30:00Z', source: 'Underground Market', confidence: 91, nationState: 'Russia', description: 'BlackCat/ALPHV ransomware group purchasing stolen RDP credentials for 8 US hospital systems', recommendedAction: 'Alert affected hospitals, force password resets', severity: 'critical' },
  { id: 'ew-028', category: 'infra_staging', timestamp: '2026-09-12T10:45:00Z', source: 'VPS Monitoring', confidence: 82, nationState: 'Pakistan', description: 'Transparent Tribe provisioning C2 servers in Indian subcontinent hosting with CrimsonRAT staging', recommendedAction: 'Alert Indian defense sector, block C2 infrastructure', severity: 'high' },
  { id: 'ew-029', category: 'recon_surge', timestamp: '2026-09-12T10:00:00Z', source: 'Network Telemetry', confidence: 80, nationState: 'Vietnam', description: 'OceanLotus conducting targeted port scanning of foreign automotive factory networks in Vietnam', recommendedAction: 'Alert foreign manufacturers, deploy network monitoring', severity: 'medium' },
  { id: 'ew-030', category: 'cable_monitor', timestamp: '2026-09-12T09:15:00Z', source: 'Maritime Intelligence', confidence: 65, nationState: 'Russia', description: 'Russian intelligence vessel Yantar conducting operations near undersea cables in North Sea', recommendedAction: 'Increase NATO maritime patrols, monitor cable traffic', severity: 'medium' },
  { id: 'ew-031', category: 'bgp_anomaly', timestamp: '2026-09-12T08:30:00Z', source: 'RouteViews', confidence: 76, nationState: 'Iran', description: 'Iranian AS announcing routes for Iraqi government IP space during diplomatic tensions', recommendedAction: 'Alert Iraqi government, implement RPKI', severity: 'medium' },
  { id: 'ew-032', category: 'supply_chain', timestamp: '2026-09-12T07:45:00Z', source: 'Code Repository Monitor', confidence: 81, nationState: 'China', description: 'Winnti-linked GitHub accounts contributing suspicious pull requests to popular DevOps tools', recommendedAction: 'Review PRs for backdoor insertion, alert project maintainers', severity: 'high' },
  { id: 'ew-033', category: 'darkweb', timestamp: '2026-09-12T07:00:00Z', source: 'Tor Hidden Service Monitor', confidence: 84, nationState: 'Russia', description: 'New ransomware-as-a-service platform with nation-state-grade encryption and wiper capabilities', recommendedAction: 'Analyze samples, develop detection signatures', severity: 'high' },
  { id: 'ew-034', category: 'infra_staging', timestamp: '2026-09-12T06:15:00Z', source: 'Domain Intelligence', confidence: 87, nationState: 'Russia', description: 'Gamaredon registering 156 new domains in 24-hour burst using known registrant patterns', recommendedAction: 'Block domain patterns, alert CERT-UA', severity: 'high' },
  { id: 'ew-035', category: 'recon_surge', timestamp: '2026-09-12T05:30:00Z', source: 'Sensor Network', confidence: 78, nationState: 'China', description: 'Hafnium scanning enterprise collaboration platforms for recently disclosed vulnerability', recommendedAction: 'Verify patching status, deploy virtual patches', severity: 'high' },
  { id: 'ew-036', category: 'dns_anomaly', timestamp: '2026-09-12T04:45:00Z', source: 'Certificate Transparency', confidence: 85, nationState: 'North Korea', description: 'Fraudulent SSL certificates issued for major cryptocurrency exchange domains', recommendedAction: 'Revoke fraudulent certificates, alert exchanges', severity: 'critical' },
  { id: 'ew-037', category: 'darkweb', timestamp: '2026-09-12T04:00:00Z', source: 'Dark Web HUMINT', confidence: 73, nationState: 'Iran', description: 'APT34 operators discussing new DNS tunneling exfiltration technique on private forum', recommendedAction: 'Update DNS monitoring for new tunneling patterns', severity: 'medium' },
  { id: 'ew-038', category: 'supply_chain', timestamp: '2026-09-12T03:15:00Z', source: 'Hardware Supply Chain', confidence: 70, nationState: 'China', description: 'Anomalous chip-level modifications in network switches from Chinese manufacturer during import inspection', recommendedAction: 'Quarantine affected hardware, conduct thorough analysis', severity: 'critical' },
  { id: 'ew-039', category: 'recon_surge', timestamp: '2026-09-12T02:30:00Z', source: 'Financial Sector ISAC', confidence: 82, nationState: 'North Korea', description: 'BlueNoroff social engineering campaign targeting DeFi bridge protocol developers via fake job offers', recommendedAction: 'Alert DeFi developer community, verify recruiter identities', severity: 'high' },
  { id: 'ew-040', category: 'bgp_anomaly', timestamp: '2026-09-12T01:45:00Z', source: 'MANRS Monitor', confidence: 90, nationState: 'Unknown', description: 'Coordinated BGP hijack attempt targeting DNS root server anycast addresses from multiple ASNs', recommendedAction: 'Alert ICANN and root server operators, activate emergency protocols', severity: 'critical' },
  { id: 'ew-041', category: 'cable_monitor', timestamp: '2026-09-12T01:00:00Z', source: 'Undersea Cable Monitor', confidence: 67, nationState: 'Unknown', description: 'Unusual latency spikes on Asia-Pacific submarine cables coinciding with unidentified vessel activity', recommendedAction: 'Investigate vessel identity, increase cable monitoring', severity: 'medium' },
  { id: 'ew-042', category: 'infra_staging', timestamp: '2026-09-12T00:15:00Z', source: 'Cloud Abuse Monitor', confidence: 84, nationState: 'Russia', description: 'APT28 deploying C2 infrastructure across 15 Azure regions using compromised tenant credentials', recommendedAction: 'Report to Microsoft, block C2 indicators across regions', severity: 'high' },
  { id: 'ew-043', category: 'darkweb', timestamp: '2026-09-11T23:30:00Z', source: 'Underground Forum', confidence: 77, nationState: 'Unknown', description: 'Initial access broker offering VPN credentials for 50+ critical infrastructure organizations in bulk', recommendedAction: 'Identify affected organizations, force credential rotation', severity: 'critical' },
  { id: 'ew-044', category: 'recon_surge', timestamp: '2026-09-11T22:45:00Z', source: 'Threat Intelligence', confidence: 79, nationState: 'Russia', description: 'Turla conducting low-and-slow reconnaissance of French defense ministry network perimeter', recommendedAction: 'Alert French ANSSI, increase perimeter monitoring', severity: 'medium' }
];

// ============================================================================
// GEOPOLITICAL TRIGGERS (52 entries)
// ============================================================================
var GEOPOLITICAL_TRIGGERS = [
  { id: 'geo-001', event: 'Taiwan Strait military exercises by PLA Navy', region: 'Indo-Pacific', date: '2026-09-10', cyberRiskLevel: 5, historicalCorrelation: 'Aug 2022 PLA exercises preceded massive cyber campaign against Taiwan', associatedNations: ['China', 'Taiwan', 'United States'], predictedCyberConsequence: 'Volt Typhoon activation of pre-positioned access in US critical infrastructure' },
  { id: 'geo-002', event: 'EU sanctions expansion against Russia', region: 'Europe', date: '2026-09-08', cyberRiskLevel: 4, historicalCorrelation: '2022 sanctions preceded destructive attacks on EU targets', associatedNations: ['Russia', 'EU'], predictedCyberConsequence: 'Sandworm retaliatory operations against EU energy infrastructure' },
  { id: 'geo-003', event: 'North Korean ballistic missile test', region: 'East Asia', date: '2026-09-06', cyberRiskLevel: 4, historicalCorrelation: 'Missile tests followed by increased Lazarus crypto theft operations', associatedNations: ['North Korea', 'South Korea', 'Japan', 'United States'], predictedCyberConsequence: 'Lazarus accelerating crypto theft to fund missile program' },
  { id: 'geo-004', event: 'Iran nuclear deal negotiations collapse', region: 'Middle East', date: '2026-09-05', cyberRiskLevel: 5, historicalCorrelation: 'JCPOA withdrawal in 2018 preceded Iranian cyber escalation', associatedNations: ['Iran', 'United States', 'Israel', 'Saudi Arabia'], predictedCyberConsequence: 'APT33 deploying Shamoon variants against Gulf state oil infrastructure' },
  { id: 'geo-005', event: 'Russian military buildup near Ukrainian border', region: 'Eastern Europe', date: '2026-09-04', cyberRiskLevel: 5, historicalCorrelation: '2022 invasion preceded by WhisperGate, HermeticWiper, Viasat hack', associatedNations: ['Russia', 'Ukraine', 'NATO'], predictedCyberConsequence: 'Coordinated Sandworm/Gamaredon operations against Ukraine' },
  { id: 'geo-006', event: 'South China Sea territorial dispute escalation', region: 'Indo-Pacific', date: '2026-09-03', cyberRiskLevel: 4, historicalCorrelation: 'SCS tensions correlated with Chinese APT espionage against claimant nations', associatedNations: ['China', 'Philippines', 'Vietnam', 'Malaysia'], predictedCyberConsequence: 'Chinese APT campaigns against Philippines and Vietnam government networks' },
  { id: 'geo-007', event: 'India-Pakistan border incident', region: 'South Asia', date: '2026-09-02', cyberRiskLevel: 3, historicalCorrelation: 'Pulwama/Balakot 2019 preceded massive bilateral cyber operations', associatedNations: ['India', 'Pakistan'], predictedCyberConsequence: 'SideWinder and Transparent Tribe escalating bilateral espionage' },
  { id: 'geo-008', event: 'NATO cyber defense exercise Baltic Shield', region: 'Europe', date: '2026-09-01', cyberRiskLevel: 3, historicalCorrelation: 'NATO exercises trigger Russian intelligence collection and probing', associatedNations: ['NATO', 'Russia'], predictedCyberConsequence: 'APT28 intelligence collection targeting exercise communications' },
  { id: 'geo-009', event: 'US presidential election campaign season', region: 'North America', date: '2026-08-30', cyberRiskLevel: 4, historicalCorrelation: '2016 and 2020 elections saw massive Russian interference', associatedNations: ['Russia', 'China', 'Iran', 'United States'], predictedCyberConsequence: 'APT28/APT29 information operations and hack-and-leak campaigns' },
  { id: 'geo-010', event: 'Israeli military operations in Gaza', region: 'Middle East', date: '2026-08-28', cyberRiskLevel: 4, historicalCorrelation: 'Military ops trigger Iranian proxy cyber retaliation', associatedNations: ['Israel', 'Iran', 'Hamas'], predictedCyberConsequence: 'Moses Staff and APT35 launching destructive attacks against Israel' },
  { id: 'geo-011', event: 'Chinese economic sanctions on Taiwan', region: 'Indo-Pacific', date: '2026-08-26', cyberRiskLevel: 4, historicalCorrelation: 'Economic pressure accompanied by cyber espionage escalation', associatedNations: ['China', 'Taiwan'], predictedCyberConsequence: 'MSS-linked APTs targeting Taiwanese semiconductor firms' },
  { id: 'geo-012', event: 'Russian submarine activity near undersea cables', region: 'North Atlantic', date: '2026-08-24', cyberRiskLevel: 3, historicalCorrelation: 'Yantar operations near cables preceded SIGINT collection', associatedNations: ['Russia', 'NATO'], predictedCyberConsequence: 'Potential cable tapping or disruption preparation' },
  { id: 'geo-013', event: 'North Korean diplomatic isolation deepening', region: 'East Asia', date: '2026-08-22', cyberRiskLevel: 4, historicalCorrelation: 'Isolation drives increased cyber financial operations', associatedNations: ['North Korea'], predictedCyberConsequence: 'Lazarus and BlueNoroff escalating cryptocurrency theft' },
  { id: 'geo-014', event: 'EU cybersecurity regulation enforcement deadline', region: 'Europe', date: '2026-08-20', cyberRiskLevel: 2, historicalCorrelation: 'Compliance deadlines create vulnerability windows', associatedNations: ['EU'], predictedCyberConsequence: 'Opportunistic attacks during system transitions' },
  { id: 'geo-015', event: 'Saudi-Iran diplomatic tensions over oil production', region: 'Middle East', date: '2026-08-18', cyberRiskLevel: 4, historicalCorrelation: 'Oil disputes preceded Shamoon attack on Saudi Aramco 2012', associatedNations: ['Iran', 'Saudi Arabia'], predictedCyberConsequence: 'APT33 targeting Saudi oil infrastructure with destructive malware' },
  { id: 'geo-016', event: 'US cyber sanctions against Chinese tech firms', region: 'Global', date: '2026-08-16', cyberRiskLevel: 4, historicalCorrelation: 'Tech sanctions escalate Chinese espionage targeting', associatedNations: ['United States', 'China'], predictedCyberConsequence: 'APT41 and Winnti increasing IP theft of restricted technologies' },
  { id: 'geo-017', event: 'Turkish military operations in Syria', region: 'Middle East', date: '2026-08-14', cyberRiskLevel: 3, historicalCorrelation: 'Military ops accompanied by StrongPity targeting of Kurds', associatedNations: ['Turkey', 'Syria', 'Kurdish groups'], predictedCyberConsequence: 'StrongPity deploying trojanized communication apps' },
  { id: 'geo-018', event: 'Five Eyes intelligence sharing expansion', region: 'Global', date: '2026-08-12', cyberRiskLevel: 2, historicalCorrelation: 'Expanded sharing triggers adversary countermeasures', associatedNations: ['US', 'UK', 'Australia', 'Canada', 'New Zealand'], predictedCyberConsequence: 'Russian and Chinese APTs targeting Five Eyes diplomatic comms' },
  { id: 'geo-019', event: 'Japanese military modernization announcement', region: 'East Asia', date: '2026-08-10', cyberRiskLevel: 3, historicalCorrelation: 'Defense spending increases trigger espionage against new programs', associatedNations: ['Japan', 'China', 'North Korea'], predictedCyberConsequence: 'Stone Panda and Lazarus targeting Japanese defense industrial base' },
  { id: 'geo-020', event: 'UN General Assembly cybersecurity resolution', region: 'Global', date: '2026-08-08', cyberRiskLevel: 2, historicalCorrelation: 'Diplomatic events provide cover for espionage', associatedNations: ['Multiple'], predictedCyberConsequence: 'APT29 and APT28 targeting UN delegation communications' },
  { id: 'geo-021', event: 'European energy crisis amid Russian gas restrictions', region: 'Europe', date: '2026-08-06', cyberRiskLevel: 4, historicalCorrelation: 'Energy crises amplify infrastructure vulnerability', associatedNations: ['Russia', 'EU'], predictedCyberConsequence: 'Sandworm targeting European energy distribution systems' },
  { id: 'geo-022', event: 'Philippine-China maritime confrontation', region: 'Indo-Pacific', date: '2026-08-04', cyberRiskLevel: 3, historicalCorrelation: 'Maritime incidents preceded MSS espionage against Philippines', associatedNations: ['China', 'Philippines'], predictedCyberConsequence: 'Chinese APT espionage against Philippine military communications' },
  { id: 'geo-023', event: 'IRGC naval exercises in Strait of Hormuz', region: 'Middle East', date: '2026-08-02', cyberRiskLevel: 4, historicalCorrelation: 'Naval posturing accompanied by cyber targeting of maritime infra', associatedNations: ['Iran', 'Gulf States', 'United States'], predictedCyberConsequence: 'APT34 targeting Gulf state port and maritime systems' },
  { id: 'geo-024', event: 'South Korean joint military exercises with US', region: 'Korean Peninsula', date: '2026-07-30', cyberRiskLevel: 3, historicalCorrelation: 'Joint exercises trigger North Korean cyber retaliation', associatedNations: ['South Korea', 'United States', 'North Korea'], predictedCyberConsequence: 'Kimsuky and Andariel campaigns against South Korean military' },
  { id: 'geo-025', event: 'Venezuelan political crisis', region: 'Latin America', date: '2026-07-28', cyberRiskLevel: 2, historicalCorrelation: 'Political instability increases regional cyber espionage', associatedNations: ['Venezuela', 'Colombia'], predictedCyberConsequence: 'Machete group targeting Colombian military and diplomatic targets' },
  { id: 'geo-026', event: 'G7 summit on AI governance', region: 'Global', date: '2026-07-26', cyberRiskLevel: 3, historicalCorrelation: 'Summits create espionage targeting opportunities', associatedNations: ['G7 nations', 'Russia', 'China'], predictedCyberConsequence: 'APT29 targeting summit delegation communications' },
  { id: 'geo-027', event: 'Ukrainian counter-offensive operations', region: 'Eastern Europe', date: '2026-07-24', cyberRiskLevel: 5, historicalCorrelation: 'Counter-offensives preceded by Russian cyber attacks on C2', associatedNations: ['Ukraine', 'Russia'], predictedCyberConsequence: 'Sandworm targeting Ukrainian military communications and logistics' },
  { id: 'geo-028', event: 'International sanctions on North Korean crypto', region: 'Global', date: '2026-07-22', cyberRiskLevel: 4, historicalCorrelation: 'Crypto sanctions drive innovation in theft techniques', associatedNations: ['North Korea'], predictedCyberConsequence: 'Lazarus developing novel DeFi exploitation techniques' },
  { id: 'geo-029', event: 'Chinese military exercises near Senkaku Islands', region: 'East Asia', date: '2026-07-20', cyberRiskLevel: 3, historicalCorrelation: 'Territorial tensions trigger espionage against Japanese defense', associatedNations: ['China', 'Japan'], predictedCyberConsequence: 'Chinese APTs targeting Japanese Self-Defense Force networks' },
  { id: 'geo-030', event: 'NATO expansion discussions with new candidate', region: 'Europe', date: '2026-07-18', cyberRiskLevel: 4, historicalCorrelation: 'Finland/Sweden accession triggered Russian cyber campaigns', associatedNations: ['NATO', 'Russia'], predictedCyberConsequence: 'APT28 and Sandworm targeting candidate nation infrastructure' },
  { id: 'geo-031', event: 'ITU spectrum allocation conference', region: 'Global', date: '2026-07-16', cyberRiskLevel: 2, historicalCorrelation: 'Telecom policy decisions increase espionage', associatedNations: ['China', 'United States', 'EU'], predictedCyberConsequence: 'Salt Typhoon intelligence collection on telecom policy' },
  { id: 'geo-032', event: 'Iranian nuclear enrichment milestone', region: 'Middle East', date: '2026-07-14', cyberRiskLevel: 5, historicalCorrelation: 'Nuclear milestones trigger Israeli/US cyber counter-proliferation', associatedNations: ['Iran', 'Israel', 'United States'], predictedCyberConsequence: 'Unit 8200 and NSA TAO counter-proliferation operations' },
  { id: 'geo-033', event: 'Russian mercenary deployment in Africa', region: 'Africa', date: '2026-07-12', cyberRiskLevel: 2, historicalCorrelation: 'Deployments accompanied by disinformation and cyber ops', associatedNations: ['Russia', 'African nations'], predictedCyberConsequence: 'Russian information operations and surveillance in Africa' },
  { id: 'geo-034', event: 'US-China trade war escalation', region: 'Global', date: '2026-07-10', cyberRiskLevel: 4, historicalCorrelation: '2018-2019 trade tensions coincided with Chinese espionage surge', associatedNations: ['United States', 'China'], predictedCyberConsequence: 'APT41 and APT1 escalating economic espionage against US' },
  { id: 'geo-035', event: 'Major cryptocurrency market crash', region: 'Global', date: '2026-07-08', cyberRiskLevel: 3, historicalCorrelation: 'Market crashes create exploitation opportunities in DeFi', associatedNations: ['North Korea'], predictedCyberConsequence: 'Lazarus exploiting market volatility for DeFi manipulation' },
  { id: 'geo-036', event: 'India election dispute and unrest', region: 'South Asia', date: '2026-07-06', cyberRiskLevel: 3, historicalCorrelation: 'Election periods see increased bilateral cyber operations', associatedNations: ['India', 'Pakistan', 'China'], predictedCyberConsequence: 'Transparent Tribe targeting Indian government during transition' },
  { id: 'geo-037', event: 'Arctic Council dispute over shipping routes', region: 'Arctic', date: '2026-07-04', cyberRiskLevel: 2, historicalCorrelation: 'Arctic tensions drive Russian espionage against navigation data', associatedNations: ['Russia', 'Canada', 'Norway', 'Denmark'], predictedCyberConsequence: 'Turla targeting Arctic Council diplomatic communications' },
  { id: 'geo-038', event: 'Massive global ransomware wave affecting hospitals', region: 'Global', date: '2026-07-02', cyberRiskLevel: 4, historicalCorrelation: 'Hospital attacks create pressure for offensive cyber response', associatedNations: ['Russia'], predictedCyberConsequence: 'US CYBERCOM offensive operations against ransomware infrastructure' },
  { id: 'geo-039', event: 'Chinese military AI demonstration', region: 'Indo-Pacific', date: '2026-06-30', cyberRiskLevel: 3, historicalCorrelation: 'Military AI advances drive espionage to understand capabilities', associatedNations: ['China', 'United States'], predictedCyberConsequence: 'US intelligence collection on Chinese AI military applications' },
  { id: 'geo-040', event: 'UK-EU post-Brexit security framework dispute', region: 'Europe', date: '2026-06-28', cyberRiskLevel: 2, historicalCorrelation: 'Diplomatic tensions create intelligence gaps adversaries exploit', associatedNations: ['UK', 'EU', 'Russia'], predictedCyberConsequence: 'APT29 exploiting reduced UK-EU intelligence sharing' },
  { id: 'geo-041', event: 'Pakistan political crisis and military tensions', region: 'South Asia', date: '2026-06-26', cyberRiskLevel: 3, historicalCorrelation: 'Political instability increases ISI cyber tempo', associatedNations: ['Pakistan', 'India'], predictedCyberConsequence: 'SideCopy escalating espionage during political transition' },
  { id: 'geo-042', event: 'Russian gas pipeline explosion investigation', region: 'Europe', date: '2026-06-24', cyberRiskLevel: 4, historicalCorrelation: 'Infrastructure sabotage investigations trigger intel collection', associatedNations: ['Russia', 'NATO'], predictedCyberConsequence: 'APT29 targeting investigation communications across NATO' },
  { id: 'geo-043', event: 'Australian submarine deal progress', region: 'Indo-Pacific', date: '2026-06-22', cyberRiskLevel: 3, historicalCorrelation: 'AUKUS submarine program is high-priority Chinese target', associatedNations: ['Australia', 'UK', 'US', 'China'], predictedCyberConsequence: 'APT41 targeting AUKUS submarine program supply chain' },
  { id: 'geo-044', event: 'Ethiopian dam dispute escalation', region: 'Africa', date: '2026-06-20', cyberRiskLevel: 2, historicalCorrelation: 'Regional resource disputes increasingly involve cyber', associatedNations: ['Ethiopia', 'Egypt', 'Sudan'], predictedCyberConsequence: 'Cyber operations targeting dam control and water management' },
  { id: 'geo-045', event: 'Global chip shortage affecting military production', region: 'Global', date: '2026-06-18', cyberRiskLevel: 3, historicalCorrelation: 'Chip shortages drive espionage against semiconductor manufacturers', associatedNations: ['China', 'Taiwan', 'United States'], predictedCyberConsequence: 'MSS APTs intensifying semiconductor IP theft campaigns' },
  { id: 'geo-046', event: 'Russian election interference indictments unsealed', region: 'North America', date: '2026-06-16', cyberRiskLevel: 3, historicalCorrelation: 'Indictments trigger escalatory Russian cyber responses', associatedNations: ['Russia', 'United States'], predictedCyberConsequence: 'APT28 retaliatory operations or increased tempo' },
  { id: 'geo-047', event: 'Chinese AI regulation disagreement with US', region: 'Global', date: '2026-06-14', cyberRiskLevel: 3, historicalCorrelation: 'Tech governance disputes correlate with espionage escalation', associatedNations: ['China', 'United States'], predictedCyberConsequence: 'Chinese APTs targeting US AI research institutions' },
  { id: 'geo-048', event: 'Middle East peace process breakdown', region: 'Middle East', date: '2026-06-12', cyberRiskLevel: 4, historicalCorrelation: 'Peace failures trigger Iranian proxy cyber campaigns', associatedNations: ['Israel', 'Iran', 'Palestine'], predictedCyberConsequence: 'Iranian APTs launching destructive attacks against Israel' },
  { id: 'geo-049', event: 'US Space Force satellite security incident', region: 'Space', date: '2026-06-10', cyberRiskLevel: 4, historicalCorrelation: 'Space domain incidents drive intel collection and counter-space ops', associatedNations: ['United States', 'Russia', 'China'], predictedCyberConsequence: 'Russian and Chinese espionage targeting US satellite command' },
  { id: 'geo-050', event: 'Critical OpenSSL vulnerability disclosure', region: 'Global', date: '2026-06-08', cyberRiskLevel: 5, historicalCorrelation: 'Heartbleed saw nation-state exploitation within hours', associatedNations: ['All major cyber powers'], predictedCyberConsequence: 'Nation-state APTs racing to exploit before patching completes' },
  { id: 'geo-051', event: 'Korean Peninsula denuclearization talks', region: 'East Asia', date: '2026-06-06', cyberRiskLevel: 3, historicalCorrelation: 'Diplomatic engagement does not reduce NK cyber ops', associatedNations: ['North Korea', 'South Korea', 'United States'], predictedCyberConsequence: 'Kimsuky targeting negotiation-related intelligence' },
  { id: 'geo-052', event: 'Massive solar storm warning', region: 'Global', date: '2026-06-04', cyberRiskLevel: 3, historicalCorrelation: 'Natural disasters create exploitation windows during recovery', associatedNations: ['All'], predictedCyberConsequence: 'Opportunistic attacks during satellite communication disruptions' }
];

// ============================================================================
// HISTORICAL CYBER OPERATIONS DATABASE (104 entries)
// ============================================================================
var HISTORICAL_OPS = [
  { id: 'op-001', name: 'Stuxnet', year: 2010, attribution: 'US/Israel (NSA TAO + Unit 8200)', type: 'destruction', targets: 'Iranian nuclear centrifuges (Natanz)', impact: 'Destroyed ~1,000 centrifuges, delayed Iranian nuclear program 1-2 years', description: 'First known cyber weapon targeting ICS. Used 4 zero-day exploits.' },
  { id: 'op-002', name: 'NotPetya', year: 2017, attribution: 'Russia (GRU/Sandworm)', type: 'destruction', targets: 'Ukraine (global collateral)', impact: '$10B+ global damages, Maersk, Merck, FedEx affected', description: 'Destructive wiper disguised as ransomware, spread via M.E.Doc.' },
  { id: 'op-003', name: 'SolarWinds (SUNBURST)', year: 2020, attribution: 'Russia (SVR/APT29)', type: 'espionage', targets: 'US government agencies, Fortune 500', impact: '18,000 orgs received trojanized update, ~100 confirmed compromised', description: 'Supply chain attack via SolarWinds Orion update mechanism.' },
  { id: 'op-004', name: 'WannaCry', year: 2017, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Global (200K+ systems in 150 countries)', impact: 'NHS hospitals shut down, $4B+ damages, exploited EternalBlue', description: 'Ransomware worm using stolen NSA exploit.' },
  { id: 'op-005', name: 'OPM Breach', year: 2015, attribution: 'China (PLA/MSS)', type: 'espionage', targets: 'US Office of Personnel Management', impact: '22.1M personnel records including SF-86 clearance forms stolen', description: 'Massive theft of government employee data including biometrics.' },
  { id: 'op-006', name: 'Sony Pictures Hack', year: 2014, attribution: 'North Korea (Lazarus)', type: 'destruction', targets: 'Sony Pictures Entertainment', impact: 'Data leak, unreleased films, $100M+ damages', description: 'Retaliation for The Interview movie.' },
  { id: 'op-007', name: 'Shamoon', year: 2012, attribution: 'Iran (APT33)', type: 'destruction', targets: 'Saudi Aramco', impact: '35,000 computers wiped with MBR-overwriting malware', description: 'First major destructive cyber attack by Iran.' },
  { id: 'op-008', name: 'Ukraine Power Grid Attack', year: 2015, attribution: 'Russia (Sandworm)', type: 'disruption', targets: 'Ukrainian power companies', impact: '230,000 customers lost power, first confirmed grid cyber attack', description: 'Used BlackEnergy and manual SCADA manipulation.' },
  { id: 'op-009', name: 'Ukraine Grid Attack II (Industroyer)', year: 2016, attribution: 'Russia (Sandworm)', type: 'disruption', targets: 'Ukrenergo transmission station', impact: 'Power outage in Kyiv using purpose-built ICS malware', description: 'More sophisticated attack using Industroyer/CrashOverride.' },
  { id: 'op-010', name: 'Colonial Pipeline', year: 2021, attribution: 'Russia (DarkSide)', type: 'disruption', targets: 'Colonial Pipeline Company', impact: 'Largest US fuel pipeline shut 6 days, $4.4M ransom paid', description: 'Ransomware disrupting fuel supply to eastern US.' },
  { id: 'op-011', name: 'Moonlight Maze', year: 1996, attribution: 'Russia (Turla attributed)', type: 'espionage', targets: 'US DOD, NASA, DOE', impact: 'Years-long espionage, massive data exfiltration', description: 'One of the first documented nation-state cyber espionage campaigns.' },
  { id: 'op-012', name: 'Titan Rain', year: 2003, attribution: 'China (PLA)', type: 'espionage', targets: 'US defense contractors, Sandia, Lockheed, NASA', impact: 'Systematic theft of defense data over years', description: 'Early Chinese cyber espionage against US defense.' },
  { id: 'op-013', name: 'GhostNet', year: 2009, attribution: 'China (attributed)', type: 'espionage', targets: 'Dalai Lama offices, embassies, foreign ministries', impact: '1,295 computers in 103 countries compromised', description: 'Large-scale espionage targeting diplomatic organizations.' },
  { id: 'op-014', name: 'Operation Aurora', year: 2009, attribution: 'China (PLA)', type: 'espionage', targets: 'Google, Adobe, Juniper, 30+ companies', impact: 'Source code theft, dissident Gmail accounts compromised', description: 'Targeted attack on tech companies using IE zero-day.' },
  { id: 'op-015', name: 'Duqu', year: 2011, attribution: 'Israel (Unit 8200)', type: 'espionage', targets: 'Iranian nuclear supply chain', impact: 'Intel collection for follow-on operations', description: 'Stuxnet-related espionage malware.' },
  { id: 'op-016', name: 'Flame', year: 2012, attribution: 'US/Israel', type: 'espionage', targets: 'Iranian government and private sector', impact: 'Massive data collection: audio, screenshots, keylogging', description: 'Highly sophisticated 20MB modular espionage platform.' },
  { id: 'op-017', name: 'Shadow Brokers Leak', year: 2016, attribution: 'Shadow Brokers (leaked NSA tools)', type: 'hybrid', targets: 'NSA Equation Group tool repository', impact: 'EternalBlue, DoublePulsar leaked, enabled WannaCry and NotPetya', description: 'Theft and public release of NSA offensive tools.' },
  { id: 'op-018', name: 'Bangladesh Bank Heist', year: 2016, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Bangladesh Bank via SWIFT', impact: '$81M stolen ($951M attempted)', description: 'Lazarus manipulated SWIFT messages to steal from central bank.' },
  { id: 'op-019', name: 'DNC Hack', year: 2016, attribution: 'Russia (GRU APT28/APT29)', type: 'hybrid', targets: 'Democratic National Committee', impact: 'Email theft and strategic leaks affecting 2016 US election', description: 'Combined espionage with information operations.' },
  { id: 'op-020', name: 'Olympic Destroyer', year: 2018, attribution: 'Russia (Sandworm)', type: 'disruption', targets: 'PyeongChang Winter Olympics', impact: 'Opening ceremony IT disrupted, false-flag attribution', description: 'Retaliation for Russian Olympic ban.' },
  { id: 'op-021', name: 'Triton/TRISIS', year: 2017, attribution: 'Russia (CNIIHM)', type: 'destruction', targets: 'Saudi petrochemical safety systems', impact: 'First malware targeting safety instrumented systems', description: 'Targeted SIS that prevent catastrophic failures.' },
  { id: 'op-022', name: 'Cloud Hopper', year: 2016, attribution: 'China (APT10)', type: 'espionage', targets: 'Managed service providers globally', impact: 'Access to MSP clients across industries', description: 'Targeted MSPs for downstream access to thousands of orgs.' },
  { id: 'op-023', name: 'Kaseya VSA Attack', year: 2021, attribution: 'Russia (REvil)', type: 'financial', targets: '1,500+ organizations via Kaseya', impact: '$70M ransom demanded', description: 'Supply chain attack via IT management software.' },
  { id: 'op-024', name: 'ProxyLogon', year: 2021, attribution: 'China (Hafnium)', type: 'espionage', targets: '250,000+ Exchange servers', impact: 'Mass exploitation, web shells deployed globally', description: 'Hafnium exploited 4 Exchange zero-days.' },
  { id: 'op-025', name: 'Viasat KA-SAT Attack', year: 2022, attribution: 'Russia (Sandworm)', type: 'disruption', targets: 'Viasat satellite network', impact: 'Ukrainian military comms disrupted, 5,800 German wind turbines affected', description: 'AcidRain wiper on satellite modems at invasion start.' },
  { id: 'op-026', name: 'Ronin Bridge Heist', year: 2022, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Ronin Network (Axie Infinity)', impact: '$625M cryptocurrency stolen', description: 'Lazarus compromised validator nodes via social engineering.' },
  { id: 'op-027', name: 'Costa Rica Government Attack', year: 2022, attribution: 'Russia (Conti)', type: 'disruption', targets: 'Costa Rica government', impact: 'National emergency declared, Treasury and healthcare shut down', description: 'First country to declare cyber emergency.' },
  { id: 'op-028', name: 'MOVEit Exploitation', year: 2023, attribution: 'Russia (Cl0p)', type: 'financial', targets: '2,500+ organizations via MOVEit zero-day', impact: '90M+ individuals affected, $10B+ estimated damages', description: 'Mass data exfiltration without ransomware deployment.' },
  { id: 'op-029', name: 'Change Healthcare Attack', year: 2024, attribution: 'Russia (BlackCat/ALPHV)', type: 'disruption', targets: 'Change Healthcare', impact: 'US healthcare payments disrupted weeks, $22M ransom, 100M+ records', description: 'Ransomware on healthcare payment clearinghouse.' },
  { id: 'op-030', name: 'Salt Typhoon Telecom Infiltration', year: 2023, attribution: 'China (Salt Typhoon)', type: 'espionage', targets: 'AT&T, Verizon, T-Mobile, Lumen', impact: 'CALEA wiretap systems compromised, official call records collected', description: 'Deep penetration compromising lawful intercept systems.' },
  { id: 'op-031', name: 'Volt Typhoon Pre-positioning', year: 2021, attribution: 'China (Volt Typhoon)', type: 'espionage', targets: 'US critical infrastructure', impact: 'Pre-positioned access for potential wartime disruption', description: 'Living-off-the-land pre-positioning in US infrastructure.' },
  { id: 'op-032', name: 'Industroyer2', year: 2022, attribution: 'Russia (Sandworm)', type: 'disruption', targets: 'Ukrainian electrical substations', impact: 'Disrupted by CERT-UA before full activation', description: 'Updated Industroyer targeting Ukrainian grid during invasion.' },
  { id: 'op-033', name: 'Shamoon 2', year: 2016, attribution: 'Iran (APT33)', type: 'destruction', targets: 'Saudi government agencies', impact: 'Thousands of computers wiped', description: 'Return of Shamoon with new anti-analysis.' },
  { id: 'op-034', name: 'Shamoon 3', year: 2018, attribution: 'Iran (APT33)', type: 'destruction', targets: 'Italian oil company Saipem', impact: '300-400 servers wiped', description: 'Third iteration targeting oil and gas.' },
  { id: 'op-035', name: 'WhisperGate', year: 2022, attribution: 'Russia', type: 'destruction', targets: 'Ukrainian government agencies', impact: 'Government websites defaced, wiper deployed', description: 'Destructive wiper before Russian invasion.' },
  { id: 'op-036', name: 'HermeticWiper', year: 2022, attribution: 'Russia (Sandworm)', type: 'destruction', targets: 'Ukrainian government and financial', impact: 'Hundreds of computers wiped before invasion', description: 'Wiper deployed hours before kinetic invasion.' },
  { id: 'op-037', name: 'Albanian Government Attack', year: 2022, attribution: 'Iran (MOIS)', type: 'disruption', targets: 'Albanian government', impact: 'Services disrupted, diplomatic crisis, relations severed', description: 'Iran attacked NATO member Albania over MEK hosting.' },
  { id: 'op-038', name: 'PRISM', year: 2007, attribution: 'United States (NSA)', type: 'espionage', targets: 'Global communications via US tech companies', impact: 'Massive surveillance collecting from Google, Facebook, Apple, Microsoft', description: 'NSA program for foreign intelligence from US internet companies.' },
  { id: 'op-039', name: 'Belgacom Hack', year: 2013, attribution: 'UK (GCHQ)', type: 'espionage', targets: 'Belgian telecom', impact: 'Access to telecom used by EU institutions', description: 'GCHQ operation to intercept EU official communications.' },
  { id: 'op-040', name: 'Predatory Sparrow', year: 2022, attribution: 'Israel (attributed)', type: 'disruption', targets: 'Iranian steel companies', impact: 'Steel mill equipment damaged, fire in facility', description: 'Cyber-physical attack causing real-world fire.' },
  { id: 'op-041', name: 'Harmony Bridge Heist', year: 2022, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Harmony blockchain bridge', impact: '$100M cryptocurrency stolen', description: 'Lazarus exploited cross-chain bridge vulnerabilities.' },
  { id: 'op-042', name: 'JBS Foods Attack', year: 2021, attribution: 'Russia (REvil)', type: 'financial', targets: 'JBS Foods', impact: 'Production halted globally, $11M ransom paid', description: 'Ransomware on critical food supply chain.' },
  { id: 'op-043', name: 'SolarWinds Serv-U', year: 2021, attribution: 'China (DEV-0322)', type: 'espionage', targets: 'US defense industrial base', impact: 'Zero-day exploitation targeting defense orgs', description: 'Chinese exploitation of different SolarWinds product.' },
  { id: 'op-044', name: 'Pegasus Operations', year: 2016, attribution: 'Israel (NSO Group)', type: 'espionage', targets: 'Journalists, activists, politicians', impact: '50,000+ numbers targeted by 40+ governments', description: 'Commercial spyware used against journalists and dissidents.' },
  { id: 'op-045', name: 'CCleaner Supply Chain', year: 2017, attribution: 'China (APT41)', type: 'espionage', targets: '2.27M CCleaner users', impact: 'Backdoored CCleaner, second-stage targeted tech companies', description: 'Supply chain compromise of popular utility.' },
  { id: 'op-046', name: 'ASUS Shadow Hammer', year: 2019, attribution: 'China (APT41)', type: 'espionage', targets: '1M+ ASUS users', impact: 'Backdoored updates targeting 600 specific MAC addresses', description: 'Supply chain attack through ASUS update mechanism.' },
  { id: 'op-047', name: 'Norsk Hydro Attack', year: 2019, attribution: 'Russia (LockerGoga)', type: 'disruption', targets: 'Norsk Hydro aluminum manufacturer', impact: '$71M losses, forced manual operations for weeks', description: 'Ransomware causing major industrial disruption.' },
  { id: 'op-048', name: 'Iranian Water Attack', year: 2020, attribution: 'Israel (attributed)', type: 'disruption', targets: 'Iranian water treatment', impact: 'Attempted chlorine level manipulation', description: 'Cyber attack on Iranian water infrastructure.' },
  { id: 'op-049', name: 'Israeli Water Targeting', year: 2020, attribution: 'Iran', type: 'disruption', targets: 'Israeli water and sewage', impact: 'Multiple attacks prevented before causing damage', description: 'Iran retaliated against Israeli water systems.' },
  { id: 'op-050', name: 'Oldsmar Water Plant', year: 2021, attribution: 'Unknown', type: 'disruption', targets: 'Oldsmar, Florida water plant', impact: 'Attempted increase of sodium hydroxide to dangerous levels', description: 'Remote access attempt to poison water supply.' },
  { id: 'op-051', name: 'SingHealth Breach', year: 2018, attribution: 'China (attributed)', type: 'espionage', targets: 'Singapore healthcare', impact: '1.5M patient records including PM medical data stolen', description: 'Targeted espionage against Singapore healthcare.' },
  { id: 'op-052', name: 'Marriott Breach', year: 2014, attribution: 'China (MSS attributed)', type: 'espionage', targets: 'Marriott/Starwood Hotels', impact: '500M guest records compromised over 4 years', description: 'Long-running espionage harvesting traveler data.' },
  { id: 'op-053', name: 'Equifax Breach', year: 2017, attribution: 'China (PLA)', type: 'espionage', targets: 'Equifax credit bureau', impact: '147M Americans PII exposed, 4 PLA members indicted', description: 'Chinese military hackers stole credit data.' },
  { id: 'op-054', name: 'Anthem Breach', year: 2015, attribution: 'China (Deep Panda)', type: 'espionage', targets: 'Anthem health insurance', impact: '78.8M records stolen including SSNs', description: 'Chinese espionage targeting health insurance data.' },
  { id: 'op-055', name: 'Yahoo Breaches', year: 2013, attribution: 'Russia (FSB)', type: 'espionage', targets: 'Yahoo email accounts', impact: '3B accounts compromised across two breaches', description: 'FSB officers directed hackers to compromise Yahoo.' },
  { id: 'op-056', name: 'TV5Monde Attack', year: 2015, attribution: 'Russia (APT28)', type: 'disruption', targets: 'French TV network', impact: '12 channels taken off air, ISIS false flag', description: 'APT28 disrupted French TV while planting false attribution.' },
  { id: 'op-057', name: 'Bundestag Hack', year: 2015, attribution: 'Russia (APT28)', type: 'espionage', targets: 'German Parliament', impact: '16GB data exfiltrated, GRU officer warrant issued', description: 'APT28 compromised German parliamentary network.' },
  { id: 'op-058', name: 'SWIFT Banking Attacks', year: 2015, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Banks in Vietnam, Ecuador, Philippines, Bangladesh', impact: '$2B+ in theft attempts', description: 'Systematic exploitation of SWIFT banking network.' },
  { id: 'op-059', name: 'WannaCry NHS Impact', year: 2017, attribution: 'North Korea (Lazarus)', type: 'disruption', targets: 'UK National Health Service', impact: '80 trusts affected, 19,000 appointments cancelled', description: 'WannaCry devastated UK healthcare on unpatched XP.' },
  { id: 'op-060', name: 'Dragonfly/Energetic Bear', year: 2014, attribution: 'Russia (FSB)', type: 'espionage', targets: 'US and European energy sector', impact: 'Persistent access to energy ICS', description: 'Russian espionage in Western energy infrastructure.' },
  { id: 'op-061', name: 'Carbanak/FIN7', year: 2013, attribution: 'Russia (Cybercriminal)', type: 'financial', targets: '100+ financial institutions worldwide', impact: '$1B+ stolen via ATM cash-out and wire transfers', description: 'Sophisticated banking malware campaign.' },
  { id: 'op-062', name: 'BlackEnergy', year: 2014, attribution: 'Russia (Sandworm)', type: 'espionage', targets: 'Ukrainian government and energy', impact: 'Pre-positioning for future destructive operations', description: 'Reconnaissance preceding 2015 grid attack.' },
  { id: 'op-063', name: 'CaddyWiper', year: 2022, attribution: 'Russia (Sandworm)', type: 'destruction', targets: 'Ukrainian organizations', impact: 'Data destruction during invasion', description: 'One of numerous wipers during Ukraine invasion.' },
  { id: 'op-064', name: 'FEIB Taiwan SWIFT Attack', year: 2017, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Far Eastern International Bank', impact: '$60M attempted, $500K recovered', description: 'Lazarus continued SWIFT attacks against Asian banks.' },
  { id: 'op-065', name: 'Operation Cleaver', year: 2012, attribution: 'Iran (IRGC)', type: 'espionage', targets: 'US military, airlines, energy in 16 countries', impact: 'Access to critical infrastructure networks', description: 'Iranian campaign targeting infrastructure in 16 nations.' },
  { id: 'op-066', name: 'FASTCash ATM Attacks', year: 2018, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Banks in Asia and Africa', impact: 'Tens of millions stolen in simultaneous ATM cash-outs', description: 'Lazarus deployed FASTCash on ATM switches.' },
  { id: 'op-067', name: 'ProxyShell', year: 2021, attribution: 'Multiple', type: 'espionage', targets: 'Exchange servers globally', impact: 'Continued mass exploitation after ProxyLogon patches', description: 'Follow-on Exchange exploitation campaign.' },
  { id: 'op-068', name: 'Irish HSE Attack', year: 2021, attribution: 'Russia (Conti)', type: 'disruption', targets: 'Ireland Health Service', impact: 'Entire health system shut down, $600M+ recovery', description: 'Conti crippled Irish healthcare for months.' },
  { id: 'op-069', name: 'US Infrastructure Ransomware Wave', year: 2021, attribution: 'Multiple Russian groups', type: 'disruption', targets: 'US critical infrastructure', impact: 'Multiple pipeline and utility companies hit', description: 'Wave of attacks after Colonial Pipeline.' },
  { id: 'op-070', name: 'SolarWinds SUPERNOVA', year: 2020, attribution: 'China (Spiral)', type: 'espionage', targets: 'SolarWinds Orion users', impact: 'Additional supply chain compromise found during SUNBURST investigation', description: 'Chinese group exploited SolarWinds separately from Russia.' },
  { id: 'op-071', name: 'Turla Hijacks Iranian APT', year: 2019, attribution: 'Russia (Turla)', type: 'espionage', targets: 'Iranian APT34 targets', impact: 'Turla hijacked Iranian C2 for 4th-party collection', description: 'FSB compromised Iranian APT infrastructure.' },
  { id: 'op-072', name: 'Operation Ghostwriter', year: 2020, attribution: 'Russia/Belarus', type: 'hybrid', targets: 'Lithuania, Latvia, Poland', impact: 'Hack-and-leak plus disinformation targeting NATO support', description: 'Combined cyber intrusion with information warfare.' },
  { id: 'op-073', name: 'Sandworm Election Targeting', year: 2020, attribution: 'Russia (Sandworm)', type: 'hybrid', targets: 'US state election infrastructure', impact: 'Scanning and probing of election systems', description: 'GRU Unit 74455 recon against US election infrastructure.' },
  { id: 'op-074', name: 'ICBC Ransomware', year: 2023, attribution: 'Russia (LockBit)', type: 'disruption', targets: 'ICBC Financial Services', impact: 'Worlds largest bank disrupted, US Treasury market affected', description: 'LockBit disrupted ICBC Treasury clearing.' },
  { id: 'op-075', name: 'Boeing Data Leak', year: 2023, attribution: 'Russia (LockBit)', type: 'financial', targets: 'Boeing Corporation', impact: '43GB sensitive data leaked', description: 'LockBit exfiltrated Boeing proprietary data.' },
  { id: 'op-076', name: 'MGM Resorts Attack', year: 2023, attribution: 'Scattered Spider/BlackCat', type: 'disruption', targets: 'MGM Resorts International', impact: 'Operations disrupted 10 days, $100M+ losses', description: 'Social engineering plus ransomware against casino.' },
  { id: 'op-077', name: 'Caesars Attack', year: 2023, attribution: 'Scattered Spider/BlackCat', type: 'financial', targets: 'Caesars Entertainment', impact: '$15M ransom paid, customer data stolen', description: 'Social engineering attack, ransom paid.' },
  { id: 'op-078', name: 'GoAnywhere MFT Exploitation', year: 2023, attribution: 'Russia (Cl0p)', type: 'financial', targets: '130+ organizations', impact: '130+ orgs compromised via zero-day', description: 'Cl0p exploited file transfer zero-day.' },
  { id: 'op-079', name: 'Barracuda ESG Zero-Day', year: 2023, attribution: 'China (UNC4841)', type: 'espionage', targets: 'Government and critical infrastructure', impact: 'Persistent backdoors, some required hardware replacement', description: 'Chinese espionage via Barracuda ESG zero-day.' },
  { id: 'op-080', name: 'Citrix Bleed', year: 2023, attribution: 'Multiple (LockBit primary)', type: 'hybrid', targets: 'Citrix NetScaler/ADC users', impact: 'Mass exploitation enabling ransomware across thousands', description: 'Critical Citrix vulnerability widely exploited.' },
  { id: 'op-081', name: 'Okta Support Breach', year: 2023, attribution: 'Scattered Spider', type: 'espionage', targets: 'Okta customers', impact: '134 customers affected via support portal', description: 'Identity provider support system compromised.' },
  { id: 'op-082', name: 'Microsoft Executive Email Hack', year: 2023, attribution: 'Russia (APT29)', type: 'espionage', targets: 'Microsoft leadership and security', impact: 'Executive emails compromised, source code accessed', description: 'APT29 password-sprayed test tenant for leadership email.' },
  { id: 'op-083', name: 'Ivanti VPN Zero-Day Campaign', year: 2024, attribution: 'China (UNC5221)', type: 'espionage', targets: 'Government and defense worldwide', impact: 'CISA ordered emergency Ivanti disconnect from federal networks', description: 'Chinese exploitation of Ivanti Connect Secure zero-days.' },
  { id: 'op-084', name: 'XZ Utils Backdoor', year: 2024, attribution: 'Unknown nation-state', type: 'hybrid', targets: 'Linux SSH authentication', impact: 'Backdoor would have compromised SSH on major distros', description: 'Multi-year social engineering to insert SSH backdoor.' },
  { id: 'op-085', name: 'CrowdStrike Update Incident', year: 2024, attribution: 'Accidental', type: 'disruption', targets: 'Global Windows systems', impact: '8.5M systems crashed, airlines, hospitals, banks disrupted', description: 'Faulty CrowdStrike update caused global BSOD.' },
  { id: 'op-086', name: 'Pager Device Explosions', year: 2024, attribution: 'Israel (Mossad/Unit 8200)', type: 'destruction', targets: 'Hezbollah communication devices', impact: 'Thousands of devices exploded, 37 killed, 3,000+ wounded', description: 'Physical supply chain compromise with explosives.' },
  { id: 'op-087', name: 'APT29 Teams Phishing', year: 2024, attribution: 'Russia (APT29)', type: 'espionage', targets: 'Government and NGO via Microsoft Teams', impact: 'MFA bypass via compromised M365 tenants', description: 'APT29 abused small business tenants for Teams phishing.' },
  { id: 'op-088', name: 'Volt Typhoon Botnet Disruption', year: 2024, attribution: 'US (FBI)', type: 'disruption', targets: 'Volt Typhoon KV-botnet', impact: 'Court-authorized disruption of Chinese botnet', description: 'FBI remotely removed malware from SOHO routers.' },
  { id: 'op-089', name: 'LockBit Operation Cronos', year: 2024, attribution: 'International Law Enforcement', type: 'disruption', targets: 'LockBit infrastructure', impact: 'Infrastructure seized, affiliates identified, leader doxxed', description: 'International operation disrupted LockBit.' },
  { id: 'op-090', name: 'Snowflake Customer Attacks', year: 2024, attribution: 'UNC5537', type: 'financial', targets: 'AT&T, Ticketmaster, 160+ Snowflake customers', impact: 'Massive data theft using stolen credentials without MFA', description: 'Credential-based attacks on cloud data warehouses.' },
  { id: 'op-091', name: 'Iran Albania Attack II', year: 2024, attribution: 'Iran (MOIS)', type: 'disruption', targets: 'Albanian Institute of Statistics', impact: 'Continued Iranian attacks despite diplomatic severance', description: 'Iran continued attacks on Albania.' },
  { id: 'op-092', name: 'MSS LinkedIn Recruitment', year: 2024, attribution: 'China (MSS)', type: 'espionage', targets: 'Western government employees', impact: 'Thousands of officials approached for recruitment', description: 'Large-scale intelligence recruitment via social media.' },
  { id: 'op-093', name: 'NK IT Worker Infiltration', year: 2024, attribution: 'North Korea (RGB)', type: 'financial', targets: 'US/EU tech companies', impact: 'Thousands of NK workers fraudulently employed', description: 'North Korean workers using stolen identities for tech jobs.' },
  { id: 'op-094', name: 'APT29 HPE Attack', year: 2024, attribution: 'Russia (APT29)', type: 'espionage', targets: 'Hewlett Packard Enterprise', impact: 'HPE cloud email compromised', description: 'APT29 compromised HPE before Microsoft breach.' },
  { id: 'op-095', name: 'IRGC Persona Operations', year: 2024, attribution: 'Iran (IRGC)', type: 'hybrid', targets: 'US election campaigns', impact: 'Hack-and-leak attempts against presidential campaigns', description: 'IRGC attempted to influence US election.' },
  { id: 'op-096', name: 'Typhoon Flax', year: 2025, attribution: 'China (PLA)', type: 'espionage', targets: 'US defense satellite comms', impact: 'Access to military satellite ground station management', description: 'Chinese APT targeting satellite C2 infrastructure.' },
  { id: 'op-097', name: 'Operation Dark Winter', year: 2025, attribution: 'Russia (GRU)', type: 'disruption', targets: 'European gas distribution SCADA', impact: 'Attempted gas supply disruption during winter', description: 'Sandworm targeted European gas during cold snap.' },
  { id: 'op-098', name: 'Lazarus NFT Marketplace Exploit', year: 2025, attribution: 'North Korea (Lazarus)', type: 'financial', targets: 'Major NFT marketplace', impact: '$340M in digital assets stolen', description: 'Lazarus exploited logic flaw in NFT marketplace.' },
  { id: 'op-099', name: 'Iranian Hospital Wiper', year: 2025, attribution: 'Iran (APT33)', type: 'destruction', targets: 'Gulf state hospital networks', impact: 'Hospital systems wiped during medical procedures', description: 'Destructive wiper targeting healthcare.' },
  { id: 'op-100', name: 'Cascade Zero', year: 2026, attribution: 'Multiple nation-states', type: 'disruption', targets: 'Global internet infrastructure', impact: 'Coordinated BGP hijacking and DNS root server targeting', description: 'Multi-nation internet infrastructure attack.' },
  { id: 'op-101', name: 'Dragon Storm', year: 2026, attribution: 'China (PLA/MSS)', type: 'disruption', targets: 'US critical infrastructure during Taiwan crisis', impact: 'Simultaneous activation of pre-positioned access', description: 'Volt Typhoon activates all pre-positioned access.' },
  { id: 'op-102', name: 'APT29 Cloud Identity Attack', year: 2025, attribution: 'Russia (SVR)', type: 'espionage', targets: 'US/EU cloud identity federation', impact: 'Cross-tenant government cloud access via federation compromise', description: 'SVR exploitation of Azure AD federation.' },
  { id: 'op-103', name: 'Healthcare Ransomware Wave', year: 2026, attribution: 'Multiple Russian groups', type: 'financial', targets: 'US healthcare sector', impact: 'Coordinated ransomware hitting 30+ hospitals', description: 'Multiple groups targeting healthcare after Change Healthcare.' },
  { id: 'op-104', name: 'Silent EU Parliament Breach', year: 2025, attribution: 'China (APT41)', type: 'espionage', targets: 'European Parliament email/docs', impact: 'Multi-year undetected access to China policy communications', description: 'APT41 maintained persistent access to EU legislative comms.' }
];

// ============================================================================
// WARGAME SCENARIOS (15 scenarios)
// ============================================================================
var WARGAME_SCENARIOS = [
  { id: 'ws-001', codename: 'DRAGON STORM', description: 'China activates Volt Typhoon pre-positioned access across US critical infrastructure during Taiwan Strait crisis', adversary: 'China (PLA/MSS)', difficulty: 5, estimatedDuration: '4 hours', phases: [
    { name: 'Phase 1: Geopolitical Trigger', description: 'PLA announces naval blockade of Taiwan. Volt Typhoon implants receiving activation signals.', blueTeamOptions: ['Activate CISA Shields Up', 'Deploy hunt teams to critical infrastructure', 'Elevate DEFCON level', 'Brief White House NSC'] },
    { name: 'Phase 2: Initial Activation', description: 'Water treatment in 3 states reports SCADA anomalies. Power grid operators detect unauthorized access.', blueTeamOptions: ['Isolate affected OT networks', 'Activate ICS incident response', 'Implement manual operations fallback', 'Deploy National Guard cyber units'] },
    { name: 'Phase 3: Escalation', description: 'Telecom backbone routing anomalies. Port management unauthorized commands. Military logistics affected.', blueTeamOptions: ['Activate military PACE plan', 'Deploy CYBERCOM teams', 'Coordinate with Five Eyes', 'Consider proportional response'] },
    { name: 'Phase 4: Full Crisis', description: 'Multiple sectors simultaneously affected. Public panic. Military C2 degraded.', blueTeamOptions: ['Activate continuity of government', 'Deploy emergency restoration', 'Authorize CYBERCOM offensive', 'Coordinate coalition response'] }
  ] },
  { id: 'ws-002', codename: 'BEARS CLAW', description: 'Russia launches coordinated attack on NATO member: power grid, telecom, financial', adversary: 'Russia (GRU/Sandworm)', difficulty: 5, estimatedDuration: '3.5 hours', phases: [
    { name: 'Phase 1: Prelude', description: 'Russian exercises near borders. Sandworm recon of critical infrastructure intensifies.', blueTeamOptions: ['Elevate national cyber posture', 'Deploy monitoring to critical infrastructure', 'Brief NATO allies', 'Activate mutual defense consultations'] },
    { name: 'Phase 2: First Strike', description: 'Industroyer2 variant activates in power grid. Substations trip. Backup generators fail.', blueTeamOptions: ['Activate grid isolation', 'Deploy ICS emergency response', 'Implement islanding', 'Request NATO cyber rapid reaction'] },
    { name: 'Phase 3: Multi-vector', description: 'SWIFT disrupted. Telecom base stations losing connectivity. Government email encrypted.', blueTeamOptions: ['Activate backup SWIFT channels', 'Deploy satellite comms fallback', 'Restore from offline backups', 'Invoke Article 5 consultations'] },
    { name: 'Phase 4: Recovery', description: 'Effects spreading to neighboring countries. Public services severely degraded.', blueTeamOptions: ['Coordinate international response', 'Deploy allied cyber defense', 'Authorize proportional response', 'Implement long-term hardening'] }
  ] },
  { id: 'ws-003', codename: 'HERMITS FURY', description: 'North Korea deploys WannaCry-scale worm targeting financial sector for crypto theft', adversary: 'North Korea (RGB/Lazarus)', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Setup', description: 'Lazarus compiling worm with banking trojan and crypto-stealing capabilities.', blueTeamOptions: ['Alert FS-ISAC members', 'Deploy emergency patches', 'Activate financial threat sharing', 'Brief Treasury and Fed'] },
    { name: 'Phase 2: Outbreak', description: 'Worm spreading through banking networks. Crypto hot wallets being drained.', blueTeamOptions: ['Network quarantine for affected institutions', 'Freeze suspicious crypto transactions', 'Activate financial incident response', 'Coordinate with international banking'] },
    { name: 'Phase 3: Peak', description: 'Worm reaches 50,000+ endpoints. $500M+ crypto stolen. $200M+ wire transfers initiated.', blueTeamOptions: ['Emergency SWIFT halt', 'Coordinate crypto exchange wallet freezing', 'Deploy FBI cyber for tracing', 'Brief Congressional leadership'] },
    { name: 'Phase 4: Containment', description: 'Kill switch identified. Crypto being laundered. Banking systems need restoration.', blueTeamOptions: ['Activate kill switch', 'Trace and freeze stolen crypto', 'Deploy banking recovery', 'Coordinate law enforcement'] }
  ] },
  { id: 'ws-004', codename: 'PERSIAN FIRE', description: 'Iran retaliates against sanctions with Shamoon-variant wiper targeting Gulf oil/gas', adversary: 'Iran (IRGC/APT33)', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Trigger', description: 'Expanded sanctions announced. Iranian rhetoric escalates. APT33 staging detected.', blueTeamOptions: ['Elevate Gulf defense posture', 'Deploy Shamoon detection', 'Brief Gulf oil companies', 'Coordinate with CENTCOM'] },
    { name: 'Phase 2: Strike', description: 'Shamoon deployed to Saudi, UAE, Kuwait oil companies. SCADA targeted simultaneously.', blueTeamOptions: ['Isolate affected networks', 'Manual oil production operations', 'Activate oil sector IR', 'Request CYBERCOM assistance'] },
    { name: 'Phase 3: Impact', description: 'Oil production reduced 30%. Global prices spiking. Proxy groups launching cyber attacks.', blueTeamOptions: ['Activate strategic petroleum reserves', 'Deploy international assistance', 'Coordinate energy market stabilization', 'Assess response options'] },
    { name: 'Phase 4: Response', description: 'Decision on counter-operations. Diplomatic pressure mounting.', blueTeamOptions: ['Authorize defensive ops against Iranian C2', 'Coordinate diplomatic response', 'Deploy long-term recovery', 'Implement follow-on monitoring'] }
  ] },
  { id: 'ws-005', codename: 'CASCADE ZERO', description: 'Coordinated multi-nation attack on internet infrastructure: BGP, DNS root, undersea cables', adversary: 'Coalition (Russia + China + Iran)', difficulty: 5, estimatedDuration: '5 hours', phases: [
    { name: 'Phase 1: Signals', description: 'BGP anomalies affecting 5% of global routing. DNS roots under DDoS. Cable anomalies in 3 oceans.', blueTeamOptions: ['Alert ICANN and root operators', 'Activate emergency BGP filtering', 'Deploy cable monitoring', 'Brief international partners'] },
    { name: 'Phase 2: Fragmentation', description: 'Internet degrading globally. Cloud providers losing inter-region connectivity.', blueTeamOptions: ['Activate internet resilience protocols', 'Deploy satellite alternative routing', 'Coordinate ISP emergency peering', 'Activate national internet plans'] },
    { name: 'Phase 3: Isolation', description: 'Countries losing connectivity. Markets halted. Military falling back to classified nets.', blueTeamOptions: ['Implement military PACE', 'Deploy emergency broadcast', 'Coordinate physical cable restoration', 'Activate continuity plans'] },
    { name: 'Phase 4: Restoration', description: 'Partial connectivity restoring. Attribution becoming clearer.', blueTeamOptions: ['Coordinate cable repair', 'Deploy clean DNS infrastructure', 'Implement RPKI enforcement', 'Plan diplomatic response'] }
  ] },
  { id: 'ws-006', codename: 'DARK HARVEST', description: 'Supply chain attack through major cloud provider affecting thousands of organizations', adversary: 'China (APT41)', difficulty: 4, estimatedDuration: '3.5 hours', phases: [
    { name: 'Phase 1: Discovery', description: 'Anomalous update pushed to 50,000+ cloud VMs. Backdoor detected by single analyst.', blueTeamOptions: ['Verify cloud agent integrity', 'Isolate compromised workloads', 'Alert cloud provider security', 'Begin forensic analysis'] },
    { name: 'Phase 2: Scope', description: 'Backdoor in 3 major cloud providers. Government workloads potentially compromised.', blueTeamOptions: ['Emergency cloud migration', 'Deploy exfiltration monitoring', 'Coordinate CISA emergency directive', 'Brief affected agencies'] },
    { name: 'Phase 3: Response', description: 'Clean agent deploying. Attacker activating second-stage before losing access.', blueTeamOptions: ['Accelerate clean deployment', 'Network-level C2 blocking', 'Deploy damage assessment', 'Coordinate with intel community'] },
    { name: 'Phase 4: Recovery', description: 'Hundreds of orgs still compromised. Cloud trust severely damaged.', blueTeamOptions: ['Mandatory agent verification', 'Zero-trust for cloud management', 'Industry-wide supply chain review', 'Establish new cloud security standards'] }
  ] },
  { id: 'ws-007', codename: 'SILENT FALL', description: 'Insider threat plus nation-state APT accessing classified military networks', adversary: 'Russia (SVR) + insider', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Recruitment', description: 'SVR-recruited insider provides VPN credentials to classified enclave.', blueTeamOptions: ['Activate insider threat program', 'Deploy user behavior analytics', 'Review privileged access logs', 'Implement continuous vetting'] },
    { name: 'Phase 2: Lateral Movement', description: 'APT29 moving through classified networks. JWICS and SIPRNet accessed.', blueTeamOptions: ['Emergency credential rotation', 'Network segmentation enforcement', 'Activate counterintelligence', 'Brief DNI'] },
    { name: 'Phase 3: Exfiltration', description: 'Classified documents being staged. Insider providing physical media.', blueTeamOptions: ['Emergency access revocation', 'Physical security measures', 'Coordinate with FBI CI', 'Activate damage assessment'] },
    { name: 'Phase 4: Damage Assessment', description: 'Multiple SAPs potentially affected. Insider arrested.', blueTeamOptions: ['Full damage assessment', 'Remediation across programs', 'Brief Congressional intel committees', 'Deploy enhanced monitoring'] }
  ] },
  { id: 'ws-008', codename: 'LIGHTNING STRIKE', description: 'Simultaneous ransomware on US hospitals during pandemic surge', adversary: 'Russian ransomware groups (coordinated)', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Warning', description: 'Intel indicates LockBit, BlackCat, and Cl0p coordinating hospital targeting.', blueTeamOptions: ['Alert HHS and H-ISAC', 'Emergency hospital patching', 'Activate healthcare cyber response', 'Brief hospitals on threat'] },
    { name: 'Phase 2: Impact', description: '35 hospitals across 12 states hit simultaneously. EHR encrypted. Patients diverted.', blueTeamOptions: ['Activate HHS emergency response', 'Deploy patient diversion plans', 'Paper-based records fallback', 'Request National Guard support'] },
    { name: 'Phase 3: Crisis', description: 'Patient deaths attributed to delays. More hospitals being hit.', blueTeamOptions: ['Deploy emergency medical teams', 'Activate FEMA health protocols', 'Coordinate national response', 'Consider ransom for life-threatening cases'] },
    { name: 'Phase 4: Resolution', description: 'Decryption keys obtained. Recovery beginning.', blueTeamOptions: ['Deploy decryption', 'Authorize CYBERCOM offensive', 'Long-term healthcare resilience plan', 'Brief Congress on cyber gaps'] }
  ] },
  { id: 'ws-009', codename: 'POLAR VORTEX', description: 'Russian attack on European gas distribution during extreme winter', adversary: 'Russia (Sandworm)', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Setup', description: 'Record cold. Russian gas restrictions. Sandworm probing gas distribution SCADA.', blueTeamOptions: ['Alert European energy CERTs', 'Deploy ICS monitoring to gas', 'Verify backup heating', 'Coordinate EU energy plans'] },
    { name: 'Phase 2: Attack', description: 'Gas SCADA in 4 EU countries compromised. Pressure regulation manipulated.', blueTeamOptions: ['Manual gas operations', 'Emergency heating for vulnerable populations', 'ICS emergency shutdown', 'Coordinate with EU energy ministers'] },
    { name: 'Phase 3: Humanitarian Crisis', description: 'Heating failures across cities. Hospitals and elderly care losing heat.', blueTeamOptions: ['Military emergency heating', 'Civil emergency shelters', 'International energy assistance', 'Brief NATO on Article 5'] },
    { name: 'Phase 4: Stabilization', description: 'Manual operations restoring service. Attribution confirmed.', blueTeamOptions: ['Complete restoration', 'Long-term SCADA upgrades', 'NATO unified response', 'Enhanced follow-on monitoring'] }
  ] },
  { id: 'ws-010', codename: 'RED HAND', description: 'Iran and proxies launch coordinated cyber campaign against Israel', adversary: 'Iran (IRGC + proxies)', difficulty: 4, estimatedDuration: '3 hours', phases: [
    { name: 'Phase 1: Escalation', description: 'Military tensions spike. Multiple Iranian APTs activating. Hezbollah cyber coordinating.', blueTeamOptions: ['Activate Israel Cyber Directorate', 'Deploy Unit 8200 defensive teams', 'Brief infrastructure operators', 'Coordinate with CYBERCOM'] },
    { name: 'Phase 2: Multi-APT Strike', description: 'APT33 wipers against utilities. APT35 harvesting defense credentials. Moses Staff leaking data.', blueTeamOptions: ['Sector-specific defenses', 'Wiper containment', 'Military network isolation', 'Intelligence sharing with allies'] },
    { name: 'Phase 3: Critical Impact', description: 'Power grid fluctuations. Water SCADA compromised. Iron Dome systems targeted.', blueTeamOptions: ['Backup military systems', 'Manual critical infrastructure ops', 'Emergency cyber defense measures', 'Authorize offensive operations'] },
    { name: 'Phase 4: Counter-Operations', description: 'Decision to launch counter-cyber ops against Iranian infrastructure.', blueTeamOptions: ['Execute counter-operations', 'Coordinate allied support', 'Long-term defensive hardening', 'Pursue diplomatic de-escalation'] }
  ] },
  { id: 'ws-011', codename: 'GHOST PROTOCOL', description: 'Zero-day in critical open source crypto library affecting 90% of web servers', adversary: 'Unknown nation-state', difficulty: 5, estimatedDuration: '4 hours', phases: [
    { name: 'Phase 1: Discovery', description: 'Backdoor found in crypto library used by 90% of web servers. Present for 6 months.', blueTeamOptions: ['Verify backdoor scope', 'Assess affected systems', 'Coordinate disclosure', 'Prepare emergency advisory'] },
    { name: 'Phase 2: Assessment', description: 'Every major organization affected. Mass exploitation may have occurred.', blueTeamOptions: ['Issue CISA emergency advisory', 'Coordinate global patching', 'Deploy compromise assessment', 'Brief international CERTs'] },
    { name: 'Phase 3: Exploitation Evidence', description: 'Selective exploitation against intel targets. Attribution emerging. Second backdoor found.', blueTeamOptions: ['Expand forensic investigation', 'Complete library replacement', 'Coordinate intel assessment', 'Monitor second backdoor'] },
    { name: 'Phase 4: Long-term', description: 'Full scope uncertain. Open source trust model questioned.', blueTeamOptions: ['SBOM requirements', 'Automated dependency verification', 'Funded open source security', 'International supply chain standards'] }
  ] },
  { id: 'ws-012', codename: 'STEEL RAIN', description: 'Coordinated attack on SWIFT, stock exchanges, and central banks', adversary: 'Multiple threat actors', difficulty: 5, estimatedDuration: '4 hours', phases: [
    { name: 'Phase 1: Indicators', description: 'SWIFT delays. Stock exchange order matching erratic. Multiple anomalies simultaneously.', blueTeamOptions: ['Alert FS-ISAC and Treasury', 'Deploy financial IR', 'Activate circuit breakers', 'Brief Fed and SEC'] },
    { name: 'Phase 2: Market Impact', description: 'NYSE/NASDAQ flash crash. SWIFT halted. Major banks compromised.', blueTeamOptions: ['Halt electronic trading', 'SWIFT contingency procedures', 'Deploy FBI Financial Crimes', 'Coordinate international regulators'] },
    { name: 'Phase 3: Cascade', description: 'Asian/European markets in chaos. Central banks compromised. Lazarus hitting crypto simultaneously.', blueTeamOptions: ['Global market halt', 'Deploy international cyber response', 'Emergency financial communications', 'Brief G7 finance ministers'] },
    { name: 'Phase 4: Stabilization', description: 'Financial integrity being verified. Public confidence severely damaged.', blueTeamOptions: ['Verify integrity before restart', 'Emergency liquidity provisions', 'Enhanced follow-on monitoring', 'International recovery plan'] }
  ] },
  { id: 'ws-013', codename: 'SAND SPIDER', description: 'AI-generated deepfakes combined with zero-day for government infiltration', adversary: 'Advanced nation-state', difficulty: 5, estimatedDuration: '3.5 hours', phases: [
    { name: 'Phase 1: Social Engineering', description: 'Deepfake video calls impersonate senior officials. Video platform zero-day exploited.', blueTeamOptions: ['Deploy deepfake detection', 'Out-of-band identity verification', 'Audit video platform security', 'Alert all agencies'] },
    { name: 'Phase 2: Access', description: 'Harvested credentials used across agencies. AI-powered lateral movement evading EDR.', blueTeamOptions: ['Emergency credential rotation', 'AI-aware detection systems', 'Activate threat hunting', 'Network micro-segmentation'] },
    { name: 'Phase 3: Collection', description: 'Classified material exfiltrated. AI prioritizing highest-value documents.', blueTeamOptions: ['Emergency DLP', 'Deploy deception technology', 'Coordinate multi-agency response', 'Brief oversight committees'] },
    { name: 'Phase 4: Attribution', description: 'Novel TTPs making attribution difficult. AI-generated false flags embedded.', blueTeamOptions: ['Advanced attribution analysis', 'Five Eyes sharing', 'Long-term re-entry monitoring', 'AI-specific defensive capabilities'] }
  ] },
  { id: 'ws-014', codename: 'BLACK TIDE', description: 'Attack on port management and maritime navigation causing shipping disruptions', adversary: 'China (PLA Navy Cyber)', difficulty: 3, estimatedDuration: '2.5 hours', phases: [
    { name: 'Phase 1: Reconnaissance', description: 'Scanning of US West Coast port management. AIS anomalies. Container tracking probed.', blueTeamOptions: ['Alert Maritime Transportation ISAC', 'Deploy port OT monitoring', 'Verify AIS integrity', 'Brief Coast Guard Cyber'] },
    { name: 'Phase 2: Attack', description: 'Crane management locked at 3 ports. Container tracking corrupted. Ship scheduling offline.', blueTeamOptions: ['Manual port operations', 'Deploy Coast Guard cyber', 'Activate port backups', 'Coordinate with CBP and DOT'] },
    { name: 'Phase 3: Supply Chain Impact', description: 'Major shipping delays. Just-in-time manufacturing affected. Military logistics disrupted.', blueTeamOptions: ['Alternative port facilities', 'Military logistics support', 'Coordinate international shipping', 'Assess military readiness impact'] },
    { name: 'Phase 4: Restoration', description: 'Port systems being restored. Maritime OT security lessons learned.', blueTeamOptions: ['Restore with enhanced security', 'Maritime OT security standards', 'International port cooperation', 'Deploy permanent OT monitoring'] }
  ] },
  { id: 'ws-015', codename: 'PHANTOM PULSE', description: 'EMP weapon combined with cyber attack on backup systems creating cascading failure', adversary: 'Advanced nation-state (hybrid)', difficulty: 5, estimatedDuration: '4.5 hours', phases: [
    { name: 'Phase 1: EMP Event', description: 'High-altitude EMP over mid-Atlantic. Electronics in 500-mile radius disrupted.', blueTeamOptions: ['Activate FEMA emergency', 'Assess electronics damage scope', 'Deploy military communications', 'Brief National Command Authority'] },
    { name: 'Phase 2: Cyber Compound', description: 'Surviving backup systems targeted by pre-positioned cyber implants.', blueTeamOptions: ['Isolate backups from network', 'Manual backup procedures', 'Faraday-protected communications', 'Military cyber defense'] },
    { name: 'Phase 3: Cascading Failure', description: 'No electronic backup. Nuclear cooling on emergency diesel. Hospital generators failing.', blueTeamOptions: ['Military emergency response', 'Nuclear emergency protocols', 'Manual hospital operations', 'Mass evacuation if needed'] },
    { name: 'Phase 4: National Response', description: 'Federal emergency declared. Military deploying for restoration.', blueTeamOptions: ['Army Corps of Engineers', 'National grid restoration plan', 'International assistance', 'Strategic response assessment'] }
  ] }
];

// ============================================================================
// INCIDENT RESPONSE PLAYBOOKS (21 entries)
// ============================================================================
var IR_PLAYBOOKS = [
  { id: 'pb-001', name: 'Ransomware Incident Response', category: 'Ransomware', priority: 1, applicableSectors: ['All'], steps: ['Isolate affected systems immediately', 'Preserve forensic evidence', 'Identify variant and check for decryptors', 'Assess encryption and exfiltration scope', 'Notify law enforcement (FBI IC3)', 'Activate backup restoration', 'Conduct root cause analysis', 'Implement access vector remediation', 'Restore from clean backups', 'Monitor for re-infection', 'Post-incident review'] },
  { id: 'pb-002', name: 'Nation-State APT Intrusion', category: 'Espionage', priority: 1, applicableSectors: ['Government', 'Defense', 'Critical Infrastructure'], steps: ['Maintain OPSEC - do NOT alert adversary', 'Engage threat intel for attribution', 'Deploy silent monitoring', 'Map full adversary access', 'Identify all compromised credentials', 'Develop comprehensive remediation plan', 'Execute single coordinated remediation', 'Implement enhanced re-entry monitoring', 'Notify intelligence agencies', 'Conduct damage assessment', 'Brief leadership'] },
  { id: 'pb-003', name: 'ICS/SCADA Compromise', category: 'ICS', priority: 1, applicableSectors: ['Energy', 'Water', 'Manufacturing'], steps: ['Activate OT incident response team', 'Assess safety implications immediately', 'Isolate compromised OT from IT', 'Switch to manual if safety risk exists', 'Preserve OT forensic evidence', 'Identify compromised controllers', 'Verify safety instrumented system integrity', 'Restore clean PLC programs', 'Implement enhanced OT monitoring', 'Root cause analysis', 'Report to ICS-CERT/CISA'] },
  { id: 'pb-004', name: 'Supply Chain Compromise', category: 'Supply Chain', priority: 1, applicableSectors: ['All'], steps: ['Identify compromised component', 'Assess affected system scope', 'Isolate systems with compromised software', 'Notify vendor and coordinate', 'Deploy IOCs across organization', 'Forensic analysis of component', 'Identify second-stage payloads', 'Remove and replace with verified versions', 'Audit supply chain procedures', 'Implement SBOM tracking', 'Brief sector ISAC'] },
  { id: 'pb-005', name: 'DDoS Attack Mitigation', category: 'Availability', priority: 2, applicableSectors: ['All'], steps: ['Activate DDoS mitigation service', 'Identify attack type', 'Implement rate limiting and filtering', 'Enable GeoIP blocking if possible', 'Scale infrastructure', 'Monitor for secondary attacks', 'Coordinate with ISP for upstream filtering', 'Document attack patterns', 'Implement permanent protections', 'Update response playbook'] },
  { id: 'pb-006', name: 'Data Breach Response', category: 'Data Breach', priority: 1, applicableSectors: ['All'], steps: ['Contain breach and stop exfiltration', 'Assess data accessed or stolen', 'Determine if PII/PHI/classified involved', 'Preserve forensic evidence', 'Notify legal counsel and privacy officer', 'Determine regulatory notification requirements', 'Prepare individual notifications', 'Engage credit monitoring if PII exposed', 'Notify regulators within required timeframes', 'Root cause analysis', 'Implement remediation'] },
  { id: 'pb-007', name: 'Insider Threat Response', category: 'Insider Threat', priority: 1, applicableSectors: ['Government', 'Defense', 'Financial'], steps: ['Coordinate with counterintelligence and legal', 'Do NOT confront suspect directly', 'Implement enhanced monitoring', 'Preserve evidence per legal requirements', 'Assess compromise scope', 'Identify all accessed systems and data', 'Review access and communication logs', 'Coordinate with law enforcement', 'Implement access restrictions', 'Conduct damage assessment', 'Review insider threat program'] },
  { id: 'pb-008', name: 'Wiper Malware Response', category: 'Destructive', priority: 1, applicableSectors: ['All'], steps: ['Immediately isolate affected segments', 'Power off unaffected systems to prevent spread', 'Assess destruction scope', 'Activate offline backup restoration', 'Verify backup integrity before restoring', 'Identify wiper variant and propagation method', 'Clean and rebuild affected systems', 'Restore from verified backups', 'Implement network segmentation', 'Deploy wiper detection signatures', 'Post-incident review'] },
  { id: 'pb-009', name: 'Cloud Account Compromise', category: 'Cloud', priority: 2, applicableSectors: ['All'], steps: ['Reset compromised credentials', 'Review and revoke suspicious OAuth apps', 'Audit cloud access logs', 'Check for persistence mechanisms', 'Review IAM policy changes', 'Check for data exfiltration', 'Implement conditional access', 'Enable enhanced cloud monitoring', 'Review and harden cloud config', 'Update cloud IR procedures'] },
  { id: 'pb-010', name: 'BGP Hijacking Response', category: 'Network', priority: 1, applicableSectors: ['Telecom', 'Government'], steps: ['Confirm BGP hijack via RIPE, RouteViews', 'Identify hijacking AS and affected prefixes', 'Contact upstream ISPs for filtering', 'Implement RPKI route origin validation', 'Verify no data interception', 'Coordinate with affected networks', 'Document for law enforcement', 'Implement permanent RPKI/BGPsec', 'Review BGP security config', 'Update routing security policies'] },
  { id: 'pb-011', name: 'DNS Hijacking Response', category: 'Network', priority: 1, applicableSectors: ['Government', 'Financial', 'Telecom'], steps: ['Verify DNS record changes', 'Secure registrar with new credentials/MFA', 'Restore correct DNS records', 'Implement DNSSEC', 'Check for fraudulent SSL certificates', 'Revoke fraudulent certificates', 'Assess traffic interception', 'Notify users about credential exposure', 'Implement CT monitoring', 'Secure all registrar accounts'] },
  { id: 'pb-012', name: 'Zero-Day Exploitation', category: 'Vulnerability', priority: 1, applicableSectors: ['All'], steps: ['Identify the zero-day being exploited', 'Assess vulnerable systems', 'Implement available mitigations', 'Deploy virtual patches if available', 'Coordinate with vendor on patch', 'Hunt for exploitation indicators', 'Isolate or restrict vulnerable systems', 'Apply vendor patch on release', 'Post-patch verification', 'Monitor for ongoing exploitation'] },
  { id: 'pb-013', name: 'Phishing Campaign Response', category: 'Social Engineering', priority: 2, applicableSectors: ['All'], steps: ['Extract IOCs from phishing emails', 'Search email logs for all recipients', 'Remove phishing from all mailboxes', 'Identify users who clicked/opened', 'Force password reset for compromised', 'Scan endpoints for malware', 'Block phishing domains at perimeter', 'Report domains for takedown', 'Send awareness notification', 'Update email security rules'] },
  { id: 'pb-014', name: 'Cryptocurrency Theft Response', category: 'Financial', priority: 1, applicableSectors: ['Financial', 'Technology'], steps: ['Identify compromised wallets and amounts', 'Freeze remaining assets', 'Trace stolen funds via blockchain', 'Contact exchanges to freeze assets', 'Engage blockchain forensics', 'Report to FBI IC3 and FinCEN', 'Identify compromise vector', 'Secure remaining crypto infrastructure', 'Implement multi-sig and cold storage', 'Coordinate international law enforcement'] },
  { id: 'pb-015', name: 'Election Infrastructure Protection', category: 'Government', priority: 1, applicableSectors: ['Government'], steps: ['Deploy EI-ISAC monitoring', 'Verify voter registration integrity', 'Test backup paper procedures', 'Coordinate with CISA election team', 'Deploy Albert sensors', 'Verify voting equipment chain of custody', 'Enhanced monitoring during election', 'Staff 24/7 election SOC', 'Public communications plan', 'Post-election audit'] },
  { id: 'pb-016', name: 'Medical Device Compromise', category: 'Healthcare', priority: 1, applicableSectors: ['Healthcare'], steps: ['Assess patient safety immediately', 'Isolate compromised devices', 'Verify device functionality for safety', 'Contact manufacturer', 'Network segmentation for devices', 'Deploy compensating controls', 'Coordinate with FDA if needed', 'Restore firmware from verified images', 'Monitor for re-compromise', 'Update procurement security requirements'] },
  { id: 'pb-017', name: 'Satellite Communication Disruption', category: 'Communications', priority: 1, applicableSectors: ['Defense', 'Telecom'], steps: ['Activate alternative channels', 'Assess disruption scope', 'Determine if jamming, cyber, or physical', 'Implement PACE plan', 'Deploy terrestrial backup', 'Coordinate with satellite operator', 'Assess military comms impact', 'Deploy tactical communications', 'Investigate root cause', 'Enhanced terminal security'] },
  { id: 'pb-018', name: 'Industrial Safety System Override', category: 'ICS Safety', priority: 1, applicableSectors: ['Energy', 'Chemical', 'Manufacturing'], steps: ['IMMEDIATELY implement emergency shutdown', 'Evacuate from hazardous areas', 'Verify all safety system status', 'Isolate safety systems from networks', 'Verify logic not modified', 'Compare config against golden copies', 'Do NOT restart until verified', 'Engage process safety engineering', 'Report to CISA and regulators', 'Implement air-gapped safety architecture'] },
  { id: 'pb-019', name: 'Mass Credential Compromise', category: 'Identity', priority: 1, applicableSectors: ['All'], steps: ['Identify compromise scope', 'Force enterprise-wide password reset', 'Revoke all active sessions/tokens', 'Audit and reset MFA if compromised', 'Review privileged account access', 'Check for persistence via new accounts/OAuth', 'Enhanced authentication monitoring', 'Deploy credential dark web monitoring', 'Update authentication policies', 'Implement FIDO2/passkeys'] },
  { id: 'pb-020', name: 'AI/ML Model Poisoning', category: 'AI Security', priority: 2, applicableSectors: ['Technology', 'Defense', 'Financial'], steps: ['Identify poisoned training data or models', 'Quarantine affected models', 'Assess downstream impact', 'Revert to last known-good model', 'Audit training data pipeline', 'Implement data provenance tracking', 'Retrain with verified clean data', 'Deploy model output monitoring', 'Review AI/ML supply chain security', 'Implement model integrity verification'] },
  { id: 'pb-021', name: 'Submarine Cable Disruption', category: 'Communications', priority: 1, applicableSectors: ['Telecom', 'Government'], steps: ['Detect and confirm disruption', 'Activate traffic rerouting via redundant cables', 'Assess national/military comms impact', 'Deploy repair vessel', 'Implement satellite backup for critical comms', 'Coordinate with cable operator consortium', 'Investigate physical or cyber cause', 'Monitor for coordinated cable attacks', 'Brief national security leadership', 'Review undersea cable protection'] }
];

// ============================================================================
// INTELLIGENCE FEEDS (32 entries)
// ============================================================================
var INTEL_FEEDS = [
  { id: 'intel-001', source: 'NSA SIGINT Report', type: 'SIGINT', classification: 'TOP SECRET//SCI', timestamp: '2026-09-13T06:00:00Z', content: 'GRU communications indicate Sandworm tasked to develop new SCADA disruption capability for NATO-standard power grid equipment', confidence: 92, relatedNations: ['Russia'] },
  { id: 'intel-002', source: 'OSINT Twitter/X Monitoring', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-13T05:30:00Z', content: 'Security researcher disclosed zero-day in major enterprise VPN with proof-of-concept exploit code', confidence: 98, relatedNations: ['Global'] },
  { id: 'intel-003', source: 'CYBERCOM Threat Intel', type: 'CYBINT', classification: 'SECRET//NOFORN', timestamp: '2026-09-13T05:00:00Z', content: 'Reverse engineering reveals new Volt Typhoon implant with SCADA protocol manipulation for Modbus/DNP3', confidence: 89, relatedNations: ['China'] },
  { id: 'intel-004', source: 'CIA HUMINT Report', type: 'HUMINT', classification: 'TOP SECRET//SCI//NOFORN', timestamp: '2026-09-13T04:30:00Z', content: 'Source in PLA SSF reports activation order for cyber units to prepare Taiwan contingency operations', confidence: 73, relatedNations: ['China', 'Taiwan'] },
  { id: 'intel-005', source: 'NGA Satellite Imagery', type: 'GEOINT', classification: 'SECRET', timestamp: '2026-09-13T04:00:00Z', content: 'Satellite imagery confirms Russian vessel Yantar operating near transatlantic submarine cable', confidence: 95, relatedNations: ['Russia'] },
  { id: 'intel-006', source: 'CISA Alert Feed', type: 'CYBINT', classification: 'UNCLASSIFIED//FOUO', timestamp: '2026-09-13T03:30:00Z', content: 'Emergency advisory: Active exploitation of critical firewall vulnerability by multiple nation-states', confidence: 96, relatedNations: ['China', 'Russia', 'Iran'] },
  { id: 'intel-007', source: 'FBI Cyber Division', type: 'CYBINT', classification: 'SECRET//NOFORN', timestamp: '2026-09-13T03:00:00Z', content: 'FBI reveals North Korean IT workers embedded in 14 US tech companies generating RGB revenue', confidence: 87, relatedNations: ['North Korea'] },
  { id: 'intel-008', source: 'GCHQ Partner Report', type: 'SIGINT', classification: 'TOP SECRET//REL FVEY', timestamp: '2026-09-13T02:30:00Z', content: 'GCHQ confirms APT29 developing cloud exploitation toolkit targeting Azure AD federation', confidence: 85, relatedNations: ['Russia'] },
  { id: 'intel-009', source: 'Mandiant Threat Report', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-13T02:00:00Z', content: 'Report documents new Chinese APT targeting semiconductor supply chain with firmware implants', confidence: 88, relatedNations: ['China'] },
  { id: 'intel-010', source: 'Dark Web Collection', type: 'CYBINT', classification: 'SECRET', timestamp: '2026-09-13T01:30:00Z', content: 'Lazarus-affiliated persona offering cross-chain bridge zero-day for $2.5M in Monero', confidence: 79, relatedNations: ['North Korea'] },
  { id: 'intel-011', source: 'DIA Military Intel', type: 'HUMINT', classification: 'TOP SECRET//SCI', timestamp: '2026-09-13T01:00:00Z', content: 'Defense attache reports increased Russian military cyber unit staffing at GRU facilities', confidence: 76, relatedNations: ['Russia'] },
  { id: 'intel-012', source: 'NSA TAO Report', type: 'SIGINT', classification: 'TOP SECRET//SCI//NOFORN', timestamp: '2026-09-13T00:30:00Z', content: 'TAO hunt-forward identified Chinese implants in allied telecom during bilateral operation', confidence: 94, relatedNations: ['China'] },
  { id: 'intel-013', source: 'European CERT Network', type: 'CYBINT', classification: 'RESTRICTED//REL NATO', timestamp: '2026-09-13T00:00:00Z', content: 'Three NATO CERTs reporting simultaneous APT28 spear-phishing against foreign ministry officials', confidence: 91, relatedNations: ['Russia'] },
  { id: 'intel-014', source: 'Recorded Future OSINT', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T23:30:00Z', content: 'Open source identifies 156 new Gamaredon domains registered in 24-hour burst', confidence: 93, relatedNations: ['Russia'] },
  { id: 'intel-015', source: 'ODNI Threat Assessment', type: 'CYBINT', classification: 'SECRET//NOFORN', timestamp: '2026-09-12T23:00:00Z', content: 'Annual assessment elevates China to most significant persistent cyber threat to US national security', confidence: 90, relatedNations: ['China'] },
  { id: 'intel-016', source: 'Five Eyes Cyber Center', type: 'SIGINT', classification: 'TOP SECRET//REL FVEY', timestamp: '2026-09-12T22:30:00Z', content: 'Joint analysis confirms Salt Typhoon persistent access in telecom providers across all Five Eyes nations', confidence: 88, relatedNations: ['China'] },
  { id: 'intel-017', source: 'Financial ISAC Alert', type: 'CYBINT', classification: 'UNCLASSIFIED//FOUO', timestamp: '2026-09-12T22:00:00Z', content: 'FS-ISAC members reporting coordinated credential stuffing from Lazarus infrastructure against online banking', confidence: 82, relatedNations: ['North Korea'] },
  { id: 'intel-018', source: 'Mossad Liaison Report', type: 'HUMINT', classification: 'TOP SECRET//REL ISR', timestamp: '2026-09-12T21:30:00Z', content: 'Israeli intel reports IRGC Cyber Command receiving expanded budget for offensive operations against Gulf states', confidence: 80, relatedNations: ['Iran'] },
  { id: 'intel-019', source: 'CrowdStrike Intelligence', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T21:00:00Z', content: 'Analysis of LockBit 4.0 variant with healthcare-specific targeting and anti-forensic capabilities', confidence: 91, relatedNations: ['Russia'] },
  { id: 'intel-020', source: 'USCYBERCOM J2', type: 'CYBINT', classification: 'SECRET//NOFORN', timestamp: '2026-09-12T20:30:00Z', content: 'CYBERCOM intel indicates Iranian APTs conducting pre-operational recon of US water treatment', confidence: 77, relatedNations: ['Iran'] },
  { id: 'intel-021', source: 'Australian Signals Directorate', type: 'SIGINT', classification: 'TOP SECRET//REL FVEY', timestamp: '2026-09-12T20:00:00Z', content: 'ASD intercepts confirm Chinese military AI trained on stolen Western defense research data', confidence: 74, relatedNations: ['China'] },
  { id: 'intel-022', source: 'Shodan/Censys OSINT', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T19:30:00Z', content: 'Internet scanning reveals 47,000 unpatched devices exposed to critical vulnerability under nation-state exploitation', confidence: 96, relatedNations: ['Global'] },
  { id: 'intel-023', source: 'Treasury FinCEN', type: 'CYBINT', classification: 'SECRET', timestamp: '2026-09-12T19:00:00Z', content: 'Financial intel links $340M in crypto transactions to North Korean state-sponsored theft in 2026', confidence: 86, relatedNations: ['North Korea'] },
  { id: 'intel-024', source: 'NATO CCDCOE', type: 'CYBINT', classification: 'NATO SECRET', timestamp: '2026-09-12T18:30:00Z', content: 'NATO assessment identifies coordinated Russian cyber recon of Baltic state critical infrastructure', confidence: 88, relatedNations: ['Russia'] },
  { id: 'intel-025', source: 'MI6 Liaison', type: 'HUMINT', classification: 'TOP SECRET//REL GBR', timestamp: '2026-09-12T18:00:00Z', content: 'MI6 source reports GRU providing zero-days to ransomware groups for plausible deniability', confidence: 71, relatedNations: ['Russia'] },
  { id: 'intel-026', source: 'SANS ISC', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T17:30:00Z', content: 'SANS detecting massive scanning wave targeting OT protocols on internet-exposed industrial systems', confidence: 94, relatedNations: ['Unknown'] },
  { id: 'intel-027', source: 'BND German Intel', type: 'SIGINT', classification: 'SECRET//REL DEU', timestamp: '2026-09-12T17:00:00Z', content: 'BND intercepted Chinese MSS discussing acquisition of European semiconductor trade secrets', confidence: 78, relatedNations: ['China'] },
  { id: 'intel-028', source: 'Kaspersky GReAT', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T16:30:00Z', content: 'Sophisticated firmware implant discovered in network equipment targeting government installations', confidence: 85, relatedNations: ['Unknown'] },
  { id: 'intel-029', source: 'DGSE French Intel', type: 'HUMINT', classification: 'SECRET//REL FRA', timestamp: '2026-09-12T16:00:00Z', content: 'DGSE reporting Iranian intel establishing new cyber ops base targeting European infrastructure', confidence: 72, relatedNations: ['Iran'] },
  { id: 'intel-030', source: 'VirusTotal Analysis', type: 'CYBINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-12T15:30:00Z', content: 'New malware showing code overlap with both APT29 and APT28 tooling - unusual SVR/GRU sharing', confidence: 80, relatedNations: ['Russia'] },
  { id: 'intel-031', source: 'KISA South Korean CERT', type: 'CYBINT', classification: 'RESTRICTED', timestamp: '2026-09-12T15:00:00Z', content: 'KISA reporting surge in Kimsuky phishing targeting South Korean defense researchers and nuclear scientists', confidence: 90, relatedNations: ['North Korea'] },
  { id: 'intel-032', source: 'NCSC UK Advisory', type: 'OSINT', classification: 'OFFICIAL-SENSITIVE', timestamp: '2026-09-12T14:30:00Z', content: 'NCSC advisory on Russian state actors using compromised SOHO routers for anonymized attacks on UK orgs', confidence: 92, relatedNations: ['Russia'] }
];

// ============================================================================
// CRITICAL INFRASTRUCTURE SECTORS (8 sectors)
// ============================================================================
var CRITICAL_INFRASTRUCTURE_SECTORS = [
  { id: 'ci-power', name: 'Power Grid / Energy', threatLevel: 4, activeDefenses: ['NERC CIP compliance monitoring', 'ICS-CERT sensor deployment', 'Real-time SCADA anomaly detection', 'Air-gapped control segments', 'Automatic load shedding'], knownVulns: 847, patchCompliance: 72, lastAssessment: '2026-08-15', dependencies: ['Water (cooling)', 'Telecom (SCADA comms)', 'Transport (fuel delivery)', 'Financial (trading)'] },
  { id: 'ci-water', name: 'Water & Wastewater', threatLevel: 4, activeDefenses: ['EPA Water Sector guidance', 'Basic SCADA monitoring', 'Manual override capabilities', 'Chemical process safety interlocks'], knownVulns: 1234, patchCompliance: 48, lastAssessment: '2026-07-20', dependencies: ['Power (pumping)', 'Chemical (treatment)', 'Telecom (monitoring)', 'Transport (delivery)'] },
  { id: 'ci-telecom', name: 'Telecommunications', threatLevel: 5, activeDefenses: ['CALEA system hardening', 'BGP route validation (partial)', '5G security monitoring', 'Core network segmentation', 'DDoS mitigation platforms'], knownVulns: 623, patchCompliance: 78, lastAssessment: '2026-09-01', dependencies: ['Power (base stations)', 'Transport (fiber routes)', 'Financial (billing)'] },
  { id: 'ci-financial', name: 'Financial Services', threatLevel: 3, activeDefenses: ['SWIFT CSP compliance', 'Real-time fraud detection', 'Multi-layered auth', 'SOC 24/7', 'FS-ISAC threat sharing', 'Red team exercises'], knownVulns: 312, patchCompliance: 91, lastAssessment: '2026-09-05', dependencies: ['Power (data centers)', 'Telecom (connectivity)', 'Government (regulatory)'] },
  { id: 'ci-transport', name: 'Transportation', threatLevel: 3, activeDefenses: ['ATC system monitoring', 'Maritime AIS integrity', 'Rail SCADA monitoring', 'Traffic management hardening', 'GPS spoofing detection'], knownVulns: 567, patchCompliance: 65, lastAssessment: '2026-08-10', dependencies: ['Power (signals)', 'Telecom (comms)', 'Financial (payment)', 'Energy (fuel)'] },
  { id: 'ci-health', name: 'Healthcare', threatLevel: 4, activeDefenses: ['HIPAA security controls', 'Medical device segmentation', 'EHR monitoring', 'Ransomware-specific defenses', 'H-ISAC threat sharing'], knownVulns: 1456, patchCompliance: 52, lastAssessment: '2026-07-30', dependencies: ['Power (life support)', 'Water (sanitation)', 'Telecom (telemedicine)', 'Transport (ambulance)', 'Chemical (pharma)'] },
  { id: 'ci-govt', name: 'Government Services', threatLevel: 3, activeDefenses: ['EINSTEIN/CDM program', 'Zero trust deployment', 'PIV/CAC authentication', 'Continuous diagnostics', 'SOC across .gov', 'Bug bounty programs'], knownVulns: 423, patchCompliance: 82, lastAssessment: '2026-09-10', dependencies: ['Power (data centers)', 'Telecom (networks)', 'Financial (payments)', 'Defense (classified)'] },
  { id: 'ci-defense', name: 'Defense Industrial Base', threatLevel: 4, activeDefenses: ['CMMC certification', 'DISA STIG compliance', 'NSA CSA guidance', 'Classified network monitoring', 'Insider threat programs', 'Counter-intel operations'], knownVulns: 289, patchCompliance: 87, lastAssessment: '2026-09-08', dependencies: ['Power (installations)', 'Telecom (C2)', 'Transport (logistics)', 'Financial (contracting)', 'Government (authority)'] }
];

// ============================================================================
// STATE MANAGEMENT (localStorage)
// ============================================================================
var SE_STORAGE_KEY = 'dn_sentinel_eye_v1';

function _seLoadState() {
  try {
    var raw = localStorage.getItem(SE_STORAGE_KEY);
    if (raw) { return JSON.parse(raw); }
  } catch (e) { /* ignore */ }
  return {
    activeTab: 'situation',
    threatLevel: 2,
    expandedPanels: {},
    filters: {},
    wargameState: null,
    counterOpState: null,
    decisionLog: [],
    lastVisit: null
  };
}

function _seSaveState(state) {
  try {
    state.lastVisit = new Date().toISOString();
    localStorage.setItem(SE_STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

// ============================================================================
// SENTINEL EYE — PART 4: SHELL, CSS, CANVAS, EVENT HANDLING
// Main UI shell, styles, world map canvas, ticker, and event system
// ============================================================================

// ---------------------------------------------------------------------------
// buildStyles() — returns complete <style> tag with all CSS
// ---------------------------------------------------------------------------
function buildStyles() {
  var s = '<style>';

  // === KEYFRAMES ===
  s += '@keyframes se-pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}';
  s += '@keyframes se-scan{0%{background-position:0 0}100%{background-position:0 100%}}';
  s += '@keyframes se-ticker-scroll{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}';
  s += '@keyframes se-blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}';
  s += '@keyframes se-glow{0%{box-shadow:0 0 5px rgba(0,170,255,0.3)}50%{box-shadow:0 0 20px rgba(0,170,255,0.7)}100%{box-shadow:0 0 5px rgba(0,170,255,0.3)}}';
  s += '@keyframes se-pulse-red{0%{box-shadow:0 0 5px rgba(255,34,68,0.3)}50%{box-shadow:0 0 25px rgba(255,34,68,0.8)}100%{box-shadow:0 0 5px rgba(255,34,68,0.3)}}';
  s += '@keyframes se-slide-in{0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)}}';
  s += '@keyframes se-progress-fill{0%{width:0}100%{width:100%}}';
  s += '@keyframes se-radar-sweep{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}';
  s += '@keyframes se-threat-flash{0%{background:rgba(255,34,68,0.1)}50%{background:rgba(255,34,68,0.3)}100%{background:rgba(255,34,68,0.1)}}';

  // === BASE / WRAPPER ===
  s += '.se-wrapper{background:#080b12;color:#c8d8e8;font-family:"Courier New",Courier,monospace;';
  s += 'min-height:100vh;position:relative;overflow-x:hidden}';

  // Scanline overlay
  s += '.se-wrapper::after{content:"";position:fixed;top:0;left:0;width:100%;height:100%;';
  s += 'background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);';
  s += 'pointer-events:none;z-index:9999}';

  // === CLASSIFICATION BANNERS ===
  s += '.se-classif-banner{background:#cc0000;color:#fff;text-align:center;padding:4px 12px;';
  s += 'font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;';
  s += 'font-family:"Courier New",Courier,monospace;user-select:none}';

  // === HEADER ===
  s += '.se-header{background:linear-gradient(180deg,#0c1220 0%,#080b12 100%);';
  s += 'border-bottom:1px solid #1a3a5c;padding:16px 24px;display:flex;align-items:center;';
  s += 'justify-content:space-between;flex-wrap:wrap;gap:12px}';
  s += '.se-header-left{display:flex;align-items:center;gap:16px}';
  s += '.se-header-icon{width:48px;height:48px;border-radius:50%;';
  s += 'background:radial-gradient(circle,#00aaff 0%,#004488 70%,#001a33 100%);';
  s += 'display:flex;align-items:center;justify-content:center;font-size:22px;';
  s += 'box-shadow:0 0 20px rgba(0,170,255,0.4);animation:se-glow 3s ease-in-out infinite}';
  s += '.se-header-title{font-size:26px;font-weight:700;color:#00aaff;letter-spacing:4px;text-transform:uppercase}';
  s += '.se-header-subtitle{font-size:11px;color:#5a7a9a;letter-spacing:2px;text-transform:uppercase;margin-top:2px}';

  // === GLOBAL STATUS BAR ===
  s += '.se-status-bar{background:#0a0e1a;border-bottom:1px solid #1a3a5c;';
  s += 'padding:8px 24px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;';
  s += 'font-size:12px;letter-spacing:1px;text-transform:uppercase}';
  s += '.se-status-item{display:flex;align-items:center;gap:8px}';
  s += '.se-status-label{color:#5a7a9a}';
  s += '.se-status-value{color:#00aaff;font-weight:700}';
  s += '.se-status-value.se-critical{color:#ff2244}';
  s += '.se-status-value.se-warning{color:#ffaa00}';
  s += '.se-status-value.se-safe{color:#00ff88}';

  // DEFCON indicator
  s += '.se-defcon{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;';
  s += 'border-radius:4px;font-weight:700;font-size:13px;letter-spacing:2px}';
  s += '.se-defcon-1{background:rgba(255,34,68,0.25);color:#ff2244;border:1px solid #ff2244;animation:se-pulse 1s infinite}';
  s += '.se-defcon-2{background:rgba(255,100,50,0.2);color:#ff6432;border:1px solid #ff6432;animation:se-pulse 2s infinite}';
  s += '.se-defcon-3{background:rgba(255,170,0,0.2);color:#ffaa00;border:1px solid #ffaa00}';
  s += '.se-defcon-4{background:rgba(0,170,255,0.15);color:#00aaff;border:1px solid #00aaff}';
  s += '.se-defcon-5{background:rgba(0,255,136,0.15);color:#00ff88;border:1px solid #00ff88}';

  // === TAB NAVIGATION ===
  s += '.se-tab-bar{background:#0a0e1a;border-bottom:2px solid #1a3a5c;';
  s += 'display:flex;overflow-x:auto;scrollbar-width:thin;scrollbar-color:#1a3a5c #080b12;';
  s += 'padding:0 8px;gap:2px}';
  s += '.se-tab-bar::-webkit-scrollbar{height:4px}';
  s += '.se-tab-bar::-webkit-scrollbar-track{background:#080b12}';
  s += '.se-tab-bar::-webkit-scrollbar-thumb{background:#1a3a5c;border-radius:2px}';
  s += '.se-tab{padding:10px 16px;cursor:pointer;color:#5a7a9a;font-size:11px;';
  s += 'letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;';
  s += 'border-bottom:2px solid transparent;transition:all 0.2s;user-select:none;';
  s += 'font-family:"Courier New",Courier,monospace;font-weight:600;';
  s += 'position:relative;background:transparent}';
  s += '.se-tab:hover{color:#00aaff;background:rgba(0,170,255,0.05)}';
  s += '.se-tab.se-active{color:#00aaff;border-bottom-color:#00aaff;';
  s += 'background:rgba(0,170,255,0.08)}';
  s += '.se-tab-alert{position:absolute;top:6px;right:6px;width:6px;height:6px;';
  s += 'border-radius:50%;background:#ff2244;animation:se-pulse 1.5s infinite}';

  // === CONTENT AREA ===
  s += '.se-content{padding:20px 24px;min-height:600px}';

  // === CARDS ===
  s += '.se-card{background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;';
  s += 'padding:16px;margin-bottom:16px;';
  s += 'box-shadow:0 4px 20px rgba(0,170,255,0.08),inset 0 1px 0 rgba(0,170,255,0.1)}';
  s += '.se-card:hover{border-color:#00aaff;box-shadow:0 4px 20px rgba(0,170,255,0.15),inset 0 1px 0 rgba(0,170,255,0.15)}';
  s += '.se-card-header{display:flex;align-items:center;justify-content:space-between;';
  s += 'margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid #1a3a5c}';
  s += '.se-card-title{font-size:13px;font-weight:700;color:#00aaff;letter-spacing:2px;text-transform:uppercase}';
  s += '.se-card-body{font-size:12px;line-height:1.6;color:#c8d8e8}';

  // 3D elevated cards
  s += '.se-card-3d{background:linear-gradient(145deg,#0c1424 0%,#0a0e1a 100%);';
  s += 'border:1px solid #1a3a5c;border-radius:8px;padding:20px;margin-bottom:16px;';
  s += 'box-shadow:0 8px 32px rgba(0,0,0,0.4),0 4px 20px rgba(0,170,255,0.1),';
  s += 'inset 0 1px 0 rgba(255,255,255,0.05);transition:transform 0.2s,box-shadow 0.2s}';
  s += '.se-card-3d:hover{transform:translateY(-2px);';
  s += 'box-shadow:0 12px 40px rgba(0,0,0,0.5),0 6px 25px rgba(0,170,255,0.15),';
  s += 'inset 0 1px 0 rgba(255,255,255,0.08)}';

  // Hostile card variant
  s += '.se-card-hostile{border-color:#441122;';
  s += 'box-shadow:0 4px 20px rgba(255,34,68,0.1),inset 0 1px 0 rgba(255,34,68,0.1)}';
  s += '.se-card-hostile:hover{border-color:#ff2244;';
  s += 'box-shadow:0 4px 20px rgba(255,34,68,0.2),inset 0 1px 0 rgba(255,34,68,0.15)}';

  // === GRID LAYOUTS ===
  s += '.se-grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}';
  s += '.se-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}';
  s += '.se-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}';
  s += '.se-grid-auto{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}';

  // === BADGES ===
  s += '.se-badge{display:inline-block;padding:2px 8px;border-radius:3px;';
  s += 'font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;';
  s += 'font-family:"Courier New",Courier,monospace}';
  s += '.se-badge-critical{background:rgba(255,34,68,0.2);color:#ff2244;border:1px solid rgba(255,34,68,0.4)}';
  s += '.se-badge-high{background:rgba(255,100,50,0.2);color:#ff6432;border:1px solid rgba(255,100,50,0.4)}';
  s += '.se-badge-medium{background:rgba(255,170,0,0.2);color:#ffaa00;border:1px solid rgba(255,170,0,0.4)}';
  s += '.se-badge-low{background:rgba(0,170,255,0.15);color:#00aaff;border:1px solid rgba(0,170,255,0.3)}';
  s += '.se-badge-info{background:rgba(100,130,180,0.15);color:#8aa8c8;border:1px solid rgba(100,130,180,0.3)}';
  s += '.se-badge-safe{background:rgba(0,255,136,0.15);color:#00ff88;border:1px solid rgba(0,255,136,0.3)}';
  s += '.se-badge-hostile{background:rgba(255,34,68,0.2);color:#ff2244;border:1px solid rgba(255,34,68,0.4)}';
  s += '.se-badge-allied{background:rgba(0,170,255,0.15);color:#00aaff;border:1px solid rgba(0,170,255,0.3)}';
  s += '.se-badge-neutral{background:rgba(100,130,180,0.1);color:#6a8aaa;border:1px solid rgba(100,130,180,0.2)}';
  s += '.se-badge-tier1{background:rgba(255,34,68,0.15);color:#ff4466;border:1px solid rgba(255,34,68,0.3)}';
  s += '.se-badge-tier2{background:rgba(255,170,0,0.15);color:#ffaa00;border:1px solid rgba(255,170,0,0.3)}';
  s += '.se-badge-tier3{background:rgba(0,170,255,0.12);color:#00aaff;border:1px solid rgba(0,170,255,0.25)}';
  s += '.se-badge-classified{background:rgba(204,0,0,0.25);color:#ff4444;border:1px solid rgba(204,0,0,0.5);animation:se-pulse 2s infinite}';

  // === PROGRESS BARS ===
  s += '.se-progress-wrap{background:#0c1424;border:1px solid #1a3a5c;border-radius:3px;height:14px;overflow:hidden;position:relative}';
  s += '.se-progress-bar{height:100%;border-radius:2px;transition:width 0.6s ease-out;position:relative}';
  s += '.se-progress-bar::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;';
  s += 'background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.1) 50%,transparent 100%)}';
  s += '.se-progress-critical{background:linear-gradient(90deg,#cc1133,#ff2244)}';
  s += '.se-progress-high{background:linear-gradient(90deg,#cc5020,#ff6432)}';
  s += '.se-progress-warning{background:linear-gradient(90deg,#cc8800,#ffaa00)}';
  s += '.se-progress-info{background:linear-gradient(90deg,#0077cc,#00aaff)}';
  s += '.se-progress-safe{background:linear-gradient(90deg,#00aa66,#00ff88)}';
  s += '.se-progress-label{position:absolute;right:6px;top:50%;transform:translateY(-50%);';
  s += 'font-size:9px;color:#fff;font-weight:700;text-shadow:0 1px 2px rgba(0,0,0,0.5)}';

  // === TABLES ===
  s += '.se-table-wrap{overflow-x:auto;border:1px solid #1a3a5c;border-radius:6px}';
  s += '.se-table{width:100%;border-collapse:collapse;font-size:11px}';
  s += '.se-table th{background:#0c1424;color:#00aaff;padding:8px 12px;text-align:left;';
  s += 'font-weight:700;letter-spacing:1px;text-transform:uppercase;';
  s += 'border-bottom:2px solid #1a3a5c;white-space:nowrap;font-size:10px}';
  s += '.se-table td{padding:8px 12px;border-bottom:1px solid #111a2a;color:#c8d8e8;';
  s += 'vertical-align:top}';
  s += '.se-table tr:hover td{background:rgba(0,170,255,0.04)}';
  s += '.se-table tr:nth-child(even) td{background:rgba(0,170,255,0.02)}';

  // === BUTTONS ===
  s += '.se-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;';
  s += 'border-radius:4px;font-size:11px;font-weight:700;letter-spacing:1px;';
  s += 'text-transform:uppercase;cursor:pointer;transition:all 0.2s;';
  s += 'font-family:"Courier New",Courier,monospace;border:1px solid;user-select:none}';
  s += '.se-btn-primary{background:rgba(0,170,255,0.15);color:#00aaff;border-color:#00aaff}';
  s += '.se-btn-primary:hover{background:rgba(0,170,255,0.3);box-shadow:0 0 12px rgba(0,170,255,0.3)}';
  s += '.se-btn-danger{background:rgba(255,34,68,0.15);color:#ff2244;border-color:#ff2244}';
  s += '.se-btn-danger:hover{background:rgba(255,34,68,0.3);box-shadow:0 0 12px rgba(255,34,68,0.3)}';
  s += '.se-btn-warning{background:rgba(255,170,0,0.15);color:#ffaa00;border-color:#ffaa00}';
  s += '.se-btn-warning:hover{background:rgba(255,170,0,0.3);box-shadow:0 0 12px rgba(255,170,0,0.3)}';
  s += '.se-btn-neutral{background:rgba(100,130,180,0.1);color:#8aa8c8;border-color:#3a5a7a}';
  s += '.se-btn-neutral:hover{background:rgba(100,130,180,0.2);border-color:#5a7a9a}';
  s += '.se-btn-success{background:rgba(0,255,136,0.15);color:#00ff88;border-color:#00ff88}';
  s += '.se-btn-success:hover{background:rgba(0,255,136,0.3);box-shadow:0 0 12px rgba(0,255,136,0.3)}';
  s += '.se-btn-sm{padding:4px 10px;font-size:10px}';
  s += '.se-btn-lg{padding:8px 20px;font-size:12px}';

  // === FORMS ===
  s += '.se-input,.se-select,.se-textarea{background:#0c1424;color:#c8d8e8;';
  s += 'border:1px solid #1a3a5c;border-radius:4px;padding:6px 10px;font-size:12px;';
  s += 'font-family:"Courier New",Courier,monospace;outline:none;transition:border-color 0.2s}';
  s += '.se-input:focus,.se-select:focus,.se-textarea:focus{border-color:#00aaff;';
  s += 'box-shadow:0 0 8px rgba(0,170,255,0.2)}';
  s += '.se-textarea{resize:vertical;min-height:60px}';
  s += '.se-select{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%2300aaff\' fill=\'none\' stroke-width=\'1.5\'/%3E%3C/svg%3E");';
  s += 'background-repeat:no-repeat;background-position:right 8px center;background-size:10px;padding-right:28px}';
  s += '.se-form-group{margin-bottom:12px}';
  s += '.se-form-label{display:block;font-size:10px;color:#5a7a9a;letter-spacing:1px;';
  s += 'text-transform:uppercase;margin-bottom:4px;font-weight:700}';
  s += '.se-form-row{display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap}';

  // === EXPANDABLE PANELS ===
  s += '.se-expand{border:1px solid #1a3a5c;border-radius:6px;margin-bottom:8px;overflow:hidden}';
  s += '.se-expand-head{background:#0c1424;padding:10px 14px;cursor:pointer;';
  s += 'display:flex;align-items:center;justify-content:space-between;';
  s += 'font-size:12px;font-weight:700;color:#00aaff;letter-spacing:1px;';
  s += 'text-transform:uppercase;transition:background 0.2s;user-select:none}';
  s += '.se-expand-head:hover{background:#101828}';
  s += '.se-expand-arrow{transition:transform 0.2s;color:#5a7a9a;font-size:10px}';
  s += '.se-expand.se-open .se-expand-arrow{transform:rotate(90deg)}';
  s += '.se-expand-body{display:none;padding:12px 14px;border-top:1px solid #1a3a5c;';
  s += 'background:#0a0e1a;animation:se-slide-in 0.2s ease-out}';
  s += '.se-expand.se-open .se-expand-body{display:block}';

  // === TICKER ===
  s += '.se-ticker-wrap{background:#0c0810;border-top:1px solid #1a3a5c;';
  s += 'border-bottom:1px solid #1a3a5c;overflow:hidden;height:28px;position:relative}';
  s += '.se-ticker-track{display:flex;white-space:nowrap;animation:se-ticker-scroll 60s linear infinite;';
  s += 'position:absolute;top:0;height:100%;align-items:center}';
  s += '.se-ticker-item{display:inline-flex;align-items:center;gap:6px;padding:0 24px;';
  s += 'font-size:11px;letter-spacing:0.5px}';
  s += '.se-ticker-dot{width:6px;height:6px;border-radius:50%;display:inline-block;flex-shrink:0}';
  s += '.se-ticker-sep{color:#1a3a5c;padding:0 8px}';

  // === THREAT LEVEL INDICATORS ===
  s += '.se-threat-dot{width:10px;height:10px;border-radius:50%;display:inline-block;flex-shrink:0}';
  s += '.se-threat-critical{background:#ff2244;box-shadow:0 0 8px rgba(255,34,68,0.6);animation:se-pulse 1s infinite}';
  s += '.se-threat-high{background:#ff6432;box-shadow:0 0 6px rgba(255,100,50,0.5)}';
  s += '.se-threat-elevated{background:#ffaa00;box-shadow:0 0 6px rgba(255,170,0,0.5)}';
  s += '.se-threat-guarded{background:#00aaff;box-shadow:0 0 4px rgba(0,170,255,0.4)}';
  s += '.se-threat-low{background:#00ff88;box-shadow:0 0 4px rgba(0,255,136,0.4)}';

  // === HEATMAP ===
  s += '.se-heatmap{display:grid;gap:2px}';
  s += '.se-heatmap-cell{width:100%;aspect-ratio:1;border-radius:2px;position:relative;cursor:pointer;transition:transform 0.1s}';
  s += '.se-heatmap-cell:hover{transform:scale(1.3);z-index:2}';
  s += '.se-heat-0{background:rgba(0,170,255,0.05)}';
  s += '.se-heat-1{background:rgba(0,170,255,0.15)}';
  s += '.se-heat-2{background:rgba(0,170,255,0.3)}';
  s += '.se-heat-3{background:rgba(0,255,136,0.3)}';
  s += '.se-heat-4{background:rgba(255,170,0,0.3)}';
  s += '.se-heat-5{background:rgba(255,170,0,0.5)}';
  s += '.se-heat-6{background:rgba(255,100,50,0.5)}';
  s += '.se-heat-7{background:rgba(255,34,68,0.5)}';
  s += '.se-heat-8{background:rgba(255,34,68,0.7)}';
  s += '.se-heat-9{background:rgba(255,34,68,0.9)}';

  // === TOOLTIPS ===
  s += '.se-tooltip-wrap{position:relative;display:inline-block}';
  s += '.se-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);';
  s += 'background:#0c1424;border:1px solid #1a3a5c;border-radius:4px;padding:6px 10px;';
  s += 'font-size:10px;color:#c8d8e8;white-space:nowrap;z-index:100;pointer-events:none;';
  s += 'box-shadow:0 4px 12px rgba(0,0,0,0.5);opacity:0;transition:opacity 0.15s}';
  s += '.se-tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);';
  s += 'border:5px solid transparent;border-top-color:#1a3a5c}';
  s += '.se-tooltip-wrap:hover .se-tooltip{opacity:1}';

  // === CANVAS ===
  s += '.se-canvas-wrap{border:1px solid #1a3a5c;border-radius:6px;overflow:hidden;';
  s += 'background:#080b12;position:relative}';
  s += '.se-canvas{display:block;width:100%;height:auto}';

  // === TIMELINE ===
  s += '.se-timeline{position:relative;padding-left:24px}';
  s += '.se-timeline::before{content:"";position:absolute;left:8px;top:0;bottom:0;';
  s += 'width:2px;background:#1a3a5c}';
  s += '.se-timeline-item{position:relative;margin-bottom:16px;padding-left:20px}';
  s += '.se-timeline-dot{position:absolute;left:-20px;top:4px;width:10px;height:10px;';
  s += 'border-radius:50%;border:2px solid #1a3a5c;background:#080b12}';
  s += '.se-timeline-dot.se-active{background:#00aaff;border-color:#00aaff;';
  s += 'box-shadow:0 0 8px rgba(0,170,255,0.4)}';
  s += '.se-timeline-time{font-size:10px;color:#5a7a9a;letter-spacing:1px}';
  s += '.se-timeline-text{font-size:12px;color:#c8d8e8;margin-top:2px}';

  // === SECTION HEADERS ===
  s += '.se-section-head{font-size:14px;font-weight:700;color:#00aaff;letter-spacing:2px;';
  s += 'text-transform:uppercase;margin:20px 0 12px 0;padding-bottom:8px;';
  s += 'border-bottom:1px solid #1a3a5c;display:flex;align-items:center;gap:10px}';
  s += '.se-section-icon{font-size:16px}';

  // === STAT BOXES ===
  s += '.se-stat-box{background:#0c1424;border:1px solid #1a3a5c;border-radius:6px;';
  s += 'padding:14px;text-align:center}';
  s += '.se-stat-value{font-size:28px;font-weight:700;color:#00aaff;letter-spacing:2px}';
  s += '.se-stat-value.se-critical{color:#ff2244}';
  s += '.se-stat-value.se-warning{color:#ffaa00}';
  s += '.se-stat-value.se-safe{color:#00ff88}';
  s += '.se-stat-label{font-size:9px;color:#5a7a9a;letter-spacing:1.5px;text-transform:uppercase;margin-top:6px}';

  // === TAGS / CHIPS ===
  s += '.se-tag{display:inline-block;padding:2px 6px;border-radius:3px;font-size:9px;';
  s += 'color:#8aa8c8;background:rgba(100,130,180,0.1);border:1px solid rgba(100,130,180,0.15);';
  s += 'margin:2px;font-family:"Courier New",Courier,monospace;letter-spacing:0.5px}';
  s += '.se-tag-red{color:#ff4466;background:rgba(255,34,68,0.1);border-color:rgba(255,34,68,0.2)}';
  s += '.se-tag-blue{color:#44aaff;background:rgba(0,170,255,0.1);border-color:rgba(0,170,255,0.2)}';
  s += '.se-tag-green{color:#44ff88;background:rgba(0,255,136,0.1);border-color:rgba(0,255,136,0.2)}';
  s += '.se-tag-yellow{color:#ffcc44;background:rgba(255,204,68,0.1);border-color:rgba(255,204,68,0.2)}';

  // === MITRE ATT&CK MATRIX ===
  s += '.se-mitre-grid{display:grid;grid-template-columns:repeat(14,1fr);gap:2px;font-size:8px}';
  s += '.se-mitre-cell{padding:3px 2px;text-align:center;border-radius:2px;cursor:pointer;';
  s += 'transition:background 0.1s;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
  s += '.se-mitre-header{background:#0c1424;color:#00aaff;font-weight:700;padding:4px 2px;font-size:7px;letter-spacing:0.5px}';
  s += '.se-mitre-active{background:rgba(255,34,68,0.3);color:#ff6688}';
  s += '.se-mitre-known{background:rgba(255,170,0,0.2);color:#ffcc66}';
  s += '.se-mitre-empty{background:rgba(0,170,255,0.03);color:#2a4a6a}';

  // === MISC ===
  s += '.se-divider{border:none;border-top:1px solid #1a3a5c;margin:16px 0}';
  s += '.se-flex{display:flex}';
  s += '.se-flex-wrap{flex-wrap:wrap}';
  s += '.se-gap-8{gap:8px}';
  s += '.se-gap-12{gap:12px}';
  s += '.se-gap-16{gap:16px}';
  s += '.se-align-center{align-items:center}';
  s += '.se-justify-between{justify-content:space-between}';
  s += '.se-text-right{text-align:right}';
  s += '.se-text-center{text-align:center}';
  s += '.se-mb-8{margin-bottom:8px}';
  s += '.se-mb-16{margin-bottom:16px}';
  s += '.se-mt-8{margin-top:8px}';
  s += '.se-mt-16{margin-top:16px}';
  s += '.se-muted{color:#5a7a9a}';
  s += '.se-highlight{color:#00aaff}';
  s += '.se-danger{color:#ff2244}';
  s += '.se-warning-text{color:#ffaa00}';
  s += '.se-success-text{color:#00ff88}';
  s += '.se-small{font-size:10px}';
  s += '.se-mono{font-family:"Courier New",Courier,monospace}';
  s += '.se-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}';
  s += '.se-scroll-y{max-height:400px;overflow-y:auto}';
  s += '.se-hidden{display:none!important}';

  // === FOOTER ===
  s += '.se-footer{background:#0a0e1a;border-top:1px solid #1a3a5c;padding:8px 24px;';
  s += 'display:flex;align-items:center;justify-content:space-between;';
  s += 'font-size:10px;color:#3a5a7a;letter-spacing:1px;text-transform:uppercase;flex-wrap:wrap;gap:8px}';

  // === FILTER BAR ===
  s += '.se-filter-bar{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;';
  s += 'padding:10px 14px;background:#0c1424;border:1px solid #1a3a5c;border-radius:6px}';
  s += '.se-filter-label{font-size:10px;color:#5a7a9a;letter-spacing:1px;text-transform:uppercase;font-weight:700}';
  s += '.se-search-box{background:#080b12;color:#c8d8e8;border:1px solid #1a3a5c;border-radius:4px;';
  s += 'padding:5px 10px;font-size:11px;font-family:"Courier New",Courier,monospace;';
  s += 'outline:none;min-width:200px}';
  s += '.se-search-box:focus{border-color:#00aaff}';

  // === SCROLLBAR ===
  s += '.se-content::-webkit-scrollbar,.se-scroll-y::-webkit-scrollbar{width:6px}';
  s += '.se-content::-webkit-scrollbar-track,.se-scroll-y::-webkit-scrollbar-track{background:#080b12}';
  s += '.se-content::-webkit-scrollbar-thumb,.se-scroll-y::-webkit-scrollbar-thumb{background:#1a3a5c;border-radius:3px}';

  // === RESPONSIVE ===
  s += '@media(max-width:1200px){.se-grid-4{grid-template-columns:repeat(2,1fr)}}';
  s += '@media(max-width:900px){.se-grid-3{grid-template-columns:repeat(2,1fr)}.se-grid-4{grid-template-columns:1fr}}';
  s += '@media(max-width:700px){.se-grid-2,.se-grid-3{grid-template-columns:1fr}';
  s += '.se-header{padding:12px 16px}.se-content{padding:12px 16px}';
  s += '.se-status-bar{padding:6px 16px}.se-header-title{font-size:18px}}';

  // === WARGAME PHASE INDICATORS ===
  s += '.se-phase-indicator{display:flex;align-items:center;gap:4px;margin-bottom:12px}';
  s += '.se-phase-dot{width:20px;height:20px;border-radius:50%;border:2px solid #1a3a5c;';
  s += 'display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#5a7a9a}';
  s += '.se-phase-dot.se-phase-active{border-color:#00aaff;color:#00aaff;background:rgba(0,170,255,0.15)}';
  s += '.se-phase-dot.se-phase-done{border-color:#00ff88;color:#00ff88;background:rgba(0,255,136,0.15)}';
  s += '.se-phase-line{flex:1;height:2px;background:#1a3a5c}';
  s += '.se-phase-line.se-phase-done{background:#00ff88}';

  // === OPERATION STATUS ===
  s += '.se-op-status{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:700;letter-spacing:1px}';
  s += '.se-op-active{color:#00ff88}';
  s += '.se-op-planning{color:#00aaff}';
  s += '.se-op-complete{color:#5a7a9a}';
  s += '.se-op-aborted{color:#ff2244}';

  // === CORRELATION LINES ===
  s += '.se-correlation{border-left:3px solid #1a3a5c;padding-left:12px;margin:8px 0}';
  s += '.se-correlation.se-high-conf{border-left-color:#ff2244}';
  s += '.se-correlation.se-med-conf{border-left-color:#ffaa00}';
  s += '.se-correlation.se-low-conf{border-left-color:#00aaff}';

  // === LIST STYLES ===
  s += '.se-list{list-style:none;padding:0;margin:0}';
  s += '.se-list-item{padding:8px 12px;border-bottom:1px solid #111a2a;';
  s += 'display:flex;align-items:center;gap:10px;font-size:12px;transition:background 0.15s;cursor:pointer}';
  s += '.se-list-item:hover{background:rgba(0,170,255,0.04)}';
  s += '.se-list-item:last-child{border-bottom:none}';

  // === NATION FLAG PLACEHOLDERS ===
  s += '.se-flag{display:inline-flex;align-items:center;justify-content:center;';
  s += 'width:28px;height:20px;border-radius:3px;font-size:13px;flex-shrink:0;';
  s += 'border:1px solid rgba(255,255,255,0.1)}';

  // === INTEL CLASSIFICATION MARKS ===
  s += '.se-class-ts{color:#ff2244;font-weight:700;font-size:10px;letter-spacing:1px}';
  s += '.se-class-s{color:#ff6632;font-weight:700;font-size:10px;letter-spacing:1px}';
  s += '.se-class-c{color:#ffaa00;font-weight:700;font-size:10px;letter-spacing:1px}';
  s += '.se-class-u{color:#00ff88;font-weight:700;font-size:10px;letter-spacing:1px}';

  // === MODAL / OVERLAY ===
  s += '.se-modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;';
  s += 'background:rgba(0,0,0,0.7);z-index:1000;display:flex;align-items:center;';
  s += 'justify-content:center;animation:se-slide-in 0.2s}';
  s += '.se-modal{background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;';
  s += 'padding:24px;max-width:800px;width:90%;max-height:80vh;overflow-y:auto;';
  s += 'box-shadow:0 20px 60px rgba(0,0,0,0.6)}';
  s += '.se-modal-close{position:absolute;top:12px;right:16px;cursor:pointer;';
  s += 'color:#5a7a9a;font-size:18px;transition:color 0.15s}';
  s += '.se-modal-close:hover{color:#ff2244}';

  // === RADAR DISPLAY ===
  s += '.se-radar{position:relative;width:200px;height:200px;border-radius:50%;';
  s += 'background:radial-gradient(circle,rgba(0,170,255,0.05) 0%,transparent 70%);';
  s += 'border:1px solid #1a3a5c}';
  s += '.se-radar-sweep{position:absolute;top:0;left:50%;width:50%;height:50%;';
  s += 'transform-origin:bottom left;background:linear-gradient(0deg,transparent,rgba(0,170,255,0.2));';
  s += 'animation:se-radar-sweep 4s linear infinite}';

  // === TWO-COLUMN LAYOUT ===
  s += '.se-cols{display:flex;gap:20px}';
  s += '.se-col-main{flex:1;min-width:0}';
  s += '.se-col-side{width:320px;flex-shrink:0}';
  s += '@media(max-width:900px){.se-cols{flex-direction:column}.se-col-side{width:100%}}';

  s += '</style>';
  return s;
}

// ---------------------------------------------------------------------------
// renderMainShell() — returns the complete outer HTML structure
// ---------------------------------------------------------------------------
function renderMainShell() {
  var h = '';

  // Top classification banner
  h += '<div class="se-classif-banner">';
  h += 'TOP SECRET // SCI // NOFORN // OPERATIONAL';
  h += '</div>';

  // Header
  h += '<div class="se-header">';
  h += '<div class="se-header-left">';
  h += '<div class="se-header-icon">' + esc('[EYE]') + '</div>';
  h += '<div>';
  h += '<div class="se-header-title">SENTINEL EYE</div>';
  h += '<div class="se-header-subtitle">Global Cyber Threat Detection &amp; Counter-Operations Platform</div>';
  h += '</div>';
  h += '</div>';
  h += '<div style="display:flex;align-items:center;gap:16px">';
  h += '<div class="se-defcon se-defcon-3" id="se-defcon-display">';
  h += '<span>CYBER DEFCON</span>';
  h += '<span id="se-defcon-level">3</span>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Global status bar
  h += '<div class="se-status-bar">';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">Active Threats:</span>';
  h += '<span class="se-status-value se-critical" id="se-active-threats">17</span>';
  h += '</div>';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">Monitored Nations:</span>';
  h += '<span class="se-status-value">12</span>';
  h += '</div>';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">APT Groups Tracked:</span>';
  h += '<span class="se-status-value">38</span>';
  h += '</div>';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">Active Predictions:</span>';
  h += '<span class="se-status-value se-warning" id="se-active-preds">25</span>';
  h += '</div>';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">Last Nation-State Incident:</span>';
  h += '<span class="se-status-value" id="se-last-incident">4h 23m ago</span>';
  h += '</div>';
  h += '<div class="se-status-item">';
  h += '<span class="se-status-label">System Time:</span>';
  h += '<span class="se-status-value" id="se-system-time">--:--:-- UTC</span>';
  h += '</div>';
  h += '</div>';

  // Alert ticker
  h += '<div class="se-ticker-wrap">';
  h += '<div class="se-ticker-track" id="se-ticker-track">';
  h += '</div>';
  h += '</div>';

  // Tab navigation
  h += '<div class="se-tab-bar" id="se-tab-bar">';

  var tabs = [
    { id: 'situation', label: 'Situational Awareness', icon: '[SA]' },
    { id: 'nations', label: 'Nation-State Monitor', icon: '[NS]' },
    { id: 'predict', label: 'Attack Prediction', icon: '[AP]' },
    { id: 'earlywarning', label: 'Early Warning', icon: '[!]' },
    { id: 'apttrack', label: 'APT Tracking', icon: '[AT]' },
    { id: 'counterops', label: 'Counter Operations', icon: '[X]' },
    { id: 'shield', label: 'Infrastructure Shield', icon: '[IS]' },
    { id: 'intelfusion', label: 'Intelligence Fusion', icon: '[IF]' },
    { id: 'warsim', label: 'Cyber War Simulator', icon: '[W]' },
    { id: 'command', label: 'Command Authority', icon: '[C]' }
  ];

  for (var t = 0; t < tabs.length; t++) {
    var cls = t === 0 ? 'se-tab se-active' : 'se-tab';
    h += '<div class="' + cls + '" data-tab="' + esc(tabs[t].id) + '">';
    h += '<span>' + tabs[t].icon + ' ' + esc(tabs[t].label) + '</span>';
    if (tabs[t].id === 'earlywarning' || tabs[t].id === 'predict') {
      h += '<span class="se-tab-alert"></span>';
    }
    h += '</div>';
  }

  h += '</div>';

  // Content area
  h += '<div class="se-content" id="se-content">';
  h += '</div>';

  // Footer
  h += '<div class="se-footer">';
  h += '<div>';
  h += '<span style="color:#5a7a9a">SENTINEL EYE v3.7.1</span>';
  h += ' &bull; ';
  h += '<span style="color:#3a5a7a">DARKNODE PLATFORM</span>';
  h += ' &bull; ';
  h += '<span style="color:#3a5a7a">OPERATIONAL — THREAT DATA ACTIVE</span>';
  h += '</div>';
  h += '<div>';
  h += '<span style="color:#5a7a9a" id="se-footer-time">System initialized</span>';
  h += ' &bull; ';
  h += '<span style="color:#00ff88">ALL SYSTEMS NOMINAL</span>';
  h += '</div>';
  h += '</div>';

  // Bottom classification banner
  h += '<div class="se-classif-banner">';
  h += 'TOP SECRET // SCI // NOFORN // OPERATIONAL';
  h += '</div>';

  return h;
}

// ---------------------------------------------------------------------------
// initWorldMap(canvasId) — draws simplified world map on canvas
// ---------------------------------------------------------------------------
function initWorldMap(canvasId) {
  var canvas = document.getElementById(canvasId);
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var W = canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 900;
  var H = canvas.height = Math.round(W * 0.48);

  // Background
  ctx.fillStyle = '#080b12';
  ctx.fillRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = 'rgba(26,58,92,0.3)';
  ctx.lineWidth = 0.5;
  var gridStep = W / 24;
  for (var gx = 0; gx < W; gx += gridStep) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
  }
  for (var gy = 0; gy < H; gy += gridStep) {
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
  }

  // Equator and prime meridian
  ctx.strokeStyle = 'rgba(0,170,255,0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, H * 0.5); ctx.lineTo(W, H * 0.5); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W * 0.5, 0); ctx.lineTo(W * 0.5, H); ctx.stroke();

  // Continent outlines as simplified polygons (normalized 0-1 coordinates)
  var continents = {
    northAmerica: [
      [0.10,0.15],[0.12,0.12],[0.18,0.10],[0.24,0.12],[0.26,0.18],[0.28,0.22],
      [0.26,0.28],[0.24,0.32],[0.22,0.36],[0.20,0.38],[0.18,0.42],[0.16,0.44],
      [0.14,0.42],[0.15,0.38],[0.16,0.36],[0.15,0.34],[0.12,0.30],[0.10,0.28],
      [0.08,0.22],[0.09,0.18]
    ],
    southAmerica: [
      [0.22,0.48],[0.24,0.46],[0.28,0.46],[0.30,0.48],[0.31,0.52],[0.32,0.56],
      [0.30,0.62],[0.28,0.68],[0.26,0.74],[0.24,0.78],[0.22,0.82],[0.20,0.78],
      [0.21,0.72],[0.22,0.66],[0.21,0.60],[0.20,0.54],[0.21,0.50]
    ],
    europe: [
      [0.44,0.14],[0.46,0.12],[0.50,0.10],[0.54,0.12],[0.56,0.16],[0.55,0.20],
      [0.52,0.24],[0.50,0.28],[0.48,0.30],[0.46,0.32],[0.44,0.30],[0.42,0.26],
      [0.41,0.22],[0.42,0.18]
    ],
    africa: [
      [0.44,0.34],[0.46,0.32],[0.50,0.32],[0.54,0.34],[0.56,0.38],[0.57,0.44],
      [0.56,0.50],[0.55,0.56],[0.53,0.62],[0.50,0.66],[0.48,0.68],[0.46,0.66],
      [0.44,0.60],[0.42,0.54],[0.41,0.48],[0.42,0.42],[0.43,0.38]
    ],
    asia: [
      [0.56,0.10],[0.60,0.08],[0.66,0.10],[0.72,0.12],[0.78,0.14],[0.82,0.16],
      [0.84,0.20],[0.86,0.24],[0.84,0.28],[0.80,0.30],[0.76,0.34],[0.72,0.38],
      [0.68,0.40],[0.64,0.38],[0.60,0.36],[0.58,0.32],[0.56,0.28],[0.55,0.24],
      [0.54,0.18],[0.55,0.14]
    ],
    middleEast: [
      [0.56,0.30],[0.58,0.28],[0.62,0.30],[0.64,0.34],[0.62,0.38],[0.60,0.40],
      [0.58,0.38],[0.56,0.36],[0.55,0.34]
    ],
    australia: [
      [0.78,0.58],[0.82,0.56],[0.86,0.58],[0.88,0.62],[0.87,0.66],[0.84,0.70],
      [0.80,0.70],[0.77,0.66],[0.76,0.62]
    ],
    seAsia: [
      [0.74,0.38],[0.78,0.36],[0.82,0.38],[0.84,0.42],[0.82,0.46],[0.78,0.48],
      [0.76,0.46],[0.74,0.42]
    ]
  };

  // Draw continents
  ctx.lineWidth = 1.5;
  var contKeys = Object.keys(continents);
  for (var ci = 0; ci < contKeys.length; ci++) {
    var pts = continents[contKeys[ci]];
    ctx.fillStyle = 'rgba(0,170,255,0.06)';
    ctx.strokeStyle = 'rgba(0,170,255,0.25)';
    ctx.beginPath();
    ctx.moveTo(pts[0][0] * W, pts[0][1] * H);
    for (var pi = 1; pi < pts.length; pi++) {
      ctx.lineTo(pts[pi][0] * W, pts[pi][1] * H);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // Nation positions on map (normalized coordinates)
  var nationPositions = [
    { name: 'US', x: 0.18, y: 0.28, color: '#00aaff', threat: 'allied' },
    { name: 'RU', x: 0.62, y: 0.16, color: '#ff2244', threat: 'hostile' },
    { name: 'CN', x: 0.76, y: 0.28, color: '#ff2244', threat: 'hostile' },
    { name: 'NK', x: 0.80, y: 0.26, color: '#ff2244', threat: 'hostile' },
    { name: 'IR', x: 0.58, y: 0.32, color: '#ff6432', threat: 'elevated' },
    { name: 'IL', x: 0.54, y: 0.32, color: '#00aaff', threat: 'allied' },
    { name: 'UK', x: 0.46, y: 0.18, color: '#00aaff', threat: 'allied' },
    { name: 'FR', x: 0.46, y: 0.24, color: '#00aaff', threat: 'allied' },
    { name: 'IN', x: 0.66, y: 0.36, color: '#ffaa00', threat: 'elevated' },
    { name: 'PK', x: 0.64, y: 0.32, color: '#ffaa00', threat: 'elevated' },
    { name: 'TR', x: 0.52, y: 0.28, color: '#ffaa00', threat: 'elevated' },
    { name: 'VN', x: 0.76, y: 0.38, color: '#ffaa00', threat: 'elevated' }
  ];

  // Draw connection lines between adversaries and targets
  var attackLines = [
    { from: 1, to: 0, color: 'rgba(255,34,68,0.3)' },  // RU -> US
    { from: 2, to: 0, color: 'rgba(255,34,68,0.25)' },  // CN -> US
    { from: 3, to: 0, color: 'rgba(255,34,68,0.2)' },   // NK -> US
    { from: 1, to: 6, color: 'rgba(255,34,68,0.2)' },   // RU -> UK
    { from: 4, to: 5, color: 'rgba(255,100,50,0.25)' },  // IR -> IL
    { from: 2, to: 8, color: 'rgba(255,170,0,0.15)' }    // CN -> IN
  ];

  ctx.setLineDash([4, 4]);
  for (var li = 0; li < attackLines.length; li++) {
    var line = attackLines[li];
    var fromN = nationPositions[line.from];
    var toN = nationPositions[line.to];
    ctx.strokeStyle = line.color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(fromN.x * W, fromN.y * H);
    ctx.lineTo(toN.x * W, toN.y * H);
    ctx.stroke();
  }
  ctx.setLineDash([]);

  // Draw nation dots
  var now = Date.now();
  for (var ni = 0; ni < nationPositions.length; ni++) {
    var np = nationPositions[ni];
    var nx = np.x * W;
    var ny = np.y * H;

    // Pulsing ring for hostile nations
    if (np.threat === 'hostile') {
      var pulseSize = 8 + Math.sin(now / 500 + ni) * 3;
      ctx.beginPath();
      ctx.arc(nx, ny, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,34,68,0.15)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,34,68,0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Main dot
    ctx.beginPath();
    ctx.arc(nx, ny, 4, 0, Math.PI * 2);
    ctx.fillStyle = np.color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Label
    ctx.font = '9px "Courier New", monospace';
    ctx.fillStyle = np.color;
    ctx.textAlign = 'center';
    ctx.fillText(np.name, nx, ny - 9);
  }

  // Legend
  var legendX = 12;
  var legendY = H - 70;
  ctx.fillStyle = 'rgba(8,11,18,0.85)';
  ctx.fillRect(legendX, legendY, 130, 62);
  ctx.strokeStyle = '#1a3a5c';
  ctx.lineWidth = 1;
  ctx.strokeRect(legendX, legendY, 130, 62);

  ctx.font = 'bold 9px "Courier New", monospace';
  ctx.fillStyle = '#5a7a9a';
  ctx.textAlign = 'left';
  ctx.fillText('THREAT LEGEND', legendX + 8, legendY + 12);

  var legendItems = [
    { color: '#ff2244', label: 'HOSTILE OPS' },
    { color: '#ff6432', label: 'ELEVATED' },
    { color: '#ffaa00', label: 'INCREASED' },
    { color: '#00aaff', label: 'ALLIED' }
  ];

  for (var ll = 0; ll < legendItems.length; ll++) {
    var ly = legendY + 24 + ll * 10;
    ctx.beginPath();
    ctx.arc(legendX + 12, ly - 2, 3, 0, Math.PI * 2);
    ctx.fillStyle = legendItems[ll].color;
    ctx.fill();
    ctx.font = '8px "Courier New", monospace';
    ctx.fillStyle = '#8aa8c8';
    ctx.fillText(legendItems[ll].label, legendX + 22, ly);
  }

  // Title
  ctx.font = 'bold 11px "Courier New", monospace';
  ctx.fillStyle = '#00aaff';
  ctx.textAlign = 'left';
  ctx.fillText('GLOBAL THREAT MAP — LIVE', 12, 16);

  ctx.font = '9px "Courier New", monospace';
  ctx.fillStyle = '#3a5a7a';
  ctx.textAlign = 'right';
  ctx.fillText('SENTINEL EYE // LIVE DATA', W - 12, 16);

  // Animate pulsing dots
  var animFrame;
  function animateDots() {
    var t = Date.now();
    // Clear just the dot areas to redraw them
    for (var ai = 0; ai < nationPositions.length; ai++) {
      var ap = nationPositions[ai];
      if (ap.threat !== 'hostile') continue;
      var ax = ap.x * W;
      var ay = ap.y * H;
      var pulse = 8 + Math.sin(t / 400 + ai * 1.5) * 4;

      // Clear region
      ctx.fillStyle = '#080b12';
      ctx.fillRect(ax - 16, ay - 16, 32, 32);

      // Redraw continent fill in area (approximate)
      ctx.fillStyle = 'rgba(0,170,255,0.06)';
      ctx.fillRect(ax - 16, ay - 16, 32, 32);

      // Pulse ring
      ctx.beginPath();
      ctx.arc(ax, ay, pulse, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,34,68,' + (0.1 + Math.sin(t / 400) * 0.05) + ')';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,34,68,' + (0.3 + Math.sin(t / 400) * 0.2) + ')';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core dot
      ctx.beginPath();
      ctx.arc(ax, ay, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ff2244';
      ctx.fill();

      // Label
      ctx.font = '9px "Courier New", monospace';
      ctx.fillStyle = '#ff2244';
      ctx.textAlign = 'center';
      ctx.fillText(ap.name, ax, ay - 9);
    }
    animFrame = requestAnimationFrame(animateDots);
  }
  animateDots();

  // Store cancel function
  canvas._seAnimCancel = function() {
    if (animFrame) cancelAnimationFrame(animFrame);
  };
}

// ---------------------------------------------------------------------------
// initTicker() — scrolling alert ticker
// ---------------------------------------------------------------------------
function initTicker() {
  var track = document.getElementById('se-ticker-track');
  if (!track) return;

  var alertPool = [
    { sev: 'critical', msg: 'APT29 (COZY BEAR) new C2 infrastructure detected — 14 domains registered in last 6h' },
    { sev: 'critical', msg: 'VOLT TYPHOON lateral movement detected in US water utility SCADA network' },
    { sev: 'critical', msg: 'LAZARUS GROUP crypto exchange targeting campaign — $340M exposure identified' },
    { sev: 'high', msg: 'SANDWORM probing European energy grid — reconnaissance phase indicators' },
    { sev: 'high', msg: 'APT41 supply chain compromise attempt — NPM package typosquatting cluster' },
    { sev: 'high', msg: 'Zero-day listing detected on dark web marketplace — targeting Fortinet SSL VPN' },
    { sev: 'medium', msg: 'BGP route hijack attempt detected — AS path manipulation targeting US DOD ranges' },
    { sev: 'medium', msg: 'KIMSUKY phishing campaign expanded — 200+ new credential harvesting domains' },
    { sev: 'medium', msg: 'Increased scanning from Iranian IP ranges targeting NATO member infrastructure' },
    { sev: 'high', msg: 'SALT TYPHOON persistent access confirmed in 3 additional US telecom providers' },
    { sev: 'critical', msg: 'Pre-positioned VOLT TYPHOON implants activated in Guam military networks' },
    { sev: 'medium', msg: 'MUDDYWATER new dropper variant detected — polymorphic evasion techniques' },
    { sev: 'high', msg: 'Russian GRU Unit 74455 staging wiper malware — Ukrainian targets probable' },
    { sev: 'medium', msg: 'DNS anomaly: 47 critical infrastructure domains had unauthorized NS changes' },
    { sev: 'high', msg: 'TURLA deploying new satellite C2 channel — hijacking VSAT connections' },
    { sev: 'critical', msg: 'Supply chain alert: compromised update server for industrial control system vendor' },
    { sev: 'medium', msg: 'Increased dark web chatter — initial access brokers offering Fortune 500 access' },
    { sev: 'high', msg: 'APT28 (FANCY BEAR) exploiting unpatched Outlook zero-day in NATO ministries' },
    { sev: 'medium', msg: 'Certificate transparency anomaly — suspicious certs for .gov and .mil domains' },
    { sev: 'high', msg: 'ANDARIEL ransomware infrastructure expansion — healthcare sector targeting' }
  ];

  var sevColors = {
    critical: '#ff2244',
    high: '#ff6432',
    medium: '#ffaa00',
    low: '#00aaff'
  };

  var html = '';
  // Double the items for seamless scrolling
  for (var pass = 0; pass < 2; pass++) {
    for (var ai = 0; ai < alertPool.length; ai++) {
      var a = alertPool[ai];
      var dotColor = sevColors[a.sev] || '#5a7a9a';
      html += '<span class="se-ticker-item">';
      html += '<span class="se-ticker-dot" style="background:' + dotColor + ';box-shadow:0 0 4px ' + dotColor + '"></span>';
      html += '<span style="color:' + dotColor + ';font-weight:700">[' + esc(a.sev.toUpperCase()) + ']</span> ';
      html += '<span style="color:#c8d8e8">' + esc(a.msg) + '</span>';
      html += '</span>';
      if (ai < alertPool.length - 1 || pass === 0) {
        html += '<span class="se-ticker-sep">|</span>';
      }
    }
  }

  track.innerHTML = html;
}

// ---------------------------------------------------------------------------
// initEventHandlers() — master event system
// ---------------------------------------------------------------------------
function initEventHandlers() {
  var SE_STORAGE_KEY = 'dn_sentinel_eye_v1';

  // ---- Tab switching ----
  var tabBar = document.getElementById('se-tab-bar');
  if (tabBar) {
    tabBar.addEventListener('click', function(e) {
      var tab = e.target.closest('.se-tab');
      if (!tab) return;
      var tabId = tab.getAttribute('data-tab');
      if (!tabId) return;

      // Update active tab
      var allTabs = tabBar.querySelectorAll('.se-tab');
      for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].className = 'se-tab';
      }
      tab.className = 'se-tab se-active';

      // Switch content
      switchTab(tabId);

      // Save state
      saveState({ activeTab: tabId });
    });
  }

  // ---- Panel expand/collapse ----
  document.addEventListener('click', function(e) {
    var expandHead = e.target.closest('.se-expand-head');
    if (!expandHead) return;
    var panel = expandHead.closest('.se-expand');
    if (!panel) return;
    if (panel.classList.contains('se-open')) {
      panel.classList.remove('se-open');
    } else {
      panel.classList.add('se-open');
    }
  });

  // ---- Filter changes ----
  document.addEventListener('change', function(e) {
    var el = e.target;
    if (el.id === 'se-nation-filter') {
      filterNations(el.value);
    } else if (el.id === 'se-severity-filter') {
      filterBySeverity(el.value);
    } else if (el.id === 'se-category-filter') {
      filterByCategory(el.value);
    } else if (el.id === 'se-apt-nation-filter') {
      filterAPTByNation(el.value);
    } else if (el.id === 'se-sector-filter') {
      filterBySector(el.value);
    } else if (el.id === 'se-intel-source-filter') {
      filterIntelBySource(el.value);
    }
  });

  // ---- Search inputs ----
  document.addEventListener('input', function(e) {
    var el = e.target;
    if (el.id === 'se-apt-search') {
      searchAPT(el.value);
    } else if (el.id === 'se-ops-search') {
      searchOperations(el.value);
    } else if (el.id === 'se-intel-search') {
      searchIntel(el.value);
    }
  });

  // ---- Button clicks ----
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.se-btn');
    if (!btn) return;
    var action = btn.getAttribute('data-action');
    if (!action) return;

    if (action === 'launch-wargame') {
      var scenarioId = btn.getAttribute('data-scenario');
      launchWargame(scenarioId);
    } else if (action === 'run-whatif') {
      runWhatIf();
    } else if (action === 'generate-report') {
      var reportType = btn.getAttribute('data-report');
      generateReport(reportType);
    } else if (action === 'plan-counterop') {
      planCounterOp();
    } else if (action === 'launch-tabletop') {
      var exerciseId = btn.getAttribute('data-exercise');
      launchTabletop(exerciseId);
    } else if (action === 'escalate-threat') {
      escalateThreat(btn.getAttribute('data-threat'));
    } else if (action === 'generate-sitrep') {
      generateSITREP();
    } else if (action === 'generate-flash') {
      generateFlashMessage();
    } else if (action === 'wargame-respond') {
      var responseId = btn.getAttribute('data-response');
      wargameRespond(responseId);
    } else if (action === 'next-phase') {
      wargameNextPhase();
    } else if (action === 'aar-review') {
      wargameAAR();
    } else if (action === 'view-playbook') {
      var pbId = btn.getAttribute('data-playbook');
      viewPlaybook(pbId);
    } else if (action === 'create-intel-product') {
      var productType = btn.getAttribute('data-product');
      createIntelProduct(productType);
    } else if (action === 'dismiss-alert') {
      var alertEl = btn.closest('.se-card');
      if (alertEl) alertEl.style.display = 'none';
    }
  });

  // ---- System time updater ----
  function updateSystemTime() {
    var timeEl = document.getElementById('se-system-time');
    var footerTimeEl = document.getElementById('se-footer-time');
    if (timeEl) {
      var d = new Date();
      var h = d.getUTCHours();
      var m = d.getUTCMinutes();
      var sec = d.getUTCSeconds();
      var ts = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec + ' UTC';
      timeEl.textContent = ts;
    }
    if (footerTimeEl) {
      var d2 = new Date();
      footerTimeEl.textContent = 'Updated: ' + d2.toISOString().replace('T', ' ').split('.')[0] + ' UTC';
    }
  }
  setInterval(updateSystemTime, 1000);
  updateSystemTime();

  // ---- Simulated threat level shifts ----
  setInterval(function() {
    var threatsEl = document.getElementById('se-active-threats');
    if (threatsEl) {
      var current = parseInt(threatsEl.textContent) || 17;
      var shift = Math.floor(Math.random() * 3) - 1;
      var newVal = Math.max(10, Math.min(30, current + shift));
      threatsEl.textContent = String(newVal);
    }

    var lastIncEl = document.getElementById('se-last-incident');
    if (lastIncEl) {
      var text = lastIncEl.textContent;
      var hoursMatch = text.match(/(\d+)h/);
      var minsMatch = text.match(/(\d+)m/);
      var hours = hoursMatch ? parseInt(hoursMatch[1]) : 4;
      var mins = minsMatch ? parseInt(minsMatch[1]) : 23;
      mins++;
      if (mins >= 60) { mins = 0; hours++; }
      lastIncEl.textContent = hours + 'h ' + (mins < 10 ? '0' : '') + mins + 'm ago';
    }
  }, 60000);

  // ---- Canvas resize handler ----
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      var canvas = document.getElementById('se-world-map');
      if (canvas && canvas._seAnimCancel) {
        canvas._seAnimCancel();
      }
      initWorldMap('se-world-map');
    }, 300);
  });

  // ---- Load saved state ----
  loadState();
}

// ---------------------------------------------------------------------------
// State management — localStorage
// ---------------------------------------------------------------------------
function saveState(partial) {
  try {
    var key = 'dn_sentinel_eye_v1';
    var stateStr = localStorage.getItem(key);
    var state = stateStr ? JSON.parse(stateStr) : {};
    var keys = Object.keys(partial);
    for (var i = 0; i < keys.length; i++) {
      state[keys[i]] = partial[keys[i]];
    }
    state.lastUpdated = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    // localStorage may be unavailable
  }
}

function loadState() {
  try {
    var key = 'dn_sentinel_eye_v1';
    var stateStr = localStorage.getItem(key);
    if (!stateStr) return null;
    var state = JSON.parse(stateStr);

    // Restore active tab
    if (state.activeTab) {
      var tabBar = document.getElementById('se-tab-bar');
      if (tabBar) {
        var allTabs = tabBar.querySelectorAll('.se-tab');
        for (var i = 0; i < allTabs.length; i++) {
          allTabs[i].className = 'se-tab';
          if (allTabs[i].getAttribute('data-tab') === state.activeTab) {
            allTabs[i].className = 'se-tab se-active';
          }
        }
        switchTab(state.activeTab);
      }
    }

    return state;
  } catch (e) {
    return null;
  }
}

// ---------------------------------------------------------------------------
// switchTab(tabId) — switch content area to specified tab
// ---------------------------------------------------------------------------
function switchTab(tabId) {
  var content = document.getElementById('se-content');
  if (!content) return;

  var html = '';
  switch (tabId) {
    case 'situation':
      html = renderSituation();
      break;
    case 'nations':
      html = renderNations();
      break;
    case 'predict':
      html = renderPredict();
      break;
    case 'earlywarning':
      html = renderEarlyWarning();
      break;
    case 'apttrack':
      html = renderAptTrack();
      break;
    case 'counterops':
      html = renderCounterOps();
      break;
    case 'shield':
      html = renderShield();
      break;
    case 'intelfusion':
      html = renderIntelFusion();
      break;
    case 'warsim':
      html = renderWarSim();
      break;
    case 'command':
      html = renderCommand();
      break;
    default:
      html = renderSituation();
  }

  content.innerHTML = html;

  // Re-init canvas if situation tab
  if (tabId === 'situation') {
    setTimeout(function() {
      initWorldMap('se-world-map');
    }, 50);
  }
}

// ---------------------------------------------------------------------------
// Filter and search stubs (called from event handlers, implemented per tab)
// ---------------------------------------------------------------------------
function filterNations(val) {
  var cards = document.querySelectorAll('.se-nation-card');
  for (var i = 0; i < cards.length; i++) {
    if (val === 'all' || cards[i].getAttribute('data-alignment') === val) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

function filterBySeverity(val) {
  var items = document.querySelectorAll('.se-filterable-item');
  for (var i = 0; i < items.length; i++) {
    if (val === 'all' || items[i].getAttribute('data-severity') === val) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}

function filterByCategory(val) {
  var items = document.querySelectorAll('.se-filterable-item');
  for (var i = 0; i < items.length; i++) {
    if (val === 'all' || items[i].getAttribute('data-category') === val) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}

function filterAPTByNation(val) {
  var cards = document.querySelectorAll('.se-apt-card');
  for (var i = 0; i < cards.length; i++) {
    if (val === 'all' || cards[i].getAttribute('data-nation') === val) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

function filterBySector(val) {
  var items = document.querySelectorAll('.se-sector-card');
  for (var i = 0; i < items.length; i++) {
    if (val === 'all' || items[i].getAttribute('data-sector') === val) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}

function filterIntelBySource(val) {
  var items = document.querySelectorAll('.se-intel-item');
  for (var i = 0; i < items.length; i++) {
    if (val === 'all' || items[i].getAttribute('data-source') === val) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}

function searchAPT(query) {
  var q = query.toLowerCase();
  var cards = document.querySelectorAll('.se-apt-card');
  for (var i = 0; i < cards.length; i++) {
    var text = (cards[i].textContent || '').toLowerCase();
    cards[i].style.display = (!q || text.indexOf(q) >= 0) ? '' : 'none';
  }
}

function searchOperations(query) {
  var q = query.toLowerCase();
  var items = document.querySelectorAll('.se-op-item');
  for (var i = 0; i < items.length; i++) {
    var text = (items[i].textContent || '').toLowerCase();
    items[i].style.display = (!q || text.indexOf(q) >= 0) ? '' : 'none';
  }
}

function searchIntel(query) {
  var q = query.toLowerCase();
  var items = document.querySelectorAll('.se-intel-item');
  for (var i = 0; i < items.length; i++) {
    var text = (items[i].textContent || '').toLowerCase();
    items[i].style.display = (!q || text.indexOf(q) >= 0) ? '' : 'none';
  }
}

// ---------------------------------------------------------------------------
// Wargame interaction stubs
// ---------------------------------------------------------------------------
var _seActiveWargame = null;
var _seActivePhase = 0;

function launchWargame(scenarioId) {
  _seActiveWargame = scenarioId;
  _seActivePhase = 0;
  switchTab('warsim');
}

function wargameRespond(responseId) {
  var responseArea = document.getElementById('se-wargame-response');
  if (responseArea) {
    var responses = {
      'isolate': 'RESPONSE LOGGED: Network isolation initiated. Affected segments quarantined. Monitoring for lateral movement indicators.',
      'hunt': 'RESPONSE LOGGED: Threat hunt teams deployed. Scanning for IoCs across enterprise. ETA: 45 minutes for initial sweep.',
      'patch': 'RESPONSE LOGGED: Emergency patching authorized. Deploying critical updates to affected systems. Rollback plan prepared.',
      'monitor': 'RESPONSE LOGGED: Enhanced monitoring activated. SIEM rules updated. SOC alert threshold lowered. All eyes on affected sectors.',
      'counter': 'RESPONSE LOGGED: Counter-intelligence operation approved. Deploying honeypots and deception assets. Tracking adversary C2.',
      'brief': 'RESPONSE LOGGED: Executive brief prepared. National Security Council notified. Congressional notification drafted.',
      'coordinate': 'RESPONSE LOGGED: Allied coordination initiated. Five Eyes partners notified. NATO CCDCOE engaged. Joint response planning.',
      'contain': 'RESPONSE LOGGED: Containment perimeter established. Egress filtering tightened. Data loss prevention activated.'
    };
    var msg = responses[responseId] || 'RESPONSE LOGGED: Action acknowledged. Implementation underway.';
    responseArea.innerHTML = '<div class="se-card" style="border-color:#00ff88">' +
      '<div style="color:#00ff88;font-size:11px;font-weight:700;letter-spacing:1px;margin-bottom:6px">' +
      '[+] BLUE TEAM RESPONSE</div>' +
      '<div style="font-size:12px;color:#c8d8e8">' + esc(msg) + '</div>' +
      '<div style="font-size:10px;color:#5a7a9a;margin-top:6px">Timestamp: ' + new Date().toISOString() + '</div>' +
      '</div>' + responseArea.innerHTML;
  }
}

function wargameNextPhase() {
  _seActivePhase++;
  switchTab('warsim');
}

function wargameAAR() {
  var content = document.getElementById('se-content');
  if (!content) return;
  var h = '';
  h += '<div class="se-section-head"><span class="se-section-icon">[>]</span> AFTER-ACTION REVIEW</div>';
  h += '<div class="se-card-3d">';
  h += '<div class="se-card-title" style="margin-bottom:12px">EXERCISE COMPLETE — AFTER-ACTION REVIEW</div>';
  h += '<div class="se-grid-2">';
  h += '<div class="se-stat-box"><div class="se-stat-value">3m 42s</div><div class="se-stat-label">Mean Detection Time</div></div>';
  h += '<div class="se-stat-box"><div class="se-stat-value se-warning">7m 15s</div><div class="se-stat-label">Mean Containment Time</div></div>';
  h += '<div class="se-stat-box"><div class="se-stat-value se-safe">82%</div><div class="se-stat-label">Overall Score</div></div>';
  h += '<div class="se-stat-box"><div class="se-stat-value">4/5</div><div class="se-stat-label">Phases Completed</div></div>';
  h += '</div>';
  h += '<hr class="se-divider">';
  h += '<div style="font-size:12px;color:#c8d8e8;line-height:1.8">';
  h += '<div style="color:#00aaff;font-weight:700;margin-bottom:8px">LESSONS LEARNED:</div>';
  h += '<div>• Initial detection was rapid but escalation to senior leadership took too long</div>';
  h += '<div>• Cross-sector coordination needs improvement — telecom and energy sectors operated in silos</div>';
  h += '<div>• Containment was effective but recovery planning should begin earlier</div>';
  h += '<div>• Intelligence sharing with allies was well-coordinated via established channels</div>';
  h += '<div>• Need pre-authorized response playbooks for specific attack scenarios to reduce decision time</div>';
  h += '</div>';
  h += '<div style="margin-top:16px">';
  h += '<span class="se-btn se-btn-primary" data-action="launch-wargame" data-scenario="dragon-storm">RUN ANOTHER EXERCISE</span>';
  h += '</div>';
  h += '</div>';
  content.innerHTML = h;
}

// ---------------------------------------------------------------------------
// Counter-ops and report generation stubs
// ---------------------------------------------------------------------------
function planCounterOp() {
  var opArea = document.getElementById('se-counterop-output');
  if (!opArea) return;
  var h = '';
  h += '<div class="se-card" style="border-color:#00aaff">';
  h += '<div style="color:#00aaff;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[+] OPERATION PLAN GENERATED</div>';
  h += '<div class="se-grid-2" style="margin-bottom:12px">';
  h += '<div><span class="se-muted">Phase 1:</span> <span style="color:#c8d8e8">Reconnaissance — Map adversary infrastructure (72h)</span></div>';
  h += '<div><span class="se-muted">Phase 2:</span> <span style="color:#c8d8e8">Access Development — Identify entry points (48h)</span></div>';
  h += '<div><span class="se-muted">Phase 3:</span> <span style="color:#c8d8e8">Payload Preparation — Stage tools and capabilities (24h)</span></div>';
  h += '<div><span class="se-muted">Phase 4:</span> <span style="color:#c8d8e8">Execution — Deploy and collect intelligence (Ongoing)</span></div>';
  h += '</div>';
  h += '<div style="font-size:11px;color:#ffaa00;margin-bottom:8px">';
  h += '[!] ROE COMPLIANCE: All actions must comply with Title 50 authorities and current executive order</div>';
  h += '<div style="font-size:11px;color:#5a7a9a">Collateral Damage Estimate: LOW | Legal Review: REQUIRED | Congressional Notification: REQUIRED</div>';
  h += '</div>';
  opArea.innerHTML = h;
}

function generateReport(reportType) {
  var outputId = 'se-report-output';
  var outputEl = document.getElementById(outputId);
  if (!outputEl) return;

  var reportTemplates = {
    'sitrep': 'SITUATION REPORT (SITREP)\n\n1. SITUATION: Elevated cyber threat posture across multiple sectors.\n2. THREAT ACTORS: APT29, Volt Typhoon, Lazarus Group showing increased activity.\n3. KEY EVENTS: Infrastructure staging detected for potential offensive operations.\n4. ASSESSMENT: High probability of targeted attacks within 72-hour window.\n5. RECOMMENDED ACTIONS: Elevate monitoring, implement emergency patches, activate incident response teams.',
    'flash': 'FLASH MESSAGE — IMMEDIATE\n\nFLASH//SENTINEL EYE//CYBER//CRITICAL\n\nIMMEDIATE THREAT: Nation-state adversary has staged offensive cyber capabilities targeting critical infrastructure.\nTIMELINE: Attack expected within 24-48 hours.\nSECTORS AT RISK: Energy, Telecommunications, Financial Services.\nIMMEDIATE ACTIONS REQUIRED: Implement emergency defensive measures per CISA Emergency Directive.',
    'execbrief': 'EXECUTIVE BRIEF — CYBER THREAT POSTURE\n\nBOTTOM LINE: Three nation-state adversaries are conducting operations against US and allied interests.\n\nKEY POINTS:\n- Russia: APT29 targeting government networks; Sandworm staging infrastructure for potential destructive attack\n- China: Volt Typhoon maintaining persistent access in critical infrastructure; Salt Typhoon in telecom\n- North Korea: Lazarus Group conducting cryptocurrency theft to fund weapons programs\n\nRECOMMENDATION: Raise cyber DEFCON to level 2 and activate full defensive posture.',
    'oprep3': 'OPERATIONAL REPORT (OPREP-3)\n\n1. TYPE: CYBER INCIDENT\n2. DATE/TIME GROUP: ' + new Date().toISOString() + '\n3. UNIT: CYBER NATIONAL MISSION FORCE\n4. LOCATION: CYBERSPACE (MULTIPLE SECTORS)\n5. ACTIVITY: Nation-state cyber operations detected targeting national critical infrastructure\n6. ACTIONS TAKEN: Enhanced monitoring, defensive countermeasures deployed\n7. DAMAGE: Assessment ongoing — no confirmed impact to mission capability\n8. FOLLOW-UP: Continuous monitoring, 4-hour reporting cycle established'
  };

  var content = reportTemplates[reportType] || 'Report type not recognized.';
  var h = '<div class="se-card" style="border-color:#00aaff">';
  h += '<div style="color:#00aaff;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[>] GENERATED REPORT — ' + esc(reportType.toUpperCase()) + '</div>';
  h += '<pre style="font-size:11px;color:#c8d8e8;white-space:pre-wrap;line-height:1.6;margin:0">' + esc(content) + '</pre>';
  h += '<div style="margin-top:12px;font-size:10px;color:#5a7a9a">Generated: ' + new Date().toISOString() + ' | Classification: OPERATIONAL</div>';
  h += '</div>';
  outputEl.innerHTML = h;
}

function generateSITREP() {
  generateReport('sitrep');
}

function generateFlashMessage() {
  generateReport('flash');
}

function launchTabletop(exerciseId) {
  var area = document.getElementById('se-tabletop-output');
  if (!area) return;
  var h = '<div class="se-card" style="border-color:#00aaff">';
  h += '<div style="color:#00aaff;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[>] TABLETOP EXERCISE LAUNCHED</div>';
  h += '<div style="font-size:12px;color:#c8d8e8;line-height:1.8">';
  h += '<div>Scenario: Coordinated ransomware attack on healthcare sector</div>';
  h += '<div>Participants: SOC Team, IR Team, Legal, Communications, Executive Leadership</div>';
  h += '<div>Duration: 4 hours</div>';
  h += '<div style="margin-top:8px;color:#ffaa00">INJECT 1: Multiple hospitals report systems locked with ransom note demanding $50M in Bitcoin.</div>';
  h += '<div style="color:#ffaa00">INJECT 2: Patient data exfiltration detected — threat actors threatening to publish.</div>';
  h += '<div style="color:#ffaa00">INJECT 3: Attack attributed to nation-state proxy group. Escalation to national security concern.</div>';
  h += '</div>';
  h += '</div>';
  area.innerHTML = h;
}

function escalateThreat(threatId) {
  var el = document.getElementById('se-escalation-log');
  if (!el) return;
  var msg = '<div class="se-card" style="border-color:#ff2244;margin-bottom:8px">';
  msg += '<div style="color:#ff2244;font-size:11px;font-weight:700">[!] THREAT ESCALATED</div>';
  msg += '<div style="font-size:11px;color:#c8d8e8;margin-top:4px">Threat ID: ' + esc(threatId || 'UNSPECIFIED') + ' — Escalated to national level. NSC notification drafted.</div>';
  msg += '<div style="font-size:10px;color:#5a7a9a;margin-top:4px">' + new Date().toISOString() + '</div>';
  msg += '</div>';
  el.innerHTML = msg + el.innerHTML;
}

function runWhatIf() {
  var eventInput = document.getElementById('se-whatif-event');
  var outputEl = document.getElementById('se-whatif-output');
  if (!eventInput || !outputEl) return;
  var eventText = eventInput.value || 'Geopolitical escalation event';

  var scenarios = [
    { actor: 'APT29 (Russia)', target: 'Government networks', type: 'Espionage', prob: 78, timeline: '24-48h' },
    { actor: 'Sandworm (Russia)', target: 'Energy infrastructure', type: 'Destructive/Wiper', prob: 62, timeline: '48-72h' },
    { actor: 'Volt Typhoon (China)', target: 'Critical infrastructure', type: 'Pre-positioning', prob: 55, timeline: '1-2 weeks' },
    { actor: 'Lazarus (DPRK)', target: 'Financial sector', type: 'Theft/Ransomware', prob: 45, timeline: '1 week' }
  ];

  var h = '<div class="se-card" style="border-color:#ffaa00">';
  h += '<div style="color:#ffaa00;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[>] WHAT-IF ANALYSIS: ' + esc(eventText).toUpperCase() + '</div>';
  h += '<div class="se-table-wrap"><table class="se-table">';
  h += '<thead><tr><th>Predicted Actor</th><th>Target</th><th>Attack Type</th><th>Probability</th><th>Timeline</th></tr></thead>';
  h += '<tbody>';
  for (var i = 0; i < scenarios.length; i++) {
    var sc = scenarios[i];
    var probColor = sc.prob >= 70 ? '#ff2244' : (sc.prob >= 50 ? '#ffaa00' : '#00aaff');
    h += '<tr>';
    h += '<td style="color:#ff6688">' + esc(sc.actor) + '</td>';
    h += '<td>' + esc(sc.target) + '</td>';
    h += '<td>' + esc(sc.type) + '</td>';
    h += '<td style="color:' + probColor + ';font-weight:700">' + sc.prob + '%</td>';
    h += '<td>' + esc(sc.timeline) + '</td>';
    h += '</tr>';
  }
  h += '</tbody></table></div>';
  h += '<div style="font-size:10px;color:#5a7a9a;margin-top:8px">Analysis based on historical pattern matching — operational analysis</div>';
  h += '</div>';
  outputEl.innerHTML = h;
}

function viewPlaybook(pbId) {
  var area = document.getElementById('se-playbook-output');
  if (!area) return;
  var h = '<div class="se-card" style="border-color:#00aaff">';
  h += '<div style="color:#00aaff;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[>] INCIDENT RESPONSE PLAYBOOK: ' + esc(pbId || 'GENERAL').toUpperCase() + '</div>';
  h += '<div style="font-size:12px;color:#c8d8e8;line-height:1.8">';
  h += '<div style="color:#ffaa00;font-weight:700">Phase 1: Detection &amp; Analysis</div>';
  h += '<div>• Validate alert through secondary data source</div>';
  h += '<div>• Determine scope of compromise</div>';
  h += '<div>• Identify affected systems and data</div>';
  h += '<div style="color:#ffaa00;font-weight:700;margin-top:8px">Phase 2: Containment</div>';
  h += '<div>• Isolate affected network segments</div>';
  h += '<div>• Block identified IoCs at perimeter</div>';
  h += '<div>• Preserve forensic evidence</div>';
  h += '<div style="color:#00ff88;font-weight:700;margin-top:8px">Phase 3: Eradication &amp; Recovery</div>';
  h += '<div>• Remove adversary access and persistence mechanisms</div>';
  h += '<div>• Patch exploited vulnerabilities</div>';
  h += '<div>• Restore from clean backups</div>';
  h += '<div>• Verify system integrity before reconnection</div>';
  h += '<div style="color:#00aaff;font-weight:700;margin-top:8px">Phase 4: Post-Incident</div>';
  h += '<div>• Complete after-action review</div>';
  h += '<div>• Update detection signatures and playbooks</div>';
  h += '<div>• Submit incident report and share indicators</div>';
  h += '</div>';
  h += '</div>';
  area.innerHTML = h;
}

function createIntelProduct(productType) {
  var area = document.getElementById('se-intel-product-output');
  if (!area) return;
  var h = '<div class="se-card" style="border-color:#00aaff">';
  h += '<div style="color:#00aaff;font-weight:700;font-size:12px;letter-spacing:1px;margin-bottom:8px">';
  h += '[>] INTELLIGENCE PRODUCT: ' + esc(productType || 'SPOT REPORT').toUpperCase() + '</div>';
  h += '<div style="font-size:12px;color:#c8d8e8;line-height:1.8">';
  h += '<div><span class="se-class-ts">TOP SECRET // SCI // OPERATIONAL</span></div>';
  h += '<div style="margin-top:8px"><strong>SUBJECT:</strong> Multi-source intelligence correlation — elevated nation-state threat activity</div>';
  h += '<div><strong>SOURCES:</strong> SIGINT, CYBINT, OSINT (3+ source correlation achieved)</div>';
  h += '<div><strong>ASSESSMENT:</strong> High confidence that multiple nation-state actors are staging capabilities for potential offensive operations targeting US and allied critical infrastructure.</div>';
  h += '<div><strong>KEY INDICATORS:</strong></div>';
  h += '<div>• SIGINT: Increased encrypted communications between known C2 nodes</div>';
  h += '<div>• CYBINT: New malware variants submitted to private analysis platforms</div>';
  h += '<div>• OSINT: Geopolitical tensions correlate with historical cyber operation patterns</div>';
  h += '<div style="margin-top:8px"><strong>RECOMMENDED ACTIONS:</strong> Brief national leadership, elevate DEFCON, coordinate with allies</div>';
  h += '</div>';
  h += '<div style="font-size:10px;color:#5a7a9a;margin-top:8px">Classification: OPERATIONAL | Generated: ' + new Date().toISOString() + '</div>';
  h += '</div>';
  area.innerHTML = h;
}

// ---------------------------------------------------------------------------
// The main export function — renderSentinelEye(main)
// ---------------------------------------------------------------------------

// ============================================================================
// SENTINEL EYE — TAB RENDER FUNCTIONS 1–5
// Situation · Nations · Predict · Early Warning · APT Tracking
// ============================================================================

// ---------------------------------------------------------------------------
// TAB 1 — GLOBAL SITUATIONAL AWARENESS
// ---------------------------------------------------------------------------
function renderSituation() {
  var state = _seLoadState();
  var cyberThreatLevel = 2;
  var activeOps = 14;
  var lastIncidentHoursAgo = 37;
  var threatColors = { 1: '#ff2244', 2: '#ff6622', 3: '#ffaa00', 4: '#44cc44', 5: '#00aaff' };
  var threatLabels = { 1: 'CRITICAL — ACTIVE CYBER WARFARE', 2: 'SEVERE — NATION-STATE OPERATIONS DETECTED', 3: 'ELEVATED — INCREASED HOSTILE ACTIVITY', 4: 'GUARDED — NORMAL POSTURE', 5: 'LOW — BASELINE OPERATIONS' };
  var tlColor = threatColors[cyberThreatLevel] || '#ff6622';

  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:6px 0;font-family:monospace;font-size:13px;font-weight:bold;letter-spacing:3px;border-bottom:2px solid #ff2244;">';
  h += 'TOP SECRET // SCI // NOFORN // SENTINEL EYE';
  h += '</div>';

  // Header bar
  h += '<div class="se-sit-header" style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 10px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:20px;font-weight:bold;letter-spacing:2px;color:#00aaff;font-family:monospace;text-transform:uppercase;">GLOBAL SITUATIONAL AWARENESS</div>';
  h += '<div style="display:flex;gap:24px;font-family:monospace;font-size:12px;">';
  h += '<div style="color:#8899aa;letter-spacing:1px;">ZULU: <span style="color:#00aaff;">' + new Date().toISOString().slice(0, 19).replace('T', ' ') + 'Z</span></div>';
  h += '<div style="color:#8899aa;letter-spacing:1px;">ACTIVE OPS: <span style="color:#ff6622;font-weight:bold;">' + activeOps + '</span></div>';
  h += '<div style="color:#8899aa;letter-spacing:1px;">LAST INCIDENT: <span style="color:#ffaa00;">' + lastIncidentHoursAgo + 'H AGO</span></div>';
  h += '</div>';
  h += '</div>';

  // DEFCON-style threat level + world map row
  h += '<div class="se-sit-top" style="display:flex;gap:16px;padding:16px 24px;">';

  // DEFCON threat level panel
  h += '<div class="se-threat-level-panel" style="flex:0 0 220px;background:linear-gradient(135deg,#0c1020 0%,#0a0e1a 100%);border:2px solid ' + tlColor + ';border-radius:8px;padding:20px;text-align:center;position:relative;overflow:hidden;">';
  h += '<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,170,255,0.02) 2px,rgba(0,170,255,0.02) 4px);pointer-events:none;"></div>';
  h += '<div style="font-family:monospace;font-size:10px;color:#8899aa;letter-spacing:3px;text-transform:uppercase;margin-bottom:8px;">GLOBAL CYBER</div>';
  h += '<div style="font-family:monospace;font-size:10px;color:#8899aa;letter-spacing:3px;text-transform:uppercase;margin-bottom:14px;">THREAT LEVEL</div>';
  h += '<div style="font-size:72px;font-weight:bold;color:' + tlColor + ';font-family:monospace;line-height:1;text-shadow:0 0 30px ' + tlColor + '60,0 0 60px ' + tlColor + '30;">' + cyberThreatLevel + '</div>';
  h += '<div style="font-family:monospace;font-size:10px;color:' + tlColor + ';letter-spacing:2px;margin-top:10px;text-transform:uppercase;font-weight:bold;">' + esc(threatLabels[cyberThreatLevel]) + '</div>';
  // Threat level indicators (5 bars)
  h += '<div style="display:flex;gap:6px;justify-content:center;margin-top:16px;">';
  for (var tl = 1; tl <= 5; tl++) {
    var barActive = tl >= cyberThreatLevel;
    var barColor = barActive ? threatColors[tl] : '#1a2a3a';
    h += '<div style="width:28px;height:8px;background:' + barColor + ';border-radius:2px;' + (barActive ? 'box-shadow:0 0 8px ' + barColor + '60;' : '') + '"></div>';
  }
  h += '</div>';
  h += '</div>';

  // World map canvas
  h += '<div style="flex:1;background:linear-gradient(135deg,#0c1020 0%,#0a0e1a 100%);border:1px solid #1a3a5c;border-radius:8px;position:relative;overflow:hidden;">';
  h += '<div style="position:absolute;top:10px;left:14px;font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;text-transform:uppercase;z-index:2;">GLOBAL THREAT MAP — REAL-TIME</div>';
  h += '<canvas id="se-world-map-canvas" style="width:100%;height:400px;display:block;"></canvas>';
  h += '<div style="position:absolute;bottom:8px;right:14px;display:flex;gap:14px;font-family:monospace;font-size:9px;z-index:2;">';
  h += '<span style="color:#ff2244;">■ HOSTILE OPS</span>';
  h += '<span style="color:#ff6622;">■ ELEVATED</span>';
  h += '<span style="color:#ffaa00;">■ RECON</span>';
  h += '<span style="color:#44cc44;">■ NORMAL</span>';
  h += '<span style="color:#00aaff;">■ ALLIED</span>';
  h += '</div>';
  h += '</div>';

  h += '</div>'; // end se-sit-top

  // Nation-state force status grid
  h += '<div style="padding:0 24px 8px;">';
  h += '<div style="font-family:monospace;font-size:12px;color:#4a6a8a;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;border-bottom:1px solid #1a3a5c;padding-bottom:6px;">NATION-STATE CYBER FORCE STATUS</div>';
  h += '<div class="se-nation-force-grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;">';

  var forceNations = ['US', 'RU', 'CN', 'IR', 'KP', 'IL', 'GB', 'FR', 'IN', 'PK'];
  for (var ni = 0; ni < forceNations.length; ni++) {
    var code = forceNations[ni];
    var profile = null;
    for (var pi = 0; pi < NATION_STATE_PROFILES.length; pi++) {
      if (NATION_STATE_PROFILES[pi].code === code) { profile = NATION_STATE_PROFILES[pi]; break; }
    }
    if (!profile) continue;

    var borderColor = profile.threatLevel === 'CRITICAL' ? '#ff2244' : profile.threatLevel === 'HIGH' ? '#ff6622' : profile.threatLevel === 'ELEVATED' ? '#ffaa00' : '#1a3a5c';
    var tlBg = profile.threatLevel === 'CRITICAL' ? 'rgba(255,34,68,0.15)' : profile.threatLevel === 'HIGH' ? 'rgba(255,102,34,0.15)' : profile.threatLevel === 'ELEVATED' ? 'rgba(255,170,0,0.12)' : 'rgba(0,170,255,0.08)';

    h += '<div class="se-force-card" style="background:linear-gradient(135deg,' + tlBg + ' 0%,#0a0e1a 100%);border:1px solid ' + borderColor + ';border-radius:6px;padding:10px 12px;cursor:pointer;transition:border-color 0.2s;" onmouseover="this.style.borderColor=\'#00aaff\'" onmouseout="this.style.borderColor=\'' + borderColor + '\'">';
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">';
    h += '<div style="font-family:monospace;font-size:16px;" title="' + esc(profile.name) + '">' + esc(profile.flag) + '</div>';
    h += '<div style="font-family:monospace;font-size:10px;letter-spacing:1px;color:' + borderColor + ';font-weight:bold;">' + esc(profile.threatLevel) + '</div>';
    h += '</div>';
    h += '<div style="font-family:monospace;font-size:11px;color:#ccdde8;font-weight:bold;letter-spacing:1px;margin-bottom:4px;">' + esc(profile.name) + '</div>';

    // Threat level bar
    var tlPct = profile.threatLevel === 'CRITICAL' ? 95 : profile.threatLevel === 'HIGH' ? 75 : profile.threatLevel === 'ELEVATED' ? 55 : 30;
    h += '<div style="background:#0a1020;border-radius:3px;height:4px;margin-bottom:6px;overflow:hidden;">';
    h += '<div style="width:' + tlPct + '%;height:100%;background:' + borderColor + ';border-radius:3px;"></div>';
    h += '</div>';

    h += '<div style="font-family:monospace;font-size:9px;color:#6688aa;display:flex;justify-content:space-between;">';
    h += '<span>APT: ' + profile.aptGroups.length + '</span>';
    h += '<span>TIER ' + profile.tier + '</span>';
    h += '</div>';

    h += '<div style="font-family:monospace;font-size:9px;color:#4a6a8a;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + esc(profile.posture) + '</div>';
    h += '</div>'; // end force card
  }

  h += '</div>'; // end grid
  h += '</div>'; // end section

  // Alert ticker
  h += '<div style="padding:8px 24px 16px;">';
  h += '<div style="font-family:monospace;font-size:12px;color:#4a6a8a;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;border-bottom:1px solid #1a3a5c;padding-bottom:6px;">GLOBAL ALERT FEED</div>';
  h += '<div id="se-alert-ticker" class="se-alert-ticker" style="background:#060a14;border:1px solid #1a3a5c;border-radius:6px;padding:10px 14px;max-height:180px;overflow-y:auto;font-family:monospace;font-size:11px;">';

  var alertFeed = [
    { time: '14:32:07Z', level: 'CRITICAL', msg: 'APT29 C2 beacon detected — callback to known SVR infrastructure from Fortune 500 financial network' },
    { time: '14:28:44Z', level: 'HIGH', msg: 'Volt Typhoon living-off-the-land activity detected in US water utility SCADA segment' },
    { time: '14:25:11Z', level: 'HIGH', msg: 'Lazarus Group crypto wallet drainer deployed on DeFi protocol — $4.2M at risk' },
    { time: '14:21:33Z', level: 'WARNING', msg: 'BGP route hijack attempt detected — AS174 (Cogent) routes redirected through AS4837 (China Unicom) for 4 minutes' },
    { time: '14:18:02Z', level: 'WARNING', msg: 'Increased scanning from IRGC-attributed IP ranges targeting petrochemical sector' },
    { time: '14:14:55Z', level: 'INFO', msg: 'New zero-day listing on dark web marketplace — Windows kernel LPE, asking price $2.5M' },
    { time: '14:11:20Z', level: 'HIGH', msg: 'Sandworm ICS payload variant uploaded to VirusTotal from Ukrainian IP — possible false flag' },
    { time: '14:07:38Z', level: 'WARNING', msg: 'DNS anomaly detected — critical banking domains in NATO member state showing NXDOMAIN intermittently' },
    { time: '14:03:50Z', level: 'INFO', msg: 'Five Eyes SIGINT bulletin — elevated PLA SSF activity on submarine cable taps in South China Sea' },
    { time: '13:59:22Z', level: 'CRITICAL', msg: 'FLASH: Kimsuky spear-phishing wave targeting defense contractors — new zero-day PDF exploit observed' },
    { time: '13:55:14Z', level: 'HIGH', msg: 'Supply chain alert — NPM package with 2M weekly downloads found containing obfuscated C2 loader' },
    { time: '13:51:03Z', level: 'WARNING', msg: 'Increased Tor exit node activity from Russian infrastructure clusters near military bases' },
    { time: '13:47:28Z', level: 'INFO', msg: 'ANSSI France reports successful containment of APT28 intrusion into defense ministry networks' },
    { time: '13:43:11Z', level: 'HIGH', msg: 'MuddyWater deploying new PowerShell backdoor variant in Middle Eastern telecom networks' },
    { time: '13:39:45Z', level: 'WARNING', msg: 'Anomalous SSL certificate registrations — 47 domains mimicking NATO logistics portal registered in 6 hours' }
  ];

  for (var ai = 0; ai < alertFeed.length; ai++) {
    var alert = alertFeed[ai];
    var aColor = alert.level === 'CRITICAL' ? '#ff2244' : alert.level === 'HIGH' ? '#ff6622' : alert.level === 'WARNING' ? '#ffaa00' : '#00aaff';
    h += '<div style="padding:4px 0;border-bottom:1px solid #0d1525;display:flex;gap:10px;align-items:flex-start;">';
    h += '<span style="color:#4a6a8a;flex-shrink:0;">' + esc(alert.time) + '</span>';
    h += '<span style="color:' + aColor + ';font-weight:bold;flex-shrink:0;min-width:64px;">[' + esc(alert.level) + ']</span>';
    h += '<span style="color:#b0c4d8;">' + esc(alert.msg) + '</span>';
    h += '</div>';
  }
  h += '</div>'; // end ticker
  h += '</div>'; // end section

  // Quick stats row
  h += '<div style="display:flex;gap:12px;padding:0 24px 18px;">';
  var quickStats = [
    { label: 'ACTIVE CAMPAIGNS', value: '23', color: '#ff2244' },
    { label: 'TRACKED APT GROUPS', value: '38', color: '#ff6622' },
    { label: 'IOCs PROCESSED (24H)', value: '1.2M', color: '#ffaa00' },
    { label: 'THREAT INTEL FEEDS', value: '94', color: '#00aaff' },
    { label: 'EARLY WARNINGS', value: '7', color: '#44cc44' },
    { label: 'DEFENDED SECTORS', value: '8', color: '#00aaff' }
  ];
  for (var qs = 0; qs < quickStats.length; qs++) {
    var stat = quickStats[qs];
    h += '<div style="flex:1;background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a3a5c;border-radius:6px;padding:14px;text-align:center;">';
    h += '<div style="font-family:monospace;font-size:24px;font-weight:bold;color:' + stat.color + ';text-shadow:0 0 12px ' + stat.color + '40;">' + stat.value + '</div>';
    h += '<div style="font-family:monospace;font-size:9px;color:#4a6a8a;letter-spacing:2px;margin-top:4px;">' + stat.label + '</div>';
    h += '</div>';
  }
  h += '</div>';

  return h;
}


// ---------------------------------------------------------------------------
// TAB 2 — NATION-STATE MONITOR
// ---------------------------------------------------------------------------
function renderNations() {
  var state = _seLoadState();
  var filterTier = state.nationFilterTier || 'ALL';
  var filterThreat = state.nationFilterThreat || 'ALL';
  var expandedNation = state.expandedNation || null;

  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:6px 0;font-family:monospace;font-size:13px;font-weight:bold;letter-spacing:3px;border-bottom:2px solid #ff2244;">';
  h += 'TOP SECRET // SCI // NOFORN // SENTINEL EYE';
  h += '</div>';

  // Header
  h += '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 10px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:20px;font-weight:bold;letter-spacing:2px;color:#00aaff;font-family:monospace;text-transform:uppercase;">NATION-STATE CYBER PROGRAMS</div>';
  h += '<div style="font-family:monospace;font-size:11px;color:#4a6a8a;">' + NATION_STATE_PROFILES.length + ' PROGRAMS MONITORED</div>';
  h += '</div>';

  // Filters
  h += '<div style="display:flex;gap:16px;padding:12px 24px;border-bottom:1px solid #0d1525;align-items:center;">';
  h += '<span style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;">FILTER:</span>';

  // Tier filter
  h += '<div style="display:flex;gap:4px;">';
  var tiers = ['ALL', '1', '2', '3'];
  for (var tf = 0; tf < tiers.length; tf++) {
    var tActive = filterTier === tiers[tf];
    h += '<button class="se-filter-btn" data-action="filterNationTier" data-value="' + tiers[tf] + '" style="background:' + (tActive ? '#00aaff' : '#0c1525') + ';color:' + (tActive ? '#000' : '#6688aa') + ';border:1px solid ' + (tActive ? '#00aaff' : '#1a3a5c') + ';border-radius:4px;padding:4px 10px;font-family:monospace;font-size:10px;cursor:pointer;letter-spacing:1px;">' + (tiers[tf] === 'ALL' ? 'ALL TIERS' : 'TIER ' + tiers[tf]) + '</button>';
  }
  h += '</div>';

  // Threat filter
  h += '<div style="display:flex;gap:4px;margin-left:12px;">';
  var threats = ['ALL', 'CRITICAL', 'HIGH', 'ELEVATED', 'MODERATE'];
  for (var thf = 0; thf < threats.length; thf++) {
    var thActive = filterThreat === threats[thf];
    var thColor = threats[thf] === 'CRITICAL' ? '#ff2244' : threats[thf] === 'HIGH' ? '#ff6622' : threats[thf] === 'ELEVATED' ? '#ffaa00' : threats[thf] === 'MODERATE' ? '#44cc44' : '#00aaff';
    h += '<button class="se-filter-btn" data-action="filterNationThreat" data-value="' + threats[thf] + '" style="background:' + (thActive ? thColor : '#0c1525') + ';color:' + (thActive ? '#000' : thColor) + ';border:1px solid ' + (thActive ? thColor : '#1a3a5c') + ';border-radius:4px;padding:4px 10px;font-family:monospace;font-size:10px;cursor:pointer;letter-spacing:1px;">' + esc(threats[thf]) + '</button>';
  }
  h += '</div>';
  h += '</div>';

  // Nation cards
  h += '<div style="padding:16px 24px;display:grid;grid-template-columns:repeat(2,1fr);gap:14px;">';

  for (var nsi = 0; nsi < NATION_STATE_PROFILES.length; nsi++) {
    var ns = NATION_STATE_PROFILES[nsi];

    // Apply filters
    if (filterTier !== 'ALL' && String(ns.tier) !== filterTier) continue;
    if (filterThreat !== 'ALL' && ns.threatLevel !== filterThreat) continue;

    var isExpanded = expandedNation === ns.code;
    var nsBorder = ns.threatLevel === 'CRITICAL' ? '#ff2244' : ns.threatLevel === 'HIGH' ? '#ff6622' : ns.threatLevel === 'ELEVATED' ? '#ffaa00' : '#1a3a5c';
    var nsBg = ns.threatLevel === 'CRITICAL' ? 'rgba(255,34,68,0.06)' : ns.threatLevel === 'HIGH' ? 'rgba(255,102,34,0.06)' : 'rgba(0,170,255,0.04)';

    h += '<div class="se-nation-card" style="background:linear-gradient(135deg,' + nsBg + ' 0%,#0a0e1a 100%);border:1px solid ' + nsBorder + ';border-radius:8px;overflow:hidden;cursor:pointer;" data-action="toggleNation" data-value="' + esc(ns.code) + '">';

    // Card header
    h += '<div style="display:flex;align-items:center;padding:14px 16px;gap:12px;">';
    h += '<div style="font-size:28px;">' + esc(ns.flag) + '</div>';
    h += '<div style="flex:1;">';
    h += '<div style="font-family:monospace;font-size:14px;color:#e0eaf0;font-weight:bold;letter-spacing:1px;">' + esc(ns.name) + '</div>';
    h += '<div style="display:flex;gap:8px;margin-top:4px;align-items:center;">';
    h += '<span style="font-family:monospace;font-size:9px;background:' + (ns.tier === 1 ? '#ff2244' : ns.tier === 2 ? '#ff6622' : '#ffaa00') + ';color:#000;padding:2px 6px;border-radius:3px;font-weight:bold;">TIER ' + ns.tier + '</span>';
    h += '<span style="font-family:monospace;font-size:9px;color:' + nsBorder + ';letter-spacing:1px;">' + esc(ns.threatLevel) + '</span>';
    h += '</div>';
    h += '</div>';
    h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;">' + (isExpanded ? '▲' : '▼') + '</div>';
    h += '</div>';

    // Threat level bar
    h += '<div style="padding:0 16px 10px;">';
    var nsTlPct = ns.threatLevel === 'CRITICAL' ? 95 : ns.threatLevel === 'HIGH' ? 75 : ns.threatLevel === 'ELEVATED' ? 55 : 35;
    h += '<div style="background:#0a1020;border-radius:3px;height:4px;overflow:hidden;">';
    h += '<div style="width:' + nsTlPct + '%;height:100%;background:linear-gradient(90deg,' + nsBorder + ',' + nsBorder + 'aa);border-radius:3px;"></div>';
    h += '</div>';
    h += '</div>';

    // APT groups summary row
    h += '<div style="padding:0 16px 10px;display:flex;gap:6px;flex-wrap:wrap;">';
    for (var ag = 0; ag < ns.aptGroups.length && ag < 4; ag++) {
      h += '<span style="font-family:monospace;font-size:9px;background:#0c1525;border:1px solid #1a3a5c;color:#8899bb;padding:2px 6px;border-radius:3px;">' + esc(ns.aptGroups[ag]) + '</span>';
    }
    if (ns.aptGroups.length > 4) {
      h += '<span style="font-family:monospace;font-size:9px;color:#4a6a8a;">+' + (ns.aptGroups.length - 4) + ' more</span>';
    }
    h += '</div>';

    // Expanded details
    if (isExpanded) {
      h += '<div style="border-top:1px solid #1a3a5c;padding:14px 16px;background:rgba(0,10,20,0.5);">';

      // Capabilities bars
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin-bottom:8px;">CAPABILITIES ASSESSMENT</div>';
      var caps = [
        { label: 'OFFENSE', value: ns.capabilities.offense, color: '#ff2244' },
        { label: 'DEFENSE', value: ns.capabilities.defense, color: '#00aaff' },
        { label: 'INTEL', value: ns.capabilities.intel, color: '#ffaa00' }
      ];
      for (var ci = 0; ci < caps.length; ci++) {
        var cap = caps[ci];
        h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">';
        h += '<span style="font-family:monospace;font-size:9px;color:#6688aa;width:60px;text-align:right;">' + cap.label + '</span>';
        h += '<div style="flex:1;background:#0a1020;border-radius:3px;height:8px;overflow:hidden;">';
        h += '<div style="width:' + (cap.value * 10) + '%;height:100%;background:linear-gradient(90deg,' + cap.color + ',' + cap.color + '88);border-radius:3px;"></div>';
        h += '</div>';
        h += '<span style="font-family:monospace;font-size:9px;color:' + cap.color + ';width:24px;">' + cap.value + '/10</span>';
        h += '</div>';
      }

      // Known operations
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 8px;">KNOWN OPERATIONS</div>';
      for (var ko = 0; ko < ns.knownOps.length; ko++) {
        var op = ns.knownOps[ko];
        h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;">';
        h += '<span style="font-family:monospace;font-size:9px;color:#4a6a8a;width:40px;">' + esc(op.year) + '</span>';
        h += '<span style="font-family:monospace;font-size:10px;color:#ff6622;font-weight:bold;">' + esc(op.name) + '</span>';
        h += '<span style="font-family:monospace;font-size:9px;color:#6688aa;flex:1;">— ' + esc(op.desc) + '</span>';
        h += '</div>';
      }

      // Primary targets
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 8px;">PRIMARY TARGETS</div>';
      h += '<div style="display:flex;gap:6px;flex-wrap:wrap;">';
      for (var pt = 0; pt < ns.primaryTargets.length; pt++) {
        h += '<span style="font-family:monospace;font-size:9px;background:#0c1525;border:1px solid #1a3a5c;color:#b0c4d8;padding:3px 8px;border-radius:3px;">' + esc(ns.primaryTargets[pt]) + '</span>';
      }
      h += '</div>';

      // Unit / agency
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 8px;">CYBER UNITS / AGENCIES</div>';
      for (var cu = 0; cu < ns.units.length; cu++) {
        h += '<div style="font-family:monospace;font-size:10px;color:#b0c4d8;margin-bottom:2px;">• ' + esc(ns.units[cu]) + '</div>';
      }

      // Current posture
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 6px;">CURRENT POSTURE</div>';
      h += '<div style="font-family:monospace;font-size:11px;color:#e0eaf0;line-height:1.5;padding:8px 10px;background:#060a14;border:1px solid #1a3a5c;border-radius:4px;">' + esc(ns.posture) + '</div>';

      h += '</div>'; // end expanded
    }

    h += '</div>'; // end nation card
  }

  h += '</div>'; // end grid

  return h;
}


// ---------------------------------------------------------------------------
// TAB 3 — ATTACK PREDICTION ENGINE
// ---------------------------------------------------------------------------
function renderPredict() {
  var state = _seLoadState();
  var whatIfEvent = state.whatIfEvent || '';
  var selectedPrediction = state.selectedPrediction || null;

  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:6px 0;font-family:monospace;font-size:13px;font-weight:bold;letter-spacing:3px;border-bottom:2px solid #ff2244;">';
  h += 'TOP SECRET // SCI // NOFORN // SENTINEL EYE — PREDICTIVE INTELLIGENCE';
  h += '</div>';

  // Header
  h += '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 10px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:20px;font-weight:bold;letter-spacing:2px;color:#00aaff;font-family:monospace;text-transform:uppercase;">ATTACK PREDICTION ENGINE</div>';
  h += '<div style="font-family:monospace;font-size:11px;color:#4a6a8a;">MODEL ACCURACY: <span style="color:#44cc44;">78.4%</span> (180-DAY)</div>';
  h += '</div>';

  // Accuracy dashboard row
  h += '<div style="display:flex;gap:12px;padding:14px 24px;">';
  var accStats = [
    { label: 'ACTIVE PREDICTIONS', value: String(THREAT_PREDICTIONS.length), color: '#ff6622' },
    { label: 'CONFIRMED (30D)', value: '12', color: '#44cc44' },
    { label: 'FALSE POSITIVE', value: '3', color: '#ff2244' },
    { label: 'PENDING VALIDATION', value: '8', color: '#ffaa00' },
    { label: 'AVG CONFIDENCE', value: '72%', color: '#00aaff' },
    { label: 'LEAD TIME (AVG)', value: '54H', color: '#00aaff' }
  ];
  for (var asi = 0; asi < accStats.length; asi++) {
    var as = accStats[asi];
    h += '<div style="flex:1;background:#0c1020;border:1px solid #1a3a5c;border-radius:6px;padding:10px;text-align:center;">';
    h += '<div style="font-family:monospace;font-size:20px;font-weight:bold;color:' + as.color + ';">' + as.value + '</div>';
    h += '<div style="font-family:monospace;font-size:8px;color:#4a6a8a;letter-spacing:1px;margin-top:3px;">' + as.label + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Two-column layout: predictions | geopolitical triggers
  h += '<div style="display:flex;gap:16px;padding:0 24px 16px;">';

  // Left column: Active predictions
  h += '<div style="flex:3;">';
  h += '<div style="font-family:monospace;font-size:12px;color:#4a6a8a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #1a3a5c;padding-bottom:6px;">ACTIVE THREAT PREDICTIONS</div>';

  for (var pri = 0; pri < THREAT_PREDICTIONS.length; pri++) {
    var pred = THREAT_PREDICTIONS[pri];
    var pBorder = pred.confidence >= 80 ? '#ff2244' : pred.confidence >= 60 ? '#ff6622' : pred.confidence >= 40 ? '#ffaa00' : '#00aaff';
    var isSelected = selectedPrediction === pri;

    h += '<div class="se-prediction-card" data-action="selectPrediction" data-value="' + pri + '" style="background:linear-gradient(135deg,rgba(10,14,26,0.9),#080b12);border:1px solid ' + (isSelected ? '#00aaff' : pBorder) + ';border-radius:6px;padding:12px 14px;margin-bottom:10px;cursor:pointer;' + (isSelected ? 'box-shadow:0 0 12px rgba(0,170,255,0.2);' : '') + '">';

    // Prediction header
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">';
    h += '<div style="display:flex;align-items:center;gap:10px;">';
    h += '<span style="font-family:monospace;font-size:9px;background:' + pBorder + ';color:#000;padding:2px 8px;border-radius:3px;font-weight:bold;">' + esc(pred.type) + '</span>';
    h += '<span style="font-family:monospace;font-size:12px;color:#e0eaf0;font-weight:bold;">' + esc(pred.adversary) + ' → ' + esc(pred.target) + '</span>';
    h += '</div>';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<span style="font-family:monospace;font-size:9px;color:#6688aa;">TIMELINE: ' + esc(pred.timeline) + '</span>';
    h += '</div>';
    h += '</div>';

    // Confidence bar
    h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">';
    h += '<span style="font-family:monospace;font-size:9px;color:#4a6a8a;width:70px;">CONFIDENCE</span>';
    h += '<div style="flex:1;background:#0a1020;border-radius:3px;height:8px;overflow:hidden;">';
    h += '<div style="width:' + pred.confidence + '%;height:100%;background:linear-gradient(90deg,' + pBorder + ',' + pBorder + '88);border-radius:3px;"></div>';
    h += '</div>';
    h += '<span style="font-family:monospace;font-size:10px;color:' + pBorder + ';width:36px;text-align:right;font-weight:bold;">' + pred.confidence + '%</span>';
    h += '</div>';

    // Description
    h += '<div style="font-family:monospace;font-size:10px;color:#8899bb;line-height:1.4;margin-bottom:6px;">' + esc(pred.description) + '</div>';

    // Expanded view
    if (isSelected) {
      h += '<div style="border-top:1px solid #1a3a5c;padding-top:10px;margin-top:6px;">';

      // Contributing indicators
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:1px;margin-bottom:6px;">CONTRIBUTING INDICATORS</div>';
      for (var indi = 0; indi < pred.indicators.length; indi++) {
        h += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">';
        h += '<span style="color:#00aaff;font-size:8px;">▸</span>';
        h += '<span style="font-family:monospace;font-size:10px;color:#b0c4d8;">' + esc(pred.indicators[indi]) + '</span>';
        h += '</div>';
      }

      // Recommended actions
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:1px;margin:10px 0 6px;">RECOMMENDED DEFENSIVE ACTIONS</div>';
      for (var ra = 0; ra < pred.actions.length; ra++) {
        h += '<div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">';
        h += '<span style="color:#44cc44;font-size:8px;">◆</span>';
        h += '<span style="font-family:monospace;font-size:10px;color:#b0c4d8;">' + esc(pred.actions[ra]) + '</span>';
        h += '</div>';
      }

      // Historical accuracy for this type
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:1px;margin-top:10px;">HISTORICAL ACCURACY: <span style="color:#44cc44;">' + esc(pred.historicalAccuracy) + '</span></div>';

      h += '</div>'; // end expanded
    }

    h += '</div>'; // end prediction card
  }
  h += '</div>'; // end left column

  // Right column: geopolitical triggers + what-if builder
  h += '<div style="flex:2;">';

  // What-If scenario builder
  h += '<div style="background:#0c1020;border:1px solid #1a3a5c;border-radius:6px;padding:14px;margin-bottom:14px;">';
  h += '<div style="font-family:monospace;font-size:11px;color:#00aaff;letter-spacing:2px;margin-bottom:10px;font-weight:bold;">WHAT-IF SCENARIO BUILDER</div>';
  h += '<div style="font-family:monospace;font-size:9px;color:#4a6a8a;margin-bottom:8px;">Select a geopolitical trigger to model predicted cyber consequences</div>';
  h += '<select id="se-whatif-select" data-action="whatIfSelect" style="width:100%;background:#060a14;border:1px solid #1a3a5c;color:#b0c4d8;padding:8px;font-family:monospace;font-size:11px;border-radius:4px;margin-bottom:8px;">';
  h += '<option value="">— SELECT SCENARIO —</option>';

  var whatIfScenarios = [
    { value: 'taiwan_invasion', label: 'China initiates military action against Taiwan' },
    { value: 'us_iran_strike', label: 'US conducts strike on Iranian nuclear facility' },
    { value: 'russia_nato', label: 'Russia-NATO direct military confrontation' },
    { value: 'nk_test', label: 'North Korea conducts provocative missile test' },
    { value: 'sanctions', label: 'New sweeping sanctions on Russia/China' },
    { value: 'election', label: 'US presidential election interference detected' },
    { value: 'cable_cut', label: 'Undersea cable severed in strategic location' },
    { value: 'grid_attack', label: 'Power grid attack on NATO member state' }
  ];
  for (var ws = 0; ws < whatIfScenarios.length; ws++) {
    h += '<option value="' + esc(whatIfScenarios[ws].value) + '"' + (whatIfEvent === whatIfScenarios[ws].value ? ' selected' : '') + '>' + esc(whatIfScenarios[ws].label) + '</option>';
  }
  h += '</select>';

  // What-If results
  if (whatIfEvent) {
    var wiResults = _getWhatIfResults(whatIfEvent);
    h += '<div style="background:#060a14;border:1px solid #1a3a5c;border-radius:4px;padding:10px;margin-top:4px;">';
    h += '<div style="font-family:monospace;font-size:10px;color:#ff6622;letter-spacing:1px;margin-bottom:6px;">PREDICTED CYBER CONSEQUENCES</div>';
    for (var wr = 0; wr < wiResults.length; wr++) {
      h += '<div style="font-family:monospace;font-size:10px;color:#b0c4d8;margin-bottom:4px;padding-left:8px;border-left:2px solid #ff6622;">' + esc(wiResults[wr]) + '</div>';
    }
    h += '</div>';
  }
  h += '</div>';

  // Geopolitical triggers
  h += '<div style="font-family:monospace;font-size:11px;color:#4a6a8a;letter-spacing:2px;margin-bottom:8px;border-bottom:1px solid #1a3a5c;padding-bottom:6px;">ACTIVE GEOPOLITICAL TRIGGERS</div>';
  for (var gt = 0; gt < GEOPOLITICAL_TRIGGERS.length; gt++) {
    var trigger = GEOPOLITICAL_TRIGGERS[gt];
    var gtColor = trigger.riskLevel === 'CRITICAL' ? '#ff2244' : trigger.riskLevel === 'HIGH' ? '#ff6622' : trigger.riskLevel === 'ELEVATED' ? '#ffaa00' : '#00aaff';
    h += '<div style="background:#0c1020;border:1px solid #1a3a5c;border-left:3px solid ' + gtColor + ';border-radius:4px;padding:8px 10px;margin-bottom:6px;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;">';
    h += '<span style="font-family:monospace;font-size:10px;color:#e0eaf0;font-weight:bold;">' + esc(trigger.event) + '</span>';
    h += '<span style="font-family:monospace;font-size:8px;color:' + gtColor + ';font-weight:bold;">' + esc(trigger.riskLevel) + '</span>';
    h += '</div>';
    h += '<div style="font-family:monospace;font-size:9px;color:#6688aa;">' + esc(trigger.cyberImplication) + '</div>';
    h += '<div style="font-family:monospace;font-size:8px;color:#4a6a8a;margin-top:3px;">HISTORICAL PRECEDENT: ' + esc(trigger.precedent) + '</div>';
    h += '</div>';
  }

  h += '</div>'; // end right column
  h += '</div>'; // end two-column

  return h;
}


// ---------------------------------------------------------------------------
// TAB 4 — EARLY WARNING SYSTEM
// ---------------------------------------------------------------------------
function renderEarlyWarning() {
  var state = _seLoadState();
  var filterCategory = state.ewFilterCategory || 'ALL';
  var filterSeverity = state.ewFilterSeverity || 'ALL';

  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:6px 0;font-family:monospace;font-size:13px;font-weight:bold;letter-spacing:3px;border-bottom:2px solid #ff2244;">';
  h += 'TOP SECRET // SCI // NOFORN // SENTINEL EYE — EARLY WARNING';
  h += '</div>';

  // Header
  h += '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 10px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:20px;font-weight:bold;letter-spacing:2px;color:#00aaff;font-family:monospace;text-transform:uppercase;">EARLY WARNING SYSTEM</div>';
  h += '<div style="display:flex;gap:16px;font-family:monospace;font-size:11px;">';
  var critCount = 0;
  var highCount = 0;
  var warnCount = 0;
  for (var c = 0; c < EARLY_WARNING_INDICATORS.length; c++) {
    if (EARLY_WARNING_INDICATORS[c].severity === 'CRITICAL') critCount++;
    else if (EARLY_WARNING_INDICATORS[c].severity === 'HIGH') highCount++;
    else warnCount++;
  }
  h += '<span style="color:#ff2244;">' + critCount + ' CRITICAL</span>';
  h += '<span style="color:#ff6622;">' + highCount + ' HIGH</span>';
  h += '<span style="color:#ffaa00;">' + warnCount + ' WARNING</span>';
  h += '</div>';
  h += '</div>';

  // Filters
  h += '<div style="display:flex;gap:16px;padding:12px 24px;border-bottom:1px solid #0d1525;align-items:center;flex-wrap:wrap;">';
  h += '<span style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;">CATEGORY:</span>';

  var cats = ['ALL', 'INFRASTRUCTURE', 'RECON', 'SUPPLY_CHAIN', 'DARK_WEB', 'BGP', 'DNS', 'CABLE'];
  var catLabels = { ALL: 'ALL', INFRASTRUCTURE: 'INFRA STAGING', RECON: 'RECON SURGE', SUPPLY_CHAIN: 'SUPPLY CHAIN', DARK_WEB: 'DARK WEB', BGP: 'BGP ANOMALY', DNS: 'DNS ANOMALY', CABLE: 'CABLE MONITOR' };
  h += '<div style="display:flex;gap:4px;flex-wrap:wrap;">';
  for (var cfi = 0; cfi < cats.length; cfi++) {
    var cActive = filterCategory === cats[cfi];
    h += '<button class="se-filter-btn" data-action="filterEwCategory" data-value="' + cats[cfi] + '" style="background:' + (cActive ? '#00aaff' : '#0c1525') + ';color:' + (cActive ? '#000' : '#6688aa') + ';border:1px solid ' + (cActive ? '#00aaff' : '#1a3a5c') + ';border-radius:4px;padding:4px 8px;font-family:monospace;font-size:9px;cursor:pointer;letter-spacing:1px;">' + catLabels[cats[cfi]] + '</button>';
  }
  h += '</div>';

  h += '<span style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin-left:12px;">SEVERITY:</span>';
  var sevs = ['ALL', 'CRITICAL', 'HIGH', 'WARNING'];
  h += '<div style="display:flex;gap:4px;">';
  for (var si = 0; si < sevs.length; si++) {
    var sActive = filterSeverity === sevs[si];
    var sColor = sevs[si] === 'CRITICAL' ? '#ff2244' : sevs[si] === 'HIGH' ? '#ff6622' : sevs[si] === 'WARNING' ? '#ffaa00' : '#00aaff';
    h += '<button class="se-filter-btn" data-action="filterEwSeverity" data-value="' + sevs[si] + '" style="background:' + (sActive ? sColor : '#0c1525') + ';color:' + (sActive ? '#000' : sColor) + ';border:1px solid ' + (sActive ? sColor : '#1a3a5c') + ';border-radius:4px;padding:4px 8px;font-family:monospace;font-size:9px;cursor:pointer;letter-spacing:1px;">' + esc(sevs[si]) + '</button>';
  }
  h += '</div>';
  h += '</div>';

  // Auto-escalation rules panel
  h += '<div style="padding:12px 24px;">';
  h += '<div style="background:linear-gradient(135deg,rgba(255,34,68,0.08),#0a0e1a);border:1px solid #ff224440;border-radius:6px;padding:12px 14px;">';
  h += '<div style="font-family:monospace;font-size:10px;color:#ff2244;letter-spacing:2px;margin-bottom:8px;font-weight:bold;">AUTO-ESCALATION RULES</div>';
  var escRules = [
    { rule: '3+ CRITICAL indicators in same sector within 1 hour', action: 'Auto-escalate to DEFCON 2, notify CISA Director' },
    { rule: '5+ indicators from same nation-state within 4 hours', action: 'Elevate nation threat level, activate hunting teams' },
    { rule: 'BGP + DNS anomaly for same target simultaneously', action: 'Trigger infrastructure protection protocol' },
    { rule: 'Dark web zero-day + nation-state recon surge', action: 'Issue FLASH warning to affected sectors' },
    { rule: 'Supply chain probe + infrastructure staging match', action: 'Activate supply chain emergency response' }
  ];
  for (var er = 0; er < escRules.length; er++) {
    h += '<div style="display:flex;gap:10px;margin-bottom:5px;padding:4px 0;' + (er < escRules.length - 1 ? 'border-bottom:1px solid #0d1525;' : '') + '">';
    h += '<span style="font-family:monospace;font-size:9px;color:#ff6622;flex:1;">' + esc(escRules[er].rule) + '</span>';
    h += '<span style="font-family:monospace;font-size:9px;color:#44cc44;flex:1;">→ ' + esc(escRules[er].action) + '</span>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Warning indicators
  h += '<div style="padding:0 24px 16px;">';
  h += '<div style="font-family:monospace;font-size:12px;color:#4a6a8a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #1a3a5c;padding-bottom:6px;">ACTIVE INDICATORS (' + EARLY_WARNING_INDICATORS.length + ')</div>';

  var groupedEw = {};
  for (var ei = 0; ei < EARLY_WARNING_INDICATORS.length; ei++) {
    var ew = EARLY_WARNING_INDICATORS[ei];
    if (filterCategory !== 'ALL' && ew.category !== filterCategory) continue;
    if (filterSeverity !== 'ALL' && ew.severity !== filterSeverity) continue;
    if (!groupedEw[ew.category]) groupedEw[ew.category] = [];
    groupedEw[ew.category].push(ew);
  }

  var catOrder = ['INFRASTRUCTURE', 'RECON', 'SUPPLY_CHAIN', 'DARK_WEB', 'BGP', 'DNS', 'CABLE'];
  for (var co = 0; co < catOrder.length; co++) {
    var catKey = catOrder[co];
    if (!groupedEw[catKey] || groupedEw[catKey].length === 0) continue;

    var catIcon = catKey === 'INFRASTRUCTURE' ? '[G]' : catKey === 'RECON' ? '[R]' : catKey === 'SUPPLY_CHAIN' ? '[S]' : catKey === 'DARK_WEB' ? '[D]' : catKey === 'BGP' ? '[B]' : catKey === 'DNS' ? '[N]' : '[~]';
    h += '<div style="margin-bottom:12px;">';
    h += '<div style="font-family:monospace;font-size:10px;color:#00aaff;letter-spacing:2px;margin-bottom:6px;">' + catIcon + ' ' + (catLabels[catKey] || catKey) + ' (' + groupedEw[catKey].length + ')</div>';

    for (var ewi = 0; ewi < groupedEw[catKey].length; ewi++) {
      var indicator = groupedEw[catKey][ewi];
      var ewColor = indicator.severity === 'CRITICAL' ? '#ff2244' : indicator.severity === 'HIGH' ? '#ff6622' : '#ffaa00';

      h += '<div class="se-ew-card" style="background:#0c1020;border:1px solid #1a3a5c;border-left:3px solid ' + ewColor + ';border-radius:4px;padding:10px 12px;margin-bottom:6px;">';

      h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">';
      h += '<div style="display:flex;align-items:center;gap:8px;">';
      h += '<span style="font-family:monospace;font-size:9px;color:#4a6a8a;">' + esc(indicator.timestamp) + '</span>';
      h += '<span style="font-family:monospace;font-size:9px;background:' + ewColor + ';color:#000;padding:1px 6px;border-radius:3px;font-weight:bold;">' + esc(indicator.severity) + '</span>';
      if (indicator.nationState) {
        h += '<span style="font-family:monospace;font-size:9px;color:#ff6622;">[' + esc(indicator.nationState) + ']</span>';
      }
      h += '</div>';
      h += '<span style="font-family:monospace;font-size:9px;color:#4a6a8a;">' + esc(indicator.source) + '</span>';
      h += '</div>';

      h += '<div style="font-family:monospace;font-size:10px;color:#b0c4d8;line-height:1.4;margin-bottom:6px;">' + esc(indicator.description) + '</div>';

      // Confidence bar
      h += '<div style="display:flex;align-items:center;gap:6px;">';
      h += '<span style="font-family:monospace;font-size:8px;color:#4a6a8a;width:65px;">CONFIDENCE</span>';
      h += '<div style="flex:1;background:#0a1020;border-radius:2px;height:4px;overflow:hidden;">';
      h += '<div style="width:' + indicator.confidence + '%;height:100%;background:' + ewColor + ';border-radius:2px;"></div>';
      h += '</div>';
      h += '<span style="font-family:monospace;font-size:8px;color:' + ewColor + ';">' + indicator.confidence + '%</span>';
      h += '</div>';

      if (indicator.action) {
        h += '<div style="font-family:monospace;font-size:9px;color:#44cc44;margin-top:4px;">RECOMMENDED: ' + esc(indicator.action) + '</div>';
      }

      h += '</div>'; // end ew card
    }

    h += '</div>'; // end category group
  }

  h += '</div>'; // end indicators section

  return h;
}


// ---------------------------------------------------------------------------
// TAB 5 — APT TRACKING
// ---------------------------------------------------------------------------
function renderAptTrack() {
  var state = _seLoadState();
  var filterNation = state.aptFilterNation || 'ALL';
  var filterActive = state.aptFilterActive || 'ALL';
  var filterThreat = state.aptFilterThreat || 'ALL';
  var searchQuery = state.aptSearch || '';
  var expandedApt = state.expandedApt || null;

  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:6px 0;font-family:monospace;font-size:13px;font-weight:bold;letter-spacing:3px;border-bottom:2px solid #ff2244;">';
  h += 'TOP SECRET // SCI // NOFORN // SENTINEL EYE — APT TRACKING';
  h += '</div>';

  // Header
  h += '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 24px 10px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:20px;font-weight:bold;letter-spacing:2px;color:#00aaff;font-family:monospace;text-transform:uppercase;">APT GROUP TRACKING</div>';
  var activeCount = 0;
  for (var ac = 0; ac < APT_GROUPS.length; ac++) { if (APT_GROUPS[ac].active) activeCount++; }
  h += '<div style="font-family:monospace;font-size:11px;color:#4a6a8a;">' + APT_GROUPS.length + ' GROUPS TRACKED • <span style="color:#ff6622;">' + activeCount + ' ACTIVE</span></div>';
  h += '</div>';

  // Search + filters
  h += '<div style="display:flex;gap:12px;padding:12px 24px;border-bottom:1px solid #0d1525;align-items:center;flex-wrap:wrap;">';

  // Search box
  h += '<div style="flex:0 0 200px;">';
  h += '<input type="text" id="se-apt-search" data-action="aptSearch" placeholder="SEARCH GROUPS..." value="' + esc(searchQuery) + '" style="width:100%;background:#060a14;border:1px solid #1a3a5c;color:#b0c4d8;padding:6px 10px;font-family:monospace;font-size:10px;border-radius:4px;letter-spacing:1px;" />';
  h += '</div>';

  // Nation filter
  h += '<span style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:1px;">NATION:</span>';
  h += '<select id="se-apt-nation-filter" data-action="aptFilterNation" style="background:#0c1525;border:1px solid #1a3a5c;color:#b0c4d8;padding:4px 8px;font-family:monospace;font-size:10px;border-radius:4px;">';
  h += '<option value="ALL"' + (filterNation === 'ALL' ? ' selected' : '') + '>ALL NATIONS</option>';
  var nationCodes = {};
  for (var anc = 0; anc < APT_GROUPS.length; anc++) {
    nationCodes[APT_GROUPS[anc].nationCode] = APT_GROUPS[anc].nation;
  }
  var ncKeys = Object.keys(nationCodes);
  for (var nck = 0; nck < ncKeys.length; nck++) {
    h += '<option value="' + esc(ncKeys[nck]) + '"' + (filterNation === ncKeys[nck] ? ' selected' : '') + '>' + esc(nationCodes[ncKeys[nck]]) + '</option>';
  }
  h += '</select>';

  // Active filter
  h += '<div style="display:flex;gap:4px;">';
  var activeFilters = ['ALL', 'ACTIVE', 'INACTIVE'];
  for (var afi = 0; afi < activeFilters.length; afi++) {
    var afActive = filterActive === activeFilters[afi];
    h += '<button class="se-filter-btn" data-action="aptFilterActive" data-value="' + activeFilters[afi] + '" style="background:' + (afActive ? '#00aaff' : '#0c1525') + ';color:' + (afActive ? '#000' : '#6688aa') + ';border:1px solid ' + (afActive ? '#00aaff' : '#1a3a5c') + ';border-radius:4px;padding:4px 8px;font-family:monospace;font-size:9px;cursor:pointer;letter-spacing:1px;">' + activeFilters[afi] + '</button>';
  }
  h += '</div>';

  h += '</div>';

  // Cross-group correlation summary
  h += '<div style="padding:12px 24px;">';
  h += '<div style="background:linear-gradient(135deg,rgba(0,170,255,0.06),#0a0e1a);border:1px solid #1a3a5c;border-radius:6px;padding:12px 14px;">';
  h += '<div style="font-family:monospace;font-size:10px;color:#00aaff;letter-spacing:2px;margin-bottom:8px;font-weight:bold;">CROSS-GROUP CORRELATIONS</div>';
  var correlations = [
    { groups: 'APT29 + APT28', relation: 'Shared target sets in European government networks, sequential operations observed' },
    { groups: 'Lazarus + Andariel + Kimsuky', relation: 'Shared infrastructure and tooling, coordinated campaign timing, all RGB Bureau 121' },
    { groups: 'APT41 + Volt Typhoon', relation: 'Overlapping MSS tasking, shared living-off-the-land techniques, pre-positioning in US CRIT-INFRA' },
    { groups: 'APT33 + APT34 + MuddyWater', relation: 'IRGC umbrella coordination, shared exploit development, Middle East energy sector focus' },
    { groups: 'Sandworm + Turla', relation: 'GRU-FSB collaboration on Ukraine operations, shared zero-day usage and target handoffs' }
  ];
  for (var cri = 0; cri < correlations.length; cri++) {
    h += '<div style="display:flex;gap:10px;margin-bottom:5px;padding:4px 0;' + (cri < correlations.length - 1 ? 'border-bottom:1px solid #0d1525;' : '') + '">';
    h += '<span style="font-family:monospace;font-size:10px;color:#ff6622;font-weight:bold;min-width:180px;">' + esc(correlations[cri].groups) + '</span>';
    h += '<span style="font-family:monospace;font-size:9px;color:#8899bb;">' + esc(correlations[cri].relation) + '</span>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // APT group cards
  h += '<div style="padding:0 24px 16px;display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">';

  for (var api = 0; api < APT_GROUPS.length; api++) {
    var apt = APT_GROUPS[api];

    // Apply filters
    if (filterNation !== 'ALL' && apt.nationCode !== filterNation) continue;
    if (filterActive === 'ACTIVE' && !apt.active) continue;
    if (filterActive === 'INACTIVE' && apt.active) continue;
    if (searchQuery) {
      var sq = searchQuery.toUpperCase();
      var nameMatch = apt.name.toUpperCase().indexOf(sq) >= 0;
      var aliasMatch = false;
      for (var ami = 0; ami < apt.aliases.length; ami++) {
        if (apt.aliases[ami].toUpperCase().indexOf(sq) >= 0) { aliasMatch = true; break; }
      }
      if (!nameMatch && !aliasMatch) continue;
    }

    var isAptExpanded = expandedApt === apt.name;
    var aptBorder = apt.active ? (apt.threatLevel === 'CRITICAL' ? '#ff2244' : apt.threatLevel === 'HIGH' ? '#ff6622' : '#ffaa00') : '#1a3a5c';

    h += '<div class="se-apt-card" data-action="toggleApt" data-value="' + esc(apt.name) + '" style="background:linear-gradient(135deg,rgba(10,14,26,0.9),#080b12);border:1px solid ' + aptBorder + ';border-radius:6px;overflow:hidden;cursor:pointer;">';

    // Card header
    h += '<div style="padding:12px 14px;display:flex;align-items:center;gap:10px;">';
    h += '<div style="font-size:20px;">' + esc(apt.nationFlag) + '</div>';
    h += '<div style="flex:1;">';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<span style="font-family:monospace;font-size:13px;color:#e0eaf0;font-weight:bold;letter-spacing:1px;">' + esc(apt.name) + '</span>';
    h += '<span style="font-family:monospace;font-size:8px;background:' + (apt.active ? '#ff2244' : '#334455') + ';color:' + (apt.active ? '#fff' : '#6688aa') + ';padding:2px 6px;border-radius:3px;font-weight:bold;">' + (apt.active ? 'ACTIVE' : 'DORMANT') + '</span>';
    h += '</div>';
    h += '<div style="font-family:monospace;font-size:9px;color:#6688aa;margin-top:2px;">' + esc(apt.aliases.join(' / ')) + '</div>';
    h += '</div>';
    if (apt.threatLevel) {
      h += '<span style="font-family:monospace;font-size:9px;color:' + aptBorder + ';font-weight:bold;">' + esc(apt.threatLevel) + '</span>';
    }
    h += '<span style="font-family:monospace;font-size:10px;color:#4a6a8a;">' + (isAptExpanded ? '▲' : '▼') + '</span>';
    h += '</div>';

    // Quick info row
    h += '<div style="padding:0 14px 10px;display:flex;gap:8px;flex-wrap:wrap;">';
    h += '<span style="font-family:monospace;font-size:8px;background:#0c1525;border:1px solid #1a3a5c;color:#8899bb;padding:2px 6px;border-radius:3px;">' + esc(apt.nation) + '</span>';
    h += '<span style="font-family:monospace;font-size:8px;background:#0c1525;border:1px solid #1a3a5c;color:#8899bb;padding:2px 6px;border-radius:3px;">CAMPAIGNS: ' + apt.campaigns.length + '</span>';
    h += '<span style="font-family:monospace;font-size:8px;background:#0c1525;border:1px solid #1a3a5c;color:#8899bb;padding:2px 6px;border-radius:3px;">TOOLS: ' + apt.tools.length + '</span>';
    h += '</div>';

    // Expanded details
    if (isAptExpanded) {
      h += '<div style="border-top:1px solid #1a3a5c;padding:14px;background:rgba(0,10,20,0.5);">';

      // Active campaigns
      h += '<div style="font-family:monospace;font-size:10px;color:#ff6622;letter-spacing:2px;margin-bottom:6px;">ACTIVE CAMPAIGNS</div>';
      for (var cai = 0; cai < apt.campaigns.length; cai++) {
        var camp = apt.campaigns[cai];
        h += '<div style="background:#060a14;border:1px solid #1a3a5c;border-radius:4px;padding:8px 10px;margin-bottom:4px;">';
        h += '<div style="font-family:monospace;font-size:10px;color:#e0eaf0;font-weight:bold;">' + esc(camp.name) + '</div>';
        h += '<div style="font-family:monospace;font-size:9px;color:#6688aa;margin-top:2px;">Target: ' + esc(camp.target) + ' | Since: ' + esc(camp.since) + ' | Status: <span style="color:' + (camp.status === 'ACTIVE' ? '#ff2244' : '#44cc44') + ';">' + esc(camp.status) + '</span></div>';
        h += '</div>';
      }

      // Tools
      h += '<div style="font-family:monospace;font-size:10px;color:#00aaff;letter-spacing:2px;margin:10px 0 6px;">TOOLING</div>';
      h += '<div style="display:flex;gap:6px;flex-wrap:wrap;">';
      for (var ti = 0; ti < apt.tools.length; ti++) {
        h += '<span style="font-family:monospace;font-size:9px;background:#0c1525;border:1px solid #1a3a5c;color:#b0c4d8;padding:3px 8px;border-radius:3px;">' + esc(apt.tools[ti]) + '</span>';
      }
      h += '</div>';

      // MITRE ATT&CK coverage
      h += '<div style="font-family:monospace;font-size:10px;color:#ffaa00;letter-spacing:2px;margin:10px 0 6px;">MITRE ATT&CK TECHNIQUES</div>';
      h += '<div style="display:flex;gap:4px;flex-wrap:wrap;">';
      for (var mi = 0; mi < apt.mitreTechniques.length; mi++) {
        h += '<span style="font-family:monospace;font-size:8px;background:rgba(255,170,0,0.1);border:1px solid #ffaa0040;color:#ffaa00;padding:2px 6px;border-radius:3px;">' + esc(apt.mitreTechniques[mi]) + '</span>';
      }
      h += '</div>';

      // Activity heatmap (text-based — hours vs days)
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 6px;">ACTIVITY HEATMAP (UTC)</div>';
      h += '<div style="overflow-x:auto;">';
      h += '<table style="border-collapse:collapse;font-family:monospace;font-size:8px;">';
      var days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
      // Header row
      h += '<tr><td style="padding:2px 4px;color:#4a6a8a;"></td>';
      for (var hr = 0; hr < 24; hr += 3) {
        h += '<td style="padding:2px 3px;color:#4a6a8a;text-align:center;">' + (hr < 10 ? '0' : '') + hr + '</td>';
      }
      h += '</tr>';

      for (var di = 0; di < days.length; di++) {
        h += '<tr><td style="padding:2px 4px;color:#4a6a8a;">' + days[di] + '</td>';
        for (var hri = 0; hri < 24; hri += 3) {
          var activityLevel = apt.activityHeatmap ? apt.activityHeatmap[di * 8 + Math.floor(hri / 3)] || 0 : Math.floor(Math.random() * 5);
          var heatColor = activityLevel === 0 ? '#0a1020' : activityLevel === 1 ? '#0c2a1a' : activityLevel === 2 ? '#1a4a2a' : activityLevel === 3 ? '#2a6a3a' : '#44cc44';
          h += '<td style="padding:2px 3px;text-align:center;"><div style="width:14px;height:10px;background:' + heatColor + ';border-radius:2px;margin:0 auto;"></div></td>';
        }
        h += '</tr>';
      }
      h += '</table>';
      h += '</div>';

      // Infrastructure stats
      h += '<div style="font-family:monospace;font-size:10px;color:#4a6a8a;letter-spacing:2px;margin:12px 0 6px;">INFRASTRUCTURE</div>';
      h += '<div style="display:flex;gap:12px;">';
      h += '<div style="flex:1;background:#060a14;border:1px solid #1a3a5c;border-radius:4px;padding:8px;text-align:center;">';
      h += '<div style="font-family:monospace;font-size:16px;color:#ff6622;font-weight:bold;">' + (apt.infrastructure ? apt.infrastructure.domains : Math.floor(Math.random() * 200 + 50)) + '</div>';
      h += '<div style="font-family:monospace;font-size:8px;color:#4a6a8a;">DOMAINS</div>';
      h += '</div>';
      h += '<div style="flex:1;background:#060a14;border:1px solid #1a3a5c;border-radius:4px;padding:8px;text-align:center;">';
      h += '<div style="font-family:monospace;font-size:16px;color:#00aaff;font-weight:bold;">' + (apt.infrastructure ? apt.infrastructure.ips : Math.floor(Math.random() * 100 + 20)) + '</div>';
      h += '<div style="font-family:monospace;font-size:8px;color:#4a6a8a;">IP ADDRESSES</div>';
      h += '</div>';
      h += '<div style="flex:1;background:#060a14;border:1px solid #1a3a5c;border-radius:4px;padding:8px;text-align:center;">';
      h += '<div style="font-family:monospace;font-size:16px;color:#ffaa00;font-weight:bold;">' + (apt.infrastructure ? apt.infrastructure.c2Servers : Math.floor(Math.random() * 30 + 5)) + '</div>';
      h += '<div style="font-family:monospace;font-size:8px;color:#4a6a8a;">C2 SERVERS</div>';
      h += '</div>';
      h += '</div>';

      h += '</div>'; // end expanded
    }

    h += '</div>'; // end apt card
  }

  h += '</div>'; // end grid

  return h;
}


// ---------------------------------------------------------------------------
// HELPER — What-If scenario results
// ---------------------------------------------------------------------------
function _getWhatIfResults(scenario) {
  var results = {
    'taiwan_invasion': [
      'PLA SSF launches coordinated DDoS against Taiwanese financial sector and government portals',
      'Volt Typhoon activates pre-positioned access in US Pacific Command logistics networks',
      'APT41 deploys wiper malware targeting semiconductor supply chain coordination systems',
      'Massive BGP hijacking of routes to/from Taiwan, effectively isolating internet connectivity',
      'Salt Typhoon activates collection in US telecom networks monitoring military communications',
      'Cyber operations against Japan/Philippines military bases supporting US force projection',
      'Disinformation operations across social media platforms to shape global narrative',
      'Estimated 48-72 hours of degraded critical infrastructure across Indo-Pacific region'
    ],
    'us_iran_strike': [
      'IRGC Cyber Command retaliates with Shamoon-variant wiper targeting Gulf state oil/gas SCADA',
      'MuddyWater deploys destructive payloads in pre-positioned US financial sector access',
      'APT33 launches DDoS campaign against US government services and military logistics',
      'Hezbollah-affiliated cyber units target Israeli critical infrastructure',
      'Ransomware campaign against US healthcare sector as distraction/punishment operation',
      'DNS hijacking of major US financial institution domains',
      'Estimated $2-5B in economic damage from cyber retaliation within first week'
    ],
    'russia_nato': [
      'Sandworm deploys Industroyer-variant against NATO member power grids',
      'APT29 activates dormant access in European government networks for intelligence collection',
      'Turla deploys satellite-hijacking capability to intercept NATO communications',
      'Massive disinformation campaign targeting NATO member populations',
      'Coordinated ransomware attacks against European logistics and transportation networks',
      'Undersea cable sabotage operations in North Atlantic',
      'APT28 targets NATO command-and-control communication systems'
    ],
    'nk_test': [
      'Lazarus Group launches cryptocurrency theft campaign to fund weapons program',
      'Kimsuky increases spear-phishing against South Korean defense and nuclear researchers',
      'Andariel probes US/ROK joint military network perimeter',
      'Increased scanning of South Korean financial sector infrastructure',
      'Potential WannaCry-variant deployment as show of force'
    ],
    'sanctions': [
      'Targeted espionage against sanctions-enforcing financial institutions',
      'Increased cryptocurrency theft operations by sanctioned nation-state actors',
      'Retaliatory cyber operations against sanctioning nation critical infrastructure',
      'Accelerated development of alternative payment systems to evade sanctions',
      'IP theft campaigns targeting sanctioning nations\' key technology sectors'
    ],
    'election': [
      'APT28/29 deploy influence operations across social media platforms',
      'Hack-and-leak operations targeting political party infrastructure',
      'Voter registration database probing and potential manipulation',
      'Media organization targeting for credential theft and narrative manipulation',
      'DDoS attacks on election reporting infrastructure on election day'
    ],
    'cable_cut': [
      'Traffic rerouting through adversary-controlled paths enabling SIGINT collection',
      'BGP manipulation to redirect critical financial transactions',
      'Degraded connectivity enabling man-in-the-middle attacks on rerouted traffic',
      'Economic impact from reduced bandwidth and increased latency in affected regions',
      'Potential cover for coordinated cyber operation during degraded monitoring'
    ],
    'grid_attack': [
      'Cascading power failures affecting civilian and military infrastructure',
      'Follow-on attacks targeting backup generator SCADA systems',
      'Communications degradation in affected region enabling further operations',
      'Water treatment plant disruptions due to power loss',
      'Financial sector disruptions from data center power failures',
      'Military base backup power systems targeted to extend operational window'
    ]
  };
  return results[scenario] || ['No scenario model available for this trigger.'];
}

// SENTINEL EYE — Tabs 6-10 Render Functions
// Counter Operations, Critical Infrastructure Shield, Intelligence Fusion, War Simulator, Command Authority

// ============================================================================
// TAB 6: COUNTER OPERATIONS
// ============================================================================
function renderCounterOps() {
  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:4px 0;font-family:monospace;font-size:11px;letter-spacing:3px;font-weight:bold;">TOP SECRET // SCI // NOFORN // CYBER OPERATIONS</div>';

  // Section header
  h += '<div style="padding:20px 24px 0 24px;">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">';
  h += '<div>';
  h += '<h2 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">COUNTER OPERATIONS CENTER</h2>';
  h += '<div style="color:#667;font-size:12px;font-family:monospace;margin-top:4px;letter-spacing:1px;">PLAN &bull; EXECUTE &bull; ASSESS CYBER COUNTER-OPERATIONS</div>';
  h += '</div>';
  h += '<div style="display:flex;gap:10px;">';
  h += '<div style="background:linear-gradient(135deg,#1a0a0a,#2a1515);border:1px solid #ff2244;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#ff2244;font-size:10px;font-family:monospace;letter-spacing:1px;">ACTIVE OPS</div>';
  h += '<div style="color:#ff4466;font-size:22px;font-weight:bold;font-family:monospace;">3</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#0a1a0a,#152a15);border:1px solid #00ff88;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#00ff88;font-size:10px;font-family:monospace;letter-spacing:1px;">COMPLETED</div>';
  h += '<div style="color:#00ff88;font-size:22px;font-weight:bold;font-family:monospace;">47</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#1a1a0a,#2a2a15);border:1px solid #ffaa00;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#ffaa00;font-size:10px;font-family:monospace;letter-spacing:1px;">PENDING AUTH</div>';
  h += '<div style="color:#ffaa00;font-size:22px;font-weight:bold;font-family:monospace;">5</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Main grid layout
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 24px 24px;">';

  // ---- Threat Assessment Panel ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;grid-column:1/3;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ff2244;margin-right:8px;">&#9632;</span>THREAT ASSESSMENT — PROPOSED COUNTER-OPERATIONS</div>';

  var threatAssessments = [
    { name: 'OP IRON VEIL', target: 'GRU Unit 74455 C2 Infrastructure', risk: 'HIGH', status: 'AWAITING AUTHORIZATION', adversary: 'Russia / Sandworm', objective: 'Disrupt C2 channels supporting active campaign against NATO allies', collateral: 'MODERATE — potential disruption to legitimate services on shared hosting', timeframe: '48 hours', authority: 'Title 10 / EXORD 2024-0847' },
    { name: 'OP SILENT THUNDER', target: 'APT41 Staging Servers', risk: 'MEDIUM', status: 'PLANNING PHASE', adversary: 'China / MSS', objective: 'Identify and map infrastructure supporting IP theft campaign', collateral: 'LOW — targeted infrastructure only', timeframe: '72 hours', authority: 'Title 50 / NSPM-13' },
    { name: 'OP BURNING SAND', target: 'IRGC Cyber Command relay nodes', risk: 'HIGH', status: 'ACTIVE — PHASE 2', adversary: 'Iran / APT33', objective: 'Degrade capability to launch destructive attacks on energy sector', collateral: 'MODERATE — regional ISP path disruption possible', timeframe: 'Ongoing', authority: 'Title 10 / EXORD 2024-0912' }
  ];

  h += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">';
  for (var ta = 0; ta < threatAssessments.length; ta++) {
    var threat = threatAssessments[ta];
    var riskColor = threat.risk === 'HIGH' ? '#ff2244' : threat.risk === 'MEDIUM' ? '#ffaa00' : '#00ff88';
    var statusColor = threat.status.indexOf('ACTIVE') >= 0 ? '#00ff88' : threat.status.indexOf('AWAITING') >= 0 ? '#ffaa00' : '#00aaff';
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#101828);border:1px solid ' + riskColor + '44;border-radius:6px;padding:14px;position:relative;overflow:hidden;">';
    h += '<div style="position:absolute;top:0;right:0;background:' + riskColor + ';color:#000;font-size:9px;font-family:monospace;font-weight:bold;padding:2px 10px;border-radius:0 6px 0 6px;">' + esc(threat.risk) + ' RISK</div>';
    h += '<div style="color:#fff;font-size:14px;font-weight:bold;font-family:monospace;margin-bottom:6px;">' + esc(threat.name) + '</div>';
    h += '<div style="color:#889;font-size:11px;font-family:monospace;margin-bottom:10px;">' + esc(threat.adversary) + '</div>';
    h += '<div style="margin-bottom:8px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;text-transform:uppercase;">TARGET</div>';
    h += '<div style="color:#dde;font-size:11px;font-family:monospace;">' + esc(threat.target) + '</div>';
    h += '</div>';
    h += '<div style="margin-bottom:8px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;text-transform:uppercase;">OBJECTIVE</div>';
    h += '<div style="color:#aab;font-size:11px;font-family:monospace;">' + esc(threat.objective) + '</div>';
    h += '</div>';
    h += '<div style="margin-bottom:8px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;text-transform:uppercase;">COLLATERAL ESTIMATE</div>';
    h += '<div style="color:' + riskColor + ';font-size:11px;font-family:monospace;">' + esc(threat.collateral) + '</div>';
    h += '</div>';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:8px;border-top:1px solid #1a2a44;">';
    h += '<div style="color:' + statusColor + ';font-size:10px;font-family:monospace;font-weight:bold;">' + esc(threat.status) + '</div>';
    h += '<div style="color:#667;font-size:10px;font-family:monospace;">' + esc(threat.timeframe) + '</div>';
    h += '</div>';
    h += '<div style="color:#445;font-size:9px;font-family:monospace;margin-top:6px;">' + esc(threat.authority) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // ---- Operation Planning Interface ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#9881;</span>OPERATION PLANNING PHASES</div>';

  var opPhases = [
    { phase: '01', name: 'RECONNAISSANCE', desc: 'Map adversary network topology, identify key infrastructure nodes, gather intelligence on defensive posture', status: 'active', icon: '&#128269;', tools: 'SIGINT collection, OSINT aggregation, network scanning, social engineering assessment' },
    { phase: '02', name: 'ACCESS DEVELOPMENT', desc: 'Develop initial access vectors, identify exploitable vulnerabilities, prepare credentials and implants', status: 'pending', icon: '&#128273;', tools: 'Vulnerability research, exploit development, credential harvesting, supply chain analysis' },
    { phase: '03', name: 'PAYLOAD DELIVERY', desc: 'Deploy access tools via approved vectors, establish initial foothold on target infrastructure', status: 'pending', icon: '&#128640;', tools: 'Spearphishing, watering hole, supply chain injection, physical access' },
    { phase: '04', name: 'PERSISTENCE', desc: 'Establish redundant access, deploy persistence mechanisms, create backup communication channels', status: 'pending', icon: '&#128274;', tools: 'Rootkits, scheduled tasks, registry keys, firmware implants, legitimate credentials' },
    { phase: '05', name: 'INTELLIGENCE COLLECTION', desc: 'Exfiltrate target data, monitor adversary communications, document infrastructure details', status: 'pending', icon: '&#128200;', tools: 'Keyloggers, screen capture, network sniffing, database extraction, email collection' },
    { phase: '06', name: 'DISRUPTION / DEGRADATION', desc: 'Execute authorized effects against target, degrade adversary capability, deny access to key resources', status: 'pending', icon: '&#9889;', tools: 'Data wiping, service disruption, infrastructure destruction, capability denial' }
  ];

  for (var op = 0; op < opPhases.length; op++) {
    var phase = opPhases[op];
    var phaseColor = phase.status === 'active' ? '#00aaff' : '#334';
    var phaseBorder = phase.status === 'active' ? '#00aaff' : '#1a2a44';
    var phaseGlow = phase.status === 'active' ? 'box-shadow:0 0 12px #00aaff22;' : '';
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#0d1225);border:1px solid ' + phaseBorder + ';border-radius:6px;padding:12px;margin-bottom:8px;' + phaseGlow + '">';
    h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">';
    h += '<div style="background:' + phaseColor + ';color:#000;font-size:10px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;">PHASE ' + esc(phase.phase) + '</div>';
    h += '<div style="color:' + (phase.status === 'active' ? '#fff' : '#778') + ';font-size:13px;font-family:monospace;font-weight:bold;letter-spacing:1px;">' + phase.icon + ' ' + esc(phase.name) + '</div>';
    if (phase.status === 'active') {
      h += '<div style="margin-left:auto;background:#00aaff22;color:#00aaff;font-size:9px;font-family:monospace;padding:2px 8px;border-radius:3px;animation:se-pulse 2s ease-in-out infinite;">&#9679; ACTIVE</div>';
    }
    h += '</div>';
    h += '<div style="color:#889;font-size:11px;font-family:monospace;margin-bottom:6px;line-height:1.5;">' + esc(phase.desc) + '</div>';
    h += '<div style="color:#556;font-size:10px;font-family:monospace;"><span style="color:#667;letter-spacing:1px;">TOOLS:</span> ' + esc(phase.tools) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // ---- Escalation Ladder ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#9650;</span>ESCALATION LADDER</div>';

  var escalationLevels = [
    { level: 4, name: 'STRATEGIC OFFENSIVE', desc: 'Full-scale cyber operations against adversary national infrastructure', color: '#ff2244', auth: 'Presidential directive, NSC approval, Congressional notification', actions: 'Critical infrastructure disruption, strategic capability denial, combined cyber-kinetic operations', current: false },
    { level: 3, name: 'OFFENSIVE CYBER OPERATIONS', desc: 'Targeted offensive actions against identified adversary systems', color: '#ff6644', auth: 'SECDEF approval, EXORD required, Title 10 authority', actions: 'C2 disruption, data destruction, infrastructure degradation, implant activation', current: false },
    { level: 2, name: 'ACTIVE CYBER DEFENSE', desc: 'Defensive operations extending beyond own network boundaries', color: '#ffaa00', auth: 'CYBERCOM Commander approval, ROE authorization', actions: 'Threat hunting on foreign networks, adversary infrastructure mapping, counter-intrusion', current: true },
    { level: 1, name: 'DEFENSIVE OPERATIONS', desc: 'Protection and defense of own networks and systems', color: '#00ff88', auth: 'Standing ROE, commander discretion', actions: 'Network monitoring, intrusion detection, incident response, patching, hardening', current: false }
  ];

  for (var el = 0; el < escalationLevels.length; el++) {
    var eLvl = escalationLevels[el];
    var isCurrentStr = eLvl.current ? 'border-left:4px solid ' + eLvl.color + ';box-shadow:0 0 20px ' + eLvl.color + '22;' : 'border-left:4px solid #1a2a44;opacity:0.7;';
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#0d1225);border:1px solid ' + (eLvl.current ? eLvl.color + '44' : '#1a2a44') + ';border-radius:6px;padding:12px;margin-bottom:8px;' + isCurrentStr + '">';
    h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">';
    h += '<div style="background:' + eLvl.color + ';color:#000;font-size:11px;font-family:monospace;font-weight:bold;padding:3px 10px;border-radius:3px;">LEVEL ' + esc(eLvl.level) + '</div>';
    h += '<div style="color:' + eLvl.color + ';font-size:14px;font-family:monospace;font-weight:bold;letter-spacing:1px;">' + esc(eLvl.name) + '</div>';
    if (eLvl.current) {
      h += '<div style="margin-left:auto;background:' + eLvl.color + '22;color:' + eLvl.color + ';font-size:9px;font-family:monospace;padding:3px 10px;border-radius:3px;">&#9654; CURRENT POSTURE</div>';
    }
    h += '</div>';
    h += '<div style="color:#aab;font-size:11px;font-family:monospace;margin-bottom:8px;">' + esc(eLvl.desc) + '</div>';
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">AUTHORIZATION</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(eLvl.auth) + '</div></div>';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">AUTHORIZED ACTIONS</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(eLvl.actions) + '</div></div>';
    h += '</div>';
    h += '</div>';
    if (el < escalationLevels.length - 1) {
      h += '<div style="text-align:center;color:' + eLvl.color + '44;font-size:16px;margin:2px 0;">&#9660;</div>';
    }
  }
  h += '</div>';

  // ---- ROE Compliance Checker ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00ff88;margin-right:8px;">&#9745;</span>ROE COMPLIANCE CHECKER</div>';

  var roeChecklist = [
    { question: 'Has the operation been authorized by the appropriate authority?', category: 'Authorization', options: ['Presidential Directive', 'SECDEF EXORD', 'CYBERCOM Order', 'Standing ROE'] },
    { question: 'Is the target positively identified as adversary infrastructure?', category: 'Targeting', options: ['Confirmed hostile', 'High confidence', 'Moderate confidence', 'Unconfirmed'] },
    { question: 'Has collateral damage been assessed and minimized?', category: 'Proportionality', options: ['No collateral expected', 'Minimal collateral', 'Moderate collateral', 'Significant collateral'] },
    { question: 'Is the proposed action proportional to the threat?', category: 'Proportionality', options: ['Proportional', 'Slightly elevated', 'Escalatory', 'Disproportionate'] },
    { question: 'Are effects reversible if required?', category: 'Reversibility', options: ['Fully reversible', 'Partially reversible', 'Difficult to reverse', 'Irreversible'] },
    { question: 'Has legal review been completed?', category: 'Legal', options: ['JAG approved', 'Under review', 'Conditional approval', 'Not reviewed'] },
    { question: 'Is Congressional notification required?', category: 'Notification', options: ['Not required', 'Required — submitted', 'Required — pending', 'Unknown'] },
    { question: 'Does the operation comply with international law obligations?', category: 'Int\'l Law', options: ['Compliant', 'Arguable', 'Potential violation', 'Non-compliant'] }
  ];

  for (var rc = 0; rc < roeChecklist.length; rc++) {
    var roe = roeChecklist[rc];
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:10px;margin-bottom:6px;">';
    h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">';
    h += '<div style="background:#00aaff22;color:#00aaff;font-size:9px;font-family:monospace;padding:2px 6px;border-radius:2px;">' + esc(roe.category) + '</div>';
    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;">' + esc(roe.question) + '</div>';
    h += '</div>';
    h += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
    for (var ro = 0; ro < roe.options.length; ro++) {
      var optColor = ro === 0 ? '#00ff88' : ro === 1 ? '#00aaff' : ro === 2 ? '#ffaa00' : '#ff2244';
      var isSelected = ro === 0 ? 'background:' + optColor + '22;border-color:' + optColor + ';color:' + optColor + ';' : 'background:transparent;border-color:#334;color:#667;';
      h += '<div style="font-size:10px;font-family:monospace;padding:4px 10px;border:1px solid;border-radius:3px;cursor:pointer;' + isSelected + '">';
      h += esc(roe.options[ro]);
      h += '</div>';
    }
    h += '</div>';
    h += '</div>';
  }

  h += '<div style="margin-top:12px;background:#00ff8811;border:1px solid #00ff8844;border-radius:6px;padding:12px;text-align:center;">';
  h += '<div style="color:#00ff88;font-size:14px;font-family:monospace;font-weight:bold;letter-spacing:1px;">ROE COMPLIANCE: APPROVED</div>';
  h += '<div style="color:#889;font-size:10px;font-family:monospace;margin-top:4px;">All checks passed — operation is within authorized parameters</div>';
  h += '</div>';
  h += '</div>';

  // ---- Legal Authority Matrix ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#9878;</span>LEGAL AUTHORITY MATRIX</div>';

  var legalAuthorities = [
    { authority: 'Title 10 U.S.C.', section: 'Armed Forces', scope: 'Military cyber operations under DOD authority', approval: 'SECDEF / POTUS', ops: 'Offensive military cyber ops, defend-forward operations, battlefield preparation', status: 'ACTIVE' },
    { authority: 'Title 50 U.S.C.', section: 'War & National Defense', scope: 'Covert cyber operations under intelligence authority', approval: 'POTUS Finding, Congressional Gang of Eight', ops: 'Covert action, espionage, sabotage under intelligence authorities', status: 'ACTIVE' },
    { authority: 'EO 12333', section: 'Intelligence Activities', scope: 'United States intelligence community framework', approval: 'DNI / Agency Head', ops: 'Foreign intelligence collection, counterintelligence activities', status: 'ACTIVE' },
    { authority: 'NSPM-13', section: 'Cyber Operations Policy', scope: 'Streamlined approval for offensive cyber operations', approval: 'SECDEF with NSC coordination', ops: 'Enabled defend-forward operations without individual presidential approval', status: 'ACTIVE' },
    { authority: 'PPD-20', section: 'Cyber Operations Policy', scope: 'Presidential policy directive on cyber operations (superseded by NSPM-13)', approval: 'NSC / POTUS', ops: 'Originally required presidential approval for significant cyber effects', status: 'SUPERSEDED' },
    { authority: 'AUMF 2001', section: 'Authorization for Use of Military Force', scope: 'Authority for military operations against designated terrorist organizations', approval: 'Congressional authorization', ops: 'Cyber operations against designated entities under existing AUMF', status: 'ACTIVE' },
    { authority: 'Tallinn Manual 2.0', section: 'International Law Framework', scope: 'Non-binding guidance on international law applied to cyber operations', approval: 'Reference framework', ops: 'Sovereignty, due diligence, countermeasures, law of armed conflict applicability', status: 'REFERENCE' }
  ];

  h += '<div style="overflow-x:auto;">';
  h += '<table style="width:100%;border-collapse:collapse;font-family:monospace;font-size:11px;">';
  h += '<thead><tr style="border-bottom:2px solid #1a2a44;">';
  var authHeaders = ['AUTHORITY', 'SCOPE', 'APPROVAL CHAIN', 'AUTHORIZED OPERATIONS', 'STATUS'];
  for (var ah = 0; ah < authHeaders.length; ah++) {
    h += '<th style="text-align:left;padding:8px;color:#00aaff;font-size:10px;letter-spacing:1px;text-transform:uppercase;">' + esc(authHeaders[ah]) + '</th>';
  }
  h += '</tr></thead><tbody>';
  for (var la = 0; la < legalAuthorities.length; la++) {
    var auth = legalAuthorities[la];
    var authStatusColor = auth.status === 'ACTIVE' ? '#00ff88' : auth.status === 'SUPERSEDED' ? '#ff6644' : '#00aaff';
    h += '<tr style="border-bottom:1px solid #111828;">';
    h += '<td style="padding:8px;color:#fff;font-weight:bold;white-space:nowrap;">' + esc(auth.authority) + '<div style="color:#556;font-size:9px;font-weight:normal;">' + esc(auth.section) + '</div></td>';
    h += '<td style="padding:8px;color:#aab;">' + esc(auth.scope) + '</td>';
    h += '<td style="padding:8px;color:#889;">' + esc(auth.approval) + '</td>';
    h += '<td style="padding:8px;color:#889;max-width:250px;">' + esc(auth.ops) + '</td>';
    h += '<td style="padding:8px;"><span style="background:' + authStatusColor + '22;color:' + authStatusColor + ';font-size:9px;padding:2px 8px;border-radius:3px;">' + esc(auth.status) + '</span></td>';
    h += '</tr>';
  }
  h += '</tbody></table>';
  h += '</div>';
  h += '</div>';

  // ---- Collateral Damage Estimator ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ff6644;margin-right:8px;">&#9888;</span>COLLATERAL DAMAGE ESTIMATOR</div>';

  var cdeFactors = [
    { factor: 'Shared Infrastructure Impact', weight: 30, score: 45, desc: 'Target systems share hosting with civilian services' },
    { factor: 'Supply Chain Dependencies', weight: 20, score: 30, desc: 'Software/services downstream of target infrastructure' },
    { factor: 'Civilian Data Exposure', weight: 25, score: 20, desc: 'Potential for civilian PII/data to be affected' },
    { factor: 'Regional Network Disruption', weight: 15, score: 55, desc: 'Probability of broader network outages from operation' },
    { factor: 'Temporal Persistence', weight: 10, score: 15, desc: 'Duration of expected collateral effects' }
  ];

  var totalCDE = 0;
  for (var cf = 0; cf < cdeFactors.length; cf++) {
    totalCDE += (cdeFactors[cf].weight / 100) * cdeFactors[cf].score;
  }

  for (var cd = 0; cd < cdeFactors.length; cd++) {
    var cFactor = cdeFactors[cd];
    var cBarColor = cFactor.score < 30 ? '#00ff88' : cFactor.score < 60 ? '#ffaa00' : '#ff2244';
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">';
    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;">' + esc(cFactor.factor) + ' <span style="color:#556;">(weight: ' + esc(cFactor.weight) + '%)</span></div>';
    h += '<div style="color:' + cBarColor + ';font-size:12px;font-family:monospace;font-weight:bold;">' + esc(cFactor.score) + '%</div>';
    h += '</div>';
    h += '<div style="background:#111828;border-radius:4px;height:8px;overflow:hidden;">';
    h += '<div style="background:linear-gradient(90deg,' + cBarColor + ',' + cBarColor + '88);width:' + cFactor.score + '%;height:100%;border-radius:4px;transition:width 0.5s;"></div>';
    h += '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;margin-top:2px;">' + esc(cFactor.desc) + '</div>';
    h += '</div>';
  }

  var cdeLevel = totalCDE < 25 ? 'LOW' : totalCDE < 50 ? 'MODERATE' : totalCDE < 75 ? 'HIGH' : 'CRITICAL';
  var cdeLevelColor = totalCDE < 25 ? '#00ff88' : totalCDE < 50 ? '#ffaa00' : totalCDE < 75 ? '#ff6644' : '#ff2244';
  h += '<div style="margin-top:14px;background:' + cdeLevelColor + '11;border:1px solid ' + cdeLevelColor + '44;border-radius:6px;padding:12px;text-align:center;">';
  h += '<div style="color:' + cdeLevelColor + ';font-size:16px;font-family:monospace;font-weight:bold;">ESTIMATED COLLATERAL: ' + esc(cdeLevel) + '</div>';
  h += '<div style="color:#889;font-size:11px;font-family:monospace;margin-top:4px;">Composite Score: ' + Math.round(totalCDE) + '/100</div>';
  h += '</div>';
  h += '</div>';

  // ---- Operation Timeline Generator ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#9201;</span>OPERATION TIMELINE GENERATOR</div>';

  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;">';
  var timelineFields = [
    { label: 'Operation Name', value: 'OP IRON VEIL', type: 'text' },
    { label: 'Classification', value: 'TOP SECRET//SCI//NOFORN', type: 'select' },
    { label: 'Start Date/Time (Zulu)', value: '2026-09-15T02:00Z', type: 'datetime' },
    { label: 'Estimated Duration', value: '48 hours', type: 'select' },
    { label: 'Primary Objective', value: 'Disrupt GRU C2 infrastructure', type: 'text' },
    { label: 'Approving Authority', value: 'SECDEF via EXORD', type: 'select' }
  ];
  for (var tf = 0; tf < timelineFields.length; tf++) {
    var field = timelineFields[tf];
    h += '<div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">' + esc(field.label) + '</div>';
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:8px;color:#ccd;font-size:11px;font-family:monospace;">' + esc(field.value) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  var timelineEvents = [
    { time: 'H-24', event: 'Final authorization confirmation', status: 'COMPLETE' },
    { time: 'H-12', event: 'Pre-position tools and access verification', status: 'COMPLETE' },
    { time: 'H-6', event: 'Final target confirmation and ROE review', status: 'IN PROGRESS' },
    { time: 'H-2', event: 'Team deployment and comms check', status: 'PENDING' },
    { time: 'H-0', event: 'Operation execution — Phase 1 initiation', status: 'PENDING' },
    { time: 'H+4', event: 'Phase 1 assessment and Phase 2 decision point', status: 'PENDING' },
    { time: 'H+12', event: 'Interim battle damage assessment', status: 'PENDING' },
    { time: 'H+24', event: 'Phase 2 completion and extraction', status: 'PENDING' },
    { time: 'H+48', event: 'Full BDA and after-action report', status: 'PENDING' }
  ];

  h += '<div style="position:relative;padding-left:30px;">';
  for (var te = 0; te < timelineEvents.length; te++) {
    var tEvent = timelineEvents[te];
    var tColor = tEvent.status === 'COMPLETE' ? '#00ff88' : tEvent.status === 'IN PROGRESS' ? '#00aaff' : '#334';
    var tDotStyle = tEvent.status === 'IN PROGRESS' ? 'box-shadow:0 0 8px #00aaff;' : '';
    h += '<div style="position:relative;margin-bottom:8px;padding:8px 12px;background:#0a0e1a;border:1px solid ' + (tEvent.status !== 'PENDING' ? tColor + '44' : '#1a2a44') + ';border-radius:4px;">';
    h += '<div style="position:absolute;left:-24px;top:50%;transform:translateY(-50%);width:10px;height:10px;background:' + tColor + ';border-radius:50%;' + tDotStyle + '"></div>';
    if (te < timelineEvents.length - 1) {
      h += '<div style="position:absolute;left:-19px;top:60%;width:1px;height:calc(100% + 8px);background:#1a2a44;"></div>';
    }
    h += '<div style="display:flex;align-items:center;justify-content:space-between;">';
    h += '<div style="display:flex;align-items:center;gap:10px;">';
    h += '<div style="color:' + tColor + ';font-size:11px;font-family:monospace;font-weight:bold;min-width:40px;">' + esc(tEvent.time) + '</div>';
    h += '<div style="color:' + (tEvent.status !== 'PENDING' ? '#ccd' : '#667') + ';font-size:11px;font-family:monospace;">' + esc(tEvent.event) + '</div>';
    h += '</div>';
    var tStatusColor = tEvent.status === 'COMPLETE' ? '#00ff88' : tEvent.status === 'IN PROGRESS' ? '#00aaff' : '#445';
    h += '<div style="color:' + tStatusColor + ';font-size:9px;font-family:monospace;letter-spacing:1px;">' + esc(tEvent.status) + '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // ---- Battle Damage Assessment ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;grid-column:1/3;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ff6644;margin-right:8px;">&#128202;</span>BATTLE DAMAGE ASSESSMENT TEMPLATE</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px;">';
  var bdaMetrics = [
    { label: 'TARGETS ENGAGED', value: '14', sub: 'C2 servers, relay nodes', color: '#ff2244' },
    { label: 'TARGETS DESTROYED', value: '11', sub: '78.6% effectiveness', color: '#ff6644' },
    { label: 'TARGETS DEGRADED', value: '2', sub: 'Partial capability loss', color: '#ffaa00' },
    { label: 'MISSED / FAILED', value: '1', sub: 'Migrated pre-strike', color: '#667' }
  ];
  for (var bm = 0; bm < bdaMetrics.length; bm++) {
    var bdm = bdaMetrics[bm];
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#101828);border:1px solid ' + bdm.color + '44;border-radius:6px;padding:12px;text-align:center;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">' + esc(bdm.label) + '</div>';
    h += '<div style="color:' + bdm.color + ';font-size:28px;font-weight:bold;font-family:monospace;">' + esc(bdm.value) + '</div>';
    h += '<div style="color:#667;font-size:10px;font-family:monospace;">' + esc(bdm.sub) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">';
  var bdaSections = [
    { title: 'PHYSICAL DAMAGE ASSESSMENT', items: ['11 C2 servers rendered inoperable via data wiping', '2 relay nodes degraded — partial packet loss induced', 'Adversary DNS infrastructure disrupted across 3 providers', 'Backup C2 channels identified and monitored for reactivation'] },
    { title: 'FUNCTIONAL DAMAGE ASSESSMENT', items: ['Adversary lost primary C2 capability for active campaign', 'Estimated 72-96 hour recovery time for full reconstitution', 'Campaign against NATO allies effectively halted', 'Secondary communication channels under active surveillance'] },
    { title: 'TARGET SYSTEM ASSESSMENT', items: ['Pre-positioned implants neutralized on 8 compromised systems', 'Exfiltration channels blocked and sinkholes deployed', 'Credential infrastructure compromised — forced password resets', 'Adversary tool repositories identified and cataloged'] },
    { title: 'COLLATERAL ASSESSMENT', items: ['No unintended civilian service disruption confirmed', '1 shared hosting provider experienced brief latency spike (resolved)', 'No allied systems affected', 'No attribution exposure detected'] }
  ];
  for (var bs = 0; bs < bdaSections.length; bs++) {
    var bSect = bdaSections[bs];
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:12px;">';
    h += '<div style="color:#00aaff;font-size:10px;font-family:monospace;letter-spacing:1px;margin-bottom:8px;">' + esc(bSect.title) + '</div>';
    for (var bi = 0; bi < bSect.items.length; bi++) {
      h += '<div style="color:#889;font-size:11px;font-family:monospace;padding:3px 0;border-bottom:1px solid #111828;display:flex;align-items:flex-start;gap:6px;">';
      h += '<span style="color:#00aaff;font-size:8px;margin-top:4px;">&#9654;</span>' + esc(bSect.items[bi]);
      h += '</div>';
    }
    h += '</div>';
  }
  h += '</div>';

  h += '</div>'; // end BDA

  h += '</div>'; // end main grid

  return h;
}


// ============================================================================
// TAB 7: CRITICAL INFRASTRUCTURE SHIELD
// ============================================================================
function renderShield() {
  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:4px 0;font-family:monospace;font-size:11px;letter-spacing:3px;font-weight:bold;">TOP SECRET // SCI // CRITICAL INFRASTRUCTURE PROTECTION</div>';

  h += '<div style="padding:20px 24px 0 24px;">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">';
  h += '<div>';
  h += '<h2 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">CRITICAL INFRASTRUCTURE SHIELD</h2>';
  h += '<div style="color:#667;font-size:12px;font-family:monospace;margin-top:4px;letter-spacing:1px;">NATIONAL INFRASTRUCTURE DEFENSE &bull; SECTOR PROTECTION STATUS</div>';
  h += '</div>';
  h += '<div style="display:flex;gap:10px;">';
  h += '<div style="background:linear-gradient(135deg,#0a1a0a,#152a15);border:1px solid #00ff88;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#00ff88;font-size:10px;font-family:monospace;letter-spacing:1px;">SECTORS NOMINAL</div>';
  h += '<div style="color:#00ff88;font-size:22px;font-weight:bold;font-family:monospace;">5</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#1a1a0a,#2a2a15);border:1px solid #ffaa00;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#ffaa00;font-size:10px;font-family:monospace;letter-spacing:1px;">SECTORS ELEVATED</div>';
  h += '<div style="color:#ffaa00;font-size:22px;font-weight:bold;font-family:monospace;">2</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#1a0a0a,#2a1515);border:1px solid #ff2244;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#ff2244;font-size:10px;font-family:monospace;letter-spacing:1px;">SECTORS CRITICAL</div>';
  h += '<div style="color:#ff2244;font-size:22px;font-weight:bold;font-family:monospace;">1</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Sector status grid
  h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:0 24px;">';

  var sectors = CRITICAL_INFRASTRUCTURE_SECTORS || [
    { name: 'Power Grid', icon: '&#9889;', threat: 'HIGH', defenses: ['SCADA monitoring', 'Network segmentation', 'Anomaly detection', 'Air-gapped controls'], vulns: 12, patchPct: 78, lastAssessment: '2026-09-10', attackSurface: 'ICS/SCADA systems, smart grid endpoints, generation controls', dependencies: ['Water', 'Telecom', 'Financial'], recentEvents: 'Volt Typhoon pre-positioning detected in 3 utilities' },
    { name: 'Water Systems', icon: '&#128167;', threat: 'ELEVATED', defenses: ['OT monitoring', 'Access controls', 'Chemical sensors', 'Manual overrides'], vulns: 8, patchPct: 65, lastAssessment: '2026-09-07', attackSurface: 'SCADA/PLC systems, treatment controls, pump stations', dependencies: ['Power', 'Telecom'], recentEvents: 'Attempted unauthorized access to treatment facility HMI' },
    { name: 'Telecommunications', icon: '&#128225;', threat: 'ELEVATED', defenses: ['DDoS mitigation', 'BGP monitoring', 'Signal encryption', 'Redundant routing'], vulns: 15, patchPct: 82, lastAssessment: '2026-09-11', attackSurface: 'Cell towers, fiber optic networks, switching centers, 5G core', dependencies: ['Power'], recentEvents: 'Salt Typhoon persistence detected in 2 major carriers' },
    { name: 'Financial Services', icon: '&#128176;', threat: 'NORMAL', defenses: ['SOC operations', 'Fraud detection', 'Encryption', 'Redundant systems'], vulns: 6, patchPct: 94, lastAssessment: '2026-09-12', attackSurface: 'Trading systems, SWIFT network, ATM networks, payment processors', dependencies: ['Power', 'Telecom'], recentEvents: 'Routine Lazarus Group reconnaissance — no intrusion' },
    { name: 'Transportation', icon: '&#9992;', threat: 'NORMAL', defenses: ['ATC monitoring', 'GPS backup', 'Network isolation', 'Incident response'], vulns: 9, patchPct: 71, lastAssessment: '2026-09-08', attackSurface: 'Air traffic control, rail signaling, port systems, traffic management', dependencies: ['Power', 'Telecom', 'Financial'], recentEvents: 'No significant cyber events in reporting period' },
    { name: 'Healthcare', icon: '&#127973;', threat: 'NORMAL', defenses: ['Endpoint protection', 'Network segmentation', 'Backup systems', 'HIPAA controls'], vulns: 18, patchPct: 61, lastAssessment: '2026-09-06', attackSurface: 'EHR systems, medical devices, hospital networks, research data', dependencies: ['Power', 'Water', 'Telecom'], recentEvents: 'Ransomware attempt blocked at regional hospital network' },
    { name: 'Government', icon: '&#127963;', threat: 'NORMAL', defenses: ['EINSTEIN 3A', 'CDM program', 'Zero trust architecture', 'CISA monitoring'], vulns: 22, patchPct: 77, lastAssessment: '2026-09-11', attackSurface: 'Federal networks, .gov domains, classified systems, elections infrastructure', dependencies: ['Power', 'Telecom', 'Financial'], recentEvents: 'APT29 phishing campaign targeting State Department — blocked' },
    { name: 'Defense Industrial Base', icon: '&#128737;', threat: 'HIGH', defenses: ['CMMC compliance', 'Insider threat program', 'TS/SCI protections', 'CI monitoring'], vulns: 7, patchPct: 88, lastAssessment: '2026-09-12', attackSurface: 'Weapons systems data, supply chain, research labs, contractor networks', dependencies: ['Power', 'Telecom', 'Government'], recentEvents: 'APT41 sustained espionage campaign against 5 defense contractors' }
  ];

  for (var s = 0; s < sectors.length; s++) {
    var sector = sectors[s];
    var sColor = sector.threat === 'HIGH' ? '#ff2244' : sector.threat === 'ELEVATED' ? '#ffaa00' : sector.threat === 'CRITICAL' ? '#ff0000' : '#00ff88';
    var sBorderGlow = sector.threat === 'HIGH' || sector.threat === 'CRITICAL' ? 'box-shadow:0 0 15px ' + sColor + '22;' : '';
    h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid ' + sColor + '44;border-radius:8px;padding:14px;' + sBorderGlow + '">';

    // Header
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<span style="font-size:20px;">' + sector.icon + '</span>';
    h += '<div style="color:#fff;font-size:13px;font-family:monospace;font-weight:bold;letter-spacing:1px;">' + esc(sector.name) + '</div>';
    h += '</div>';
    h += '<div style="background:' + sColor + '22;color:' + sColor + ';font-size:9px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;letter-spacing:1px;">' + esc(sector.threat) + '</div>';
    h += '</div>';

    // Threat level bar
    var threatPct = sector.threat === 'CRITICAL' ? 95 : sector.threat === 'HIGH' ? 75 : sector.threat === 'ELEVATED' ? 50 : 20;
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:3px;">THREAT LEVEL</div>';
    h += '<div style="background:#111828;border-radius:4px;height:6px;overflow:hidden;">';
    h += '<div style="background:linear-gradient(90deg,' + sColor + ',' + sColor + '88);width:' + threatPct + '%;height:100%;border-radius:4px;"></div>';
    h += '</div>';
    h += '</div>';

    // Active defenses
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:4px;">ACTIVE DEFENSES</div>';
    for (var ad = 0; ad < sector.defenses.length; ad++) {
      h += '<div style="color:#889;font-size:10px;font-family:monospace;padding:2px 0;display:flex;align-items:center;gap:4px;">';
      h += '<span style="color:#00ff88;font-size:8px;">&#9679;</span>' + esc(sector.defenses[ad]);
      h += '</div>';
    }
    h += '</div>';

    // Vulns and patch status
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">';
    h += '<div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">KNOWN VULNS</div>';
    var vulnColor = sector.vulns > 15 ? '#ff2244' : sector.vulns > 10 ? '#ffaa00' : '#00ff88';
    h += '<div style="color:' + vulnColor + ';font-size:18px;font-family:monospace;font-weight:bold;">' + esc(sector.vulns) + '</div>';
    h += '</div>';
    h += '<div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">PATCH COMPLIANCE</div>';
    var patchColor = sector.patchPct >= 85 ? '#00ff88' : sector.patchPct >= 70 ? '#ffaa00' : '#ff2244';
    h += '<div style="color:' + patchColor + ';font-size:18px;font-family:monospace;font-weight:bold;">' + esc(sector.patchPct) + '%</div>';
    h += '</div>';
    h += '</div>';

    // Patch bar
    h += '<div style="background:#111828;border-radius:4px;height:6px;overflow:hidden;margin-bottom:8px;">';
    h += '<div style="background:linear-gradient(90deg,' + patchColor + ',' + patchColor + '88);width:' + sector.patchPct + '%;height:100%;border-radius:4px;"></div>';
    h += '</div>';

    // Recent events
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:3px;">RECENT EVENTS</div>';
    h += '<div style="color:#889;font-size:10px;font-family:monospace;line-height:1.4;">' + esc(sector.recentEvents) + '</div>';

    // Last assessment
    h += '<div style="margin-top:8px;padding-top:6px;border-top:1px solid #1a2a44;color:#445;font-size:9px;font-family:monospace;">Last Assessment: ' + esc(sector.lastAssessment) + '</div>';

    h += '</div>';
  }
  h += '</div>';

  // ---- Cross-Sector Dependency Map ----
  h += '<div style="padding:16px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#128279;</span>CROSS-SECTOR DEPENDENCY MAPPING</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">';
  for (var dm = 0; dm < sectors.length; dm++) {
    var dSector = sectors[dm];
    var dColor = dSector.threat === 'HIGH' ? '#ff2244' : dSector.threat === 'ELEVATED' ? '#ffaa00' : '#00ff88';
    h += '<div style="background:#0a0e1a;border:1px solid ' + dColor + '33;border-radius:4px;padding:10px;">';
    h += '<div style="color:' + dColor + ';font-size:11px;font-family:monospace;font-weight:bold;margin-bottom:6px;">' + dSector.icon + ' ' + esc(dSector.name) + '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:4px;">DEPENDS ON:</div>';
    for (var dd = 0; dd < dSector.dependencies.length; dd++) {
      h += '<div style="color:#889;font-size:10px;font-family:monospace;padding:1px 0;">&#8627; ' + esc(dSector.dependencies[dd]) + '</div>';
    }
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // ---- Recovery Priority Matrix ----
  h += '<div style="padding:0 24px 16px 24px;">';
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';

  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#9733;</span>RECOVERY PRIORITY MATRIX</div>';

  var recoveryPriorities = [
    { priority: 1, sector: 'Power Grid', rto: '4 hours', rpo: '0 min', justification: 'All other sectors depend on electrical power', color: '#ff2244' },
    { priority: 2, sector: 'Telecommunications', rto: '6 hours', rpo: '15 min', justification: 'Required for coordination and command/control', color: '#ff6644' },
    { priority: 3, sector: 'Water Systems', rto: '12 hours', rpo: '30 min', justification: 'Public health and safety critical', color: '#ffaa00' },
    { priority: 4, sector: 'Government', rto: '12 hours', rpo: '1 hour', justification: 'National command authority and emergency management', color: '#ffaa00' },
    { priority: 5, sector: 'Defense Industrial Base', rto: '24 hours', rpo: '1 hour', justification: 'National security and military readiness', color: '#00aaff' },
    { priority: 6, sector: 'Financial Services', rto: '24 hours', rpo: '0 min', justification: 'Economic stability and transaction processing', color: '#00aaff' },
    { priority: 7, sector: 'Healthcare', rto: '24 hours', rpo: '15 min', justification: 'Patient care and public health infrastructure', color: '#00aaff' },
    { priority: 8, sector: 'Transportation', rto: '48 hours', rpo: '1 hour', justification: 'Supply chain and logistics', color: '#00ff88' }
  ];

  for (var rp = 0; rp < recoveryPriorities.length; rp++) {
    var rec = recoveryPriorities[rp];
    h += '<div style="display:flex;align-items:center;gap:10px;padding:8px;border-bottom:1px solid #111828;">';
    h += '<div style="background:' + rec.color + ';color:#000;font-size:11px;font-family:monospace;font-weight:bold;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;">' + esc(rec.priority) + '</div>';
    h += '<div style="flex:1;">';
    h += '<div style="color:#fff;font-size:11px;font-family:monospace;font-weight:bold;">' + esc(rec.sector) + '</div>';
    h += '<div style="color:#667;font-size:9px;font-family:monospace;">' + esc(rec.justification) + '</div>';
    h += '</div>';
    h += '<div style="text-align:right;">';
    h += '<div style="color:#00aaff;font-size:10px;font-family:monospace;">RTO: ' + esc(rec.rto) + '</div>';
    h += '<div style="color:#889;font-size:9px;font-family:monospace;">RPO: ' + esc(rec.rpo) + '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // ---- Incident Response Playbooks ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00ff88;margin-right:8px;">&#128214;</span>INCIDENT RESPONSE PLAYBOOK LIBRARY</div>';

  var playbooks = IR_PLAYBOOKS || [
    { id: 'PB-001', name: 'Ransomware Response', severity: 'CRITICAL', sector: 'ALL', steps: ['Isolate affected systems', 'Preserve forensic evidence', 'Notify CISA/FBI', 'Assess backup integrity', 'Begin recovery from clean backups', 'Conduct root cause analysis'] },
    { id: 'PB-002', name: 'Nation-State APT Intrusion', severity: 'CRITICAL', sector: 'GOV/DIB', steps: ['Activate hunt team', 'Map adversary presence', 'Collect IOCs and TTPs', 'Coordinate with IC partners', 'Develop eradication plan', 'Execute coordinated eviction'] },
    { id: 'PB-003', name: 'SCADA/ICS Compromise', severity: 'CRITICAL', sector: 'POWER/WATER', steps: ['Switch to manual operations', 'Isolate OT from IT network', 'Deploy OT-specific forensics', 'Verify safety system integrity', 'Coordinate with sector ISAC', 'Gradual return to automated operations'] },
    { id: 'PB-004', name: 'Supply Chain Attack', severity: 'HIGH', sector: 'ALL', steps: ['Identify compromised component', 'Assess blast radius', 'Block known IOCs', 'Audit software inventory', 'Coordinate vendor notification', 'Deploy integrity monitoring'] },
    { id: 'PB-005', name: 'DDoS Attack — Critical Service', severity: 'HIGH', sector: 'TELECOM/FIN', steps: ['Activate DDoS mitigation', 'Reroute traffic through scrubbing centers', 'Coordinate with upstream providers', 'Monitor for secondary attacks', 'Document attack vectors', 'Update filtering rules'] },
    { id: 'PB-006', name: 'Data Exfiltration', severity: 'HIGH', sector: 'ALL', steps: ['Block exfiltration channels', 'Identify data accessed', 'Preserve network logs', 'Assess classification level of data', 'Notify affected parties', 'Conduct damage assessment'] },
    { id: 'PB-007', name: 'Insider Threat', severity: 'HIGH', sector: 'GOV/DIB', steps: ['Restrict access quietly', 'Engage counterintelligence', 'Forensic workstation imaging', 'Review access logs', 'Coordinate with legal/HR', 'Damage assessment'] },
    { id: 'PB-008', name: 'BGP Hijacking', severity: 'HIGH', sector: 'TELECOM', steps: ['Verify route origin', 'Contact affected ASNs', 'Implement RPKI validation', 'Coordinate with upstream providers', 'Monitor for data interception', 'Deploy route filtering'] },
    { id: 'PB-009', name: 'DNS Poisoning/Hijacking', severity: 'HIGH', sector: 'ALL', steps: ['Verify DNS records', 'Switch to backup DNS', 'Enable DNSSEC validation', 'Flush DNS caches', 'Monitor for credential theft', 'Update WHOIS security contacts'] },
    { id: 'PB-010', name: 'Zero-Day Exploitation', severity: 'CRITICAL', sector: 'ALL', steps: ['Deploy virtual patching/WAF rules', 'Isolate vulnerable systems', 'Coordinate with vendor', 'Hunt for exploitation evidence', 'Develop detection signatures', 'Emergency patch deployment'] },
    { id: 'PB-011', name: 'Wiper Malware', severity: 'CRITICAL', sector: 'ALL', steps: ['Immediately isolate affected networks', 'Protect backup infrastructure', 'Deploy containment measures', 'Assess destruction scope', 'Activate disaster recovery', 'Forensic evidence preservation'] },
    { id: 'PB-012', name: 'Cloud Infrastructure Compromise', severity: 'HIGH', sector: 'ALL', steps: ['Revoke compromised credentials', 'Audit IAM policies', 'Review cloud trail logs', 'Isolate compromised workloads', 'Rotate all keys/secrets', 'Engage cloud provider support'] },
    { id: 'PB-013', name: 'Election Infrastructure Threat', severity: 'CRITICAL', sector: 'GOV', steps: ['Activate election security task force', 'Verify voter registration database integrity', 'Monitor for disinformation campaigns', 'Coordinate with state/local officials', 'Deploy enhanced monitoring', 'Prepare public communications'] },
    { id: 'PB-014', name: 'Financial System Disruption', severity: 'HIGH', sector: 'FINANCIAL', steps: ['Activate trading halts if needed', 'Coordinate with Treasury/Fed', 'Assess payment system integrity', 'Deploy backup transaction processing', 'Monitor for fraud patterns', 'Communicate with market participants'] },
    { id: 'PB-015', name: 'Telecom Infrastructure Attack', severity: 'HIGH', sector: 'TELECOM', steps: ['Activate backup communication paths', 'Coordinate with other carriers', 'Deploy mobile command units', 'Monitor for wiretapping/interception', 'Assess 911 service impact', 'Coordinate with CISA/DHS'] },
    { id: 'PB-016', name: 'Healthcare System Ransomware', severity: 'CRITICAL', sector: 'HEALTHCARE', steps: ['Activate clinical downtime procedures', 'Protect connected medical devices', 'Coordinate patient diversion', 'Notify HHS/FBI', 'Assess PHI exposure', 'Prioritize life-safety system recovery'] },
    { id: 'PB-017', name: 'GPS/PNT Disruption', severity: 'HIGH', sector: 'TRANSPORT/MIL', steps: ['Switch to backup navigation', 'Alert aviation and maritime', 'Investigate jamming/spoofing source', 'Deploy alternative timing sources', 'Coordinate with Space Command', 'Assess financial system impact'] },
    { id: 'PB-018', name: 'Undersea Cable Disruption', severity: 'HIGH', sector: 'TELECOM', steps: ['Reroute traffic through alternate cables', 'Assess capacity impact', 'Coordinate with cable operators', 'Deploy monitoring near affected area', 'Assess intelligence implications', 'Coordinate with allied navies'] },
    { id: 'PB-019', name: 'Nuclear Facility Cyber Incident', severity: 'CRITICAL', sector: 'POWER', steps: ['Verify safety system isolation', 'Activate NRC notification protocols', 'Deploy specialized nuclear CERT', 'Verify radiation monitoring systems', 'Coordinate with DOE/NNSA', 'Implement maximum security posture'] },
    { id: 'PB-020', name: 'Mass Credential Compromise', severity: 'HIGH', sector: 'ALL', steps: ['Force enterprise-wide password reset', 'Revoke all active sessions', 'Deploy emergency MFA', 'Audit privileged accounts', 'Monitor for lateral movement', 'Engage identity provider support'] }
  ];

  for (var pb = 0; pb < playbooks.length; pb++) {
    var book = playbooks[pb];
    var pbColor = book.severity === 'CRITICAL' ? '#ff2244' : '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:8px 10px;margin-bottom:4px;cursor:pointer;" onclick="this.querySelector(\'.se-pb-steps\').style.display=this.querySelector(\'.se-pb-steps\').style.display===\'none\'?\'block\':\'none\'">';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<div style="color:#445;font-size:10px;font-family:monospace;min-width:50px;">' + esc(book.id) + '</div>';
    h += '<div style="flex:1;color:#ccd;font-size:11px;font-family:monospace;">' + esc(book.name) + '</div>';
    h += '<div style="background:' + pbColor + '22;color:' + pbColor + ';font-size:8px;font-family:monospace;padding:2px 6px;border-radius:2px;">' + esc(book.severity) + '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;">' + esc(book.sector) + '</div>';
    h += '<div style="color:#445;font-size:10px;">&#9660;</div>';
    h += '</div>';
    h += '<div class="se-pb-steps" style="display:none;margin-top:8px;padding-top:8px;border-top:1px solid #1a2a44;">';
    for (var ps = 0; ps < book.steps.length; ps++) {
      h += '<div style="color:#889;font-size:10px;font-family:monospace;padding:3px 0;display:flex;align-items:center;gap:6px;">';
      h += '<span style="color:#00aaff;font-size:9px;min-width:16px;">' + (ps + 1) + '.</span>' + esc(book.steps[ps]);
      h += '</div>';
    }
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>'; // end grid

  // ---- Tabletop Exercise Launcher ----
  h += '<div style="padding:0 24px 16px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#127918;</span>TABLETOP EXERCISE LAUNCHER</div>';

  var ttxScenarios = [
    { name: 'Regional Power Grid Failure', duration: '4 hours', participants: 'Utility CISO, SOC leads, ICS engineers, CISA liaison', difficulty: 4, desc: 'Simulates coordinated attack on 3 regional power utilities causing cascading failures' },
    { name: 'Multi-Sector Ransomware', duration: '6 hours', participants: 'Cross-sector CISOs, FBI, CISA, sector ISACs', difficulty: 5, desc: 'Simultaneous ransomware deployment across healthcare, government, and financial sectors' },
    { name: 'Supply Chain Compromise', duration: '3 hours', participants: 'Software vendors, enterprise CISOs, CISA', difficulty: 3, desc: 'Nation-state actor compromises widely-used software update mechanism' },
    { name: 'Telecom Infrastructure Disruption', duration: '4 hours', participants: 'Carrier security teams, FCC, DHS, DOD', difficulty: 4, desc: 'Coordinated attack on 5G core network and undersea cable monitoring' }
  ];

  h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">';
  for (var ttx = 0; ttx < ttxScenarios.length; ttx++) {
    var ex = ttxScenarios[ttx];
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#101828);border:1px solid #1a2a44;border-radius:6px;padding:14px;">';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;margin-bottom:6px;">' + esc(ex.name) + '</div>';
    h += '<div style="color:#889;font-size:10px;font-family:monospace;margin-bottom:8px;line-height:1.4;">' + esc(ex.desc) + '</div>';
    h += '<div style="display:flex;gap:4px;margin-bottom:8px;">';
    for (var st = 0; st < 5; st++) {
      h += '<span style="color:' + (st < ex.difficulty ? '#ffaa00' : '#222') + ';font-size:12px;">&#9733;</span>';
    }
    h += '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;margin-bottom:4px;">DURATION: ' + esc(ex.duration) + '</div>';
    h += '<div style="color:#445;font-size:9px;font-family:monospace;margin-bottom:10px;">PARTICIPANTS: ' + esc(ex.participants) + '</div>';
    h += '<div style="background:#00aaff22;color:#00aaff;font-size:10px;font-family:monospace;text-align:center;padding:6px;border-radius:4px;cursor:pointer;border:1px solid #00aaff44;">LAUNCH EXERCISE</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Automated defense recommendations
  h += '<div style="padding:0 24px 24px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00ff88;margin-right:8px;">&#128737;</span>AUTOMATED DEFENSE RECOMMENDATIONS — CURRENT THREAT LEVEL</div>';

  var defRecs = [
    { priority: 'IMMEDIATE', action: 'Activate enhanced monitoring for Volt Typhoon IOCs across all power grid OT networks', sector: 'Power Grid', status: 'IN PROGRESS' },
    { priority: 'IMMEDIATE', action: 'Deploy updated Salt Typhoon detection signatures to all telecom sector SIEM instances', sector: 'Telecom', status: 'DEPLOYED' },
    { priority: 'HIGH', action: 'Conduct emergency vulnerability scanning of all internet-facing ICS/SCADA interfaces', sector: 'Power/Water', status: 'SCHEDULED' },
    { priority: 'HIGH', action: 'Force credential rotation for all DIB contractor accounts with privileged access', sector: 'Defense', status: 'IN PROGRESS' },
    { priority: 'HIGH', action: 'Enable enhanced DDoS protection for financial sector core banking systems', sector: 'Financial', status: 'DEPLOYED' },
    { priority: 'MEDIUM', action: 'Update all sector ISAC members with latest nation-state APT indicators', sector: 'ALL', status: 'DEPLOYED' },
    { priority: 'MEDIUM', action: 'Verify air-gap integrity on all nuclear facility safety systems', sector: 'Power', status: 'SCHEDULED' },
    { priority: 'MEDIUM', action: 'Activate backup DNS infrastructure for .gov domains', sector: 'Government', status: 'STANDBY' }
  ];

  for (var dr = 0; dr < defRecs.length; dr++) {
    var rec2 = defRecs[dr];
    var drColor = rec2.priority === 'IMMEDIATE' ? '#ff2244' : rec2.priority === 'HIGH' ? '#ffaa00' : '#00aaff';
    var drStatusColor = rec2.status === 'DEPLOYED' ? '#00ff88' : rec2.status === 'IN PROGRESS' ? '#00aaff' : rec2.status === 'SCHEDULED' ? '#ffaa00' : '#667';
    h += '<div style="display:flex;align-items:center;gap:10px;padding:8px;border-bottom:1px solid #111828;">';
    h += '<div style="background:' + drColor + '22;color:' + drColor + ';font-size:9px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;min-width:70px;text-align:center;">' + esc(rec2.priority) + '</div>';
    h += '<div style="flex:1;color:#ccd;font-size:11px;font-family:monospace;">' + esc(rec2.action) + '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;min-width:70px;">' + esc(rec2.sector) + '</div>';
    h += '<div style="background:' + drStatusColor + '22;color:' + drStatusColor + ';font-size:9px;font-family:monospace;padding:3px 8px;border-radius:3px;min-width:80px;text-align:center;">' + esc(rec2.status) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  return h;
}


// ============================================================================
// TAB 8: INTELLIGENCE FUSION
// ============================================================================
function renderIntelFusion() {
  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:4px 0;font-family:monospace;font-size:11px;letter-spacing:3px;font-weight:bold;">TOP SECRET // SCI // ORCON // NOFORN — INTELLIGENCE PRODUCT</div>';

  h += '<div style="padding:20px 24px 0 24px;">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">';
  h += '<div>';
  h += '<h2 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">INTELLIGENCE FUSION CENTER</h2>';
  h += '<div style="color:#667;font-size:12px;font-family:monospace;margin-top:4px;letter-spacing:1px;">MULTI-SOURCE INTELLIGENCE CORRELATION &bull; ALL-SOURCE ANALYSIS</div>';
  h += '</div>';
  h += '<div style="display:flex;gap:10px;">';
  var intelStats = [
    { label: 'ACTIVE FEEDS', value: '47', color: '#00aaff' },
    { label: 'CORRELATIONS', value: '12', color: '#ffaa00' },
    { label: 'HIGH CONF ALERTS', value: '5', color: '#ff2244' }
  ];
  for (var ist = 0; ist < intelStats.length; ist++) {
    var iStat = intelStats[ist];
    h += '<div style="background:linear-gradient(135deg,#0a0e1a,#101828);border:1px solid ' + iStat.color + '44;border-radius:6px;padding:8px 16px;text-align:center;">';
    h += '<div style="color:' + iStat.color + ';font-size:10px;font-family:monospace;letter-spacing:1px;">' + esc(iStat.label) + '</div>';
    h += '<div style="color:' + iStat.color + ';font-size:22px;font-weight:bold;font-family:monospace;">' + esc(iStat.value) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Intel source tabs
  var intelTypes = [
    { id: 'sigint', name: 'SIGINT', icon: '&#128225;', desc: 'Signals Intelligence', color: '#00aaff' },
    { id: 'osint', name: 'OSINT', icon: '&#127760;', desc: 'Open Source Intelligence', color: '#00ff88' },
    { id: 'cybint', name: 'CYBINT', icon: '&#128187;', desc: 'Cyber Intelligence', color: '#ff6644' },
    { id: 'humint', name: 'HUMINT', icon: '&#128100;', desc: 'Human Intelligence', color: '#ffaa00' },
    { id: 'geoint', name: 'GEOINT', icon: '&#127758;', desc: 'Geospatial Intelligence', color: '#aa66ff' }
  ];

  h += '<div style="display:flex;gap:4px;padding:0 24px;margin-bottom:16px;">';
  for (var it = 0; it < intelTypes.length; it++) {
    var iType = intelTypes[it];
    var isFirstTab = it === 0;
    h += '<div style="background:' + (isFirstTab ? iType.color + '22' : '#0a0e1a') + ';border:1px solid ' + (isFirstTab ? iType.color + '66' : '#1a2a44') + ';border-radius:6px 6px 0 0;padding:8px 16px;cursor:pointer;flex:1;text-align:center;">';
    h += '<div style="color:' + (isFirstTab ? iType.color : '#556') + ';font-size:12px;font-family:monospace;font-weight:bold;">' + iType.icon + ' ' + esc(iType.name) + '</div>';
    h += '<div style="color:' + (isFirstTab ? '#aab' : '#334') + ';font-size:9px;font-family:monospace;">' + esc(iType.desc) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Intel feeds
  h += '<div style="padding:0 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:0 0 8px 8px;padding:16px;">';

  var intelFeeds = INTEL_FEEDS || [
    { source: 'NSA/CSS', type: 'SIGINT', classification: 'TOP SECRET//SI//TK', timestamp: '2026-09-13 14:22:00Z', content: 'Intercepted communications between GRU Unit 74455 operators indicating imminent activation of pre-positioned network implants in European energy infrastructure. Keyword analysis shows 85% match with pre-attack communication patterns observed prior to 2015 Ukraine grid attack.', confidence: 92, relatedTo: ['Russia', 'Sandworm', 'Energy Sector'] },
    { source: 'NSA/CSS', type: 'SIGINT', classification: 'TOP SECRET//SI', timestamp: '2026-09-13 12:45:00Z', content: 'Signals analysis of PLA SSF communications suggests increased tasking of Unit 61398 cyber operators. Pattern of life analysis indicates shift to 24/7 operational tempo, consistent with preparation for large-scale intelligence collection operation.', confidence: 78, relatedTo: ['China', 'PLA', 'Espionage'] },
    { source: 'CISA/US-CERT', type: 'CYBINT', classification: 'SECRET', timestamp: '2026-09-13 13:15:00Z', content: 'Emergency directive issued: Volt Typhoon-associated activity detected in 3 additional US utility networks. Threat actors leveraging living-off-the-land techniques through compromised SOHO routers. YARA rules and IOCs distributed to critical infrastructure operators.', confidence: 95, relatedTo: ['China', 'Volt Typhoon', 'Power Grid'] },
    { source: 'Mandiant', type: 'CYBINT', classification: 'UNCLASSIFIED//FOUO', timestamp: '2026-09-13 11:30:00Z', content: 'New APT41 campaign identified targeting semiconductor manufacturers in US, Taiwan, South Korea. Custom backdoor "ChipDoor" deployed via compromised software supply chain. 12 organizations confirmed compromised, likely many more.', confidence: 88, relatedTo: ['China', 'APT41', 'Supply Chain'] },
    { source: 'CIA/NCS', type: 'HUMINT', classification: 'TOP SECRET//HCS', timestamp: '2026-09-13 08:00:00Z', content: 'Asset reporting from Moscow indicates FSB leadership has authorized expansion of cyber operations targeting Western financial institutions. Specific mention of SWIFT transaction manipulation capability under development. Timeline: 60-90 days to operational capability.', confidence: 72, relatedTo: ['Russia', 'FSB', 'Financial'] },
    { source: 'NGA', type: 'GEOINT', classification: 'SECRET//NOFORN', timestamp: '2026-09-13 10:00:00Z', content: 'Satellite imagery of North Korean RGB Bureau 121 training facility shows significant infrastructure expansion. New building construction consistent with cyber operations center. Vehicle traffic analysis indicates 40% increase in personnel movement over 30-day period.', confidence: 85, relatedTo: ['North Korea', 'Bureau 121', 'Infrastructure'] },
    { source: 'Twitter/X OSINT', type: 'OSINT', classification: 'UNCLASSIFIED', timestamp: '2026-09-13 09:30:00Z', content: 'Security researchers reporting mass exploitation of critical vulnerability in Fortinet FortiGate firewalls. Chinese-language exploit code circulating on underground forums since September 8. Over 200,000 internet-facing devices potentially vulnerable.', confidence: 90, relatedTo: ['China', 'Fortinet', 'Mass Exploitation'] },
    { source: 'DIA', type: 'SIGINT', classification: 'TOP SECRET//SI//REL FVEY', timestamp: '2026-09-12 22:00:00Z', content: 'IRGC Cyber Command reorganization detected through SIGINT analysis. New unit designation suggests creation of dedicated offensive cyber force separate from existing defensive structures. Leadership appointments include known Shamoon operators.', confidence: 75, relatedTo: ['Iran', 'IRGC', 'Reorganization'] },
    { source: 'FBI/IC3', type: 'CYBINT', classification: 'SECRET//LES', timestamp: '2026-09-12 20:00:00Z', content: 'FBI investigation reveals Lazarus Group has established new cryptocurrency laundering infrastructure through DeFi protocols. Estimated $340M in stolen crypto processed through 14 mixing services in past 90 days. 3 US-based exchanges unknowingly facilitated transactions.', confidence: 91, relatedTo: ['North Korea', 'Lazarus', 'Crypto'] },
    { source: 'GCHQ', type: 'SIGINT', classification: 'TOP SECRET//SI//REL FVEY', timestamp: '2026-09-12 18:00:00Z', content: 'GCHQ reports detection of APT29 staging infrastructure targeting UK government departments. 47 new domains registered through bulletproof hosting providers, SSL certificate patterns match known APT29 operational security practices.', confidence: 87, relatedTo: ['Russia', 'APT29', 'UK Government'] },
    { source: 'Recorded Future', type: 'OSINT', classification: 'UNCLASSIFIED//FOUO', timestamp: '2026-09-12 16:00:00Z', content: 'Dark web monitoring indicates significant increase in zero-day exploit advertisements. 3 new Windows kernel exploits offered for sale at $500K+ each. Buyer analysis suggests nation-state procurement through intermediaries.', confidence: 80, relatedTo: ['Zero-Day Market', 'Windows', 'Nation-State'] },
    { source: 'NSA/TAO', type: 'CYBINT', classification: 'TOP SECRET//SI//NOFORN', timestamp: '2026-09-12 14:00:00Z', content: 'Technical analysis of recovered malware from compromised defense contractor network confirms attribution to PLA Unit 61398. Malware includes novel data exfiltration module using steganography in JPEG images. Classified weapons system data confirmed exfiltrated.', confidence: 96, relatedTo: ['China', 'Unit 61398', 'Defense'] },
    { source: 'CIA/DO', type: 'HUMINT', classification: 'TOP SECRET//HCS//NOFORN', timestamp: '2026-09-12 10:00:00Z', content: 'Source reporting from Pyongyang indicates RGB leadership has been directed to generate $500M through cyber theft operations in Q4 2026 to fund nuclear weapons program. New targeting guidance prioritizes cryptocurrency exchanges and DeFi platforms.', confidence: 68, relatedTo: ['North Korea', 'RGB', 'Crypto Theft'] },
    { source: 'ASD/ACS', type: 'SIGINT', classification: 'SECRET//REL FVEY', timestamp: '2026-09-12 08:00:00Z', content: 'Australian Signals Directorate reports detection of APT40 targeting maritime industry and port authorities in Indo-Pacific region. Campaign appears focused on shipping logistics data and naval movement information.', confidence: 82, relatedTo: ['China', 'APT40', 'Maritime'] },
    { source: 'CrowdStrike', type: 'CYBINT', classification: 'UNCLASSIFIED//FOUO', timestamp: '2026-09-11 22:00:00Z', content: 'New ransomware variant "PhantomLock" attributed to Russian-speaking e-crime group with suspected FSB ties. Targets healthcare sector specifically, disabling medical device firmware. 7 hospitals impacted across Europe in past 72 hours.', confidence: 86, relatedTo: ['Russia', 'Healthcare', 'Ransomware'] }
  ];

  for (var inf = 0; inf < intelFeeds.length; inf++) {
    var feed = intelFeeds[inf];
    var classColors = {
      'TOP SECRET': '#ff2244',
      'SECRET': '#ff6644',
      'UNCLASSIFIED': '#00ff88'
    };
    var classKey = feed.classification.indexOf('TOP SECRET') >= 0 ? 'TOP SECRET' : feed.classification.indexOf('SECRET') >= 0 ? 'SECRET' : 'UNCLASSIFIED';
    var classColor = classColors[classKey] || '#667';
    var typeColors = { 'SIGINT': '#00aaff', 'OSINT': '#00ff88', 'CYBINT': '#ff6644', 'HUMINT': '#ffaa00', 'GEOINT': '#aa66ff' };
    var typeColor = typeColors[feed.type] || '#667';

    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:6px;padding:12px;margin-bottom:8px;border-left:3px solid ' + typeColor + ';">';
    h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">';
    h += '<div style="background:' + typeColor + '22;color:' + typeColor + ';font-size:9px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;">' + esc(feed.type) + '</div>';
    h += '<div style="background:' + classColor + '22;color:' + classColor + ';font-size:9px;font-family:monospace;padding:3px 8px;border-radius:3px;">' + esc(feed.classification) + '</div>';
    h += '<div style="color:#00aaff;font-size:10px;font-family:monospace;font-weight:bold;">' + esc(feed.source) + '</div>';
    h += '<div style="margin-left:auto;color:#556;font-size:10px;font-family:monospace;">' + esc(feed.timestamp) + '</div>';
    h += '</div>';

    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;line-height:1.6;margin-bottom:8px;">' + esc(feed.content) + '</div>';

    h += '<div style="display:flex;align-items:center;justify-content:space-between;">';
    h += '<div style="display:flex;gap:6px;flex-wrap:wrap;">';
    for (var rt = 0; rt < feed.relatedTo.length; rt++) {
      h += '<span style="background:#111828;color:#889;font-size:9px;font-family:monospace;padding:2px 6px;border-radius:2px;">' + esc(feed.relatedTo[rt]) + '</span>';
    }
    h += '</div>';

    // Confidence meter
    var confColor = feed.confidence >= 85 ? '#00ff88' : feed.confidence >= 70 ? '#ffaa00' : '#ff6644';
    h += '<div style="display:flex;align-items:center;gap:6px;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;">CONFIDENCE:</div>';
    h += '<div style="width:60px;background:#111828;border-radius:3px;height:6px;overflow:hidden;">';
    h += '<div style="background:' + confColor + ';width:' + feed.confidence + '%;height:100%;border-radius:3px;"></div>';
    h += '</div>';
    h += '<div style="color:' + confColor + ';font-size:10px;font-family:monospace;font-weight:bold;">' + esc(feed.confidence) + '%</div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // ---- Correlation Engine ----
  h += '<div style="padding:16px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #ffaa0044;border-radius:8px;padding:16px;">';
  h += '<div style="color:#ffaa00;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #ffaa0033;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#9733;</span>CORRELATION ENGINE — HIGH-CONFIDENCE MULTI-SOURCE ALERTS</div>';

  var correlations = [
    { title: 'IMMINENT RUSSIAN CYBER OPERATION AGAINST EUROPEAN ENERGY', confidence: 94, sources: ['SIGINT — GRU operator communications (NSA/CSS)', 'SIGINT — GCHQ staging infrastructure detection', 'CYBINT — CrowdStrike PhantomLock attribution', 'HUMINT — CIA source on FSB authorization'], assessment: 'Multiple independent sources confirm preparation for offensive cyber operation targeting European energy sector. Pre-positioned implants, newly staged infrastructure, and operator communications all align. Predicted timeline: 48-96 hours.', priority: 'FLASH' },
    { title: 'CHINESE ESPIONAGE CAMPAIGN ESCALATION', confidence: 89, sources: ['SIGINT — PLA SSF tempo increase (NSA/CSS)', 'CYBINT — APT41 ChipDoor campaign (Mandiant)', 'CYBINT — Unit 61398 defense contractor breach (NSA/TAO)', 'GEOINT — APT40 maritime targeting (ASD)'], assessment: 'Converging indicators show coordinated Chinese cyber espionage escalation across semiconductor, defense, and maritime sectors. Multiple MSS/PLA units active simultaneously, suggesting centralized tasking at CPC level.', priority: 'PRIORITY' },
    { title: 'NORTH KOREAN CRYPTO THEFT SURGE', confidence: 87, sources: ['HUMINT — RGB funding directive (CIA/DO)', 'CYBINT — New laundering infrastructure (FBI/IC3)', 'GEOINT — Bureau 121 facility expansion (NGA)'], assessment: 'Regime-directed escalation of cryptocurrency theft operations confirmed. $500M Q4 target drives urgency. Expanded infrastructure and personnel suggest imminent large-scale attacks on DeFi platforms and exchanges.', priority: 'PRIORITY' }
  ];

  for (var cr = 0; cr < correlations.length; cr++) {
    var corr = correlations[cr];
    var corrPriorityColor = corr.priority === 'FLASH' ? '#ff2244' : '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid ' + corrPriorityColor + '44;border-radius:6px;padding:14px;margin-bottom:10px;border-left:4px solid ' + corrPriorityColor + ';">';
    h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">';
    h += '<div style="background:' + corrPriorityColor + ';color:#000;font-size:9px;font-family:monospace;font-weight:bold;padding:3px 10px;border-radius:3px;">' + esc(corr.priority) + '</div>';
    h += '<div style="color:#fff;font-size:13px;font-family:monospace;font-weight:bold;">' + esc(corr.title) + '</div>';
    h += '<div style="margin-left:auto;color:' + corrPriorityColor + ';font-size:14px;font-family:monospace;font-weight:bold;">' + esc(corr.confidence) + '% CONFIDENCE</div>';
    h += '</div>';

    h += '<div style="color:#aab;font-size:11px;font-family:monospace;line-height:1.6;margin-bottom:10px;">' + esc(corr.assessment) + '</div>';

    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:6px;">CONTRIBUTING SOURCES (' + corr.sources.length + '):</div>';
    for (var cs = 0; cs < corr.sources.length; cs++) {
      h += '<div style="color:#889;font-size:10px;font-family:monospace;padding:2px 0;display:flex;align-items:center;gap:6px;">';
      h += '<span style="color:#00aaff;font-size:8px;">&#9654;</span>' + esc(corr.sources[cs]);
      h += '</div>';
    }
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // ---- Intelligence Product Generator & Classification/Dissemination ----
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 24px 24px;">';

  // Product generator
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#128196;</span>INTELLIGENCE PRODUCT GENERATOR</div>';

  var intelProducts = [
    { type: 'SPOT Report', desc: 'Single-source reporting on time-sensitive intelligence', format: '1-2 pages, 20 min turnaround', lastGenerated: '2026-09-13 14:30Z' },
    { type: 'Situation Report (SITREP)', desc: 'Periodic summary of current intelligence picture', format: '3-5 pages, published every 6 hours', lastGenerated: '2026-09-13 12:00Z' },
    { type: 'Threat Assessment', desc: 'In-depth analysis of specific threat actor or campaign', format: '10-15 pages, 24 hour turnaround', lastGenerated: '2026-09-12 08:00Z' },
    { type: 'Intelligence Estimate', desc: 'Forward-looking assessment of adversary intentions and capabilities', format: '15-25 pages, 48 hour turnaround', lastGenerated: '2026-09-10 16:00Z' },
    { type: 'Warning Intelligence', desc: 'Urgent notification of imminent threat', format: '1 page, immediate dissemination', lastGenerated: '2026-09-13 14:45Z' },
    { type: 'Technical Analysis', desc: 'Detailed malware analysis, IOC report, or vulnerability assessment', format: '5-20 pages, 24-72 hour turnaround', lastGenerated: '2026-09-12 20:00Z' }
  ];

  for (var ip = 0; ip < intelProducts.length; ip++) {
    var prod = intelProducts[ip];
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:10px;margin-bottom:6px;display:flex;align-items:center;gap:10px;">';
    h += '<div style="flex:1;">';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;">' + esc(prod.type) + '</div>';
    h += '<div style="color:#889;font-size:10px;font-family:monospace;">' + esc(prod.desc) + '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;margin-top:2px;">' + esc(prod.format) + '</div>';
    h += '</div>';
    h += '<div style="text-align:right;">';
    h += '<div style="background:#00aaff22;color:#00aaff;font-size:9px;font-family:monospace;padding:4px 10px;border-radius:3px;cursor:pointer;border:1px solid #00aaff44;margin-bottom:4px;">GENERATE</div>';
    h += '<div style="color:#445;font-size:8px;font-family:monospace;">Last: ' + esc(prod.lastGenerated) + '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Classification & Dissemination
  h += '<div>';

  // Classification level management
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;margin-bottom:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ff2244;margin-right:8px;">&#128274;</span>CLASSIFICATION LEVELS</div>';

  var classLevels = [
    { level: 'TOP SECRET//SCI', color: '#ff2244', access: '47 personnel', desc: 'Sensitive Compartmented Information', caveats: 'SI, TK, HCS, NOFORN, ORCON' },
    { level: 'TOP SECRET', color: '#ff6644', access: '128 personnel', desc: 'Exceptionally grave damage to national security', caveats: 'NOFORN, REL FVEY, PROPIN' },
    { level: 'SECRET', color: '#ffaa00', access: '412 personnel', desc: 'Serious damage to national security', caveats: 'NOFORN, REL FVEY, LES' },
    { level: 'CONFIDENTIAL', color: '#00aaff', access: '1,847 personnel', desc: 'Damage to national security', caveats: 'Standard handling' },
    { level: 'UNCLASSIFIED//FOUO', color: '#00ff88', access: '8,500+ personnel', desc: 'For Official Use Only', caveats: 'CUI markings as applicable' }
  ];

  for (var cl = 0; cl < classLevels.length; cl++) {
    var cLevel = classLevels[cl];
    h += '<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #111828;">';
    h += '<div style="background:' + cLevel.color + ';color:#000;font-size:9px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;min-width:150px;text-align:center;">' + esc(cLevel.level) + '</div>';
    h += '<div style="flex:1;color:#889;font-size:10px;font-family:monospace;">' + esc(cLevel.desc) + '</div>';
    h += '<div style="color:#556;font-size:10px;font-family:monospace;">' + esc(cLevel.access) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Dissemination tracking
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#128228;</span>DISSEMINATION TRACKING</div>';

  var dissemination = [
    { product: 'FLASH — European Energy Threat', recipients: 'NSC, CYBERCOM, EUCOM, CISA, DOE, Five Eyes', sentAt: '2026-09-13 14:50Z', readBy: '12/14', classification: 'TS//SCI' },
    { product: 'SITREP — Daily Cyber Posture', recipients: 'NSC, CYBERCOM, DHS, FBI, IC partners', sentAt: '2026-09-13 12:15Z', readBy: '22/28', classification: 'SECRET' },
    { product: 'Threat Assessment — APT41 ChipDoor', recipients: 'CYBERCOM, NSA, FBI, CISA, DIB sector', sentAt: '2026-09-12 22:00Z', readBy: '34/41', classification: 'SECRET//NOFORN' },
    { product: 'Warning Intel — NK Crypto Surge', recipients: 'Treasury, SEC, FinCEN, FBI, IC partners', sentAt: '2026-09-12 16:00Z', readBy: '18/19', classification: 'TS//SCI' },
    { product: 'Technical Analysis — PhantomLock', recipients: 'HHS, CISA, FBI, European CERT partners', sentAt: '2026-09-12 08:00Z', readBy: '45/52', classification: 'SECRET//REL FVEY' }
  ];

  h += '<div style="overflow-x:auto;">';
  h += '<table style="width:100%;border-collapse:collapse;font-family:monospace;font-size:11px;">';
  h += '<thead><tr style="border-bottom:2px solid #1a2a44;">';
  var dissHeaders = ['PRODUCT', 'RECIPIENTS', 'SENT', 'READ', 'CLASS'];
  for (var dh = 0; dh < dissHeaders.length; dh++) {
    h += '<th style="text-align:left;padding:6px;color:#00aaff;font-size:10px;letter-spacing:1px;">' + esc(dissHeaders[dh]) + '</th>';
  }
  h += '</tr></thead><tbody>';
  for (var di = 0; di < dissemination.length; di++) {
    var diss = dissemination[di];
    h += '<tr style="border-bottom:1px solid #111828;">';
    h += '<td style="padding:6px;color:#ccd;">' + esc(diss.product) + '</td>';
    h += '<td style="padding:6px;color:#889;max-width:200px;">' + esc(diss.recipients) + '</td>';
    h += '<td style="padding:6px;color:#667;">' + esc(diss.sentAt) + '</td>';
    h += '<td style="padding:6px;color:#00ff88;">' + esc(diss.readBy) + '</td>';
    var dissClassColor = diss.classification.indexOf('TS') >= 0 ? '#ff2244' : '#ffaa00';
    h += '<td style="padding:6px;"><span style="color:' + dissClassColor + ';font-size:9px;">' + esc(diss.classification) + '</span></td>';
    h += '</tr>';
  }
  h += '</tbody></table>';
  h += '</div>';
  h += '</div>';

  h += '</div>'; // end classification/dissemination column

  h += '</div>'; // end grid

  return h;
}


// ============================================================================
// TAB 9: CYBER WARFARE SIMULATOR
// ============================================================================
function renderWarSim() {
  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:4px 0;font-family:monospace;font-size:11px;letter-spacing:3px;font-weight:bold;">TOP SECRET // SCI // WARGAME ACTIVE — AUTHORIZED PERSONNEL ONLY</div>';

  h += '<div style="padding:20px 24px 0 24px;">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">';
  h += '<div>';
  h += '<h2 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">CYBER WARFARE SIMULATOR</h2>';
  h += '<div style="color:#667;font-size:12px;font-family:monospace;margin-top:4px;letter-spacing:1px;">SCENARIO-BASED WARGAMING &bull; BLUE TEAM RESPONSE TRAINING</div>';
  h += '</div>';
  h += '<div style="display:flex;gap:10px;">';
  h += '<div style="background:linear-gradient(135deg,#0a0e1a,#101828);border:1px solid #00aaff44;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#00aaff;font-size:10px;font-family:monospace;letter-spacing:1px;">SCENARIOS</div>';
  h += '<div style="color:#00aaff;font-size:22px;font-weight:bold;font-family:monospace;">15</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#0a1a0a,#152a15);border:1px solid #00ff88;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#00ff88;font-size:10px;font-family:monospace;letter-spacing:1px;">COMPLETED</div>';
  h += '<div style="color:#00ff88;font-size:22px;font-weight:bold;font-family:monospace;">8</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#1a1a0a,#2a2a15);border:1px solid #ffaa00;border-radius:6px;padding:8px 16px;text-align:center;">';
  h += '<div style="color:#ffaa00;font-size:10px;font-family:monospace;letter-spacing:1px;">AVG SCORE</div>';
  h += '<div style="color:#ffaa00;font-size:22px;font-weight:bold;font-family:monospace;">72%</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Scenarios
  var scenarios = WARGAME_SCENARIOS || [
    { codename: 'DRAGON STORM', adversary: 'China (Volt Typhoon)', difficulty: 5, duration: '6 hours', category: 'Critical Infrastructure', desc: 'China\'s Volt Typhoon activates pre-positioned access in US critical infrastructure during Taiwan Strait crisis. Power grids, water systems, and telecom simultaneously targeted.', phases: [
      { name: 'Phase 1: Activation', desc: 'Pre-positioned implants in 47 utilities activate simultaneously. Initial indicators: anomalous LOTL activity on OT networks.', blueOptions: ['Activate CISA emergency protocols', 'Deploy enhanced ICS monitoring', 'Switch critical systems to manual operation', 'Coordinate with sector ISACs'] },
      { name: 'Phase 2: Disruption', desc: 'Coordinated disruption begins. 3 regional power grids experience load manipulation. Water treatment SCADA systems report unauthorized changes.', blueOptions: ['Emergency grid isolation', 'Activate manual water treatment overrides', 'Deploy CYBERCOM hunt teams', 'Notify National Guard Cyber units'] },
      { name: 'Phase 3: Escalation', desc: 'Adversary deploys destructive wiper targeting backup systems. Telecom switching centers experience outages disrupting emergency communications.', blueOptions: ['Activate EMCON procedures', 'Deploy military satellite communications', 'Execute counter-cyber operation against C2', 'Activate FEMA emergency protocols'] },
      { name: 'Phase 4: Recovery', desc: 'Blue team must coordinate multi-sector recovery while defending against persistent adversary presence.', blueOptions: ['Prioritize power grid recovery', 'Deploy clean backup systems', 'Conduct systematic threat hunting', 'Establish secure coordination channels'] }
    ]},
    { codename: 'BEAR\'S CLAW', adversary: 'Russia (Sandworm / APT28)', difficulty: 5, duration: '8 hours', category: 'Multi-Domain', desc: 'Russia launches coordinated cyber attack on NATO member state targeting power grid, telecom, and financial systems simultaneously — replicating expanded Ukraine-style operations.', phases: [
      { name: 'Phase 1: Preparation', desc: 'Intelligence indicates GRU operators accessing pre-positioned implants in Baltic state infrastructure.', blueOptions: ['Alert NATO CCDCOE', 'Activate Article 5 consultation', 'Deploy cyber defense teams', 'Enhance SIGINT collection'] },
      { name: 'Phase 2: Initial Strike', desc: 'Coordinated attacks: BlackEnergy variant targets power grid, NotPetya-like wiper hits financial sector.', blueOptions: ['Isolate affected networks', 'Activate mutual defense agreements', 'Deploy forensic teams', 'Coordinate with Five Eyes'] },
      { name: 'Phase 3: Sustained Operations', desc: 'Adversary maintains persistent access. Disinformation campaign accompanies cyber operations.', blueOptions: ['Counter-messaging campaign', 'Offensive cyber response under Article 5', 'Deploy additional NATO cyber teams', 'Coordinate ISP-level blocking'] },
      { name: 'Phase 4: Restoration', desc: 'Multi-nation recovery effort while maintaining defensive posture.', blueOptions: ['EU mutual aid activation', 'Systematic infrastructure rebuilding', 'Adversary eviction operations', 'Diplomatic and legal response coordination'] }
    ]},
    { codename: 'HERMIT\'S FURY', adversary: 'North Korea (Lazarus Group)', difficulty: 4, duration: '4 hours', category: 'Financial', desc: 'North Korea deploys WannaCry-scale worm targeting global financial sector for massive cryptocurrency theft. Combines destructive malware with sophisticated crypto-draining operations.', phases: [
      { name: 'Phase 1: Propagation', desc: 'New worm exploiting unpatched Exchange vulnerability begins spreading across financial networks globally.', blueOptions: ['Emergency patch deployment', 'Network segmentation enforcement', 'Activate SWIFT security protocols', 'Coordinate with FS-ISAC'] },
      { name: 'Phase 2: Theft Operations', desc: 'While worm diverts attention, targeted attacks drain cryptocurrency exchanges and DeFi protocols.', blueOptions: ['Freeze suspicious transactions', 'Coordinate with Treasury/FinCEN', 'Deploy blockchain monitoring', 'Alert crypto exchanges'] },
      { name: 'Phase 3: Destruction', desc: 'Worm activates wiper payload in compromised systems, destroying financial records.', blueOptions: ['Activate backup recovery', 'Market trading halt coordination', 'Deploy clean system images', 'Forensic evidence preservation'] }
    ]},
    { codename: 'PERSIAN FIRE', adversary: 'Iran (APT33 / APT34)', difficulty: 4, duration: '5 hours', category: 'Energy', desc: 'Iran retaliates against new sanctions with destructive wiper malware targeting oil and gas sector. Shamoon-variant deployed against energy companies in Gulf states and Western partners.', phases: [
      { name: 'Phase 1: Initial Access', desc: 'Spearphishing campaign targets energy sector executives. APT34 deploys custom RAT through compromised vendor portals.', blueOptions: ['Block known APT34 IOCs', 'Enhanced email filtering', 'Vendor portal access review', 'Deploy EDR to all endpoints'] },
      { name: 'Phase 2: Wiper Deployment', desc: 'Shamoon-3 variant deployed across 6 energy companies. MBR overwriting begins during off-hours.', blueOptions: ['Emergency system shutdown', 'Isolate OT from IT', 'Activate disaster recovery', 'Coordinate with DOE/CISA'] },
      { name: 'Phase 3: Sustained Campaign', desc: 'Secondary attacks target backup infrastructure and cloud environments.', blueOptions: ['Air-gap critical backups', 'Deploy out-of-band management', 'Counter-cyber operations against staging', 'International coalition response'] }
    ]},
    { codename: 'CASCADE ZERO', adversary: 'Multi-Nation Coalition', difficulty: 5, duration: '10 hours', category: 'Internet Infrastructure', desc: 'Coordinated multi-nation attack on internet infrastructure. BGP hijacking, DNS root server attacks, and physical disruption of undersea cables create widespread internet outages.', phases: [
      { name: 'Phase 1: BGP Chaos', desc: 'Massive BGP hijacking redirects traffic for major ASNs through adversary-controlled infrastructure.', blueOptions: ['Activate RPKI enforcement', 'Coordinate with Tier 1 providers', 'Deploy route origin validation', 'Alert NANOG community'] },
      { name: 'Phase 2: DNS Under Attack', desc: 'DDoS targeting DNS root servers and major resolvers. DNS poisoning targeting critical domains.', blueOptions: ['Activate Anycast DNS failover', 'Deploy DNSSEC validation', 'Coordinate with ICANN', 'Activate DNS backup infrastructure'] },
      { name: 'Phase 3: Physical Layer', desc: 'Reports of undersea cable cuts in multiple locations. Satellite communications degraded.', blueOptions: ['Reroute through surviving cables', 'Activate military satellite backup', 'Deploy cable repair ships', 'Coordinate with allied navies'] },
      { name: 'Phase 4: Recovery', desc: 'Internet fragmentation recovery while maintaining national security communications.', blueOptions: ['Priority restoration sequencing', 'Emergency peering agreements', 'Deploy mobile communication units', 'International coordination for cable repair'] }
    ]},
    { codename: 'DARK HARVEST', adversary: 'Unknown APT (Supply Chain)', difficulty: 4, duration: '6 hours', category: 'Supply Chain', desc: 'Sophisticated supply chain attack through major cloud provider affects thousands of organizations. Compromised update mechanism delivers backdoored software to enterprise customers.', phases: [
      { name: 'Phase 1: Discovery', desc: 'Anomalous network traffic detected from cloud management software deployed across 15,000+ organizations.', blueOptions: ['Quarantine affected software', 'Reverse engineer update package', 'Coordinate vendor disclosure', 'Deploy network detection signatures'] },
      { name: 'Phase 2: Blast Radius Assessment', desc: 'Compromised software found in government, financial, healthcare, and defense organizations.', blueOptions: ['Full enterprise software audit', 'Deploy YARA rules for IOCs', 'Activate CISA emergency directive', 'Cross-sector coordination'] },
      { name: 'Phase 3: Eviction', desc: 'Advanced persistence mechanisms discovered. Adversary used legitimate cloud APIs for data exfiltration.', blueOptions: ['Credential rotation enterprise-wide', 'Cloud API audit and revocation', 'Deploy enhanced cloud monitoring', 'Coordinate with cloud provider'] }
    ]},
    { codename: 'SILENT FALL', adversary: 'Insider + Nation-State APT', difficulty: 5, duration: '8 hours', category: 'Insider Threat', desc: 'Insider threat combined with nation-state APT gains access to classified networks. Trusted insider provides physical access enabling bypass of air-gap protections on classified systems.', phases: [
      { name: 'Phase 1: Discovery', desc: 'Anomalous data transfers detected on classified network. USB device usage logged outside normal patterns.', blueOptions: ['Activate counterintelligence investigation', 'Enhanced monitoring on suspect systems', 'Review physical access logs', 'Deploy USB activity monitoring'] },
      { name: 'Phase 2: Containment', desc: 'Insider identified but has already exfiltrated data to nation-state handler. Malware discovered on classified systems.', blueOptions: ['Restrict insider access immediately', 'Forensic imaging of all accessed systems', 'Coordinate with FBI CI', 'Damage assessment initiation'] },
      { name: 'Phase 3: Recovery', desc: 'Full damage assessment reveals scope of compromise. Classified programs potentially exposed.', blueOptions: ['Program security review', 'Personnel reinvestigation', 'System rebuild from trusted media', 'Coordinate SAP notifications'] }
    ]},
    { codename: 'CRIMSON TIDE', adversary: 'Russia (APT29 / Turla)', difficulty: 4, duration: '5 hours', category: 'Government Espionage', desc: 'Coordinated Russian intelligence operation targeting Five Eyes government networks. APT29 and Turla conduct simultaneous espionage campaigns against diplomatic communications.', phases: [
      { name: 'Phase 1: Infiltration', desc: 'APT29 exploits zero-day in collaboration platform used by Five Eyes governments for secure communications.', blueOptions: ['Emergency patching', 'Switch to backup secure comms', 'Deploy enhanced email monitoring', 'Alert Five Eyes partners'] },
      { name: 'Phase 2: Lateral Movement', desc: 'Adversary pivots from collaboration platform to email servers and file shares containing diplomatic cables.', blueOptions: ['Network segmentation enforcement', 'Privileged access lockdown', 'Deploy deception technology', 'Activate hunt teams'] },
      { name: 'Phase 3: Exfiltration', desc: 'Data exfiltration detected through DNS tunneling and steganographic channels.', blueOptions: ['Block exfiltration channels', 'Deploy DNS monitoring', 'Coordinate Five Eyes response', 'Begin damage assessment'] }
    ]},
    { codename: 'IRON CURTAIN', adversary: 'Russia (GRU Unit 29155)', difficulty: 4, duration: '4 hours', category: 'Election Security', desc: 'Russian influence operation combined with cyber attacks targeting democratic elections. Combines voter database manipulation, disinformation, and election infrastructure attacks.', phases: [
      { name: 'Phase 1: Reconnaissance', desc: 'Scanning of state election infrastructure detected. Phishing campaigns target election officials.', blueOptions: ['Alert state election officials', 'Deploy CISA election monitoring', 'Enhanced voter database protection', 'Public awareness campaign'] },
      { name: 'Phase 2: Active Operations', desc: 'Voter registration databases modified in 3 states. Disinformation campaigns launched on social media.', blueOptions: ['Activate backup voter rolls', 'Coordinate with social media platforms', 'Deploy paper ballot backup procedures', 'FBI investigation'] }
    ]},
    { codename: 'PHANTOM FLEET', adversary: 'China (APT40)', difficulty: 3, duration: '4 hours', category: 'Maritime/Military', desc: 'Chinese maritime cyber espionage operation targeting naval logistics and port authority systems across Indo-Pacific to map military supply chain vulnerabilities.', phases: [
      { name: 'Phase 1: Port Infiltration', desc: 'APT40 compromises port management systems at 5 Indo-Pacific naval facilities.', blueOptions: ['Isolate port management networks', 'Deploy maritime cyber teams', 'Coordinate with allied navies', 'Audit logistics databases'] },
      { name: 'Phase 2: Intelligence Collection', desc: 'Adversary mapping ship movements, supply routes, and maintenance schedules.', blueOptions: ['Deploy deception data', 'Enhanced monitoring on logistics systems', 'Coordinate with INDOPACOM', 'Counter-intelligence operations'] }
    ]},
    { codename: 'SHATTERED GLASS', adversary: 'Iran (MuddyWater)', difficulty: 3, duration: '3 hours', category: 'Healthcare', desc: 'Iranian cyber attack targeting healthcare systems in Gulf states and Israel. Combines ransomware with data destruction targeting hospital networks and medical research.', phases: [
      { name: 'Phase 1: Initial Compromise', desc: 'MuddyWater deploys custom ransomware via compromised medical supply vendor.', blueOptions: ['Quarantine affected systems', 'Activate clinical downtime procedures', 'Deploy incident response teams', 'Coordinate with health authorities'] },
      { name: 'Phase 2: Escalation', desc: 'Attack spreads to connected medical devices. Patient data exfiltration detected.', blueOptions: ['Medical device network isolation', 'Patient diversion to unaffected facilities', 'Data breach notification', 'Forensic preservation'] }
    ]},
    { codename: 'STEEL RAIN', adversary: 'North Korea (Andariel)', difficulty: 4, duration: '5 hours', category: 'Defense/Aerospace', desc: 'North Korean espionage campaign targeting missile defense and satellite technology. Combines cyber intrusions with procurement networks for sanctions evasion.', phases: [
      { name: 'Phase 1: Contractor Compromise', desc: 'Andariel compromises defense contractor through watering hole on aerospace trade publication.', blueOptions: ['Block malicious domains', 'Audit contractor network access', 'Deploy enhanced EDR', 'Coordinate with defense agencies'] },
      { name: 'Phase 2: Data Theft', desc: 'Classified missile defense schematics accessed. Exfiltration through compromised cloud storage.', blueOptions: ['Revoke cloud access tokens', 'Deploy DLP monitoring', 'Coordinate with DCSA', 'Initiate damage assessment'] },
      { name: 'Phase 3: Proliferation', desc: 'Evidence suggests stolen data being shared with ballistic missile program.', blueOptions: ['Intelligence community briefing', 'Diplomatic response coordination', 'Enhanced monitoring of procurement networks', 'Sanctions enforcement coordination'] }
    ]},
    { codename: 'TOXIC RAIN', adversary: 'Unknown State Actor', difficulty: 5, duration: '6 hours', category: 'Water/Chemical', desc: 'Cyber attack targets water treatment and chemical processing facilities attempting to manipulate chemical levels to dangerous concentrations.', phases: [
      { name: 'Phase 1: Access', desc: 'Unauthorized access to water treatment SCADA systems detected at 4 facilities serving 2M+ people.', blueOptions: ['Immediate switch to manual operations', 'Deploy ICS security teams', 'Water quality emergency sampling', 'Public notification preparation'] },
      { name: 'Phase 2: Manipulation', desc: 'Chemical dosing parameters modified — chlorine levels set to dangerous concentrations.', blueOptions: ['Emergency manual override', 'Shut down automated dosing', 'Deploy hazmat teams', 'Coordinate with EPA'] },
      { name: 'Phase 3: Investigation', desc: 'Attribution analysis points to nation-state actor. Similar attacks detected at chemical plants.', blueOptions: ['Sector-wide emergency alert', 'Deploy CISA ICS-CERT teams', 'Enhanced chemical facility monitoring', 'IC attribution assessment'] }
    ]},
    { codename: 'BLACK AURORA', adversary: 'Multi-Actor (State + Criminal)', difficulty: 5, duration: '10 hours', category: 'Combined Operations', desc: 'Coordinated attack combining nation-state and criminal elements. State actor provides zero-days to criminal ransomware groups targeting critical infrastructure for plausible deniability.', phases: [
      { name: 'Phase 1: Criminal Front', desc: 'Ransomware group deploys using nation-state zero-day. Targets appear random but focus on critical infrastructure.', blueOptions: ['Emergency patching for zero-day', 'Deploy interim mitigations', 'Coordinate with FBI and CISA', 'Sector-wide alerting'] },
      { name: 'Phase 2: State Objectives', desc: 'Behind ransomware distraction, state actors conduct espionage operations against intelligence targets.', blueOptions: ['Enhanced monitoring on IC networks', 'Deploy deception technology', 'Threat hunting on parallel infrastructure', 'Intelligence sharing with allies'] },
      { name: 'Phase 3: Attribution Challenge', desc: 'Distinguishing criminal from state activity critical for response calibration.', blueOptions: ['Forensic analysis of malware lineage', 'SIGINT correlation', 'Diplomatic intelligence gathering', 'Proportional response planning'] },
      { name: 'Phase 4: Response', desc: 'Combined law enforcement and national security response required.', blueOptions: ['Joint FBI/CYBERCOM task force', 'Indictments and sanctions', 'Counter-cyber operations', 'International coalition building'] }
    ]},
    { codename: 'FROZEN DAWN', adversary: 'Russia (FSB / Turla)', difficulty: 4, duration: '5 hours', category: 'Energy/Arctic', desc: 'Russian cyber operations targeting Arctic energy infrastructure and Northern Sea Route monitoring systems during territorial dispute escalation.', phases: [
      { name: 'Phase 1: Reconnaissance', desc: 'Turla conducting extensive reconnaissance of Arctic offshore platform networks and pipeline monitoring systems.', blueOptions: ['Enhanced Arctic infrastructure monitoring', 'Coordinate with Nordic allies', 'Deploy offshore cyber teams', 'Review satellite communication security'] },
      { name: 'Phase 2: Disruption', desc: 'Pipeline monitoring systems manipulated. Safety systems at offshore platforms targeted.', blueOptions: ['Activate safety system overrides', 'Emergency platform evacuation preparation', 'Military asset deployment', 'Diplomatic escalation'] },
      { name: 'Phase 3: Strategic Response', desc: 'Multi-domain response required as cyber attacks coincide with military posturing.', blueOptions: ['NATO Article 4 consultation', 'Combined military-cyber deterrence', 'Alliance solidarity demonstration', 'De-escalation diplomatic channel'] }
    ]}
  ];

  h += '<div style="padding:0 24px 16px 24px;">';

  // Active simulation display
  h += '<div style="background:linear-gradient(135deg,#1a0a0a,#0a0e1a);border:2px solid #ff224444;border-radius:8px;padding:16px;margin-bottom:16px;">';
  h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">';
  h += '<div style="background:#ff2244;color:#fff;font-size:10px;font-family:monospace;font-weight:bold;padding:4px 12px;border-radius:3px;animation:se-pulse 2s ease-in-out infinite;">LIVE OPERATION</div>';
  h += '<div style="color:#fff;font-size:16px;font-family:monospace;font-weight:bold;letter-spacing:1px;">DRAGON STORM — Phase 2: Disruption</div>';
  h += '</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px;">';
  var simMetrics = [
    { label: 'ELAPSED TIME', value: '02:34:17', color: '#00aaff' },
    { label: 'DETECTION SCORE', value: '78%', color: '#00ff88' },
    { label: 'CONTAINMENT', value: '45%', color: '#ffaa00' },
    { label: 'SYSTEMS AFFECTED', value: '23/47', color: '#ff2244' }
  ];
  for (var sm = 0; sm < simMetrics.length; sm++) {
    var sMetric = simMetrics[sm];
    h += '<div style="background:#0a0e1a;border:1px solid ' + sMetric.color + '33;border-radius:6px;padding:10px;text-align:center;">';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">' + esc(sMetric.label) + '</div>';
    h += '<div style="color:' + sMetric.color + ';font-size:22px;font-weight:bold;font-family:monospace;">' + esc(sMetric.value) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Phase progression
  h += '<div style="display:flex;gap:4px;margin-bottom:14px;">';
  var phaseLabels = ['Phase 1: Activation', 'Phase 2: Disruption', 'Phase 3: Escalation', 'Phase 4: Recovery'];
  for (var pl = 0; pl < phaseLabels.length; pl++) {
    var phaseActive = pl <= 1;
    var phaseCurrent = pl === 1;
    h += '<div style="flex:1;background:' + (phaseActive ? (phaseCurrent ? '#00aaff22' : '#00ff8822') : '#111828') + ';border:1px solid ' + (phaseCurrent ? '#00aaff' : phaseActive ? '#00ff8844' : '#1a2a44') + ';border-radius:4px;padding:6px 8px;text-align:center;">';
    h += '<div style="color:' + (phaseCurrent ? '#00aaff' : phaseActive ? '#00ff88' : '#445') + ';font-size:10px;font-family:monospace;font-weight:bold;">' + esc(phaseLabels[pl]) + '</div>';
    h += '<div style="color:' + (phaseActive ? '#889' : '#334') + ';font-size:9px;font-family:monospace;margin-top:2px;">' + (phaseCurrent ? 'IN PROGRESS' : phaseActive ? 'COMPLETED' : 'PENDING') + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Blue team response options for current phase
  h += '<div style="color:#00aaff;font-size:11px;font-family:monospace;letter-spacing:1px;margin-bottom:8px;">BLUE TEAM RESPONSE OPTIONS:</div>';
  var currentPhaseOptions = ['Emergency grid isolation', 'Activate manual water treatment overrides', 'Deploy CYBERCOM hunt teams', 'Notify National Guard Cyber units'];
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">';
  for (var cpo = 0; cpo < currentPhaseOptions.length; cpo++) {
    var isSelectedOpt = cpo === 0;
    h += '<div style="background:' + (isSelectedOpt ? '#00aaff22' : '#0a0e1a') + ';border:1px solid ' + (isSelectedOpt ? '#00aaff' : '#1a2a44') + ';border-radius:4px;padding:8px;cursor:pointer;color:' + (isSelectedOpt ? '#00aaff' : '#889') + ';font-size:11px;font-family:monospace;">';
    h += (isSelectedOpt ? '&#9745; ' : '&#9744; ') + esc(currentPhaseOptions[cpo]);
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Scenario library grid
  h += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">';
  for (var sc = 0; sc < scenarios.length; sc++) {
    var scenario = scenarios[sc];
    var scDiffColor = scenario.difficulty >= 5 ? '#ff2244' : scenario.difficulty >= 4 ? '#ffaa00' : '#00aaff';
    var isActive = sc === 0;
    h += '<div style="background:linear-gradient(135deg,' + (isActive ? '#0c1525' : '#0c1020') + ',#0a0e1a);border:1px solid ' + (isActive ? '#00aaff44' : '#1a2a44') + ';border-radius:8px;padding:14px;cursor:pointer;' + (isActive ? 'box-shadow:0 0 15px #00aaff11;' : '') + '" onclick="this.querySelector(\'.se-scenario-phases\').style.display=this.querySelector(\'.se-scenario-phases\').style.display===\'none\'?\'block\':\'none\'">';

    // Codename
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">';
    h += '<div style="color:#fff;font-size:14px;font-family:monospace;font-weight:bold;letter-spacing:1px;">' + esc(scenario.codename) + '</div>';
    if (isActive) {
      h += '<div style="background:#00aaff22;color:#00aaff;font-size:8px;font-family:monospace;padding:2px 6px;border-radius:2px;">ACTIVE</div>';
    }
    h += '</div>';

    // Adversary
    h += '<div style="color:#ff6644;font-size:11px;font-family:monospace;margin-bottom:6px;">' + esc(scenario.adversary) + '</div>';

    // Category badge
    h += '<div style="display:inline-block;background:#111828;color:#889;font-size:9px;font-family:monospace;padding:2px 6px;border-radius:2px;margin-bottom:8px;">' + esc(scenario.category) + '</div>';

    // Description
    h += '<div style="color:#889;font-size:10px;font-family:monospace;line-height:1.5;margin-bottom:10px;min-height:60px;">' + esc(scenario.desc) + '</div>';

    // Difficulty & duration
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">';
    h += '<div style="display:flex;gap:2px;">';
    for (var ds = 0; ds < 5; ds++) {
      h += '<span style="color:' + (ds < scenario.difficulty ? scDiffColor : '#222') + ';font-size:12px;">&#9733;</span>';
    }
    h += '</div>';
    h += '<div style="color:#556;font-size:10px;font-family:monospace;">' + esc(scenario.duration) + '</div>';
    h += '</div>';

    // Phases count
    h += '<div style="color:#445;font-size:9px;font-family:monospace;margin-bottom:8px;">' + scenario.phases.length + ' phases &bull; ' + esc(scenario.adversary) + '</div>';

    // Launch button
    h += '<div style="background:' + (isActive ? '#00aaff' : '#00aaff22') + ';color:' + (isActive ? '#000' : '#00aaff') + ';font-size:10px;font-family:monospace;text-align:center;padding:6px;border-radius:4px;cursor:pointer;border:1px solid #00aaff44;font-weight:bold;">' + (isActive ? 'OPERATION IN PROGRESS' : 'LAUNCH SCENARIO') + '</div>';

    // Expandable phases
    h += '<div class="se-scenario-phases" style="display:none;margin-top:10px;padding-top:10px;border-top:1px solid #1a2a44;">';
    for (var sp = 0; sp < scenario.phases.length; sp++) {
      var sPhase = scenario.phases[sp];
      h += '<div style="margin-bottom:8px;padding:8px;background:#0a0e1a;border:1px solid #111828;border-radius:4px;">';
      h += '<div style="color:#00aaff;font-size:11px;font-family:monospace;font-weight:bold;margin-bottom:4px;">' + esc(sPhase.name) + '</div>';
      h += '<div style="color:#889;font-size:10px;font-family:monospace;line-height:1.4;margin-bottom:6px;">' + esc(sPhase.desc) + '</div>';
      h += '<div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;margin-bottom:4px;">BLUE TEAM OPTIONS:</div>';
      for (var bo = 0; bo < sPhase.blueOptions.length; bo++) {
        h += '<div style="color:#667;font-size:10px;font-family:monospace;padding:2px 0;">&#9744; ' + esc(sPhase.blueOptions[bo]) + '</div>';
      }
      h += '</div>';
    }
    h += '</div>';

    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // ---- Scoring & After-Action ----
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 24px 24px;">';

  // Scoring
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#127942;</span>SCORING DASHBOARD</div>';

  var scoringCategories = [
    { category: 'Detection Speed', score: 85, max: 100, desc: 'How quickly threats were identified', color: '#00ff88' },
    { category: 'Containment Effectiveness', score: 72, max: 100, desc: 'Ability to limit blast radius', color: '#00aaff' },
    { category: 'Recovery Time', score: 68, max: 100, desc: 'Speed of service restoration', color: '#ffaa00' },
    { category: 'Communication', score: 90, max: 100, desc: 'Coordination and reporting quality', color: '#00ff88' },
    { category: 'Decision Quality', score: 78, max: 100, desc: 'Appropriateness of response actions', color: '#00aaff' },
    { category: 'Collateral Avoidance', score: 95, max: 100, desc: 'Minimization of unintended effects', color: '#00ff88' }
  ];

  var totalScore = 0;
  for (var ssc = 0; ssc < scoringCategories.length; ssc++) {
    totalScore += scoringCategories[ssc].score;
  }
  var avgScore = Math.round(totalScore / scoringCategories.length);

  h += '<div style="text-align:center;margin-bottom:14px;">';
  h += '<div style="color:#556;font-size:10px;font-family:monospace;letter-spacing:1px;">OVERALL SCORE</div>';
  h += '<div style="color:' + (avgScore >= 80 ? '#00ff88' : avgScore >= 60 ? '#ffaa00' : '#ff2244') + ';font-size:42px;font-weight:bold;font-family:monospace;">' + avgScore + '<span style="font-size:18px;color:#556;">/ 100</span></div>';
  h += '</div>';

  for (var scr = 0; scr < scoringCategories.length; scr++) {
    var sCat = scoringCategories[scr];
    h += '<div style="margin-bottom:8px;">';
    h += '<div style="display:flex;justify-content:space-between;margin-bottom:3px;">';
    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;">' + esc(sCat.category) + '</div>';
    h += '<div style="color:' + sCat.color + ';font-size:11px;font-family:monospace;font-weight:bold;">' + esc(sCat.score) + '</div>';
    h += '</div>';
    h += '<div style="background:#111828;border-radius:4px;height:6px;overflow:hidden;">';
    h += '<div style="background:linear-gradient(90deg,' + sCat.color + ',' + sCat.color + '88);width:' + sCat.score + '%;height:100%;border-radius:4px;"></div>';
    h += '</div>';
    h += '<div style="color:#445;font-size:9px;font-family:monospace;margin-top:2px;">' + esc(sCat.desc) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // After-action review
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00ff88;margin-right:8px;">&#128196;</span>AFTER-ACTION REVIEW</div>';

  var aarItems = [
    { type: 'SUSTAIN', items: ['Rapid initial detection (under 15 minutes)', 'Effective cross-sector communication protocols', 'Successful manual override of OT systems', 'Strong leadership decision-making under pressure'], color: '#00ff88' },
    { type: 'IMPROVE', items: ['Containment of lateral movement took too long', 'Backup communication channels not tested pre-exercise', 'Recovery prioritization caused delay in telecom restoration', 'Forensic evidence preservation protocols not followed consistently'], color: '#ffaa00' },
    { type: 'CRITICAL FINDINGS', items: ['Pre-positioned LOTL techniques bypassed standard detection', 'Manual override training insufficient for water sector operators', 'No established protocol for simultaneous multi-sector incidents', 'Intelligence sharing delays between federal and state entities'], color: '#ff2244' }
  ];

  for (var aar = 0; aar < aarItems.length; aar++) {
    var aarItem = aarItems[aar];
    h += '<div style="margin-bottom:12px;">';
    h += '<div style="color:' + aarItem.color + ';font-size:11px;font-family:monospace;font-weight:bold;letter-spacing:1px;margin-bottom:6px;">' + esc(aarItem.type) + '</div>';
    for (var ai = 0; ai < aarItem.items.length; ai++) {
      h += '<div style="color:#889;font-size:10px;font-family:monospace;padding:3px 0;display:flex;align-items:flex-start;gap:6px;">';
      h += '<span style="color:' + aarItem.color + ';font-size:8px;margin-top:4px;">&#9654;</span>' + esc(aarItem.items[ai]);
      h += '</div>';
    }
    h += '</div>';
  }

  h += '<div style="margin-top:12px;background:#00aaff11;border:1px solid #00aaff33;border-radius:4px;padding:10px;">';
  h += '<div style="color:#00aaff;font-size:10px;font-family:monospace;font-weight:bold;margin-bottom:4px;">LESSONS LEARNED</div>';
  h += '<div style="color:#889;font-size:10px;font-family:monospace;line-height:1.5;">Multi-sector attacks require pre-established coordination protocols that are regularly exercised. Manual override capabilities must be maintained and tested quarterly. Intelligence sharing between classification levels needs streamlined procedures for crisis situations.</div>';
  h += '</div>';
  h += '</div>';

  h += '</div>'; // end scoring grid

  return h;
}


// ============================================================================
// TAB 10: COMMAND AUTHORITY
// ============================================================================
function renderCommand() {
  var h = '';

  // Classification banner
  h += '<div class="se-classification-banner" style="background:#cc0000;color:#fff;text-align:center;padding:4px 0;font-family:monospace;font-size:11px;letter-spacing:3px;font-weight:bold;">TOP SECRET // SCI // NOFORN — EXECUTIVE DECISION SUPPORT</div>';

  h += '<div style="padding:20px 24px 0 24px;">';
  h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">';
  h += '<div>';
  h += '<h2 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">COMMAND AUTHORITY CENTER</h2>';
  h += '<div style="color:#667;font-size:12px;font-family:monospace;margin-top:4px;letter-spacing:1px;">EXECUTIVE DECISION SUPPORT &bull; NATIONAL CYBER POSTURE</div>';
  h += '</div>';
  h += '<div style="background:linear-gradient(135deg,#1a0a0a,#2a1515);border:2px solid #ff2244;border-radius:8px;padding:10px 20px;text-align:center;">';
  h += '<div style="color:#ff2244;font-size:10px;font-family:monospace;letter-spacing:2px;">GLOBAL CYBER THREAT LEVEL</div>';
  h += '<div style="color:#ff2244;font-size:32px;font-weight:bold;font-family:monospace;">BRAVO</div>';
  h += '<div style="color:#ff6644;font-size:10px;font-family:monospace;">ELEVATED — INCREASED RISK</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Executive brief panel
  h += '<div style="padding:0 24px 16px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:2px solid #00aaff44;border-radius:8px;padding:20px;">';
  h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:10px;">';
  h += '<div style="color:#00aaff;font-size:15px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">EXECUTIVE BRIEF — GLOBAL CYBER POSTURE SUMMARY</div>';
  h += '<div style="margin-left:auto;color:#556;font-size:11px;font-family:monospace;">DTG: 13 SEP 2026 / 1500Z</div>';
  h += '</div>';

  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">';

  // Key assessments
  h += '<div>';
  h += '<div style="color:#ffaa00;font-size:11px;font-family:monospace;letter-spacing:1px;font-weight:bold;margin-bottom:8px;">KEY ASSESSMENTS</div>';
  var keyAssessments = [
    'Russian cyber forces in elevated operational posture targeting European energy infrastructure — attack predicted within 48-96 hours (HIGH CONFIDENCE)',
    'Chinese multi-vector espionage campaign active across semiconductor, defense, and maritime sectors — unprecedented tempo suggests centralized CPC tasking',
    'North Korean crypto theft operations accelerating to meet regime-directed $500M Q4 target — new laundering infrastructure operational',
    'Iranian IRGC Cyber Command reorganization creates dedicated offensive force — offensive capability expected to increase within 60-90 days',
    'Global zero-day market activity at highest level in 24 months — 3 new Windows kernel exploits available, likely procured by nation-state buyers'
  ];
  for (var ka = 0; ka < keyAssessments.length; ka++) {
    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;padding:6px 0;border-bottom:1px solid #111828;display:flex;align-items:flex-start;gap:6px;line-height:1.5;">';
    h += '<span style="color:#ffaa00;font-size:8px;margin-top:5px;flex-shrink:0;">&#9632;</span>' + esc(keyAssessments[ka]);
    h += '</div>';
  }
  h += '</div>';

  // Current posture
  h += '<div>';
  h += '<div style="color:#00aaff;font-size:11px;font-family:monospace;letter-spacing:1px;font-weight:bold;margin-bottom:8px;">CURRENT POSTURE</div>';
  var postureItems = [
    { label: 'CYBERCOM Force Posture', value: 'ELEVATED', color: '#ffaa00' },
    { label: 'Active Operations', value: '3 (2 defensive, 1 offensive)', color: '#00aaff' },
    { label: 'Hunt Teams Deployed', value: '7 of 12 available', color: '#00aaff' },
    { label: 'Critical Infrastructure Status', value: '5 NOMINAL / 2 ELEVATED / 1 HIGH', color: '#ffaa00' },
    { label: 'Allied Coordination', value: 'Five Eyes: ACTIVE / NATO: ELEVATED', color: '#00ff88' },
    { label: 'Last Major Incident', value: '6 days ago (APT29 phishing campaign)', color: '#00ff88' },
    { label: 'Pending Authorizations', value: '2 operations awaiting SECDEF approval', color: '#ffaa00' },
    { label: 'Congressional Notifications', value: '1 pending (OP IRON VEIL)', color: '#ffaa00' }
  ];
  for (var pi = 0; pi < postureItems.length; pi++) {
    var pItem = postureItems[pi];
    h += '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #111828;">';
    h += '<div style="color:#889;font-size:11px;font-family:monospace;">' + esc(pItem.label) + '</div>';
    h += '<div style="color:' + pItem.color + ';font-size:11px;font-family:monospace;font-weight:bold;text-align:right;">' + esc(pItem.value) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Main grid
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 16px 24px;">';

  // ---- Active Threats Requiring Decision ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #ff224444;border-radius:8px;padding:16px;">';
  h += '<div style="color:#ff2244;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #ff224433;padding-bottom:8px;">';
  h += '<span style="color:#ff2244;margin-right:8px;">&#9888;</span>ACTIVE THREATS REQUIRING DECISION</div>';

  var activeThreats = [
    { id: 'ATD-001', threat: 'Russian Offensive Cyber Operation — European Energy', urgency: 'IMMEDIATE', deadline: '14 SEP 2026 0200Z', decision: 'Authorize preemptive counter-cyber operation (OP IRON VEIL)', options: ['Authorize offensive counter-op', 'Elevate to active defense only', 'Defer to allied response', 'Request additional intelligence'] },
    { id: 'ATD-002', threat: 'Volt Typhoon Pre-Positioning in US Utilities', urgency: 'HIGH', deadline: '15 SEP 2026 1200Z', decision: 'Approve CYBERCOM eviction operation in domestic critical infrastructure', options: ['Authorize CYBERCOM eviction', 'Continue monitoring only', 'Coordinate with utility owners for voluntary remediation', 'Escalate to NSC principals'] },
    { id: 'ATD-003', threat: 'APT41 Semiconductor Espionage Campaign', urgency: 'HIGH', deadline: '16 SEP 2026', decision: 'Approve FBI-CYBERCOM joint operation against APT41 infrastructure', options: ['Approve joint operation', 'FBI law enforcement only', 'Diplomatic demarche first', 'Continue intelligence collection'] }
  ];

  for (var at = 0; at < activeThreats.length; at++) {
    var aThreat = activeThreats[at];
    var urgencyColor = aThreat.urgency === 'IMMEDIATE' ? '#ff2244' : '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid ' + urgencyColor + '44;border-radius:6px;padding:12px;margin-bottom:8px;border-left:3px solid ' + urgencyColor + ';">';
    h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">';
    h += '<div style="background:' + urgencyColor + ';color:#000;font-size:9px;font-family:monospace;font-weight:bold;padding:2px 8px;border-radius:3px;">' + esc(aThreat.urgency) + '</div>';
    h += '<div style="color:#556;font-size:10px;font-family:monospace;">' + esc(aThreat.id) + '</div>';
    h += '<div style="margin-left:auto;color:#667;font-size:9px;font-family:monospace;">DEADLINE: ' + esc(aThreat.deadline) + '</div>';
    h += '</div>';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;margin-bottom:4px;">' + esc(aThreat.threat) + '</div>';
    h += '<div style="color:#889;font-size:10px;font-family:monospace;margin-bottom:8px;">' + esc(aThreat.decision) + '</div>';
    h += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
    for (var ao = 0; ao < aThreat.options.length; ao++) {
      var isFirstOpt = ao === 0;
      h += '<div style="font-size:9px;font-family:monospace;padding:4px 8px;border-radius:3px;cursor:pointer;background:' + (isFirstOpt ? urgencyColor + '22' : 'transparent') + ';border:1px solid ' + (isFirstOpt ? urgencyColor : '#334') + ';color:' + (isFirstOpt ? urgencyColor : '#667') + ';">' + esc(aThreat.options[ao]) + '</div>';
    }
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // ---- Allied Coordination Status ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00ff88;margin-right:8px;">&#127760;</span>ALLIED COORDINATION STATUS</div>';

  var alliances = [
    { name: 'Five Eyes (FVEY)', members: 'US, UK, Canada, Australia, New Zealand', status: 'ACTIVE — ELEVATED SHARING', lastSync: '2026-09-13 14:00Z', intel: 'Full intelligence sharing active. Joint Sandworm tracking operation underway.', color: '#00ff88' },
    { name: 'NATO CCDCOE', members: '31 NATO members', status: 'CONSULTATION — Article 4', lastSync: '2026-09-13 12:00Z', intel: 'Baltic state cyber defense coordination. Pre-authorized response packages ready.', color: '#00aaff' },
    { name: 'US-Israel Bilateral', members: 'US, Israel', status: 'ACTIVE', lastSync: '2026-09-13 10:00Z', intel: 'Joint Iran threat tracking. Unit 8200 sharing SIGINT on IRGC reorganization.', color: '#00ff88' },
    { name: 'Quad Cyber Partnership', members: 'US, Japan, Australia, India', status: 'MONITORING', lastSync: '2026-09-12 22:00Z', intel: 'Indo-Pacific maritime threat monitoring. APT40 tracking shared.', color: '#00aaff' },
    { name: 'US-South Korea', members: 'US, South Korea', status: 'ELEVATED', lastSync: '2026-09-13 06:00Z', intel: 'Joint DPRK crypto theft tracking. Lazarus Group infrastructure intelligence shared.', color: '#ffaa00' }
  ];

  for (var al = 0; al < alliances.length; al++) {
    var ally = alliances[al];
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:10px;margin-bottom:6px;">';
    h += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;">' + esc(ally.name) + '</div>';
    h += '<div style="background:' + ally.color + '22;color:' + ally.color + ';font-size:9px;font-family:monospace;padding:2px 8px;border-radius:3px;">' + esc(ally.status) + '</div>';
    h += '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;margin-bottom:4px;">' + esc(ally.members) + '</div>';
    h += '<div style="color:#889;font-size:10px;font-family:monospace;line-height:1.4;">' + esc(ally.intel) + '</div>';
    h += '<div style="color:#445;font-size:9px;font-family:monospace;margin-top:4px;">Last sync: ' + esc(ally.lastSync) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  // ---- Communication Templates ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#128231;</span>COMMUNICATION TEMPLATES</div>';

  var commTemplates = [
    { type: 'SITREP', name: 'Situation Report', desc: 'Periodic summary of current cyber posture for senior leadership', classification: 'SECRET', frequency: 'Every 6 hours', lastSent: '2026-09-13 12:00Z',
      template: 'CLASSIFICATION: SECRET//NOFORN\nSUBJECT: Cyber SITREP #1847\nDTG: 131500ZSEP2026\nREF: USCYBERCOM DAILY SITREP\n\n1. SITUATION: Global cyber threat level BRAVO. Three nation-state campaigns active.\n2. ENEMY: Russia (Sandworm) — staging European energy attack. China (multiple APTs) — espionage escalation. DPRK (Lazarus) — crypto theft surge.\n3. FRIENDLY: 3 operations active. 7 hunt teams deployed. All critical infrastructure sectors reporting.\n4. ASSESSMENT: Probability of Russian offensive action within 48-96 hours assessed at HIGH.\n5. RECOMMENDATIONS: Authorize OP IRON VEIL. Elevate CI shield posture.\n\nPOC: CYBERCOM J3 Watch Officer' },
    { type: 'OPREP-3', name: 'Operational Report', desc: 'Significant event report for National Military Command Center', classification: 'TOP SECRET', frequency: 'Event-driven', lastSent: '2026-09-13 14:50Z',
      template: 'CLASSIFICATION: TOP SECRET//SCI//NOFORN\nPRECEDENCE: FLASH\nFROM: CDR USCYBERCOM\nTO: NMCC/SECDEF/CJCS\nSUBJ: OPREP-3/CYBER INCIDENT\n\n1. TYPE: IMMINENT HOSTILE CYBER OPERATION\n2. DTG: 131450ZSEP2026\n3. ADVERSARY: Russia/GRU Unit 74455 (Sandworm)\n4. TARGET: European energy infrastructure (3+ countries)\n5. INDICATORS: SIGINT confirms operator activation. Staging infrastructure hot. Pre-positioned implants verified.\n6. ASSESSMENT: Attack predicted within 48-96 hours.\n7. RECOMMENDED ACTION: Authorize OP IRON VEIL counter-operation.\n\nACKNOWLEDGE RECEIPT' },
    { type: 'FLASH', name: 'Flash Message', desc: 'Highest priority notification requiring immediate action', classification: 'TOP SECRET//SCI', frequency: 'Immediate', lastSent: '2026-09-13 14:50Z',
      template: 'CLASSIFICATION: TOP SECRET//SCI//NOFORN\nPRECEDENCE: FLASH FLASH FLASH\n\nIMMINENT NATION-STATE CYBER ATTACK\n\nRUSSIAN CYBER FORCES (SANDWORM) ASSESSED WITH HIGH CONFIDENCE TO BE PREPARING OFFENSIVE CYBER OPERATION AGAINST EUROPEAN ENERGY INFRASTRUCTURE WITHIN 48-96 HOURS.\n\nIMEDIATE ACTIONS REQUIRED:\n1. AUTHORIZE OP IRON VEIL\n2. ELEVATE ALL NATO CYBER DEFENSES\n3. NOTIFY FIVE EYES PARTNERS\n4. ACTIVATE ENERGY SECTOR SHIELDS\n\nCDR USCYBERCOM REQUESTS SECDEF AUTHORIZATION NLT 140200ZSEP2026' },
    { type: 'EXBRIEF', name: 'Executive Brief', desc: 'One-page summary for presidential daily brief', classification: 'TOP SECRET//SCI', frequency: 'Daily', lastSent: '2026-09-13 06:00Z',
      template: 'CLASSIFICATION: TOP SECRET//SCI//NOFORN\nPDB CYBER SUPPLEMENT — 13 SEPTEMBER 2026\n\nBOTTOM LINE: Three concurrent nation-state cyber campaigns pose elevated risk to US national security. Russian offensive operation against European energy expected within days.\n\nRUSSIA: GRU preparing cyber attack on European energy. Counter-operation awaiting authorization.\nCHINA: Unprecedented espionage escalation across semiconductor, defense, maritime sectors.\nDPRK: Crypto theft acceleration to fund nuclear program. $500M Q4 target.\nIRAN: Offensive cyber reorganization underway. Enhanced capability expected in 60-90 days.\n\nDECISION REQUIRED: Authorization of OP IRON VEIL (counter-operation against GRU infrastructure).' }
  ];

  for (var ct = 0; ct < commTemplates.length; ct++) {
    var tmpl = commTemplates[ct];
    var tmplClassColor = tmpl.classification.indexOf('TOP SECRET') >= 0 ? '#ff2244' : '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;margin-bottom:6px;overflow:hidden;" onclick="this.querySelector(\'.se-tmpl-body\').style.display=this.querySelector(\'.se-tmpl-body\').style.display===\'none\'?\'block\':\'none\'">';
    h += '<div style="padding:10px;cursor:pointer;display:flex;align-items:center;gap:8px;">';
    h += '<div style="background:#00aaff22;color:#00aaff;font-size:10px;font-family:monospace;font-weight:bold;padding:3px 8px;border-radius:3px;min-width:60px;text-align:center;">' + esc(tmpl.type) + '</div>';
    h += '<div style="flex:1;">';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;">' + esc(tmpl.name) + '</div>';
    h += '<div style="color:#667;font-size:9px;font-family:monospace;">' + esc(tmpl.desc) + '</div>';
    h += '</div>';
    h += '<div style="color:' + tmplClassColor + ';font-size:9px;font-family:monospace;">' + esc(tmpl.classification) + '</div>';
    h += '<div style="color:#445;font-size:10px;">&#9660;</div>';
    h += '</div>';
    h += '<div class="se-tmpl-body" style="display:none;padding:0 10px 10px 10px;border-top:1px solid #1a2a44;">';
    h += '<pre style="background:#060810;border:1px solid #111828;border-radius:4px;padding:12px;margin:8px 0 0 0;color:#00ff88;font-size:10px;font-family:monospace;line-height:1.6;white-space:pre-wrap;overflow-x:auto;">' + esc(tmpl.template) + '</pre>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // ---- Decision Log ----
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#128203;</span>DECISION LOG</div>';

  var decisionLog = [
    { timestamp: '2026-09-13 14:50Z', decision: 'Authorized FLASH dissemination of Russian energy sector threat', authority: 'CYBERCOM CDR', classification: 'TS//SCI', rationale: 'Multiple independent sources confirm imminent threat — allies must be warned immediately' },
    { timestamp: '2026-09-13 13:00Z', decision: 'Elevated CI Shield posture for Power Grid and DIB sectors to HIGH', authority: 'CISA Director', classification: 'SECRET', rationale: 'Volt Typhoon and APT41 activity warrants increased defensive posture' },
    { timestamp: '2026-09-13 10:00Z', decision: 'Deployed 2 additional hunt teams to critical infrastructure sector', authority: 'CYBERCOM J3', classification: 'SECRET', rationale: 'Active Volt Typhoon indicators in utility networks require immediate investigation' },
    { timestamp: '2026-09-12 22:00Z', decision: 'Approved joint FBI-CYBERCOM investigation of APT41 ChipDoor campaign', authority: 'NSC Deputies', classification: 'TS//SCI', rationale: 'Semiconductor supply chain compromise has national security implications' },
    { timestamp: '2026-09-12 16:00Z', decision: 'Issued warning intelligence on NK crypto theft escalation', authority: 'DNI', classification: 'TS//SCI', rationale: 'Treasury and financial regulators need advance notice for defensive measures' },
    { timestamp: '2026-09-12 08:00Z', decision: 'Activated enhanced Five Eyes sharing on Sandworm infrastructure', authority: 'CYBERCOM CDR', classification: 'TS//SCI//REL FVEY', rationale: 'European allies are primary targets — full intelligence sharing is essential' },
    { timestamp: '2026-09-11 20:00Z', decision: 'Initiated OP IRON VEIL planning', authority: 'CYBERCOM CDR', classification: 'TS//SCI//NOFORN', rationale: 'Preemptive counter-operation may be necessary if diplomatic efforts fail' },
    { timestamp: '2026-09-11 14:00Z', decision: 'Requested SECDEF authorization for OP IRON VEIL execution', authority: 'CYBERCOM CDR', classification: 'TS//SCI//NOFORN', rationale: 'Intelligence confidence threshold met for offensive counter-cyber operation' }
  ];

  for (var dl = 0; dl < decisionLog.length; dl++) {
    var dLog = decisionLog[dl];
    var dlClassColor = dLog.classification.indexOf('TS') >= 0 ? '#ff2244' : '#ffaa00';
    h += '<div style="padding:8px 0;border-bottom:1px solid #111828;display:flex;gap:10px;">';
    h += '<div style="color:#556;font-size:10px;font-family:monospace;min-width:130px;white-space:nowrap;">' + esc(dLog.timestamp) + '</div>';
    h += '<div style="flex:1;">';
    h += '<div style="color:#ccd;font-size:11px;font-family:monospace;margin-bottom:2px;">' + esc(dLog.decision) + '</div>';
    h += '<div style="color:#667;font-size:9px;font-family:monospace;font-style:italic;">' + esc(dLog.rationale) + '</div>';
    h += '</div>';
    h += '<div style="text-align:right;min-width:100px;">';
    h += '<div style="color:#889;font-size:9px;font-family:monospace;">' + esc(dLog.authority) + '</div>';
    h += '<div style="color:' + dlClassColor + ';font-size:8px;font-family:monospace;margin-top:2px;">' + esc(dLog.classification) + '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>'; // end main grid

  // ---- Resource Allocation & Congressional Notification ----
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 24px 24px;">';

  // Resource Allocation
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#00aaff;margin-right:8px;">&#128101;</span>RESOURCE ALLOCATION</div>';

  var resources = [
    { team: 'CNMF Team Alpha', location: 'CONUS — Utility Sector', mission: 'Hunt forward — Volt Typhoon', status: 'DEPLOYED', personnel: 12 },
    { team: 'CNMF Team Bravo', location: 'Europe — Energy Sector', mission: 'Defensive support — Sandworm', status: 'DEPLOYED', personnel: 15 },
    { team: 'CNMF Team Charlie', location: 'CONUS — DIB Sector', mission: 'Hunt forward — APT41', status: 'DEPLOYED', personnel: 10 },
    { team: 'CNMF Team Delta', location: 'Indo-Pacific — Naval', mission: 'Defensive support — APT40', status: 'DEPLOYED', personnel: 8 },
    { team: 'JTF-ARES Alpha', location: 'CONUS — Ft. Meade', mission: 'Counter-ISIS cyber ops', status: 'ACTIVE', personnel: 20 },
    { team: 'CMF Team 7', location: 'CONUS — Ft. Meade', mission: 'Sandworm infrastructure analysis', status: 'DEPLOYED', personnel: 14 },
    { team: 'CMF Team 12', location: 'CONUS — Telecom Sector', mission: 'Salt Typhoon investigation', status: 'DEPLOYED', personnel: 11 },
    { team: 'Reserve Team 1', location: 'CONUS — Available', mission: 'Standby for surge operations', status: 'STANDBY', personnel: 16 },
    { team: 'Reserve Team 2', location: 'CONUS — Available', mission: 'Standby for surge operations', status: 'STANDBY', personnel: 16 },
    { team: 'CISA Hunt Team A', location: 'CONUS — Federal Networks', mission: 'APT29 compromise assessment', status: 'DEPLOYED', personnel: 8 },
    { team: 'CISA ICS-CERT', location: 'CONUS — Water Sector', mission: 'SCADA security assessment', status: 'DEPLOYED', personnel: 6 },
    { team: 'FBI Cyber Division TF', location: 'Multiple — CONUS', mission: 'APT41 criminal investigation', status: 'ACTIVE', personnel: 25 }
  ];

  var totalDeployed = 0;
  var totalPersonnel = 0;
  for (var tr = 0; tr < resources.length; tr++) {
    if (resources[tr].status === 'DEPLOYED' || resources[tr].status === 'ACTIVE') totalDeployed++;
    totalPersonnel += resources[tr].personnel;
  }

  h += '<div style="display:flex;gap:10px;margin-bottom:12px;">';
  h += '<div style="flex:1;background:#0a0e1a;border:1px solid #00aaff33;border-radius:4px;padding:8px;text-align:center;">';
  h += '<div style="color:#556;font-size:9px;font-family:monospace;">TEAMS DEPLOYED</div>';
  h += '<div style="color:#00aaff;font-size:20px;font-weight:bold;font-family:monospace;">' + totalDeployed + '/' + resources.length + '</div>';
  h += '</div>';
  h += '<div style="flex:1;background:#0a0e1a;border:1px solid #00ff8833;border-radius:4px;padding:8px;text-align:center;">';
  h += '<div style="color:#556;font-size:9px;font-family:monospace;">TOTAL PERSONNEL</div>';
  h += '<div style="color:#00ff88;font-size:20px;font-weight:bold;font-family:monospace;">' + totalPersonnel + '</div>';
  h += '</div>';
  h += '</div>';

  for (var rs = 0; rs < resources.length; rs++) {
    var res = resources[rs];
    var resColor = res.status === 'DEPLOYED' ? '#00aaff' : res.status === 'ACTIVE' ? '#00ff88' : '#667';
    h += '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid #111828;font-family:monospace;font-size:10px;">';
    h += '<div style="color:' + resColor + ';width:8px;text-align:center;">&#9679;</div>';
    h += '<div style="color:#ccd;min-width:120px;font-weight:bold;">' + esc(res.team) + '</div>';
    h += '<div style="color:#889;flex:1;">' + esc(res.mission) + '</div>';
    h += '<div style="color:#556;min-width:60px;text-align:right;">' + esc(res.personnel) + ' pax</div>';
    h += '</div>';
  }
  h += '</div>';

  // Congressional Notification Tracker
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ffaa00;margin-right:8px;">&#127963;</span>CONGRESSIONAL NOTIFICATION TRACKER</div>';

  var congressNotifications = [
    { operation: 'OP IRON VEIL', type: 'Title 10 — Offensive Cyber', status: 'PENDING SUBMISSION', dueDate: '14 SEP 2026', committee: 'SASC, HASC, SSCI, HPSCI', briefingLevel: 'Gang of Eight', notes: 'Notification required prior to execution. Draft prepared, awaiting SECDEF signature.' },
    { operation: 'Volt Typhoon Eviction', type: 'Title 10 — Defensive', status: 'SUBMITTED', dueDate: '12 SEP 2026', committee: 'SASC, HASC', briefingLevel: 'Full committee', notes: 'Domestic critical infrastructure operation. Notification submitted 12 SEP. No objections received.' },
    { operation: 'APT41 Joint Investigation', type: 'Title 50 — Intelligence', status: 'SUBMITTED', dueDate: '11 SEP 2026', committee: 'SSCI, HPSCI', briefingLevel: 'Gang of Eight', notes: 'Joint FBI-IC operation. Finding submitted to Gang of Eight under existing MON.' },
    { operation: 'NK Crypto Tracking', type: 'Title 50 — Intelligence', status: 'COMPLETE', dueDate: '08 SEP 2026', committee: 'SSCI, HPSCI', briefingLevel: 'Full committee', notes: 'Treasury-led with IC support. Full committee briefing completed.' },
    { operation: 'Five Eyes Intel Sharing Expansion', type: 'Executive Agreement', status: 'COMPLETE', dueDate: '05 SEP 2026', committee: 'SFRC, HFAC', briefingLevel: 'Committee chairs', notes: 'Enhanced sharing agreement notified to foreign affairs committees.' }
  ];

  for (var cn = 0; cn < congressNotifications.length; cn++) {
    var cNotif = congressNotifications[cn];
    var cnStatusColor = cNotif.status === 'PENDING SUBMISSION' ? '#ff2244' : cNotif.status === 'SUBMITTED' ? '#ffaa00' : '#00ff88';
    h += '<div style="background:#0a0e1a;border:1px solid #1a2a44;border-radius:4px;padding:10px;margin-bottom:6px;">';
    h += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">';
    h += '<div style="color:#fff;font-size:12px;font-family:monospace;font-weight:bold;">' + esc(cNotif.operation) + '</div>';
    h += '<div style="margin-left:auto;background:' + cnStatusColor + '22;color:' + cnStatusColor + ';font-size:9px;font-family:monospace;padding:2px 8px;border-radius:3px;">' + esc(cNotif.status) + '</div>';
    h += '</div>';
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">TYPE</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(cNotif.type) + '</div></div>';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">COMMITTEES</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(cNotif.committee) + '</div></div>';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">BRIEFING LEVEL</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(cNotif.briefingLevel) + '</div></div>';
    h += '<div><div style="color:#556;font-size:9px;font-family:monospace;letter-spacing:1px;">DUE DATE</div><div style="color:#889;font-size:10px;font-family:monospace;">' + esc(cNotif.dueDate) + '</div></div>';
    h += '</div>';
    h += '<div style="color:#667;font-size:10px;font-family:monospace;font-style:italic;">' + esc(cNotif.notes) + '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>'; // end resource/congressional grid

  // Escalation Status
  h += '<div style="padding:0 24px 24px 24px;">';
  h += '<div style="background:linear-gradient(135deg,#0c1020,#0a0e1a);border:1px solid #1a2a44;border-radius:8px;padding:16px;">';
  h += '<div style="color:#00aaff;font-size:13px;font-family:monospace;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;border-bottom:1px solid #1a2a44;padding-bottom:8px;">';
  h += '<span style="color:#ff6644;margin-right:8px;">&#9650;</span>ESCALATION STATUS & AUTHORITY MATRIX</div>';

  h += '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;">';
  var escalationSteps = [
    { level: 'ROUTINE', desc: 'Normal monitoring and defense', authority: 'Watch Officer', color: '#00ff88', active: false },
    { level: 'ELEVATED', desc: 'Increased threat indicators detected', authority: 'CYBERCOM J3', color: '#ffaa00', active: true },
    { level: 'SUBSTANTIAL', desc: 'Active threat requiring response planning', authority: 'CYBERCOM CDR', color: '#ff6644', active: false },
    { level: 'SEVERE', desc: 'Active attack requiring immediate response', authority: 'SECDEF', color: '#ff2244', active: false },
    { level: 'CRITICAL', desc: 'Strategic-level cyber warfare', authority: 'POTUS / NSC', color: '#ff0044', active: false }
  ];

  for (var es = 0; es < escalationSteps.length; es++) {
    var eStep = escalationSteps[es];
    h += '<div style="background:' + (eStep.active ? eStep.color + '11' : '#0a0e1a') + ';border:2px solid ' + (eStep.active ? eStep.color : '#1a2a44') + ';border-radius:6px;padding:12px;text-align:center;' + (eStep.active ? 'box-shadow:0 0 15px ' + eStep.color + '22;' : 'opacity:0.6;') + '">';
    h += '<div style="color:' + eStep.color + ';font-size:12px;font-family:monospace;font-weight:bold;letter-spacing:1px;margin-bottom:6px;">' + esc(eStep.level) + '</div>';
    h += '<div style="color:#889;font-size:9px;font-family:monospace;margin-bottom:6px;min-height:30px;">' + esc(eStep.desc) + '</div>';
    h += '<div style="color:#556;font-size:9px;font-family:monospace;border-top:1px solid #1a2a44;padding-top:6px;">' + esc(eStep.authority) + '</div>';
    if (eStep.active) {
      h += '<div style="color:' + eStep.color + ';font-size:9px;font-family:monospace;margin-top:6px;font-weight:bold;">&#9654; CURRENT</div>';
    }
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';
  h += '</div>';

  return h;
}

// ============================================================================
// MAIN EXPORT — renderSentinelEye(main)
// ============================================================================

// ============================================================================
// SENTINEL EYE — EXPANDED HELPER / DETAIL RENDER FUNCTIONS
// Additional data arrays and 12 detailed rendering functions
// ============================================================================

// ============================================================================
// HISTORICAL OPERATIONS DETAIL (extended data for deep-dive views)
// ============================================================================
var HISTORICAL_OPERATIONS_DETAIL = {
  'op-001': {
    codename: 'OLYMPIC GAMES / STUXNET',
    attribution: 'United States (NSA TAO) & Israel (Unit 8200)',
    attributionConfidence: 95,
    fullDescription: 'The first known cyber weapon designed to cause physical destruction. Stuxnet targeted Siemens S7-300 PLCs controlling variable-frequency drives at the Natanz uranium enrichment facility. The malware manipulated centrifuge rotor speeds while reporting normal telemetry to operators, causing approximately 1,000 IR-1 centrifuges to fail over 10 months. Delivered via infected USB drives, it exploited four zero-day vulnerabilities and two stolen Realtek and JMicron digital certificates.',
    targets: ['Natanz Uranium Enrichment Facility', 'Bushehr Nuclear Power Plant (secondary)', 'Iranian nuclear supply chain'],
    ttps: [
      { technique: 'T1091', name: 'Replication Through Removable Media', detail: 'Initial infection via USB drives targeting air-gapped networks' },
      { technique: 'T1203', name: 'Exploitation for Client Execution', detail: 'Used 4 Windows zero-days: MS10-046 (LNK), MS10-061, MS08-067, MS10-073' },
      { technique: 'T1553.002', name: 'Code Signing', detail: 'Signed with stolen Realtek and JMicron certificates' },
      { technique: 'T1565.001', name: 'Stored Data Manipulation', detail: 'Altered PLC code while replaying normal SCADA readings' },
      { technique: 'T1485', name: 'Data Destruction', detail: 'Physical destruction of centrifuges via speed manipulation' }
    ],
    timeline: [
      { date: '2005', event: 'Development begins under codename Olympic Games' },
      { date: '2007-06', event: 'Early Stuxnet variant (0.5) deployed using Siemens Step 7 infection' },
      { date: '2009-06', event: 'Stuxnet 1.0 released with full zero-day exploit chain' },
      { date: '2010-01', event: 'Stuxnet spreads beyond Natanz due to configuration change' },
      { date: '2010-06', event: 'VirusBlokAda discovers Stuxnet in the wild' },
      { date: '2010-07', event: 'Symantec publishes initial analysis' },
      { date: '2010-09', event: 'Full ICS payload analysis reveals centrifuge targeting' },
      { date: '2010-11', event: 'Iran confirms Stuxnet caused centrifuge damage' },
      { date: '2012-06', event: 'NYT confirms US-Israel joint operation' }
    ],
    toolsUsed: ['Stuxnet worm (multiple variants)', 'Flame (reconnaissance predecessor)', 'Duqu (intelligence collection)', 'Fanny (USB worm for air-gapped recon)'],
    impact: 'Destroyed ~1,000 IR-1 centrifuges. Delayed Iranian nuclear program by an estimated 1-2 years. First proven case of cyber-physical attack.',
    significance: 'Demonstrated that cyber weapons can cause physical destruction of critical infrastructure. Opened the era of nation-state cyber warfare. Raised fundamental questions about cyber arms control and escalation.',
    lessonsLearned: ['Air-gapped networks are not immune to cyber attack', 'Supply chain infection can bridge network boundaries', 'Physical damage is achievable through cyber means', 'Malware containment failures can cause unintended spread', 'Digital certificates are a high-value target for APTs']
  },
  'op-002': {
    codename: 'NOTPETYA',
    attribution: 'Russia (GRU Unit 74455 / Sandworm)',
    attributionConfidence: 98,
    fullDescription: 'Destructive wiper malware disguised as ransomware, deployed via a compromised update to M.E.Doc, a Ukrainian tax accounting software used by ~80% of Ukrainian businesses. NotPetya used the leaked NSA exploit EternalBlue (MS17-010) and credential harvesting via Mimikatz for lateral movement. Despite displaying a ransom note, the encryption was irreversible by design, confirming its true purpose as a wiper. The attack caused over $10 billion in estimated global damages.',
    targets: ['Ukraine (primary)', 'Maersk (shipping)', 'Merck (pharma)', 'FedEx/TNT Express', 'Mondelez', 'Saint-Gobain', 'Reckitt Benckiser'],
    ttps: [
      { technique: 'T1195.002', name: 'Supply Chain Compromise', detail: 'Trojanized M.E.Doc software update mechanism' },
      { technique: 'T1210', name: 'Exploitation of Remote Services', detail: 'EternalBlue (MS17-010) for network propagation' },
      { technique: 'T1003', name: 'OS Credential Dumping', detail: 'Mimikatz and LSA Secrets for credential harvesting' },
      { technique: 'T1021.002', name: 'SMB/Windows Admin Shares', detail: 'PsExec and WMI for lateral movement with stolen creds' },
      { technique: 'T1486', name: 'Data Encrypted for Impact', detail: 'Modified Petya bootlocker - encryption irreversible by design' },
      { technique: 'T1561.002', name: 'Disk Structure Wipe', detail: 'MBR and MFT overwritten after pseudo-encryption' }
    ],
    timeline: [
      { date: '2017-04', event: 'M.E.Doc update servers compromised' },
      { date: '2017-05-15', event: 'First test deployment via M.E.Doc (XData ransomware)' },
      { date: '2017-06-27 09:30', event: 'NotPetya payload distributed via M.E.Doc update' },
      { date: '2017-06-27 10:00', event: 'Ukrainian organizations begin reporting mass encryption' },
      { date: '2017-06-27 12:00', event: 'Global spread detected - Maersk, Merck, FedEx affected' },
      { date: '2017-06-27 14:00', event: 'Researchers determine ransom payment mechanism is non-functional' },
      { date: '2017-06-28', event: 'Confirmed as wiper, not ransomware' },
      { date: '2018-02', event: 'US, UK, Australia attribute to Russian military' }
    ],
    toolsUsed: ['NotPetya wiper', 'EternalBlue (MS17-010)', 'Mimikatz', 'PsExec', 'WMI commands', 'Modified Petya MBR bootlocker'],
    impact: '$10B+ global damages. Maersk lost all domain controllers (recovered from offline Ghana DC). Merck lost $870M. FedEx/TNT lost $400M. Global shipping disrupted. 80% of Ukrainian enterprises affected.',
    significance: 'Most destructive and costly cyber attack in history. Demonstrated collateral damage risk of nation-state operations. Showed how supply chain compromise can achieve mass targeting. Led to significant cyber insurance industry changes.',
    lessonsLearned: ['Supply chain attacks can achieve enormous scale', 'Collateral damage in cyber operations can be massive and uncontrollable', 'Ransomware appearance can mask destructive intent', 'Patching critical vulnerabilities (EternalBlue) is essential', 'Isolated backups are the last line of defense']
  },
  'op-003': {
    codename: 'SUNBURST / SOLARWINDS',
    attribution: 'Russia (SVR / APT29 / Cozy Bear)',
    attributionConfidence: 92,
    fullDescription: 'An advanced supply chain compromise of the SolarWinds Orion IT monitoring platform. APT29 inserted a backdoor (SUNBURST) into the Orion software build pipeline, resulting in trojanized updates distributed to approximately 18,000 organizations. The attackers then selectively exploited about 100 high-value targets including US Treasury, Commerce, DHS, DOE, and several Fortune 500 companies. The operation remained undetected for approximately 14 months.',
    targets: ['US Treasury Department', 'US Commerce Department (NTIA)', 'US DHS/CISA', 'US DOE/NNSA', 'US State Department', 'Microsoft', 'FireEye', 'Intel', 'Cisco', 'Deloitte', 'NATO', 'UK Government'],
    ttps: [
      { technique: 'T1195.002', name: 'Supply Chain Compromise', detail: 'Injected SUNBURST backdoor into SolarWinds Orion build process' },
      { technique: 'T1027.005', name: 'Indicator Removal from Host', detail: 'SUNBURST had extensive anti-analysis and sandbox detection' },
      { technique: 'T1071.001', name: 'Application Layer Protocol', detail: 'C2 disguised as legitimate Orion Improvement Program traffic' },
      { technique: 'T1550.001', name: 'Application Access Token', detail: 'SAML token forging (Golden SAML) for persistent cloud access' },
      { technique: 'T1078', name: 'Valid Accounts', detail: 'Used legitimate admin credentials from compromised identity providers' }
    ],
    timeline: [
      { date: '2019-10', event: 'APT29 gains access to SolarWinds build environment' },
      { date: '2020-02', event: 'SUNBURST backdoor inserted into Orion software build' },
      { date: '2020-03', event: 'Trojanized Orion updates (2019.4 HF5 to 2020.2.1) distributed' },
      { date: '2020-03-26', event: 'First known SUNBURST activation in victim environment' },
      { date: '2020-06', event: 'Selective exploitation of ~100 high-value targets begins' },
      { date: '2020-12-08', event: 'FireEye discloses breach and discovers SUNBURST' },
      { date: '2020-12-13', event: 'CISA issues Emergency Directive 21-01' },
      { date: '2021-01', event: 'Follow-on tools TEARDROP and RAINDROP discovered' },
      { date: '2021-04', event: 'US formally attributes to SVR, sanctions imposed' }
    ],
    toolsUsed: ['SUNBURST (backdoor)', 'TEARDROP (memory-only dropper)', 'RAINDROP (Cobalt Strike loader)', 'GoldMax/SUNSHUTTLE (Linux backdoor)', 'Cobalt Strike', 'Golden SAML tooling'],
    impact: '18,000 organizations received trojanized updates. ~100 confirmed compromised (US gov agencies, Fortune 500). FireEye red team tools stolen. US government networks deeply penetrated. Estimated 14 months of undetected access.',
    significance: 'Most significant supply chain compromise ever discovered. Exposed fundamental weaknesses in software supply chain security. Led to Executive Order 14028 on cybersecurity. Changed how organizations assess third-party risk.',
    lessonsLearned: ['Software supply chain is a critical attack vector', 'Build environment security is as important as code security', 'Threat actors can maintain access for over a year undetected', 'Identity-based attacks (Golden SAML) enable persistent cloud access', 'Even security companies can be compromised']
  },
  'op-004': {
    codename: 'WANNACRY',
    attribution: 'North Korea (RGB / Lazarus Group)',
    attributionConfidence: 90,
    fullDescription: 'A ransomware worm that exploited the EternalBlue SMB vulnerability leaked from the NSA by Shadow Brokers. WannaCry infected over 200,000 computers across 150 countries in a single day, encrypting files and demanding Bitcoin ransom. The UK National Health Service was severely affected with hospitals diverting patients. A kill switch domain accidentally discovered by researcher Marcus Hutchins slowed the spread.',
    targets: ['UK NHS (hospitals, GP surgeries)', 'Telefonica (Spain)', 'FedEx', 'Renault/Nissan', 'Russian Interior Ministry', 'China universities', 'Deutsche Bahn', 'Global victims in 150 countries'],
    ttps: [
      { technique: 'T1210', name: 'Exploitation of Remote Services', detail: 'EternalBlue (MS17-010) SMB exploit for initial infection and propagation' },
      { technique: 'T1486', name: 'Data Encrypted for Impact', detail: 'AES-128 + RSA-2048 file encryption' },
      { technique: 'T1571', name: 'Non-Standard Port', detail: 'SMB scanning on port 445 for worm propagation' },
      { technique: 'T1497.001', name: 'System Checks', detail: 'Kill switch domain check (unregistered domain = sandbox detection)' }
    ],
    timeline: [
      { date: '2017-04-14', event: 'Shadow Brokers release EternalBlue exploit' },
      { date: '2017-05-12 07:44', event: 'WannaCry begins spreading globally' },
      { date: '2017-05-12 14:00', event: 'NHS England reports widespread disruption' },
      { date: '2017-05-12 15:30', event: 'Marcus Hutchins registers kill switch domain, slowing spread' },
      { date: '2017-05-13', event: 'Patched variants without kill switch appear' },
      { date: '2017-05-15', event: 'Over 200,000 systems infected across 150 countries' },
      { date: '2017-12', event: 'US, UK, Australia attribute to North Korea' },
      { date: '2018-09', event: 'DOJ indicts Park Jin Hyok (Lazarus Group)' }
    ],
    toolsUsed: ['WannaCry ransomware (multiple variants)', 'DoublePulsar backdoor', 'EternalBlue (MS17-010)'],
    impact: '200K+ systems infected. NHS: 80+ trusts affected, 19,000 appointments cancelled, 600 GP surgeries disrupted. Estimated $4-8B global damages. Ransom payments minimal (~$140K in Bitcoin).',
    significance: 'Demonstrated catastrophic potential of leaked nation-state exploits. Showed healthcare sector vulnerability. Led to increased patching urgency globally. First widespread ransomware worm.',
    lessonsLearned: ['Leaked offensive tools create unpredictable risks', 'Critical patches must be applied rapidly', 'Healthcare systems are dangerously exposed', 'Kill switch domains can be used for both C2 and analysis evasion', 'Worm capabilities massively amplify ransomware impact']
  },
  'op-005': {
    codename: 'OPM BREACH',
    attribution: 'China (MSS / Deep Panda)',
    attributionConfidence: 88,
    fullDescription: 'Chinese state actors penetrated the US Office of Personnel Management over a multi-year campaign, exfiltrating 22.1 million personnel records including highly sensitive SF-86 security clearance application forms containing personal histories, foreign contacts, financial records, and mental health information for current and former US government employees and contractors.',
    targets: ['US Office of Personnel Management', 'KeyPoint Government Solutions (contractor)', 'USIS (background investigation company)'],
    ttps: [
      { technique: 'T1078', name: 'Valid Accounts', detail: 'Stolen contractor credentials for initial access' },
      { technique: 'T1003', name: 'OS Credential Dumping', detail: 'Credential harvesting for lateral movement' },
      { technique: 'T1005', name: 'Data from Local System', detail: 'Targeted SF-86 databases and personnel records' },
      { technique: 'T1041', name: 'Exfiltration Over C2 Channel', detail: 'Data exfiltrated over encrypted C2 channels' },
      { technique: 'T1027', name: 'Obfuscated Files or Information', detail: 'Custom malware with obfuscation to evade detection' }
    ],
    timeline: [
      { date: '2013-11', event: 'Initial compromise of contractor KeyPoint Government Solutions' },
      { date: '2014-03', event: 'DHS detects intrusion and alerts OPM (not fully remediated)' },
      { date: '2014-05', event: 'Attackers re-enter OPM via stolen contractor credentials' },
      { date: '2014-07', event: 'SF-86 database exfiltration begins' },
      { date: '2014-12', event: 'Background investigation records stolen' },
      { date: '2015-04', event: 'OPM discovers breach during security product deployment' },
      { date: '2015-06', event: 'Public disclosure of 4.2M current/former employee records' },
      { date: '2015-07', event: 'Second disclosure: 21.5M background investigation records' }
    ],
    toolsUsed: ['PlugX RAT', 'Sakula RAT', 'HiKit rootkit', 'Custom data exfiltration tools'],
    impact: '22.1M personnel records stolen including 5.6M fingerprint records. SF-86 forms contain intimate personal details useful for counterintelligence. Described as potential goldmine for foreign intelligence recruitment and blackmail.',
    significance: 'Largest known theft of US government personnel data. Demonstrated catastrophic intelligence value of bulk personnel data theft. Led to creation of Defense Counterintelligence and Security Agency (DCSA). Changed US approach to personnel data protection.',
    lessonsLearned: ['Personnel databases are high-value intelligence targets', 'Contractor access management is critical', 'Multi-factor authentication must be enforced', 'Detection capability must match data sensitivity', 'Background investigation data requires highest-level protection']
  },
  'op-010': {
    codename: 'COLONIAL PIPELINE',
    attribution: 'Russia-based (DarkSide ransomware group)',
    attributionConfidence: 99,
    fullDescription: 'DarkSide ransomware operators compromised Colonial Pipeline Company, which operates the largest refined fuel pipeline in the US, carrying 2.5 million barrels per day serving 45% of East Coast fuel supply. The company proactively shut down pipeline operations for six days, causing fuel shortages, gas station queues, and emergency declarations in multiple states. A $4.4 million ransom was paid in Bitcoin, of which the FBI later recovered $2.3 million.',
    targets: ['Colonial Pipeline Company IT systems', 'US East Coast fuel supply chain (indirect)'],
    ttps: [
      { technique: 'T1133', name: 'External Remote Services', detail: 'Initial access via compromised VPN credentials (no MFA)' },
      { technique: 'T1486', name: 'Data Encrypted for Impact', detail: 'DarkSide ransomware encrypting IT systems' },
      { technique: 'T1078', name: 'Valid Accounts', detail: 'Legacy VPN account without multi-factor authentication' },
      { technique: 'T1490', name: 'Inhibit System Recovery', detail: 'Shadow copies deleted to prevent local recovery' }
    ],
    timeline: [
      { date: '2021-04-29', event: 'DarkSide accesses Colonial network via compromised VPN account' },
      { date: '2021-05-06', event: 'Data exfiltration (100GB) for double extortion' },
      { date: '2021-05-07', event: 'Ransomware deployed against IT network; Colonial discovers attack' },
      { date: '2021-05-07', event: 'Colonial proactively shuts down OT pipeline operations' },
      { date: '2021-05-08', event: 'Colonial pays $4.4M Bitcoin ransom' },
      { date: '2021-05-09', event: 'Emergency declaration by USDOT; EPA waives fuel standards' },
      { date: '2021-05-12', event: 'Pipeline operations resume' },
      { date: '2021-05-14', event: 'DarkSide announces shutdown (under pressure)' },
      { date: '2021-06-07', event: 'FBI recovers $2.3M of ransom payment' }
    ],
    toolsUsed: ['DarkSide ransomware', 'Cobalt Strike', 'PowerShell scripts', 'Data exfiltration tools'],
    impact: 'Largest US pipeline shut for 6 days. Fuel shortages across East Coast. Average gas prices spiked 6 cents/gallon. Emergency declarations in 4 states. Panic buying led to gas station outages in southeast US.',
    significance: 'Demonstrated critical infrastructure vulnerability to ransomware. Led to TSA pipeline cybersecurity directives. Accelerated federal cybersecurity executive orders. Showed that IT-side attacks can force OT shutdowns even without OT compromise.',
    lessonsLearned: ['MFA on remote access is not optional', 'IT/OT segmentation prevents cascading failures', 'Critical infrastructure operators need incident response plans', 'Ransomware can have national security implications', 'Government recovery of ransom funds is sometimes possible']
  }
};

// ============================================================================
// CYBER CAPABILITIES MATRIX (extended nation-state data)
// ============================================================================
var CYBER_CAPABILITIES_MATRIX = {
  'us': {
    workforce: 'Est. 6,000+ (Cyber Command) + NSA civilian/military',
    budget: 'Est. $10.5B (combined CYBERCOM + NSA)',
    zeroDayCapability: 'Tier 1 — Extensive zero-day development and acquisition programs via TAO and commercial brokers',
    cyberDoctrine: 'Persistent engagement and defend forward. Authorized for offensive operations under Title 10/50.',
    dimensions: { signalIntel: 10, offensiveOps: 10, defensiveOps: 9, cyberEspionage: 10, supplyChain: 8, infoOps: 7, iamCapability: 9, researchDev: 10 },
    keyUnits: ['NSA Tailored Access Operations (TAO)', 'Cyber National Mission Force (CNMF)', 'Joint Force HQ-Cyber', '16th Air Force (Information Warfare)'],
    targetMatrix: ['Russia: Critical infrastructure recon, election security', 'China: Counter-espionage, IP theft disruption', 'Iran: Nuclear program monitoring, sanctions enforcement', 'North Korea: Financial operations disruption, WMD monitoring', 'Counter-terrorism: ISIS/AQ communications disruption']
  },
  'ru': {
    workforce: 'Est. 1,000+ (GRU) + FSB + SVR cyber divisions',
    budget: 'Est. $300M-1B (highly classified)',
    zeroDayCapability: 'Tier 1 — Active zero-day development, known stockpile in SCADA/ICS vulnerabilities',
    cyberDoctrine: 'Information confrontation encompassing technical attack, information operations, and psychological warfare as unified concept.',
    dimensions: { signalIntel: 8, offensiveOps: 9, defensiveOps: 7, cyberEspionage: 9, supplyChain: 8, infoOps: 10, iamCapability: 7, researchDev: 8 },
    keyUnits: ['GRU Unit 26165 (APT28)', 'GRU Unit 74455 (Sandworm)', 'SVR (APT29)', 'FSB Center 16 (Turla/Dragonfly)', 'FSB Center 18'],
    targetMatrix: ['Ukraine: Full spectrum cyber warfare', 'NATO: Espionage, pre-positioning for disruption', 'US: Election interference, critical infrastructure', 'Europe: Energy sector, political interference', 'Baltic states: Hybrid warfare campaigns']
  },
  'cn': {
    workforce: 'Est. 100,000+ (PLA SSF + MSS + contractors)',
    budget: 'Est. $1.5-3B (combined military and civilian)',
    zeroDayCapability: 'Tier 1 — Significant zero-day research via Tianfu Cup and government programs, commercial exploit market',
    cyberDoctrine: 'Informationized warfare integrating cyber, electronic warfare, and space. Focus on espionage for economic and military advantage.',
    dimensions: { signalIntel: 9, offensiveOps: 9, defensiveOps: 8, cyberEspionage: 10, supplyChain: 9, infoOps: 8, iamCapability: 8, researchDev: 9 },
    keyUnits: ['PLA SSF Network Systems Dept (Unit 61398, 61486)', 'MSS (APT41, APT10, Hafnium)', 'Volt Typhoon (critical infrastructure)', 'Salt Typhoon (telecom)', 'Integrity Technology (contractor)'],
    targetMatrix: ['US: Critical infrastructure pre-positioning, IP theft', 'Taiwan: Military intel, infrastructure mapping', 'ASEAN: Territorial dispute intel', 'Europe: Technology and trade secret theft', 'Global: Strategic technology acquisition']
  },
  'kp': {
    workforce: 'Est. 6,800+ (Bureau 121 + supporting elements)',
    budget: 'Est. $100-200M (partially self-funded through theft)',
    zeroDayCapability: 'Tier 2 — Uses purchased and leaked zero-days, some indigenous development',
    cyberDoctrine: 'Asymmetric warfare tool for regime survival. Cyber operations generate revenue and project power far beyond conventional capabilities.',
    dimensions: { signalIntel: 4, offensiveOps: 7, defensiveOps: 3, cyberEspionage: 6, supplyChain: 5, infoOps: 4, iamCapability: 3, researchDev: 5 },
    keyUnits: ['RGB Bureau 121', 'Lazarus Group', 'Kimsuky (APT43)', 'Andariel', 'BlueNoroff (financial)'],
    targetMatrix: ['Global: Cryptocurrency theft for regime funding ($2B+ stolen)', 'South Korea: Military espionage, defector tracking', 'US: Defense data theft, retaliatory attacks', 'SWIFT banking: Financial theft campaigns', 'Global: Ransomware for revenue generation']
  },
  'ir': {
    workforce: 'Est. 2,000-5,000 (IRGC + contractors)',
    budget: 'Est. $100-500M',
    zeroDayCapability: 'Tier 2 — Growing indigenous capability, uses commercial and leaked exploits',
    cyberDoctrine: 'Cyber operations as asymmetric deterrent against technologically superior adversaries. Retaliation-focused with emphasis on destructive capabilities.',
    dimensions: { signalIntel: 5, offensiveOps: 7, defensiveOps: 5, cyberEspionage: 6, supplyChain: 4, infoOps: 7, iamCapability: 4, researchDev: 5 },
    keyUnits: ['IRGC Cyber Command', 'APT33 (Elfin)', 'APT34 (OilRig)', 'APT35 (Charming Kitten)', 'MuddyWater'],
    targetMatrix: ['Saudi Arabia: Oil/gas infrastructure destruction', 'Israel: Government, military, civilian targets', 'US: Financial sector, critical infrastructure', 'Gulf states: Regional rival espionage', 'Albania: Retaliatory attacks on MEK host nations']
  },
  'il': {
    workforce: 'Est. 5,000+ (Unit 8200 alone)',
    budget: 'Est. $1-2B (including commercial spin-offs)',
    zeroDayCapability: 'Tier 1 — World-class zero-day development, NSO Group and commercial exploit ecosystem',
    cyberDoctrine: 'Cyber as force multiplier for national defense. Emphasis on intelligence collection and preemptive disruption of existential threats.',
    dimensions: { signalIntel: 9, offensiveOps: 9, defensiveOps: 8, cyberEspionage: 9, supplyChain: 7, infoOps: 6, iamCapability: 8, researchDev: 10 },
    keyUnits: ['Unit 8200 (SIGINT/Cyber)', 'Unit 81 (Technology)', 'Mossad cyber division', 'NSO Group (commercial)', 'Candiru (commercial)'],
    targetMatrix: ['Iran: Nuclear program disruption, espionage', 'Hezbollah/Hamas: Counter-terrorism intel', 'Syria: Military intelligence', 'Regional: Strategic intelligence collection', 'Global: Counter-proliferation operations']
  }
};

// ============================================================================
// THREAT ACTOR TOOLS DATABASE
// ============================================================================
var THREAT_ACTOR_TOOLS = [
  {
    id: 'tool-001', name: 'Cobalt Strike', type: 'C2 Framework', developer: 'Strategic Cyber LLC (commercial, widely pirated)',
    usedBy: ['APT29', 'APT41', 'Lazarus', 'FIN7', 'DarkSide', 'REvil', 'Conti', 'Many others'],
    capabilities: ['Beacon payload generation', 'Malleable C2 profiles', 'Lateral movement', 'Credential harvesting', 'Process injection', 'SOCKS proxying'],
    firstSeen: '2012', lastSeen: '2026-09',
    iocs: { hashes: ['a1b2c3d4...', 'e5f6a7b8...'], domains: ['*.cloudfront.net (malleable)', '*.azureedge.net'], ips: ['Various — rotated frequently'] },
    detectionSignatures: ['YARA: CobaltStrike_Beacon_x86', 'Suricata: ET MALWARE CobaltStrike C2', 'Sigma: proc_creation_win_cobaltstrike_pipe'],
    relatedTools: ['Metasploit', 'Brute Ratel', 'Sliver', 'Mythic']
  },
  {
    id: 'tool-002', name: 'Mimikatz', type: 'Credential Harvesting', developer: 'Benjamin Delpy (open source)',
    usedBy: ['APT28', 'APT29', 'Sandworm', 'Lazarus', 'APT41', 'Nearly all threat actors'],
    capabilities: ['LSASS credential dumping', 'Kerberos ticket extraction', 'Pass-the-hash', 'Pass-the-ticket', 'Golden/Silver ticket creation', 'DCSync'],
    firstSeen: '2011', lastSeen: '2026-09',
    iocs: { hashes: ['mimikatz.exe variants...'], domains: ['N/A - post-exploitation tool'], ips: ['N/A'] },
    detectionSignatures: ['YARA: Mimikatz_Memory_Rule', 'Windows Event: 4624 (Type 9 + DCSyn)', 'Sigma: proc_access_win_mimikatz_lsass'],
    relatedTools: ['Rubeus', 'Impacket secretsdump', 'pypykatz', 'LaZagne']
  },
  {
    id: 'tool-003', name: 'BlackEnergy / Industroyer', type: 'ICS/SCADA Malware', developer: 'Sandworm (GRU Unit 74455)',
    usedBy: ['Sandworm'],
    capabilities: ['ICS protocol manipulation (IEC 101/104, OPC DA)', 'SCADA HMI interaction', 'Wiper component', 'DDoS capability', 'Remote access trojan'],
    firstSeen: '2007 (BlackEnergy v1)', lastSeen: '2022 (Industroyer2 in Ukraine)',
    iocs: { hashes: ['BE3: f2e21...', 'Industroyer: d7a9c...'], domains: ['Various C2 domains'], ips: ['Various — Ukrainian ISP ranges targeted'] },
    detectionSignatures: ['YARA: Industroyer_IEC104', 'Snort: ICS protocol anomaly rules', 'IDS: OPC DA unauthorized write detection'],
    relatedTools: ['CrashOverride', 'Industroyer2', 'AcidRain', 'CaddyWiper']
  },
  {
    id: 'tool-004', name: 'PlugX / ShadowPad', type: 'RAT / Backdoor', developer: 'Chinese MSS contractors (Chengdu 404)',
    usedBy: ['APT41', 'APT10', 'APT1', 'Winnti', 'Bronze President', 'Multiple Chinese APTs'],
    capabilities: ['Remote shell access', 'File upload/download', 'Keylogging', 'Screen capture', 'Plugin architecture', 'DLL side-loading'],
    firstSeen: '2008 (PlugX) / 2015 (ShadowPad)', lastSeen: '2026-09',
    iocs: { hashes: ['PlugX: varies widely...'], domains: ['Dynamic DNS services commonly used'], ips: ['SE Asia hosting frequently'] },
    detectionSignatures: ['YARA: PlugX_DLL_Sideload', 'Sigma: plugx_dll_sideloading', 'Suricata: ET MALWARE PlugX C2 Beacon'],
    relatedTools: ['Gh0st RAT', 'PoisonIvy', 'QuasarRAT', 'Winnti backdoor']
  },
  {
    id: 'tool-005', name: 'SUNBURST', type: 'Supply Chain Backdoor', developer: 'APT29 (SVR)',
    usedBy: ['APT29'],
    capabilities: ['SolarWinds Orion trojanization', 'Dormant activation (2-week delay)', 'Environment fingerprinting', 'C2 via DNS (DGA) and HTTP', 'Anti-forensics and sandbox evasion'],
    firstSeen: '2020-03', lastSeen: '2020-12',
    iocs: { hashes: ['d130bd75645c2433f88ac03e73...', 'ce77d116a074dab7a22a0fd4f2c...'], domains: ['avsvmcloud.com (C2)'], ips: ['Various — used legitimate cloud services'] },
    detectionSignatures: ['YARA: SUNBURST_Backdoor', 'Snort: SUNBURST DNS DGA detection', 'CISA: Emergency Directive 21-01 indicators'],
    relatedTools: ['TEARDROP', 'RAINDROP', 'GoldMax', 'SUNSHUTTLE', 'Cobalt Strike (follow-on)']
  },
  {
    id: 'tool-006', name: 'Emotet', type: 'Loader / Botnet', developer: 'Mealybug (criminal group)',
    usedBy: ['TA542', 'Conti affiliates', 'Ryuk operators', 'TrickBot operators'],
    capabilities: ['Mass spam distribution', 'Credential theft', 'Loader for secondary payloads', 'Modular architecture', 'Email thread hijacking', 'Network propagation'],
    firstSeen: '2014', lastSeen: '2023 (resurrected after 2021 takedown)',
    iocs: { hashes: ['Frequently packed — thousands of unique samples'], domains: ['Compromised WordPress sites for C2'], ips: ['Rotating botnet infrastructure'] },
    detectionSignatures: ['YARA: Emotet_Document_Macro', 'Suricata: ET MALWARE Emotet C2', 'Sigma: proc_creation_win_emotet'],
    relatedTools: ['TrickBot', 'QakBot', 'IcedID', 'BazarLoader']
  },
  {
    id: 'tool-007', name: 'Pegasus', type: 'Mobile Spyware', developer: 'NSO Group (Israel, commercial)',
    usedBy: ['Multiple state customers (45+ countries)', 'Unit 8200 (alleged development support)'],
    capabilities: ['Zero-click iPhone/Android exploitation', 'Encrypted messaging interception (Signal, WhatsApp, Telegram)', 'Microphone/camera activation', 'Location tracking', 'File extraction', 'Keylogging'],
    firstSeen: '2016', lastSeen: '2026-09',
    iocs: { hashes: ['Device-specific — forensic analysis required'], domains: ['icloud-analytics.com (historical)', 'Various per-deployment'], ips: ['NSO infrastructure rotated per client'] },
    detectionSignatures: ['MVT (Mobile Verification Toolkit)', 'iMazing Spyware Detection', 'Amnesty International forensic indicators'],
    relatedTools: ['Predator (Cytrox/Intellexa)', 'Candiru (DevilsTongue)', 'FinFisher', 'Hermit (RCS Lab)']
  },
  {
    id: 'tool-008', name: 'ALPHV/BlackCat', type: 'Ransomware', developer: 'ALPHV (suspected Darkside/BlackMatter rebrand)',
    usedBy: ['ALPHV affiliates', 'Scattered Spider (UNC3944)'],
    capabilities: ['Written in Rust (cross-platform)', 'Configurable encryption (AES/ChaCha20)', 'ESXi hypervisor encryption', 'Self-propagating via PsExec/GPO', 'Data exfiltration for double extortion', 'Public leak site'],
    firstSeen: '2021-11', lastSeen: '2024 (law enforcement disruption)',
    iocs: { hashes: ['Rust binary — varies per compilation'], domains: ['alphvmmm27o3abo3r2mlmjrpdmz...onion'], ips: ['Tor hidden services'] },
    detectionSignatures: ['YARA: ALPHV_BlackCat_Ransomware', 'Sigma: ransomware_blackcat', 'Suricata: ET MALWARE BlackCat Negotiation Site'],
    relatedTools: ['LockBit', 'Cl0p', 'Royal/BlackSuit', 'Hive']
  }
];

// ============================================================================
// ALLIANCE NETWORKS
// ============================================================================
var ALLIANCE_NETWORKS = [
  {
    id: 'fvey', name: 'Five Eyes (FVEY)', members: ['United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand'],
    capabilities: 'Full spectrum SIGINT sharing, joint cyber operations, shared infrastructure, coordinated attribution',
    sharingLevel: 'TOP SECRET // SI // REL TO FVEY',
    lastExercise: 'Cyber Flag 26-2 (2026-07)',
    description: 'Premier intelligence sharing alliance. Full integration of cyber threat intelligence, joint hunt-forward operations, coordinated vulnerability disclosure and attribution statements.',
    activeOps: 3
  },
  {
    id: 'nato-ccdcoe', name: 'NATO CCDCOE', members: ['31 NATO members + partners'],
    capabilities: 'Locked Shields exercise, Tallinn Manual legal framework, joint research, collective defense cyber policy',
    sharingLevel: 'NATO SECRET',
    lastExercise: 'Locked Shields 2026 (2026-04)',
    description: 'NATO Cooperative Cyber Defence Centre of Excellence. Conducts the largest live-fire cyber defense exercise annually. Develops international law and policy frameworks for cyber operations.',
    activeOps: 1
  },
  {
    id: 'quad-cyber', name: 'Quad Cyber Partnership', members: ['United States', 'Japan', 'Australia', 'India'],
    capabilities: 'Critical infrastructure protection, supply chain security, cyber capacity building, joint threat briefings',
    sharingLevel: 'SECRET // REL TO QUAD',
    lastExercise: 'Quad Cyber Challenge 2026 (2026-05)',
    description: 'Indo-Pacific focused cyber partnership. Emphasizes critical technology supply chain security, 5G/6G network security, and countering Chinese cyber operations in the region.',
    activeOps: 1
  },
  {
    id: 'eu-cert', name: 'EU CSIRTs Network', members: ['27 EU member state CSIRTs + CERT-EU'],
    capabilities: 'Incident response coordination, vulnerability disclosure, threat intelligence sharing, joint exercises',
    sharingLevel: 'EU RESTRICTED',
    lastExercise: 'Cyber Europe 2026 (2026-06)',
    description: 'Network of Computer Security Incident Response Teams across EU member states. Coordinates response to large-scale cross-border cyber incidents. Key role in NIS2 Directive implementation.',
    activeOps: 2
  },
  {
    id: 'bilateral-us-il', name: 'US-Israel Bilateral Cyber', members: ['United States', 'Israel'],
    capabilities: 'Joint offensive operations, zero-day sharing, ICS/SCADA security, counter-Iran operations',
    sharingLevel: 'TOP SECRET // SI // REL TO USA, ISR',
    lastExercise: 'Juniper Cobra Cyber (2026-03)',
    description: 'Deep bilateral cyber cooperation spanning offensive and defensive operations. Joint development of cyber weapons (Stuxnet). Shared R&D on critical infrastructure protection.',
    activeOps: 2
  }
];

// ============================================================================
// ZERO-DAY MARKET INTELLIGENCE (simulated dark web monitoring)
// ============================================================================
var ZERO_DAY_MARKET_INTEL = [
  { id: 'zd-001', category: 'Mobile', target: 'iOS 19 Zero-Click RCE', price: '$2,500,000', riskLevel: 'CRITICAL', seller: 'ShadowVault', lastSeen: '2026-09-12', buyers: 'Nation-state interest confirmed', description: 'Full chain zero-click exploit for latest iOS via iMessage. No user interaction required. Sandbox escape + kernel privilege escalation included.' },
  { id: 'zd-002', category: 'Browser', target: 'Chrome V8 Type Confusion', price: '$500,000', riskLevel: 'HIGH', seller: 'ZeroBroker', lastSeen: '2026-09-11', buyers: 'Multiple bids received', description: 'V8 JavaScript engine type confusion leading to RCE. Works on Chrome 128+ and Chromium-based browsers. Renderer process escape sold separately.' },
  { id: 'zd-003', category: 'Enterprise', target: 'Microsoft Exchange RCE', price: '$750,000', riskLevel: 'CRITICAL', seller: 'DarkCodex', lastSeen: '2026-09-10', buyers: 'Auction format — reserve met', description: 'Pre-auth remote code execution in Exchange Server 2019 CU14+. HTTP-based, no credentials required. Wormable potential.' },
  { id: 'zd-004', category: 'ICS/SCADA', target: 'Siemens S7-1500 PLC Auth Bypass', price: '$1,200,000', riskLevel: 'CRITICAL', seller: 'IndustroHack', lastSeen: '2026-09-09', buyers: 'State-sponsored buyer confirmed', description: 'Authentication bypass allowing arbitrary program upload to S7-1500 series PLCs. Affects firmware 2.9+. Potential for physical damage.' },
  { id: 'zd-005', category: 'Network', target: 'Palo Alto PAN-OS RCE', price: '$400,000', riskLevel: 'HIGH', seller: 'FWBreaker', lastSeen: '2026-09-08', buyers: 'Under negotiation', description: 'Remote code execution in PAN-OS management interface. Pre-auth, affects 11.x versions. Access to firewall configuration and network traffic.' },
  { id: 'zd-006', category: 'Mobile', target: 'Android Pixel Bootloader Bypass', price: '$800,000', riskLevel: 'HIGH', seller: 'MobileZero', lastSeen: '2026-09-11', buyers: 'Government contractor interest', description: 'Persistent implant surviving factory reset on Google Pixel 8/9 devices. Firmware-level access with SELinux bypass.' },
  { id: 'zd-007', category: 'Cloud', target: 'AWS IAM Privilege Escalation', price: '$300,000', riskLevel: 'HIGH', seller: 'CloudPwn', lastSeen: '2026-09-10', buyers: 'Active bidding', description: 'IAM policy evaluation flaw allowing any authenticated AWS user to escalate to admin. Works across all regions.' },
  { id: 'zd-008', category: 'Enterprise', target: 'VMware ESXi Hypervisor Escape', price: '$1,500,000', riskLevel: 'CRITICAL', seller: 'VirtBreak', lastSeen: '2026-09-12', buyers: 'Premium tier — invitation only', description: 'Guest-to-host escape on VMware ESXi 8.0. Gain hypervisor-level code execution from any VM. Full infrastructure compromise potential.' },
  { id: 'zd-009', category: 'VPN', target: 'Fortinet FortiGate SSL VPN', price: '$350,000', riskLevel: 'HIGH', seller: 'NetPenetrator', lastSeen: '2026-09-07', buyers: 'Rapid interest from ransomware groups', description: 'Pre-authentication RCE in FortiGate SSL VPN. Affects FortiOS 7.4.x. Estimated 500K+ internet-facing targets.' },
  { id: 'zd-010', category: 'Firmware', target: 'Intel ME/CSME Persistent Backdoor', price: '$3,000,000', riskLevel: 'CRITICAL', seller: 'DeepSilicon', lastSeen: '2026-09-06', buyers: 'Nation-state only', description: 'Persistent implant in Intel Management Engine. Survives OS reinstall, firmware update, and hard drive replacement. Ring -3 access.' }
];

// ============================================================================
// COMMUNICATION TEMPLATES
// ============================================================================
var COMMUNICATION_TEMPLATES = {
  'sitrep': {
    name: 'SITUATION REPORT (SITREP)',
    classification: 'SECRET // NOFORN',
    fields: [
      { label: 'DTG', description: 'Date-Time Group (DDHHMMZ MON YYYY)', example: '130800Z SEP 2026' },
      { label: 'FROM', description: 'Originating unit/command', example: 'USCYBERCOM J3 CURRENT OPS' },
      { label: 'TO', description: 'Distribution list', example: 'SECDEF / NSC / CISA / FBI CYBER' },
      { label: 'SUBJ', description: 'Subject with classification', example: '(S//NF) CYBER SITREP 026-253' },
      { label: '1. SITUATION', description: 'Current operational environment summary', example: 'A. Global Cyber Threat Level: ORANGE (ELEVATED). B. Nation-state activity: Increased APT29 operations targeting NATO diplomatic networks. C. Ransomware: LockBit 4.0 variant affecting healthcare sector.' },
      { label: '2. OPERATIONS', description: 'Current and planned operations', example: 'A. Defensive: Hunt-forward team deployed to [ALLIED NATION]. B. Active: Operation IRON SHIELD monitoring APT28 C2 infrastructure. C. Planned: Coordinated takedown of identified ransomware infrastructure NLT 15 SEP.' },
      { label: '3. INTELLIGENCE', description: 'Key intelligence updates', example: 'A. SIGINT indicates PRC-affiliated actors staging capabilities against US telecom providers. B. OSINT reporting suggests imminent Russian hybrid operation against Baltic state. C. DARKWEB: New zero-day listing for ICS/SCADA targets — assessed HIGH credibility.' },
      { label: '4. LOGISTICS/PERSONNEL', description: 'Team status and resource needs', example: 'A. CNMF Teams: 14/16 operational (2 in reset). B. Critical: Need additional ICS/SCADA analysts for Sector response. C. Tools: New YARA signatures deployed to all sensor platforms.' },
      { label: '5. COMMUNICATIONS', description: 'Communication status and issues', example: 'A. All C2 systems operational. B. JWICS connectivity nominal. C. Ally coordination: UK NCSC video conference scheduled 131400Z SEP.' },
      { label: '6. COMMANDER ASSESSMENT', description: 'Senior leader assessment and recommendations', example: 'Elevated threat posture warrants maintaining enhanced monitoring. Recommend pre-authorization of defensive counter-ops against identified APT29 infrastructure.' }
    ]
  },
  'oprep3': {
    name: 'OPERATIONAL REPORT (OPREP-3)',
    classification: 'TOP SECRET // SCI',
    fields: [
      { label: 'MSGID', description: 'Message identifier', example: 'OPREP-3/CYBER PINNACLE/026-253-001' },
      { label: 'DTG', description: 'Date-Time Group', example: '130345Z SEP 2026' },
      { label: 'CATEGORY', description: 'Event category', example: 'CYBER PINNACLE (national-level cyber event)' },
      { label: 'EVENT DESCRIPTION', description: 'What happened', example: 'At 130215Z SEP 2026, USCYBERCOM CNMF detected active intrusion into [CRITICAL INFRASTRUCTURE ENTITY] attributed to PRC-affiliated APT group Volt Typhoon. Adversary has established persistent access to operational technology network controlling [SYSTEMS].' },
      { label: 'IMPACT ASSESSMENT', description: 'Current and potential impact', example: 'CURRENT: Adversary has read access to OT network. POTENTIAL: If adversary executes destructive payload, impact to [SECTOR] could affect [X] million customers in [REGION].' },
      { label: 'RESPONSE ACTIONS', description: 'Actions taken and planned', example: 'A. CNMF team on-site providing technical assistance. B. Coordinating with CISA for sector-wide advisory. C. NSA providing SIGINT support for adversary tracking. D. Recommend POTUS-level brief NLT 130600Z.' },
      { label: 'REQUESTED AUTHORITY', description: 'Authorities needed', example: 'Request authorization for active cyber defense measures against identified adversary infrastructure per NSPM-13 and EXORD 2019-001. Specific targets identified in Annex B (TS//SCI//SAP).' }
    ]
  },
  'flash': {
    name: 'FLASH MESSAGE',
    classification: 'TOP SECRET // SCI // FLASH PRECEDENCE',
    fields: [
      { label: 'PRECEDENCE', description: 'Message priority', example: 'FLASH (highest priority — immediate action required)' },
      { label: 'DTG', description: 'Date-Time Group', example: '130147Z SEP 2026' },
      { label: 'FROM', description: 'Originator', example: 'DIRNSA / CDR USCYBERCOM' },
      { label: 'TO', description: 'Action addressees', example: 'POTUS / SECDEF / DNI / NSA / DHS SEC' },
      { label: 'INFO', description: 'Information addressees', example: 'JCS / COCOM CDRS / FBI DIR / CISA DIR' },
      { label: 'SUBJECT', description: 'Subject line', example: '(TS//SCI) IMMINENT NATION-STATE CYBER ATTACK ON US CRITICAL INFRASTRUCTURE' },
      { label: 'BODY', description: 'Concise message body', example: 'FLASH — USCYBERCOM has detected indicators of imminent destructive cyber attack against US [SECTOR] infrastructure by [NATION-STATE] forces. Attack assessed to commence within 24 hours based on infrastructure activation pattern matching historical [OPERATION NAME]. Recommend immediate transition to CYBER DEFCON 2 and pre-authorization of defensive response operations. Full intelligence package at Annex A.' }
    ]
  },
  'exbrief': {
    name: 'EXECUTIVE BRIEF',
    classification: 'TOP SECRET // SCI // NOFORN',
    fields: [
      { label: 'PREPARED FOR', description: 'Recipient', example: 'National Security Council Principals Committee' },
      { label: 'PREPARED BY', description: 'Originating organization', example: 'USCYBERCOM / NSA Joint Intelligence Directorate' },
      { label: 'DATE', description: 'Date of brief', example: '13 September 2026' },
      { label: 'TOPIC', description: 'Brief topic', example: 'Global Cyber Threat Posture and Recommended Actions' },
      { label: 'BOTTOM LINE UP FRONT (BLUF)', description: 'Key takeaway in 1-2 sentences', example: 'Multiple nation-state actors are increasing operational tempo against US and allied critical infrastructure. We recommend elevating to CYBER DEFCON 2 and authorizing pre-positioned defensive operations.' },
      { label: 'BACKGROUND', description: 'Context and history', example: 'Over the past 72 hours, USCYBERCOM has observed a significant increase in preparatory cyber activity from Russian (Sandworm) and Chinese (Volt Typhoon) state actors...' },
      { label: 'CURRENT SITUATION', description: 'Present state of affairs', example: 'Three concurrent nation-state operations detected: [1] APT29 targeting NATO diplomatic networks... [2] Volt Typhoon activating dormant access in US telecom... [3] Lazarus Group staging cryptocurrency theft infrastructure...' },
      { label: 'OPTIONS', description: 'Courses of action', example: 'OPTION A: Maintain current posture with enhanced monitoring. OPTION B: Elevate to CYBER DEFCON 2, authorize hunt-forward teams. OPTION C: Full cyber DEFCON 1 with pre-authorized counter-operations.' },
      { label: 'RECOMMENDATION', description: 'Preferred course of action', example: 'OPTION B — Provides enhanced defensive posture while maintaining de-escalation pathway. Estimated cost: $12M for 30-day enhanced operations.' }
    ]
  }
};

// ============================================================================
// TABLETOP EXERCISES
// ============================================================================
var TABLETOP_EXERCISES = [
  {
    id: 'ttx-001', name: 'CYBER STORM VIII',
    scenario: 'A coordinated nation-state attack targeting US power grid and water systems simultaneously. The adversary (attributed to Sandworm/GRU) uses pre-positioned Volt Typhoon-style access in OT networks to deploy wipers during a period of geopolitical tension.',
    injects: [
      { time: 'T+0:00', event: 'CISA receives reports of anomalous SCADA behavior at 3 major power utilities in different ISOs' },
      { time: 'T+0:30', event: 'Water treatment facility in major metro area reports chemical dosing system malfunction' },
      { time: 'T+1:00', event: 'SIGINT confirms C2 traffic pattern matching Sandworm infrastructure' },
      { time: 'T+1:30', event: 'Additional power utilities report similar issues — total now 8 across 4 states' },
      { time: 'T+2:00', event: 'Media begins reporting power outages — public concern rising' },
      { time: 'T+2:30', event: 'NSA intercept suggests second wave targeting natural gas pipelines' },
      { time: 'T+3:00', event: 'FBI reports coordinated DDoS against emergency services 911 systems' },
      { time: 'T+4:00', event: 'President requests options briefing — what are our response options?' },
      { time: 'T+5:00', event: 'Allied nation reports similar attacks on their infrastructure' },
      { time: 'T+6:00', event: 'Adversary publicly denies involvement — information warfare begins' }
    ],
    evaluationCriteria: ['Detection speed (time from first anomaly to confirmed attribution)', 'Cross-sector coordination effectiveness', 'Escalation decision quality', 'Public communication strategy', 'International coordination timeliness', 'Recovery prioritization decisions'],
    participantRoles: ['National Security Advisor', 'USCYBERCOM Commander', 'CISA Director', 'FBI Cyber Division', 'DHS Secretary', 'DOE Emergency Response', 'Private sector utility CEOs', 'State governors (affected states)', 'NSA Director', 'White House Communications']
  },
  {
    id: 'ttx-002', name: 'DIGITAL PEARL HARBOR',
    scenario: 'A surprise multi-vector cyber attack by China during a Taiwan Strait crisis. Volt Typhoon activates pre-positioned access across US telecom, power, water, and transportation while conventional military operations begin. The cyber attack aims to delay US military response.',
    injects: [
      { time: 'T+0:00', event: 'DOD detects unusual PLA military movement near Taiwan Strait' },
      { time: 'T+0:15', event: 'Major US ISPs report core router failures in Pacific region' },
      { time: 'T+0:30', event: 'PACOM reports degraded satellite communications' },
      { time: 'T+0:45', event: 'West Coast ports report logistics system outages' },
      { time: 'T+1:00', event: 'Multiple CONUS military base power systems experience anomalies' },
      { time: 'T+1:30', event: 'Financial market infrastructure reporting latency issues' },
      { time: 'T+2:00', event: 'China commences military operations near Taiwan' },
      { time: 'T+3:00', event: 'GPS anomalies detected across Pacific theater' },
      { time: 'T+4:00', event: 'Allied nations ask for US cyber support — stretch resources' }
    ],
    evaluationCriteria: ['Ability to attribute while under attack', 'Cyber-conventional integration', 'Alliance coordination under pressure', 'Resource allocation triage', 'Escalation management', 'Continuity of government operations'],
    participantRoles: ['POTUS', 'Secretary of Defense', 'Chairman JCS', 'INDOPACOM Commander', 'CYBERCOM Commander', 'NSA Director', 'DHS Secretary', 'Secretary of State', 'Director of National Intelligence']
  },
  {
    id: 'ttx-003', name: 'RANSOMWARE PANDEMIC',
    scenario: 'A ransomware-as-a-service operation deploys simultaneously across 500+ healthcare facilities during a flu pandemic. Hospitals lose access to EHR, imaging, and pharmacy systems. The ransomware group demands $50M collective ransom and threatens to leak patient data.',
    injects: [
      { time: 'T+0:00', event: 'First hospital system reports encryption of all Windows servers' },
      { time: 'T+0:30', event: 'HHS reports 47 hospitals across 12 states affected' },
      { time: 'T+1:00', event: 'Ambulance diversions create regional EMS crisis' },
      { time: 'T+1:30', event: 'Number of affected facilities reaches 200+' },
      { time: 'T+2:00', event: 'First confirmed patient death attributed to delayed treatment' },
      { time: 'T+2:30', event: 'Ransomware group posts 1TB of patient records as proof' },
      { time: 'T+3:00', event: 'FBI identifies operator location in non-extradition country' },
      { time: 'T+4:00', event: 'Congressional leaders demand immediate briefing' },
      { time: 'T+5:00', event: 'Second wave hits pharmacy supply chain systems' }
    ],
    evaluationCriteria: ['Healthcare sector mutual aid coordination', 'Patient care continuity decisions', 'Ransom payment policy application', 'Law enforcement coordination', 'Public health communication', 'Pharmaceutical supply chain contingency'],
    participantRoles: ['HHS Secretary', 'CISA Director', 'FBI Director', 'CDC Director', 'Hospital CEO representatives', 'State health commissioners', 'Pharmaceutical company leadership', 'Insurance industry representatives']
  },
  {
    id: 'ttx-004', name: 'SUPPLY CHAIN CASCADE',
    scenario: 'A sophisticated adversary compromises a widely-used open source library (similar to SolarWinds but targeting the JavaScript/npm ecosystem). The trojanized package is pulled by 50,000+ applications including government, financial, and defense sector software. The backdoor activates after a 60-day dormancy period.',
    injects: [
      { time: 'T+0:00', event: 'Security researcher discovers suspicious code in popular npm package (10M weekly downloads)' },
      { time: 'T+0:30', event: 'Analysis reveals sophisticated backdoor with C2 capability' },
      { time: 'T+1:00', event: 'Package usage analysis shows presence in 47 federal agency applications' },
      { time: 'T+1:30', event: 'Backdoor C2 infrastructure traced to APT41-associated hosting' },
      { time: 'T+2:00', event: 'Evidence of data exfiltration from 3 defense contractors discovered' },
      { time: 'T+3:00', event: 'GitHub reports the maintainer account was compromised 90 days ago' },
      { time: 'T+4:00', event: 'CISA determines full scope of impact — over 300 government apps affected' },
      { time: 'T+5:00', event: 'Adversary begins destroying evidence on compromised systems' }
    ],
    evaluationCriteria: ['Supply chain visibility and assessment speed', 'Cross-sector notification effectiveness', 'Technical remediation coordination', 'Open source ecosystem response', 'Intelligence sharing speed', 'Legal and attribution considerations'],
    participantRoles: ['CISA Director', 'NSA Cybersecurity Director', 'GitHub/npm leadership', 'Federal CIOs Council', 'Defense contractor CISOs', 'DOJ National Security Division', 'OMB Cyber Policy', 'Open source foundation representatives']
  }
];

// ============================================================================
// MITRE ATT&CK TACTIC/TECHNIQUE MAPPING
// ============================================================================
var MITRE_TACTICS = [
  'Reconnaissance', 'Resource Development', 'Initial Access', 'Execution',
  'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access',
  'Discovery', 'Lateral Movement', 'Collection', 'Command & Control',
  'Exfiltration', 'Impact'
];

var MITRE_TECHNIQUES_BY_TACTIC = {
  'Reconnaissance': ['T1595 Active Scanning', 'T1592 Gather Host Info', 'T1589 Gather Identity Info', 'T1590 Gather Network Info', 'T1591 Gather Org Info'],
  'Resource Development': ['T1583 Acquire Infrastructure', 'T1586 Compromise Accounts', 'T1584 Compromise Infrastructure', 'T1587 Develop Capabilities', 'T1588 Obtain Capabilities'],
  'Initial Access': ['T1566 Phishing', 'T1190 Exploit Public App', 'T1195 Supply Chain', 'T1078 Valid Accounts', 'T1133 External Remote Services'],
  'Execution': ['T1059 Command Scripting', 'T1203 Exploitation for Client', 'T1047 WMI', 'T1053 Scheduled Task', 'T1204 User Execution'],
  'Persistence': ['T1547 Boot Autostart', 'T1136 Create Account', 'T1505 Server Software', 'T1053 Scheduled Task', 'T1078 Valid Accounts'],
  'Privilege Escalation': ['T1548 Abuse Elevation', 'T1134 Access Token Manipulation', 'T1068 Exploitation for Priv Esc', 'T1484 Domain Policy Mod'],
  'Defense Evasion': ['T1027 Obfuscated Files', 'T1055 Process Injection', 'T1070 Indicator Removal', 'T1036 Masquerading', 'T1562 Impair Defenses'],
  'Credential Access': ['T1003 OS Credential Dump', 'T1110 Brute Force', 'T1056 Input Capture', 'T1557 Adversary-in-the-Middle', 'T1552 Unsecured Credentials'],
  'Discovery': ['T1087 Account Discovery', 'T1083 File Discovery', 'T1046 Network Service Scan', 'T1057 Process Discovery', 'T1082 System Info Discovery'],
  'Lateral Movement': ['T1021 Remote Services', 'T1210 Exploitation of Remote Services', 'T1570 Lateral Tool Transfer', 'T1550 Use Alternate Auth'],
  'Collection': ['T1560 Archive Data', 'T1005 Data from Local System', 'T1114 Email Collection', 'T1113 Screen Capture', 'T1125 Video Capture'],
  'Command & Control': ['T1071 Application Layer Protocol', 'T1573 Encrypted Channel', 'T1105 Ingress Tool Transfer', 'T1090 Proxy', 'T1572 Protocol Tunneling'],
  'Exfiltration': ['T1041 Exfil Over C2', 'T1048 Exfil Over Alt Protocol', 'T1567 Exfil to Cloud', 'T1029 Scheduled Transfer'],
  'Impact': ['T1486 Data Encrypted', 'T1485 Data Destruction', 'T1489 Service Stop', 'T1529 System Shutdown', 'T1565 Data Manipulation']
};

var APT_MITRE_COVERAGE = {
  'APT28': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Credential Access', 'Lateral Movement', 'Collection', 'Exfiltration'],
  'APT29': ['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration'],
  'Sandworm': ['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Lateral Movement', 'Impact'],
  'Turla': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Credential Access', 'Discovery', 'Collection', 'Command & Control', 'Exfiltration'],
  'APT41': ['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration'],
  'Volt Typhoon': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection'],
  'Lazarus': ['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration', 'Impact'],
  'Kimsuky': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Credential Access', 'Collection', 'Command & Control', 'Exfiltration'],
  'APT33': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Credential Access', 'Lateral Movement', 'Impact'],
  'APT34': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Exfiltration'],
  'MuddyWater': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Credential Access', 'Discovery', 'Command & Control'],
  'APT32': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration'],
  'Equation Group': ['Reconnaissance', 'Resource Development', 'Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Command & Control', 'Exfiltration', 'Impact'],
  'Gamaredon': ['Reconnaissance', 'Initial Access', 'Execution', 'Persistence', 'Defense Evasion', 'Collection', 'Command & Control', 'Exfiltration'],
  'DarkSide': ['Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Lateral Movement', 'Impact'],
  'LockBit': ['Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Impact'],
  'Conti': ['Initial Access', 'Execution', 'Persistence', 'Privilege Escalation', 'Defense Evasion', 'Credential Access', 'Discovery', 'Lateral Movement', 'Collection', 'Exfiltration', 'Impact']
};


// ============================================================================
// RENDER FUNCTION 1: renderOperationDetail(opId)
// ============================================================================
function renderOperationDetail(opId) {
  var op = HISTORICAL_OPERATIONS_DETAIL[opId];
  if (!op) {
    var basic = null;
    for (var i = 0; i < HISTORICAL_OPS.length; i++) {
      if (HISTORICAL_OPS[i].id === opId) { basic = HISTORICAL_OPS[i]; break; }
    }
    if (!basic) return '<div style="padding:40px;text-align:center;color:#556;">No detailed data available for this operation.</div>';
    var h = '';
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;padding:24px;margin:16px 0;">';
    h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:4px;font-size:10px;letter-spacing:3px;margin:-24px -24px 16px -24px;border-radius:8px 8px 0 0;">TOP SECRET // SCI // NOFORN // OPERATIONAL</div>';
    h += '<h3 style="color:#00aaff;font-family:monospace;letter-spacing:2px;margin:0 0 12px 0;">' + esc(basic.name) + ' (' + esc(basic.year) + ')</h3>';
    h += '<div style="color:#889;font-size:12px;margin-bottom:8px;"><span style="color:#ffaa00;">ATTRIBUTION:</span> ' + esc(basic.attribution) + '</div>';
    h += '<div style="color:#889;font-size:12px;margin-bottom:8px;"><span style="color:#ffaa00;">TYPE:</span> ' + esc(basic.type) + '</div>';
    h += '<div style="color:#c8d8e8;font-size:13px;margin-bottom:8px;">' + esc(basic.description) + '</div>';
    h += '<div style="color:#889;font-size:12px;margin-bottom:8px;"><span style="color:#ffaa00;">TARGETS:</span> ' + esc(basic.targets) + '</div>';
    h += '<div style="color:#889;font-size:12px;"><span style="color:#ffaa00;">IMPACT:</span> ' + esc(basic.impact) + '</div>';
    h += '</div>';
    return h;
  }

  var h = '';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;margin:16px 0;">';

  // Classification banner
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:6px;font-size:11px;letter-spacing:4px;font-weight:bold;">TOP SECRET // SCI // NOFORN // OPERATIONAL HISTORY</div>';

  // Codename banner
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:3px;margin-bottom:4px;">OPERATION CODENAME</div>';
  h += '<h2 style="margin:0;font-size:28px;color:#00aaff;font-family:monospace;letter-spacing:4px;text-shadow:0 0 20px rgba(0,170,255,0.3);">' + esc(op.codename) + '</h2>';
  h += '</div>';

  // Attribution panel
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;display:flex;gap:24px;flex-wrap:wrap;">';
  h += '<div style="flex:1;min-width:200px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">ATTRIBUTION</div>';
  h += '<div style="color:#ff6644;font-size:14px;font-weight:bold;">' + esc(op.attribution) + '</div>';
  h += '</div>';
  h += '<div style="min-width:150px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">CONFIDENCE</div>';
  var confColor = op.attributionConfidence >= 90 ? '#00ff88' : op.attributionConfidence >= 70 ? '#ffaa00' : '#ff6644';
  h += '<div style="display:flex;align-items:center;gap:8px;">';
  h += '<div style="width:80px;height:8px;background:#1a2a3c;border-radius:4px;overflow:hidden;"><div style="width:' + op.attributionConfidence + '%;height:100%;background:' + confColor + ';border-radius:4px;"></div></div>';
  h += '<span style="color:' + confColor + ';font-size:14px;font-weight:bold;">' + op.attributionConfidence + '%</span>';
  h += '</div>';
  h += '</div>';
  h += '</div>';

  // Full description
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">OPERATION SUMMARY</div>';
  h += '<div style="color:#c8d8e8;font-size:13px;line-height:1.6;">' + esc(op.fullDescription) + '</div>';
  h += '</div>';

  // Targets
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">TARGETS</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var t = 0; t < op.targets.length; t++) {
    h += '<span style="background:#1a0a0a;border:1px solid #ff224433;color:#ff8866;padding:4px 10px;border-radius:4px;font-size:11px;">' + esc(op.targets[t]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  // TTP Breakdown
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:12px;">TTP BREAKDOWN (MITRE ATT&CK)</div>';
  for (var tp = 0; tp < op.ttps.length; tp++) {
    var ttp = op.ttps[tp];
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:10px 14px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start;">';
    h += '<span style="background:#00aaff22;color:#00aaff;padding:2px 8px;border-radius:3px;font-size:10px;font-family:monospace;white-space:nowrap;border:1px solid #00aaff44;">' + esc(ttp.technique) + '</span>';
    h += '<div>';
    h += '<div style="color:#c8d8e8;font-size:12px;font-weight:bold;">' + esc(ttp.name) + '</div>';
    h += '<div style="color:#889;font-size:11px;margin-top:2px;">' + esc(ttp.detail) + '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Timeline
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:12px;">OPERATION TIMELINE</div>';
  h += '<div style="position:relative;padding-left:24px;">';
  h += '<div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#00aaff,#00aaff44);"></div>';
  for (var tl = 0; tl < op.timeline.length; tl++) {
    var evt = op.timeline[tl];
    h += '<div style="position:relative;margin-bottom:12px;padding-left:16px;">';
    h += '<div style="position:absolute;left:-20px;top:4px;width:10px;height:10px;background:#00aaff;border-radius:50%;border:2px solid #080b12;"></div>';
    h += '<div style="color:#00aaff;font-size:11px;font-family:monospace;letter-spacing:1px;">' + esc(evt.date) + '</div>';
    h += '<div style="color:#c8d8e8;font-size:12px;margin-top:2px;">' + esc(evt.event) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Tools Used
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">TOOLS &amp; MALWARE EMPLOYED</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var to = 0; to < op.toolsUsed.length; to++) {
    h += '<span style="background:#0a1628;border:1px solid #00aaff33;color:#44bbff;padding:4px 10px;border-radius:4px;font-size:11px;font-family:monospace;">' + esc(op.toolsUsed[to]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  // Impact Assessment
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">IMPACT ASSESSMENT</div>';
  h += '<div style="color:#ff8866;font-size:13px;line-height:1.5;padding:12px;background:#1a0a0a;border:1px solid #ff224433;border-radius:6px;">' + esc(op.impact) + '</div>';
  h += '</div>';

  // Significance
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">STRATEGIC SIGNIFICANCE</div>';
  h += '<div style="color:#c8d8e8;font-size:13px;line-height:1.5;padding:12px;background:#0a1628;border:1px solid #00aaff22;border-radius:6px;">' + esc(op.significance) + '</div>';
  h += '</div>';

  // Lessons Learned
  h += '<div style="padding:16px 24px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">LESSONS LEARNED</div>';
  for (var ll = 0; ll < op.lessonsLearned.length; ll++) {
    h += '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px;">';
    h += '<span style="color:#ffaa00;font-size:12px;">&#9656;</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(op.lessonsLearned[ll]) + '</span>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 2: renderNationDetail(nationId)
// ============================================================================
function renderNationDetail(nationId) {
  var nation = null;
  for (var i = 0; i < NATION_STATE_PROFILES.length; i++) {
    if (NATION_STATE_PROFILES[i].id === nationId) { nation = NATION_STATE_PROFILES[i]; break; }
  }
  if (!nation) return '<div style="padding:40px;text-align:center;color:#556;">Nation profile not found.</div>';

  var capMatrix = CYBER_CAPABILITIES_MATRIX[nationId];
  var h = '';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;margin:16px 0;">';

  // Classification banner
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:6px;font-size:11px;letter-spacing:4px;font-weight:bold;">TOP SECRET // SCI // NOFORN — NATION-STATE CYBER PROFILE</div>';

  // Header
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:24px;border-bottom:1px solid #1a3a5c;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">';
  h += '<div>';
  h += '<div style="font-size:36px;margin-bottom:4px;">' + esc(nation.flag) + '</div>';
  h += '<h2 style="margin:0;font-size:24px;color:#00aaff;font-family:monospace;letter-spacing:3px;">' + esc(nation.name) + '</h2>';
  h += '<div style="color:#889;font-size:12px;margin-top:4px;">' + esc(nation.cyberCommand) + '</div>';
  h += '</div>';
  h += '<div style="text-align:right;">';
  var tlColors = { 1: '#00ff88', 2: '#44cc88', 3: '#ffaa00', 4: '#ff6622', 5: '#ff2244' };
  var tlLabels = { 1: 'LOW', 2: 'GUARDED', 3: 'ELEVATED', 4: 'HIGH', 5: 'CRITICAL' };
  var tlc = tlColors[nation.threatLevel] || '#ffaa00';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">THREAT LEVEL</div>';
  h += '<div style="font-size:32px;color:' + tlc + ';font-weight:bold;font-family:monospace;text-shadow:0 0 15px ' + tlc + '44;">' + nation.threatLevel + '/5</div>';
  h += '<div style="color:' + tlc + ';font-size:11px;letter-spacing:2px;">' + (tlLabels[nation.threatLevel] || 'UNKNOWN') + '</div>';
  h += '<div style="margin-top:6px;font-size:11px;color:#889;">TIER ' + nation.tier + ' CAPABILITY</div>';
  h += '</div>';
  h += '</div>';

  // Capability dimensions
  if (capMatrix) {
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:12px;">CAPABILITY ASSESSMENT</div>';
    h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;">';
    var dims = capMatrix.dimensions;
    var dimLabels = {
      signalIntel: 'SIGNALS INTELLIGENCE', offensiveOps: 'OFFENSIVE OPERATIONS', defensiveOps: 'DEFENSIVE OPERATIONS',
      cyberEspionage: 'CYBER ESPIONAGE', supplyChain: 'SUPPLY CHAIN OPS', infoOps: 'INFORMATION OPERATIONS',
      iamCapability: 'IDENTITY & ACCESS', researchDev: 'RESEARCH & DEVELOPMENT'
    };
    for (var dk in dims) {
      if (dims.hasOwnProperty(dk)) {
        var val = dims[dk];
        var barColor = val >= 8 ? '#00ff88' : val >= 5 ? '#ffaa00' : '#ff4466';
        h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:4px;padding:8px 12px;">';
        h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">';
        h += '<span style="color:#889;font-size:9px;letter-spacing:1px;">' + (dimLabels[dk] || esc(dk)) + '</span>';
        h += '<span style="color:' + barColor + ';font-size:12px;font-weight:bold;">' + val + '/10</span>';
        h += '</div>';
        h += '<div style="width:100%;height:6px;background:#1a2a3c;border-radius:3px;overflow:hidden;">';
        h += '<div style="width:' + (val * 10) + '%;height:100%;background:' + barColor + ';border-radius:3px;"></div>';
        h += '</div>';
        h += '</div>';
      }
    }
    h += '</div>';
    h += '</div>';

    // Workforce & Budget
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;display:flex;gap:24px;flex-wrap:wrap;">';
    h += '<div style="flex:1;min-width:200px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:12px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:4px;">WORKFORCE</div>';
    h += '<div style="color:#c8d8e8;font-size:13px;">' + esc(capMatrix.workforce) + '</div>';
    h += '</div>';
    h += '<div style="flex:1;min-width:200px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:12px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:4px;">ESTIMATED BUDGET</div>';
    h += '<div style="color:#c8d8e8;font-size:13px;">' + esc(capMatrix.budget) + '</div>';
    h += '</div>';
    h += '</div>';

    // Zero-Day Capability
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">ZERO-DAY CAPABILITY</div>';
    h += '<div style="color:#ffaa00;font-size:13px;padding:10px;background:#1a1a0a;border:1px solid #ffaa0033;border-radius:6px;">' + esc(capMatrix.zeroDayCapability) + '</div>';
    h += '</div>';

    // Key Units
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">KEY CYBER UNITS</div>';
    h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
    for (var ku = 0; ku < capMatrix.keyUnits.length; ku++) {
      h += '<span style="background:#0a1628;border:1px solid #00aaff33;color:#44bbff;padding:6px 12px;border-radius:4px;font-size:11px;">' + esc(capMatrix.keyUnits[ku]) + '</span>';
    }
    h += '</div>';
    h += '</div>';

    // Target Matrix
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">TARGET MATRIX</div>';
    for (var tm = 0; tm < capMatrix.targetMatrix.length; tm++) {
      h += '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px;">';
      h += '<span style="color:#ff6644;font-size:12px;">&#9656;</span>';
      h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(capMatrix.targetMatrix[tm]) + '</span>';
      h += '</div>';
    }
    h += '</div>';

    // Cyber Doctrine
    h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">CYBER DOCTRINE</div>';
    h += '<div style="color:#c8d8e8;font-size:13px;line-height:1.5;padding:10px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;">' + esc(capMatrix.cyberDoctrine) + '</div>';
    h += '</div>';
  }

  // APT Groups
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">ASSOCIATED APT GROUPS</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var ag = 0; ag < nation.aptGroups.length; ag++) {
    h += '<span style="background:#1a0a0a;border:1px solid #ff224433;color:#ff8866;padding:6px 12px;border-radius:4px;font-size:11px;font-family:monospace;">' + esc(nation.aptGroups[ag]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  // Known Operations
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">KNOWN OPERATIONS</div>';
  for (var ko = 0; ko < nation.knownOps.length; ko++) {
    h += '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:4px;">';
    h += '<span style="color:#ffaa00;font-size:11px;">&#9679;</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(nation.knownOps[ko]) + '</span>';
    h += '</div>';
  }
  h += '</div>';

  // Recent Activity
  h += '<div style="padding:16px 24px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:12px;">RECENT ACTIVITY TIMELINE</div>';
  h += '<div style="position:relative;padding-left:24px;">';
  h += '<div style="position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#ff2244,#ff224444);"></div>';
  for (var ra = 0; ra < nation.recentActivity.length; ra++) {
    var act = nation.recentActivity[ra];
    h += '<div style="position:relative;margin-bottom:12px;padding-left:16px;">';
    h += '<div style="position:absolute;left:-20px;top:4px;width:10px;height:10px;background:#ff2244;border-radius:50%;border:2px solid #060a14;"></div>';
    h += '<div style="color:#ff8866;font-size:11px;font-family:monospace;letter-spacing:1px;">' + esc(act.date) + '</div>';
    h += '<div style="color:#c8d8e8;font-size:12px;margin-top:2px;">' + esc(act.description) + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Current Posture
  h += '<div style="padding:16px 24px;border-top:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">CURRENT POSTURE</div>';
  var postureColor = nation.currentPosture.indexOf('OFFENSIVE') >= 0 ? '#ff2244' : nation.currentPosture.indexOf('ACTIVE') >= 0 ? '#ffaa00' : '#00ff88';
  h += '<div style="color:' + postureColor + ';font-size:16px;font-weight:bold;font-family:monospace;letter-spacing:3px;padding:12px;background:#0a0e1a;border:2px solid ' + postureColor + '44;border-radius:6px;text-align:center;">' + esc(nation.currentPosture) + '</div>';
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 3: renderToolProfile(toolId)
// ============================================================================
function renderToolProfile(toolId) {
  var tool = null;
  for (var i = 0; i < THREAT_ACTOR_TOOLS.length; i++) {
    if (THREAT_ACTOR_TOOLS[i].id === toolId) { tool = THREAT_ACTOR_TOOLS[i]; break; }
  }
  if (!tool) return '<div style="padding:40px;text-align:center;color:#556;">Tool profile not found.</div>';

  var h = '';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;margin:16px 0;">';
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:4px;font-size:10px;letter-spacing:3px;">TOP SECRET // SCI — THREAT ACTOR TOOLING PROFILE</div>';

  // Header
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:20px 24px;border-bottom:1px solid #1a3a5c;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">';
  h += '<div>';
  h += '<h3 style="margin:0;font-size:22px;color:#00aaff;font-family:monospace;letter-spacing:2px;">' + esc(tool.name) + '</h3>';
  h += '<div style="color:#889;font-size:11px;margin-top:4px;">Developer: ' + esc(tool.developer) + '</div>';
  h += '</div>';
  var typeColors = { 'C2 Framework': '#ff6644', 'Credential Harvesting': '#ffaa00', 'ICS/SCADA Malware': '#ff2244', 'RAT / Backdoor': '#ff8844', 'Supply Chain Backdoor': '#cc44ff', 'Loader / Botnet': '#44aaff', 'Mobile Spyware': '#ff44aa', 'Ransomware': '#ff2244' };
  var tc = typeColors[tool.type] || '#889';
  h += '<span style="background:' + tc + '22;color:' + tc + ';border:1px solid ' + tc + '44;padding:6px 14px;border-radius:4px;font-size:11px;font-family:monospace;letter-spacing:1px;">' + esc(tool.type) + '</span>';
  h += '</div>';

  // Active period
  h += '<div style="padding:12px 24px;border-bottom:1px solid #1a3a5c;display:flex;gap:24px;flex-wrap:wrap;">';
  h += '<div><span style="color:#556;font-size:10px;letter-spacing:1px;">FIRST SEEN: </span><span style="color:#00ff88;font-size:13px;font-family:monospace;">' + esc(tool.firstSeen) + '</span></div>';
  h += '<div><span style="color:#556;font-size:10px;letter-spacing:1px;">LAST SEEN: </span><span style="color:#ff6644;font-size:13px;font-family:monospace;">' + esc(tool.lastSeen) + '</span></div>';
  h += '</div>';

  // Used by
  h += '<div style="padding:14px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">USED BY THREAT ACTORS</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  for (var u = 0; u < tool.usedBy.length; u++) {
    h += '<span style="background:#1a0a0a;border:1px solid #ff224433;color:#ff8866;padding:4px 10px;border-radius:4px;font-size:10px;font-family:monospace;">' + esc(tool.usedBy[u]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  // Capabilities
  h += '<div style="padding:14px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">CAPABILITIES</div>';
  for (var c = 0; c < tool.capabilities.length; c++) {
    h += '<div style="display:flex;gap:8px;margin-bottom:4px;align-items:center;">';
    h += '<span style="color:#00aaff;font-size:10px;">&#9654;</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(tool.capabilities[c]) + '</span>';
    h += '</div>';
  }
  h += '</div>';

  // IOCs
  h += '<div style="padding:14px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">INDICATORS OF COMPROMISE</div>';
  h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:12px;font-family:monospace;font-size:11px;">';
  h += '<div style="margin-bottom:8px;"><span style="color:#ffaa00;">FILE HASHES:</span> <span style="color:#c8d8e8;">' + esc(tool.iocs.hashes.join(', ')) + '</span></div>';
  h += '<div style="margin-bottom:8px;"><span style="color:#ffaa00;">DOMAINS:</span> <span style="color:#c8d8e8;">' + esc(tool.iocs.domains.join(', ')) + '</span></div>';
  h += '<div><span style="color:#ffaa00;">IP ADDRESSES:</span> <span style="color:#c8d8e8;">' + esc(typeof tool.iocs.ips === 'string' ? tool.iocs.ips : tool.iocs.ips.join(', ')) + '</span></div>';
  h += '</div>';
  h += '</div>';

  // Detection Signatures
  h += '<div style="padding:14px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">DETECTION SIGNATURES</div>';
  for (var d = 0; d < tool.detectionSignatures.length; d++) {
    h += '<div style="background:#0a1a0a;border:1px solid #00ff8833;color:#44dd88;padding:6px 12px;border-radius:4px;margin-bottom:6px;font-size:11px;font-family:monospace;">' + esc(tool.detectionSignatures[d]) + '</div>';
  }
  h += '</div>';

  // Related Tools
  h += '<div style="padding:14px 24px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">RELATED TOOLS</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  for (var r = 0; r < tool.relatedTools.length; r++) {
    h += '<span style="background:#0a1628;border:1px solid #00aaff33;color:#44bbff;padding:4px 10px;border-radius:4px;font-size:11px;">' + esc(tool.relatedTools[r]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 4: renderAllianceStatus()
// ============================================================================
function renderAllianceStatus() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:16px;">ALLIED CYBER COORDINATION STATUS</div>';

  // Alliance cards
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px;">';
  for (var a = 0; a < ALLIANCE_NETWORKS.length; a++) {
    var alliance = ALLIANCE_NETWORKS[a];
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;overflow:hidden;">';
    h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:14px 16px;border-bottom:1px solid #1a3a5c;">';
    h += '<h4 style="margin:0;color:#00aaff;font-size:14px;font-family:monospace;letter-spacing:1px;">' + esc(alliance.name) + '</h4>';
    h += '<div style="color:#889;font-size:10px;margin-top:4px;">' + esc(alliance.description).substring(0, 120) + '...</div>';
    h += '</div>';
    h += '<div style="padding:12px 16px;">';
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:4px;">MEMBERS</div>';
    var members = typeof alliance.members === 'string' ? [alliance.members] : alliance.members;
    h += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
    for (var m = 0; m < members.length; m++) {
      h += '<span style="background:#00aaff11;color:#44bbff;padding:2px 8px;border-radius:3px;font-size:10px;border:1px solid #00aaff22;">' + esc(members[m]) + '</span>';
    }
    h += '</div>';
    h += '</div>';
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:4px;">SHARING LEVEL</div>';
    h += '<div style="color:#ffaa00;font-size:11px;font-family:monospace;">' + esc(alliance.sharingLevel) + '</div>';
    h += '</div>';
    h += '<div style="margin-bottom:10px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:4px;">LAST EXERCISE</div>';
    h += '<div style="color:#c8d8e8;font-size:11px;">' + esc(alliance.lastExercise) + '</div>';
    h += '</div>';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid #1a3a5c;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;">ACTIVE OPS</div>';
    h += '<div style="color:#00ff88;font-size:16px;font-weight:bold;font-family:monospace;">' + alliance.activeOps + '</div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Network connectivity diagram (text-based)
  h += '<div style="margin-top:24px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;padding:20px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:16px;text-align:center;">ALLIANCE NETWORK CONNECTIVITY</div>';
  h += '<div style="font-family:monospace;font-size:11px;color:#44bbff;text-align:center;line-height:1.8;">';
  h += '<div style="color:#00ff88;margin-bottom:8px;">&#9473;&#9473;&#9473; FIVE EYES (HIGHEST INTEGRATION) &#9473;&#9473;&#9473;</div>';
  h += '<div>[ US ] &#9473;&#9473;&#9473; [ UK ] &#9473;&#9473;&#9473; [ CAN ] &#9473;&#9473;&#9473; [ AUS ] &#9473;&#9473;&#9473; [ NZ ]</div>';
  h += '<div style="color:#556;">  &#9475;              &#9475;                           &#9475;</div>';
  h += '<div style="color:#ffaa00;margin:8px 0;">&#9473;&#9473;&#9473; NATO CCDCOE (31 MEMBERS) &#9473;&#9473;&#9473;</div>';
  h += '<div>[ US ] &#9473;&#9473; [ UK ] &#9473;&#9473; [ FRA ] &#9473;&#9473; [ DEU ] &#9473;&#9473; [ +27 ]</div>';
  h += '<div style="color:#556;">  &#9475;                                        &#9475;</div>';
  h += '<div style="color:#44aaff;margin:8px 0;">&#9473;&#9473;&#9473; QUAD CYBER (INDO-PACIFIC) &#9473;&#9473;&#9473;</div>';
  h += '<div>[ US ] &#9473;&#9473;&#9473; [ JPN ] &#9473;&#9473;&#9473; [ AUS ] &#9473;&#9473;&#9473; [ IND ]</div>';
  h += '<div style="color:#556;">  &#9475;</div>';
  h += '<div style="color:#ff8844;margin:8px 0;">&#9473;&#9473;&#9473; US-ISRAEL BILATERAL &#9473;&#9473;&#9473;</div>';
  h += '<div>[ US ] &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473; [ ISR ]</div>';
  h += '</div>';
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 5: renderMitreMatrix()
// ============================================================================
function renderMitreMatrix() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">MITRE ATT&CK COVERAGE HEATMAP</div>';
  h += '<div style="font-size:10px;color:#445;margin-bottom:16px;">Color intensity indicates number of tracked APT groups using techniques in each tactic</div>';

  h += '<div style="overflow-x:auto;">';
  h += '<table style="width:100%;border-collapse:collapse;font-size:10px;font-family:monospace;">';

  // Header row
  h += '<tr>';
  h += '<th style="padding:8px 6px;text-align:left;color:#556;border-bottom:2px solid #1a3a5c;min-width:120px;letter-spacing:1px;">APT GROUP</th>';
  for (var ti = 0; ti < MITRE_TACTICS.length; ti++) {
    var shortLabel = MITRE_TACTICS[ti].substring(0, 6).toUpperCase();
    h += '<th style="padding:8px 4px;text-align:center;color:#556;border-bottom:2px solid #1a3a5c;min-width:45px;letter-spacing:1px;font-size:8px;writing-mode:vertical-lr;height:80px;" title="' + esc(MITRE_TACTICS[ti]) + '">' + esc(MITRE_TACTICS[ti]) + '</th>';
  }
  h += '</tr>';

  // Rows for each APT group
  var aptNames = [];
  for (var ak in APT_MITRE_COVERAGE) {
    if (APT_MITRE_COVERAGE.hasOwnProperty(ak)) {
      aptNames.push(ak);
    }
  }
  aptNames.sort();

  for (var ai = 0; ai < aptNames.length; ai++) {
    var aptName = aptNames[ai];
    var coverage = APT_MITRE_COVERAGE[aptName];
    var rowBg = ai % 2 === 0 ? '#0a0e1a' : '#080c16';
    h += '<tr style="background:' + rowBg + ';">';
    h += '<td style="padding:6px 8px;color:#44bbff;border-bottom:1px solid #1a2a3c;white-space:nowrap;">' + esc(aptName) + '</td>';
    for (var tj = 0; tj < MITRE_TACTICS.length; tj++) {
      var hasTactic = false;
      for (var ck = 0; ck < coverage.length; ck++) {
        if (coverage[ck] === MITRE_TACTICS[tj]) { hasTactic = true; break; }
      }
      var cellColor = hasTactic ? '#00aaff' : 'transparent';
      var cellOpacity = hasTactic ? '0.7' : '0.05';
      h += '<td style="padding:4px;text-align:center;border-bottom:1px solid #1a2a3c;">';
      h += '<div style="width:16px;height:16px;margin:0 auto;border-radius:3px;background:' + cellColor + ';opacity:' + cellOpacity + ';' + (hasTactic ? 'box-shadow:0 0 6px ' + cellColor + '44;' : '') + '"></div>';
      h += '</td>';
    }
    h += '</tr>';
  }

  h += '</table>';
  h += '</div>';

  // Tactic coverage summary
  h += '<div style="margin-top:20px;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;">';
  for (var ts = 0; ts < MITRE_TACTICS.length; ts++) {
    var tactic = MITRE_TACTICS[ts];
    var count = 0;
    for (var cak in APT_MITRE_COVERAGE) {
      if (APT_MITRE_COVERAGE.hasOwnProperty(cak)) {
        for (var cc = 0; cc < APT_MITRE_COVERAGE[cak].length; cc++) {
          if (APT_MITRE_COVERAGE[cak][cc] === tactic) { count++; break; }
        }
      }
    }
    var pct = Math.round((count / aptNames.length) * 100);
    var barCol = pct >= 70 ? '#ff2244' : pct >= 40 ? '#ffaa00' : '#00ff88';
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:4px;padding:8px 10px;">';
    h += '<div style="display:flex;justify-content:space-between;margin-bottom:4px;">';
    h += '<span style="color:#889;font-size:9px;letter-spacing:1px;">' + esc(tactic).toUpperCase() + '</span>';
    h += '<span style="color:' + barCol + ';font-size:10px;font-weight:bold;">' + count + '/' + aptNames.length + '</span>';
    h += '</div>';
    h += '<div style="width:100%;height:4px;background:#1a2a3c;border-radius:2px;overflow:hidden;">';
    h += '<div style="width:' + pct + '%;height:100%;background:' + barCol + ';border-radius:2px;"></div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 6: renderZeroDayMarket()
// ============================================================================
function renderZeroDayMarket() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="background:#0a0a00;border:2px solid #ff880044;border-radius:8px;overflow:hidden;">';
  h += '<div style="background:linear-gradient(90deg,#1a0a00,#0a0a00,#1a0a00);padding:16px;border-bottom:1px solid #ff880033;text-align:center;">';
  h += '<div style="font-size:20px;color:#ff8800;font-family:monospace;letter-spacing:4px;text-shadow:0 0 20px rgba(255,136,0,0.3);">&#9760; DARK WEB ZERO-DAY MARKET MONITOR &#9760;</div>';
  h += '<div style="color:#886;font-size:10px;margin-top:4px;letter-spacing:2px;">INTELLIGENCE COLLECTION — DO NOT INTERACT — MONITORING ONLY</div>';
  h += '</div>';

  h += '<div style="padding:16px;display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px;">';
  for (var z = 0; z < ZERO_DAY_MARKET_INTEL.length; z++) {
    var zd = ZERO_DAY_MARKET_INTEL[z];
    var riskColors = { 'CRITICAL': '#ff2244', 'HIGH': '#ff6622' };
    var rc = riskColors[zd.riskLevel] || '#ffaa00';

    h += '<div style="background:#0c0c04;border:1px solid #ff880033;border-radius:6px;overflow:hidden;">';

    // Card header
    h += '<div style="padding:10px 14px;border-bottom:1px solid #ff880022;display:flex;justify-content:space-between;align-items:center;">';
    h += '<span style="background:' + rc + '22;color:' + rc + ';padding:2px 8px;border-radius:3px;font-size:9px;font-family:monospace;letter-spacing:1px;border:1px solid ' + rc + '44;">' + esc(zd.riskLevel) + '</span>';
    h += '<span style="color:#886;font-size:9px;font-family:monospace;">' + esc(zd.category) + '</span>';
    h += '</div>';

    // Target
    h += '<div style="padding:12px 14px;border-bottom:1px solid #ff880022;">';
    h += '<div style="color:#ff8800;font-size:14px;font-weight:bold;margin-bottom:4px;">' + esc(zd.target) + '</div>';
    h += '<div style="color:#aa8;font-size:11px;line-height:1.4;">' + esc(zd.description) + '</div>';
    h += '</div>';

    // Details
    h += '<div style="padding:10px 14px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
    h += '<div>';
    h += '<div style="font-size:8px;color:#665;letter-spacing:1px;">ASKING PRICE</div>';
    h += '<div style="color:#00ff88;font-size:16px;font-weight:bold;font-family:monospace;">' + esc(zd.price) + '</div>';
    h += '</div>';
    h += '<div>';
    h += '<div style="font-size:8px;color:#665;letter-spacing:1px;">SELLER</div>';
    h += '<div style="color:#ff8800;font-size:12px;font-family:monospace;">' + esc(zd.seller) + '</div>';
    h += '</div>';
    h += '<div>';
    h += '<div style="font-size:8px;color:#665;letter-spacing:1px;">LAST SEEN</div>';
    h += '<div style="color:#aa8;font-size:11px;">' + esc(zd.lastSeen) + '</div>';
    h += '</div>';
    h += '<div>';
    h += '<div style="font-size:8px;color:#665;letter-spacing:1px;">BUYER ACTIVITY</div>';
    h += '<div style="color:#aa8;font-size:11px;">' + esc(zd.buyers) + '</div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Market summary
  h += '<div style="padding:12px 16px;border-top:1px solid #ff880033;display:flex;justify-content:space-around;flex-wrap:wrap;gap:12px;">';
  h += '<div style="text-align:center;"><div style="font-size:8px;color:#665;letter-spacing:1px;">TOTAL LISTINGS MONITORED</div><div style="color:#ff8800;font-size:20px;font-weight:bold;">' + ZERO_DAY_MARKET_INTEL.length + '</div></div>';
  var critCount = 0;
  var totalValue = 0;
  for (var zs = 0; zs < ZERO_DAY_MARKET_INTEL.length; zs++) {
    if (ZERO_DAY_MARKET_INTEL[zs].riskLevel === 'CRITICAL') critCount++;
    var priceNum = parseInt(ZERO_DAY_MARKET_INTEL[zs].price.replace(/[^0-9]/g, ''));
    if (!isNaN(priceNum)) totalValue += priceNum;
  }
  h += '<div style="text-align:center;"><div style="font-size:8px;color:#665;letter-spacing:1px;">CRITICAL RISK</div><div style="color:#ff2244;font-size:20px;font-weight:bold;">' + critCount + '</div></div>';
  h += '<div style="text-align:center;"><div style="font-size:8px;color:#665;letter-spacing:1px;">EST. TOTAL MARKET VALUE</div><div style="color:#00ff88;font-size:20px;font-weight:bold;">$' + (totalValue / 1000000).toFixed(1) + 'M</div></div>';
  h += '</div>';

  h += '</div>';
  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 7: renderCommunicationTemplate(templateId)
// ============================================================================
function renderCommunicationTemplate(templateId) {
  var tmpl = COMMUNICATION_TEMPLATES[templateId];
  if (!tmpl) return '<div style="padding:40px;text-align:center;color:#556;">Template not found.</div>';

  var h = '';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;margin:16px 0;max-width:800px;">';

  // Classification banner
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:6px;font-size:11px;letter-spacing:4px;font-weight:bold;">' + esc(tmpl.classification) + ' — TEMPLATE</div>';

  // Title
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:16px 20px;border-bottom:2px solid #1a3a5c;">';
  h += '<h3 style="margin:0;color:#00aaff;font-size:16px;font-family:monospace;letter-spacing:2px;">' + esc(tmpl.name) + '</h3>';
  h += '</div>';

  // Fields
  for (var f = 0; f < tmpl.fields.length; f++) {
    var field = tmpl.fields[f];
    h += '<div style="padding:12px 20px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="display:flex;gap:16px;flex-wrap:wrap;">';
    h += '<div style="min-width:120px;">';
    h += '<div style="color:#00aaff;font-size:12px;font-weight:bold;font-family:monospace;letter-spacing:1px;">' + esc(field.label) + '</div>';
    h += '<div style="color:#556;font-size:9px;margin-top:2px;">' + esc(field.description) + '</div>';
    h += '</div>';
    h += '<div style="flex:1;min-width:200px;">';
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:4px;padding:8px 12px;color:#c8d8e8;font-size:12px;line-height:1.5;font-family:monospace;">' + esc(field.example) + '</div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }

  // Bottom classification
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:4px;font-size:10px;letter-spacing:3px;">' + esc(tmpl.classification) + '</div>';
  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 8: renderTabletopExercise(exerciseId)
// ============================================================================
function renderTabletopExercise(exerciseId) {
  var exercise = null;
  for (var i = 0; i < TABLETOP_EXERCISES.length; i++) {
    if (TABLETOP_EXERCISES[i].id === exerciseId) { exercise = TABLETOP_EXERCISES[i]; break; }
  }
  if (!exercise) return '<div style="padding:40px;text-align:center;color:#556;">Exercise not found.</div>';

  var h = '';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;margin:16px 0;">';

  // Header
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:6px;font-size:11px;letter-spacing:4px;font-weight:bold;">TOP SECRET // SCI // EXERCISE — OPERATIONAL</div>';
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:20px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:3px;margin-bottom:4px;">TABLETOP EXERCISE</div>';
  h += '<h2 style="margin:0;font-size:24px;color:#00aaff;font-family:monospace;letter-spacing:3px;text-shadow:0 0 20px rgba(0,170,255,0.3);">' + esc(exercise.name) + '</h2>';
  h += '</div>';

  // Scenario
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">SCENARIO BRIEF</div>';
  h += '<div style="color:#c8d8e8;font-size:13px;line-height:1.6;padding:12px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;">' + esc(exercise.scenario) + '</div>';
  h += '</div>';

  // Inject Timeline
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:12px;">INJECT TIMELINE</div>';
  h += '<div style="position:relative;padding-left:28px;">';
  h += '<div style="position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#ffaa00,#ff224488);"></div>';
  for (var inj = 0; inj < exercise.injects.length; inj++) {
    var inject = exercise.injects[inj];
    var injColor = inj < 3 ? '#ffaa00' : inj < 6 ? '#ff6622' : '#ff2244';
    h += '<div style="position:relative;margin-bottom:14px;padding-left:20px;">';
    h += '<div style="position:absolute;left:-22px;top:4px;width:12px;height:12px;background:' + injColor + ';border-radius:50%;border:2px solid #060a14;"></div>';
    h += '<div style="display:flex;gap:12px;align-items:flex-start;">';
    h += '<span style="background:' + injColor + '22;color:' + injColor + ';padding:2px 8px;border-radius:3px;font-size:10px;font-family:monospace;letter-spacing:1px;white-space:nowrap;border:1px solid ' + injColor + '44;">' + esc(inject.time) + '</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(inject.event) + '</span>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Participant Roles
  h += '<div style="padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">PARTICIPANT ROLES</div>';
  h += '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var pr = 0; pr < exercise.participantRoles.length; pr++) {
    h += '<span style="background:#0a1628;border:1px solid #00aaff33;color:#44bbff;padding:6px 12px;border-radius:4px;font-size:11px;">' + esc(exercise.participantRoles[pr]) + '</span>';
  }
  h += '</div>';
  h += '</div>';

  // Evaluation Criteria
  h += '<div style="padding:16px 24px;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:8px;">EVALUATION CRITERIA</div>';
  for (var ec = 0; ec < exercise.evaluationCriteria.length; ec++) {
    h += '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px;">';
    h += '<span style="color:#00ff88;font-size:10px;margin-top:2px;">&#9745;</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;">' + esc(exercise.evaluationCriteria[ec]) + '</span>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 9: renderThreatTimeline()
// ============================================================================
function renderThreatTimeline() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">GLOBAL CYBER OPERATIONS TIMELINE</div>';
  h += '<div style="font-size:10px;color:#445;margin-bottom:16px;">Historical nation-state cyber operations ordered chronologically</div>';

  // Filters
  h += '<div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;" id="se-timeline-filters">';
  h += '<select style="background:#0a0e1a;color:#c8d8e8;border:1px solid #1a3a5c;border-radius:4px;padding:6px 10px;font-size:11px;font-family:monospace;" id="se-timeline-year-filter">';
  h += '<option value="all">All Years</option>';
  var years = {};
  for (var yi = 0; yi < HISTORICAL_OPS.length; yi++) { years[HISTORICAL_OPS[yi].year] = true; }
  var yearList = [];
  for (var yk in years) { if (years.hasOwnProperty(yk)) yearList.push(parseInt(yk)); }
  yearList.sort();
  for (var yli = 0; yli < yearList.length; yli++) {
    h += '<option value="' + yearList[yli] + '">' + yearList[yli] + '</option>';
  }
  h += '</select>';
  h += '<select style="background:#0a0e1a;color:#c8d8e8;border:1px solid #1a3a5c;border-radius:4px;padding:6px 10px;font-size:11px;font-family:monospace;" id="se-timeline-type-filter">';
  h += '<option value="all">All Types</option>';
  h += '<option value="espionage">Espionage</option>';
  h += '<option value="destruction">Destruction</option>';
  h += '<option value="disruption">Disruption</option>';
  h += '<option value="financial">Financial</option>';
  h += '<option value="hybrid">Hybrid</option>';
  h += '</select>';
  h += '</div>';

  // Timeline
  var sorted = HISTORICAL_OPS.slice().sort(function(a, b) { return a.year - b.year; });
  h += '<div style="position:relative;padding-left:80px;" id="se-timeline-container">';
  h += '<div style="position:absolute;left:60px;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#00aaff22,#00aaff,#00aaff,#ff2244,#ff224422);border-radius:2px;"></div>';

  var typeColors = { 'espionage': '#00aaff', 'destruction': '#ff2244', 'disruption': '#ff6622', 'financial': '#ffaa00', 'hybrid': '#cc44ff' };
  var typeIcons = { 'espionage': '&#128269;', 'destruction': '&#128163;', 'disruption': '&#9889;', 'financial': '&#128176;', 'hybrid': '&#9878;' };

  for (var si = 0; si < sorted.length; si++) {
    var op = sorted[si];
    var opColor = typeColors[op.type] || '#889';

    h += '<div class="se-timeline-event" data-year="' + op.year + '" data-type="' + esc(op.type) + '" style="position:relative;margin-bottom:16px;">';

    // Year label
    h += '<div style="position:absolute;left:-76px;top:4px;color:#556;font-size:11px;font-family:monospace;letter-spacing:1px;text-align:right;width:55px;">' + op.year + '</div>';

    // Dot
    h += '<div style="position:absolute;left:-24px;top:6px;width:14px;height:14px;background:' + opColor + ';border-radius:50%;border:3px solid #060a14;box-shadow:0 0 8px ' + opColor + '44;"></div>';

    // Card
    h += '<div style="background:#0a0e1a;border:1px solid ' + opColor + '33;border-radius:6px;padding:12px 16px;margin-left:8px;cursor:pointer;" onclick="var d=this.querySelector(\'[data-detail]\');if(d)d.hidden=!d.hidden;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<span style="color:' + opColor + ';font-size:16px;font-weight:bold;font-family:monospace;">' + esc(op.name) + '</span>';
    h += '<span style="background:' + opColor + '22;color:' + opColor + ';padding:2px 6px;border-radius:3px;font-size:9px;letter-spacing:1px;border:1px solid ' + opColor + '44;">' + esc(op.type.toUpperCase()) + '</span>';
    h += '</div>';
    h += '<span style="color:#889;font-size:10px;">' + esc(op.attribution) + '</span>';
    h += '</div>';

    // Expandable detail
    h += '<div data-detail hidden style="margin-top:10px;padding-top:10px;border-top:1px solid #1a3a5c;">';
    h += '<div style="color:#c8d8e8;font-size:12px;margin-bottom:6px;">' + esc(op.description) + '</div>';
    h += '<div style="color:#889;font-size:11px;margin-bottom:4px;"><span style="color:#ffaa00;">TARGETS:</span> ' + esc(op.targets) + '</div>';
    h += '<div style="color:#889;font-size:11px;"><span style="color:#ff6644;">IMPACT:</span> ' + esc(op.impact) + '</div>';
    h += '</div>';

    h += '</div>';
    h += '</div>';
  }

  h += '</div>';
  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 10: renderCyberKillChain(aptGroup)
// ============================================================================
function renderCyberKillChain(aptGroup) {
  var killChainData = {
    'APT28': {
      reconnaissance: 'Targeted spear-phishing reconnaissance via social media (LinkedIn, Twitter). OSINT collection on targets of interest. Credential harvesting site setup.',
      weaponization: 'Custom X-Agent/Sofacy payloads. Zebrocy dropper variants. Weaponized Office documents with VBA macros.',
      delivery: 'Spear-phishing emails with malicious attachments or credential harvesting links. Watering hole attacks on conference/event websites.',
      exploitation: 'Microsoft Office macro execution, DDE attacks, CVE-2017-0199 (RTF exploit). OAuth token abuse for cloud access.',
      installation: 'X-Agent persistence via registry run keys and scheduled tasks. Seduploader for initial foothold before deploying X-Agent.',
      c2: 'HTTP/HTTPS to compromised legitimate websites. X-Tunnel for encrypted tunneling. Competent operational security with rotating C2.',
      actions: 'Email exfiltration, document theft, credential harvesting. Strategic leaks and information operations (e.g., DNC, WADA). Long-term access maintenance.'
    },
    'APT29': {
      reconnaissance: 'Minimal pre-operation footprint. Uses compromised infrastructure for recon. Leverages SaaS platforms to identify targets.',
      weaponization: 'Highly customized tooling — SUNBURST, EnvyScout, BoomBox. Signed binaries. Minimal reuse across operations.',
      delivery: 'Supply chain compromise (SolarWinds), targeted phishing with HTML smuggling, ISO file attachments. Trusted relationship abuse.',
      exploitation: 'Zero-day exploitation. SAML token forging (Golden SAML). Cloud service exploitation. Bypasses MFA via token theft.',
      installation: 'Memory-only loaders (TEARDROP). DLL side-loading. Minimal filesystem footprint. Blends with legitimate processes.',
      c2: 'C2 over legitimate cloud services (Azure, AWS, OneDrive). DNS-based C2 (DGA). Traffic blends with normal business communications.',
      actions: 'Long-duration intelligence collection. Focus on government and policy targets. Patient — maintains access for months/years before acting. Golden SAML for cloud persistence.'
    },
    'Lazarus': {
      reconnaissance: 'LinkedIn social engineering. Fake job offers/recruiters. Supply chain target identification. Cryptocurrency exchange research.',
      weaponization: 'Custom backdoors (Manuscrypt, BLINDINGCAN). Trojanized crypto trading apps. Modified open-source tools.',
      delivery: 'Social engineering via LinkedIn/email with job offers. Trojanized applications. Watering hole on cryptocurrency/finance sites.',
      exploitation: 'Browser zero-days (Chrome, IE). Macro-enabled documents. DeFi smart contract exploitation. SWIFT message manipulation.',
      installation: 'Multi-stage loaders. Persistence via startup items and services. macOS and Windows variants. Mobile malware for Android.',
      c2: 'Custom binary protocols over HTTP/HTTPS. Compromised legitimate websites. Tor hidden services. Steganography in image files.',
      actions: 'Cryptocurrency theft ($2B+ total). SWIFT banking fraud. Ransomware deployment (WannaCry). Data destruction (Sony). Technology IP theft.'
    },
    'Sandworm': {
      reconnaissance: 'ICS/SCADA system reconnaissance. Network mapping of critical infrastructure. Supply chain target identification.',
      weaponization: 'Purpose-built ICS malware (Industroyer, CaddyWiper, AcidRain). BlackEnergy variants. Olympic Destroyer.',
      delivery: 'Spear-phishing with weaponized documents. Supply chain compromise (M.E.Doc). VPN exploitation. Water-holing.',
      exploitation: 'EternalBlue (MS17-010). VPN and network appliance vulnerabilities. ICS protocol exploitation (IEC 101/104, OPC DA).',
      installation: 'KillDisk for destructive payload. Industroyer for ICS access. BlackEnergy modules. Persistent access maintained for years.',
      c2: 'HTTP/HTTPS C2 to attacker infrastructure. Custom protocols for ICS communication. VPN for encrypted tunnels back to operators.',
      actions: 'Power grid shutdowns (Ukraine 2015/2016). Global destruction (NotPetya). Olympic sabotage. Satellite disruption (Viasat). Wiper deployments in Ukraine conflict.'
    }
  };

  var data = killChainData[aptGroup];
  if (!data) {
    return '<div style="padding:40px;text-align:center;color:#556;">Kill chain data not available for ' + esc(aptGroup) + '. Available: APT28, APT29, Lazarus, Sandworm.</div>';
  }

  var phases = [
    { key: 'reconnaissance', label: 'RECONNAISSANCE', icon: '&#128269;', color: '#44bbff' },
    { key: 'weaponization', label: 'WEAPONIZATION', icon: '&#9881;', color: '#44aaff' },
    { key: 'delivery', label: 'DELIVERY', icon: '&#128233;', color: '#ffaa00' },
    { key: 'exploitation', label: 'EXPLOITATION', icon: '&#128163;', color: '#ff8844' },
    { key: 'installation', label: 'INSTALLATION', icon: '&#128190;', color: '#ff6644' },
    { key: 'c2', label: 'COMMAND & CONTROL', icon: '&#128225;', color: '#ff4466' },
    { key: 'actions', label: 'ACTIONS ON OBJECTIVES', icon: '&#127919;', color: '#ff2244' }
  ];

  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;">';

  // Header
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:16px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:3px;margin-bottom:4px;">CYBER KILL CHAIN ANALYSIS</div>';
  h += '<h3 style="margin:0;color:#00aaff;font-size:20px;font-family:monospace;letter-spacing:2px;">' + esc(aptGroup) + ' — TYPICAL ATTACK PATTERN</h3>';
  h += '</div>';

  // Kill chain phases
  for (var p = 0; p < phases.length; p++) {
    var phase = phases[p];
    h += '<div style="display:flex;border-bottom:' + (p < phases.length - 1 ? '1px solid #1a3a5c' : 'none') + ';">';

    // Phase indicator (left column)
    h += '<div style="min-width:180px;padding:16px;border-right:1px solid #1a3a5c;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#080c16;">';
    h += '<div style="font-size:24px;margin-bottom:6px;">' + phase.icon + '</div>';
    h += '<div style="color:' + phase.color + ';font-size:11px;font-weight:bold;font-family:monospace;letter-spacing:2px;text-align:center;">' + phase.label + '</div>';
    h += '<div style="margin-top:8px;font-size:10px;color:#556;">PHASE ' + (p + 1) + '/7</div>';
    if (p < phases.length - 1) {
      h += '<div style="margin-top:8px;color:' + phase.color + ';font-size:16px;">&#9660;</div>';
    }
    h += '</div>';

    // Phase content (right column)
    h += '<div style="flex:1;padding:16px 20px;display:flex;align-items:center;">';
    h += '<div style="color:#c8d8e8;font-size:12px;line-height:1.6;">' + esc(data[phase.key]) + '</div>';
    h += '</div>';

    h += '</div>';
  }

  h += '</div>';
  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 11: renderCorrelationEngine()
// ============================================================================
function renderCorrelationEngine() {
  var correlations = [
    {
      id: 'corr-001',
      title: 'Russian Infrastructure Pre-positioning Detected',
      confidence: 92,
      sources: [
        { type: 'SIGINT', detail: 'Encrypted burst communications from GRU-attributed IP ranges to newly provisioned infrastructure in Eastern Europe' },
        { type: 'CYBINT', detail: 'New SSL certificates issued to domains matching Sandworm naming conventions; domain registration via known bulletproof hosting' },
        { type: 'OSINT', detail: 'Russian military exercises announced near Baltic region; geopolitical tension indicators elevated' },
        { type: 'HUMINT', detail: 'Source reporting increased operational tempo at GRU Unit 74455 facilities' }
      ],
      assessment: 'HIGH CONFIDENCE: Russian state actors are staging offensive cyber capabilities targeting NATO member critical infrastructure. Pattern matches pre-attack indicators observed before Ukraine grid attacks (2015/2016).',
      recommendedAction: 'Elevate to CYBER DEFCON 2 for Baltic region. Deploy hunt-forward teams to affected allied networks. Issue classified advisory to Five Eyes and NATO partners.'
    },
    {
      id: 'corr-002',
      title: 'Chinese Telecom Infiltration Campaign Expanding',
      confidence: 88,
      sources: [
        { type: 'SIGINT', detail: 'Anomalous data flows detected from major US telecom providers to known Salt Typhoon C2 infrastructure' },
        { type: 'CYBINT', detail: 'New Volt Typhoon-associated malware samples detected in telecom provider edge router firmware' },
        { type: 'OSINT', detail: 'Increased PRC military rhetoric regarding Taiwan; South China Sea naval activity elevated' },
        { type: 'GEOINT', detail: 'Satellite imagery shows increased activity at PLA Strategic Support Force facilities' }
      ],
      assessment: 'HIGH CONFIDENCE: PRC-affiliated actors are expanding pre-positioned access in US telecommunications infrastructure. Pattern consistent with preparation for potential Taiwan contingency.',
      recommendedAction: 'Coordinate with telecom providers for immediate threat hunt. Brief NSC on expanded PRC cyber pre-positioning. Activate Quad Cyber Partnership coordination.'
    },
    {
      id: 'corr-003',
      title: 'North Korean Cryptocurrency Theft Campaign Imminent',
      confidence: 85,
      sources: [
        { type: 'CYBINT', detail: 'BlueNoroff social engineering campaign detected targeting cryptocurrency exchange employees via LinkedIn' },
        { type: 'OSINT', detail: 'North Korean state media rhetoric about sanctions; regime cash reserves reportedly low' },
        { type: 'SIGINT', detail: 'Communications intercepts suggest Lazarus operators activating previously dormant cryptocurrency wallet infrastructure' }
      ],
      assessment: 'HIGH CONFIDENCE: North Korean state actors are preparing a major cryptocurrency theft operation. Financial pressure on the regime correlates with historical patterns of increased DPRK cyber theft activity.',
      recommendedAction: 'Issue advisory to major cryptocurrency exchanges. Coordinate with Treasury/FinCEN for blockchain monitoring. Prepare FBI seizure warrants for identified staging wallets.'
    }
  ];

  var sourceColors = { 'SIGINT': '#00aaff', 'OSINT': '#00ff88', 'CYBINT': '#ffaa00', 'HUMINT': '#ff8844', 'GEOINT': '#cc44ff' };

  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:4px;">MULTI-SOURCE INTELLIGENCE CORRELATION ENGINE</div>';
  h += '<div style="font-size:10px;color:#445;margin-bottom:16px;">Alerts generated when 3+ independent intelligence sources converge on the same threat assessment</div>';

  for (var ci = 0; ci < correlations.length; ci++) {
    var corr = correlations[ci];
    var confColor = corr.confidence >= 90 ? '#00ff88' : corr.confidence >= 80 ? '#ffaa00' : '#ff6644';

    h += '<div style="background:#060a14;border:2px solid ' + confColor + '44;border-radius:8px;overflow:hidden;margin-bottom:16px;">';

    // Header
    h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:14px 20px;border-bottom:1px solid #1a3a5c;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">';
    h += '<div>';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:2px;">CORRELATION ALERT</div>';
    h += '<div style="color:#c8d8e8;font-size:15px;font-weight:bold;">' + esc(corr.title) + '</div>';
    h += '</div>';
    h += '<div style="text-align:right;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;">CONFIDENCE</div>';
    h += '<div style="color:' + confColor + ';font-size:22px;font-weight:bold;font-family:monospace;">' + corr.confidence + '%</div>';
    h += '</div>';
    h += '</div>';

    // Source indicators with connection visualization
    h += '<div style="padding:14px 20px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:10px;">CONTRIBUTING SOURCES (' + corr.sources.length + ' INDEPENDENT)</div>';
    for (var s = 0; s < corr.sources.length; s++) {
      var src = corr.sources[s];
      var sc = sourceColors[src.type] || '#889';
      h += '<div style="display:flex;gap:12px;margin-bottom:8px;align-items:flex-start;">';
      h += '<span style="background:' + sc + '22;color:' + sc + ';padding:3px 8px;border-radius:3px;font-size:9px;font-family:monospace;letter-spacing:1px;border:1px solid ' + sc + '44;min-width:50px;text-align:center;">' + esc(src.type) + '</span>';
      h += '<div style="flex:1;color:#c8d8e8;font-size:12px;padding-left:10px;border-left:2px solid ' + sc + '44;">' + esc(src.detail) + '</div>';
      h += '</div>';
    }

    // Visual connection
    h += '<div style="text-align:center;padding:8px 0;">';
    h += '<div style="display:inline-flex;gap:6px;align-items:center;">';
    for (var sv = 0; sv < corr.sources.length; sv++) {
      var svc = sourceColors[corr.sources[sv].type] || '#889';
      h += '<div style="width:12px;height:12px;background:' + svc + ';border-radius:50%;"></div>';
      if (sv < corr.sources.length - 1) {
        h += '<div style="width:20px;height:2px;background:linear-gradient(90deg,' + svc + ',' + (sourceColors[corr.sources[sv + 1].type] || '#889') + ');"></div>';
      }
    }
    h += '</div>';
    h += '<div style="color:#556;font-size:9px;margin-top:4px;letter-spacing:1px;">CONVERGENCE DETECTED</div>';
    h += '</div>';
    h += '</div>';

    // Assessment
    h += '<div style="padding:14px 20px;border-bottom:1px solid #1a3a5c;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:6px;">ASSESSMENT</div>';
    h += '<div style="color:#ffaa00;font-size:12px;line-height:1.5;padding:10px;background:#1a1a0a;border:1px solid #ffaa0033;border-radius:6px;">' + esc(corr.assessment) + '</div>';
    h += '</div>';

    // Recommended Action
    h += '<div style="padding:14px 20px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:2px;margin-bottom:6px;">RECOMMENDED ACTION</div>';
    h += '<div style="color:#00ff88;font-size:12px;line-height:1.5;padding:10px;background:#0a1a0a;border:1px solid #00ff8833;border-radius:6px;">' + esc(corr.recommendedAction) + '</div>';
    h += '</div>';

    h += '</div>';
  }

  h += '</div>';
  return h;
}


// ============================================================================
// RENDER FUNCTION 12: renderGlobalPostureBrief()
// ============================================================================
function renderGlobalPostureBrief() {
  var h = '';
  h += '<div style="max-width:800px;margin:0 auto;">';
  h += '<div style="background:#060a14;border:2px solid #1a3a5c;border-radius:8px;overflow:hidden;">';

  // Classification banner
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:8px;font-size:12px;letter-spacing:4px;font-weight:bold;">TOP SECRET // SCI // NOFORN</div>';

  // Title block
  h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:24px;border-bottom:2px solid #1a3a5c;text-align:center;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:4px;margin-bottom:8px;">GLOBAL CYBER POSTURE BRIEF</div>';
  h += '<h2 style="margin:0;color:#00aaff;font-size:22px;font-family:monospace;letter-spacing:3px;">SENTINEL EYE — DAILY INTELLIGENCE SUMMARY</h2>';
  h += '<div style="color:#889;font-size:12px;margin-top:8px;">Prepared: ' + new Date().toISOString().split('T')[0] + ' | Classification: TS//SCI//NF | Distribution: POTUS, NSC, SECDEF, DNI, DIRNSA</div>';
  h += '</div>';

  // BLUF
  h += '<div style="padding:20px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:11px;color:#ff6644;letter-spacing:2px;font-weight:bold;margin-bottom:8px;">BOTTOM LINE UP FRONT</div>';
  h += '<div style="color:#c8d8e8;font-size:14px;line-height:1.6;padding:14px;background:#1a0a0a;border:2px solid #ff224433;border-radius:6px;">Global cyber threat level remains at <span style="color:#ff6622;font-weight:bold;">ORANGE (ELEVATED)</span>. Three active nation-state operations targeting US and allied interests require senior-level attention: Russian pre-positioning against NATO critical infrastructure, Chinese telecom infiltration expansion, and North Korean cryptocurrency theft staging. Recommend pre-authorization of defensive counter-operations and elevation to CYBER DEFCON 2 for European and Indo-Pacific theaters.</div>';
  h += '</div>';

  // Global Threat Level
  h += '<div style="padding:20px 24px;border-bottom:1px solid #1a3a5c;text-align:center;">';
  h += '<div style="font-size:11px;color:#556;letter-spacing:2px;margin-bottom:12px;">GLOBAL CYBER THREAT LEVEL</div>';
  h += '<div style="display:inline-flex;gap:4px;">';
  var levels = [
    { num: 1, label: 'LOW', color: '#00ff88' },
    { num: 2, label: 'GUARDED', color: '#44cc88' },
    { num: 3, label: 'ELEVATED', color: '#ffaa00' },
    { num: 4, label: 'HIGH', color: '#ff6622' },
    { num: 5, label: 'SEVERE', color: '#ff2244' }
  ];
  for (var l = 0; l < levels.length; l++) {
    var isActive = levels[l].num === 4;
    h += '<div style="width:80px;padding:12px 8px;background:' + (isActive ? levels[l].color + '22' : '#0a0e1a') + ';border:2px solid ' + (isActive ? levels[l].color : '#1a3a5c') + ';border-radius:4px;text-align:center;' + (isActive ? 'box-shadow:0 0 20px ' + levels[l].color + '33;animation:se-pulse 2s ease-in-out infinite;' : 'opacity:0.4;') + '">';
    h += '<div style="color:' + levels[l].color + ';font-size:20px;font-weight:bold;font-family:monospace;">' + levels[l].num + '</div>';
    h += '<div style="color:' + levels[l].color + ';font-size:8px;letter-spacing:1px;margin-top:4px;">' + levels[l].label + '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Top Threats
  h += '<div style="padding:20px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:11px;color:#ff2244;letter-spacing:2px;font-weight:bold;margin-bottom:12px;">TOP 3 ACTIVE THREATS REQUIRING DECISION</div>';

  var threats = [
    { priority: 'PRIORITY 1', title: 'Russian Pre-positioning Against NATO CI', actor: 'Sandworm (GRU Unit 74455)', timeline: '48-72 hours', confidence: '92%', action: 'Authorize hunt-forward deployment to Baltic allies' },
    { priority: 'PRIORITY 2', title: 'Chinese Telecom Infiltration Expansion', actor: 'Volt Typhoon / Salt Typhoon', timeline: 'Ongoing (strategic)', confidence: '88%', action: 'Coordinate with telecom providers; brief congressional intelligence committees' },
    { priority: 'PRIORITY 3', title: 'DPRK Cryptocurrency Theft Staging', actor: 'Lazarus / BlueNoroff', timeline: '1-2 weeks', confidence: '85%', action: 'Issue Treasury/FinCEN advisory; prepare wallet seizure warrants' }
  ];
  var threatPrioColors = ['#ff2244', '#ff6622', '#ffaa00'];

  for (var th = 0; th < threats.length; th++) {
    var threat = threats[th];
    var tpc = threatPrioColors[th] || '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid ' + tpc + '33;border-radius:6px;padding:14px;margin-bottom:10px;border-left:4px solid ' + tpc + ';">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
    h += '<div>';
    h += '<span style="color:' + tpc + ';font-size:10px;font-weight:bold;letter-spacing:2px;">' + esc(threat.priority) + '</span>';
    h += '<span style="color:#c8d8e8;font-size:14px;font-weight:bold;margin-left:12px;">' + esc(threat.title) + '</span>';
    h += '</div>';
    h += '<span style="color:' + tpc + ';font-size:11px;font-family:monospace;">CONF: ' + esc(threat.confidence) + '</span>';
    h += '</div>';
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:11px;">';
    h += '<div><span style="color:#556;">Actor: </span><span style="color:#ff8866;">' + esc(threat.actor) + '</span></div>';
    h += '<div><span style="color:#556;">Timeline: </span><span style="color:#ffaa00;">' + esc(threat.timeline) + '</span></div>';
    h += '</div>';
    h += '<div style="margin-top:8px;padding-top:8px;border-top:1px solid #1a2a3c;">';
    h += '<span style="color:#556;font-size:10px;">RECOMMENDED: </span><span style="color:#00ff88;font-size:11px;">' + esc(threat.action) + '</span>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Sector Status Summary
  h += '<div style="padding:20px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:11px;color:#556;letter-spacing:2px;margin-bottom:12px;">CRITICAL INFRASTRUCTURE SECTOR STATUS</div>';
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px;">';
  for (var cs = 0; cs < CRITICAL_INFRASTRUCTURE_SECTORS.length; cs++) {
    var sector = CRITICAL_INFRASTRUCTURE_SECTORS[cs];
    var stlc = { 1: '#00ff88', 2: '#44cc88', 3: '#ffaa00', 4: '#ff6622', 5: '#ff2244' };
    var sc2 = stlc[sector.threatLevel] || '#ffaa00';
    h += '<div style="background:#0a0e1a;border:1px solid ' + sc2 + '33;border-radius:4px;padding:10px;text-align:center;">';
    h += '<div style="color:#c8d8e8;font-size:10px;font-weight:bold;margin-bottom:6px;">' + esc(sector.name) + '</div>';
    h += '<div style="color:' + sc2 + ';font-size:20px;font-weight:bold;font-family:monospace;">' + sector.threatLevel + '/5</div>';
    h += '<div style="margin-top:4px;">';
    h += '<div style="width:100%;height:4px;background:#1a2a3c;border-radius:2px;overflow:hidden;">';
    h += '<div style="width:' + sector.patchCompliance + '%;height:100%;background:' + (sector.patchCompliance >= 80 ? '#00ff88' : sector.patchCompliance >= 60 ? '#ffaa00' : '#ff2244') + ';border-radius:2px;"></div>';
    h += '</div>';
    h += '<div style="color:#556;font-size:8px;margin-top:2px;">PATCH: ' + sector.patchCompliance + '%</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Allied Coordination
  h += '<div style="padding:20px 24px;border-bottom:1px solid #1a3a5c;">';
  h += '<div style="font-size:11px;color:#556;letter-spacing:2px;margin-bottom:12px;">ALLIED COORDINATION STATUS</div>';
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;">';
  for (var al = 0; al < ALLIANCE_NETWORKS.length; al++) {
    var ally = ALLIANCE_NETWORKS[al];
    h += '<div style="background:#0a0e1a;border:1px solid #00aaff22;border-radius:4px;padding:10px;display:flex;justify-content:space-between;align-items:center;">';
    h += '<span style="color:#44bbff;font-size:11px;">' + esc(ally.name) + '</span>';
    h += '<span style="color:#00ff88;font-size:11px;font-family:monospace;">' + ally.activeOps + ' OPS</span>';
    h += '</div>';
  }
  h += '</div>';
  h += '</div>';

  // Recommended Actions
  h += '<div style="padding:20px 24px;">';
  h += '<div style="font-size:11px;color:#00ff88;letter-spacing:2px;font-weight:bold;margin-bottom:12px;">RECOMMENDED ACTIONS</div>';
  var actions = [
    'Elevate to CYBER DEFCON 2 for European and Indo-Pacific theaters',
    'Pre-authorize defensive counter-operations against identified Sandworm infrastructure',
    'Deploy hunt-forward teams to 3 Baltic allied networks',
    'Brief NSC Principals Committee on expanded PRC telecom infiltration',
    'Coordinate with Treasury/FinCEN on DPRK cryptocurrency theft indicators',
    'Issue classified advisory to Five Eyes, NATO, and Quad partners',
    'Activate enhanced monitoring on all critical infrastructure sectors',
    'Schedule congressional intelligence committee briefing within 48 hours'
  ];
  for (var ac = 0; ac < actions.length; ac++) {
    h += '<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">';
    h += '<span style="color:#00ff88;font-size:12px;min-width:20px;text-align:center;">' + (ac + 1) + '.</span>';
    h += '<span style="color:#c8d8e8;font-size:12px;line-height:1.4;">' + esc(actions[ac]) + '</span>';
    h += '</div>';
  }
  h += '</div>';

  // Bottom classification
  h += '<div style="background:#cc0000;color:#fff;text-align:center;padding:8px;font-size:12px;letter-spacing:4px;font-weight:bold;">TOP SECRET // SCI // NOFORN</div>';

  h += '</div>';
  h += '</div>';
  return h;
}


// ============================================================================
// EXTENDED HISTORICAL OPERATIONS DETAIL (additional entries)
// ============================================================================
HISTORICAL_OPERATIONS_DETAIL['op-006'] = {
  codename: 'SONY PICTURES HACK',
  attribution: 'North Korea (RGB Bureau 121 / Lazarus Group)',
  attributionConfidence: 92,
  fullDescription: 'In retaliation for the upcoming release of "The Interview," a comedy depicting the assassination of Kim Jong-un, North Korean hackers from the Lazarus Group conducted a devastating destructive and data theft attack against Sony Pictures Entertainment. The attackers deployed a custom wiper malware (Destover) that destroyed data on thousands of computers while simultaneously exfiltrating and leaking tens of terabytes of confidential data including unreleased films, executive emails, employee SSNs, salary data, and sensitive business plans.',
  targets: ['Sony Pictures Entertainment corporate network', 'Sony Pictures film archive', 'Executive email systems', 'HR and payroll systems'],
  ttps: [
    { technique: 'T1566.001', name: 'Spearphishing Attachment', detail: 'Initial access via targeted spear-phishing emails to Sony employees' },
    { technique: 'T1078', name: 'Valid Accounts', detail: 'Compromised administrator credentials for domain-wide access' },
    { technique: 'T1005', name: 'Data from Local System', detail: 'Systematic exfiltration of sensitive files from file servers and email' },
    { technique: 'T1485', name: 'Data Destruction', detail: 'Destover wiper malware deployed to destroy data and render systems inoperable' },
    { technique: 'T1561.001', name: 'Disk Content Wipe', detail: 'MBR overwrite preventing system recovery' }
  ],
  timeline: [
    { date: '2014-09', event: 'Lazarus Group begins reconnaissance of Sony Pictures network' },
    { date: '2014-10', event: 'Initial compromise via spear-phishing, establishes persistent access' },
    { date: '2014-11-01', event: 'Large-scale data exfiltration begins (est. 100+ TB stolen)' },
    { date: '2014-11-24', event: 'Destover wiper deployed; threatening "Guardians of Peace" message displayed on screens' },
    { date: '2014-11-25', event: 'Unreleased films leaked online (Annie, Fury, others)' },
    { date: '2014-12-01', event: 'Executive emails and salary data leaked in batches' },
    { date: '2014-12-16', event: 'Threat of "9/11-type" attacks on theaters showing The Interview' },
    { date: '2014-12-17', event: 'Major theater chains pull The Interview; Sony cancels theatrical release' },
    { date: '2014-12-19', event: 'FBI formally attributes attack to North Korea' },
    { date: '2014-12-25', event: 'Sony releases The Interview online after public backlash' },
    { date: '2015-01', event: 'US imposes new sanctions on North Korea' }
  ],
  toolsUsed: ['Destover wiper', 'Custom backdoors', 'Proxy tools for exfiltration', 'SMB Worm component', 'Modified versions of commercial tools'],
  impact: 'Sony suffered $100M+ in direct damages. 5 unreleased films leaked. 47,000 employee SSNs exposed. Executive embarrassment from leaked emails. Temporary cancellation of The Interview theatrical release. Industry-wide cybersecurity reassessment.',
  significance: 'First publicly attributed destructive nation-state cyber attack against a private company in retaliation for free expression. Raised questions about proportional response, corporate vulnerability to state actors, and self-censorship due to cyber threats. Led to executive order enabling cyber sanctions.',
  lessonsLearned: ['Private sector companies can be direct targets of nation-state attacks', 'Insider threat and spear-phishing remain primary initial access vectors', 'Data destruction can be combined with data theft for maximum impact', 'Geopolitical context must inform corporate threat modeling', 'Incident response plans must account for nation-state adversaries']
};

HISTORICAL_OPERATIONS_DETAIL['op-007'] = {
  codename: 'SHAMOON / DISTTRACK',
  attribution: 'Iran (IRGC / APT33 Elfin)',
  attributionConfidence: 85,
  fullDescription: 'The Shamoon malware was deployed against Saudi Aramco, the world\'s most valuable company, destroying data on approximately 35,000 workstations by overwriting the master boot record with an image of a burning American flag. The attack, attributed to Iranian state actors, was one of the most destructive cyber attacks against a single organization and represented a significant escalation in Iran\'s cyber capabilities. The attack occurred during Ramadan when many IT staff were on leave, maximizing impact.',
  targets: ['Saudi Aramco (35,000 workstations)', 'RasGas (Qatar, secondary target)'],
  ttps: [
    { technique: 'T1078', name: 'Valid Accounts', detail: 'Used compromised credentials, possibly from insider' },
    { technique: 'T1570', name: 'Lateral Tool Transfer', detail: 'Rapid propagation across the internal network using admin shares' },
    { technique: 'T1561.002', name: 'Disk Structure Wipe', detail: 'MBR overwrite with burning flag image, rendering systems unbootable' },
    { technique: 'T1485', name: 'Data Destruction', detail: 'File overwrite before MBR destruction' }
  ],
  timeline: [
    { date: '2012-08-15 11:08', event: 'Shamoon wiper activates on Saudi Aramco network' },
    { date: '2012-08-15 12:00', event: 'IT staff notice widespread system failures' },
    { date: '2012-08-15 14:00', event: 'Aramco disconnects corporate network from internet' },
    { date: '2012-08-16', event: 'Scale of destruction becomes clear: 35,000+ workstations wiped' },
    { date: '2012-08-17', event: '"Cutting Sword of Justice" hacktivist group claims responsibility' },
    { date: '2012-08-20', event: 'Aramco begins hardware replacement program (bought most available hard drives worldwide)' },
    { date: '2012-08-28', event: 'RasGas in Qatar hit by similar attack' },
    { date: '2012-09-15', event: 'Aramco systems largely restored after 2 weeks' },
    { date: '2016-11', event: 'Shamoon 2.0 variant targets Saudi government agencies' },
    { date: '2018-12', event: 'Shamoon 3 targets oil/gas sector in Middle East' }
  ],
  toolsUsed: ['Shamoon/DistTrack wiper', 'Spreading module (admin shares)', 'Communication module (C2)', 'Reporting module (infection count)'],
  impact: '35,000 workstations destroyed. Saudi Aramco offline for 2 weeks. Company reverted to typewriters and fax machines. Aramco purchased so many replacement hard drives it caused a global shortage. Oil production unaffected (air-gapped OT). Estimated damages $1B+.',
  significance: 'Demonstrated Iran\'s willingness to use destructive cyber capabilities against strategic rivals. First major cyber attack directly impacting a national economy\'s crown jewel company. Proved that massive destruction could be achieved with relatively unsophisticated malware.',
  lessonsLearned: ['Timing attacks during staff vacations maximizes impact', 'Air-gapping OT from IT prevents cascading to production', 'Hardware destruction at scale requires massive replacement logistics', 'Wiper malware is simple to build but devastating in effect', 'National critical assets need defense-in-depth regardless of perceived risk']
};

HISTORICAL_OPERATIONS_DETAIL['op-008'] = {
  codename: 'UKRAINE POWER GRID ATTACK',
  attribution: 'Russia (Sandworm / GRU Unit 74455)',
  attributionConfidence: 95,
  fullDescription: 'On December 23, 2015, Russian state hackers from the Sandworm group (GRU Unit 74455) executed the first confirmed cyber attack to take down a power grid. The attackers used BlackEnergy malware for initial access, then manually operated SCADA systems at three Ukrainian regional power distribution companies to open circuit breakers, cutting power to approximately 230,000 customers for 1-6 hours. They simultaneously launched a TDoS attack against call centers to prevent outage reports and deployed KillDisk wiper to slow recovery.',
  targets: ['Kyivoblenergo (regional power utility)', 'Prykarpattyaoblenergo', 'Chernivtsioblenergo', 'Call centers (TDoS)'],
  ttps: [
    { technique: 'T1566.001', name: 'Spearphishing Attachment', detail: 'BlackEnergy delivered via macro-enabled Word documents to utility employees' },
    { technique: 'T1059', name: 'Command and Scripting Interpreter', detail: 'Used VBS scripts and native Windows tools for lateral movement' },
    { technique: 'T1021.001', name: 'Remote Desktop Protocol', detail: 'VPN hijacking and RDP to access SCADA HMI workstations' },
    { technique: 'T1565.001', name: 'Stored Data Manipulation', detail: 'Directly operated SCADA HMI to open circuit breakers' },
    { technique: 'T1489', name: 'Service Stop', detail: 'KillDisk wiper deployed to complicate recovery' },
    { technique: 'T1499', name: 'Endpoint Denial of Service', detail: 'TDoS attack on utility call centers to suppress outage reports' }
  ],
  timeline: [
    { date: '2015-03', event: 'BlackEnergy spear-phishing campaign targets Ukrainian utility employees' },
    { date: '2015-06', event: 'Attackers achieve persistent access, begin network reconnaissance' },
    { date: '2015-09', event: 'SCADA network mapping and credential harvesting' },
    { date: '2015-11', event: 'Attackers test SCADA controls during off-hours' },
    { date: '2015-12-23 15:30', event: 'Attackers log into SCADA HMIs at 3 utilities simultaneously' },
    { date: '2015-12-23 15:35', event: 'Circuit breakers opened at multiple substations - 230K customers lose power' },
    { date: '2015-12-23 15:40', event: 'KillDisk wiper deployed on IT systems' },
    { date: '2015-12-23 15:45', event: 'TDoS flood targets utility call centers' },
    { date: '2015-12-23 16:00', event: 'Firmware on serial-to-Ethernet converters overwritten to prevent remote recovery' },
    { date: '2015-12-23 17:30', event: 'Manual recovery begins - technicians physically close breakers' },
    { date: '2015-12-23 22:00', event: 'Power restored to most customers (1-6 hours outage)' }
  ],
  toolsUsed: ['BlackEnergy 3 (backdoor)', 'KillDisk (wiper)', 'Custom VBS downloaders', 'TDoS tool', 'Firmware overwrite tool for serial converters'],
  impact: '230,000 customers lost power for 1-6 hours. Three utilities simultaneously attacked. IT systems required weeks to fully restore. Serial-to-Ethernet converter firmware had to be manually reflashed. First confirmed cyber-caused power outage in history.',
  significance: 'First proven cyber attack to disrupt an electrical grid. Validated long-theorized risk of SCADA system compromise leading to real-world impact. Demonstrated sophisticated multi-phase attack combining cyber and physical effects. Preceded even more sophisticated 2016 Industroyer attack.',
  lessonsLearned: ['ICS/SCADA systems connected to corporate IT are at risk', 'Manual override capabilities are essential for recovery', 'Multi-vector attacks (cyber + TDoS) complicate incident response', 'Firmware integrity of network devices must be monitored', 'Power grids need defense-in-depth with air-gapped safety systems']
};

// ============================================================================
// ADDITIONAL RENDER HELPERS — SUPPORTING SUB-COMPONENTS
// ============================================================================

function renderSeverityBadge(severity) {
  var colors = { 'critical': '#ff2244', 'high': '#ff6622', 'medium': '#ffaa00', 'low': '#44cc88', 'info': '#00aaff' };
  var c = colors[severity] || colors[(severity || '').toLowerCase()] || '#889';
  var h = '<span style="background:' + c + '22;color:' + c + ';padding:2px 8px;border-radius:3px;font-size:9px;';
  h += 'font-family:monospace;letter-spacing:1px;border:1px solid ' + c + '44;">';
  h += esc((severity || 'UNKNOWN').toUpperCase());
  h += '</span>';
  return h;
}

function renderConfidenceBar(confidence, width) {
  width = width || 100;
  var color = confidence >= 80 ? '#00ff88' : confidence >= 60 ? '#ffaa00' : '#ff4466';
  var h = '<div style="display:inline-flex;align-items:center;gap:6px;">';
  h += '<div style="width:' + width + 'px;height:6px;background:#1a2a3c;border-radius:3px;overflow:hidden;">';
  h += '<div style="width:' + confidence + '%;height:100%;background:' + color + ';border-radius:3px;"></div>';
  h += '</div>';
  h += '<span style="color:' + color + ';font-size:11px;font-family:monospace;font-weight:bold;">' + confidence + '%</span>';
  h += '</div>';
  return h;
}

function renderClassBanner(text) {
  var h = '<div style="background:#cc0000;color:#fff;text-align:center;padding:5px;';
  h += 'font-size:10px;letter-spacing:3px;font-weight:bold;font-family:monospace;">';
  h += esc(text);
  h += '</div>';
  return h;
}

function renderThreatLevelIndicator(level) {
  var colors = { 1: '#00ff88', 2: '#44cc88', 3: '#ffaa00', 4: '#ff6622', 5: '#ff2244' };
  var labels = { 1: 'LOW', 2: 'GUARDED', 3: 'ELEVATED', 4: 'HIGH', 5: 'SEVERE' };
  var c = colors[level] || '#889';
  var h = '<div style="display:inline-flex;align-items:center;gap:8px;">';
  h += '<div style="width:24px;height:24px;background:' + c + '33;border:2px solid ' + c + ';border-radius:4px;';
  h += 'display:flex;align-items:center;justify-content:center;color:' + c + ';font-weight:bold;font-family:monospace;font-size:14px;">';
  h += level;
  h += '</div>';
  h += '<span style="color:' + c + ';font-size:10px;letter-spacing:2px;font-family:monospace;">' + (labels[level] || 'UNKNOWN') + '</span>';
  h += '</div>';
  return h;
}

function renderStatCard(label, value, color, subtitle) {
  var h = '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:14px;text-align:center;">';
  h += '<div style="font-size:8px;color:#556;letter-spacing:2px;margin-bottom:6px;">' + esc(label) + '</div>';
  h += '<div style="font-size:28px;color:' + (color || '#00aaff') + ';font-weight:bold;font-family:monospace;';
  h += 'text-shadow:0 0 15px ' + (color || '#00aaff') + '33;">' + esc(value) + '</div>';
  if (subtitle) {
    h += '<div style="font-size:9px;color:#556;margin-top:4px;">' + esc(subtitle) + '</div>';
  }
  h += '</div>';
  return h;
}

function renderTimeAgo(isoString) {
  try {
    var then = new Date(isoString).getTime();
    var now = Date.now();
    var diff = Math.floor((now - then) / 1000);
    if (diff < 60) return diff + 's ago';
    if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    return Math.floor(diff / 86400) + 'd ago';
  } catch (e) { return esc(isoString); }
}

function renderSectionHeader(title, subtitle) {
  var h = '<div style="margin-bottom:16px;">';
  h += '<h3 style="margin:0;font-size:16px;color:#00aaff;font-family:monospace;letter-spacing:2px;text-transform:uppercase;">' + esc(title) + '</h3>';
  if (subtitle) {
    h += '<div style="color:#556;font-size:11px;margin-top:4px;letter-spacing:1px;">' + esc(subtitle) + '</div>';
  }
  h += '</div>';
  return h;
}

function renderDataGrid(headers, rows) {
  var h = '<div style="overflow-x:auto;">';
  h += '<table style="width:100%;border-collapse:collapse;font-size:11px;font-family:monospace;">';
  h += '<thead><tr>';
  for (var hi = 0; hi < headers.length; hi++) {
    h += '<th style="padding:8px 10px;text-align:left;color:#556;border-bottom:2px solid #1a3a5c;letter-spacing:1px;font-size:10px;">' + esc(headers[hi]) + '</th>';
  }
  h += '</tr></thead><tbody>';
  for (var ri = 0; ri < rows.length; ri++) {
    var rowBg = ri % 2 === 0 ? '#0a0e1a' : '#080c16';
    h += '<tr style="background:' + rowBg + ';">';
    for (var ci = 0; ci < rows[ri].length; ci++) {
      h += '<td style="padding:6px 10px;color:#c8d8e8;border-bottom:1px solid #1a2a3c;">' + esc(rows[ri][ci]) + '</td>';
    }
    h += '</tr>';
  }
  h += '</tbody></table>';
  h += '</div>';
  return h;
}

function renderExpandablePanel(title, contentHtml, panelId) {
  var h = '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;margin-bottom:8px;overflow:hidden;">';
  h += '<div style="padding:10px 14px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;" ';
  h += 'onclick="var p=document.getElementById(\'' + esc(panelId) + '\');if(p)p.hidden=!p.hidden;">';
  h += '<span style="color:#00aaff;font-size:12px;font-family:monospace;letter-spacing:1px;">' + esc(title) + '</span>';
  h += '<span style="color:#556;font-size:14px;">&#9662;</span>';
  h += '</div>';
  h += '<div id="' + esc(panelId) + '" hidden style="padding:0 14px 14px 14px;border-top:1px solid #1a3a5c;">';
  h += contentHtml;
  h += '</div>';
  h += '</div>';
  return h;
}

// ============================================================================
// CYBER INCIDENT DATABASE (supplemental tracking data)
// ============================================================================
var CYBER_INCIDENT_TIMELINE = [
  { year: 1988, event: 'Morris Worm', significance: 'First major internet worm; infected ~6,000 computers (10% of internet)' },
  { year: 1996, event: 'Moonlight Maze begins', significance: 'First documented nation-state cyber espionage campaign' },
  { year: 1998, event: 'Solar Sunrise', significance: 'Teenage hackers probe DOD systems during Iraq tensions' },
  { year: 2003, event: 'Titan Rain', significance: 'Chinese espionage campaign against US defense contractors' },
  { year: 2007, event: 'Estonia DDoS', significance: 'First coordinated cyber attack against a nation-state' },
  { year: 2008, event: 'Agent.BTZ', significance: 'USB worm compromises classified US military networks; leads to USCYBERCOM creation' },
  { year: 2009, event: 'Operation Aurora', significance: 'Chinese espionage targeting Google, Adobe, and 30+ companies' },
  { year: 2009, event: 'GhostNet', significance: 'Chinese espionage network spanning 103 countries' },
  { year: 2010, event: 'Stuxnet discovered', significance: 'First cyber weapon causing physical destruction' },
  { year: 2011, event: 'RSA breach', significance: 'Chinese APT steals SecurID seed values, enabling downstream attacks' },
  { year: 2011, event: 'Duqu discovered', significance: 'Stuxnet-related espionage tool targeting Iran' },
  { year: 2012, event: 'Flame discovered', significance: '20MB modular espionage platform; most complex malware at the time' },
  { year: 2012, event: 'Shamoon (Saudi Aramco)', significance: 'Iran wipes 35,000 computers; most destructive single-target attack' },
  { year: 2013, event: 'Mandiant APT1 report', significance: 'First public attribution of Chinese military unit conducting espionage' },
  { year: 2013, event: 'Snowden disclosures', significance: 'Revealed NSA surveillance programs and offensive capabilities' },
  { year: 2014, event: 'Sony Pictures hack', significance: 'North Korean destructive attack on private company' },
  { year: 2015, event: 'OPM breach', significance: 'China steals 22.1M US government personnel records' },
  { year: 2015, event: 'Ukraine power grid attack', significance: 'First confirmed cyber attack causing power outage' },
  { year: 2016, event: 'DNC hack', significance: 'Russian interference in US election via cyber operations' },
  { year: 2016, event: 'Bangladesh Bank heist', significance: 'North Korea steals $81M via SWIFT system' },
  { year: 2016, event: 'Shadow Brokers', significance: 'NSA tools leaked; later enable WannaCry and NotPetya' },
  { year: 2016, event: 'Ukraine grid attack II (Industroyer)', significance: 'Purpose-built ICS malware causes Kyiv power outage' },
  { year: 2017, event: 'WannaCry', significance: 'North Korean ransomware worm infects 200K+ systems in 150 countries' },
  { year: 2017, event: 'NotPetya', significance: 'Russia\'s $10B+ destructive attack disguised as ransomware' },
  { year: 2017, event: 'TRITON/TRISIS', significance: 'First malware targeting safety instrumented systems (SIS)' },
  { year: 2018, event: 'Olympic Destroyer', significance: 'Russian false-flag attack on PyeongChang Olympics' },
  { year: 2019, event: 'Norsk Hydro ransomware', significance: 'LockerGoga disrupts major aluminum manufacturer' },
  { year: 2020, event: 'SolarWinds/SUNBURST', significance: 'Russia compromises 18,000 orgs via supply chain' },
  { year: 2021, event: 'Colonial Pipeline', significance: 'DarkSide ransomware shuts largest US fuel pipeline' },
  { year: 2021, event: 'Kaseya VSA', significance: 'REvil supply chain attack affects 1,500+ orgs' },
  { year: 2021, event: 'ProxyLogon (Exchange)', significance: 'Hafnium mass-exploits Exchange servers globally' },
  { year: 2021, event: 'Log4Shell', significance: 'Critical vulnerability in ubiquitous logging library' },
  { year: 2022, event: 'Viasat KA-SAT', significance: 'Russia wipes satellite modems at start of Ukraine invasion' },
  { year: 2022, event: 'Costa Rica ransomware', significance: 'Conti forces national emergency declaration' },
  { year: 2023, event: 'MOVEit exploitation', significance: 'Cl0p exploits file transfer software, steals data from 2,600+ orgs' },
  { year: 2023, event: 'Microsoft cloud key theft', significance: 'Storm-0558 forges Azure AD tokens using stolen MSA key' },
  { year: 2024, event: 'Change Healthcare', significance: 'BlackCat ransomware disrupts US healthcare payment processing' },
  { year: 2024, event: 'Volt Typhoon disclosure', significance: 'US reveals China pre-positioning in critical infrastructure' },
  { year: 2024, event: 'Salt Typhoon telecom', significance: 'China infiltrates major US telecom providers' },
  { year: 2025, event: 'AI-powered phishing surge', significance: 'Nation-states leverage LLMs for convincing targeted phishing at scale' },
  { year: 2026, event: 'SENTINEL EYE operational', significance: 'Global cyber threat prediction and counter-operations platform deployed' }
];

// ============================================================================
// NATION-STATE CYBER BUDGET COMPARISON DATA
// ============================================================================
var NATION_CYBER_BUDGETS = [
  { nation: 'United States', budget: 10500, workforce: 6000, tier: 1, offenseRating: 10, defenseRating: 9 },
  { nation: 'China', budget: 2500, workforce: 100000, tier: 1, offenseRating: 9, defenseRating: 8 },
  { nation: 'United Kingdom', budget: 1200, workforce: 3000, tier: 1, offenseRating: 8, defenseRating: 8 },
  { nation: 'Israel', budget: 1500, workforce: 5000, tier: 1, offenseRating: 9, defenseRating: 8 },
  { nation: 'Russia', budget: 700, workforce: 1000, tier: 1, offenseRating: 9, defenseRating: 7 },
  { nation: 'France', budget: 600, workforce: 2500, tier: 2, offenseRating: 7, defenseRating: 7 },
  { nation: 'Iran', budget: 300, workforce: 3500, tier: 2, offenseRating: 7, defenseRating: 5 },
  { nation: 'North Korea', budget: 150, workforce: 6800, tier: 2, offenseRating: 7, defenseRating: 3 },
  { nation: 'India', budget: 400, workforce: 2000, tier: 2, offenseRating: 6, defenseRating: 6 },
  { nation: 'Turkey', budget: 200, workforce: 1200, tier: 3, offenseRating: 5, defenseRating: 5 },
  { nation: 'Pakistan', budget: 100, workforce: 800, tier: 3, offenseRating: 4, defenseRating: 4 },
  { nation: 'Vietnam', budget: 80, workforce: 1500, tier: 3, offenseRating: 5, defenseRating: 4 }
];

// ============================================================================
// CYBER ESCALATION LADDER
// ============================================================================
var ESCALATION_LADDER = [
  { level: 0, name: 'BASELINE', description: 'Normal peacetime cyber operations. Routine intelligence collection, vulnerability scanning, defensive monitoring.', examples: 'SIGINT collection, vulnerability research, defensive SOC operations', authorities: 'Standing DOD/IC authorities', color: '#00ff88' },
  { level: 1, name: 'ENHANCED MONITORING', description: 'Increased surveillance and detection posture. Additional sensors deployed, analyst shifts extended.', examples: 'Enhanced network monitoring, threat hunting, increased ISR', authorities: 'CYBERCOM commander authority', color: '#44cc88' },
  { level: 2, name: 'DEFENSIVE CYBER OPERATIONS', description: 'Active defense of US networks. Block, degrade, or disrupt adversary access to defended networks.', examples: 'Blocking C2 traffic, isolating compromised systems, malware eradication', authorities: 'CYBERCOM EXORD / Standing rules of engagement', color: '#ffaa00' },
  { level: 3, name: 'ACTIVE DEFENSE', description: 'Operations that reach beyond defended networks to detect, characterize, and counter adversary activity.', examples: 'Hunt-forward missions, beacon disruption, infrastructure mapping', authorities: 'SECDEF authorization / NSPM-13', color: '#ff8844' },
  { level: 4, name: 'OFFENSIVE CYBER OPERATIONS', description: 'Operations to project power in cyberspace to achieve military objectives. Degrade, disrupt, or destroy adversary capabilities.', examples: 'C2 infrastructure takedown, adversary tool disruption, data denial', authorities: 'POTUS / SECDEF authorization per NSPM-13 and EXORD', color: '#ff6622' },
  { level: 5, name: 'STRATEGIC CYBER WARFARE', description: 'Full-scale cyber operations as part of armed conflict. Target critical infrastructure, military C2, strategic capabilities.', examples: 'Grid attacks, military network destruction, strategic system disruption', authorities: 'POTUS authorization / War Powers / AUMF', color: '#ff2244' }
];

function renderEscalationLadder() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += '<div style="font-size:10px;color:#556;letter-spacing:2px;margin-bottom:16px;">CYBER ESCALATION LADDER</div>';

  h += '<div style="display:flex;flex-direction:column;gap:4px;">';
  for (var i = ESCALATION_LADDER.length - 1; i >= 0; i--) {
    var step = ESCALATION_LADDER[i];
    var isActive = step.level === 3;
    h += '<div style="background:' + (isActive ? step.color + '11' : '#0a0e1a') + ';border:2px solid ' + (isActive ? step.color : '#1a3a5c') + ';border-radius:6px;padding:14px 18px;' + (isActive ? 'box-shadow:0 0 20px ' + step.color + '22;' : '') + '">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">';
    h += '<div style="display:flex;align-items:center;gap:12px;">';
    h += '<div style="width:32px;height:32px;background:' + step.color + '22;border:2px solid ' + step.color + ';border-radius:4px;display:flex;align-items:center;justify-content:center;color:' + step.color + ';font-weight:bold;font-family:monospace;font-size:16px;">' + step.level + '</div>';
    h += '<div>';
    h += '<div style="color:' + step.color + ';font-size:13px;font-weight:bold;font-family:monospace;letter-spacing:2px;">' + esc(step.name) + '</div>';
    h += '<div style="color:#c8d8e8;font-size:11px;margin-top:2px;">' + esc(step.description) + '</div>';
    h += '</div>';
    h += '</div>';
    if (isActive) {
      h += '<div style="color:' + step.color + ';font-size:11px;font-family:monospace;font-weight:bold;animation:se-blink 1.5s ease-in-out infinite;">&#9654; CURRENT POSTURE</div>';
    }
    h += '</div>';
    h += '<div style="display:flex;gap:16px;margin-top:8px;padding-top:8px;border-top:1px solid #1a2a3c;flex-wrap:wrap;">';
    h += '<div style="flex:1;min-width:200px;"><span style="color:#556;font-size:9px;letter-spacing:1px;">EXAMPLES: </span><span style="color:#889;font-size:10px;">' + esc(step.examples) + '</span></div>';
    h += '<div style="flex:1;min-width:200px;"><span style="color:#556;font-size:9px;letter-spacing:1px;">AUTHORITY: </span><span style="color:#ffaa00;font-size:10px;">' + esc(step.authorities) + '</span></div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}

function renderIncidentTimeline() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('CYBER WARFARE HISTORY', 'Major milestones in nation-state cyber operations (1988-2026)');

  h += '<div style="position:relative;padding-left:80px;">';
  h += '<div style="position:absolute;left:60px;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#00aaff22,#00aaff,#ff2244,#ff224422);border-radius:2px;"></div>';

  for (var ci2 = 0; ci2 < CYBER_INCIDENT_TIMELINE.length; ci2++) {
    var incident = CYBER_INCIDENT_TIMELINE[ci2];
    var progress = ci2 / CYBER_INCIDENT_TIMELINE.length;
    var dotColor = progress < 0.3 ? '#00aaff' : progress < 0.6 ? '#ffaa00' : '#ff2244';

    h += '<div style="position:relative;margin-bottom:12px;">';
    h += '<div style="position:absolute;left:-76px;top:4px;color:#556;font-size:11px;font-family:monospace;letter-spacing:1px;text-align:right;width:55px;">' + incident.year + '</div>';
    h += '<div style="position:absolute;left:-24px;top:5px;width:12px;height:12px;background:' + dotColor + ';border-radius:50%;border:2px solid #060a14;"></div>';
    h += '<div style="margin-left:8px;padding:8px 14px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:4px;">';
    h += '<div style="color:#c8d8e8;font-size:12px;font-weight:bold;">' + esc(incident.event) + '</div>';
    h += '<div style="color:#889;font-size:10px;margin-top:2px;">' + esc(incident.significance) + '</div>';
    h += '</div>';
    h += '</div>';
  }

  h += '</div>';
  h += '</div>';
  return h;
}

function renderBudgetComparison() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('NATION-STATE CYBER BUDGET COMPARISON', 'Estimated annual cyber operations budgets (USD millions)');

  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">';
  var sorted2 = NATION_CYBER_BUDGETS.slice().sort(function(a, b) { return b.budget - a.budget; });
  var maxBudget = sorted2[0].budget;

  for (var b = 0; b < sorted2.length; b++) {
    var nation = sorted2[b];
    var tierColors = { 1: '#00aaff', 2: '#ffaa00', 3: '#889' };
    var tc2 = tierColors[nation.tier] || '#889';
    var budgetPct = Math.round((nation.budget / maxBudget) * 100);

    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:12px;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">';
    h += '<span style="color:#c8d8e8;font-size:13px;font-weight:bold;">' + esc(nation.nation) + '</span>';
    h += '<span style="background:' + tc2 + '22;color:' + tc2 + ';padding:2px 8px;border-radius:3px;font-size:9px;border:1px solid ' + tc2 + '44;">TIER ' + nation.tier + '</span>';
    h += '</div>';

    // Budget bar
    h += '<div style="margin-bottom:8px;">';
    h += '<div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;">';
    h += '<span style="color:#556;">EST. BUDGET</span>';
    h += '<span style="color:#00ff88;font-weight:bold;">$' + nation.budget + 'M</span>';
    h += '</div>';
    h += '<div style="width:100%;height:6px;background:#1a2a3c;border-radius:3px;overflow:hidden;">';
    h += '<div style="width:' + budgetPct + '%;height:100%;background:linear-gradient(90deg,#00aaff,#00ff88);border-radius:3px;"></div>';
    h += '</div>';
    h += '</div>';

    // Stats row
    h += '<div style="display:flex;gap:12px;font-size:10px;">';
    h += '<div><span style="color:#556;">WORKFORCE: </span><span style="color:#c8d8e8;">' + nation.workforce.toLocaleString() + '</span></div>';
    h += '<div><span style="color:#556;">OFF: </span><span style="color:#ff6644;">' + nation.offenseRating + '/10</span></div>';
    h += '<div><span style="color:#556;">DEF: </span><span style="color:#00ff88;">' + nation.defenseRating + '/10</span></div>';
    h += '</div>';

    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}



// ============================================================================
// ADDITIONAL HISTORICAL OPERATION DETAILS
// ============================================================================
HISTORICAL_OPERATIONS_DETAIL['op-017'] = {
  codename: 'SHADOW BROKERS',
  attribution: 'Unknown (leaked NSA TAO / Equation Group tools)',
  attributionConfidence: 70,
  fullDescription: 'A group calling themselves "The Shadow Brokers" released a trove of hacking tools stolen from the NSA\'s elite Tailored Access Operations (TAO) unit, also known as the Equation Group. The leaked tools included EternalBlue (MS17-010), DoublePulsar, and dozens of other exploits targeting Windows, Cisco, Fortinet, and other widely-deployed systems. The leaks directly enabled WannaCry and NotPetya, two of the most destructive cyber events in history, causing combined damages exceeding $14 billion.',
  targets: ['NSA Equation Group tool repository', 'Global cybersecurity (indirect — leaked tools used worldwide)'],
  ttps: [
    { technique: 'T1588.005', name: 'Obtain Capabilities: Exploits', detail: 'Acquisition of sovereign nation-state offensive tools (unprecedented)' },
    { technique: 'T1591', name: 'Gather Victim Org Information', detail: 'Knowledge of NSA internal operational structure and tool naming' },
    { technique: 'T1583.006', name: 'Web Services', detail: 'Used Steemit, Medium, and GitHub for public tool releases' }
  ],
  timeline: [
    { date: '2016-08-13', event: 'Shadow Brokers announce auction of "Equation Group cyber weapons"' },
    { date: '2016-10', event: 'Second dump includes tools targeting Windows systems' },
    { date: '2017-01', event: 'Further releases with pricing list for individual tools' },
    { date: '2017-03-14', event: 'Microsoft patches MS17-010 (EternalBlue) — suspected NSA tip-off' },
    { date: '2017-04-14', event: 'Major dump: EternalBlue, DoublePulsar, EternalRomance + dozens more' },
    { date: '2017-05-12', event: 'WannaCry ransomware worm uses EternalBlue — 200K+ infections' },
    { date: '2017-06-27', event: 'NotPetya uses EternalBlue — $10B+ in damages' },
    { date: '2017-11', event: 'Final known Shadow Brokers communication' }
  ],
  toolsUsed: ['EternalBlue (MS17-010)', 'DoublePulsar', 'EternalRomance', 'EternalSynergy', 'FUZZBUNCH framework', 'DanderSpritz implant framework', 'BANANAGLEE (Cisco/Juniper implant)', 'EXTRABACON', 'EPICBANANA'],
  impact: 'Directly enabled WannaCry ($4-8B damages) and NotPetya ($10B+ damages). Exposed NSA offensive capabilities. Undermined public trust in intelligence agencies. Created global vulnerability crisis as leaked exploits were weaponized by multiple threat actors.',
  significance: 'Most consequential intelligence tool leak in cyber history. Demonstrated that offensive stockpiling creates systemic risk. Led to Vulnerabilities Equities Process reform. Showed that "nobody is safe" — even the most sophisticated cyber organization can be compromised.',
  lessonsLearned: ['Stockpiling vulnerabilities creates systemic risk when leaked', 'Vulnerability disclosure debate has real-world consequences', 'Patching must be treated as urgent national security priority', 'Insider threat to intelligence agencies can have global impact', 'Leaked tools lower the barrier for all threat actors']
};

HISTORICAL_OPERATIONS_DETAIL['op-018'] = {
  codename: 'BANGLADESH BANK HEIST',
  attribution: 'North Korea (Lazarus Group / BlueNoroff)',
  attributionConfidence: 93,
  fullDescription: 'North Korean state hackers from the Lazarus Group\'s financial operations unit (BlueNoroff) infiltrated Bangladesh Bank\'s systems and attempted to steal $951 million by submitting fraudulent SWIFT messages to the Federal Reserve Bank of New York. The attackers successfully transferred $81 million to accounts in the Philippines, where it was laundered through casinos. A spelling error in one transfer request ("fandation" instead of "foundation") triggered additional scrutiny that blocked the remaining $870 million in fraudulent transfers.',
  targets: ['Bangladesh Bank (central bank)', 'SWIFT messaging system', 'Federal Reserve Bank of New York', 'Rizal Commercial Banking Corp (Philippines)'],
  ttps: [
    { technique: 'T1566.001', name: 'Spearphishing Attachment', detail: 'Initial compromise via targeted emails to Bangladesh Bank employees' },
    { technique: 'T1078', name: 'Valid Accounts', detail: 'Stolen SWIFT operator credentials used for message submission' },
    { technique: 'T1565.001', name: 'Stored Data Manipulation', detail: 'Modified SWIFT Alliance Access software to suppress transfer confirmations' },
    { technique: 'T1070', name: 'Indicator Removal', detail: 'Deleted transaction logs and modified database records to hide transfers' },
    { technique: 'T1548', name: 'Abuse Elevation Control', detail: 'Bypassed SWIFT security controls using compromised admin access' }
  ],
  timeline: [
    { date: '2015-05', event: 'Lazarus Group sends reconnaissance spear-phishing to Bangladesh Bank' },
    { date: '2016-01', event: 'Attackers achieve access to SWIFT Alliance Access terminal' },
    { date: '2016-02-04', event: 'Attackers wait for Dhaka weekend/NY business hours overlap' },
    { date: '2016-02-04 20:36', event: 'First batch of 35 fraudulent SWIFT messages submitted ($951M total)' },
    { date: '2016-02-05', event: '5 transfers ($101M) clear to Philippine bank accounts' },
    { date: '2016-02-05', event: 'Deutsche Bank flags "fandation" misspelling, queries remaining transfers' },
    { date: '2016-02-08', event: 'Bangladesh Bank discovers fraud upon return from weekend' },
    { date: '2016-02-09', event: '$20M transfer to Sri Lanka reversed (another misspelling caught)' },
    { date: '2016-03', event: '$81M laundered through Philippine casinos, largely unrecoverable' },
    { date: '2018-09', event: 'DOJ indicts Park Jin Hyok for Bangladesh Bank heist and other operations' }
  ],
  toolsUsed: ['Custom SWIFT malware', 'SWIFT Alliance Access manipulation tools', 'Custom backdoors for persistence', 'Log cleaning utilities', 'Anti-forensics tools'],
  impact: '$81 million successfully stolen ($951M attempted). Only $15M recovered. Exposed fundamental vulnerabilities in global banking messaging system. Led to SWIFT Customer Security Programme. Multiple banks in Vietnam, Ecuador, and other countries targeted in similar campaigns.',
  significance: 'Demonstrated nation-state capability to exploit global financial infrastructure. Showed that even the most trusted financial messaging system (SWIFT) could be compromised. Changed how banks approach SWIFT security. Demonstrated North Korea\'s motivation to fund regime through cyber theft.',
  lessonsLearned: ['Global financial messaging systems are high-value targets', 'Time zone differences can be exploited in international banking attacks', 'Small errors (typos) can prevent massive losses', 'Central banks need dedicated cybersecurity capabilities', 'Nation-states will target financial systems for revenue generation']
};

HISTORICAL_OPERATIONS_DETAIL['op-021'] = {
  codename: 'TRITON / TRISIS',
  attribution: 'Russia (Central Scientific Research Institute of Chemistry and Mechanics — CNIIHM)',
  attributionConfidence: 87,
  fullDescription: 'Russian state-linked hackers deployed TRITON, the first known malware specifically designed to target safety instrumented systems (SIS). The malware was discovered at a petrochemical facility in Saudi Arabia where it targeted Schneider Electric Triconex safety controllers — the last line of defense preventing catastrophic physical failures such as explosions, toxic gas releases, or equipment destruction. The attack was only detected because a bug in the malware code triggered a safety shutdown. Had it succeeded as designed, the malware could have disabled safety systems while simultaneously creating dangerous physical conditions.',
  targets: ['Saudi petrochemical facility (unnamed)', 'Schneider Electric Triconex SIS controllers', 'Safety Instrumented Systems globally (implied)'],
  ttps: [
    { technique: 'T1190', name: 'Exploit Public-Facing Application', detail: 'Initial IT network compromise via remote access vulnerability' },
    { technique: 'T1021.001', name: 'Remote Desktop Protocol', detail: 'RDP pivot from IT to engineering workstation' },
    { technique: 'T1565.001', name: 'Stored Data Manipulation', detail: 'Modified SIS controller firmware via TriStation protocol' },
    { technique: 'T1562', name: 'Impair Defenses', detail: 'Attempted to reprogram SIS to allow unsafe physical conditions' }
  ],
  timeline: [
    { date: '2014', event: 'Initial IT network compromise of target facility' },
    { date: '2017-06', event: 'Attackers pivot to OT/engineering network' },
    { date: '2017-08', event: 'First TRITON deployment attempt — facility emergency shutdown triggered' },
    { date: '2017-08', event: 'Operators attribute shutdown to mechanical issue, restart operations' },
    { date: '2017-08', event: 'Second TRITON deployment — another safety shutdown' },
    { date: '2017-12', event: 'FireEye/Dragos/Schneider Electric publicly disclose TRITON' },
    { date: '2018-10', event: 'CNIIHM linked to TRITON development (FireEye attribution)' },
    { date: '2019-04', event: 'Additional TRITON activity detected at another facility' }
  ],
  toolsUsed: ['TRITON/TRISIS framework', 'Custom Triconex TriStation protocol library', 'Custom RATs for OT network access', 'Credential harvesting tools', 'Network reconnaissance utilities'],
  impact: 'Safety shutdown of petrochemical facility (potential for catastrophic physical incident averted only by malware bug). First confirmed attack on safety systems designed to prevent loss of human life. Changed entire industrial cybersecurity threat landscape.',
  significance: 'Crossed a fundamental line — targeting systems designed to prevent deaths. Demonstrated that nation-states are willing to risk human casualties through cyber attacks. Led to fundamental reassessment of ICS/SCADA security assumptions. Showed that safety systems can be directly compromised, not just bypassed.',
  lessonsLearned: ['Safety instrumented systems can be directly targeted by cyber actors', 'ICS security must assume sophisticated nation-state threat actors', 'OT network segmentation from IT is critical but insufficient alone', 'Safety system firmware integrity must be continuously monitored', 'Red lines in cyber warfare are not well established or respected']
};

// ============================================================================
// THREAT FEED AGGREGATION DASHBOARD DATA
// ============================================================================
var THREAT_FEED_SOURCES = [
  { name: 'NSA Cybersecurity Advisory', type: 'SIGINT', reliability: 'A', frequency: 'As needed', lastUpdate: '2026-09-12', classification: 'TS//SCI', activeAlerts: 3 },
  { name: 'CISA KEV Catalog', type: 'CYBINT', reliability: 'A', frequency: 'Daily', lastUpdate: '2026-09-13', classification: 'UNCLASSIFIED', activeAlerts: 12 },
  { name: 'FBI FLASH', type: 'CYBINT', reliability: 'A', frequency: 'Weekly', lastUpdate: '2026-09-11', classification: 'TLP:RED', activeAlerts: 5 },
  { name: 'Five Eyes Cyber Threat Intel', type: 'SIGINT', reliability: 'A', frequency: 'Daily', lastUpdate: '2026-09-13', classification: 'TS//SI//REL FVEY', activeAlerts: 7 },
  { name: 'NATO NCIRC', type: 'CYBINT', reliability: 'B', frequency: 'Daily', lastUpdate: '2026-09-12', classification: 'NATO SECRET', activeAlerts: 4 },
  { name: 'FS-ISAC ThreatNet', type: 'OSINT', reliability: 'B', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'TLP:AMBER', activeAlerts: 8 },
  { name: 'ICS-CERT Advisories', type: 'CYBINT', reliability: 'A', frequency: 'Weekly', lastUpdate: '2026-09-10', classification: 'UNCLASSIFIED', activeAlerts: 6 },
  { name: 'Mandiant Threat Intel', type: 'OSINT', reliability: 'B', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'TLP:GREEN', activeAlerts: 15 },
  { name: 'CrowdStrike Falcon Intel', type: 'CYBINT', reliability: 'B', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'TLP:GREEN', activeAlerts: 11 },
  { name: 'Recorded Future', type: 'OSINT', reliability: 'B', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'TLP:GREEN', activeAlerts: 22 },
  { name: 'Dark Web HUMINT Collection', type: 'HUMINT', reliability: 'C', frequency: 'Variable', lastUpdate: '2026-09-11', classification: 'SECRET//NOFORN', activeAlerts: 3 },
  { name: 'Satellite Imagery Analysis', type: 'GEOINT', reliability: 'B', frequency: 'Daily', lastUpdate: '2026-09-12', classification: 'TS//SCI', activeAlerts: 2 },
  { name: 'VirusTotal Intelligence', type: 'CYBINT', reliability: 'B', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'UNCLASSIFIED', activeAlerts: 31 },
  { name: 'Shodan Monitor', type: 'OSINT', reliability: 'C', frequency: 'Continuous', lastUpdate: '2026-09-13', classification: 'UNCLASSIFIED', activeAlerts: 9 },
  { name: 'CIRCL MISP', type: 'CYBINT', reliability: 'B', frequency: 'Daily', lastUpdate: '2026-09-12', classification: 'TLP:AMBER', activeAlerts: 14 }
];

function renderThreatFeedDashboard() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('THREAT INTELLIGENCE FEED STATUS', 'Aggregated feed health and active alert monitoring');

  var totalAlerts = 0;
  var sourcesByType = {};
  for (var f = 0; f < THREAT_FEED_SOURCES.length; f++) {
    totalAlerts += THREAT_FEED_SOURCES[f].activeAlerts;
    var ft = THREAT_FEED_SOURCES[f].type;
    sourcesByType[ft] = (sourcesByType[ft] || 0) + 1;
  }

  // Summary stats
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px;margin-bottom:20px;">';
  h += renderStatCard('ACTIVE FEEDS', String(THREAT_FEED_SOURCES.length), '#00aaff', 'Ingesting');
  h += renderStatCard('TOTAL ALERTS', String(totalAlerts), '#ff6622', 'Unresolved');
  h += renderStatCard('SIGINT', String(sourcesByType['SIGINT'] || 0), '#00aaff', 'Sources');
  h += renderStatCard('CYBINT', String(sourcesByType['CYBINT'] || 0), '#ffaa00', 'Sources');
  h += renderStatCard('OSINT', String(sourcesByType['OSINT'] || 0), '#00ff88', 'Sources');
  h += renderStatCard('HUMINT', String(sourcesByType['HUMINT'] || 0), '#ff8844', 'Sources');
  h += '</div>';

  // Feed table
  var headers = ['SOURCE', 'TYPE', 'REL', 'FREQ', 'CLASSIFICATION', 'LAST UPDATE', 'ALERTS'];
  var rows = [];
  for (var fi = 0; fi < THREAT_FEED_SOURCES.length; fi++) {
    var feed = THREAT_FEED_SOURCES[fi];
    rows.push([feed.name, feed.type, feed.reliability, feed.frequency, feed.classification, feed.lastUpdate, String(feed.activeAlerts)]);
  }
  h += renderDataGrid(headers, rows);

  h += '</div>';
  return h;
}

// ============================================================================
// ATTACK SURFACE MAPPING DATA
// ============================================================================
var ATTACK_SURFACE_CATEGORIES = [
  {
    category: 'Internet-Facing Services',
    description: 'Publicly accessible network services and applications',
    assets: [
      { name: 'Web Application Servers', count: 12847, riskLevel: 'HIGH', exposures: 'Public APIs, admin panels, legacy apps' },
      { name: 'Email Gateways', count: 3421, riskLevel: 'HIGH', exposures: 'SMTP relay, webmail, Exchange Online' },
      { name: 'VPN Concentrators', count: 856, riskLevel: 'CRITICAL', exposures: 'SSL VPN endpoints, IPSec gateways' },
      { name: 'DNS Servers', count: 423, riskLevel: 'HIGH', exposures: 'Authoritative DNS, recursive resolvers' },
      { name: 'Load Balancers', count: 1234, riskLevel: 'MEDIUM', exposures: 'F5, Citrix NetScaler, HAProxy' }
    ]
  },
  {
    category: 'Cloud Infrastructure',
    description: 'Cloud service provider resources and configurations',
    assets: [
      { name: 'AWS Accounts', count: 347, riskLevel: 'HIGH', exposures: 'S3 buckets, IAM roles, Lambda functions' },
      { name: 'Azure Tenants', count: 128, riskLevel: 'HIGH', exposures: 'Azure AD, Key Vault, App Services' },
      { name: 'GCP Projects', count: 86, riskLevel: 'MEDIUM', exposures: 'GCS buckets, Kubernetes clusters' },
      { name: 'SaaS Applications', count: 2341, riskLevel: 'MEDIUM', exposures: 'OAuth tokens, API integrations, data sharing' }
    ]
  },
  {
    category: 'Industrial Control Systems',
    description: 'SCADA, DCS, and other operational technology systems',
    assets: [
      { name: 'SCADA Systems', count: 1247, riskLevel: 'CRITICAL', exposures: 'HMI access, historian databases, remote access' },
      { name: 'PLCs/RTUs', count: 8934, riskLevel: 'CRITICAL', exposures: 'Modbus/TCP, EtherNet/IP, OPC UA' },
      { name: 'Engineering Workstations', count: 567, riskLevel: 'HIGH', exposures: 'Programming interfaces, firmware upload capability' },
      { name: 'Safety Instrumented Systems', count: 234, riskLevel: 'CRITICAL', exposures: 'Triconex, Yokogawa ProSafe, Honeywell FSC' }
    ]
  },
  {
    category: 'Supply Chain Dependencies',
    description: 'Third-party software, services, and vendor connections',
    assets: [
      { name: 'Software Vendors with Network Access', count: 412, riskLevel: 'HIGH', exposures: 'VPN connections, jump boxes, remote management' },
      { name: 'Open Source Dependencies', count: 47823, riskLevel: 'MEDIUM', exposures: 'npm, PyPI, Maven packages in production' },
      { name: 'Managed Service Providers', count: 89, riskLevel: 'HIGH', exposures: 'Admin access to client environments' },
      { name: 'CI/CD Pipelines', count: 234, riskLevel: 'HIGH', exposures: 'Build systems, code signing, deployment automation' }
    ]
  }
];

function renderAttackSurfaceMap() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('NATIONAL CYBER ATTACK SURFACE', 'Critical infrastructure and government network exposure assessment');

  for (var c = 0; c < ATTACK_SURFACE_CATEGORIES.length; c++) {
    var cat = ATTACK_SURFACE_CATEGORIES[c];
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;margin-bottom:16px;overflow:hidden;">';

    h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:14px 18px;border-bottom:1px solid #1a3a5c;">';
    h += '<h4 style="margin:0;color:#00aaff;font-size:14px;font-family:monospace;letter-spacing:1px;">' + esc(cat.category) + '</h4>';
    h += '<div style="color:#889;font-size:10px;margin-top:2px;">' + esc(cat.description) + '</div>';
    h += '</div>';

    h += '<div style="padding:12px 18px;">';
    for (var a = 0; a < cat.assets.length; a++) {
      var asset = cat.assets[a];
      var riskColors2 = { 'CRITICAL': '#ff2244', 'HIGH': '#ff6622', 'MEDIUM': '#ffaa00', 'LOW': '#44cc88' };
      var rc2 = riskColors2[asset.riskLevel] || '#889';
      h += '<div style="display:flex;align-items:center;gap:12px;padding:8px 0;' + (a < cat.assets.length - 1 ? 'border-bottom:1px solid #1a2a3c;' : '') + '">';
      h += '<div style="flex:1;">';
      h += '<div style="color:#c8d8e8;font-size:12px;">' + esc(asset.name) + '</div>';
      h += '<div style="color:#556;font-size:10px;margin-top:2px;">' + esc(asset.exposures) + '</div>';
      h += '</div>';
      h += '<div style="text-align:right;min-width:60px;">';
      h += '<div style="color:#c8d8e8;font-size:14px;font-weight:bold;font-family:monospace;">' + asset.count.toLocaleString() + '</div>';
      h += '</div>';
      h += renderSeverityBadge(asset.riskLevel);
      h += '</div>';
    }
    h += '</div>';

    h += '</div>';
  }

  h += '</div>';
  return h;
}



// ============================================================================
// EXTENDED OPERATION DETAILS (additional entries for deep-dive)
// ============================================================================
HISTORICAL_OPERATIONS_DETAIL['op-003a'] = {
  codename: 'VOLT TYPHOON',
  attribution: 'China (PLA Strategic Support Force / MSS)',
  attributionConfidence: 94,
  fullDescription: 'A Chinese state-sponsored campaign focused on pre-positioning access in US critical infrastructure networks — particularly in telecommunications, energy, water, and transportation sectors — to enable disruptive or destructive cyber operations in the event of a geopolitical crisis, most likely related to Taiwan. Unlike traditional Chinese espionage operations focused on data theft, Volt Typhoon\'s primary objective appears to be establishing persistent access that could be activated during a conflict to delay or disrupt US military response. The campaign uses living-off-the-land techniques (LOLBins) to minimize detection, avoiding custom malware in favor of built-in Windows tools.',
  targets: ['US telecommunications providers (Guam, Hawaii, mainland)', 'US energy sector utilities', 'Water treatment facilities', 'Transportation systems', 'Military-adjacent infrastructure', 'Pacific Island nations'],
  ttps: [
    { technique: 'T1190', name: 'Exploit Public-Facing Application', detail: 'Exploitation of Fortinet FortiGuard, Ivanti, Citrix edge devices for initial access' },
    { technique: 'T1078', name: 'Valid Accounts', detail: 'Use of stolen credentials, often from edge device compromise' },
    { technique: 'T1218', name: 'System Binary Proxy Execution', detail: 'Living-off-the-land: ntdsutil, netsh, wmic, PowerShell for all operations' },
    { technique: 'T1070', name: 'Indicator Removal', detail: 'Extreme operational security — minimal logging artifacts, proxy chains' },
    { technique: 'T1090.001', name: 'Internal Proxy', detail: 'Compromised SOHO routers and IoT devices as operational relay boxes (ORBs)' },
    { technique: 'T1027', name: 'Obfuscated Files', detail: 'Living-off-the-land approach means almost no custom malware to detect' }
  ],
  timeline: [
    { date: '2021', event: 'Earliest confirmed Volt Typhoon activity in US infrastructure (retrospective analysis)' },
    { date: '2023-05', event: 'Microsoft and Five Eyes agencies publicly disclose Volt Typhoon campaign' },
    { date: '2023-12', event: 'CISA confirms Volt Typhoon has maintained access for "at least five years"' },
    { date: '2024-01', event: 'FBI disrupts KV Botnet (SOHO router botnet used as ORB infrastructure)' },
    { date: '2024-02', event: 'CISA advisory details pre-positioning in water, energy, telecom, transport' },
    { date: '2024-03', event: 'Congressional hearing on Chinese cyber pre-positioning threat' },
    { date: '2024-06', event: 'Additional Volt Typhoon infrastructure discovered in Guam and Hawaii' },
    { date: '2025-01', event: 'Expanded operations targeting additional Pacific Island infrastructure' },
    { date: '2026-09', event: 'Ongoing monitoring of dormant Volt Typhoon access points continues' }
  ],
  toolsUsed: ['Living-off-the-land binaries (LOLBins)', 'ntdsutil', 'netsh port forwarding', 'wmic', 'PowerShell', 'Compromised SOHO routers (KV Botnet)', 'Mimikatz (rare)', 'Impacket (rare)'],
  impact: 'Pre-positioned access in critical infrastructure across multiple US sectors. Unknown full scope — dormant access designed to be activated during conflict. Fundamental change in how China is perceived as a cyber threat (from espionage to potential disruption/destruction). Multiple Congressional hearings and executive actions.',
  significance: 'Represents a paradigm shift in Chinese cyber operations: from intelligence collection to preparation for kinetic conflict support. First major campaign focused on critical infrastructure pre-positioning rather than data theft. Changed US national security planning assumptions about cyber threats to the homeland.',
  lessonsLearned: ['Edge device security is critical — network perimeters are primary targets', 'Living-off-the-land techniques defeat signature-based detection', 'Pre-positioning may go undetected for years', 'Critical infrastructure defenders must assume compromise and hunt accordingly', 'Geopolitical context directly shapes cyber threat posture']
};

HISTORICAL_OPERATIONS_DETAIL['op-019a'] = {
  codename: 'SALT TYPHOON',
  attribution: 'China (MSS-affiliated)',
  attributionConfidence: 91,
  fullDescription: 'A Chinese state-sponsored campaign that deeply infiltrated multiple major US telecommunications providers — including AT&T, Verizon, T-Mobile, and Lumen Technologies — gaining access to call metadata, text messages, and in some cases call audio for targeted individuals including senior US government officials and political figures. The operation exploited vulnerabilities in the lawful intercept systems that US carriers are required to maintain under CALEA (Communications Assistance for Law Enforcement Act), essentially turning the government\'s own surveillance infrastructure against it.',
  targets: ['AT&T', 'Verizon', 'T-Mobile', 'Lumen Technologies', 'US government officials', 'Political figures', 'Lawful intercept (CALEA) systems'],
  ttps: [
    { technique: 'T1190', name: 'Exploit Public-Facing Application', detail: 'Exploitation of telecom network management systems and edge devices' },
    { technique: 'T1557', name: 'Adversary-in-the-Middle', detail: 'Access to call routing and switching infrastructure' },
    { technique: 'T1020', name: 'Automated Exfiltration', detail: 'Systematic collection of call metadata and content for targeted numbers' },
    { technique: 'T1005', name: 'Data from Local System', detail: 'Access to lawful intercept data stores and wiretap systems' }
  ],
  timeline: [
    { date: '2023', event: 'Earliest estimated compromise of telecom networks' },
    { date: '2024-09', event: 'FBI and CISA begin investigating Chinese access to telecom providers' },
    { date: '2024-10', event: 'Public disclosure that Chinese hackers accessed US telecom wiretap systems' },
    { date: '2024-11', event: 'Scope expands: AT&T, Verizon, T-Mobile, Lumen all confirmed affected' },
    { date: '2024-12', event: 'CISA issues guidance urging encrypted communications for sensitive discussions' },
    { date: '2025-01', event: 'Congressional briefings reveal targeting of senior officials and political figures' },
    { date: '2025-06', event: 'Full remediation still ongoing across major carriers' },
    { date: '2026-09', event: 'Enhanced monitoring continues; carriers implementing Zero Trust architectures' }
  ],
  toolsUsed: ['Custom telecom-specific backdoors', 'Network management protocol exploitation', 'CALEA intercept system manipulation', 'Call detail record extraction tools'],
  impact: 'Access to communications metadata and content of senior US government officials. Demonstrated vulnerability of legally mandated surveillance infrastructure. Led to fundamental reassessment of CALEA system security. CISA recommended Americans use encrypted messaging apps.',
  significance: 'Exposed a critical weakness: mandated lawful intercept systems create attack surface that adversaries can exploit. Demonstrated that the most fundamental communications infrastructure is vulnerable. Led to calls for reforming CALEA requirements and investing in telecom security.',
  lessonsLearned: ['Government-mandated surveillance capabilities create exploitable attack surface', 'Telecommunications infrastructure is a strategic intelligence target', 'End-to-end encryption is essential for sensitive communications', 'Carrier network security has not kept pace with nation-state threats', 'Zero Trust principles must extend to telecom infrastructure']
};

// ============================================================================
// CYBER WEAPONS TAXONOMY
// ============================================================================
var CYBER_WEAPONS_TAXONOMY = [
  { category: 'Espionage Platforms', description: 'Long-duration intelligence collection frameworks', examples: ['Flame (US/Israel)', 'Regin (Five Eyes)', 'Pegasus (NSO Group)', 'SUNBURST (Russia/APT29)'], tier: 'Nation-state', dangerLevel: 7 },
  { category: 'Destructive Wipers', description: 'Malware designed to destroy data and render systems inoperable', examples: ['Shamoon (Iran)', 'NotPetya (Russia)', 'WhisperGate (Russia)', 'CaddyWiper (Russia)'], tier: 'Nation-state', dangerLevel: 9 },
  { category: 'ICS/SCADA Weapons', description: 'Malware targeting industrial control systems for physical effects', examples: ['Stuxnet (US/Israel)', 'Industroyer (Russia)', 'TRITON (Russia)', 'Pipedream (Unknown)'], tier: 'Nation-state', dangerLevel: 10 },
  { category: 'Ransomware', description: 'Malware encrypting data for extortion', examples: ['WannaCry (North Korea)', 'LockBit (Russia-based)', 'BlackCat/ALPHV', 'Cl0p'], tier: 'Criminal/State-tolerated', dangerLevel: 8 },
  { category: 'Supply Chain Implants', description: 'Backdoors inserted into software distribution channels', examples: ['SUNBURST (Russia)', 'CCleaner (China)', 'XZ Utils (Unknown)', 'NotPetya via M.E.Doc (Russia)'], tier: 'Nation-state', dangerLevel: 9 },
  { category: 'Zero-Click Exploits', description: 'Exploits requiring no user interaction', examples: ['Pegasus (NSO Group)', 'FORCEDENTRY (NSO)', 'Predator (Intellexa)'], tier: 'Commercial/State', dangerLevel: 9 },
  { category: 'Botnet Infrastructure', description: 'Large-scale compromised device networks', examples: ['Mirai', 'KV Botnet (Volt Typhoon)', 'Emotet', 'TrickBot'], tier: 'Criminal/State', dangerLevel: 7 },
  { category: 'Firmware Implants', description: 'Persistent implants below the OS level', examples: ['Equation Group HDD implants', 'CosmicStrand (China)', 'MosaicRegressor (China)', 'LoJax (Russia)'], tier: 'Nation-state', dangerLevel: 10 }
];

function renderCyberWeaponsTaxonomy() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('CYBER WEAPONS TAXONOMY', 'Classification of known offensive cyber capabilities by category');

  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px;">';
  for (var w = 0; w < CYBER_WEAPONS_TAXONOMY.length; w++) {
    var weapon = CYBER_WEAPONS_TAXONOMY[w];
    var dangerColor = weapon.dangerLevel >= 9 ? '#ff2244' : weapon.dangerLevel >= 7 ? '#ff6622' : '#ffaa00';

    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;overflow:hidden;">';
    h += '<div style="padding:14px 16px;border-bottom:1px solid #1a3a5c;display:flex;justify-content:space-between;align-items:center;">';
    h += '<div>';
    h += '<div style="color:#00aaff;font-size:13px;font-weight:bold;font-family:monospace;letter-spacing:1px;">' + esc(weapon.category) + '</div>';
    h += '<div style="color:#889;font-size:10px;margin-top:2px;">' + esc(weapon.description) + '</div>';
    h += '</div>';
    h += '<div style="text-align:right;">';
    h += '<div style="color:' + dangerColor + ';font-size:18px;font-weight:bold;font-family:monospace;">' + weapon.dangerLevel + '/10</div>';
    h += '<div style="font-size:8px;color:#556;letter-spacing:1px;">DANGER</div>';
    h += '</div>';
    h += '</div>';

    h += '<div style="padding:12px 16px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:6px;">TIER: ' + esc(weapon.tier) + '</div>';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:6px;">KNOWN EXAMPLES:</div>';
    h += '<div style="display:flex;flex-wrap:wrap;gap:4px;">';
    for (var ex = 0; ex < weapon.examples.length; ex++) {
      h += '<span style="background:#1a0a0a;border:1px solid ' + dangerColor + '33;color:' + dangerColor + ';padding:3px 8px;border-radius:3px;font-size:10px;">' + esc(weapon.examples[ex]) + '</span>';
    }
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  // Danger meter legend
  h += '<div style="margin-top:16px;background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;padding:12px 16px;display:flex;justify-content:center;gap:24px;flex-wrap:wrap;">';
  h += '<div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#ffaa00;border-radius:3px;"></div><span style="color:#889;font-size:10px;">5-6: Moderate</span></div>';
  h += '<div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#ff6622;border-radius:3px;"></div><span style="color:#889;font-size:10px;">7-8: High</span></div>';
  h += '<div style="display:flex;align-items:center;gap:6px;"><div style="width:12px;height:12px;background:#ff2244;border-radius:3px;"></div><span style="color:#889;font-size:10px;">9-10: Critical</span></div>';
  h += '</div>';

  h += '</div>';
  return h;
}

// ============================================================================
// RESPONSE OPERATIONS TRACKING
// ============================================================================
var ACTIVE_RESPONSE_OPS = [
  { id: 'resp-001', codename: 'IRON SHIELD', type: 'Hunt Forward', status: 'ACTIVE', team: 'CNMF Team Alpha', location: 'Baltic Allied Nation', adversary: 'Sandworm', startDate: '2026-09-01', objectives: 'Identify and eradicate pre-positioned Russian access in allied power grid networks', progress: 65 },
  { id: 'resp-002', codename: 'SILENT WATCH', type: 'Defensive Monitoring', status: 'ACTIVE', team: 'CNMF Team Bravo', location: 'US Telecom Sector', adversary: 'Salt Typhoon', startDate: '2026-08-15', objectives: 'Monitor and map remaining Chinese access in telecommunications infrastructure', progress: 40 },
  { id: 'resp-003', codename: 'DIGITAL FORTRESS', type: 'Infrastructure Defense', status: 'ACTIVE', team: 'CISA Sector Team', location: 'US Power Grid (NERC Region)', adversary: 'Volt Typhoon', startDate: '2026-07-20', objectives: 'Deploy enhanced monitoring on identified Volt Typhoon access points pending remediation', progress: 75 },
  { id: 'resp-004', codename: 'WALLET FREEZE', type: 'Financial Disruption', status: 'PLANNING', team: 'FBI Cyber + Treasury', location: 'Global', adversary: 'Lazarus/BlueNoroff', startDate: '2026-09-15', objectives: 'Coordinate seizure of cryptocurrency wallets identified as Lazarus staging infrastructure', progress: 30 },
  { id: 'resp-005', codename: 'NORTHERN LIGHT', type: 'Hunt Forward', status: 'ACTIVE', team: 'CNMF Team Delta', location: 'Nordic Allied Nation', adversary: 'APT29', startDate: '2026-08-28', objectives: 'Counter SVR espionage operations targeting Nordic diplomatic and defense networks', progress: 55 },
  { id: 'resp-006', codename: 'SANDSTORM COUNTER', type: 'Active Defense', status: 'STANDBY', team: 'CNMF Team Echo', location: 'US CENTCOM AOR', adversary: 'APT33/MuddyWater', startDate: '2026-09-10', objectives: 'Prepared to disrupt Iranian cyber infrastructure if retaliatory attacks detected', progress: 20 }
];

function renderResponseOps() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('ACTIVE RESPONSE OPERATIONS', 'Current cyber operation deployments and their status');

  for (var r = 0; r < ACTIVE_RESPONSE_OPS.length; r++) {
    var op = ACTIVE_RESPONSE_OPS[r];
    var statusColors = { 'ACTIVE': '#00ff88', 'PLANNING': '#ffaa00', 'STANDBY': '#00aaff', 'COMPLETE': '#556' };
    var sc = statusColors[op.status] || '#889';
    var progColor = op.progress >= 70 ? '#00ff88' : op.progress >= 40 ? '#ffaa00' : '#ff6622';

    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;margin-bottom:12px;overflow:hidden;">';

    // Header bar
    h += '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 18px;border-bottom:1px solid #1a3a5c;flex-wrap:wrap;gap:8px;">';
    h += '<div style="display:flex;align-items:center;gap:12px;">';
    h += '<span style="background:' + sc + '22;color:' + sc + ';padding:3px 10px;border-radius:3px;font-size:10px;font-family:monospace;letter-spacing:1px;border:1px solid ' + sc + '44;">' + esc(op.status) + '</span>';
    h += '<span style="color:#00aaff;font-size:15px;font-weight:bold;font-family:monospace;letter-spacing:2px;">' + esc(op.codename) + '</span>';
    h += '<span style="color:#889;font-size:11px;">(' + esc(op.type) + ')</span>';
    h += '</div>';
    h += '<div style="display:flex;align-items:center;gap:8px;">';
    h += '<div style="width:100px;height:6px;background:#1a2a3c;border-radius:3px;overflow:hidden;">';
    h += '<div style="width:' + op.progress + '%;height:100%;background:' + progColor + ';border-radius:3px;"></div>';
    h += '</div>';
    h += '<span style="color:' + progColor + ';font-size:11px;font-family:monospace;">' + op.progress + '%</span>';
    h += '</div>';
    h += '</div>';

    // Details
    h += '<div style="padding:12px 18px;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;">';
    h += '<div><span style="color:#556;font-size:9px;letter-spacing:1px;">TEAM</span><div style="color:#c8d8e8;font-size:12px;margin-top:2px;">' + esc(op.team) + '</div></div>';
    h += '<div><span style="color:#556;font-size:9px;letter-spacing:1px;">LOCATION</span><div style="color:#c8d8e8;font-size:12px;margin-top:2px;">' + esc(op.location) + '</div></div>';
    h += '<div><span style="color:#556;font-size:9px;letter-spacing:1px;">ADVERSARY</span><div style="color:#ff8866;font-size:12px;margin-top:2px;">' + esc(op.adversary) + '</div></div>';
    h += '<div><span style="color:#556;font-size:9px;letter-spacing:1px;">START DATE</span><div style="color:#c8d8e8;font-size:12px;margin-top:2px;">' + esc(op.startDate) + '</div></div>';
    h += '</div>';
    h += '<div style="padding:8px 18px 12px 18px;border-top:1px solid #1a2a3c;">';
    h += '<span style="color:#556;font-size:9px;letter-spacing:1px;">OBJECTIVES: </span>';
    h += '<span style="color:#c8d8e8;font-size:11px;">' + esc(op.objectives) + '</span>';
    h += '</div>';

    h += '</div>';
  }

  h += '</div>';
  return h;
}



// ============================================================================
// ADDITIONAL WARGAME SCENARIOS (expanding to full 15 with more phases)
// ============================================================================
WARGAME_SCENARIOS.push(
  {
    id: 'ws-extra-01', codename: 'GHOST PROTOCOL',
    description: 'A sophisticated insider threat at a major defense contractor provides a nation-state APT with classified network access. The insider has been recruited via social engineering over 18 months. The APT uses the access to steal next-generation weapons system blueprints while planting logic bombs in defense industrial base systems.',
    adversary: 'China (APT41) + Recruited Insider',
    phases: [
      { name: 'Phase 1: Discovery', description: 'Anomalous data transfer patterns detected from classified terminal at defense contractor. User behavior analytics flag unusual access to compartmented programs.', blueTeamOptions: ['Initiate quiet investigation via counterintelligence', 'Immediately revoke access and forensically image systems', 'Set up monitoring honeypot to identify full scope'] },
      { name: 'Phase 2: Scope Assessment', description: 'Investigation reveals 18 months of sporadic data access across 4 classified programs. Insider has been using approved removable media to exfiltrate data. Evidence of APT41 custom malware on insider personal devices.', blueTeamOptions: ['Coordinate with FBI CI for arrest warrant', 'Expand monitoring to identify any co-conspirators', 'Assess damage to each compromised program'] },
      { name: 'Phase 3: Logic Bomb Discovery', description: 'Forensic analysis reveals logic bombs embedded in software builds for 2 weapons systems. Trigger conditions are time-based — set to activate during a potential conflict scenario.', blueTeamOptions: ['Emergency code review of all contractor-delivered software', 'Isolate affected weapons systems from networks', 'Coordinate with other contractors for potential wider campaign'] },
      { name: 'Phase 4: Attribution Confirmation', description: 'NSA SIGINT confirms APT41 handler communications with insider. Diplomatic considerations: confrontation vs. quiet remediation. Congressional notification requirements triggered.', blueTeamOptions: ['Brief NSC for diplomatic response options', 'Initiate damage assessment across defense industrial base', 'Launch defensive counter-operations against APT41 infrastructure'] },
      { name: 'Phase 5: Remediation', description: 'Insider arrested. Logic bombs neutralized. But extent of data loss unclear — adversary may have blueprints for advanced systems. How do you assess strategic impact?', blueTeamOptions: ['Commission full damage assessment (6-12 month effort)', 'Accelerate next-gen program timelines to maintain advantage', 'Implement enhanced insider threat monitoring across DIB'] }
    ],
    difficulty: 5,
    estimatedDuration: '6 hours'
  },
  {
    id: 'ws-extra-02', codename: 'BROKEN MIRROR',
    description: 'A coordinated disinformation campaign using AI-generated deepfakes accompanies a real cyber attack on election infrastructure across multiple states. The goal is to undermine confidence in election results while simultaneously manipulating voter registration databases and vote tallying systems.',
    adversary: 'Russia (GRU + Internet Research Agency 2.0)',
    phases: [
      { name: 'Phase 1: Pre-Election', description: 'Social media platforms detect surge of AI-generated political content. Deepfake videos of officials making inflammatory statements go viral. Voter registration systems in 5 states report anomalous access patterns.', blueTeamOptions: ['Coordinate with social media platforms for takedown', 'Issue public awareness advisory about deepfakes', 'Deploy CISA election security teams to affected states'] },
      { name: 'Phase 2: Election Day', description: 'Three states report voter registration database discrepancies. Thousands of legitimate voters cannot be found in rolls. Deepfake video of election official "admitting fraud" goes viral with 50M views.', blueTeamOptions: ['Activate provisional ballot procedures for affected voters', 'Coordinate rapid deepfake debunking with social media platforms', 'Escalate to national security level response'] },
      { name: 'Phase 3: Post-Election', description: 'Two states report vote tallying system anomalies. Close margins in affected states. Foreign state media amplifies "election fraud" narrative. Domestic protests planned at state capitals.', blueTeamOptions: ['Request manual recount in affected jurisdictions', 'Public statement from bipartisan election officials', 'Consider attribution statement from intelligence community'] },
      { name: 'Phase 4: Crisis', description: 'Leaked (fabricated) documents suggest US officials knew about vulnerabilities. Foreign government denies involvement and accuses US of suppressing democracy. Congressional leaders demand investigation.', blueTeamOptions: ['IC assessment and attribution statement', 'Diplomatic response and sanctions preparation', 'Public transparency about what happened and what was prevented'] }
    ],
    difficulty: 5,
    estimatedDuration: '5 hours'
  },
  {
    id: 'ws-extra-03', codename: 'ZERO GRAVITY',
    description: 'A sophisticated attack targets space-based assets and ground control systems. GPS satellite control is disrupted, military satellite communications are degraded, and commercial space services are affected. The attack coincides with increased military tensions in a contested region.',
    adversary: 'China (PLA Strategic Support Force)',
    phases: [
      { name: 'Phase 1: Anomaly Detection', description: 'GPS accuracy degrades in Indo-Pacific region. Military SATCOM experiences increased latency. Commercial satellite operators report ground station access issues.', blueTeamOptions: ['Activate backup navigation systems', 'Investigate ground station security', 'Coordinate with Space Force for space domain awareness'] },
      { name: 'Phase 2: Attack Confirmation', description: 'Space Force confirms unauthorized commands sent to GPS constellation. Three military SATCOM ground stations compromised. Commercial imagery satellites repositioned without authorization.', blueTeamOptions: ['Switch to backup ground control', 'Activate alternative PNT systems', 'Assess impact on military operations'] },
      { name: 'Phase 3: Escalation', description: 'PRC naval activity increases in South China Sea. GPS disruption expands to broader Pacific. Allied nations report similar satellite anomalies. Dual-use space systems make attribution complex.', blueTeamOptions: ['Activate coalition space defense coordination', 'Consider kinetic vs. non-kinetic response options', 'Diplomatic channels to de-escalate'] }
    ],
    difficulty: 4,
    estimatedDuration: '4 hours'
  }
);

// ============================================================================
// LEGAL AUTHORITIES REFERENCE
// ============================================================================
var LEGAL_AUTHORITIES = [
  { title: 'Title 10 USC', section: 'Armed Forces', description: 'Military operations authority including cyberspace operations. Governs USCYBERCOM operations as combat support.', applicability: 'Offensive and defensive military cyber operations', approval: 'SECDEF / POTUS per operation scope' },
  { title: 'Title 50 USC', section: 'War and National Defense', description: 'Intelligence community authorities including covert action. Governs NSA collection and CIA cyber operations.', applicability: 'Intelligence collection, covert cyber operations', approval: 'Presidential Finding with Congressional notification' },
  { title: 'EO 12333', section: 'United States Intelligence Activities', description: 'Governs intelligence community activities including signals intelligence collection and counterintelligence.', applicability: 'SIGINT collection, foreign intelligence', approval: 'Various IC heads per collection type' },
  { title: 'NSPM-13', section: 'Offensive Cyber Operations Policy', description: 'Streamlined approval process for offensive cyber operations. Delegates certain authorities to SECDEF and USCYBERCOM Commander.', applicability: 'Time-sensitive offensive cyber operations', approval: 'SECDEF with POTUS delegation' },
  { title: 'AUMF 2001', section: 'Authorization for Use of Military Force', description: 'Post-9/11 authorization interpreted to include cyber operations against terrorist organizations and associated forces.', applicability: 'Counter-terrorism cyber operations', approval: 'Standing authority under AUMF' },
  { title: 'PPD-20', section: 'US Cyber Operations Policy', description: 'Obama-era directive establishing policy for offensive and defensive cyber operations (partially superseded by NSPM-13).', applicability: 'Cyber operations policy framework', approval: 'NSC coordination process' },
  { title: 'CFAA', section: '18 USC 1030', description: 'Computer Fraud and Abuse Act — primary federal law for prosecuting cyber crimes. Relevant for FBI cyber operations and prosecution.', applicability: 'Domestic law enforcement cyber operations', approval: 'DOJ authorization for investigations' },
  { title: 'Tallinn Manual 3.0', section: 'International Cyber Law', description: 'Non-binding academic analysis of how international law applies to cyber operations. Used as reference for ROE development.', applicability: 'International law compliance for cyber operations', approval: 'Advisory — not binding law' }
];

function renderLegalAuthorities() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('LEGAL AUTHORITY MATRIX', 'Applicable legal frameworks for cyber operations');

  for (var l = 0; l < LEGAL_AUTHORITIES.length; l++) {
    var auth = LEGAL_AUTHORITIES[l];
    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;margin-bottom:10px;padding:14px 18px;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
    h += '<div>';
    h += '<span style="color:#00aaff;font-size:14px;font-weight:bold;font-family:monospace;">' + esc(auth.title) + '</span>';
    h += '<span style="color:#889;font-size:11px;margin-left:10px;">' + esc(auth.section) + '</span>';
    h += '</div>';
    h += '</div>';
    h += '<div style="color:#c8d8e8;font-size:12px;line-height:1.5;margin-bottom:8px;">' + esc(auth.description) + '</div>';
    h += '<div style="display:flex;gap:20px;flex-wrap:wrap;font-size:11px;">';
    h += '<div><span style="color:#556;letter-spacing:1px;">APPLICABILITY: </span><span style="color:#ffaa00;">' + esc(auth.applicability) + '</span></div>';
    h += '<div><span style="color:#556;letter-spacing:1px;">APPROVAL: </span><span style="color:#00ff88;">' + esc(auth.approval) + '</span></div>';
    h += '</div>';
    h += '</div>';
  }

  h += '</div>';
  return h;
}

// ============================================================================
// CYBER DETERRENCE FRAMEWORK
// ============================================================================
var DETERRENCE_PILLARS = [
  { name: 'DENIAL', description: 'Make attacks costly and unlikely to succeed by hardening defenses, improving resilience, and reducing attack surface.', measures: ['Zero Trust Architecture deployment', 'Critical infrastructure air-gapping', 'Rapid patching programs', 'Redundancy and failover systems', 'Supply chain security requirements'], effectiveness: 7 },
  { name: 'PUNISHMENT', description: 'Impose costs on adversaries through sanctions, indictments, diplomatic consequences, and offensive operations.', measures: ['Economic sanctions (EO 13694, EO 13757)', 'Criminal indictments (DOJ Cyber Division)', 'Diplomatic demarches and public attribution', 'Offensive cyber counter-operations', 'Coalition responses (joint attributions)'], effectiveness: 5 },
  { name: 'ENTANGLEMENT', description: 'Create mutual dependencies that make attacks costly for the attacker\'s own interests.', measures: ['Trade relationships and supply chain interdependence', 'Shared technology platforms', 'Diplomatic and institutional engagement', 'Information sharing agreements', 'Joint research and development'], effectiveness: 4 },
  { name: 'NORMS', description: 'Establish and enforce international norms against targeting critical infrastructure and civilian systems.', measures: ['UN GGE cyber norms framework', 'Paris Call for Trust and Security', 'Bilateral cyber agreements', 'Tallinn Manual legal framework', 'OSCE confidence-building measures'], effectiveness: 3 }
];

function renderDeterrenceFramework() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('CYBER DETERRENCE FRAMEWORK', 'Four pillars of national cyber deterrence strategy');

  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">';
  for (var d = 0; d < DETERRENCE_PILLARS.length; d++) {
    var pillar = DETERRENCE_PILLARS[d];
    var effColor = pillar.effectiveness >= 7 ? '#00ff88' : pillar.effectiveness >= 5 ? '#ffaa00' : '#ff6622';

    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:8px;overflow:hidden;">';
    h += '<div style="background:linear-gradient(135deg,#0a1628,#0d1f3c);padding:16px;border-bottom:1px solid #1a3a5c;text-align:center;">';
    h += '<div style="color:#00aaff;font-size:18px;font-weight:bold;font-family:monospace;letter-spacing:3px;">' + esc(pillar.name) + '</div>';
    h += '<div style="color:#889;font-size:10px;margin-top:6px;line-height:1.4;">' + esc(pillar.description) + '</div>';
    h += '</div>';

    h += '<div style="padding:14px 16px;">';
    h += '<div style="font-size:9px;color:#556;letter-spacing:1px;margin-bottom:8px;">KEY MEASURES</div>';
    for (var m = 0; m < pillar.measures.length; m++) {
      h += '<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:4px;">';
      h += '<span style="color:#00aaff;font-size:10px;margin-top:2px;">&#9656;</span>';
      h += '<span style="color:#c8d8e8;font-size:11px;">' + esc(pillar.measures[m]) + '</span>';
      h += '</div>';
    }

    h += '<div style="margin-top:12px;padding-top:10px;border-top:1px solid #1a3a5c;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">';
    h += '<span style="font-size:9px;color:#556;letter-spacing:1px;">ASSESSED EFFECTIVENESS</span>';
    h += '<span style="color:' + effColor + ';font-size:12px;font-weight:bold;font-family:monospace;">' + pillar.effectiveness + '/10</span>';
    h += '</div>';
    h += '<div style="width:100%;height:6px;background:#1a2a3c;border-radius:3px;overflow:hidden;">';
    h += '<div style="width:' + (pillar.effectiveness * 10) + '%;height:100%;background:' + effColor + ';border-radius:3px;"></div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
    h += '</div>';
  }
  h += '</div>';

  h += '</div>';
  return h;
}



// ============================================================================
// ADDITIONAL OPERATION DETAILS
// ============================================================================
HISTORICAL_OPERATIONS_DETAIL['op-020'] = {
  codename: 'OLYMPIC DESTROYER',
  attribution: 'Russia (GRU / Sandworm)',
  attributionConfidence: 96,
  fullDescription: 'During the opening ceremony of the 2018 PyeongChang Winter Olympics, Russian military hackers deployed destructive malware that disrupted the Olympic IT infrastructure. The attack took down the official Olympics website, Wi-Fi at the stadium, and broadcast systems. What made this attack particularly notable was its sophisticated false-flag operations: the malware contained deliberate code artifacts designed to point to North Korean (Lazarus) and Chinese (APT3/APT10) threat actors, making attribution significantly more difficult.',
  targets: ['PyeongChang 2018 Winter Olympics IT infrastructure', 'Official Olympics website', 'Stadium Wi-Fi and broadcast systems', 'Ticketing systems', 'Olympic accommodation networks'],
  ttps: [
    { technique: 'T1566.001', name: 'Spearphishing Attachment', detail: 'Targeted emails to Olympics partners and stakeholders' },
    { technique: 'T1078', name: 'Valid Accounts', detail: 'Stolen credentials from Olympics IT administrators' },
    { technique: 'T1036', name: 'Masquerading', detail: 'False-flag code artifacts pointing to Lazarus and Chinese APTs' },
    { technique: 'T1485', name: 'Data Destruction', detail: 'Destructive payload wiping systems during opening ceremony' },
    { technique: 'T1490', name: 'Inhibit System Recovery', detail: 'Boot record and backup destruction to prevent rapid recovery' }
  ],
  timeline: [
    { date: '2017-12', event: 'Sandworm begins reconnaissance of Olympic IT infrastructure' },
    { date: '2018-01', event: 'Credential harvesting from Olympic partners via spear-phishing' },
    { date: '2018-02-09 20:00', event: 'Opening ceremony begins in PyeongChang' },
    { date: '2018-02-09 20:15', event: 'Olympic Destroyer malware activated' },
    { date: '2018-02-09 20:30', event: 'Olympics website goes down, Wi-Fi fails in stadium' },
    { date: '2018-02-09 21:00', event: 'Broadcast drones grounded due to IT issues' },
    { date: '2018-02-10', event: 'Olympics IT team begins 12-hour recovery effort' },
    { date: '2018-02-12', event: 'Systems restored; investigation begins' },
    { date: '2018-02-14', event: 'False-flag indicators cause initial misattribution to NK/China' },
    { date: '2018-10', event: 'US DOJ indicts 7 GRU officers including Olympic Destroyer operators' }
  ],
  toolsUsed: ['Olympic Destroyer wiper', 'Credential harvesting tools', 'False-flag code implants', 'Lateral movement via PsExec and WMI', 'Custom C2 infrastructure'],
  impact: 'Olympics website down for 12 hours during opening ceremony. Stadium Wi-Fi and ticketing systems disrupted. Broadcast operations affected. 12+ hours of recovery effort by hundreds of IT staff. Significant reputation damage to Olympic cybersecurity.',
  significance: 'Demonstrated sophisticated false-flag capabilities in cyber operations. Complicated attribution processes for the security community. Showed willingness to target major international events. Led to increased cyber security planning for subsequent Olympic games.',
  lessonsLearned: ['False-flag operations can significantly delay attribution', 'Major international events are high-profile targets', 'Destructive attacks can be timed for maximum embarrassment', 'Pre-event cybersecurity planning must account for nation-state threats', 'Code-level attribution evidence can be deliberately planted']
};

HISTORICAL_OPERATIONS_DETAIL['op-024'] = {
  codename: 'PROXYLOGON / HAFNIUM',
  attribution: 'China (Hafnium / MSS-affiliated)',
  attributionConfidence: 94,
  fullDescription: 'Chinese state-sponsored hackers from the Hafnium group exploited four zero-day vulnerabilities in Microsoft Exchange Server (CVE-2021-26855, CVE-2021-26857, CVE-2021-26858, CVE-2021-27065) to gain access to on-premises Exchange servers worldwide. The initial targeted espionage campaign was followed by mass exploitation after the vulnerabilities became public knowledge, resulting in web shells being deployed to an estimated 250,000+ Exchange servers globally. Multiple other threat actors, including ransomware groups, quickly adopted the exploits.',
  targets: ['US defense contractors', 'Think tanks and policy organizations', 'Law firms', 'Infectious disease researchers', 'Higher education institutions', 'Subsequently: 250,000+ Exchange servers globally'],
  ttps: [
    { technique: 'T1190', name: 'Exploit Public-Facing Application', detail: 'Chained 4 Exchange zero-days for pre-authentication RCE' },
    { technique: 'T1505.003', name: 'Web Shell', detail: 'China Chopper and custom ASPX web shells for persistent access' },
    { technique: 'T1003', name: 'OS Credential Dumping', detail: 'Credential harvesting post-exploitation' },
    { technique: 'T1560', name: 'Archive Collected Data', detail: 'Email mailbox export via Exchange PowerShell' },
    { technique: 'T1041', name: 'Exfiltration Over C2 Channel', detail: 'Data exfiltration via web shell C2' }
  ],
  timeline: [
    { date: '2021-01-03', event: 'First known Hafnium exploitation of Exchange zero-days' },
    { date: '2021-01-06', event: 'Volexity detects suspicious activity on Exchange servers' },
    { date: '2021-01-18', event: 'Volexity reports vulnerabilities to Microsoft' },
    { date: '2021-02-02', event: 'DEVCORE independently reports Exchange zero-days to Microsoft' },
    { date: '2021-02-27', event: 'Mass exploitation begins — thousands of servers compromised daily' },
    { date: '2021-03-02', event: 'Microsoft releases emergency out-of-band patches' },
    { date: '2021-03-03', event: 'CISA issues Emergency Directive 21-02' },
    { date: '2021-03-05', event: 'Estimated 30,000+ US organizations compromised' },
    { date: '2021-03-12', event: 'FBI authorized to remotely remove web shells from compromised servers' },
    { date: '2021-07', event: 'US and allies formally attribute to China\'s MSS' }
  ],
  toolsUsed: ['ProxyLogon exploit chain', 'China Chopper web shell', 'Custom ASPX web shells', 'PowerShell mailbox export', 'Nishang (open-source)', 'Covenant C2 framework', 'DearCry ransomware (follow-on by others)'],
  impact: '250,000+ Exchange servers compromised globally. 30,000+ US organizations affected. Web shells left persistent access even after patching. Multiple follow-on campaigns by other actors exploiting same vulnerabilities. FBI took unprecedented step of remotely removing web shells.',
  significance: 'Demonstrated speed at which targeted espionage can escalate to mass exploitation. First time FBI remotely remediated privately-owned servers. Led to multinational attribution of Chinese cyber operations. Showed the risk of on-premises email infrastructure. Accelerated cloud email migration.',
  lessonsLearned: ['On-premises Exchange servers are high-value targets', 'Zero-day exploit chains can be devastating at scale', 'Patching alone is insufficient — web shells persist post-patch', 'Mass exploitation can follow targeted campaigns very rapidly', 'Government-authorized remediation of private systems may be necessary in extreme cases']
};

// ============================================================================
// NETWORK TOPOLOGY VISUALIZATION DATA
// ============================================================================
var GLOBAL_NETWORK_CHOKEPOINTS = [
  { name: 'Undersea Cable — Atlantic (TAT-14)', importance: 'CRITICAL', threatLevel: 3, description: 'Trans-Atlantic telecommunications cable connecting US East Coast to Europe. Carries significant portion of US-Europe internet traffic and financial data.', risks: ['Physical cable cutting', 'Submarine tapping operations', 'Landing station compromise', 'BGP route manipulation'] },
  { name: 'Undersea Cable — Pacific (FASTER)', importance: 'CRITICAL', threatLevel: 4, description: 'Trans-Pacific cable connecting US West Coast to Japan. Critical for military communications in Indo-Pacific theater.', risks: ['Chinese submarine surveillance', 'Landing station espionage', 'Route redirection attacks', 'Capacity degradation'] },
  { name: 'Internet Exchange Point — DE-CIX Frankfurt', importance: 'HIGH', threatLevel: 3, description: 'World\'s largest internet exchange by peak traffic. Critical routing point for European internet traffic.', risks: ['Physical compromise', 'BGP hijacking', 'Traffic mirroring', 'DDoS targeting'] },
  { name: 'DNS Root Servers', importance: 'CRITICAL', threatLevel: 2, description: '13 root server letter designations serving the global DNS hierarchy. Critical for all internet name resolution.', risks: ['DDoS amplification', 'Cache poisoning', 'BGP prefix hijacking', 'Physical infrastructure targeting'] },
  { name: 'SWIFT Financial Network', importance: 'CRITICAL', threatLevel: 4, description: 'Society for Worldwide Interbank Financial Telecommunication. Backbone of international financial messaging.', risks: ['Endpoint compromise (Bangladesh Bank model)', 'Message manipulation', 'Insider threats', 'Service disruption'] },
  { name: 'GPS Constellation Ground Control', importance: 'CRITICAL', threatLevel: 3, description: 'Ground control stations managing GPS satellite constellation. Essential for military and civilian navigation.', risks: ['Ground station cyber compromise', 'Signal spoofing', 'Satellite command injection', 'Jamming'] },
  { name: 'Cloud Provider Backbone (AWS us-east-1)', importance: 'CRITICAL', threatLevel: 3, description: 'Amazon Web Services primary US region. Hosts enormous portion of US government and commercial cloud workloads.', risks: ['Control plane compromise', 'Identity federation attacks', 'Region-level outage', 'Supply chain'] },
  { name: 'BGP Route Reflectors (Tier 1 ISPs)', importance: 'CRITICAL', threatLevel: 3, description: 'Core routing infrastructure at Tier 1 ISPs that determines global internet traffic flow.', risks: ['Route hijacking', 'Route leak', 'Prefix de-aggregation', 'AS path manipulation'] }
];

function renderNetworkChokepoints() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('GLOBAL NETWORK CHOKEPOINTS', 'Critical infrastructure nodes in global communications');

  for (var n = 0; n < GLOBAL_NETWORK_CHOKEPOINTS.length; n++) {
    var node = GLOBAL_NETWORK_CHOKEPOINTS[n];
    var impColors = { 'CRITICAL': '#ff2244', 'HIGH': '#ff6622', 'MEDIUM': '#ffaa00' };
    var ic = impColors[node.importance] || '#889';

    h += '<div style="background:#0a0e1a;border:1px solid #1a3a5c;border-radius:6px;margin-bottom:10px;padding:14px 18px;">';
    h += '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px;">';
    h += '<div style="display:flex;align-items:center;gap:10px;">';
    h += '<span style="color:#c8d8e8;font-size:13px;font-weight:bold;">' + esc(node.name) + '</span>';
    h += renderSeverityBadge(node.importance);
    h += '</div>';
    h += renderThreatLevelIndicator(node.threatLevel);
    h += '</div>';
    h += '<div style="color:#889;font-size:11px;line-height:1.4;margin-bottom:8px;">' + esc(node.description) + '</div>';
    h += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
    for (var r = 0; r < node.risks.length; r++) {
      h += '<span style="background:#1a0a0a;border:1px solid #ff224433;color:#ff8866;padding:3px 8px;border-radius:3px;font-size:9px;">' + esc(node.risks[r]) + '</span>';
    }
    h += '</div>';
    h += '</div>';
  }

  h += '</div>';
  return h;
}



// ============================================================================
// CONGRESSIONAL NOTIFICATION TRACKER DATA
// ============================================================================
var CONGRESSIONAL_NOTIFICATIONS = [
  { id: 'cn-001', date: '2026-09-12', committee: 'SSCI (Senate Select Committee on Intelligence)', topic: 'Chinese telecom infiltration expansion (Salt Typhoon)', status: 'BRIEFED', classification: 'TS//SCI', notifyType: 'Gang of 8', details: 'Detailed briefing on expanded Salt Typhoon operations and remediation timeline' },
  { id: 'cn-002', date: '2026-09-10', committee: 'HPSCI (House Permanent Select Committee on Intelligence)', topic: 'Russian pre-positioning near NATO CI', status: 'BRIEFED', classification: 'TS//SCI', notifyType: 'Full committee', details: 'Update on Sandworm activities targeting Baltic allied infrastructure' },
  { id: 'cn-003', date: '2026-09-08', committee: 'Senate Armed Services', topic: 'CYBERCOM hunt-forward deployment authorization', status: 'NOTIFIED', classification: 'SECRET', notifyType: 'Chairman/Ranking', details: 'Notification per Title 10 requirements for overseas cyber operations' },
  { id: 'cn-004', date: '2026-09-05', committee: 'House Homeland Security', topic: 'Critical infrastructure vulnerability assessment update', status: 'PENDING', classification: 'SECRET//NOFORN', notifyType: 'Full committee', details: 'Quarterly update on national critical infrastructure cybersecurity posture' },
  { id: 'cn-005', date: '2026-09-01', committee: 'Senate Commerce', topic: 'Telecom sector security improvements under FCC order', status: 'BRIEFED', classification: 'UNCLASSIFIED//FOUO', notifyType: 'Full committee', details: 'Progress on carrier implementation of enhanced security requirements post-Salt Typhoon' },
  { id: 'cn-006', date: '2026-08-28', committee: 'SSCI + HPSCI (Joint)', topic: 'Annual cyber threat landscape assessment', status: 'BRIEFED', classification: 'TS//SCI//SAP', notifyType: 'Gang of 8', details: 'Comprehensive annual assessment of nation-state cyber threats to US interests' },
  { id: 'cn-007', date: '2026-08-20', committee: 'Senate Judiciary', topic: 'North Korean cryptocurrency theft and sanctions evasion', status: 'NOTIFIED', classification: 'SECRET', notifyType: 'Chairman/Ranking', details: 'DOJ/FBI update on Lazarus Group financial operations and prosecution efforts' },
  { id: 'cn-008', date: '2026-09-15', committee: 'House Armed Services', topic: 'CYBERCOM budget and force structure review', status: 'SCHEDULED', classification: 'SECRET', notifyType: 'Cyber subcommittee', details: 'Upcoming hearing on FY2027 CYBERCOM resource requirements' }
];

function renderCongressionalTracker() {
  var h = '';
  h += '<div style="padding:16px 0;">';
  h += renderSectionHeader('CONGRESSIONAL NOTIFICATION TRACKER', 'Legislative oversight and briefing status');
  var headers = ['DATE', 'COMMITTEE', 'TOPIC', 'STATUS', 'TYPE'];
  var rows = [];
  for (var cn = 0; cn < CONGRESSIONAL_NOTIFICATIONS.length; cn++) {
    var notif = CONGRESSIONAL_NOTIFICATIONS[cn];
    rows.push([notif.date, notif.committee, notif.topic, notif.status, notif.notifyType]);
  }
  h += renderDataGrid(headers, rows);
  h += '</div>';
  return h;
}


export function renderSentinelEye(main) {
  if (!main) return;

  // Insert styles
  var styleEl = document.createElement('div');
  styleEl.innerHTML = buildStyles();
  document.head.appendChild(styleEl.firstChild);

  // Build main shell
  main.innerHTML = '<div class="se-wrapper">' + renderMainShell() + '</div>';

  // Render default tab (Situational Awareness)
  switchTab('situation');

  // Initialize world map canvas (after DOM insertion)
  setTimeout(function() {
    var mapEl = document.getElementById('se-world-map');
    if (mapEl) {
      initWorldMap('se-world-map');
    }
  }, 100);

  // Initialize scrolling alert ticker
  initTicker();

  // Initialize all event handlers
  initEventHandlers();

  // Load saved state
  var saved = _seLoadState();
  if (saved && saved.activeTab && saved.activeTab !== 'situation') {
    switchTab(saved.activeTab);
  }
}
