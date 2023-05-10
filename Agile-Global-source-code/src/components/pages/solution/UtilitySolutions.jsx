import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import tickIcon from '../../../images/solution/custom-app/tick.svg'
import utilityBlueBg from '../../../images/solution/utility/utility-blue-bg.svg'
import utilityFrontImg from '../../../images/solution/utility/utility-front-bg.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const UtilitySolutions = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])

  return (
    <>
         <div data-aos="fade-up">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] utility-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>UTILITY SOLUTIONS
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>We have worked to deliver on nodal and other compliance projects with many utility firms and ISOs around the nation.</p>

        </div>
      </div>

      {/* blue div */}
      <div data-aos="fade-up" className=' py-6 px-3 lg:py-10 lg:px-20 xl:px-44 flex items-center justify-center flex-col bg-[#023267]   '>
        <p className='text-[18px] sm:text-[24px] leading-[30px] text-white text-center sm:text-start  '>Increased regulation, higher production costs, and environmental concerns all contribute to the need for reducing costs thru the use of more advanced technology and applications. Agile Global has consistently partnered with our Utility Sector clients to make a difference. With a strong history of providing not only technical talent but SME and Executive level resources to assist with their cutting edge processes, Agile Global is a valuable partner within the energy community. Our 100% customer retention tells the story……..
</p>

{/* li ul */}
 <div data-aos="fade-down" className=' flex w-full '>
     {/* white bg li div */}
     <div className=' w-full text-white flex flex-col gap-1 sm:flex-row sm:gap-5 items-start justify-center sm:items-center sm:justify-between  py-4 px-7 '>
        <ul className=' flex flex-col items-start justify-start gap-1 lg:w-[373px]'>
          <li className='list-disc text-[18px] md:text-[20px]'>Market Research</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Market Trials</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Solutions Architecture</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Application Development</li>
        </ul>

        <ul className=' flex flex-col items-start justify-start gap-1 lg:w-[373px]'>
          <li className='list-disc text-[18px] md:text-[20px]'>Siebel Development</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Operations Analysis</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Executive Placements</li>
          <li className='list-disc text-[18px] md:text-[20px]'>Networking and Mobile Applications </li>
        </ul>
      </div>
 </div>
      </div>



      {/* client include :  */}
        {/* below hero section */}
        <div data-aos="zoom-in" className='my-8 flex flex-col items-center justify-center'>
                <p className='text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7'>CLIENTS INCLUDE:</p>

                {/* image and text div */}
                <div className='flex flex-col items-center justify-center gap-9 lg:flex-row px-3 lg:px-20'>
                    {/* img div */}
                    <div className='enterprise-outter-card-eff rounded-[60px] relative'>
                    <img className='' src={utilityBlueBg} alt="" />
                    <img className='enterprise-inner-card-img enterprise-service-front-img-tilt rounded-[60px] absolute bottom-4 sm:left-6  sm:w-auto' src={utilityFrontImg} alt="" />
                    </div>
                  
                    {/* content div */}
                    <div className='flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4'>
                        <ul className='flex items-start flex-col justify-center gap-1'>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p> One of the ten largest public utilities in the United States</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3 '> <img src={tickIcon} alt="" /> <p>A large Independent Systems Operator in TX.</p>  </li>
                            <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>One of the largest ISO’s in the United States.</p>  </li>
                          
                        </ul>
                    </div>
                </div>

    

            </div>


 {/* see what we have.... */}
 <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-16'>
                <p className='text-[24px] font-semibold text-center'>See what we have been recently</p>
                 {/* hr line */}
                 <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-3 mb-6 ' ></div>

                 {/* social media icons */}
                 <div className='flex items-center justify-center gap-2'>
                    <img src={inIcon} alt="" />
                    <img src={instaIcon} alt="" />
                    <img src={twIcon} alt="" />
                 </div>
            </div>
    </>
  )
}

export default UtilitySolutions