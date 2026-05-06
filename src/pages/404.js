import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-orange-100 px-4 py-8 sm:px-6 md:px-8">
        {/* Back Button */}
        <div className="fixed top-4 left-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-white/50 transition duration-200 text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Error Container */}
        <div className="flex flex-col gap-6 sm:gap-8 items-center text-center max-w-md">
          {/* Error Code */}
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-red-600">404</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-600 mx-auto rounded"></div>
          </div>

          {/* Error Message */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>

          {/* Decorative Icon */}
          <div className="text-5xl sm:text-6xl">🔍</div>

          {/* Home Button */}
          <Link 
            href="/" 
            className="text-white text-base sm:text-lg font-semibold px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md w-full sm:w-auto"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  )
}