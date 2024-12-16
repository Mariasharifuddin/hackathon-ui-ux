// pages/index.js
import Head from 'next/head';

export default function Home() {
  // Array of car data with image, name, and price
  const cars = [
    { image: '/Catalog 3 (2).png',  price: '$70.00/day' },
    { image: '/Catalog 3 (1).png', price: '$85.00/day' },
    { image: '/Catalog 4.png',  price: '$90.00/day' },
    { image: '/Catalog 2.png', price: '$65.00/day' },
    { image: '/Catalog 3.png',  price: '$75.00/day' },
    { image: '/Catalog 2 (1).png',price: '$80.00/day' },
  ];

  return (
    <>
      <Head>
        <title>Car Rental</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">Car Rental</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm md:text-base">
            Showroom
          </button>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Sidebar */}
            <div className="col-span-12 md:col-span-3 bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Type</h2>
              <ul className="space-y-2">
                <li>
                  <input type="checkbox" /> Sport (10)
                </li>
                <li>
                  <input type="checkbox" /> SUV (12)
                </li>
                <li>
                  <input type="checkbox" /> MPV (6)
                </li>
                <li>
                  <input type="checkbox" /> Sedan (20)
                </li>
                <li>
                  <input type="checkbox" /> Coupe (14)
                </li>
                <li>
                  <input type="checkbox" /> Hatchback (14)
                </li>
              </ul>

              <h2 className="text-lg font-bold mt-6 mb-4">Capacity</h2>
              <ul className="space-y-2">
                <li>
                  <input type="checkbox" /> 2 Person (10)
                </li>
                <li>
                  <input type="checkbox" /> 4 Person (44)
                </li>
                <li>
                  <input type="checkbox" /> 6 Person (10)
                </li>
                <li>
                  <input type="checkbox" /> 8 or More (16)
                </li>
              </ul>

              <h2 className="text-lg font-bold mt-6 mb-4">Price</h2>
              <input type="range" className="w-full" max="100" />
              <p className="text-sm">Max: $100.00</p>
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car, index) => (
                  <div
                    key={index}
                    className="bg-white rounded shadow p-4 flex flex-col items-center"
                  >
                    <img
                      src={car.image}
                      alt={`Car ${index + 1}`}
                      className="w-full h-40 object-cover rounded"
                    />
                    
                    <p className="text-gray-500 text-center">{car.price}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full">
                      Rent Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
