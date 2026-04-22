export default function AboutUs() {
  return (
    <>
        <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center">
            <div className="w-fit h-fit bg-white p-20 flex gap-20 rounded-2xl" >
                <div className="w-200 h-full flex flex-col justify-center" >
                    <h1 className="text-black text-4xl font-bold" >About Us</h1>
                    <p className="text-black text-md mt-4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSLt6FhzmSi0s78kSkdje4iSV57vKR1Tidw&s" alt="About Us" className="w-full h-full object-contain mt-4 rounded-2xl border border-gray-300" />
            </div>
        </div>
    </>
      
  );
}