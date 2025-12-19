export type Place = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const places: Place[] = [
  {
    id: "harbour-walk",
    title: "Harbour Walk",
    description: "Early light, boats, coffee — the best start to the day.",
    image: "/images/explore/harbour-walk.jpg",
    link: "/explore",
  },
  {
    id: "north-beach",
    title: "North Beach",
    description: "Wide sand, sea air and a proper reset.",
    image: "/images/explore/north-beach.jpg",
    link: "/explore",
  },
  {
    id: "castle-hill",
    title: "Castle Hill",
    description: "A short climb to panoramic views over Tenby and beyond.",
    image: "/images/explore/castle-hill.jpg",
    link: "/explore",
  },
  {
    id: "dinner-in-town",
    title: "Dinner in Town",
    description: "We’ll point you to the best table depending on the night.",
    image: "/images/explore/dinner-in-town.jpg",
    link: "/explore",
  },
];
