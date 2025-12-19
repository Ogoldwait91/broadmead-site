export type Room = {
  id: string;
  title: string;
  description: string;
  image: string;
  beds: string;
  occupancy: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    id: "coastal-king",
    title: "Coastal King",
    description: "A spacious room with bay window overlooking the garden. King bed, ensuite shower.",
    image: "/images/rooms/coastal-king.jpg",
    beds: "1 king",
    occupancy: "2 adults",
    features: ["Ensuite shower","Garden view","Wi‑Fi","Tea & coffee"],
  },
  {
    id: "courtyard-double",
    title: "Courtyard Double",
    description: "Cosy and quiet, this double room opens onto our courtyard garden.",
    image: "/images/rooms/courtyard-double.jpg",
    beds: "1 double",
    occupancy: "2 adults",
    features: ["Ensuite shower","Courtyard view","Wi‑Fi","Tea & coffee"],
  },
  {
    id: "loft-twin",
    title: "Loft Twin",
    description: "Tucked under the eaves, perfect for friends or family with twin beds.",
    image: "/images/rooms/loft-twin.jpg",
    beds: "2 singles",
    occupancy: "2 adults",
    features: ["Ensuite bath","Skyline view","Wi‑Fi","Tea & coffee"],
  },
];
