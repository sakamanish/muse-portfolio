export type CollectionLook = {
  img: string;
  name: string;
  category: string;
  description: string;
};

const publicImage = (filename: string) => `/${filename}`;

export const collectionLooks: CollectionLook[] = [
  {
    img: publicImage("WhatsApp Image 2026-09-07 at 9.49.13 AM.jpeg"),
    name: "Marigold Chikankari Set",
    category: "Kurta Set",
    description: "A sunny embroidered kurta paired with airy white palazzos finished in delicate chikankari lace.",
  },
  {
    img: publicImage("WhatsApp Image 2026-09-07 at 9.49.13 AM (1).jpeg"),
    name: "Garden Bloom Lehenga",
    category: "Occasion Wear",
    description: "A soft floral crop top with a sheer, embroidered lehenga that moves lightly with every step.",
  },
  {
    img: publicImage("WhatsApp Image 2026-09-07 at 9.49.13 AM (2).jpeg"),
    name: "Indigo Lace-Up Dress",
    category: "Dresses",
    description: "A deep navy printed dress with long sleeves and a corset-inspired lace-up front.",
  },
  {
    img: publicImage("WhatsApp Image 2026-09-07 at 9.49.13 AM (3).jpeg"),
    name: "Indigo V-Neck Dress",
    category: "Dresses",
    description: "A relaxed V-neck silhouette in an intricate floral paisley print for easy day-to-evening dressing.",
  },
  {
    img: publicImage("WhatsApp Image 2026-09-07 at 9.49.13 AM (4).jpeg"),
    name: "Rosewood Fit & Flare",
    category: "Dresses",
    description: "A bright pink printed dress shaped with a clean fitted waist and an easy, full skirt.",
  },
];
