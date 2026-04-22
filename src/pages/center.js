import { useState } from "react";
import DataJson from "../utls/data.json"

export default function Center() {
  /*console.log(DataJson);*/
  const [nameSearch, setNameSearch] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  return (
   <>
    <div className="bg-white w-full flex flex-col py-12 gap-12" >
    <input value={nameSearch} onChange={(e) => setNameSearch(e.target.value)} type="text" placeholder="Enter name" className="bg-gray-100 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg py-2 px-4 mx-8" />
    <input value={emailSearch} onChange={(e) => setEmailSearch(e.target.value)} id="emailsearch" type="text" placeholder="Enter email" className="bg-gray-100 text-black placeholder:text-gray-500 border border-gray-300 rounded-lg py-2 px-4 mx-8" />
    <div className=" bg-white grid grid-cols-5 gap-4 m-4" >
      {DataJson.filter((item) => item.first_name.includes(nameSearch) && item.email.includes(emailSearch)).map((item) => ( 
        <div key={item.id} className="flex flex-col gap-4 p-4 bg-white border-black rounded-xl justify-between shadow-md border-1 border-black" >
          <div className="w-full h-hug flex justify-between gap-4">
            <img src={item.image} alt={item.first_name} className="w-16 h-16 rounded-full object-cover" />
            <div className="w-full h-hug flex flex-col justify-between">
                <div className="font-bold text-black text-lg" >{item.last_name[0]}.{item.first_name}</div>
                {item.type === "student" ? (
                <div className="h-hug rounded-xl px-2 py-1 bg-cyan-400 flex items-center justify-center text-green-700 text-[10px]">{item.type}</div>
                ) : (
                <div className="h-hug rounded-xl px-2 py-1 bg-green-400 flex items-center justify-center text-yellow-700 text-[10px]">{item.type}</div>
                )}
            </div>
          </div>  
          <div className="flex flex-col gap-4" >
            <p className="text-black" > <span className="font-semibold" >Email:</span> {item.email}</p>
            <p className="text-black" > <span className="font-semibold" >Age:</span> {item.age}</p>
            <p className="text-black" > <span className="font-semibold" >Country:</span> {item.country}</p>
            <p className="text-black" > <span className="font-semibold" >Points:</span> {item.point}</p>
            <p className="text-black" > <span className="font-semibold" >Created:</span> {item.created_at}</p>
          </div>
          <div className="m-4 flex justify-between align-center" >
                <button className="text-black m-4" >◀</button>
                <img src={item.image} alt={item.first_name} className="w-fill h-24 rounded-lg object-cover" />
                <button className="text-black m-4" >▶</button>
          </div>
        </div>
      ))}
    </div>
   </div>
   </>
  )
}