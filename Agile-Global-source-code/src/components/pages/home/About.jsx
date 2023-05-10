import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
// test imgs
import homeCardImg1 from '../../../images/home/home-card-img-1.jpg'
import homeCardImg2 from '../../../images/home/home-card-img-2.jpg'
import homeCardImg3 from '../../../images/home/home-card-img-3.jpg'
import homeCardImg4 from '../../../images/home/home-card-img-4.jpg'

// client img
import homeClient1 from '../../../images/home/home-client-1.svg'
import homeClient2 from '../../../images/home/home-client-2.svg'
import homeClient3 from '../../../images/home/home-client-3.svg'
import homeClient4 from '../../../images/home/home-client-4.svg'

// blue and white div
import globeImg from '../../../images/solution/custom-app/globe.svg'
import serviceIcon from '../../../images/solution/custom-app/service.svg'


// our mission images 
import BigCircleImg from '../../../images/about/about-circle-img.png'

// nos image
import no1 from '../../../images/solution/business-int/no1.svg'
import no2 from '../../../images/solution/business-int/no2.svg'
import no3 from '../../../images/solution/business-int/no3.svg'
import no4 from '../../../images/solution/business-int/no4.svg'


import no5 from '../../../images/solution/business-int/nos5.svg'
import no6 from '../../../images/solution/business-int/nos6.svg'
import no7 from '../../../images/solution/business-int/nos7.svg'
import no8 from '../../../images/solution/business-int/nos8.svg'

import {ImArrowRight2} from 'react-icons/im'

import Slider from "react-slick";


// card blank img
import cardBlanckImg from '../../../images/about/card-img-1.svg'


const logos = [

    { image: homeClient1 },
    { image: homeClient2 },
    { image: homeClient4 },
    { image: homeClient3 },
    { image: homeClient4 },

]

