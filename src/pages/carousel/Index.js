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
                    <img src="https://static.vecteezy.com/system/resources/previews/009/373/613/original/abstract-banner-design-with-silhouettes-of-people-dancing-free-vector.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/choreographer-dance-facebook-banner-design-template-f604ba0dc5f9de1c53c2dfc5a9b639d5_screen.jpg?ts=1605652023" />
                    <p className="legend">Legend 2</p>
                </div>
               
            </Carousel>
    </div>
  )
}

export default Index