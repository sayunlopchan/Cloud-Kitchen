import { v4 as uuidv4 } from 'uuid';

// Breakfast img imports
import boiled_egg from '../../../assets/img/Breakfast/boiled-egg.png'
import grilled_buff_sandwich from '../../../assets/img/Breakfast/Grilled-buff-Sandwich.jpg'
import grilled_chicken_sandwich from '../../../assets/img/Breakfast/grilled-chicken-sandwich.jpeg'
import poached_egg_brown_bread from '../../../assets/img/Breakfast/Poached egg with brown bread.jpg'
import sandwich from '../../../assets/img/Breakfast/sandwich.png'
import scrambled_egg_hash_potato from '../../../assets/img/Breakfast/scrumbled-egg-with-hash-potato.png'


// boil egg child img

import boiled_egg_1 from '../../img/Breakfast/boil-egg-1.jpg'
import boiled_egg_2 from '../../img/Breakfast/boil-egg-2.jpg'
import boiled_egg_3 from '../../img/Breakfast/boil-egg-3.jpg'

// Grilled Buff Sandwich
import Grilled_Buff_Sandwich_1 from '../../img/Breakfast/Grilled_Buff_Sandwich_1.jpg'
import Grilled_Buff_Sandwich_2 from '../../img/Breakfast/Grilled_Buff_Sandwich_2.jpg'
import Grilled_Buff_Sandwich_3 from '../../img/Breakfast/Grilled_Buff_Sandwich_3.jpg'




// nepali nasta /momo 

import c_Steam_momo from '../../../assets/img/Nepali-nasta/momo/chicken-Steam-momo.png'
import b_Steam_momo from '../../../assets/img/Nepali-nasta/momo/buff-Steam-momo.png'
import v_Steam_momo from '../../../assets/img/Nepali-nasta/momo/veg-momo.png'

import c_c_momo from '../../../assets/img/Nepali-nasta/momo/chicken-chilly-momo.png'
import v_c_momo from '../../../assets/img/Nepali-nasta/momo/veg-chilly-momo.png'
import b_c_momo from '../../../assets/img/Nepali-nasta/momo/buff-chilly-momo.png'

import c_k_momo from '../../../assets/img/Nepali-nasta/momo/chicken-kothe-momo.png'
import b_k_momo from '../../../assets/img/Nepali-nasta/momo/buff-kothe-momo.png'



// nepali nasta /friedrice

import c_firedRice from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'
import v_firedRice from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import b_firedRice from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'
import s_firedRice from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'






//chowmein
import egg_chowmein from '../../../assets/img/Nepali-nasta/noodles/egg-chowmein.png'
import c_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'
import b_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'
import s_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'




//keema
import c_keemaNoodles from '../../../assets/img/Nepali-nasta/noodles/chicken-keema-noodles.png'
import b_keemaNoodle from '../../../assets/img/Nepali-nasta/noodles/buff-keema-noodles.png'





// nepali nasta cheeseball

import c_cheeseball from '../../../assets/img/Nepali-nasta/cheeseball/chicken-cheese-ball.png'
import cheeseball2 from '../../../assets/img/Nepali-nasta/cheeseball/chicken-cheese-ball.png'





// snacks
import burger_with_fries from '../../../assets/img/snacks/buff-burger-with-fries.png'
import butter_chicken from '../../../assets/img/snacks/butter-chicken.png'
import chicken_burger_with_fries from '../../../assets/img/snacks/chicken-burger-with-fries.png'
import chicken_manchurain from '../../../assets/img/snacks/chicken-manchurain.png'
import chicken_tikka from '../../../assets/img/snacks/chicken-tikka.png'
import double_patty_burger from '../../../assets/img/snacks/double-patty-burger.png'
import pancake_with_honey from '../../../assets/img/snacks/pancake-with-honey.png'

import buff_chilly from '../../../assets/img/snacks/buff-chilli.png'


import veg_spring_roll from '../../../assets/img/snacks/veg-spring-roll.png'
import veg_tempura from '../../../assets/img/snacks/veg-tempura.png'





