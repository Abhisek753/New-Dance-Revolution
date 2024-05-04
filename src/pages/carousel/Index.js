import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Index = () => {
  return (
    <div>
        <Carousel 
       autoPlay={true}
        >
                
                <div>
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/529/1004/desktop-wallpaper-dance-dance-background-dance-poster-dancing-skills.jpg" />
                </div>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/004/341/510/original/bellydance-free-class-banner-flat-template-brochure-poster-concept-design-with-cartoon-characters-exotic-dance-studio-lessons-horizontal-flyer-leaflet-with-place-for-text-vector.jpg" />
                </div>
                <div>
                  <img src='https://cdn2.vectorstock.com/i/1000x1000/72/46/banner-for-the-dance-studio-vector-22757246.jpg'/>
                </div>
               
            </Carousel>
    </div>
  )
}

export default Index