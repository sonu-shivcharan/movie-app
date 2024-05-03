import React from 'react'

function Pagination(props) {
  return (
    <div className='bg-blue-200/40 p-4 my-10 flex justify-center items-center'>
       <div onClick={props.handlePrevPage}><i className="fa-solid fa-arrow-left hover:cursor-pointer"></i></div>
       <div className='font-bold px-4 hover:cursor'>{props.currPage}</div>
       <div onClick={props.handleNextPage}><i className="fa-solid fa-arrow-right hover:cursor-pointer"></i></div>
    </div>
  )
}

export default Pagination