// crispy
import c_lolipop from '../../../assets/img/crispy/chicken-lollipop.png'
import c_popcorn from '../../../assets/img/crispy/chicken-popcorn.png'
import crispy_c from '../../../assets/img/crispy/crispy-chicken.png'
import k_crispy_wings from '../../../assets/img/crispy/korean-crsipy-wings.jpg'

// salad
import ceaser_salad from '../../../assets/img/salad/ceaser-salad.png'
import russian_salad from '../../../assets/img/salad/russian-salad.png'



import offer_1 from '../../ad/combo_1.png'
import offer_2 from '../../ad/combo_2.png'
import offer_3 from '../../ad/combo_3.png'
import offer_4 from '../../ad/combo_4.png'

import combo_1 from '../../img/combo/cajun-chicken-and-crispy-bacon.avif';
import combo_2 from '../../img/combo/chicken-wrap.jpg';
import combo_3 from '../../img/combo/Completed-best-buffalo-chicken-wrap-scaled.webp';
import combo_4 from '../../img/combo/Crispy-Sesame-Chicken-and-Fried-Rice-Recipe.webp';
import combo_5 from '../../img/combo/Hawaiian-BBQ-Chicken-Wraps.jpg';
import combo_6 from '../../img/combo/spicy-veggie-wrap.jpg';
import combo_7 from '../../img/combo/Thai-Peanut-Chicken-Wraps.jpg';
//biryanin
import biryani1 from '../../../assets/img/biryani.webp'


