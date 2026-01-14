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
    price: 69,        // selling price (number, not string)
    mrp: 99,         // original price
    images: [
      "/images/SpidereMan1.jpg"
    ],
    description:
      "Add superhero style to your keys with this adorable Spider-Man cartoon keychain. Made from high-quality soft PVC, lightweight, colorful, and perfect for Marvel fans.",
    isNew: false,
    isFeatured: true,
    popularityScore: 78,

    hasVariants: true,
    variants: [
      {
        variantId: "p1-v1",
        label: "Classic Red Suit",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price
        image: "/images/spidyvar1.png",
        description:
          "Classic red Spider-Man keychain with vibrant colors and iconic suit design."
      },
      {
        variantId: "p1-v2",
        label: "Miles Suit",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/spidyvar2.png",
        description:
          "Miles Morales suit Spider-Man keychain with a sleek, darker look for collectors."
      },
      {
        variantId: "p1-v3",
        label: "Chill Spidy",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/spidyvar3.png",
        description:
          "Chill Spider-Man keychain with a sleek,look for collectors."
      },
      {
        variantId: "p1-v4",
        label: "Cool Spidy",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
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
    price: 69,        // selling price (number, not string)
    mrp: 99,         // original price,
    images: [
      "/images/DemonSlayer.jpeg"
    ],
    description:
      "Stylish Demon Slayer anime keychain featuring detailed mini characters with a durable strap and metal ring.",
    isNew: false,
    isFeatured: true,
    popularityScore: 70,
    hasVariants: true,
    variants: [
      {
        variantId: "p2-v1",
        label: "Tanjiro Kamado",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Tanjiro.png",
        description:
          "A cute Demon Slayer–inspired chibi Tanjiro keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v2",
        label: "Gyu Tomioka",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Gyu.png",
        description:
          "A cute Demon Slayer–inspired chibi Gyu keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v3",
        label: "Zenitsu Agatsuma",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Zenitsu.png",
        description:
          "A cute Demon Slayer–inspired chibi Zenitsu keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v4",
        label: "Inosuke Hashibira",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Inosuke.png",
        description:
          "A cute Demon Slayer–inspired chibi Inosuke keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v5",
        label: "Nezuko Kamado",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Nezuko.png",
        description:
          "A cute Demon Slayer–inspired chibi Nezuko keychain with bold colors and a matching silicone strap. Perfect for adding anime vibes to your keys, bag, or collection"
      },
      {
        variantId: "p2-v6",
        label: "Shinobu Kocho",
        price: 69,        // selling price (number, not string)
        mrp: 99,         // original price,
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
    price: 79,        // selling price (number, not string)
    mrp: 99,         // original price,
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
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Ironman.png",
        description:
          "Classic red Iron Man keychain with vibrant colors and iconic suit design."
      },
      {
        variantId: "p3-v2",
        label: "Hand Blaster",
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/IronmanHand.png",
        description:
          "A bold Avengers-inspired metal keychain featuring the iconic powered hand design. Perfect for adding superhero energy to your keys, bag, or everyday carry"
      },
      {
        variantId: "p3-v3",
        label: "CR7",
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/CR7.png",
        description:
          "A cool football jersey–style keychain with a bold number 7 design. Perfect for CR7 fans to show off their love for the game on keys, bags, or backpacks"
      },
      {
        variantId: "p3-v4",
        label: "Joker",
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/joker.png",
        description:
          "A bold Joker-themed metal keychain with iconic artwork and attitude. Perfect for adding a little chaos and character to your keys or bag."
      },
      {
        variantId: "p3-v5",
        label: "Deadpool",
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
        image: "/images/Deadpool.png",
        description:
          "A bold Deadpool-themed metal keychain with iconic artwork and attitude. Perfect for adding a little chaos and character to your keys or bag."
      },
      {
        variantId: "p3-v6",
        label: "Black Panther",
        price: 79,        // selling price (number, not string)
        mrp: 99,         // original price,
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
    price: 79,        // selling price (number, not string)
    mrp: 109,         // original price,
    images: [
      "/images/fcall.png"
    ],
    description:
      "Cute face-changing cartoon keychain with vibrant colors and smooth finishing.",
    isNew: false,
    isFeatured: true,
    popularityScore: 78,

    hasVariants: true,
    variants: [
      {
        variantId: "p4-v1",
        label: "Lavender Cat",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_LC.jpg",
        description:
          "A vibrant lavender hoodie-themed face-changing keychain featuring a playful mood swing mechanism."
      },
      {
        variantId: "p4-v2",
        label: "Doraemon",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_DM.jpg",
        description:
          "Doraemon-inspired face-changing keychain wearing a blue hoodie that cycles through different iconic expressions."
      },
      {
        variantId: "p4-v3",
        label: "Capybara",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_CB.jpg",
        description:
          "This orange capybara face-changing keychain features a hooded design that swaps between different adorable expressions."
      },
      {
        variantId: "p4-v4",
        label: "Spider-Man",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_SM.jpg",
        description:
          "This Spider-Man inspired red face-changing keychain features a hooded superhero design that rotates through various iconic web-slinger expressions."
      },
      {
        variantId: "p4-v5",
        label: "Gojo Satoru",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_GS.jpg",
        description:
          "This anime-inspired Gojo Satoru face-changing keychain features a dark blue hoodie design that rotates through different iconic expressions."
      },
      {
        variantId: "p4-v6",
        label: "Lotso Bear",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_LB.jpg",
        description:
          "This Lotso-inspired pink bear face-changing keychain features a cozy hoodie design that cycles through various grumpy and sweet expressions."
      },
      {
        variantId: "p4-v7",
        label: "Shin-chan",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_SC.jpg",
        description:
          "This Shin-chan inspired yellow face-changing keychain features a hooded design that cycles through various funny expressions."
      },
      {
        variantId: "p4-v8",
        label: "Hello Kitty",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_HK.jpg",
        description:
          "This My Melody-inspired pink face-changing keychain features a cute hooded design that cycles through various sweet and winking expressions."
      },
      {
        variantId: "p4-v9",
        label: "Green Liz",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_GL.jpg",
        description:
          "This lime green hoodie-themed face-changing keychain features a playful winking character that swaps between different expressions."
      },
      {
        variantId: "p4-v10",
        label: "Squid Game",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_SG.jpg",
        description:
          "This Squid Game-inspired red face-changing keychain features a hooded guard design that cycles through iconic mask symbols."
      },
      {
        variantId: "p4-v11",
        label: "Tanjiro Kamado",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_TK.jpg",
        description:
          "This Demon Slayer-inspired teal face-changing keychain features Tanjiro in a hooded design that cycles through various determined and fierce expressions."
      },
      {
        variantId: "p4-v12",
        label: "Captain America",
        price: 79,        // selling price (number, not string)
        mrp: 109,         // original price,
        image: "/images/FC_CA.jpg",
        description:
          "This Captain America-inspired blue face-changing keychain features a hooded superhero design that cycles through various determined and heroic expressions."
      }
    ]
  },

  {
    id: "p5",
    category: "pocketwatch",
    name: "Pocket Watch Keychain",
    price: 289,        // selling price (number, not string)
    mrp: 349,         // original price,
    images: [
      "/images/ALL_PW.jpg"
    ],
    description:
      "Level up your aesthetic with our exclusive Anime & Fantasy pocket watch collection, featuring iconic designs.",
    isNew: true,
    isFeatured: true,
    popularityScore: 78,

    hasVariants: true,
    variants: [
      {
        variantId: "p5-v1",
        label: "Akatsuki Pocket Watch Keychain",
        price: 289,        // selling price (number, not string)
        mrp: 349,         // original price,
        image: "/images/AK_PW.jpg",
        description:
          "Elevate your anime collection with this premium silver pocket watch keychain featuring the iconic Akatsuki Red Cloud design and precision quartz movement."
      },
      {
        variantId: "p5-v2",
        label: "Harry Potter Snitch Pocket Watch Locket",
        price: 289,        // selling price (number, not string)
        mrp: 349,         // original price,
        image: "/images/HP_PW.jpg",
        description:
          "Capture the magic with this vintage-style Golden Snitch pocket watch necklace, featuring detailed wings and the iconic 'I open at the close' engraving."
      },
      {
        variantId: "p5-v3",
        label: "Floral Pattern Pocket Watch",
        price: 289,        // selling price (number, not string)
        mrp: 349,         // original price,
        image: "/images/PWFP.jpg",
        description:
          "An elegant, vintage-style bronze pocket watch featuring an intricately engraved floral case and a classic hunter-case design."
      }
    ]
  },

  // {
  //   id: "p5",
  //   category: "mascot",
  //   name: "Figurines",
  //   price: 289,        // selling price (number, not string)
  //   mrp: 349,         // original price,
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
    price: 139,        // selling price (number, not string)
    mrp: 199,         // original price,
    images: [
      "/images/KatanaAll3.png"
    ],
    description:
      "Mini katana sword keychain inspired by Japanese anime swords with detailed blade and sheath.",
    isNew: true,
    isFeatured: true,
    popularityScore: 72,
    hasVariants: true,
    variants: [
      {
        variantId: "p6-v1",
        label: "Shusui",
        price: 139,        // selling price (number, not string)
        mrp: 199,         // original price,
        image: "/images/katana.jpg",
        description:
          "Zoro's Shusui inspired Mini katana keychain featuring a sleek stainless steel blade, detailed handle wrap, and decorative sheath—perfect as a collectible or stylish everyday accessory."
      },
      {
        variantId: "p6-v2",
        label: "Yubashiri ",
        price: 139,        // selling price (number, not string)
        mrp: 199,         // original price,
        image: "/images/Katana3.jpg",
        description:
          "Zoro's Yubashiri inspired Premium mini katana keychain with a polished steel blade, elegant black-and-gold detailing, and durable sheath—an eye-catching collectible and everyday carry accessory."
      },
      {
        variantId: "p6-v3",
        label: "Wado Ichimonji ",
        price: 139,        // selling price (number, not string)
        mrp: 199,         // original price,
        image: "/images/Katana2.jpg",
        description:
          "Zoro's Wado Ichimonji inspired Elegant white mini katana keychain with a polished steel blade, gold-accented fittings, and matching sheath—perfect for collectors and stylish everyday carry."
      },
      {
        variantId: "p6-v4",
        label: "Haramaki Blade",
        price: 139,        // selling price (number, not string)
        mrp: 199,         // original price,
        image: "/images/Katana4.jpg",
        description:
          "Zoro's Haramaki blade inspired mini-katana, Sharpen your style with this emerald green miniature katana keychain, featuring a realistic metal blade, gold accents, and a sleek matching scabbard."
      },
      {
        variantId: "p6-v5",
        label: "Nichirin Blade",
        price: 119,        // selling price (number, not string)
        mrp: 179,         // original price,
        image: "/images/Katana5.jpg",
        description:
          "Zenetsu's Nichirin blade inspired Elegant white mini katana keychain with a polished Steel blade, gold-accented fittings, and matching plastic sheath—perfect for collectors and stylish everyday carry."
      }

    ]
  },

  {
    id: "p7",
    category: "armory",
    name: "Luxury Metal Butterfly Knife",
    price: 249,        // selling price (number, not string)
    mrp: 319,         // original price,
    images: [
      "/images/butterflyall.png"
    ],
    description:
      "Luxury butterfly-style metal knife with engraved detailing and premium finish. Ideal as a display collectible.",
    isNew: true,
    isFeatured: true,
    popularityScore: 92,
    hasVariants: true,
    variants: [
      {
        variantId: "p7-v1",
        label: "Riptide Striker",
        price: 249,        // selling price (number, not string)
        mrp: 319,         // original price,
        image: "/images/butterfly2.jpg",
        description:
          "Riptide Striker is a premium butterfly-style metal knife featuring exquisite engraved detailing and a polished, upscale finish. Designed as a statement collectible, it is perfect for display in refined collections."
      },
      {
        variantId: "p7-v2",
        label: "RGX Firefly - Valorant",
        price: 249,        // selling price (number, not string)
        mrp: 319,         // original price,
        image: "/images/butterfly3.jpg",
        description:
          "RGX Firefly is a futuristic butterfly-style metal knife featuring sharp geometric detailing, bold green and gold accents, and a sleek matte finish. Designed as a statement collectible, it’s ideal for display in modern and tech-inspired collections."
      },
      {
        variantId: "p7-v3",
        label: "Hundred Battles - Naraka Bladepoint",
        price: 249,        // selling price (number, not string)
        mrp: 319,         // original price,
        image: "/images/Butterfly9.png",
        description:
          "The Thriller Of The Hundred Battles is a Premium Naraka Bladepoint-inspired alloy butterfly knife trainer featuring a vibrant, multi-color skin finish—perfect for safe trick practice, cosplay, and gaming setups."
      },
      {
        variantId: "p7-v4",
        label: "Cobra Vanguard - Delta Force",
        price: 249,        // selling price (number, not string)
        mrp: 319,         // original price,
        image: "/images/Butterfly8.png",
        description:
          "Master the flick with this premium Delta Force-inspired Cobra Vanguard Butterfly Knife Trainer, the ultimate addition to your gaming arsenal."
      },
      {
        variantId: "p7-v5",
        label: "Battle Machine - Arena Breakout",
        price: 249,        // selling price (number, not string)
        mrp: 319,         // original price,
        image: "/images/Butterfly7.png",
        description:
          "Level up your skills with the Battle Machine Trainer, a safe, unsharpened balisong featuring a radical blue and toxic-green cyber-splatter design."
      }
    ]
  },

  {
    id: "p8",
    category: "armory",
    name: "Primeum Metal Karambit Knife",
    price: 349,        // selling price (number, not string)
    mrp: 399,         // original price,
    images: [
      "/images/Karambit1.png"
    ],
    description:
      "Modern & Primeum karambit-style knife with a curved blade and ergonomic ring handle, designed for collectors, gamers, and eye-catching display or cosplay use.",
    isNew: true,
    isFeatured: true,
    popularityScore: 92,
    hasVariants: true,
    variants: [
      {
        variantId: "p8-v1",
        label: "Velocity Orange - Valorant",
        price: 349,        // selling price (number, not string)
        mrp: 399,         // original price,
        image: "/images/Karambit2.png",
        description:
          "Sleek Valorant-inspired karambit featuring a curved precision blade and futuristic grip design, perfect for collectors, gamers, and premium display or cosplay use."
      },
      {
        variantId: "p8-v2",
        label: "Damascus Blue",
        price: 349,        // selling price (number, not string)
        mrp: 399,         // original price,
        image: "/images/DBK.jpg",
        description:
          "A striking karambit knife featuring a curved hawkbill blade and an ergonomic handle, both finished in a vibrant, blue-themed topographic 'Damascus' pattern."
      }
    ]
  },

  {
    id: "p9",
    category: "mascot",
    name: "Labubu Doll",
    price: 199,        // selling price (number, not string)
    mrp: 249,         // original price,
    images: [
      "/images/Labubu3.jpg"
    ],
    description:
      "Adorable Labubu plush doll with soft body, long ears, and premium craftsmanship.",
    isNew: false,
    isFeatured: true,
    popularityScore: 68,
    hasVariants: true,
    variants: [
      {
        variantId: "p9-v1",
        label: "Mistry Labubu",
        price: 199,        // selling price (number, not string)
        mrp: 249,         // original price,
        image: "/images/labubu.jpg",
        description:
          "Adorable Labubu collectable doll with soft body, long ears, and premium craftsmanship."
      }
    ]
  },

  {
    id: "p10",
    category: "poster",
    name: "Custom Poster",
    price: 99,        // selling price (number, not string)
    mrp: 149,         // original price,
    images: [
      "/images/placeholder.png"
    ],
    description:
      "Create your own premium customized poster by sending us your desired photo.",
    isNew: false,
    isFeatured: false,
    popularityScore: 75
  },

  {
    id: "p11",
    category: "mug",
    name: "Custom Mug",
    price: 289,        // selling price (number, not string)
    mrp: 349,         // original price,
    images: [
      "/images/Custom_Mug.png"
    ],
    description:
      "Premium customized mug printed with your chosen image or design.",
    isNew: false,
    isFeatured: true,
    popularityScore: 80,
    hasVariants: true,
    variants: [
      {
        variantId: "p11-v1",
        label: "Customization Steps",
        price: 289,        // selling price (number, not string)
        mrp: 349,         // original price,
        image: "/images/Customization_steps.png",
        description:
          "Follow the Steps for Customization."
      },

      {
        variantId: "p11-v2",
        label: "After Customization",
        price: 289,        // selling price (number, not string)
        mrp: 349,         // original price,
        image: "/images/Custom_Mug2.png",
        description:
          "After Costomization The Mug will look like this."
      }
    ]

  },

  {
    id: "p12",
    category: "mug",
    name: "Magic Mug",
    price: 489,        // selling price (number, not string)
    mrp: 559,         // original price,
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
        variantId: "p12-v1",
        label: "Customization Steps",
        price: 489,        // selling price (number, not string)
        mrp: 559,         // original price,
        image: "/images/Customization_steps.png",
        description:
          "Follow the Steps for Customization."
      }
    ]
  },

  {
    id: "p13",
    category: "armory",
    name: "Premium Anime Katana",
    price: 449,        // selling price (number, not string)
    mrp: 549,         // original price,
    images: [
      "/images/PeKAll.jpg"
    ],
    description:
      "31cm length Medium katana sword keychain inspired by Japanese anime swords with detailed blade and sheath without stand.",
    isNew: true,
    isFeatured: true,
    popularityScore: 92,
    hasVariants: true,
    variants: [
      {
        variantId: "p13-v1",
        label: "Shusui",
        price: 449,        // selling price (number, not string)
        mrp: 549,         // original price,
        image: "/images/PeK1.jpg",
        description:
          "A stunning 31cm replica of the legendary Zoro's Shusui katana, featuring its signature black-and-red serrated blade pattern and a matching scabbard adorned with circular red emblems."
      },
      {
        variantId: "p13-v2",
        label: "Yubashiri ",
        price: 449,        // selling price (number, not string)
        mrp: 549,         // original price,
        image: "/images/PeK2.jpg",
        description:
          "A refined 31cm replica of the legendary Zoro's Yubashiri katana, featuring a sleek all-black design with elegant gold accents on the hilt, crossguard, and matching scabbard."
      },
      {
        variantId: "p13-v3",
        label: "Enma",
        price: 449,        // selling price (number, not string)
        mrp: 549,         // original price,
        image: "/images/PeK3.jpg",
        description:
          "A 31cm decorative metal replica of the legendary Enma katana from One Piece, featuring its signature purple hilt, golden flower motifs, and a matching scabbard with a keychain attachment."
      }
    ]
  },

  {
    id: "p14",
    category: "armory",
    name: "Kunai",
    price: 299,        // selling price (number, not string)
    mrp: 359,         // original price,
    images: [
      "/images/KunaiAll.jpg"
    ],
    description:
      "An authentic Naruto-inspired replica kunai featuring a sleek matte black finish, a signature red-wrapped grip, and the Hidden Leaf Village insignia for a professional collector's look.",
    isNew: true,
    isFeatured: true,
    popularityScore: 92,
    hasVariants: true,
    variants: [
      {
        variantId: "p14-v1",
        label: "Minato Kunai",
        price: 299,        // selling price (number, not string)
        mrp: 359,         // original price,
        image: "/images/Kunai1.jpg",
        description:
          "A sleek, matte black replica of Minato Namikaze's iconic Flying Raijin kunai, featuring a triple-pronged blade design and a handle detailed with signature red kanji."
      },
      {
        variantId: "p14-v2",
        label: "Shinobi Kunai",
        price: 299,        // selling price (number, not string)
        mrp: 359,         // original price,
        image: "/images/Kunai2.jpg",
        description:
          "A classic matte black shinobi kunai replica featuring a red-wrapped textured grip and the iconic Hidden Leaf village symbol etched into the blade."
      }

    ]
  },


];
