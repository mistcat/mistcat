
export default function Home() {
  return (


    <>
      {/* ... (previous header code remains unchanged) ... */}
      <main className="bg-[url('/mistcat.jpeg')] h-screen bg-cover bg-no-repeat">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-transparent to-indigo-900/70	 text-white overflow-hidden h-screen">
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left Side: Company Info */}
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Learn.
                  <br />
                  Grow.
                  <br />
                  Be Humble.
                </h1>
                <p className="text-xl mb-8 text-gray-300 w-2/3">
                  Words to live by.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://pathpractical.com"
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"

                  >
                    Consult
                  </a>
                  <a
                    href="https://linkedin.com/in/nateparsons"
                    className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>


            </div>
          </div>

        </section>
        {/* ... (rest of your main content) ... */}
      </main >
      {/* ... (previous script remains unchanged) ... */}
    </>



  );
}