// Breakfast Data
const breakfast = [
  {
    id: uuidv4(),
    title: "Boiled Egg",
    img: boiled_egg,
    imgArr: [boiled_egg_1, boiled_egg_2, boiled_egg_3,],
    price: 100,
    discountPercentage: null,
    description: "A classic boiled egg, cooked to perfection with a tender white and rich, creamy yolk. This nutritious snack is rich in protein, making it an ideal choice for breakfast or a light snack that can be enjoyed anytime.",
    rating: 4.0,
    likes: 95,
    category: "breakfast",
  },
  // {
  //   id: uuidv4(),
  //   title: "Grilled Buff Sandwich",
  //   img: grilled_buff_sandwich,
  //   imgArr: [Grilled_Buff_Sandwich_1, Grilled_Buff_Sandwich_2, Grilled_Buff_Sandwich_3, grilled_buff_sandwich],
  //   price: 210,
  //   discountPercentage: null,
  //   description: "Savor a juicy grilled chicken or buffalo sandwich, loaded with fresh veggies and served on toasted bread. This hearty sandwich is perfect for lunch or dinner, offering a delicious combination of flavors that will keep you coming back for more.",
  //   rating: 4.6,
  //   likes: 110,
  //   category: "breakfast",
  // },
  {
    id: uuidv4(),
    title: "Grilled Chicken Sandwich",
    img: grilled_chicken_sandwich,
    imgArr: [grilled_chicken_sandwich],
    price: 210,
    discountPercentage: null,
    description: "Savor a juicy grilled chicken or buffalo sandwich, loaded with fresh veggies and served on toasted bread. This hearty sandwich is perfect for lunch or dinner, offering a delicious combination of flavors that will keep you coming back for more.",
    rating: 4.7,
    likes: 150,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Poached Egg with Brown Bread",
    img: poached_egg_brown_bread,
    imgArr: [poached_egg_brown_bread],
    price: 220,
    discountPercentage: 10,
    description: "Enjoy a soft poached egg served on a slice of crunchy brown bread. This healthy breakfast option is packed with protein and flavor, making it a perfect choice to kickstart your morning and keep you energized throughout the day.",
    rating: 4.5,
    likes: 120,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Sandwich",
    img: sandwich,
    imgArr: [sandwich],
    price: 180,
    discountPercentage: null,
    description: "A delightful sandwich filled with fresh vegetables and your choice of protein, all nestled between two slices of soft bread. It's a simple and satisfying meal that's perfect for lunch or a quick snack, bursting with flavors and textures.",
    rating: 4.3,
    likes: 80,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Scrambled Egg with Hash Potato",
    img: scrambled_egg_hash_potato,
    imgArr: [scrambled_egg_hash_potato],
    price: 200,
    discountPercentage: null,
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
    title: "Steam Momo (Chicken)",
    img: c_Steam_momo,
    imgArr: [c_Steam_momo],
    price: 160,
    discountPercentage: null,
    description: "Enjoy Nepal mot loved food 'Momo'. A soft fluffy dumpling filled with juicy and flavorful chicken, often served with a spicy sauce 'achar' offers alight yet satisfying bite.",
    rating: 4.8,
    likes: 200,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Steam Momo (Veg)",
    img: v_Steam_momo,
    imgArr: [v_Steam_momo],
    price: 110,
    discountPercentage: 10,
    description: "Soft Steamed dumplings packed with the flavorful mixture of fresh vegetables. It is light & healthy and perfect for satisfying snack, served with a tangy dipping sauce to complement the delicious veggie filling.",
    rating: 4.4,
    likes: 130,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Steam Momo (Buff)",
    img: b_Steam_momo,
    imgArr: [b_Steam_momo],
    price: 180,
    discountPercentage: null,
    description: "Another version of Momo, that is in the heart of every Nepali  person. Filled up with tender and delicious buff meat perfect for meat lovers, served hot with tangy chutney to enhance the rich taste. A classic favorite for a wholesome snack or meal.",
    rating: 4.7,
    likes: 160,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chilly momo (buff)",
    img: b_c_momo,
    imgArr: [b_c_momo],
    price: 200,
    discountPercentage: null,
    description: "Spice up your meal with buff chilly momo, tossed in a hot and tangy sauce with green chilies and bell peppers. These flavorful buffalo-filled dumplings are perfect for those who love a spicy kick in every bite. A bold and delicious treat!",
    rating: 4.7,
    likes: 160,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chilly Momo (Chicken)",
    img: c_c_momo,
    imgArr: [c_c_momo],
    price: 200,
    discountPercentage: null,
    description: "Spicy momos tossed in a chili sauce.",
    rating: 4.6,
    likes: 150,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chilly Momo (Veg)",
    img: v_c_momo,
    imgArr: [v_c_momo],
    price: 180,
    discountPercentage: null,
    description: "Tossed in fiery sauce with veggies, chilly and bell pepper adds a spicy twist to your normal veg Momo and make them bold flavor bites with a kick.",
    rating: 4.6,
    likes: 150,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Kothe Momo (Buff)",
    img: b_k_momo,
    imgArr: [b_k_momo],
    price: 190,
    discountPercentage: null,
    description: "A perfect combination of soft and crispy, Kothey Momo. Buff Kothey Momo half-fried and half-Steamed, filled with delicious mixture of buff meat. These Momo are golden on the bottom and tender on top, served with a spicy dipping sauce for extra flavor.",
    rating: 4.5,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Kothe Momo (Chicken)",
    img: c_k_momo,
    imgArr: [c_k_momo],
    price: 180,
    discountPercentage: null,
    description: "A perfect combination of soft and crispy, Kothey Momo. Kothey Momo half-fried and half-Steamed, giving them a unique texture. These Momo are golden on the bottom and tender on top, served with a spicy dipping sauce for extra flavor..",
    rating: 4.5,
    likes: 180,
    category: "nepali nasta"
  },
];

