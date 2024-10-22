const Stat = () => {
  return (
    <section className="py-11">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">700</h1>
            <p className="mt-2">Of “high-performing” level are led by a certified project manager</p>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">1200+</h1>
            <p className="mt-2">That meets quality standards required by our users</p>
          </div>
          <div className="w-full md:w-1/4">
            <h1 className="bg-gradient-to-b from-orange-300 to-red-900 bg-clip-text text-transparent text-5xl font-extrabold">&gt;300</h1>
            <p className="mt-2">Actively engage team members that finishes on time</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Stat