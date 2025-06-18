export interface ProductType {
  id: number;
  kind: string[];
  name: string;
  image: string;
  description: string;
  materials: string[];
  enclosure_dimensions: string[];
  charge_protocol: string[];
  input_voltage: string[];
  protection: string[];
}

export const productsArray: ProductType[] = [
  {
    id: 1,
    kind: ["Home","Commercial"],
    name: "EVO",
    image: "/assets/product-images/evo.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 2,
    kind:["Home"],
    name: "EVO",
    image: "/assets/product-images/zura.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 3,
    kind: ["Home"],
    name: "EVO",
    image: "/assets/product-images/wallpod.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 4,
    name: "EVO",
    kind: ["Commercial"],
    image: "/assets/product-images/ultracharge_240.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 5,
    name: "EVO",
    kind: ["Commercial"],
    image: "/assets/product-images/ultracharge_160.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 6,
    name: "EVO",
     kind: ["Commercial"],
    image: "/assets/product-images/ultracharge_80.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 7,
    name: "EVO",
     kind: ["Home"],
    image: "/assets/product-images/tap_and_charge.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 8,
    name: "EVO",
     kind: ["Back Office"],
    image: "/assets/product-images/securicharge.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 9,
    name: "EVO",
     kind: ["Home"],
    image: "/assets/product-images/qubev_smart.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 10,
    name: "EVO",
    kind: ["Commercial"],
    image: "/assets/product-images/quantum.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 11,
    kind:["Accessories"],
    name: "EVO",
    image: "/assets/product-images/perific_fuse.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 12,
    name: "EVO",
     kind: ["Commercial"],
    image: "/assets/product-images/ev_consumer_units.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 13,
    name: "EVO",
     kind: ["Back Office"],
    image: "/assets/product-images/chargecheck.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 14,
    name: "EVO",
     kind: ["Home"],
    image: "/assets/product-images/basic_charge.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 15,
    name: "EVO",
     kind: ["AC"],
    image: "/assets/product-images/autocharge.png",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
];