import Link from "next/link";

export default function Home(){
    return (
        <>
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 justify-center items-center min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 px-4 py-8 sm:px-6 md:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col gap-3 sm:gap-4 items-center text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-700">
                        Welcome
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
                        Explore our platform and discover what we have to offer
                    </p>
                </div>

                {/* Logo */}
                <div className="flex justify-center">
                    <img 
                        src="https://nhs.edu.mn/favicon.ico" 
                        alt="Logo"
                        className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full bg-white p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center">
                    <Link 
                        href="/contact" 
                        className="text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 active:scale-95 text-center min-w-40"
                    >
                        Contact
                    </Link>
                    <Link 
                        href="/aboutus" 
                        className="text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 active:scale-95 text-center min-w-40"
                    >
                        About Us
                    </Link>
                    <Link 
                        href="/center" 
                        className="text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 active:scale-95 text-center min-w-40"
                    >
                        Users
                    </Link>
                    <Link 
                        href="/weather" 
                        className="text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 active:scale-95 text-center min-w-40"
                    >
                        Weather
                    </Link>
                    <Link 
                        href="/extra" 
                        className="text-white text-lg sm:text-xl font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-rose-600 hover:bg-rose-700 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-105 active:scale-95 text-center min-w-40"
                    >
                        Extra
                    </Link>
                </div>
            </div>
        </>
    )
}