

const Home_skeleton = () => {
  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-x-5 w-full gap-5">
      <section className="col-span-2  size-full space-y-3 ">
        <div className="h-5 w-[50%] bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="h-10 w-[70%] bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="h-28 w-[80%] bg-gray-300 animate-pulse rounded-lg"></div>

        <div className="flex gap-4 justify-between ">
          <div className="w-full h-[100px] md:size-[200px] bg-gray-300 animate-pulse rounded-lg"></div>
          <div className="w-full h-[100px] md:size-[200px] bg-gray-300 animate-pulse rounded-lg"></div>
          <div className="w-full h-[100px] md:size-[200px] bg-gray-300 animate-pulse rounded-lg"></div>
        </div>

      </section>
      <section className="col-span-1 bg-gray-300 animate-pulse rounded-lg h-[300px] md:size-full hidden md:block">
      </section>
    </div>
  )
}

export default Home_skeleton