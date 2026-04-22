export default function Contact() {
  return (
    <>
   <div className="flex items-center justify-center h-screen bg-gray-400">
        <div className="flex flex-col gap-12 w-1/3 py-12 px-6 bg-white rounded-lg" >
            <div className="flex flex-col gap-4 items-center" >
                <h1 className="text-black text-4xl font-bold" >Contact Us</h1>
                <p className="text-black text-lg text-center" >Okay bro ask us some shit any type of question you want feel free</p>
            </div>

            <div className="flex flex-col items-start ">
                <p className="text-black text-lg font-bold" >Name</p>
                <input type="text" className="bg-gray-300 w-full text-gray-900 placeholder:text-gray-500 border border-blue-600" />
            </div>
            <div className="flex flex-col items-start ">
                <p className="text-black text-lg font-bold" >Text</p>
                <input type="text" className="h-20 bg-gray-300 w-full text-gray-900 placeholder:text-gray-500 border border-blue-600" />
            </div>
            <button className="text-white text-lg font-semibold px-8 py-4 bg-gray-400" >Send</button>
        </div>

    </div>
   </>
  )
}