// import React from "react";
// import Header from "../../components/Header/Header";

// const Landing = () => {
//   return (
//     <div>
//       <div>
//         <div className="absolute w-70 ">
// <img
//   src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
//   alt="Netflix logo"
// />
//         </div>
//         <button className="bg-red-600 py-2 px-4 rounded">
//           Sign In
//         </button>
//       </div>
//       <img
//         src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
//         alt="Netflix banner image"
//       />
//     </div>
//   );
// };

// export default Landing;

import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full text-white bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
        className="absolute h-full w-full object-cover opacity-50"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <div className="flex justify-between items-center p-4">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
            className="h-16 md:h-18"
          />
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>

        {/* Hero Section (fills remaining space) */}
        <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Unlimited movies, TV shows, and more
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            Watch anywhere. Cancel anytime.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 rounded text-white w-full border border-gray-300 bg-transparent focus:outline-none focus:border-red-600"
            />
            <button
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded text-white font-semibold w-[200px]"
              onClick={() => navigate("/signup")}
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
