import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";

import sliderImg1 from '../../../images/solution/business-int/business-int-1.svg'
import no1 from '../../../images/solution/business-int/no1.svg'
import no2 from '../../../images/solution/business-int/no2.svg'
import no3 from '../../../images/solution/business-int/no3.svg'
import no4 from '../../../images/solution/business-int/no4.svg'


import no5 from '../../../images/solution/business-int/nos5.svg'
import no6 from '../../../images/solution/business-int/nos6.svg'
import no7 from '../../../images/solution/business-int/nos7.svg'
import no8 from '../../../images/solution/business-int/nos8.svg'

import tick from '../../../images/solution/business-int/tick.svg'

import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const BusinessIntelligence = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]



  };
  return (
    <>
      <div data-aos="fade-up" >
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] business-intelligence-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>BUSINESS INTELLIGENCE & EAI
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Understanding relevant data allows organizations make the right decision for their employees, shareholders and customers. Our SMEs specialize in Big Data, Analytics, Data Mining, Data warehousing, Dashboard creation as well as integration of disparate Enterprise applications that do not understand each other.</p>


        </div>
      </div>

      <div data-aos="zoom-in" className='flex flex-col items-center justify-center gap-5 my-10'>
        <p className='text-[36px] font-semibold text-center leading-[39px] text-ce ter'>BUSINESS INTELLIGENCE</p>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-9 px-3'>
          <p className='text-center text-[20px] lg:text-start lg:w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>
          <button className='text-white flex items-center justify-center bg-[#023267] rounded-[10px] gap-2 px-[40px] py-[10px]'>View all <IoIosArrowForward></IoIosArrowForward> </button>
        </div>
      </div>



      {/* slider  */}
      <div data-aos="fade-up" className=' flex items-center justify-center my-[44px]'>
        <Slider className='slider-outter-bus w-[80vw] md:w-[85vw] xl:w-[75dvw]  ' {...settings}>


          <div className=' hover-drop-shadow  my-7 relative business-slider-div !w-[307px] flex items-center justify-center  rounded-[13px] '>
            <img src={sliderImg1} alt="" />
            <div className='absolute  bottom-0 left-0 right-0 mx-auto flex items-center justify-center rounded-t-lg w-[281px] h-[34px] bg-[#98989869] opacity-[100%]' >
              <p className='text-[18px] font-semibold text-white text-center opacity-[100%]'>Data Integration</p>
            </div>
          </div>


          <div className='hover-drop-shadow  my-7  relative !w-[307px]  flex items-center justify-center  rounded-[13px] '>
            <img src={sliderImg1} alt="" />
            <div className='absolute  bottom-0 left-0 right-0 mx-auto flex items-center justify-center rounded-t-lg w-[281px] h-[34px] bg-[#98989869] opacity-[100%]' >
              <p className='text-[18px] font-semibold text-white text-center opacity-[100%]'>Data Integration</p>
            </div>
          </div>


          <div className=' hover-drop-shadow  my-7 relative !w-[307px]  flex items-center justify-center  rounded-[13px] '>
            <img src={sliderImg1} alt="" />
            <div className='absolute  bottom-0 left-0 right-0 mx-auto flex items-center justify-center rounded-t-lg w-[281px] h-[34px] bg-[#98989869] opacity-[100%]' >
              <p className='text-[18px] font-semibold text-white text-center opacity-[100%]'>Data Integration</p>
            </div>
          </div>



          <div className=' hover-drop-shadow  my-7 relative !w-[307px] flex items-center justify-center  rounded-[13px] '>
            <img src={sliderImg1} alt="" />
            <div className='absolute  bottom-0 left-0 right-0 mx-auto flex items-center justify-center rounded-t-lg w-[281px] h-[34px] bg-[#98989869] opacity-[100%]' >
              <p className='text-[18px] font-semibold text-white text-center opacity-[100%]'>Data Integration</p>
            </div>
          </div>

          {/* <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 w-[200px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div>      */}

        </Slider>
      </div>

      {/* enterprise application div blue  */}
      <div data-aos="fade-up" className='bg-[#023267] flex flex-col items-center justify-center p-3 xl:p-6 mt-16'>
        <p className='text-[24px] sm:text-[28px] md:text-[36px] leading-[48px] font-semibold text-white text-center mb-6'>ENTERPRISE APPLICATION INTEGRATION</p>
        <p className='text-center sm:text-start leading-[32px] text-white text-[18px] sm:text-[20px] md:text-[24px] mb-6 lg:px-10 xl:px-32'>Our Business Intelligence (BI) practice helps customers reap the benefits of datawarehouses and dashboards that facilitate decision makers in making quick and crucial decisions for their organizations in this competitive market. We provide services that include:</p>

        {/* outer div of nos.  */}
        <div data-aos="zoom-in" className=' flex flex-col md:flex-row items-start lg:items-center justify-center gap-5'>
          {/* no div  1 to 4*/}
          <div className=' flex flex-col items-start justify-start gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <img src={no1} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Proof of Concepts</p>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <img src={no2} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Tool Analysis and Recommendations</p>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <img src={no3} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Data profiling, cleansing ,& transformation</p>
            </div>


            <div className='flex items-center justify-center gap-2'>
              <img src={no4} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Data migrations and conversions</p>
            </div>

          </div>
          {/* no div  5 to 8*/}
          <div className=' flex flex-col items-start justify-start gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <img src={no5} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Metadata management</p>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <img src={no6} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Enterprise Reporting Solutions</p>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <img src={no7} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Architecture and Implementation</p>
            </div>


            <div className='flex items-center justify-center gap-2'>
              <img src={no8} alt="" />
              <p className='text-white text-start text-[24px] leading-[32px]'>Executive Dashboards</p>
            </div>

          </div>
        </div>

      </div>


      {/* OUR PRODUCT EXPERIENCE INCLUDES: */}
      <div data-aos="fade-up" className='my-14 px-3'>
        <p className='text-[24px] sm:text-[32px] md:text-[36px] leading-[39px] text-center font-semibold mb-11'>OUR PRODUCT EXPERIENCE INCLUDES:</p>
        {/* li divs */}
        <div className='flex items-center justify-center flex-wrap gap-6 lg:px-28 xl:px-52'>
          {/* li 1 */}
          <div className='rounded-[16px] h-[90px] bg-[#023267] gap-3 flex items-center justify-center p-3 px-5 md:w-[401px]'>
            <img src={tick} alt="" />
            <p className='text-[22px] text-white '>TIBCO products</p>
          </div>

          {/* li 1 */}
          <div className='rounded-[16px] bg-[#023267] gap-3 flex items-center justify-center p-3 px-5 md:w-[401px]'>
            <img src={tick} alt="" />
            <p className='text-[22px] text-white '>Candle Products (now acquired by IBM)</p>
          </div>
          {/* li 1 */}
          <div className='rounded-[16px] bg-[#023267] gap-3 flex items-center justify-center p-3 px-5  md:w-[401px]'>
            <img src={tick} alt="" />
            <p className='text-[22px] text-white '>IBM products like MQSI, MQ Series et</p>
          </div>

          {/* li 1 */}
          <div className='rounded-[16px] h-[90px] bg-[#023267] gap-3 flex items-center justify-center p-3 px-5 md:w-[401px]'>
            <img src={tick} alt="" />
            <p className='text-[22px] text-white '>Level8 Products</p>
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

export default BusinessIntelligence