const price = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};
const agents = [
  {
    id: 1,
    name: "Sarika J",
    email: "ambikashingare@gmail.com",
    phone: "9850791913",
    address: "P.O BOX 2456 Pune",
    county: "India",
    town: "Pune",
    photo: "amruta.jpg",

    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mumbai",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Ambika Shingare",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Thane",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Sarika J",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 2,
    name: "Prachita B",
    email: "sarikashingare@gmail.com",
    phone: "9850791913",
    address: "P.O BOX 2456 Pune",
    county: "Nashik",
    town: "Nashik",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    featured: true,
    photo: "amruta.jpg",
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mumbai",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Ambika Shingare",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Thane",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Sarika J",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Houses",
      },
    ],
  },
  {
    id: 3,
    name: "Prabhakar S",
    email: "prabhakarshingare@gmail.com",
    phone: "9850791913",
    address: "P.O BOX 2456 Pune",
    county: "India",
    town: "Pune",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    photo: "amruta.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mumbai",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Ambika Shingare",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Thane",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Sarika J",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
  {
    id: 4,
    name: "Prabhakar S",
    email: "prabhakarshingare@gmail.com",
    phone: "9850791913",
    address: "P.O BOX 2456 Pune",
    county: "India",
    town: "Pune",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    social: {
      facebook: "https://www.facebook.com/kevin.caster.9655/",
      instagram: "https://www.facebook.com/kevin.caster.9655/",
      twitter: "https://www.facebook.com/kevin.caster.9655/",
      linkedin: "https://www.facebook.com/kevin.caster.9655/",
    },
    photo: "amruta.jpg",
    featured: true,
    listings: [
      {
        id: 1,
        title: "Apartment for rent",
        slug: "apartment-for-rent",
        price: price(35000),
        location: "Mumbai",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image2.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Ambika Shingare",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },

        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
      {
        id: 2,
        title: "House for Sell",
        slug: "house-for-sell",
        price: price(35000),
        location: "Thane",
        description:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly",
        images: ["image8.jpg", "image3.jpg", "image7.jpg", "image8.jpg"],
        amenities: [
          "Air Conditioning",
          "Security System",
          "Parking Space",
          "Gym Room",
          "Free WIFI",
          "Fire Place",
        ],
        agent: {
          name: "Sarika J",
          image: "amruta.jpg",
        },
        features: {
          bedrooms: 3,
          status: true,
          garage: 1,
          elevator: true,
          kitchen: true,
        },
        address: {
          address: "Pune Westlands",
          county: "Pune",
          city: "Pune",
          street: "SwargateSt",
          area: "Pune",
        },
        featured: true,
        type: "rental",
        listedIn: "rentals",
        category: "Apartments",
      },
    ],
  },
];

export default agents;
