// assets/Data/menu/momoData.js
import img1 from '../../../assets/img/foodItems/momo.jpg';
import img2 from '../../../assets/img/foodItems/Kothe momo.jpg';
import img3 from '../../../assets/img/foodItems/Chilly momo.jpg';

const momo = [
  {
    items: [
      // chicken
      {
        id: 1, // Ensure unique id
        title: "Stem Momo (Chicken)",
        img: img1,
        price: 150,
        discount: 10,
        description: "Steamed dumplings filled with juicy chicken.",
        rating: 4.8,
        likes: 200,
        category: "momo" // Added category to each item
      },
      {
        id: 2, // Ensure unique id
        title: "Kothe Momo (Chicken)",
        img: img2,
        price: 160,
        discount: 0,
        description: "Fried dumplings with a crispy outer layer.",
        rating: 4.5,
        likes: 180,
        category: "momo" // Added category to each item
      },
      {
        id: 3, // Ensure unique id
        title: "Chilly Momo (Chicken)",
        img: img3,
        price: 170,
        discount: 5,
        description: "Spicy momos tossed in a chili sauce.",
        rating: 4.6,
        likes: 150,
        category: "momo" // Added category to each item
      },
      // veg
      {
        id: 4, // Ensure unique id
        title: "Stem Momo (Veg)",
        img: img1,
        price: 140,
        discount: 10,
        description: "Steamed dumplings filled with mixed vegetables.",
        rating: 4.4,
        likes: 130,
        category: "momo" // Added category to each item
      },
      {
        id: 5, // Ensure unique id
        title: "Chilly Momo (Veg)",
        img: img3,
        price: 170,
        discount: 5,
        description: "Spicy momos tossed in a chili sauce.",
        rating: 4.6,
        likes: 150,
        category: "momo" // Added category to each item
      },
      // buff
      {
        id: 6, // Ensure unique id
        title: "Kothe Momo (Buff)",
        img: img2,
        price: 160,
        discount: 0,
        description: "Fried dumplings with a crispy outer layer.",
        rating: 4.5,
        likes: 180,
        category: "momo" // Added category to each item
      },
      {
        id: 7, // Ensure unique id
        title: "Stem Momo (Buff)",
        img: img2,
        price: 160,
        discount: 15,
        description: "Delicious steamed dumplings filled with buff.",
        rating: 4.7,
        likes: 160,
        category: "momo" // Added category to each item
      },
    ],
  }
];

export default momo;
