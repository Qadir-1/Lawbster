import React from 'react'
import HOC from './User/HOC'

const Ninth = () => {
  return (
    <>

    <h4 className='centerNinthHeading'>Upcoming Consultation</h4>

    <div className='NinthFirst'>
      <div className='left'>


        <div className='two-sec'>
          <img src='./Images/90.png' alt='' />
          <div>
          <h3>Advocate. Yash</h3>
          <h4></h4>
          </div>
        </div>


      </div>

      <div className='right'></div>
    </div>

    </>
  )
}

export default HOC(Ninth)