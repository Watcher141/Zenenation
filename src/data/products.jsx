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
    price: "₹99",
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
    price: "₹99",
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
    price: "₹99",
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
        label: "Iron Man",
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
        label: "CR7",
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
    price: "₹99",
    images: [
      "/images/fcall.png"
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
        label: "Lavender Cat",
        price: "₹99",
        image: "/images/fc1.png",
        description:
          "A vibrant lavender hoodie-themed face-changing keychain featuring a playful mood swing mechanism."
      },
      {
        variantId: "p1-v2",
        label: "Doraemon",
        price: "₹99",
        image: "/images/fc2.png",
        description:
          "Doraemon-inspired face-changing keychain wearing a blue hoodie that cycles through different iconic expressions."
      },
      {
        variantId: "p1-v3",
        label: "Capybara",
        price: "₹99",
        image: "/images/fc3.png",
        description:
          "This orange capybara face-changing keychain features a hooded design that swaps between different adorable expressions."
      },
      {
        variantId: "p1-v4",
        label: "Spider-Man",
        price: "₹99",
        image: "/images/fc4.png",
        description:
          "This Spider-Man inspired red face-changing keychain features a hooded superhero design that rotates through various iconic web-slinger expressions."
      },
      {
        variantId: "p1-v5",
        label: "Gojo Satoru",
        price: "₹99",
        image: "/images/fc5.png",
        description:
          "This anime-inspired Gojo Satoru face-changing keychain features a dark blue hoodie design that rotates through different iconic expressions."
      },
      {
        variantId: "p1-v6",
        label: "Lotso Bear",
        price: "₹99",
        image: "/images/fc6.png",
        description:
          "This Lotso-inspired pink bear face-changing keychain features a cozy hoodie design that cycles through various grumpy and sweet expressions."
      },
      {
        variantId: "p1-v7",
        label: "Shin-chan",
        price: "₹99",
        image: "/images/fc7.png",
        description:
          "This Shin-chan inspired yellow face-changing keychain features a hooded design that cycles through various funny expressions."
      },
      {
        variantId: "p1-v8",
        label: "Hello Kitty",
        price: "₹99",
        image: "/images/fc8.png",
        description:
          "This My Melody-inspired pink face-changing keychain features a cute hooded design that cycles through various sweet and winking expressions."
      },
      {
        variantId: "p1-v9",
        label: "Green Liz",
        price: "₹99",
        image: "/images/fc9.png",
        description:
          "This lime green hoodie-themed face-changing keychain features a playful winking character that swaps between different expressions."
      },
      {
        variantId: "p1-v10",
        label: "Squid Game",
        price: "₹99",
        image: "/images/fc10.png",
        description:
          "This Squid Game-inspired red face-changing keychain features a hooded guard design that cycles through iconic mask symbols."
      },
      {
        variantId: "p1-v11",
        label: "Tanjiro Kamado",
        price: "₹99",
        image: "/images/fc11.png",
        description:
          "This Demon Slayer-inspired teal face-changing keychain features Tanjiro in a hooded design that cycles through various determined and fierce expressions."
      },
      {
        variantId: "p1-v12",
        label: "Captain America",
        price: "₹99",
        image: "/images/fc12.png",
        description:
          "This Captain America-inspired blue face-changing keychain features a hooded superhero design that cycles through various determined and heroic expressions."
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
      "/images/KatanaAll2.jpg"
    ],
    description:
      "Mini katana sword keychain inspired by Japanese anime swords with detailed blade and sheath.",
    isNew: true,
    isFeatured: false,
    popularityScore: 72,
    hasVariants: true,
    variants: [
      {
        variantId: "p6-v1",
        label: "Shusui",
        price: "₹139",
        image: "/images/katana.jpg",
        description:
          "Zoro's Shusui inspired Mini katana keychain featuring a sleek stainless steel blade, detailed handle wrap, and decorative sheath—perfect as a collectible or stylish everyday accessory."
      },
      {
        variantId: "p6-v2",
        label: "Yubashiri ",
        price: "₹139",
        image: "/images/Katana3.jpg",
        description:
          "Zoro's Yubashiri inspired Premium mini katana keychain with a polished steel blade, elegant black-and-gold detailing, and durable sheath—an eye-catching collectible and everyday carry accessory."
      },
      {
        variantId: "p6-v3",
        label: "Wado Ichimonji ",
        price: "₹139",
        image: "/images/Katana2.jpg",
        description:
          "Zoro's Wado Ichimonji inspired Elegant white mini katana keychain with a polished steel blade, gold-accented fittings, and matching sheath—perfect for collectors and stylish everyday carry."
      }

    ]
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
        price: "₹199",
        image: "/images/butterfly2.jpg",
        description:
          "Gold Blade is a premium butterfly-style metal knife featuring exquisite engraved detailing and a polished, upscale finish. Designed as a statement collectible, it is perfect for display in refined collections."
      },
      {
        variantId: "p7-v2",
        label: "Cyber Mecha Green",
        price: "₹199",
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
      "/images/Labubu3.jpg"
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
        price: "₹219",
        image: "/images/labubu.jpg",
        description:
          "Adorable Labubu collectable doll with soft body, long ears, and premium craftsmanship."
      }
    ]
  },

  {
    id: "p9",
    category: "poster",
    name: "Custom Poster",
    price: "₹99",
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
    price: "₹289",
    images: [
      "/images/Custom_Mug.png"
    ],
    description:
      "Premium customized mug printed with your chosen image or design.",
    isNew: true,
    isFeatured: false,
    popularityScore: 80,
    hasVariants: true,
    variants: [
      {
        variantId: "p10-v1",
        label: "Customization Steps",
        price: "₹289",
        image: "/images/Customization_steps.png",
        description:
          "Follow the Steps for Customization."
      },
      
      {
        variantId: "p10-v2",
        label: "After Customization",
        price: "₹289",
        image: "/images/Custom_Mug2.png",
        description:
          "After Costomization The Mug will look like this."
      }
    ]

  },

  {
    id: "p11",
    category: "mug",
    name: "Magic Mug",
    price: "₹489",
    images: [
      "/images/Magic_mug.png"
    ],
    description:
      "Heat-sensitive magic mug that reveals your design when hot liquid is poured.",
    isNew: false,
    isFeatured: true,
    popularityScore: 88,
    hasVariants: true,
    variants: [
      {
        variantId: "p11-v1",
        label: "Customization Steps",
        price: "₹489",
        image: "/images/Customization_steps.png",
        description:
          "Follow the Steps for Customization."
      }
    ]
  },

  {
    id: "p12",
    category: "Posters",
    name: "Our special collection",
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
