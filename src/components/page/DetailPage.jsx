import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import PopularDishData from '../../assets/Data/PopularDishData'; // Adjust the import based on your data structure

const DetailPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = PopularDishData.find(item => item.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <h2>Product not found</h2>; // Handle case where product doesn't exist
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 bg-clay py-10 px-5 lg:px-20'>
      <div className='md:col-span-6 flex justify-center items-center mb-5 lg:mb-0'>
        <img
          src={product.img}
          alt={product.title}
          className='w-full md:w-[360px] lg:w-[90%] h-auto rounded-lg' // Use h-auto for responsive height
        />
      </div>
      <div className='md:col-span-6 flex flex-col justify-center'>
        <h2 className='font-bold lg:text-3xl text-xl'>{product.title}</h2>
        <p className='text-secendaryText text-base'>{product.description}</p>

        <p className='space-x-2 text-base'>
          <span className='font-semibold'>Cooking Time:</span>
          <span>{product.cookingTime || '30 min'}</span>
        </p>
        <p className='space-x-2 text-base'>
          <span className='font-semibold'>Discount:</span>
          <span className='text-green-500 font-bold'>
            {product.discount ? `${product.discount}%` : 'Not Available'}
          </span>
        </p>

        {product.discount ? (
          <p className='font-semibold space-x-2'>
            <span>Rs.</span>
            <span className='line-through text-colorRed font-bold'>
              {Math.round(product.price * (1 - product.discount / 100))} {/* Calculate discounted price */}
            </span>
          </p>
        ) : (
          <p className='font-bold text-xl space-x-2'>
            Rs.
            <span>{product.price}</span>
          </p>
        )}

        <div className='bg-gray-300 rounded-3xl flex items-center gap-5 w-fit p-1 mt-5'>
          <button className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'>
            <FaMinus />
          </button>
          <button className='p-1 bg-colorRed text-white font-semibold text-2xl rounded-full'>
            <FaPlus />
          </button>
        </div>
      </div>
      <div className='md:col-span-12 mt-5 lg:mt-0'>Others</div>
    </div>
  );
};

export default DetailPage;
