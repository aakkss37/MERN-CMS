import React from 'react'

const FlipCard = ({}) => {
  return (
  <>
     {/* cards div */}
     <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 px-3'>
        {/* card 1 */}
        <div className='relative emerg-tech-card-1-front-img'>
          {/* front div text  starts*/}
           <div className='absolute px-3 left-0  top-24  text-white '>
            <p className='  font-semibold  text-[24px] text-start my-3'>Proof of Concept</p>
            <p className='text-start text-white text-[16px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at sem id purus viverra porttitor.</p>
            <p>Read more...</p>
           </div>
            {/* front div text  ends*/}
            <div className='emerg-tech-card-1-back-img flex items-center justify-center'>
            <p className='text-center text-white text-[20px] px-2 font-semibold mb-10'>Lorem ipsum dolor sit amet, consverra porttitor.</p>
            </div>
        </div>
    </div>
  </>
  )
}

export default FlipCard