
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa6"; // Updated import for icons
import { GoStarFill } from "react-icons/go";
import { addToCart, increaseItemQuantity, decreaseItemQuantity } from '../../features/cartSlice'; // Import Redux actions
import PopularDishData from '../../assets/Data/PopularDishData'; // Adjust the import based on your data structure

const DetailPage = () => {
  const nav = useNavigate();
  const { id } = useParams(); // Get the product id from the URL
  const product = PopularDishData.find(item => item.id === parseInt(id)); // Find the product by id
  const dispatch = useDispatch();
  const cart = useSelector(state => state.allCart.cart); // Updated line

  // Find if the product is already in the cart
  const cartItem = cart.find(item => item.id === product?.id);

  if (!product) {
    return <h2>Product not found</h2>; // Handle case where product doesn't exist
  }

  const handleAddToCart = () => {
    const discountedPrice = product.discountPercentage
      ? Math.round(product.price * (1 - product.discountPercentage / 100))
      : product.price; // Calculate discounted price

    if (cartItem) {
      dispatch(increaseItemQuantity(product.id)); // Increase quantity if product is already in cart
    } else {
      dispatch(addToCart({ ...product, price: discountedPrice })); // Add product with discounted price to cart
    }
  };

  const handleDecreaseQuantity = () => {
    if (cartItem?.quantity > 1) {
      dispatch(decreaseItemQuantity(product.id)); // Decrease quantity if there's more than 1
    }
  };

  const afterDiscount = product.price * (1 - product.discountPercentage / 100)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 bg-clay py-5 px-5 lg:px-20 space-y-10'>
      {/* img */}
      <div className='lg:col-span-6 flex justify-center items-center mb-5 lg:mb-0'>
        <img
          src={product.img}
          alt={product.title}
          className='w-full sm:w-[360px] lg:w-[80%] h-auto rounded-lg' // Use h-auto for responsive height
        />
      </div>

      {/* details */}
      <div className='lg:col-span-6 flex flex-col gap-5 relative'>
        <h2 className='font-bold lg:text-3xl text-xl'>{product.title}</h2>
        <p className='text-secendaryText text-base '>{product.description}</p>

        <div className="space-y-3">
          <p className='space-x-2 text-lg'>
            <span className='font-semibold'>Cooking Time:</span>
            <span>{product.cookingTime || '30 min'}min</span>
          </p>

          <p className='space-x-2 text-base'>
            <span className='font-semibold text-lg'>Discount:</span>
            <span className='text-green-500 font-bold'>
              {product.discountPercentage ? `${product.discountPercentage}%` : 'Not Available'}
            </span>
          </p>
          {
            product.discountPercentage ?
              <p className='relative'>Rs.
                <span className='pr-3'>
                  {product.price}
                  <span className='border-b-2 border-red-500 px-4 absolute top-3 left-[21px]'></span>
                  {afterDiscount}
                </span>
              </p>
              :
              ""
          }

          {product.discount ? (
            <p className='font-semibold space-x-2 text-lg'>
              Rs.
              <span className="relative">
                <span>{product.price}</span>
                <span className="border-b-2 border-colorRed px-4 absolute top-[10px] left-0 "></span>
              </span>
              <span className='font-bold'>
                {Math.round(product.price * (1 - product.discount / 100))}
              </span>
            </p>
          ) : ""}

          {/* add */}
          <div className='bg-gray-300 rounded-3xl flex items-center gap-5 w-fit p-1 mt-5'>
            <button
              className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'
              onClick={handleDecreaseQuantity} // Decrease item quantity
            >
              <FaMinus />
            </button>
            <span>{cartItem ? cartItem.quantity : 0}</span>
            <button
              className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'
              onClick={handleAddToCart} // Increase item quantity or add to cart
            >
              <FaPlus />
            </button>
          </div>
          {/* add */}
        </div>

        <div className="h-10">
          <div className="flex justify-between items-center px-5 absolute bottom-0 w-full text-sm">
            <span className='flex items-center gap-1 '>
              <GoStarFill size={30} color="gold" />{'(No data)'}
            </span>
            <div className='space-x-1'>
              <button className="bg-colorRed text-white font-semibold text-lg px-8 py-2">
                Purchase
              </button>
              <button
                onClick={() => nav('/takeout-location-near-me')}
                className="bg-black text-white font-semibold text-lg px-8 py-2">
                Takeout
              </button>
            </div>
            <span className='flex items-center gap-1'>
              <FaHeart size={30} color="red" />{'(No data)'}
            </span>
          </div>
        </div>
      </div>
      {/* details */}


      {/* Suggestion */}
      <div className='col-span-full space-y-5'>
        <h2 className='text-2xl font-semibold text-center'>
          Best With {product.title}
        </h2>

        <div className='w-[260px] h-[300px] bg-white shadow-lg mx-auto'>
          <p className='text-gray-500 flex justify-center items-center pt-20'>No Data for now!</p>
        </div>
      </div>
    </div >
  );
};

export default DetailPage;
