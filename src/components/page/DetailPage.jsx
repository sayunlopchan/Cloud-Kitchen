import { useParams } from 'react-router-dom';
import PopularDishData from '../../assets/Data/PopularDishData'; // Adjust the import based on your data structure

const DetailPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = PopularDishData.find(item => item.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <h2>Product not found</h2>; // Handle case where product doesn't exist
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 bg-clay py-10'>
      <div className='md:col-span-6 flex justify-center items-center'>
        <img
          src={product.img}
          alt={product.title}
          className='w-[90%] h-[380px] rounded-xl'
        />
      </div>
      <div className='md:col-span-6'>
        <h2 className='font-bold lg:text-3xl'>{product.title}</h2>
        <p className='text-secendaryText'>{product.description}</p>

        <p className='space-x-2'>
          <span className='font-semibold text-xl'>
            Cooking Time:
          </span>
          <span>

            {
              product.cookingTime ?
                product.cookingTime : '30min'
            }
          </span>
        </p>
        <p className='space-x-2'>
          <span className='font-semibold text-xl '>
            Discount:
          </span>
          <span className='text-green-500 font-bold text-lg'>
            {
              product.discount ? (product.discount + '%') : 'Not Available'
            }
          </span>
        </p>

        {
          product.discount ?
            <p className='line-through text-colorRed font-bold'>
              {product.price * product.discount / 100 - 1}
            </p>
            :
            <p className='font-semibold text-xl space-x-2'>
              Rs.
              <span className=' text-lg'>
                {product.price}
              </span>
            </p>
        }
      </div>
      <div className='md:col-span-12'>others</div>
    </div>
  );
};

export default DetailPage;
