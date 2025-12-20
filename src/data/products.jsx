const readableNames = {
  keychain: "Keychains",
  mascot: "Mascots",
  armory: "Armory",
  mug: "Mugs",
  poster: "Posters",
};

export const products = [
  {
    id: "p1",
    category: "keychain",
    name: "Spider Man Keychain",
    basePrice: "₹259",
    images: [
      "/images/SpidereMan1.jpg"
    ],
    description:
      "Add superhero style to your keys with this adorable Spider-Man cartoon keychain. Made from high-quality soft PVC, lightweight, colorful, and perfect for Marvel fans.",
    isNew: true,
    isFeatured: true,
    popularityScore: 78,

    hasVariants: true,
    variants: [
      {
        variantId: "p1-v1",
        label: "Classic Red Suit",
        price: "₹99",
        image: "/images/spidyvar1.png",
        description:
          "Classic red Spider-Man keychain with vibrant colors and iconic suit design."
      },
      {
        variantId: "p1-v2",
        label: "Miles Suit",
        price: "₹99",
        image: "/images/spidyvar2.png",
        description:
          "Miles Morales suit Spider-Man keychain with a sleek, darker look for collectors."
      },
      {
        variantId: "p1-v3",
        label: "Chill Spidy",
        price: "₹99",
        image: "/images/spidyvar3.png",
        description:
          "Chill Spider-Man keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v4",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/spidyvar4.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      }
    ]

  },


  {
    id: "p2",
    category: "keychain",
    name: "Demon Slayer Keychain",
    // price: "₹99",
    images: [
      "/images/DemonSlayer.jpeg"
    ],
    description:
      "Stylish Demon Slayer anime keychain featuring detailed mini characters with a durable strap and metal ring.",
    isNew: true,
    isFeatured: false,
    popularityScore: 70,
    hasVariants: true,
    variants: [
      {
        variantId: "p2-v1",
        label: "Tanjiro Kamado",
        price: "₹99",
        image: "/images/Tanjiro.png",
        description:
          "A cute Demon Slayer–inspired chibi Tanjiro keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v2",
        label: "Gyu Tomioka",
        price: "₹99",
        image: "/images/Gyu.png",
        description:
          "A cute Demon Slayer–inspired chibi Gyu keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v3",
        label: "Zenitsu Agatsuma",
        price: "₹99",
        image: "/images/Zenitsu.png",
        description:
          "A cute Demon Slayer–inspired chibi Zenitsu keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v4",
        label: "Inosuke Hashibira",
        price: "₹99",
        image: "/images/Inosuke.png",
        description:
          "A cute Demon Slayer–inspired chibi Inosuke keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v5",
        label: "Nezuko Kamado",
        price: "₹99",
        image: "/images/Nezuko.png",
        description:
          "A cute Demon Slayer–inspired chibi Nezuko keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v6",
        label: "Shinobu Kocho",
        price: "₹99",
        image: "/images/Shinobu.png",
        description:
          "A cute Demon Slayer–inspired chibi Shinobu keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
    ]
  },

  {
    id: "p3",
    category: "keychain",
    name: "Metal Keychain",
    basePrice: "₹99",
    images: [
      "/images/metalkeychaain.png"
    ],
    description:
      "Premium Iron Man Arc Reactor spinner keychain crafted from high-quality metal with a polished finish.",
    isNew: false,
    isFeatured: true,
    popularityScore: 85,

    hasVariants: true,
    variants: [
      {
        variantId: "p3-v1",
        label: "Classic Red",
        price: "₹99",
        image: "/images/Ironman.png",
        description:
          "Classic red Iron Man keychain with vibrant colors and iconic suit design."
      },
      {
        variantId: "p3-v2",
        label: "Hand Blaster",
        price: "₹99",
        image: "/images/IronmanHand.png",
        description:
          "A bold Avengers-inspired metal keychain featuring the iconic powered hand design. Perfect for adding superhero energy to your keys, bag, or everyday carry"
      },
      {
        variantId: "p3-v3",
        label: "Hand Blaster",
        price: "₹99",
        image: "/images/CR7.png",
        description:
          "A cool football jersey–style keychain with a bold number 7 design. Perfect for CR7 fans to show off their love for the game on keys, bags, or backpacks"
      },
      {
        variantId: "p3-v4",
        label: "Joker",
        price: "₹99",
        image: "/images/joker.png",
        description:
          "A bold Joker-themed metal keychain with iconic artwork and attitude. Perfect for adding a little chaos and character to your keys or bag."
      },
      {
        variantId: "p3-v5",
        label: "Deadpool",
        price: "₹99",
        image: "/images/Deadpool.png",
        description:
          "A bold Deadpool-themed metal keychain with iconic artwork and attitude. Perfect for adding a little chaos and character to your keys or bag."
      },
      {
        variantId: "p3-v6",
        label: "Black Panther",
        price: "₹99",
        image: "/images/Blackpanter.png",
        description:
          "A bold Black Panther-themed metal keychain with iconic artwork and attitude. Perfect for adding a little chaos and character to your keys or bag."
      },
    ],
  },

  {
    id: "p4",
    category: "keychain",
    name: "Face Changing Keychain",
    basePrice: "₹99",
    images: [
      "/images/fc1.png"
    ],
    description:
      "Cute face-changing cartoon keychain with vibrant colors and smooth finishing.",
    isNew: true,
    isFeatured: true,
    popularityScore: 78,

    hasVariants: true,
    variants: [
      {
        variantId: "p1-v1",
        label: "Classic Red Suit",
        price: "₹99",
        image: "/images/fc1.png",
        description:
          "Classic red Spider-Man keychain with vibrant colors and iconic suit design."
      },
      {
        variantId: "p1-v2",
        label: "Miles Suit",
        price: "₹99",
        image: "/images/fc2.png",
        description:
          "Miles Morales suit Spider-Man keychain with a sleek, darker look for collectors."
      },
      {
        variantId: "p1-v3",
        label: "Chill Spidy",
        price: "₹99",
        image: "/images/fc3.png",
        description:
          "Chill Spider-Man keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v4",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc4.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v5",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc5.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v6",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc6.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v7",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc7.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v8",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc8.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v9",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc9.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v10",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc10.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v11",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc11.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v12",
        label: "Cool Spidy",
        price: "₹99",
        image: "/images/fc12.png",
        description:
          "Cool Spidy with headset to boot keychain with a sleek,look for collectors."
      }
    ]
  },

  // {
  //   id: "p5",
  //   category: "mascot",
  //   name: "Figurines",
  //   price: "₹179",
  //   images: [
  //     "/images/placeholder.png"
  //   ],
  //   description:
  //     "Beautifully detailed mini figurines perfect for desks, gifting, or collectible display.",
  //   isNew: true,
  //   isFeatured: false,
  //   popularityScore: 65
  // },

  {
    id: "p6",
    category: "armory",
    name: "Mini Katana",
    price: "₹139",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Mini katana sword keychain inspired by Japanese anime swords with detailed blade and sheath.",
    isNew: false,
    isFeatured: false,
    popularityScore: 72
  },

  {
    id: "p7",
    category: "armory",
    name: "Luxury Metal Butterfly Knife",
    price: "₹199",
    images: [
      "/images/butterfly1.jpg"
    ],
    description:
      "Luxury butterfly-style metal knife with engraved detailing and premium finish. Ideal as a display collectible.",
    isNew: false,
    isFeatured: true,
    popularityScore: 92,
    hasVariants: true,
    variants: [
      {
        variantId: "p7-v1",
        label: "Golden Blade",
        price: "₹99",
        image: "/images/butterfly2.jpg",
        description:
          "Gold Blade is a premium butterfly-style metal knife featuring exquisite engraved detailing and a polished, upscale finish. Designed as a statement collectible, it is perfect for display in refined collections."
      },
      {
        variantId: "p7-v2",
        label: "Cyber Mecha Green",
        price: "₹99",
        image: "/images/butterfly3.jpg",
        description:
          "Cyber Mecha Green is a futuristic butterfly-style metal knife featuring sharp geometric detailing, bold green and gold accents, and a sleek matte finish. Designed as a statement collectible, it’s ideal for display in modern and tech-inspired collections."
      }
    ]
  },

  {
    id: "p8",
    category: "mascot",
    name: "Labubu Doll",
    price: "₹219",
    images: [
      "/images/Labubu1.png"
    ],
    description:
      "Adorable Labubu plush doll with soft body, long ears, and premium craftsmanship.",
    isNew: true,
    isFeatured: false,
    popularityScore: 68,
    hasVariants: true,
    variants: [
      {
        variantId: "p8-v1",
        label: "Mistry Labubu",
        price: "₹99",
        image: "/images/Labubu2.png",
        description:
          "Adorable Labubu collectable doll with soft body, long ears, and premium craftsmanship."
      }
    ]
  },

  {
    id: "p9",
    category: "poster",
    name: "Custom Poster",
    price: "₹69",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Create your own premium customized poster by sending us your desired photo.",
    isNew: true,
    isFeatured: false,
    popularityScore: 75
  },

  {
    id: "p10",
    category: "mug",
    name: "Custom Mug",
    price: "₹249",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Premium customized mug printed with your chosen image or design.",
    isNew: true,
    isFeatured: false,
    popularityScore: 80
  },

  {
    id: "p11",
    category: "mug",
    name: "Magic Mug",
    price: "₹559",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Heat-sensitive magic mug that reveals your design when hot liquid is poured.",
    isNew: false,
    isFeatured: true,
    popularityScore: 88
  },

  {
    id: "p12",
    category: "Posters",
    name: "Our special collection",
    //price: "₹119",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Original Hot Wheels die-cast toy car, perfect for collectors and kids.",
    isNew: false,
    isFeatured: false,
    popularityScore: 67
  },

  {
    id: "p13",
    category: "Mug",
    name: "Custom Mugs",
    price: "₹119",
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Original Hot Wheels die-cast toy car, perfect for collectors and kids.",
    isNew: false,
    isFeatured: false,
    popularityScore: 67
  },
];
