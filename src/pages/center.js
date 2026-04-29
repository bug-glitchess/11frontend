import { useState } from "react";
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
      <div className="bg-white w-full flex flex-col py-12 gap-12">
        <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} type="text" placeholder="Enter name" className="bg-gray-100 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg py-2 px-4 mx-8" />
        <input value={emailSearch} onChange={(e) => setEmailSearch(e.target.value)} type="text" placeholder="Enter email" className="bg-gray-100 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg py-2 px-4 mx-8" />
        <div className="bg-white grid grid-cols-5 gap-4 m-4">
          {DataJson.filter((item) => item.first_name.includes(nameSearch) && item.email.includes(emailSearch)).map((item) => {
            const currentIndex = getIndex(item.id);
            const currentProduct = item.products[currentIndex];

            return (
              <div key={item.id} className="flex flex-col gap-4 p-4 bg-white border-black rounded-xl justify-between shadow-md border-1 border-black">
                <div className="w-full h-hug flex justify-between gap-4">
                  <img src={item.image} alt={item.first_name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="w-full h-hug flex flex-col justify-between">
                    <div className="font-bold text-black text-lg">{item.last_name[0]}.{item.first_name}</div>
                    {item.type === "student" ? (
                      <div className="h-hug rounded-xl px-2 py-1 bg-cyan-400 flex items-center justify-center text-green-700 text-[10px]">{item.type}</div>
                    ) : (
                      <div className="h-hug rounded-xl px-2 py-1 bg-green-400 flex items-center justify-center text-yellow-700 text-[10px]">{item.type}</div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-black"><span className="font-semibold">Email:</span> {item.email}</p>
                  <p className="text-black"><span className="font-semibold">Age:</span> {item.age}</p>
                  <p className="text-black"><span className="font-semibold">Country:</span> {item.country}</p>
                  <p className="text-black"><span className="font-semibold">Points:</span> {item.point}</p>
                  <p className="text-black"><span className="font-semibold">Created:</span> {item.created_at}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <button onClick={() => prev(item.id, item.products.length)} className="text-black px-2">◀</button>
                    <img src={currentProduct.image} alt={currentProduct.name} className="w-full h-24 rounded-lg object-cover" />
                    <button onClick={() => next(item.id, item.products.length)} className="text-black px-2">▶</button>
                  </div>
                  <p className="text-center text-black text-sm font-medium">{currentProduct.name}</p>
                  <p className="text-center text-black text-xs">${currentProduct.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}