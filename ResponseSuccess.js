export default function ResponseSuccess ({clickHandler, sentItem}) {
  return (
    <div className="z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 font-copy">
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-5 text-xl font-medium text-gray-900">Your {sentItem} has been sent</p>
              <p className="mt-3 text-sm font-normal text-gray-500">We will get back to you soon.</p>
              <div className="mt-8">
                <button
                  type="button"
                  onClick={clickHandler}
                  className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-normal text-xl text-[#44533c] hover:text-[#f1f0ec] focus:text-[#f1f0ec] transition-all duration-200 border-[#44533c] border-2 rounded-md min-w-[12rem] sm:mt-0 sm:w-auto bg-[#f1f0ec] hover:bg-[#44533c] focus:bg-[#44533c] hover:cursor-pointer"
                >
                  Ok, Thanks!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}