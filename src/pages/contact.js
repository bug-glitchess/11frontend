import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 sm:px-6 md:px-8">
        {/* Back Button */}
        <div className="fixed top-4 left-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-white/50 transition duration-200 text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Contact Form Container */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-xs sm:max-w-sm md:max-w-md py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Header */}
          <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
            <h1 className="text-indigo-600 text-2xl sm:text-3xl md:text-4xl font-bold">Contact Us</h1>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">We'd love to hear from you! Send us any questions or feedback.</p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <div className="flex flex-col items-start gap-1.5 sm:gap-2">
              <label className="text-gray-700 text-base sm:text-lg font-semibold">Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="bg-gray-50 w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition duration-200" 
              />
            </div>

            <div className="flex flex-col items-start gap-1.5 sm:gap-2">
              <label className="text-gray-700 text-base sm:text-lg font-semibold">Message</label>
              <textarea 
                placeholder="Enter your message here..."
                className="bg-gray-50 w-full px-3 sm:px-4 py-2 sm:py-3 h-20 sm:h-24 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white resize-none transition duration-200"
              />
            </div>
          </div>

          {/* Send Button */}
          <button className="text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-md">
            Send Message
          </button>
        </div>
      </div>
    </>
  )
}