import React from 'react'
import logo from '../../images/nav/logo-transparent.png'

// icons
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
    return (
        <>
            <section className='relative footer-bg mt-10 flex  flex-col-reverse items-center sm:flex-row sm:flex-wrap sm:items-start justify-evenly pt-14 pb-36 md:px-5 lg:py-28 lg:pt-20  lg:px-10 gap-14 sm:gap-5 xl:gap-0'>
                {/* company */}
                <div className=' sm:w-[230px] md:w-[140px] lg:w-[150px] flex flex-col items-start justify-start'>
                    <p className='text-[24px] font-bold mb-2  md:mb-10'>Company</p>
                    <ul className='flex flex-col items-center sm:items-start jus
              text-[18px] gap-3 md:gap-5'>
                        <li className=''>
                            About us
                        </li>
                        <li>
                            OUr growth
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>


                {/* headquarter */}
                <div className=' flex flex-col items-center justify-center sm:items-start sm:justify-start sm:w-[300px] md:w-[230px]'>
                    <p className='text-[24px] font-bold mb-2  md:mb-10'>Headquarter</p>
                    <ul className='flex flex-col items-center justify-center sm:items-start sm:justify-start
              text-[18px] gap-3 md:gap-5'>
                        <li className='px-5 text-center sm:px-0 sm:text-start'>
                            193 Blue Ravine Road, Suite 160,Folsom,
                            CA 95630,

                        </li>
                        <li>
                           (916) 655-7745 [Work]
                        </li>
                        <li>
                            (916) 848-3659 [Fax]
                        </li>
                        <li>
                            <a className='underline ' href="mailto:info@agileglobal.com">info@agileglobal.com</a>
                        </li>
                    </ul>
                </div>

                 {/* company */}
                 <div className=' flex flex-col items-center justify-center sm:items-start sm:justify-start sm:w-[230px]  lg:w-[229px]'>
                    <p className='text-[24px] font-bold mb-2 md:mb-10 '>Main Branch Offices</p>
                    <ul className='flex flex-col items-center justify-center sm:items-start sm:justify-center
              text-[18px] gap-3 sm:gap-4'>
                        <li className=''>
                           California Office
                        </li>
                        <li>
                           Washington
                        </li>
                        <li>
                            New jersy
                        </li>
                        <li>
                           North Carolina
                        </li>
                        <li>
                            Texas
                        </li>
                        <li>
                            Ohioo
                        </li>
                    </ul>
                </div>

                {/* email */}
                <div className=' flex flex-col items-center justify-center sm:w-[290px] md:w-full md:px-10 xl:w-[449px] md:mt-6 xl:mt-0'>
                    <img className='w-[233px] h-[94px] sm:w-[263px] sm:h-[84px] mb-3' src={logo} alt="" />
                    <p className='text-[16px] xl:w-[494px] mb-2 text-center xl:text-start px-4 sm:px-0 sm:text-start md:text-center xl:px-0'>All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes.</p>
                    <div className=' flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0'>
                        <input className='rounded-[8px] md:rounded-none px-6 md:w-[325px] md:h-[47px]
                        h-[34px] w-[300px] text-[18px] bg-white' type="email" placeholder='your email' />
                        <button className='bg-black text-white text-[20px] px-[30px] md:px-[40px] py-1 md:py-2 rounded-[8px] md:rounded-none'>Subscribe</button>
                    </div>
                </div>

                 {/* social links div */}
                 <div className='absolute bottom-0  mt-12 pb-10'>
                  {/* line */}
                  <div className='h-[2px] w-[80vw] sm:w-[80vw] xl:w-[90vw]  bg-black my-3 mt'  > </div>
                  {/* follow links  and copyright*/}
                  <div className='flex flex-col md:flex-row items-center justify-evenly gap-1 md:gap-12'>
                  {/* folow */}
                    <div className='flex items-center justify-center text-[20px]  gap-4'>
                        <p className='text-[24px]'>Follow us on: </p>
                        {/* icons */}
                        <div className='flex items-center justify-center gap-6 md:gap-4'>
                            <AiFillInstagram className='sm:text-[32px]'></AiFillInstagram>
                            <AiFillLinkedin className='sm:text-[32px]'></AiFillLinkedin>
                            <AiFillFacebook className='sm:text-[32px]'></AiFillFacebook>
                            <AiOutlineTwitter className='sm:text-[32px]'></AiOutlineTwitter>
                        </div>
                    </div>
                    {/* copyright */}
                    <p className='text-[16px] text-center'>Agile Global 2021-2022 - All rights reserved</p>
                  </div>
                 </div>
            </section>
        </>
    )
}

export default Footer