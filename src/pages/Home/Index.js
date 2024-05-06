import React from 'react'
import SharedCarousel from "../carousel/Index"
import MySlider from '../slick-slider/Index'
import DanceDescription from '../../components/description/Index';
import Naveen from '../../components/naveen/Index';

const Index = () => {
  const data1 = [
    { title: "Abhisek", content: "Content for slide 1",img:"https://i.redd.it/4hjwra2omd361.jpg",profile:"https://www.instagram.com/abhisek753/" },
    { title: "Needhi", content: "Content for slide 2" ,img:"https://pbs.twimg.com/media/D7Hs2YaX4AAUVQ1.jpg:large",profile:"https://www.instagram.com/abhisek753/"},
    { title: "Shivani", content: "Content for slide 3",img:"https://pbs.twimg.com/media/EunlsRJXYAAXisF?format=jpg&name=4096x4096",profile:"https://www.instagram.com/abhisek753/" },
    { title: "Naveen", content: "Content for slide 4",img:"https://pbs.twimg.com/media/DsbNRj8WwAAtGHo.jpg",profile:"https://www.instagram.com/abhisek753/" },
    { title: "Mustaq", content: "Content for slide 5" ,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDvmsK4JC1upgouaLdbMbxn008XoEmiK_I4w&usqp=CAU",profile:"https://www.instagram.com/abhisek753/"},
    { title: "Alia", content: "Content for slide 6",img:"https://pbs.twimg.com/media/EunlsRJXYAAXisF?format=jpg&name=4096x4096",profile:"https://www.instagram.com/abhisek753/" },
    { title: "Sanju", content: "Content for slide 7",img:"https://t3.ftcdn.net/jpg/07/30/96/92/360_F_730969288_gQfC7QzsvZPpHqs9g5PlWjr3KaxLKdWm.jpg",profile:"https://www.instagram.com/abhisek753/" },
    { title: "Rohit", content: "Content for slide 8" ,img:"https://pbs.twimg.com/media/D7Hs2YaX4AAUVQ1.jpg:large",profile:"https://www.instagram.com/abhisek753/"},
    { title: "Prakash", content: "Content for slide 9",img:"https://static.vecteezy.com/system/resources/previews/039/589/432/non_2x/ai-generated-cute-girl-sitting-on-sofa-smiling-enjoying-cozy-family-time-generated-by-ai-free-photo.jpg",profile:"https://www.instagram.com/abhisek753/" },
  ];
  return (
    <div className='home'>
      <SharedCarousel/>
      <Naveen/>
      <MySlider data={data1} />
      <DanceDescription/>

    </div>
  )
}

export default Index