// Specifications data for all Archon models
export interface SpecsData {
  id: string;
  name: string;
  heroTagline: string;
  thumbnail?: string;
  specs: {
    engine: {
      type: string;
      powerHP: number;
      powerKW: number;
      torqueLbFt: number;
      torqueNm: number;
      accel0to60s: number;
    };
    performance: {
      topSpeedMph: number;
      topSpeedKmh: number;
      quarterMileS: number;
      rangeMiles: number;
      charging10to80Min: number;
    };
    design: {
      weightLbs: number;
      weightKg: number;
      lengthIn: number;
      lengthMm: number;
      widthIn: number;
      widthMm: number;
      heightIn: number;
      heightMm: number;
    };
    technology: {
      infotainment: string;
      audio: string;
      connectivity: string;
      autonomousLevel: string;
    };
  };
}

export const specsData: SpecsData[] = [
  {
    id: "phantom-elite",
    name: "ARC Phantom Elite",
    heroTagline: "The Ultimate Luxury Experience",
    thumbnail: "/cars/10.jpg",
    specs: {
      engine: {
        type: "6.0L V12 Twin-Turbo Hybrid",
        powerHP: 847,
        powerKW: 632,
        torqueLbFt: 1050,
        torqueNm: 1424,
        accel0to60s: 2.8,
      },
      performance: {
        topSpeedMph: 211,
        topSpeedKmh: 340,
        quarterMileS: 10.4,
        rangeMiles: 400,
        charging10to80Min: 18,
      },
      design: {
        weightLbs: 3200,
        weightKg: 1451,
        lengthIn: 185.4,
        lengthMm: 4709,
        widthIn: 76.3,
        widthMm: 1938,
        heightIn: 48.9,
        heightMm: 1242,
      },
      technology: {
        infotainment: "15.6\" 4K OLED Display",
        audio: "Bespoke 1,400W System",
        connectivity: "5G + Wi-Fi 6E",
        autonomousLevel: "Level 3 Capability",
      },
    },
  },
  {
    id: "thunder-sport",
    name: "ARC Thunder Sport",
    heroTagline: "Pure Performance Unleashed",
    thumbnail: "/cars/11.jpg",
    specs: {
      engine: {
        type: "5.2L V10 Naturally Aspirated",
        powerHP: 720,
        powerKW: 537,
        torqueLbFt: 553,
        torqueNm: 750,
        accel0to60s: 3.1,
      },
      performance: {
        topSpeedMph: 205,
        topSpeedKmh: 330,
        quarterMileS: 10.8,
        rangeMiles: 320,
        charging10to80Min: 0, // ICE vehicle
      },
      design: {
        weightLbs: 2980,
        weightKg: 1352,
        lengthIn: 182.1,
        lengthMm: 4625,
        widthIn: 75.8,
        widthMm: 1925,
        heightIn: 47.2,
        heightMm: 1199,
      },
      technology: {
        infotainment: "12.3\" Digital Cockpit",
        audio: "Premium 980W System",
        connectivity: "4G LTE + Wi-Fi 6",
        autonomousLevel: "Level 2 Assist",
      },
    },
  },
  {
    id: "luxe-grand-tourer",
    name: "ARC Luxe Grand Tourer",
    heroTagline: "Elegance Meets Performance",
    thumbnail: "/cars/12.jpg",
    specs: {
      engine: {
        type: "4.0L V8 Twin-Turbo",
        powerHP: 580,
        powerKW: 432,
        torqueLbFt: 516,
        torqueNm: 700,
        accel0to60s: 3.8,
      },
      performance: {
        topSpeedMph: 186,
        topSpeedKmh: 299,
        quarterMileS: 11.9,
        rangeMiles: 380,
        charging10to80Min: 0, // ICE vehicle
      },
      design: {
        weightLbs: 3420,
        weightKg: 1551,
        lengthIn: 189.2,
        lengthMm: 4806,
        widthIn: 77.1,
        widthMm: 1958,
        heightIn: 50.4,
        heightMm: 1280,
      },
      technology: {
        infotainment: "14.2\" Touchscreen",
        audio: "Premium 1,200W System",
        connectivity: "5G + Wi-Fi 6",
        autonomousLevel: "Level 2+ Advanced",
      },
    },
  },
  {
    id: "electric-vision",
    name: "ARC Electric Vision",
    heroTagline: "The Future of Luxury",
    thumbnail: "/cars/13.jpg",
    specs: {
      engine: {
        type: "Dual Electric Motors",
        powerHP: 680,
        powerKW: 507,
        torqueLbFt: 885,
        torqueNm: 1200,
        accel0to60s: 2.9,
      },
      performance: {
        topSpeedMph: 174,
        topSpeedKmh: 280,
        quarterMileS: 10.6,
        rangeMiles: 450,
        charging10to80Min: 22,
      },
      design: {
        weightLbs: 4100,
        weightKg: 1860,
        lengthIn: 187.8,
        lengthMm: 4770,
        widthIn: 76.8,
        widthMm: 1951,
        heightIn: 49.6,
        heightMm: 1260,
      },
      technology: {
        infotainment: "17\" 4K OLED Display",
        audio: "Immersive 1,600W System",
        connectivity: "5G + Wi-Fi 6E + Starlink",
        autonomousLevel: "Level 4 Ready",
      },
    },
  },
];