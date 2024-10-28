import React from 'react'

const Detail_Skeleton = () => {
  return (
    <div className='p-2 lg:p-10 space-y-5'>


      <section className='w-full h-2/3 flex '>
        {/* img */}
        <div className='w-2/5 lg:h-[400px] flex justify-center items-center'>

          <div className='size-[200px] lg:size-[300px] border bg-gray-300 animate-pulse'></div>


        </div>
        {/* img */}

        {/* details */}
        <div className='w-3/5 h-full p-5 space-y-2'>
          <div className='w-full h-5 lg:h-16 bg-gray-300 animate-pulse'></div>
          <div className='w-2/3 h-5 lg:h-14 bg-gray-300 animate-pulse'></div>
          <div className='w-2/3 h-5 lg:h-10 bg-gray-300 animate-pulse'></div>

          <div className='flex gap-x-10'>
            <div className='w-2/3 h-5 lg:h-10 bg-gray-300 animate-pulse'></div>
            <div className='w-2/3 h-5 lg:h-10 bg-gray-300 animate-pulse'></div>
          </div>

        </div>
        {/* details */}
      </section>

      <section className='mx-auto w-2/3 h-5 lg:h-10 bg-gray-300 animate-pulse'></section>

      <section className='grid grid-cols-3 lg:grid-cols-4 w-full h-1/3 place-content-center place-items-center pt-5 gap-5'>
        <div className='w-[100px] h-[150px] lg:h-[260px] lg:w-[240px] bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-[100px] h-[150px] lg:h-[260px] lg:w-[240px] bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-[100px] h-[150px] lg:h-[260px] lg:w-[240px] bg-gray-300 animate-pulse rounded-lg'></div>
        <div className='w-[100px] h-[150px] lg:h-[260px] lg:w-[240px] bg-gray-300 animate-pulse rounded-lg hidden lg:block'></div>
      </section>
    </div>
  )
}

export default Detail_Skeleton