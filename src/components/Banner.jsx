import React from "react";

function Banner({ bannerDetails }) {
  return (
    <div
      id="banner"
      className="h-[80vh] bg-gray-400 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.tmdb.org/t/p/original/${bannerDetails.backdropPath})`,
        position: "relative",
      }}
    >
      <div className="w-full py-8 text-white text-center font-bold text-2xl absolute bottom-0 gradient-bg">
        {bannerDetails.title}
      </div>
    </div>
  );
}

export default Banner;
