import React from "react";

function Banner({ bannerDetails }) {
  return (
    <div
      id="banner"
      className="relative max-w-[100vw] h-[80vh] bg-gray-400 bg-cover bg-center mt-2"
      style={{
        backgroundImage: `url(https://images.tmdb.org/t/p/original/${bannerDetails.backdropPath})`,
      }}
    >
      <div className="w-full py-10 text-white text-center font-bold text-3xl absolute bottom-0 gradient-bg">
        {bannerDetails.title}
      </div>
    </div>
  );
}

export default Banner;
