import React from 'react'

const Category = () => {
  return (
    <div className='flex gap-5 justify-center items-center'>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200 '
      >
        All Items
      </div>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200 '
      >
        Main Dishes
      </div>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200'
      >
        Desserts
      </div>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200'
      >
        Breads
      </div>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200'
      >
        Desserts
      </div>
      <div
        className='px-3 py-2 border rounded-full bg-slate-50 cursor-pointer transition-all hover:bg-slate-200'
      >
        Beverages
      </div>
    </div>
  )
}

export default Category