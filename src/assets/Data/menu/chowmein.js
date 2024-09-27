import img1 from '../../img/foodItems/Chowmein.jpg'
import img2 from '../../img/foodItems/chicken chowmein.jpg'
import img3 from '../../img/foodItems/Sukuwa chowmein.jpg'
import img4 from '../../img/foodItems/Veg with egg chowmin.jpg'

const chowmein = [
  {
    category: "chowmein",
    items: [
      {
        title: "Chowmein (veg)",
        img: img1,
        price: 100,
        discount: 10,
        description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
        rating: 4.5,
        likes: 120,
      },
      {
        title: "Chowmein (chicken)",
        img: img2,
        price: 50,
        discount: 0,
        description: "Savory chicken chowmein with tender chicken pieces and stir-fried noodles.",
        rating: 4.0,
        likes: 95,
      },
      {
        title: "Sukuwa Chowmein",
        img: img3,
        price: 80,
        discount: 5,
        description: "A fusion of traditional Nepali Sukuwa (smoked meat) with chowmein, offering a smoky and spicy flavor.",
        rating: 4.3,
        likes: 80,
      },
      {
        title: "Egg With Veg Chowmin",
        img: img4,
        price: 120,
        discount: 15,
        description: "A delightful mix of stir-fried vegetables and eggs combined with noodles for a nutritious meal.",
        rating: 4.7,
        likes: 150,
      },
    ]
  }
];

export default chowmein;
