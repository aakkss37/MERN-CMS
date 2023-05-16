import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import axios from 'axios'



import homeHeroRobot from "../../images/home/home-hero-robot.png"
import mainSectionArrow from '../../images/home/main-arrow.svg'
import homeHeroArrow from '../../images/home/home-hero-arrow-1.jpg'

// solutiong img
import homeSolImg1 from '../../images/home/home-sol-img-3-p.png'
import homeSolImgTest from '../../images/home/EG3.png'

// test imgs
import homeCardImg1 from '../../images/home/home-card-img-1.jpg'
import homeCardImg2 from '../../images/home/home-card-img-2.jpg'
import homeCardImg3 from '../../images/home/home-card-img-3.jpg'
import homeCardImg4 from '../../images/home/home-card-img-4.jpg'

// recognition img
import homeRecoDate from '../../images/home/home-reco-date.png'
import homeReco2 from '../../images/home/home-reco-2.png'


// client img
import homeClient1 from '../../images/home/home-client-1.svg'
import homeClient2 from '../../images/home/home-client-2.svg'
import homeClient3 from '../../images/home/home-client-3.svg'
import homeClient4 from '../../images/home/home-client-4.svg'

// client says 
import homeQuotStart from '../../images/home/home-quote-start.svg'
import homeQuotEnd from '../../images/home/home-quote-end.svg'
import homeUserIcon from '../../images/home/home-user-icon.svg'

const logos = [

	{ image: homeClient1 },
	{ image: homeClient2 },
	{ image: homeClient4 },
	{ image: homeClient3 },
	{ image: homeClient4 },

]



