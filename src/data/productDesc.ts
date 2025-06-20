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
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4th31YnTMQxIZgwJ6Asjc8qCH9p3fTbLizXG7",
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
    name: "ZURA",
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4iBhefsdUFZRQAlS6X5sDxHjLyO28cPvqafpz",
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
    name: "WALLPOD",
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4OQZcRfFxp0fCArKzNqWVH9hDSIudtYRjsQ35",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 4,
    name: "ULTRACHARGE 240",
    kind: ["Commercial"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4C6ZHTdAv4kJwCQGRILWc9eZ68t7fjSD3sXar",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 5,
    name: "ULTRACHARGE 160",
    kind: ["Commercial"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4i3AbaODdUFZRQAlS6X5sDxHjLyO28cPvqafp",  
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 6,
    name: "ULTRACHARGE 80",
     kind: ["Commercial"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4DYseVUKBFwkqndIUmgS8A7vGcx6R93p2s4eo",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 7,
    name: "TAP AND CHARGE",
     kind: ["Home"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4NYfwVPET8HPltUzr3MxfQEe6vISywBObZRYm",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 8,
    name: "SECURICHARGE",
     kind: ["Back Office"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4MBB9JxHgUmxjFZiVpyo4q6BfLwcGd7WP9eHl",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 9,
    name: "QUBEV Smart",
     kind: ["Home"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4AuXMg3SpdGmauSBF6MVtyfJQwgl8CHsXTWPA",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 10,
    name: "QUANTUM",
    kind: ["Commercial"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4OhQwxXFxp0fCArKzNqWVH9hDSIudtYRjsQ35",
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
    name: "PERIFIC FUSE",
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4Ax1bCoJSpdGmauSBF6MVtyfJQwgl8CHsXTWP",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 12,
    name: "CONSUMER UNITS",
     kind: ["Commercial"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS41yptBwLNnRThgxa6zWmEXC7roiuY3kJjKDPM",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 13,
    name: "CHARGECHECK",
     kind: ["Back Office"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4YNoazkvMwd9fFlRJku46VnP8qXOp2mHTW0jr",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 14,
    name: "BASIC CHARGE",
     kind: ["Home"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4dNbHD2J5RpT0mvrQsxWfL1oS6u9wknZCtGKA",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
  {
    id: 15,
    name: "AUTOCHARGE",
     kind: ["AC"],
    image: "https://dwqsg9sdff.ufs.sh/f/RtbpbkCLpXS4KtNmkmZItYism3k1FTh7Nlxna49bgJoRSp2Z",
    description: "Premium charging station...",
    materials: ["Unit & fascia - High impact resistant","Polycarbonate","Mounting back plate - 1.5mm","Steel with black powder coated finish","Rear bracket plate - 1.5mm 316 Stainless","Steel"],
    enclosure_dimensions: ["260mm (W)", "410mm (H)", "157mm (D)"],
    charge_protocol: ["Mode 3"],
    input_voltage: ["230V AC (±10 %)", "50/60Hz (Single Phase)", "400V AC (±10 %)", "50/60Hz (3 Phase)"],
    protection: ["Over current protection, DC fault protection", "- 6mA, Lightning surge, over temperature", "protection, PME fault detection, Load", "balancing"]
  },
];