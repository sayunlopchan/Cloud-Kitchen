import { v4 as uuidv4 } from 'uuid';


// breakfast img
import breakfast1 from '../../../assets/img/Breakfast/boiled-egg.png'
import breakfast2 from '../../../assets/img/Breakfast/Grilled-buff-Sandwich.jpg'
import breakfast3 from '../../../assets/img/Breakfast/grilled-chicken-sandwich.jpeg'
import breakfast4 from '../../../assets/img/Breakfast/Poached egg with brown bread.jpg'
import breakfast5 from '../../../assets/img/Breakfast/sandwich.png'
import breakfast6 from '../../../assets/img/Breakfast/scrumbled-egg-with-hash-potato.png'


// nepali nasta img

// nepali nasta /momo 

import momo1 from '../../../assets/img/Nepali-nasta/momo/buff-chilly-momo.png'
import momo2 from '../../../assets/img/Nepali-nasta/momo/buff-kothe-momo.png'
import momo3 from '../../../assets/img/Nepali-nasta/momo/buff-steam-momo.png'
import momo4 from '../../../assets/img/Nepali-nasta/momo/chicken-chilly-momo.png'
import momo5 from '../../../assets/img/Nepali-nasta/momo/chicken-kothe-momo.png'
import momo6 from '../../../assets/img/Nepali-nasta/momo/chicken-steam-momo.png'
import momo7 from '../../../assets/img/Nepali-nasta/momo/veg-chilly-momo.png'
import momo8 from '../../../assets/img/Nepali-nasta/momo/veg-momo.png'

// nepali nasta /noodles 


//chowmin
import chowmin1 from '../../../assets/img/Nepali-nasta/noodles/egg-chowmein.png'
import chowmin2 from '../../../assets/img/Nepali-nasta/noodles/veg-chowmein.png'
import chowmin3 from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'
import chowmin4 from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'

//keema
import keemaNoodles1 from '../../../assets/img/Nepali-nasta/noodles/buff-keema-noodles.png'
import keemaNoodles2 from '../../../assets/img/Nepali-nasta/noodles/chicken-keema-noodles.png'



// nepali nasta /friedrice

import friedRice1 from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'
import friedRice2 from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import friedRice3 from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import friedRice4 from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import friedRice5 from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'



// nepali nasta cheeseball

import cheeseball1 from '../../../assets/img/Nepali-nasta/cheeseball/chicken-cheese-ball.png'
import cheeseball2 from '../../../assets/img/Nepali-nasta/cheeseball/chicken-cheese-ball.png'





// combos
// import combos1 from '../../../assets/img/combos/hawain-packed-wraps.png'
// import combos2 from '../../../assets/img/combos/veggie-packed-wraps.png'


// crispy
import crispy1 from '../../../assets/img/crispy/chicken-lollipop.png'
import crispy2 from '../../../assets/img/crispy/chicken-popcorn.png'
import crispy3 from '../../../assets/img/crispy/crispy-chicken.png'
import crispy4 from '../../../assets/img/crispy/crsipy-chicken.png'
import crispy5 from '../../../assets/img/crispy/korean-crsipy-wings.jpg'


// salad
import salad1 from '../../../assets/img/salad/ceaser-salad.png'
import salad2 from '../../../assets/img/salad/russian-salad.png'


// snacks
import snack1 from '../../../assets/img/snacks/buff-burger-with-fries.png'
import snack2 from '../../../assets/img/snacks/butter-chicken.png'
import snack3 from '../../../assets/img/snacks/chicken-burger-with-fries.png'
import snack4 from '../../../assets/img/snacks/chicken-manchurain.png'
import snack5 from '../../../assets/img/snacks/chicken-tikka.png'
import snack6 from '../../../assets/img/snacks/double-patty-burger.png'
import snack7 from '../../../assets/img/snacks/pancake-with-honey.png'
import snack8 from '../../../assets/img/snacks/paneer-chilly.png'
import snack9 from '../../../assets/img/snacks/veg-spring-roll.png'
import snack10 from '../../../assets/img/snacks/veg-tempura.png'



//biryanin
import biryani1 from '../../../assets/img/snacks/veg-tempura.png'