const Home = () => {

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

	// BANNER
	const [bannerData, setBannerData] = useState()
	useEffect(() => {
		const getBannerData = async () => {
			try {
				const resp = await axios.get("https://mern-cms-server.onrender.com/home-page/get-banner-data")
				// console.log(resp.data)
				setBannerData(resp.data)
			} catch (error) {
				console.log(error)
			}
		}
		getBannerData();
	}, [])



	// COMPANY OVERVIEW
	const [overViewText, setOverViewText] = useState()
	const [overViewCard, setOverViewCard] = useState([])
	useEffect(() => {
		const getBannerData = async () => {
			try {
				const resp1 = await axios.get("https://mern-cms-server.onrender.com/home-page/get-overViewText")
				// console.log(resp.data)
				setOverViewText(resp1.data.data)
				const resp2 = await axios.get("https://mern-cms-server.onrender.com/home-page/get-overViewText/card-data")
				// console.log(resp.data)
				setOverViewCard(resp2.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getBannerData();
	}, [])

	const bannerStyle = {
		// backgroundImage: `url(${bannerData?.bannerImg})`,
		backgroundImage: `url(${homeHeroRobot})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}

	const imgArr = [homeCardImg1, homeCardImg2, homeCardImg3, homeCardImg4]

	return (
		<>
			{/* black div bg */}
			<main data-aos="fade-up" className='  bg-black w-screen h-[90dvh] ' style={bannerStyle}>
				{/* innovation div */}
				<div className=' p-3 sm:p-10 lg:mx-20 xl:mx-40  lg:pt-14  flex flex-col text-white sm:max-w-[500px] lg:max-w-[650px] 
      md:max-w-[600px]  items-start justify-start' >
					<div style={{ marginTop: 50 }}>
						{/* <p className='text-[34px] md:text-[56px]  font-bold leading-[78px]'>{bannerData?.title}</p> */}
						<p className='text-[34px] md:text-[36px]  font-bold leading-[68px]'>INNOVATION</p>
						{/* <p className='flex text-[18px] leading-9'>{bannerData?.text}</p> */}
						<p className='flex text-[14px] leading-9'>Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT Use integrated credit card processing and keep your clients safe with bank level security</p>
						<img className='w-[156px] h-[122px] py-2 sm:py-3 md:w-[219px] md:h-[137px] lg:ml-5 lg:h-[120px] lg:w-[180px]' src={homeHeroArrow} alt="" />
						{/* know more button div */}
						<div className=' w-full flex items-center justify-center'>
							<button className='flex items-center justify-center home-hero-know-btn font-bold text-[18px] px-2 py-2 md:px-8 md:py-2 lg:px-8 '>Know More</button>
						</div>
					</div>

				</div>
			</main>

			<section data-aos="fade-up" className=' px-3 md:px-10 lg:px-28 xl:px-36'>
				{/* agile global solution 4 card div */}
				<div className='flex flex-col items-center justify-center mt-10 md:mt-16 lg:my-14'>
					<h2 className='text-[24px] md:text-[28px] leading-[35px] text-center'>AGILE GLOBAL SOLUTIONS, INC</h2>
					{/* <p className='text-center text-[18px] md:text-[24px] leading-[32px] mt-5 md:mt-10 lg:mt-14 '>
						{overViewText?.text}</p> */}
					<p className='text-center text-[14px] md:text-[14px] leading-[32px] mt-5 md:mt-10 lg:mt-14 '>
						Current Value : Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.Current Value : Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.Current Value : Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>
				</div>

				{/* four cards div */}
				<div data-aos="fade-up" className='flex cursor-pointer items-center justify-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-10 '>
					{/* card  */}
					{
						overViewCard?.map((item, index) => (
							<div className=' relative rounded-[8px] home-sol-outter-card-1-eff   w-[321px] h-[238px] lg:w-[240px] lg:h-[211px] text-white'>
								<img className='w-full h-full rounded-[8px] home-card-1-image-eff' src={imgArr[index]} alt="" />
								{/* text div */}
								<div className='absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2'>
									<p className='text-[16px] mt-[20px]'>{item.title}</p>
									<p className='text-[12px]'>{item.text}</p>
									<p className='text-[12px] '>Read more...</p>
								</div>

							</div>

						))
					}


				</div>


				{/* our recognition and awards..... */}
				<div className='flex flex-col items-center justify-center my-20 md:my-14 lg:my-20'>
					<p className='text-[24px] md:text-[28px] lg:text-[38px] text-center font-bold mb-10 md:mb-10'>OUR RECOGNITION & AWARDS</p>
					{/* content divs starts*/}
					{/* first starts */}
					<div data-aos="fade-up" className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

						<img className='md:w-[330px] lg:w-[400px] xl:w-[400px]' src={homeRecoDate} alt="" />

						<div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
							<h3 className='text-[28px] md:text-[30px] font-bold my-6'>Set your schedule</h3>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>Take complete control over available hours and services</p>
							<p className='text-[#7D7987] text-[16px] leading-[30px] my-2'>Accept or reject new clients at your convenience
								Manage schedule with built in task management tools </p>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>
								Manage your schedule using any device</p>
						</div>

					</div>
					{/* first ends */}
					<br />
					<br />
					{/* second starts */}
					<div data-aos="fade-up" className=' flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-10 lg:gap-20 md:my-[-50px] lg:[-100px] '>

						<img className='md:w-[336px] lg:w-[410px] xl:w-[400px]' src={homeReco2} alt="" />

						<div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
							<h3 className='text-[28px] md:text-[30px] font-bold my-6'>Manage Documents</h3>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>Manage your forms, plans, and evaluations with our customizable library</p>
							<p className='text-[#7D7987] text-[16px] leading-[30px] my-2'>Manage progress notes with the click of a button from any device </p>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>
								Create your own evaluations or use built in templates for your clients</p>
						</div>

					</div>
					{/* second ends */}
					<br />
					<br />
					{/* third starts */}
					<div data-aos="fade-up" className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

						<img className='md:w-[336px] lg:w-[410px] xl:w-[400px]' src={homeRecoDate} alt="" />

						<div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
							<h3 className='text-[28px] md:text-[30px] font-bold my-6'>Manage Billing</h3>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>Save time, prevent disputes and stop chasing payments with automatic subscriptions</p>
							<p className='text-[#7D7987] text-[16px] leading-[30px] my-2'>Use integrated credit card processing and keep your clients safe with bank level security </p>
							<p className='text-[#7D7987] text-[16px] leading-[30px]'>
								Allow clients to setup auto billing from their client portal</p>
						</div>

					</div>
					{/* third ends */}
				</div>





			</section>

			<section data-aos="zoom-in" className='  mt-20 flex flex-col items-center justify-center p-3 '>
				{/* title */}
				<h2 className='text-[28px] md:text-[34px] font-bold my-4'>OUR PARTIAL CLIENT LIST</h2>
				{/* hr line */}
				<div className='line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 ' ></div>

				<p className='text-[16px] md:text-[16px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]'>AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>




			</section>

			{/* slider  */}
			<div data-aos="zoom-in" className=' flex items-center justify-center my-[44px]'>
				<Slider className='slider-outter  w-[85vw] ' {...settings}>
					{
						logos.map((item) => (
							<img className='w-[170px] h-[80px] home-client-img' src={item.image} alt='saldk' />
						))
					}
				</Slider>
			</div>



			{/* what clients say about us section */}
			<div data-aos="fade-up" className='flex flex-col items-center justify-center  mt-[50px]'>
				<p className='text-[24px] md:text-[32px] font-bold'>What Clients say About us</p>
				<p className='text-center w-[70vw] md:w-[25vw] text-[16px] leading-[20px] mb-[30px]'>Everything you need to know about offering a differentiated customer experience</p>
				{/* quate div */}
				<div className='  flex relative items-center justify-center py-10 md:py-2  md:w-[55vw]'>
					
					<img className='absolute top-0 left-0 w-[46px] h-[52px]' src={homeQuotStart} alt="" />
					<p className='text-[18px] text-center w-[90vw]  md:w-[50vw] p-3 md:p-5'>Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>
					<img className='absolute bottom-0 right-0 w-[46px] h-[52px]' src={homeQuotEnd} alt="" />

				</div>
				{/* user name and image */}
				<div className='flex flex-col items-center justify-center gap-1'>
					<img className='w-[40px] h-[40px]' src={homeUserIcon} alt="" />
					<p className='text-[18px] font-bold '>Jason Roy</p>
				</div>
			</div>
			{/* another section */}

		</>
	)
}

export default Home