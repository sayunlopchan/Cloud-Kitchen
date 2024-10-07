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

import c_steam_momo from '../../../assets/img/Nepali-nasta/momo/chicken-steam-momo.png'
import b_steam_momo from '../../../assets/img/Nepali-nasta/momo/buff-steam-momo.png'
import v_steam_momo from '../../../assets/img/Nepali-nasta/momo/veg-momo.png'

import c_c_momo from '../../../assets/img/Nepali-nasta/momo/chicken-chilly-momo.png'
import v_c_momo from '../../../assets/img/Nepali-nasta/momo/veg-chilly-momo.png'
import b_c_momo from '../../../assets/img/Nepali-nasta/momo/buff-chilly-momo.png'

import c_k_momo from '../../../assets/img/Nepali-nasta/momo/chicken-kothe-momo.png'
import b_k_momo from '../../../assets/img/Nepali-nasta/momo/buff-kothe-momo.png'



// nepali nasta /friedrice

import c_firedRice from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'
import v_firedRice from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import b_firedRice from '../../../assets/img/Nepali-nasta/friedrice/chicken-fried-rice.png'
import s_firedRice from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'
import crunchy_firedRice from '../../../assets/img/Nepali-nasta/friedrice/veg-fried-rice.png'





//chowmein
import egg_chowmein from '../../../assets/img/Nepali-nasta/noodles/egg-chowmein.png'
import veg_chowmein from '../../../assets/img/Nepali-nasta/noodles/veg-chowmein.png'
import c_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'
import b_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'
import s_chowmein from '../../../assets/img/Nepali-nasta/noodles/chicken-chowmein.png'




//keema
import c_keemaNoodles from '../../../assets/img/Nepali-nasta/noodles/chicken-keema-noodles.png'
import b_keemaNoodle from '../../../assets/img/Nepali-nasta/noodles/buff-keema-noodles.png'
import v_keemaNoodles from '../../../assets/img/Nepali-nasta/noodles/chicken-keema-noodles.png'




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
import paneer_chilly from '../../../assets/img/snacks/paneer-chilly.png'
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