// Fried Rice Data
const friedRice = [
  {
    id: uuidv4(),
    title: "Chicken Fried Rice",
    img: c_firedRice,
    imgArr: [c_firedRice],
    price: 220,
    discountPercentage: null,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day.",
    rating: 4.7,
    likes: 250,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Buff Fried Rice",
    img: b_firedRice,
    imgArr: [b_firedRice],
    price: 240,
    discountPercentage: null,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day.",
    rating: 4.5,
    likes: 200,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Veg Fried Rice",
    img: v_firedRice,
    imgArr: [v_firedRice],
    price: 160,
    discountPercentage: null,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day..",
    rating: 4.3,
    likes: 180,
    category: "nepali nasta"
  },
  // {
  //   id: uuidv4(),
  //   title: "Crunchy Fried Rice",
  //   img: crunchy_firedRice,
  //   imgArr: [crunchy_firedRice],
  //   price: 155,
  //   discountPercentage: null,
  //   description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day..",
  //   rating: 4.6,
  //   likes: 220,
  //   category: "nepali nasta"
  // },
  {
    id: uuidv4(),
    title: "Sukuti Fried Rice",
    img: s_firedRice,
    imgArr: [s_firedRice],
    price: 230,
    discountPercentage: null,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day.",
    rating: 4.4,
    likes: 190,
    category: "nepali nasta"
  },
];
// Chowmein Data

