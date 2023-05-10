import React , { useState, useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import firstImg from '../../../images/home-folder/services/first.svg'
import secondImg from '../../../images/home-folder/services/second.svg'
import thirdImg from '../../../images/home-folder/services/third.svg'

import talkImg from '../../../images/home-folder/services/talk-img.png'

import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Services = () => {

    useEffect(()=>{
        Aos.init({duration : 2000})
      } , [])


// btns useState
const [TalkBtn, setTalkBtn] = useState(true)
const [ConnectBtn, setConnectBtn] = useState(false)
const [SocialBtn, setSocialBtn] = useState(false)


// contents useState

const Talkcontents = [
    {
        id: 1,
        title : "AGILE GLOBAL Talk",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.",
        img : firstImg
    } ,   

]

const ConnectContents = [
    {
        id: 2,
        title : "AGILE GLOBAL Connect",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.",
        img : secondImg
    } , 
]

 const SocialContents = [
    {
        id: 3,
        title : "AGILE GLOBAL Social",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.",
        img : thirdImg
    } , 
 ]

// contents data useState
 const [contents , setContents] = useState(Talkcontents)

 // change hero bg
const [BG , setBg] = useState(firstImg)

const handleServiceTalkBtn = () =>{
    setTalkBtn(true)
    setConnectBtn(false)
    setSocialBtn(false)
    setContents(Talkcontents)
    setBg(firstImg)
}

const handleServiceConnectBtn = () =>{
    setTalkBtn(false)
    setConnectBtn(true)
    setSocialBtn(false)
    setContents(ConnectContents)
    setBg(secondImg)
}


const handleServiceSocialBtn = () =>{
    setSocialBtn(true)
    setTalkBtn(false)
    setConnectBtn(false)
    setContents(SocialContents)
    setBg(thirdImg)
}




  return (
   <>
       {/* custom application bg div  */}
       <div data-aos="fade-down" style={{backgroundImage: `url("${BG}")`}} className={`w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] bg-cover bg-no-repeat bg-center  flex flex-col items-center justify-center px-3 lg:px-40`}>
</div>



    {/* our services div */}

    
   <div data-aos="zoom-in" className='mt-6 flex flex-col items-center justify-center '>
        <p className='text-[48px] leading-[58px] text-[#023267] font-semibold text-center'>Our Services</p>
         
         {/* buttons */}
          <div className='mt-12 flex items-center justify-center flex-wrap gap-3 md:gap-10'>
            <button onClick={handleServiceTalkBtn} className={` ${TalkBtn ? 'text-center text-[18px] w-[229px] font-semibold leading-[22px] bg-[#023267] border-[#114590] border-[2px] text-white  py-[20px] rounded-[52px]' : 'w-[229px] text-center font-semibold  text-[18px] leading-[22px] bg-[white] border-[#114590] border-[2px] text-[#023267]  py-[20px] rounded-[52px]' }`}>AGILE GLOBAL Talk </button>

            <button onClick={handleServiceConnectBtn} className={` ${ConnectBtn ? 'w-[229px] text-center text-[18px] font-semibold leading-[22px] bg-[#023267] border-[#114590] border-[2px] text-white py-[20px] rounded-[52px]' : 'w-[229px] text-center font-semibold  text-[18px] leading-[22px] bg-[white] border-[#114590] border-[2px] text-[#023267]  py-[20px] rounded-[52px]' }`}>AGILE GLOBAL Connect </button>

            <button  onClick={handleServiceSocialBtn} className={` ${SocialBtn ? 'w-[229px] text-center text-[18px] font-semibold leading-[22px] bg-[#023267] border-[#114590] border-[2px] text-white  py-[20px] rounded-[52px]' : 'w-[229px] text-center font-semibold  text-[18px] leading-[22px] bg-[white] border-[#114590] border-[2px] text-[#023267]  py-[20px] rounded-[52px]' }`}>AGILE GLOBAL Social </button>
          </div>
       </div>


       {  contents.map((item)=> ( 
 
    <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-5 md:gap-1 lg:gap-10 md:flex-row px-3 mt-10'>
 
         <div className='flex flex-col items-center md:items-start justify-center gap-5 md:w-[40%]'>
            <p className='text-[24px] sm:text-[30px] md:text-[30px] lg:text-[36px] font-semibold leading-[56px]'>{(item.title)}</p>
            <p className='text-[16px] leading-[30px] text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem duis velit urna, ut amet. Et quisque mi urna cras scelerisque enim. Id justo, lectus cras sed ullamcorper congue. Sit id volutpat ultrices suspendisse suspendisse etiam fringilla.</p>

            {/* get started btn */}
            <button className='flex items-center justify-center gap-1 text-center font-bold text-[18px] px-[16px] py-[8px] bg-[#023267] text-white rounded-[60px]'>Get Started <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight> </button>
         </div>
         {/* img div */}
         <img className='md:w-[300px] lg:w-auto' src={talkImg} alt="" />
    </div>

    ))   } 

   </>
  )
}

export default Services