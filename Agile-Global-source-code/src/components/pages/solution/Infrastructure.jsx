import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const Infrastructure = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])

  return (
    <>
      <div data-aos="flip-down">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] infrastructure-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>BUSINESS INTELLIGENCE & EAI
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Understanding relevant data allows organizations make the right decision for their employees, shareholders and customers. Our SMEs specialize in Big Data, Analytics, Data Mining, Data warehousing, Dashboard creation as well as integration of disparate Enterprise applications that do not understand each other.</p>


        </div>
      </div>
      {/* blue div text */}
      <div data-aos="flip-up" className='flex items-center justify-center bg-[#023267] '>
        <p className='text-[18px] sm:text-[24px] text-white text-center p-3 sm:p-5 md:p-10 lg:px-48'>With the increased emphasis on cyber and network security, this has become a critical component of our solution offering. Our subject matter experts, many of them CISSP certified, provide the following:</p>
      </div>
      {/* white bg li div */}
      <div data-aos="fade-up" className=' flex flex-col gap-3 md:flex-row md:gap-5 items-center justify-center my-5 py-4 px-7 '>
        <ul className=' flex flex-col items-start justify-start gap-3 lg:w-[373px]'>
          <li className='list-disc text-[18px] md:text-[24px]'>Security Audits</li>
          <li className='list-disc text-[18px] md:text-[24px]'>Business Continuity / Disaster Recovery Planning</li>
          <li className='list-disc text-[18px] md:text-[24px]'>Security Policy deployment</li>
          <li className='list-disc text-[18px] md:text-[24px]'>Security Systems Integration</li>
        </ul>

        <ul className=' flex flex-col items-start justify-start gap-3 lg:w-[373px]'>
          <li className='list-disc text-[18px] md:text-[24px]'>Infrastructure setup and support services</li>
          <li className='list-disc text-[18px] md:text-[24px]'>Security infrastructure design and implementation</li>
          <li className='list-disc text-[18px] md:text-[24px]'>Security Optimization and upgrade</li>
        </ul>
      </div>
      {/* blue bg long div */}


      <div data-aos="fade-up" className='my-5 bg-[#023267] p-3 py-9 flex flex-col items-center justify-center lg:flex-row gap-6'>
        {/* grey card */}
        <div className='flex flex-col items-center justify-center gap-6'>
          {/* grey card 1 */}
          <div className='bg-[rgba(255,255,255,0.80)] rounded-[10px] w-full sm:w-[455px] p-3  '>
            <p className='text-center text-[22px] leading-[30px] text-[#1D1D1E]'>Systems Administration</p>
          </div>

          {/* grey card 1 */}
          <div className='bg-[rgba(255,255,255,0.80)] rounded-[10px] w-full sm:w-[455px] p-3  '>
            <p className='text-center text-[22px] leading-[30px] text-[#1D1D1E]'>Database development & Database Administration</p>
          </div>

          {/* grey card 1 */}
          <div className='bg-[rgba(255,255,255,0.80)] rounded-[10px] w-full sm:w-[455px] p-3  '>
            <p className='text-center text-[22px] leading-[30px] text-[#1D1D1E]'>Network Engineering, Design, Implementation, and Operation/ Network Administration</p>
          </div>

          {/* grey card 1 */}
          <div className='bg-[rgba(255,255,255,0.80)] rounded-[10px] w-full sm:w-[455px] p-3  '>
            <p className='text-center text-[22px] leading-[30px] text-[#1D1D1E]'>Help Desk and Desktop Support</p>
          </div>
        </div>


        {/* side div our smes ... */}
        <div  className='text-white lg:w-[600px] xl:w-[646px]'>
          <p className='text-center text-[24px] sm:text-[36px] font-semibold leading-[48px] '>OUR SMES SPECIALIZE IN:</p>
          <p className=' text-[18px] sm:text-[22] text-center lg:text-start leading-[29px]'>In the Security space we not only ensure the establishment and maintenance of a stable IT infrastructure, but our solution also endows the flexibility required for responding to evolving security needs, with a customized approach unique to each customer.</p>

          {/* box div */}
          <div className='text-white my-6 flex flex-col items-center justify-center gap-5'>
            {/* box row 1 that containe 3 boxes */}
            <div className='flex flex-col items-center justify-center sm:flex-row flex-wrap gap-5'>
              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Obilx</p>
              </div>

              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Firemon</p>
              </div>

              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Tivoli tools</p>
              </div>

            </div>



            {/* box row 2 that containe 3 boxes */}
            <div className='flex flex-col items-center justify-center sm:flex-row flex-wrap gap-5'>
              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Netscreen</p>
              </div>

              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Smartcard</p>
              </div>

              {/* box 1 */}
              <div className='w-[189px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>CISCO IDS
                </p>
              </div>

            </div>


            {/* box row 3 that contains 2 boxes */}
            <div className='flex flex-col items-center justify-center sm:flex-row flex-wrap gap-5'>
              {/* box 1 */}
              <div className=' w-full sm:w-[300px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2 px-5 sm:px-0'>Netegrity Siteminder SSO</p>
              </div>

              {/* box 1 */}
              <div className=' w-full sm:w-[300px] rounded-[10px]  border-2 border-white'>
                <p className='text-center py-2'>Sun Sunscreen</p>
              </div>


            </div>

          </div>

        </div>



      </div>


      {/* see what we have.... */}
      <div data-aos="zoom-in" className='flex flex-col items-center justify-center mt-16'>
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

export default Infrastructure