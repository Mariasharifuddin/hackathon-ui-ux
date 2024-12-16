export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col sm:flex-row">
      {/* Left Sidebar */}
      <aside className="border-b sm:border-r w-full sm:w-56 p-4 flex-shrink-0">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img
            src="/Nav Bar Side (2).png"
            alt="Sidebar Image"
            className="w-full h-full object-cover"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Top Section */}
        <div className="bg-white w-full flex flex-col sm:flex-row justify-center items-center p-4 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="bg-white border rounded-lg overflow-hidden w-full sm:w-[492px] h-auto">
            <img
              src="/View.png"
              alt="Complete Image"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-tl-[10px] overflow-hidden w-full sm:w-[492px] h-auto">
            <img
              src="/Rental Summary.png"
              alt="Complete Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {/* Row 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 4 (1).png"
              alt="Card 1"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 3 (2).png"
              alt="Card 2"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 1.png"
              alt="Card 3"
              className="w-full h-auto object-contain rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 3.png"
              alt="Card 4"
              className="w-full h-auto object-contain rounded"
            />
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 2 (2).png"
              alt="Card 5"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <img
              src="/Catalog 3 (1).png"
              alt="Card 6"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