const chowmein = [
  // {
  //   id: uuidv4(),
  //   title: "Chowmein (veg)",
  //   img: veg_chowmein,
  //   imgArr: [veg_chowmein],
  //   price: 100,
  //   discountPercentage: null,
  //   description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "nepali nasta"
  // },
  {
    id: uuidv4(),
    title: "Chowmein (chicken)",
    img: c_chowmein,
    imgArr: [c_chowmein],
    price: 160,
    discountPercentage: null,
    description: "Savory chicken chowmein with tender chicken pieces and stir-fried noodles.",
    rating: 4.0,
    likes: 95,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Sukuti Chowmein",
    img: b_chowmein,
    imgArr: [b_chowmein],
    price: 180,
    discountPercentage: null,
    description: "Savory chicken chowmein with tender chicken pieces and stir-fried noodles.",
    rating: 4.0,
    likes: 95,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Sukuwa Chowmein",
    img: s_chowmein,
    imgArr: [s_chowmein],
    price: 190,
    discountPercentage: null,
    description: "A fusion of traditional Nepali Sukuwa (smoked meat) with chowmein, offering a smoky and spicy flavor.",
    rating: 4.3,
    likes: 80,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Veg With Egg Chowmein",
    img: egg_chowmein,
    imgArr: [egg_chowmein],
    price: 120,
    discountPercentage: null,
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
    img: c_keemaNoodles,
    imgArr: [c_keemaNoodles],
    price: 230,
    discountPercentage: null,
    description: "Delight in noodles topped with seasoned chicken or buffalo keema, offering a burst of flavor in every bite. This tasty dish is rich in protein and is perfect for a satisfying lunch or dinner that will leave you feeling fulfilled.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Keema Noodle (buff keema)",
    img: b_keemaNoodle,
    imgArr: [b_keemaNoodle],
    price: 250,
    discountPercentage: null,
    description: "Delight in noodles topped with seasoned chicken or buffalo keema, offering a burst of flavor in every bite. This tasty dish is rich in protein and is perfect for a satisfying lunch or dinner that will leave you feeling fulfilled.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  //  {
  //     id: uuidv4(),
  //     title: "Keema Noodle (veg)",
  //     img: v_keemaNoodles,
  //     imgArr: [v_keemaNoodles],
  //     price: 100,
  //     discountPercentage: null,
  //     description: "A classic vegetable stir-fried noodle with fresh veggies and flavorful spices.",
  //     rating: 4.5,
  //     likes: 120,
  //     category: "keema noodle"
  //   }, 

]


// price missing
// cheeseball data
const cheeseball = [
  {
    id: uuidv4(),
    title: "Safali with Cheeseball (4 pic)",
    img: c_cheeseball,
    imgArr: [c_cheeseball],
    price: 100,
    discountPercentage: null,
    description: "A classic vegetable stir-fried chowmein with fresh veggies and flavorful spices.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Chicken Cheeseball",
    img: cheeseball2,
    imgArr: [cheeseball2],
    price: 100,
    discountPercentage: null,
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
    title: "Chicken Burger with Fries",
    img: chicken_burger_with_fries,
    imgArr: [chicken_burger_with_fries],
    price: 270,
    discountPercentage: null,
    description: "Savor a juicy chicken burger served in a soft bun with crispy fries on the side. This classic meal is satisfying and delicious, making it a perfect choice for lunch or a quick dinner that everyone will enjoy.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Buff Burger with Fries",
    img: burger_with_fries,
    imgArr: [burger_with_fries],
    price: 290,
    discountPercentage: null,
    description: "Indulge in a tasty buffalo burger served in a toasted bun with crispy fries. This hearty meal is packed with flavor and is perfect for satisfying your hunger while enjoying a delicious twist on a classic favorite.A hearty buff burger complemented by crispy fries, ideal for burger lovers.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Double Patty Burger With Cocktail (Big Boy Burger)",
    img: double_patty_burger,
    imgArr: [double_patty_burger],
    price: 340,
    discountPercentage: null,
    description: "Treat yourself to a Big Boy Burger featuring two thick patties stacked high, topped with cocktail sauce. This massive burger is perfect for those with a hearty appetite, offering a delicious and filling meal experience.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Chicken Manchurian",
    img: chicken_manchurain,
    imgArr: [chicken_manchurain],
    price: 290,
    discountPercentage: null,
    description: "A flavorful dish of chicken tossed in Manchurian sauce, perfect as a snack or appetizer.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Chicken Tikka",
    img: chicken_tikka,
    imgArr: [chicken_tikka],
    price: 180,
    discountPercentage: null,
    description: "Succulent pieces of marinated chicken grilled to perfection, a delightful snack option.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Buff Chilly",
    img: buff_chilly,
    imgArr: [buff_chilly],
    price: 340,
    discountPercentage: null,
    description: "A spicy dish of buffalo meat cooked with chilies, bringing a burst of flavor in every bite.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  // {
  //   id: uuidv4(),
  //   title: "Paneer Chilly",
  //   img: paneer_chilly,
  //   imgArr: [paneer_chilly],
  //   price: 100,
  //   discountPercentage: null,
  //   description: "A vegetarian delight of paneer cubes stir-fried with chilies, offering a spicy crunch.",
  //   rating: 4.5,
  //   likes: 120,
  //   category: "snacks"
  // },
  {
    id: uuidv4(),
    title: "Spring Roll (Non-Veg)",
    img: veg_spring_roll,
    imgArr: [veg_spring_roll],
    price: 80,
    discountPercentage: null,
    description: "Crispy rolls filled with fresh vegetables, perfect as a snack or appetizer.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Spring Roll (Veg)",
    img: veg_spring_roll,
    imgArr: [veg_spring_roll],
    price: 80,
    discountPercentage: null,
    description: "Crispy rolls filled with fresh vegetables, perfect as a snack or appetizer.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Veg Tempura",
    img: veg_tempura,
    imgArr: [veg_tempura],
    price: 160,
    discountPercentage: null,
    description: "Crispy fried vegetables served with a side of dipping sauce, a delightful snack option.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Butter Chicken",
    img: butter_chicken,
    imgArr: [butter_chicken],
    price: 400,
    discountPercentage: null,
    description: "Tender pieces of chicken cooked in a rich and creamy tomato sauce, best enjoyed with naan.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Pancake with Honey",
    img: pancake_with_honey,
    imgArr: [pancake_with_honey],
    price: 230,
    discountPercentage: null,
    description: "Fluffy pancakes drizzled with sweet honey, perfect for a delightful breakfast or snack.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },

];

// Crispy 
const crispy = [
  {
    id: uuidv4(),
    title: "Chicken Leg Piece (5 pic)",
    img: c_lolipop,
    imgArr: [c_lolipop],
    price: 550,
    discountPercentage: null,
    description: "A creamy salad made with boiled vegetables, potatoes, and a tangy dressing. It's light, refreshing, and makes for a perfect side or snack, offering a delightful mix of flavors and textures.",
    rating: 4.6,
    likes: 160,
    category: "crispy"
  },
  {
    id: uuidv4(),
    title: "Chicken Popcorn",
    img: c_popcorn,
    imgArr: [c_popcorn],
    price: 360,
    discountPercentage: null,
    description: "A creamy salad made with boiled vegetables, potatoes, and a tangy dressing. It's light, refreshing, and makes for a perfect side or snack, offering a delightful mix of flavors and textures.",
    rating: 4.6,
    likes: 160,
    category: "crispy"
  },
  {
    id: uuidv4(),
    title: "Crispy Chicken",
    img: crispy_c,
    imgArr: [crispy_c],
    price: 350,
    discountPercentage: null,
    description: "A creamy salad made with boiled vegetables, potatoes, and a tangy dressing. It's light, refreshing, and makes for a perfect side or snack, offering a delightful mix of flavors and textures.",
    rating: 4.6,
    likes: 160,
    category: "crispy"
  },
  {
    id: uuidv4(),
    title: "Korean Crispy Wings",
    img: k_crispy_wings,
    imgArr: [k_crispy_wings],
    price: 380,
    discountPercentage: null,
    description: "A creamy salad made with boiled vegetables, potatoes, and a tangy dressing. It's light, refreshing, and makes for a perfect side or snack, offering a delightful mix of flavors and textures.",
    rating: 4.6,
    likes: 160,
    category: "crispy"
  },
];

const salad = [
  {
    id: uuidv4(),
    title: "Caesar Salad",
    img: ceaser_salad,
    imgArr: [ceaser_salad],
    price: 350,
    discountPercentage: null,
    description: "A classic Caesar salad featuring fresh lettuce, croutons, Parmesan cheese, and a tangy Caesar dressing. Perfect as a light meal or a side dish with a delightful crunch and creamy texture.",
    rating: 4.6,
    likes: 160,
    category: "salad"
  },
  {
    id: uuidv4(),
    title: "Russian Salad",
    img: russian_salad,
    imgArr: [russian_salad],
    price: 300,
    discountPercentage: null,
    description: "A creamy Russian salad made with boiled vegetables, apples, and peas, mixed with mayonnaise and a hint of sweetness. It's a refreshing, light option that complements any meal.",
    rating: 4.6,
    likes: 160,
    category: "salad"
  },
  {
    id: uuidv4(),
    title: "Chicken HAwaiian Salad",
    img: russian_salad,
    imgArr: [russian_salad],
    price: 320,
    discountPercentage: null,
    description: "Tender chicken mixed with sweet pineapple and fresh vegetables, creating a delicious and tropical salad. This vibrant dish is perfect for lunch or a light dinner, bringing a taste of the islands to your table.A creamy Russian salad made with boiled vegetables, apples, and peas, mixed with mayonnaise and a hint of sweetness. It's a refreshing, light option that complements any meal.",
    rating: 4.6,
    likes: 160,
    category: "salad"
  },
];







import chicken_pangra from '../../img/others/chicken-pangra.webp'
import chicken_kung_pao from '../../img/others/Kung-Pao-Chicken.jpg'
import Chicken_Sadhako from '../../img/others/Chicken Shadeko.jpg'
import aalu_Sadhako from '../../img/others/Aalu sadheko.jpeg'
import boiled_chicken from '../../img/others/boiled-chicken.jpg'
import Piro_aalu from '../../img/others/Piro aalu.webp'
import Jeera_Aalu from '../../img/others/Jeera aalu.jpeg'
import Chicken_Choila from '../../img/others/Chicken-Choila.png'
import Buff_Choila from '../../img/others/Buff chhoila.jpg'


// Others Data


const other = [
  {
    id: uuidv4(),
    title: "Chicken Pangra",
    img: chicken_pangra,
    imgArr: [chicken_pangra],
    price: 250,
    discountPercentage: null,
    description: "A savory delight featuring succulent pieces of chicken marinated in traditional spices, grilled to perfection, and served with a tangy sauce. This dish offers a unique blend of flavors and textures, making it a favorite among spice lovers.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Chicken Kung Pao",
    img: chicken_kung_pao,
    imgArr: [chicken_kung_pao],
    price: 180,
    discountPercentage: null,
    description: " A popular Asian-inspired dish that combines tender chicken, vibrant bell peppers, and crunchy peanuts, all stir-fried in a rich and flavorful Kung Pao sauce. This dish strikes the perfect balance between sweet, salty, and spicy, delivering a satisfying experience in every bite.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Chicken Sadhako",
    img: Chicken_Sadhako,
    imgArr: [Chicken_Sadhako],
    price: 230,
    discountPercentage: null,
    description: "This dish showcases juicy, grilled chicken seasoned with aromatic spices and served alongside a zesty dipping sauce. It's a delightful choice for those who appreciate a combination of smoky flavors and succulent meat.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Boiled Chicken",
    img: boiled_chicken,
    imgArr: [boiled_chicken],
    price: 220,
    discountPercentage: null,
    description: "A simple yet flavorful dish featuring tender boiled chicken, perfect for those who prefer a lighter meal. Served with a side of fresh vegetables or rice, it offers a healthy option without compromising on taste.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Piro aalu",
    img: Piro_aalu,
    imgArr: [Piro_aalu],
    price: 120,
    discountPercentage: null,
    description: "Experience the warmth of home cooking with this dish of spicy boiled potatoes seasoned with traditional spices. Perfect as a side or a standalone dish, Piro Aalu is a comforting choice that brings a taste of Nepal to your table.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Aalu Sadheko",
    img: aalu_Sadhako,
    imgArr: [aalu_Sadhako],
    price: 150,
    discountPercentage: null,
    description: "A refreshing dish of boiled potatoes tossed with a mix of spices, herbs, and a drizzle of lemon juice. This vibrant dish is perfect for enhancing any meal and is a favorite for its delightful crunch and zesty flavor.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Jeera Aalu",
    img: Jeera_Aalu,
    imgArr: [Jeera_Aalu],
    price: 180,
    discountPercentage: null,
    description: "Enjoy the classic flavors of this cumin-spiced potato dish. Cooked to perfection, Jeera Aalu is seasoned with aromatic cumin seeds and complemented by fresh herbs, making it an irresistible side dish.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Chicken Choila",
    img: Chicken_Choila,
    imgArr: [biryani1],
    price: 330,
    discountPercentage: null,
    description: "This spicy grilled chicken dish is a must-try for meat lovers. Marinated in a blend of herbs and spices, it is char-grilled to enhance its flavor, served with a side of fresh salad for a perfect meal.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Buff Choila",
    img: Buff_Choila,
    imgArr: [Buff_Choila],
    price: 330,
    discountPercentage: null,
    description: " A hearty dish made with tender pieces of buffalo meat, marinated and grilled to perfection. The robust flavor and spiciness make this a favorite for those who enjoy bold flavors and a satisfying meal.",
    rating: 4.6,
    likes: 160,
    category: "others"
  },
  {
    id: uuidv4(),
    title: "Biryani",
    img: biryani1,
    imgArr: [biryani1],
    price: 220,
    discountPercentage: 10,
    description: "A fragrant rice dish cooked with tender meat or vegetables and a blend of spices. This aromatic biryani is rich in flavor and texture, making it a beloved meal for those who enjoy hearty, traditional cuisine.",
    rating: 4.6,
    likes: 160,
    category: "biryani"
  },
];






// Nepali nasta data



//////////////////////////////



const combo = [
  {
    id: uuidv4(),
    title: "Cajun Chicken and Crispy Bacon",
    img: combo_1,
    imgArr: [combo_1],
    price: 200,
    discountPercentage: null,
    description: "Spicy cajun chicken paired with crispy bacon, perfect for a hearty meal.",
    rating: 4.6,
    likes: 160,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Chicken Wrap",
    img: combo_2,
    imgArr: [combo_2],
    price: 180,
    discountPercentage: null,
    description: "A delicious chicken wrap filled with fresh veggies and sauce.",
    rating: 4.5,
    likes: 120,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Buffalo Chicken Wrap",
    img: combo_3,
    imgArr: [combo_3],
    price: 220,
    discountPercentage: null,
    description: "Tangy buffalo chicken with a crunchy texture wrapped to perfection.",
    rating: 4.8,
    likes: 200,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Crispy Sesame Chicken and Fried Rice",
    img: combo_4,
    imgArr: [combo_4],
    price: 250,
    discountPercentage: null,
    description: "Crispy sesame chicken served with flavorful fried rice.",
    rating: 4.7,
    likes: 175,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Hawaiian BBQ Chicken Wraps",
    img: combo_5,
    imgArr: [combo_5],
    price: 210,
    discountPercentage: null,
    description: "Grilled Hawaiian BBQ chicken wrapped with fresh ingredients.",
    rating: 4.6,
    likes: 140,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Spicy Veggie Wrap",
    img: combo_6,
    imgArr: [combo_6],
    price: 160,
    discountPercentage: null,
    description: "A healthy and spicy veggie wrap for a refreshing meal.",
    rating: 4.4,
    likes: 110,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Thai Peanut Chicken Wraps",
    img: combo_7,
    imgArr: [combo_7],
    price: 230,
    discountPercentage: null,
    description: "Flavorful Thai peanut chicken wrapped for a delicious bite.",
    rating: 4.9,
    likes: 190,
    category: "combo"
  }
];






const offerData = [
  {
    id: uuidv4(),
    title: "Double patty burger with coke and onions ",
    img: offer_1,
    imgArr: [offer_1],
    price: 360,
    discountPercentage: null,
    description: "Indulge in the ultimate burger experience with our double patty burger, featuring two juicy beef patties stacked high and complemented by crisp onions. Paired with a refreshing Coke, this hearty meal is perfect for satisfying your cravings. Each bite delivers a burst of flavor, making it a favorite among burger lovers!",
    rating: 4.6,
    likes: 160,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Sesame chicken with veg fried rice and momo ",
    img: offer_2,
    imgArr: [offer_2],
    price: 390,
    discountPercentage: null,
    description: "Dive into a delightful fusion of flavors with our sesame chicken, lightly coated in a savory sesame sauce, served alongside fluffy vegetable fried rice. This dish is complemented by delicious momo dumplings, offering a perfect blend of textures and tastes that will transport you straight to the streets of Asia.",
    rating: 4.6,
    likes: 160,
    category: "combo"
  },
  {
    id: uuidv4(),
    title: "Chicken wrap with fried onions and chilly chicken  ",
    img: offer_3,
    imgArr: [offer_3],
    price: 380,
    discountPercentage: null,
    description: "Enjoy a scrumptious chicken wrap packed with tender pieces of chicken, crispy fried onions, and a spicy chili chicken filling. Each bite offers a satisfying crunch and a delightful kick, making it an excellent choice for those on the go. This wrap is not only delicious but also a perfect balance of flavors that will keep you coming back for more.",
    rating: 4.6,
    likes: 160,
    category: "combo"
  },
]




// Most Sold
const mostSold = [
  momo[0],
  friedRice[0],
  chowmein[0],
  other[9],
  breakfast[0],
];

// Most Popular
const mostPopular = [
  momo[2],
  friedRice[2],
  chowmein[2],
  breakfast[2],
];

// Exclusive Offer
const exclusiveOffer = [
  momo[1],
  other[9],
  breakfast[2]
];

const OfferSlideData = [
  offerData[0],
  offerData[1],
  offerData[2],
]


// Exporting all data together
const menuData = {
  // menu
  breakfast,
  momo,
  friedRice,
  chowmein,
  keemaNoodle,
  cheeseball,
  snack,
  crispy,
  salad,
  combo,
  other,


  // highlights
  OfferSlideData,
  mostSold,
  mostPopular,
  exclusiveOffer
};

export default menuData;
