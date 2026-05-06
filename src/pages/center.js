import { useState } from "react";
import Link from "next/link";
import DataJson from "../utls/data.json"

export default function Center() {
  const [nameSearch, setNameSearch] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  const [productIndexes, setProductIndexes] = useState({});

  const getIndex = (id) => productIndexes[id] ?? 0;

  const prev = (id, length) => {
    setProductIndexes(prev => ({
      ...prev,
      [id]: (getIndex(id) - 1 + length) % length
    }));
  };

  const next = (id, length) => {
    setProductIndexes(prev => ({
      ...prev,
      [id]: (getIndex(id) + 1) % length
    }));
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen w-full flex flex-col py-8 sm:py-12 px-4 sm:px-6 md:px-8 gap-8">
        
        {/* Back Button */}
        <div className="fixed top-4 left-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-white/50 transition duration-200 text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700">Users Directory</h1>
          <p className="text-gray-600 text-sm sm:text-base">Search and explore users in our system</p>
        </div>

        {/* Search Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mx-auto w-full max-w-4xl">
          <input 
            value={nameSearch} 
            onChange={(e) => setNameSearch(e.target.value)} 
            type="text" 
            placeholder="Search by name..." 
            className="flex-1 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-300 rounded-lg py-2 sm:py-3 px-4 focus:outline-none focus:border-indigo-500 transition duration-200 text-sm sm:text-base" 
          />
          <input 
            value={emailSearch} 
            onChange={(e) => setEmailSearch(e.target.value)} 
            type="text" 
            placeholder="Search by email..." 
            className="flex-1 bg-white text-gray-900 placeholder:text-gray-400 border-2 border-gray-300 rounded-lg py-2 sm:py-3 px-4 focus:outline-none focus:border-indigo-500 transition duration-200 text-sm sm:text-base" 
          />
        </div>

        {/* User Grid */}
        {DataJson.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase()) && item.email.includes(emailSearch)).length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mx-auto w-full max-w-full">
            {DataJson.filter((item) => item.first_name.toLowerCase().includes(nameSearch.toLowerCase()) && item.email.includes(emailSearch)).map((item) => {
              const currentIndex = getIndex(item.id);
              const currentProduct = item.products[currentIndex];

              return (
                <div key={item.id} className="flex flex-col gap-4 p-4 sm:p-5 bg-white rounded-xl justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  
                  {/* User Header */}
                  <div className="flex justify-between items-start gap-3">
                    <img src={item.image} alt={item.first_name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-md" />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-800 text-sm sm:text-base truncate">{item.last_name[0]}.{item.first_name}</div>
                      <div className="mt-1">
                        {item.type === "student" ? (
                          <div className="inline-block rounded-full px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold">{item.type}</div>
                        ) : (
                          <div className="inline-block rounded-full px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold">{item.type}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex flex-col gap-2 text-xs sm:text-sm border-t border-gray-100 pt-3">
                    <p className="text-gray-700"><span className="font-semibold text-gray-800">Email:</span> <span className="truncate">{item.email}</span></p>
                    <p className="text-gray-700"><span className="font-semibold text-gray-800">Age:</span> {item.age}</p>
                    <p className="text-gray-700"><span className="font-semibold text-gray-800">Country:</span> {item.country}</p>
                    <p className="text-gray-700"><span className="font-semibold text-gray-800">Points:</span> {item.point}</p>
                    <p className="text-gray-700"><span className="font-semibold text-gray-800">Since:</span> {item.created_at}</p>
                  </div>

                  {/* Product Carousel */}
                  <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
                    <div className="flex justify-between items-center gap-2">
                      <button 
                        onClick={() => prev(item.id, item.products.length)} 
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-2 py-1 rounded transition duration-200 text-lg font-bold"
                      >
                        ◀
                      </button>
                      <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-16 sm:h-20 rounded-lg object-cover shadow-sm" />
                      <button 
                        onClick={() => next(item.id, item.products.length)} 
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-2 py-1 rounded transition duration-200 text-lg font-bold"
                      >
                        ▶
                      </button>
                    </div>
                    <p className="text-center text-gray-800 text-xs sm:text-sm font-semibold">{currentProduct.name}</p>
                    <p className="text-center text-indigo-600 text-xs sm:text-sm font-bold">${currentProduct.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-16 sm:py-20">
            <div className="text-5xl sm:text-6xl">🔍</div>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">No Users Found</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {nameSearch || emailSearch 
                  ? "No users match your search criteria. Try adjusting your filters." 
                  : "No users available."}
              </p>
            </div>
            <button 
              onClick={() => {
                setNameSearch("");
                setEmailSearch("");
              }}
              className="text-indigo-600 hover:text-indigo-800 font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-white/50 transition duration-200 text-sm sm:text-base"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}