// Breakfast Data
const breakfast = [
  {
    id: uuidv4(),
    title: "Boiled Egg",
    img: breakfast1,
    imgArr: [breakfast1, breakfast3, breakfast5, breakfast6], // Updated imgArr
    price: 50,
    discountPercentage: 0,
    description: ": A classic boiled egg, cooked to perfection with a tender white and rich, creamy yolk. This nutritious snack is rich in protein, making it an ideal choice for breakfast or a light snack that can be enjoyed anytime.",
    rating: 4.0,
    likes: 95,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Grilled Buff Sandwich",
    img: breakfast2,
    imgArr: [breakfast2, breakfast5, breakfast4, breakfast3], // Updated imgArr
    price: 130,
    discountPercentage: 10,
    description: "Savor a juicy grilled chicken or buffalo sandwich, loaded with fresh veggies and served on toasted bread. This hearty sandwich is perfect for lunch or dinner, offering a delicious combination of flavors that will keep you coming back for more.",
    rating: 4.6,
    likes: 110,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Grilled Chicken Sandwich",
    img: breakfast3,
    imgArr: [breakfast3, breakfast5, breakfast4, breakfast6], // Updated imgArr
    price: 120,
    discountPercentage: 15,
    description: "Savor a juicy grilled chicken or buffalo sandwich, loaded with fresh veggies and served on toasted bread. This hearty sandwich is perfect for lunch or dinner, offering a delicious combination of flavors that will keep you coming back for more.",
    rating: 4.7,
    likes: 150,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Poached Egg with Brown Bread",
    img: breakfast4,
    imgArr: [breakfast4, breakfast5, breakfast6, breakfast1], // Updated imgArr
    price: 100,
    discountPercentage: 10,
    description: "Enjoy a soft poached egg served on a slice of crunchy brown bread. This healthy breakfast option is packed with protein and flavor, making it a perfect choice to kickstart your morning and keep you energized throughout the day.",
    rating: 4.5,
    likes: 120,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Sandwich",
    img: breakfast5,
    imgArr: [breakfast5, breakfast2, breakfast3, breakfast1], // Updated imgArr
    price: 80,
    discountPercentage: 5,
    description: "A delightful sandwich filled with fresh vegetables and your choice of protein, all nestled between two slices of soft bread. It's a simple and satisfying meal that’s perfect for lunch or a quick snack, bursting with flavors and textures.",
    rating: 4.3,
    likes: 80,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Scrambled Egg with Hash Potato",
    img: breakfast6,
    imgArr: [breakfast6, breakfast5, breakfast3, breakfast1], // Updated imgArr
    price: 110,
    discountPercentage: 8,
    description: "Fluffy scrambled eggs paired with crispy hash potatoes create a comforting breakfast combination. This hearty dish is not only filling but also packed with flavor, making it a favorite choice for a satisfying start to your day.",
    rating: 4.4,
    likes: 90,
    category: "breakfast",
  },
];

// Nepali nasta data
// Momo Data
const momo = [
  {
    id: uuidv4(),
    title: "Stem Momo (Chicken)",
    img: momo1,
    imgArr: [momo1, momo1, momo1, momo1],
    price: 150,
    discountPercentage: 10,
    description: "Enjoy Nepal mot loved food 'Momo'. A soft fluffy dumpling filled with juicy and flavorful chicken, often served with a spicy sauce 'achar' offers alight yet satisfying bite.",
    rating: 4.8,
    likes: 200,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Kothe Momo (Chicken)",
    img: momo2,
    imgArr: [momo2, momo2, momo2, momo2],
    price: 160,
    discountPercentage: 0,
    description: "Fried dumplings with a crispy outer layer.",
    rating: 4.5,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chilly Momo (Chicken)",
    img: momo3,
    imgArr: [momo3, momo3, momo3, momo3],
    price: 170,
    discountPercentage: 5,
    description: "Spicy momos tossed in a chili sauce.",
    rating: 4.6,
    likes: 150,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Stem Momo (Veg)",
    img: momo4,
    imgArr: [momo4, momo4, momo4, momo4],
    price: 140,
    discountPercentage: 10,
    description: "Steamed dumplings filled with mixed vegetables.",
    rating: 4.4,
    likes: 130,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chilly Momo (Veg)",
    img: momo5,
    imgArr: [momo5, momo5, momo5, momo5],
    price: 170,
    discountPercentage: 5,
    description: "Spicy momos tossed in a chili sauce.",
    rating: 4.6,
    likes: 150,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Kothe Momo (Buff)",
    img: momo6,
    imgArr: [momo6, momo6, momo6, momo6],
    price: 160,
    discountPercentage: 0,
    description: "Fried dumplings with a crispy outer layer.",
    rating: 4.5,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Stem Momo (Buff)",
    img: momo7,
    imgArr: [momo7, momo7, momo7, momo7],
    price: 160,
    discountPercentage: 15,
    description: "Delicious steamed dumplings filled with buff.",
    rating: 4.7,
    likes: 160,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Stem Momo (Buff)",
    img: momo8,
    imgArr: [momo8, momo8, momo8, momo8],
    price: 160,
    discountPercentage: 15,
    description: "Delicious steamed dumplings filled with buff.",
    rating: 4.7,
    likes: 160,
    category: "nepali nasta"
  },
];

