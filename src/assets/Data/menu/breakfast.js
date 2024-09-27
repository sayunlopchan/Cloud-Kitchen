// Updated breakfast data
import img1 from '../../img/foodItems/Poached egg with brown bread.jpg';
import img2 from '../../img/foodItems/Boiled egg.webp';
import img3 from '../../img/foodItems/Sandwich.jpg';
import img4 from '../../img/foodItems/Grilled chicken Sandwich.jpg';
import img5 from '../../img/foodItems/Grilled buff Sandwich.jpg';
import img6 from '../../img/foodItems/Scrumbled egg with hash potato.jpg';

const breakfast = [
  {
    items: [
      {
        id: 1,
        title: "Poached Egg with Brown Bread",
        img: img1,
        price: 100,
        discount: 10,
        description: "A delicious poached egg served on brown bread.",
        rating: 4.5,
        likes: 120,
        category: "breakfast" // Added category to each item
      },
      {
        id: 2,
        title: "Boiled Egg",
        img: img2,
        price: 50,
        discount: 0,
        description: "Classic boiled egg.",
        rating: 4.0,
        likes: 95,
        category: "breakfast" // Added category to each item
      },
      {
        id: 3,
        title: "Sandwich",
        img: img3,
        price: 80,
        discount: 5,
        description: "Freshly made sandwich.",
        rating: 4.3,
        likes: 80,
        category: "breakfast" // Added category to each item
      },
      {
        id: 4,
        title: "Grilled Chicken Sandwich",
        img: img4,
        price: 120,
        discount: 15,
        description: "Grilled chicken sandwich for a hearty breakfast.",
        rating: 4.7,
        likes: 150,
        category: "breakfast" // Added category to each item
      },
      {
        id: 5,
        title: "Grilled Buff Sandwich",
        img: img5,
        price: 130,
        discount: 10,
        description: "Delicious grilled buff sandwich.",
        rating: 4.6,
        likes: 110,
        category: "breakfast" // Added category to each item
      },
      {
        id: 6,
        title: "Scrambled Egg with Hash Potato",
        img: img6,
        price: 110,
        discount: 8,
        description: "Scrambled egg served with crispy hash potatoes.",
        rating: 4.4,
        likes: 90,
        category: "breakfast" // Added category to each item
      },
    ]
  }
];

export default breakfast;
