const Stat = () => {
  return (
    <section className="py-11">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">FAST</h1>
            <p className="mt-2">Quickly prepared to satisfy your cravings without the wait.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">FRESH</h1>
            <p className="mt-2">Made with high-quality ingredients to ensure every bite is flavorful and wholesome.</p>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">HOT</h1>
            <p className="mt-2">Served warm to deliver the perfect taste and comfort in every meal.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Stat