// Breakfast Data
const breakfast = [
  {
    id: uuidv4(),
    title: "Boiled Egg",
    img: boiled_egg,
    imgArr: [boiled_egg_1, boiled_egg_2, boiled_egg_3,],
    price: 50,
    discountPercentage: 10,
    description: "A classic boiled egg, cooked to perfection with a tender white and rich, creamy yolk. This nutritious snack is rich in protein, making it an ideal choice for breakfast or a light snack that can be enjoyed anytime.",
    rating: 4.0,
    likes: 95,
    category: "breakfast",
  },
  {
    id: uuidv4(),
    title: "Grilled Buff Sandwich",
    img: grilled_buff_sandwich,
    imgArr: [Grilled_Buff_Sandwich_1, Grilled_Buff_Sandwich_2, Grilled_Buff_Sandwich_3, grilled_buff_sandwich],
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
    img: grilled_chicken_sandwich,
    imgArr: [grilled_chicken_sandwich],
    price: 120,
    discountPercentage: 10,
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
    img: sandwich,
    imgArr: [sandwich],
    price: 80,
    discountPercentage: 10,
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
    price: 110,
    discountPercentage: 10,
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
    img: c_steam_momo,
    imgArr: [c_steam_momo],
    price: 150,
    discountPercentage: 10,
    description: "Enjoy Nepal mot loved food 'Momo'. A soft fluffy dumpling filled with juicy and flavorful chicken, often served with a spicy sauce 'achar' offers alight yet satisfying bite.",
    rating: 4.8,
    likes: 200,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Stem Momo (Veg)",
    img: v_steam_momo,
    imgArr: [v_steam_momo],
    price: 140,
    discountPercentage: 10,
    description: "Soft steamed dumplings packed with the flavorful mixture of fresh vegetables. It is light & healthy and perfect for satisfying snack, served with a tangy dipping sauce to complement the delicious veggie filling.",
    rating: 4.4,
    likes: 130,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Stem Momo (Buff)",
    img: b_steam_momo,
    imgArr: [b_steam_momo],
    price: 160,
    discountPercentage: 10,
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
    price: 160,
    discountPercentage: 10,
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
    price: 170,
    discountPercentage: 10,
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
    price: 170,
    discountPercentage: 10,
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
    price: 160,
    discountPercentage: 10,
    description: "A perfect combination of soft and crispy, Kothey Momo. Buff Kothey Momo half-fried and half-steamed, filled with delicious mixture of buff meat. These Momo are golden on the bottom and tender on top, served with a spicy dipping sauce for extra flavor.",
    rating: 4.5,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Kothe Momo (Chicken)",
    img: c_k_momo,
    imgArr: [c_k_momo],
    price: 160,
    discountPercentage: 10,
    description: "A perfect combination of soft and crispy, Kothey Momo. Kothey Momo half-fried and half-steamed, giving them a unique texture. These Momo are golden on the bottom and tender on top, served with a spicy dipping sauce for extra flavor..",
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
    price: 150,
    discountPercentage: 10,
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
    price: 160,
    discountPercentage: 10,
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
    price: 140,
    discountPercentage: 10,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day..",
    rating: 4.3,
    likes: 180,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Crunchy Fried Rice",
    img: crunchy_firedRice,
    imgArr: [crunchy_firedRice],
    price: 155,
    discountPercentage: 10,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day..",
    rating: 4.6,
    likes: 220,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Sukuti Fried Rice",
    img: s_firedRice,
    imgArr: [s_firedRice],
    price: 170,
    discountPercentage: 10,
    description: "Savor a bowl of savory fried rice mixed with eggs, fresh vegetables, and your choice of meat. This simple yet satisfying dish is perfect for a quick meal that's packed with flavor and can be enjoyed any time of the day.",
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
    img: veg_chowmein,
    imgArr: [veg_chowmein],
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
    img: c_chowmein,
    imgArr: [c_chowmein],
    price: 50,
    discountPercentage: 10,
    description: "Savory chicken chowmein with tender chicken pieces and stir-fried noodles.",
    rating: 4.0,
    likes: 95,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Chowmein (buff)",
    img: b_chowmein,
    imgArr: [b_chowmein],
    price: 50,
    discountPercentage: 10,
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
    price: 80,
    discountPercentage: 10,
    description: "A fusion of traditional Nepali Sukuwa (smoked meat) with chowmein, offering a smoky and spicy flavor.",
    rating: 4.3,
    likes: 80,
    category: "nepali nasta"
  },
  {
    id: uuidv4(),
    title: "Egg with veg chowmein",
    img: egg_chowmein,
    imgArr: [egg_chowmein],
    price: 120,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
    description: "Delight in noodles topped with seasoned chicken or buffalo keema, offering a burst of flavor in every bite. This tasty dish is rich in protein and is perfect for a satisfying lunch or dinner that will leave you feeling fulfilled.",
    rating: 4.5,
    likes: 120,
    category: "keema noodle"
  },
  {
    id: uuidv4(),
    title: "Keema Noodle (veg)",
    img: v_keemaNoodles,
    imgArr: [v_keemaNoodles],
    price: 100,
    discountPercentage: 10,
    description: "A classic vegetable stir-fried noodle with fresh veggies and flavorful spices.",
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
    img: c_cheeseball,
    imgArr: [c_cheeseball],
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
    imgArr: [cheeseball2],
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
    title: "Chicken Burger with Fries",
    img: chicken_burger_with_fries,
    imgArr: [chicken_burger_with_fries],
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
    description: "Indulge in a tasty buffalo burger served in a toasted bun with crispy fries. This hearty meal is packed with flavor and is perfect for satisfying your hunger while enjoying a delicious twist on a classic favorite.A hearty buff burger complemented by crispy fries, ideal for burger lovers.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Double Patty Burger (Big Boy Burger)",
    img: double_patty_burger,
    imgArr: [double_patty_burger],
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
    description: "A spicy dish of buffalo meat cooked with chilies, bringing a burst of flavor in every bite.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Paneer Chilly",
    img: paneer_chilly,
    imgArr: [paneer_chilly],
    price: 100,
    discountPercentage: 10,
    description: "A vegetarian delight of paneer cubes stir-fried with chilies, offering a spicy crunch.",
    rating: 4.5,
    likes: 120,
    category: "snacks"
  },
  {
    id: uuidv4(),
    title: "Veg Spring Roll",
    img: veg_spring_roll,
    imgArr: [veg_spring_roll],
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    price: 100,
    discountPercentage: 10,
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
    title: "Chicken Lolipop",
    img: c_lolipop,
    imgArr: [c_lolipop],
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
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
    price: 200,
    discountPercentage: 10,
    description: "Tender chicken mixed with sweet pineapple and fresh vegetables, creating a delicious and tropical salad. This vibrant dish is perfect for lunch or a light dinner, bringing a taste of the islands to your table.A creamy Russian salad made with boiled vegetables, apples, and peas, mixed with mayonnaise and a hint of sweetness. It's a refreshing, light option that complements any meal.",
    rating: 4.6,
    likes: 160,
    category: "salad"
  },
];





//biryanin
import biryani1 from '../../../assets/img/biryani.webp'

// Biryani Data
const biryani = [
  {
    id: uuidv4(),
    title: "Biryani",
    img: biryani1,
    imgArr: [biryani1],
    price: 200,
    discountPercentage: 10,
    description: "A fragrant rice dish cooked with tender meat or vegetables and a blend of spices. This aromatic biryani is rich in flavor and texture, making it a beloved meal for those who enjoy hearty, traditional cuisine.",
    rating: 4.6,
    likes: 160,
    category: "biryani"
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


// 
const OfferSlideData = [
  snack[4],
  snack[1],
  snack[0],

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
  biryani,
  snack,
  crispy,
  salad,


  // highlights
  OfferSlideData,
  mostSold,
  mostPopular,
  exclusiveOffer
};

export default menuData;
