import React, { useState } from "react";
import Button from "../Ui/Button";

function Waitlist() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      setMessage("Please enter a valid email.");
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx13h6lmak3b-q1HV1GAKbBc6b-0KkG1nU_QBwdsQUHWkl06B-Up9WzULXp0HiY1DZYNg/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({ email }),
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "text/plain;charset=utf-8",
        },
        // mode: "no-cors",
      });
      const result = await response.json();
      console.log(result);
      // console.log(response)
      if (response.ok) {
        setMessage("Thank you! You've been added to the waitlist.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage("Error: " + error.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay with opacity */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 object-cover w-full h-full "
          autoPlay
          loop
          muted
        >
          <source src="/assets/FFTTvideo.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
          <div className="flex flex-col items-center text-center max-w-screen-md">
            <div className="container bg-[#8A50F0] max-w-[211.1px] text-white mb-6 rounded-[9.6px_9.6px_1px_9.6px]">
              <div className="px-[9.6px] py-[4.8px]">Coming soon</div>
            </div>
            <h1 className="gradient-text text-center font-semibold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
              Start generating your own meal plans
            </h1>
            <p className=" text-base text-[#FFFFFF]  font-light leading-[1.55]  max-w-[520px] mt-6 mb-10">
              Ditch the generic recommendations and get local meal plans based
              on your needs. Leave your email and we&apos;ll let you know when
              to begin!
            </p>
            <form
              className="relative w-full h-full max-w-[440px]"
              onSubmit={handleSubmit}
            >
              <input
                className=" w-full p-4 pr-32 font-medium placeholder-opacity-100 border rounded-full focus:outline-none  bg-neutral-800 text-[#FFFFFF] border-[#C566A6]"
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="sample@email.com"
                required
              />
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#ff7c5b] to-[#8a50f0] text-[#FFFFFF] px-4 py-2 rounded-full ml-8"
                type="submit"
              >
                Join waitlist
              </Button>
            </form>
            {message && <p className="text-white mt-4">{message}</p>}
          </div>
        </div>
        {/* Trademark Section and Positioning */}
        <div className="flex flex-col justify-start items-start fixed bottom-0  mt-4 text-sm text-white w-full px-4">
          {/* <span className="mr-40 "> */}© 2024 FoodForethought. | All rights
          reserved.
          {/* </span> */}
        </div>
      </div>
    </div>
  );
}

export default Waitlist;
