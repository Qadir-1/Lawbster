import React from 'react'
import HOC from './User/HOC'

const TwelveScreen = () => {
  return (
    <>
        <div className='twelveFirst'>
            <div className='left'>
                <p className='head'>Saved Documents</p>

                <div className='two-sec'>
                <p>Case name:45623afasfs</p>
                <img src='./Images/100.png' alt='' />
                </div>
                <div className='two-sec'>
                <p>Case name:45623afasfs</p>
                <img src='./Images/100.png' alt='' />
                </div>
                <div className='two-sec'>
                <p>Case name:45623afasfs</p>
                <img src='./Images/100.png' alt='' />
                </div>
                <div className='two-sec'>
                <p>Case name:45623afasfs</p>
                <img src='./Images/100.png' alt='' />
                </div>
            </div>

            <div className='right'>
                    <p>Case notes</p>
            </div>
        </div>
    </>
  )
}

export default HOC(TwelveScreen)