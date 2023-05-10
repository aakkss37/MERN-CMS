import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import homeClient1 from '../../../images/home/home-client-1.svg'
import homeClient2 from '../../../images/home/home-client-2.svg'
import homeClient3 from '../../../images/home/home-client-3.svg'
import homeClient4 from '../../../images/home/home-client-4.svg'


import firstImg from '../../../images/home-folder/driver/first-img.svg'

import secondImg from '../../../images/home-folder/driver/second.svg'

import thirdImg from '../../../images/home-folder/driver/third.svg'

import forthImg from '../../../images/home-folder/driver/forth.svg'


const logos = [

    { image: homeClient1 },
    { image: homeClient2 },
    { image: homeClient4 },
    { image: homeClient3 },
    { image: homeClient4 },

]

const Driver = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            {/* text content div */}
            <div data-aos="fade-up" className='text-[16px] sm:text-[18px] text-center md:text-start leading-[30px]  flex flex-col items-center justify-center gap-5 md:gap-10 md:flex-row my-5  py-10 px-3 md:px-6 lg:px-10 xl:px-44'>

                <div className='text-start flex items-center md:items-start flex-col justify-center gap-6'>
                    <p className='text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[58px] text-center md:text-start'>OUR DRIVERS</p>
                    <p className='text-[24px] leading-[30px] text-center md:text-start'>Since our inception there are certain Drivers that have constantly pushed our business to be a constantly evolving Solutions provider. The insatiable quest to outperform and over-deliver coupled with incorporating lessons-learnt to offer best of breed solutions with the customer’s best interest in mind, has been the recipe for success to both our clients and workforce.</p>
                </div>

                <img className='transition ease-in-out delay-150  hover:scale-110  md:w-[300px] rounded-xl lg:w-[500px] xl:w-full' src={firstImg} alt="" />
            </div>


            {/* main div below hero */}
            <div data-aos="fade-up" className='flex flex-col md:flex-row flex-wrap  items-center justify-center lg:justify-evenly gap-10 px-3'>
                {/* only 1 card div */}
                <div className='w-full sm:w-[350px] xl:w-[426px]'>
                    <img className='transition  ease-in-out delay-150  hover:scale-110' src={thirdImg} alt="" />
                    <p className='mt-[-40px] text-[24px] text-center sm:text-start leading-[29px]'>Ranked and recognized as the FASTEST growing company among Sacramento’s 100 fastest, Sacramento Business Journal – 2007, 2010, 2011, 2012, 2013 and 2016.</p>
                </div>


                {/* 2 cards in a coloumn div */}
                <div data-aos="fade-up" className='flex flex-col items-center justify-center '>
                    {/* card 1 */}
                    <div className='w-full sm:w-[350px] xl:w-[426px]'>
                        <img className='transition  ease-in-out delay-150  hover:scale-110' src={secondImg} alt="" />
                        <p className='mt-10 text-[24px] text-center sm:text-start leading-[29px]'>Ranked and recognized as the FASTEST growing company among Sacramento’s 100 fastest, Sacramento Business Journal – 2007, 2010, 2011, 2012, 2013 and 2016.</p>
                    </div>
                    {/* card 2 */}
                    <div data-aos="fade-up" className='w-full sm:w-[350px] xl:w-[426px]'>
                        <img className='transition  ease-in-out delay-150  hover:scale-110' src={forthImg} alt="" />
                        <p className='mt-[-40px] text-[24px] text-center sm:text-start leading-[29px]'>Ranked and recognized as the FASTEST growing company among Sacramento’s 100 fastest, Sacramento Business Journal – 2007, 2010, 2011, 2012, 2013 and 2016.</p>
                    </div>
                </div>
            </div>


            <section data-aos="fade-up" className='  mt-20 flex flex-col items-center justify-center p-3 '>
                {/* title */}
                <h2 className='text-[28px] md:text-[48px] font-bold my-4'>OUR PARTIAL CLIENT LIST</h2>
                {/* hr line */}
                <div className='line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 ' ></div>

                <p className='text-[18px] md:text-[24px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]'>AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>




            </section>

            {/* slider  */}
            <div data-aos="fade-up" className=' flex items-center justify-center my-[44px]'>
                <Slider className='slider-outter  w-[85vw] ' {...settings}>
                    {
                        logos.map((item) => (
                            <img className='w-[200px] h-[100px] home-client-img' src={item.image} alt='saldk' />
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default Driver