// Fried Rice Data
const friedRice = [
  {
    id: uuidv4(),
    title: "Chicken Fried Rice",
    img: friedRice1,
    imgArr: [friedRice1, friedRice1, friedRice1, friedRice1],
    price: 150,
    discountPercentage: 10,
    description: "Flavorful fried rice stir-fried with tender chicken pieces.",
    rating: 4.7,
    likes: 250,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Buff Fried Rice",
    img: friedRice2,
    imgArr: [friedRice2, friedRice2, friedRice2, friedRice2],
    price: 160,
    discountPercentage: 0,
    description: "Delicious fried rice with succulent buff pieces.",
    rating: 4.5,
    likes: 200,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Veg Fried Rice",
    img: friedRice3,
    imgArr: [friedRice3, friedRice3, friedRice3, friedRice3],
    price: 140,
    discountPercentage: 5,
    description: "Healthy fried rice with a mix of fresh vegetables.",
    rating: 4.3,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Crunchy Fried Rice",
    img: friedRice4,
    imgArr: [friedRice4, friedRice4, friedRice4, friedRice4],
    price: 155,
    discountPercentage: 0,
    description: "Crispy fried rice with a blend of vegetables and spices.",
    rating: 4.6,
    likes: 220,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Sukuti Fried Rice",
    img: friedRice5,
    imgArr: [friedRice5, friedRice5, friedRice5, friedRice5],
    price: 170,
    discountPercentage: 5,
    description: "Fried rice served with traditional sukuti.",
    rating: 4.4,
    likes: 190,
    category: "nepali nasta"
  },
];

// Chowmein Data
const chowmein = [
  {
    id: uuidv4(),
    title: "Chowmein (veg)",
    img: chowmin1,
    imgArr: [chowmin1, chowmin1, chowmin1, chowmin1],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chowmein (chicken)",
    img: chowmin2,
    imgArr: [chowmin2, chowmin2, chowmin2, chowmin2],
    price: 50,
    discountPercentage: 0,
    description: "Savory chicken chowmein with tender chicken pieces and stir-fried noodles.",
    rating: 4.0,
    likes: 95,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Sukuwa Chowmein",
    img: chowmin3,
    imgArr: [chowmin3, chowmin3, chowmin3, chowmin3],
    price: 80,
    discountPercentage: 5,
    description: "A fusion of traditional Nepali Sukuwa (smoked meat) with chowmein, offering a smoky and spicy flavor.",
    rating: 4.3,
    likes: 80,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Egg With Veg Chowmin",
    img: chowmin4,
    imgArr: [chowmin4, chowmin4, chowmin4, chowmin4],
    price: 120,
    discountPercentage: 15,
    description: "A delightful mix of stir-fried vegetables and eggs combined with noodles for a nutritious meal.",
    rating: 4.7,
    likes: 150,
    category: "nepali nasta"
  },
];

// Kima noodle data
const keemaNoodle = [
  {
    id: uuidv4(),
    title: "Keema Noodle (chicken keema)",
    img: keemaNoodles1,
    imgArr: [keemaNoodles1, keemaNoodles1, keemaNoodles1, keemaNoodles1],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Keema Noodle (chicken keema)",
    img: keemaNoodles2,
    imgArr: [keemaNoodles2, keemaNoodles2, keemaNoodles2, keemaNoodles2],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },

]

// cheeseball data
const cheeseball = [
  {
    id: uuidv4(),
    title: "Safali with Cheeseball (4 pic)",
    img: cheeseball1,
    imgArr: [cheeseball1, cheeseball1, cheeseball1, cheeseball1],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Chicken Cheeseball",
    img: cheeseball2,
    imgArr: [cheeseball2, cheeseball2, cheeseball2, cheeseball2],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },

]



