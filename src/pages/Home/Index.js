import React from 'react'
import SharedCarousel from "../carousel/Index"
import MySlider from '../slick-slider/Index'
import DanceDescription from '../../components/description/Index';
import Naveen from '../../components/naveen/Index';
import DanceClassTimings from '../../components/timing/Index';
import Needhi from "../../assets/needhi.png"
import Abhisek from "../../assets/abhisek.png"
import Ganesh from "../../assets/ganesh.png"
import Kajal from "../../assets/kajal.png"
import NaveenImg from "../../assets/naveen.png"
import Riyan from "../../assets/riyan.png"
import Rudra from "../../assets/rudra.png"
import Sandeep from "../../assets/sandeep.png"
import Yashika from "../../assets/yashika.png"
import Sherni from "../../assets/sherni.png"



const Index = () => {
  const data1 = [
    { title: "Abhisek", content: "Content for slide 1",img:Abhisek,profile:"https://www.instagram.com/abhisek753/" },
    { title: "Needhi", content: "Content for slide 2" ,img:Needhi,profile:"https://www.instagram.com/needhiagrawal/"},
    { title: "Ganesh", content: "Content for slide 3",img:Ganesh,profile:"https://www.instagram.com/g.d_boy_offcial/" },
    { title: "Naveen", content: "Content for slide 4",img:NaveenImg,profile:"https://www.instagram.com/naveenmehna/" },
    { title: "Sherni", content: "Content for slide 5" ,img:Sherni,profile:"https://www.instagram.com/___papa_ki_sherni______/"},
    { title: "Sandeep", content: "Content for slide 6",img:Sandeep,profile:"https://www.instagram.com/the_sandeep_chopda/" },
    { title: "Sanju", content: "Content for slide 7",img:Sherni,profile:"https://www.instagram.com/abhisek753/" },
    { title: "Riyan", content: "Content for slide 8" ,img:Riyan,profile:"https://www.instagram.com/riyanyadav/"},
    { title: "Yashika", content: "Content for slide 9",img:Yashika,profile:"https://www.instagram.com/yashika_khare_001/" },
  ];
  return (
    <div className='home'>
      <SharedCarousel/>
      <Naveen/>
      <MySlider data={data1} />
      <DanceClassTimings/>
      <DanceDescription/>
    </div>
  )
}

export default Index