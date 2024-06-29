// import React, { useState } from "react";
// import Button from "../Ui/Button";

// function Waitlist() {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [loading, setLoading] = useState(false); // New loading state
//   const [success, setSuccess] = useState(false); // New success state

//   const handleInputChange = (e: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setEmail(e.target.value);
//   };

//   const validateEmail = (email: string) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     if (!email) {
//       setMessage("Please enter an email.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }

//     setLoading(true); // Start loading

//     const scriptURL =
//       "https://script.google.com/macros/s/AKfycbx13h6lmak3b-q1HV1GAKbBc6b-0KkG1nU_QBwdsQUHWkl06B-Up9WzULXp0HiY1DZYNg/exec";

//     try {
//       const response = await fetch(scriptURL, {
//         method: "POST",
//         redirect: "follow",
//         body: JSON.stringify({ email }),
//         headers: {
//           // "Content-Type": "application/json",
//           "Content-Type": "text/plain;charset=utf-8",
//         },
//         // mode: "no-cors",
//       });
//       const result = await response.json();
//       console.log(result);
//       // console.log(response)
//       if (response.ok) {
//         setMessage("Thank you! You've been added to the waitlist.");
//         setSuccess(true); // Set success state to true
//         setEmail("");
//       } else {
//         setMessage("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         setMessage("Error: " + error.message);
//       } else {
//         setMessage("An error occurred. Please try again later.");
//       }
//     } finally {
//       setLoading(false); // End loading
//     }
//   };
//   // Reset the form to initial state
//   const resetForm = () => {
//     setMessage("");
//     setSuccess(false);
//     setEmail("");
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Overlay with opacity */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         {/* Video background */}
//         <video
//           className="absolute top-0 left-0 object-cover w-full h-full "
//           autoPlay
//           loop
//           muted
//         >
//           <source src="/assets/FFTTvideo.mp4" type="video/mp4" />
//         </video>
//       </div>
//       {/* Content */}
//       <div className="relative z-10 max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         {!success ? ( // Render form if not successful
//         <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
//           <div className="flex flex-col items-center text-center max-w-screen-md">
//             <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
//               <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
//             </div>
//             <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
//               Start generating your own meal plans
//             </h1>
//             <p className=" text-base text-[#FFFFFF]  font-light leading-[1.55]  max-w-[520px] mt-6 mb-10">
//               Ditch the generic recommendations and get local meal plans based
//               on your needs. Leave your email and we&apos;ll let you know when
//               to begin!
//             </p>
//             <form
//               className="relative w-full h-full max-w-[440px]"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 className=" w-full p-4 pr-32 font-medium placeholder-opacity-100 border rounded-full focus:outline-none  bg-neutral-800 text-[#FFFFFF] border-[#C566A6]"
//                 type="email"
//                 value={email}
//                 onChange={handleInputChange}
//                 placeholder="sample@email.com"
//                 disabled={loading} // Disable input while loading
//                 // required
//               />

//               <Button
//                 className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full ml-4 ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <svg
//                     className="animate-spin h-5 w-5 mr-3 text-white"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm16.99-2.647A7.963 7.963 0 0120 12h-4c0 2.676 1.344 5.043 3.385 6.486l3.605-3.842z"
//                     ></path>
//                   </svg>
//                 ) : (
//                   "Join waitlist"
//                 )}
//               </Button>
//             </form>
//             {message && <p className="text-white mt-4">{message}</p>}
//           </div>
//           ) : ( // Render success message if successful
//           <div className="flex flex-col items-center text-center">
//             <h2 className="text-3xl text-green-500 font-semibold mb-4">Success!</h2>
//             <p className="text-base text-[#FFFFFF] font-light leading-[1.55] max-w-[800px] mt-6">
//               Thank you for joining the waitlist. We'll notify you when we're ready!
//             </p>
//             <Button
//               className="mt-8 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full"
//               onClick={resetForm}
//             >
//               Join Another Waitlist
//             </Button>
//           </div>
//         )}
//         </div>
//         {/* Trademark Section and Positioning */}
//         <div className="flex flex-col justify-start items-start fixed bottom-0  mt-4 text-sm text-white w-full px-4">
//           {/* <span className="mr-40 "> */}© 2024 FoodForethought. | All rights
//           reserved.
//           {/* </span> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Waitlist;



import React, { useState } from "react";
import Button from "../Ui/Button";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Start loading

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx13h6lmak3b-q1HV1GAKbBc6b-0KkG1nU_QBwdsQUHWkl06B-Up9WzULXp0HiY1DZYNg/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      const result = await response.json();

      if (response.ok) {
        if (result.result === "success") {
          setMessage("Thank you! You've been added to the waitlist.");
          setSuccess(true); // Set success state to true
          setEmail("");

          // Set a timeout to reset the form after 5 seconds (5000 milliseconds)
          setTimeout(() => {
            resetForm();
          }, 5000);


        } else if (result.result === "error") {
          if (result.message === "You’re already on the waitlist!") {
            setMessage(result.message);
          } else {
            setMessage("Something went wrong. Please try again.");
          }
        }
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong, please try again.");
    } finally {
      setLoading(false); // End  loading
    }
  };

  const resetForm = () => {
    setMessage("");
    setSuccess(false);
    setEmail("");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="/assets/FFTTvideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        {!success ? (
          <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
            <div className="flex flex-col items-center text-center max-w-screen-md">
              <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
                <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
              </div>
              <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Start generating your own meal plans
              </h1>
              <p className="text-base text-[#FFFFFF] font-light leading-[1.55] max-w-[520px] mt-6 mb-10">
                Ditch the generic recommendations and get local meal plans based
                on your needs. Leave your email and we&apos;ll let you know when
                to begin!
              </p>
              <form
                className="relative w-full h-full max-w-[440px]"
                onSubmit={handleSubmit}
              >
                <input
                  className="w-full p-4 pr-32 font-medium placeholder-opacity-100 border rounded-full focus:outline-none bg-neutral-800 text-[#FFFFFF] border-[#C566A6]"
                  // type="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="sample@email.com"
                  disabled={loading} // Disable input while loading
                />
                <Button
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full ml-4 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm16.99-2.647A7.963 7.963 0 0120 12h-4c0 2.676 1.344 5.043 3.385 6.486l3.605-3.842z"
                      ></path>
                    </svg>
                  ) : (
                    "Join waitlist"
                  )}
                </Button>
              </form>
              {message && <p className="text-[#FF7C5B] mt-4">{message}</p>}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center justify-center min-h-screen">
            <h2 className="text-3xl text-green-500 font-semibold mb-4">
              Success!
            </h2>
            <p className="text-base text-[#FFFFFF] font-light leading-[1.55] max-w-[800px] mt-6">
              {/* Thank you for joining the waitlist. We&apos;ll notify you when
              we&apos;re ready! */}
              Yes! You&apos;re in. Look out for an email from us!
            </p>
            {/* <Button
              className="mt-8 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full"
              onClick={resetForm}
            >
              Join Another Waitlist
            </Button> */}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-start items-start fixed bottom-0 mt-4 text-sm text-white w-full px-4">
        © 2024 FoodForethought. | All rights reserved.
      </div>
    </div>
  );
}

export default Waitlist;