// Snack
const snack = [
  {
    id: uuidv4(),
    title: "Chicken burger with fries",
    img: snack1,
    imgArr: [snack1, snack1, snack1, snack1],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Buff burger with fries",
    img: snack2,
    imgArr: [snack2, snack2, snack2, snack2],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Double patty burger with cocktail sauce (big boy burger)",
    img: snack3,
    imgArr: [snack3, snack3, snack3, snack3],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Spring roll (chicken) ",
    img: snack4,
    imgArr: [snack4, snack4, snack4, snack4],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Spring roll (veg) ",
    img: snack5,
    imgArr: [snack5, snack5, snack5, snack5],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Chilly chicken",
    img: snack6,
    imgArr: [snack6, snack6, snack6, snack6],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "buff chilly",
    img: snack7,
    imgArr: [snack7, snack7, snack7, snack7],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Potato tikka ",
    img: snack8,
    imgArr: [snack8, snack8, snack8, snack8],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "chicken tikka ",
    img: snack9,
    imgArr: [snack9, snack9, snack9, snack9],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Paneer chilly",
    img: snack10,
    imgArr: [snack10, snack10, snack10, snack10],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  // {
  //   id: uuidv4(),
  //   title: "Veg manchow soup",
  //   img: snack11,
  //   imgArr: [img5, img1, img2, img3],
  //   price: 100,
  //   discountPercentage: 10,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "keema noodle"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Pan cake with honey",
  //   img: img18,
  //   imgArr: [img5, img1, img2, img3],
  //   price: 100,
  //   discountPercentage: 10,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "keema noodle"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Veg tempura",
  //   img: img18,
  //   imgArr: [img5, img1, img2, img3],
  //   price: 100,
  //   discountPercentage: 10,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "keema noodle"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Butter chicken",
  //   img: img18,
  //   imgArr: [img5, img1, img2, img3],
  //   price: 100,
  //   discountPercentage: 10,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "keema noodle"
  // },
  // {
  //   id: uuidv4(),
  //   title: "Manchurain chicken",
  //   img: img18,
  //   imgArr: [img5, img1, img2, img3],
  //   price: 100,
  //   discountPercentage: 10,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "keema noodle"
  // },

]


// Crispy 
const crispy = [
  {
    id: uuidv4(),
    title: "crispy",
    img: crispy1,
    imgArr: [crispy1, crispy1, crispy1, crispy1],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
  {
    id: uuidv4(),
    title: "crispy",
    img: crispy2,
    imgArr: [crispy2, crispy2, crispy2, crispy2],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
  {
    id: uuidv4(),
    title: "crispy",
    img: crispy3,
    imgArr: [crispy3, crispy3, crispy3, crispy3],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
  {
    id: uuidv4(),
    title: "crispy",
    img: crispy4,
    imgArr: [crispy4, crispy4, crispy4, crispy4],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
  {
    id: uuidv4(),
    title: "crispy",
    img: crispy5,
    imgArr: [crispy5, crispy5, crispy5, crispy5],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
];

const salad = [
  {
    id: uuidv4(),
    title: "Biryani",
    img: salad1,
    imgArr: [salad1, salad1, salad1, salad1],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Biryani",
    img: salad2,
    imgArr: [salad2, salad2, salad2, salad2],
    price: 200,
    discountPercentage: 10,
    description: "",
    rating: 4.6,
    likes: 160,
    category: "nepali nasta"
  },
]

// Biryani Data
const biryani = [
  {
    id: uuidv4(),
    title: "Biryani",
    img: biryani1,
    imgArr: [biryani1, biryani1, biryani1, biryani1],
    price: 200,
    discountPercentage: 10,
    description: "Biryani is a fragrant and flavorful rice dish that originated in the Indian subcontinent. It combines long-grain basmati rice with marinated meat (such as chicken, mutton, beef, or seafood) or vegetables, and is infused with aromatic spices like saffron, cardamom, cloves, and cinnamon. The dish is typically layered, where partially cooked rice is placed over the marinated meat and then cooked together, allowing the flavors to meld beautifully.Biryani is a fragrant and flavorful rice dish that originated in the Indian subcontinent. It combines long-grain basmati rice with marinated meat (such as chicken, mutton, beef, or seafood) or vegetables, and is infused with aromatic spices like saffron, cardamom, cloves, and cinnamon. The dish is typically layered, where partially cooked rice is placed over the marinated meat and then cooked together, allowing the flavors to meld beautifully.",
    rating: 4.6,
    likes: 160,
    category: "nepali nasta"
  },
];

// Nepali nasta data



//////////////////////////////

// Most Sold
const mostSold = [
  momo[0],
  friedRice[0],
  chowmein[0],
  biryani[0],
  breakfast[0],
];

// Most Popular
const mostPopular = [
  momo[2],
  friedRice[2],
  chowmein[2],
  biryani[0],
  breakfast[2],
];

// Exclusive Offer
const exclusiveOffer = [
  momo[1],
  biryani[0],
  breakfast[2]
];




// Exporting all data together
const menuData = {
  // menu
  breakfast,
  momo,
  friedRice,
  chowmein,
  keemaNoodle,
  cheeseball,
  biryani,
  snack,
  crispy,
  salad,


  // highlights
  mostSold,
  mostPopular,
  exclusiveOffer
};

export default menuData;
