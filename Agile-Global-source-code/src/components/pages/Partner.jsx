
import React , {useEffect , useState} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import homeClient1 from '../../images/home/home-client-1.svg'
import homeClient2 from '../../images/home/home-client-2.svg'
import homeClient3 from '../../images/home/home-client-3.svg'
import homeClient4 from '../../images/home/home-client-4.svg'


import upArrow from '../../images/partner/up-arrow.svg'
import { IoIosArrowUp } from 'react-icons/io'

import RecogImg1 from '../../images/partner/recog-img1.svg'
const Partner = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])

  const [ShowMoreClientLogo, setShowMoreClientLogo] = useState(false)


  return (
    <>
      <div data-aos="fade-up" className='px-3 flex flex-col items-center justify-center gap-2 sm:px-5 md:px-10 lg:px-20 xl:px-44 mt-10'>
        <p className='text-[32px] font-bold sm:text-[40px] md:text-[48px] text-center leading-[58px]  '>OUR PARTNER  MODEL</p>
        <p className='text-[20px] sm:text-[24px] leading-[30px] text-center'>Our clients range from large Fortune 1000 firms to small businesses as well as several State, County and Local government agencies across the United States. Many of our customers are referrals from our existing clientele. Agile Global has a client repeat engagement rate of 98% and D&B Customer approval rating of 94%. </p>
      </div>


      {/* clients logos  */}
      <div data-aos="fade-up" className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-10 sm:mt-0'>
        <img src={homeClient1} alt="" />
        <img src={homeClient2} alt="" />

        <img src={homeClient4} alt="" />
        <img src={homeClient3} alt="" />
      </div>
      {/* clients logo 2nd div */}
      <div data-aos="fade-up" className='hidden lg:flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-10 sm:mt-[-100px]'>
        <img src={homeClient4} alt="" />
        <img src={homeClient3} alt="" />

        <img src={homeClient1} alt="" />
        <img src={homeClient2} alt="" />
      </div>


      {
        ShowMoreClientLogo &&
        // {/* clients logo 2nd div */}
        <div data-aos="fade-up" className=' flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-10 sm:mt-[-100px]'>
          <img src={homeClient3} alt="" />
          <img src={homeClient1} alt="" />

          <img src={homeClient2} alt="" />
          <img src={homeClient4} alt="" />
        </div>
      }

      {/* Swipe down to see more companies */}
      <div data-aos="fade-up" onClick={() => setShowMoreClientLogo(prev => !prev)} className='cursor-pointer flex items-center justify-center flex-col gap-0 '>
        {ShowMoreClientLogo ? <IoIosArrowUp className='font-bold text-[48px]'></IoIosArrowUp> : null}
        <p className='text-[20px] text-center leading-[30px]'>Click to see {ShowMoreClientLogo ? "less" : "more"} companies</p>
        {ShowMoreClientLogo ? null : <img src={upArrow} alt="" />}
      </div>



      {/* text p */}
      <div data-aos="fade-up" className='flex items-center justify-center px-3 sm:px-5 md:px-10 lg:px-20 xl:px-44 mt-10 mb-24'>
        <p className='text-[20px] sm:text-[24px] leading-[30px] text-center   '>AGILE GLOBAL has assisted numerous firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>
      </div>



      {/* Our Recognitions & Awards */}
      <div data-aos="fade-up" className=' flex flex-col sm:flex-row flex-wrap items-center sm:items-start justify-center gap-9 mt-16'>
        <p className='text-[30px] sm:text-[40px] md:text-[48px] leading-[58px] font-semibold text-center sm:text-start sm:w-[300px]'>Our
          <span className='text-[#17519B] '> Recognitions</span> & Awards</p>

        {/* card 1 */}
        <div className=' relative w-[268px] partner-recog-drop-shadow rounded-[20px] partner-recog-bg-div-1 h-[368px] flex items-center justify-center '>
          {/* <img src={RecogImg1} alt="" /> */}
          {/* black bg div */}
          <div className='bg-[#0000007a] transition-all-2s partner-recog-card-inner rounded-b-[20px]  px-5 py-5 absolute bottom-0'>
            <p className='text-[20px] text-center leading-[24px] text-white'>Ranked #3 Top IT Consulting Firm</p>
          </div>
        </div>

        {/* card 2 */}
        <div className=' relative w-[268px] partner-recog-drop-shadow rounded-[20px] partner-recog-bg-div-1 h-[368px] flex items-center justify-center '>
          {/* <img src={RecogImg1} alt="" /> */}
          {/* black bg div */}
          <div className='bg-[#0000007a] transition-all-2s partner-recog-card-inner rounded-b-[20px]  px-5 py-5 absolute bottom-0'>
            <p className='text-[20px] text-center leading-[24px] text-white'>Ranked #3 Top IT Consulting Firm</p>
          </div>
        </div>


        {/* card 3 */}
        <div className=' relative w-[268px] partner-recog-drop-shadow rounded-[20px] partner-recog-bg-div-1 h-[368px] flex items-center justify-center '>
          {/* <img src={RecogImg1} alt="" /> */}
          {/* black bg div */}
          <div className='bg-[#0000007a] transition-all-2s partner-recog-card-inner rounded-b-[20px]  px-5 py-5 absolute bottom-0'>
            <p className='text-[20px] text-center leading-[24px] text-white'>Ranked #3 Top IT Consulting Firm</p>
          </div>
        </div>

      </div>



    </>
  )
}

export default Partner