const About = () => {

    const [showServiceImg1, setShowServiceImg1] = useState(false)
    const [showServiceImg2, setShowServiceImg2] = useState(false)
    const [showServiceImg3, setShowServiceImg3] = useState(false)
    const [showServiceImg4, setShowServiceImg4] = useState(false)

    const [showGlobeImg1, setShowGlobeImg1] = useState(false)
    const [showGlobeImg2, setShowGlobeImg2] = useState(false)
    const [showGlobeImg3, setShowGlobeImg3] = useState(false)
    const [showGlobeImg4, setShowGlobeImg4] = useState(false)



    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



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
            {/* emerding technologies bg div  */}
            <div data-aos="fade-up" className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] about-bg-img flex flex-col items-start justify-center text-start px-3 lg:px-40 gap-5 '>

                <h1 className='text-[24px]  sm:text-[37px] md:text-[40px] font-bold text-white md:mt-[80px]'>WHO ARE WE?</h1>
                <p className='text-[22px] sm:text-[32px] font-semibold text-white'>AGILE GLOBAL SOLUTIONS, INC</p>
                <p className='text-[18px] sm:text-[18px] text-white text-start'>
                    Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>

            </div>

            <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-10'>
                <p className='text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center '>We provide Best services </p>
            </div>

            {/* four cards div */}
            <div data-aos="fade-up" className='flex cursor-pointer items-center justify-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-10 '>
                {/* card 1 */}
                <div className='hover-drop-shadow relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
                    <img className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg1} alt="" />
                    {/* text div */}
                    <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
                        <p className='text-[24px] mt-[20px]'>Global Best</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px] '>Read more...</p>
                    </div>

                </div>

                {/* card 1 */}
                <div className='hover-drop-shadow relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
                    <img className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg2} alt="" />
                    {/* text div */}
                    <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
                        <p className='text-[24px] mt-[20px]'>Global Best</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px] '>Read more...</p>
                    </div>

                </div>


                {/* card 1 */}
                <div className='hover-drop-shadow relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
                    <img className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg3} alt="" />
                    {/* text div */}
                    <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
                        <p className='text-[24px] mt-[20px]'>Global Best</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px] '>Read more...</p>
                    </div>

                </div>


                {/* card 1 */}
                <div className='hover-drop-shadow relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
                    <img className='w-full h-full rounded-[8px] home-card-1-image-eff' src={homeCardImg4} alt="" />
                    {/* text div */}
                    <div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
                        <p className='text-[24px] mt-[20px]'>Global Best</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px] '>Read more...</p>
                    </div>

                </div>
            </div>

            {/* Why Agile Global? */}

            <div data-aos="fade-up"  className='flex items-center justify-center flex-col mt-20'>
                <p className='text-[24px] sm:text-[32px] md:text-[35px] text-center font-semibold mb-5'>Why Agile Global ?</p>

                {/* cards div */}
                <div className='px-3 flex items-center justify-center flex-wrap sm:px-5 md:px-10 lg:px-20 xl:px-44 gap-5 md:gap-5'>
                    {/* card 1 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Custom Therapy Plans</p>
                        <p>Custom therapy plans built to help you get the most out of each session.</p>
                    </div>

                    {/* card 2 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Chat,Video,Phone</p>
                        <p>Communicate across all your devices - at your convenience.</p>
                    </div>

                    {/* card 3 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Personalized Match</p>
                        <p>Take our simple assessment to get matched with the perfect therapist to fit your needs.</p>
                    </div>

                    {/* card 4 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Top licensed Therapist</p>
                        <p>Custom therapy plans built to help you get the most out of each session.</p>
                    </div>

                    {/* card 5 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Client portal</p>
                        <p>Log into your portal to book appointments, check therapy updates, download worksheets, and more.</p>
                    </div>

                    {/* card 6 */}
                    <div className='hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2'>
                        <img src={cardBlanckImg} alt="" />
                        <p className='text-[18px] font-semibold'>Security features</p>
                        <p>A fully HIPAA compliant platform to ensure complete client privacy.</p>
                    </div>
                </div>
            </div>

            {/* slider  */}


            <section  data-aos="zoom-in" className='  mt-10 flex flex-col items-center justify-center p-3 '>
                {/* title */}
                <h2 className='text-[28px] md:text-[48px] font-bold my-4'>OUR PARTIAL CLIENT LIST</h2>
                {/* hr line */}
                <div className='line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 ' ></div>

                <p className='text-[18px] md:text-[24px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]'>AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>
            </section>

            {/* slider  */}
            <div data-aos="zoom-in" className=' flex items-center justify-center my-[44px]'>
                <Slider className='slider-outter  w-[85vw] ' {...settings}>
                    {
                        logos.map((item) => (
                            <img className='w-[200px] h-[100px] home-client-img' src={item.image} alt='saldk' />
                        ))
                    }
                </Slider>
            </div>


            {/* our recognized awards div */}
            {/* Our Recognitions & Awards */}
            <div data-aos="fade-up" className='  flex sm:flex-row flex-wrap items-center  justify-center gap-0 mt-28'>
                <p className='text-[30px] sm:text-[40px] md:text-[48px] leading-[58px] font-semibold text-center sm:text-start lg:w-[300px] my-7'>Our <span className='text-[#17519B] '> Recognitions</span> & Awards </p>



                {/* blue and white boxs div starts  */}
                <div className='flex flex-col items-center justify-center sm:flex-row sm:flex-wrap gap-3 lg:w-[55%]'>
                    {/*blue box 1  */}
                    <div onMouseEnter={() => setShowServiceImg1(prev => !prev)} onMouseLeave={() => setShowServiceImg1(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg1 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>



                    {/* white box 1*/}
                    <div onMouseEnter={() => setShowGlobeImg1(prev => !prev)} onMouseLeave={() => setShowGlobeImg1(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg1 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/*blue box 2  */}
                    <div onMouseEnter={() => setShowServiceImg2(prev => !prev)} onMouseLeave={() => setShowServiceImg2(prev => !prev)} className='custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg2 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/* white box 2 */}
                    <div onMouseEnter={() => setShowGlobeImg2(prev => !prev)} onMouseLeave={() => setShowGlobeImg2(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg2 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/*blue box 3  */}
                    <div onMouseEnter={() => setShowServiceImg3(prev => !prev)} onMouseLeave={() => setShowServiceImg3(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-[#023267] text-white hover:bg-white hover:text-black mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showServiceImg3 ? (<img src={serviceIcon} alt="" />) : (<img src={globeImg} alt="" />)}
                        <p className='text-[24px] font-semibold'>Best Services</p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>


                    {/* white box 3  */}
                    <div onMouseEnter={() => setShowGlobeImg3(prev => !prev)} onMouseLeave={() => setShowGlobeImg3(prev => !prev)} className='transition-all-2s custom-app-box-drop-shadow p-3 flex flex-col items-start justify-start gap-2 bg-white text-black hover:bg-[#023267] hover:text-white mx-3  sm:w-[263px] sm:mx-0 rounded-[5px]'>
                        {showGlobeImg3 ? (<img src={globeImg} alt="" />) : (<img src={serviceIcon} alt="" />)}
                        <p className='text-[24px] font-semibold'>Globe Best </p>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p className='text-[16px]'>Read more...</p>
                    </div>

                </div>

            </div>


            {/* blue bg div  */}
            <div data-aos="fade-up" className=' about-our-mission-blue-bg w-full py-10 lg:py-0 lg:h-[660px] xl:h-[750px] my-10 flex items-center justify-between'>
                <img className='hidden transition  ease-in-out delay-150  hover:scale-110   lg:flex w-[400px] xl:w-[600px]' src={BigCircleImg} alt="" />
                {/* our mission text */}
                <div className=' xl:mr-72 w-full flex items-center flex-col justify-between'>
                    <p className='font-bold text-center text-[40px] sm:text-[48px] md:text-[64px] text-white leading-[86px] mb-10'>Our Mission</p>


                    {/* outer div of nos.  */}
                    <div className=' flex flex-col sm:flex-row  items-start lg:items-center justify-center gap-4 md:gap-36 lg:gap-36 '>
                        {/* no div  1 to 4*/}
                        <div className=' flex flex-col items-start justify-start gap-5'>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={no1} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Professionlism</p>
                            </div>

                            <div className='flex items-center justify-center gap-2'>
                                <img src={no2} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Ability</p>
                            </div>

                            <div className='flex items-center justify-center gap-2'>
                                <img src={no3} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Consistency</p>
                            </div>


                            <div className='flex items-center justify-center gap-2'>
                                <img src={no4} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Deternity</p>
                            </div>

                        </div>
                        {/* no div  5 to 8*/}
                        <div className=' flex flex-col items-start justify-start gap-5'>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={no5} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Empathy</p>
                            </div>

                            <div className='flex items-center justify-center gap-2'>
                                <img src={no6} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Exellance</p>
                            </div>

                            <div className='flex items-center justify-center gap-2'>
                                <img src={no7} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Innovation</p>
                            </div>


                            <div className='flex items-center justify-center gap-2'>
                                <img src={no8} alt="" />
                                <p className='text-white text-start text-[24px] leading-[32px]'>Integrity</p>
                            </div>

                        </div>
                    </div>


                    {/* our 8 values */}
                     <div className=' flex flex-col sm:flex-row items-center justify-center gap-9 mt-10'>
                        <p className='text-[30px] sm:text-[44px] md:text[64px] text-white  font-semibold'>Our <span className='text-[40px] sm:text-[54px] md:text-[84px] lg:text-[96px] font-bold '>8</span> Core Values</p>

                        <div className='cursor-pointer md:mt-10 about-our-mission-know-more-btn w-[152px] rounded-[60px] flex items-center justify-center  '>
                            <p className='m-3 text-[18px] text-white font-bold flex items-center justify-center gap-3 '>Know more <ImArrowRight2></ImArrowRight2>  </p> 
                        </div>
                     </div>
                </div>
            </div>



         {/* get started div */}

         <div data-aos="fade-up" className='about-get-started-bg-img flex flex-col sm:flex-row items-center justify-center mt-20  sm:justify-between px-3 sm:px-10 py-6 mx-8 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-44 rounded-[19px] gap-6 sm:gap-0'>
            <p className='text-[24px] sm:text-[32px] font-semibold text-white text-center leading-[38px]   '>Ready to Get started? </p>

            <button className='text-[18px] bg-white text-[#17519B] font-bold flex items-center justify-center gap-3 px-4 py-2 rounded-[60px]'>Know more <ImArrowRight2></ImArrowRight2></button>
         </div>





        </>
    )
}

export default About