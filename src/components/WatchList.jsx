import React from "react";

function WatchList() {
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-gray-100 my-4 p-3 max-w-[350px] w-full rounded-xl outline-none"
        />
      </div>
      <div className="p-4">
        <table className="w-full">
          <thead className="bg-blue-400/30 text-blue-900 p-4 border-b-[3px] ">
            <tr className="py-[1rem]">
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="flex items-center border-b-[3px]">
                <img className="w-[150px] p-2" src="https://rukminim2.flixcart.com/image/850/1000/l3bx5e80/poster/p/x/m/small-kgf-poster-kgf-yash-movie-poster-for-room-kgf-chapter-2-original-imageh8qchumcz8k.jpeg?q=20&crop=false"></img>
                <div className="mx-4">Name</div>
              </td>
              <td>9.7</td>
              <td>9.7</td>
              <td>9.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
