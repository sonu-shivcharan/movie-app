import React from 'react'

function Banner() {
  return (
    <div
    className="h-[80vh] bg-gray-400 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://cdn.marvel.com/content/1x/avengersendgame_lob_mas_mob_01.jpg)",
        position:"relative",
    }}
  >
    <div className='w-full py-8 text-white text-center font-bold text-2xl absolute bottom-0 gradient-bg'>Avengers Endgame</div>
  </div>
  )
}

export default Banner