export default function ResponseError ({clickHandler}) {
  return (
    <div className="z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 font-copy">
      <div className="flex items-center justify-center w-full h-full px-4 py-5 sm:p-6">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-xl">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M479.982-280q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM453-433h60v-253h-60v253Zm27.266 353q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
              </svg>
              <p className="mt-5 text-xl font-medium text-gray-900">Something went wrong!</p>
              <p className="mt-3 text-sm font-normal text-gray-500">Sorry about that. We&apos;ll get that fixed right away.</p>
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