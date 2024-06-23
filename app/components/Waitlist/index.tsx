// import React from "react";
// import Button from "../Ui/Button";
// import backgroundImage from "../../../public/assets/Foodwaitlist.svg";

// function Waitlist() {
//   return (
//     <div
//       className="w-full  sm:h-screen h-full bg-cover "
//       style={{ backgroundImage: `url(${"/assets/Foodwaitlist.svg"})` }}
//     >
//       <div className="max-w-[1440px] mx-auto px-[4%]">
//         <div className="flex flex-col md:flex-row justify-center items-center min-h-[550px]">
//           <div className="flex flex-col items-center text-center">
//             <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
//               <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
//             </div>
//             <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[930.7px]">
//               Start generating your own meal plans
//             </h1>
//             <p className="text-lg font-medium leading-[1.55] max-w-[800px] mt-6 mb-10">
//               Ditch the generic recommendations and get local meal plans based
//               on your needs. Leave your email and we&apos;ll let you know when
//               to begin!
//             </p>
//             <div className="relative w-full max-w-[400px]">
//               <input
//                 className="w-full p-4  pr-16 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-transparent border-[#C566A6]"
//                 type="text"
//                 placeholder="sample@email.com"
//               />
//               <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0]  text-white px-4 py-2 rounded-full">
//                 Join waitlist
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className=" flex  flex-col justify-start items-start mr-40 mt-3 text-sm ">
//           © 2024 FoodForethought. | All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Waitlist;

// import React from "react";
// import Button from "../Ui/Button";

// function Waitlist() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div className="absolute top-0 left-0 w-full h-full"></div>
//       <video
//         className="absolute top-0 left-0 object-cover w-full h-full"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/assets/FFT video.mp4" type="video/mp4" />
//       </video>
//       <div className="relative z-10 max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="flex flex-col md:flex-row justify-center items-center min-h-[550px]">
//           <div className="flex flex-col items-center text-center">
//             <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
//               <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
//             </div>
//             <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[930.7px]">
//               Start generating your own meal plans
//             </h1>
//             <p className="text-lg text-[#FFFFFF] font-medium leading-[1.55] max-w-[800px] mt-6 mb-10">
//               Ditch the generic recommendations and get local meal plans based
//               on your needs. Leave your email and we&apos;ll let you know when
//               to begin!
//             </p>
//             <div className="relative w-full max-w-[400px]">
//               <input
//                 className="w-full p-4 pr-16 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-transparent border-[#C566A6]"
//                 type="text"
//                 placeholder="sample@email.com"
//               />
//               <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-white px-4 py-2 rounded-full">
//                 Join waitlist
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-start items-start mt-3 text-sm text-white w-full px-4">
//           <span className="mr-40">
//             © 2024 FoodForethought. | All rights reserved.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Waitlist;

import React from "react";
import Button from "../Ui/Button";

function Waitlist() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full"></div>
      {/* Video background */}
      <video
        className="absolute top-0 left-0 object-cover w-full h-full "
        autoPlay
        loop
        muted
      >
        <source src="/assets/FFTTvideo.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex flex-col md:flex-row justify-center items-center min-h-[550px]">
          <div className="flex flex-col items-center text-center">
            <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
              <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
            </div>
            <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-[930.7px]">
              Start generating your own meal plans
            </h1>
            <p className="text-lg text-[#FFFFFF] font-medium leading-[1.55] max-w-[800px] mt-6 mb-10">
              Ditch the generic recommendations and get local meal plans based
              on your needs. Leave your email and we&apos;ll let you know when
              to begin!
            </p>
            <div className="relative w-full max-w-[400px]">
              <input
                className="w-full p-4 pr-16 font-medium placeholder-opacity-100 border rounded-full focus:outline-none  bg-neutral-800 text-[#FFFFFF] border-[#C566A6]"
                type="text"
                placeholder="sample@email.com"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full">
                Join waitlist
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-3 text-sm text-white w-full px-4">
          <span className="mr-40">
            © 2024 FoodForethought. | All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
