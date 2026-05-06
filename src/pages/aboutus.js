import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex justify-center items-center px-4 py-8 sm:px-6 md:px-8">
        
        {/* Back Button */}
        <div className="fixed top-4 left-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-white/50 transition duration-200 text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>  

        {/* About Us Container */}
        <div className="w-full max-w-4xl mt-12 sm:mt-0">
          <div className="bg-white p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            {/* Text Content */}
            <div className="flex flex-col justify-center gap-4 sm:gap-6 flex-1">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-2">About Us</h1>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
              </div>
              
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                We are a dedicated team committed to providing exceptional service and innovative solutions. Our mission is to deliver quality and excellence in everything we do, creating meaningful experiences for our users and community.
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✓</span>
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Innovative Solutions</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">We provide cutting-edge technology and solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✓</span>
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Customer Focused</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Your satisfaction is our top priority</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-lg">✓</span>
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm sm:text-base">Professional Team</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Experts dedicated to your success</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center flex-1 min-h-60 sm:min-h-72 md:min-h-80">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSLt6FhzmSi0s78kSkdje4iSV57vKR1Tidw&s" 
                alt="About Us" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain rounded-2xl shadow-lg border-2 border-purple-200 hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}