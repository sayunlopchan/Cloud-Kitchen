import { NavLink } from "react-router-dom"


const TakeoutPage = () => {
  return (
    <div className="p-10 lg:py-5 lg:px-20">

      <div className="flex items-center gap-2 pb-1 pl-5 text-2xl font-semibold ">
        <NavLink
          to={'/cart'}
        >
          CART
        </NavLink>
        &gt;
        <NavLink
          to={'#'}
          className={'text-colorRed'}
        >
          Takeout Location
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 border-2 rounded-lg gap-5 px-3 p-2">
        <h2 className="md:col-span-12 px-3 font-semibold text-lg max-md:order-2">
          Takeout Location
        </h2>

        <div className="md:col-span-7 border-2 flex justify-center rounded-lg overflow-hidden max-md:order-3">
          <div className="h-[400px] w-full bg-gray-400 "></div>
        </div>

        <div className="md:col-span-5 border-2 flex justify-center max-md:order-1">
          <h2 className="font-semibold text-xl lg:text-3xl">Order Summary</h2>
        </div>

      </div>
    </div>
  )
}

export default TakeoutPage