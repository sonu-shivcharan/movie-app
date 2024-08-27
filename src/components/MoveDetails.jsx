import React from "react";

function MoveDetails({ movieDetails, setIsHiddenDetails }) {
  console.log(movieDetails);
  function checkTarget(e) {
    const id = e.target.id;
    if (id == "close-btn" || id == "details-overlay") setIsHiddenDetails(true);
  }
  return (
    <div
      id="details-overlay"
      className="h-screen bg-gray-800/80 w-screen fixed top-0 z-50 flex justify-center items-center"
      onClick={checkTarget}
    >
      <div className="max-w-[700px] h-[95%] bg-white/100 m-8 overflow-y-auto rounded-xl relative">
        <div>
          <div className="max-w-[100%] mx-auto rounded relative">
            <span
              id="close-btn"
              className="fa fa-close  z-60 text-2xl text-white bg-black/50 px-2 top-5 right-5 absolute rounded"
            ></span>
            <img
              className="w-full min-h-[200px]"
              src={`https://images.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
              alt={movieDetails?.original_title}
            />
            <h3 className="gradient-bg text-2xl font-bold h-[150px] text-center w-full bottom-0">
              {movieDetails?.original_title}
            </h3>
          </div>
          <div className="m-4">
            <div className="flex justify-center gap-3 flex-wrap">
              <h4 className="font-bold text-gray-600">
                Release Date : {movieDetails.release_date}
              </h4>
              <h4 className="font-bold text-gray-600">
                Rating: {parseFloat(movieDetails.vote_average).toFixed(1)}
              </h4>
            </div>
            <div className="description m-4">
              <h4 className="font-bold text-2xl py-2">Overview</h4>
              <p className="text-gray-700"> {movieDetails.overview}</p>
            </div>
            <div className="details mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoveDetails;
