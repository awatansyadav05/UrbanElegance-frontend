import React from 'react'
import gallery1 from "../../assets/gallery1.webp"
import galery2 from "../../assets/galery2.webp"
import galler3 from "../../assets/galler3.webp"
//import gallery4 from "../../assets/gallery4.webp"
import g5 from "../../assets/g5.webp"
import g6 from "../../assets/g6.jpeg"
import g4 from "../../assets/g4.avif"
const Gallery = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto flex flex-wrap ">

          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2 hover:scale-110 transition duration-500">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery1} />
              </div>
              <div class="md:p-2 p-1 w-1/2 hover:scale-110 transition duration-500">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src={galery2} />
              </div>
              <div class="md:p-2 p-1 w-full hover:scale-110 transition duration-500">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src={g4} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2 hover:scale-110 transition duration-500">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src={g5} />
              </div>
              <div class="md:p-2 p-1 w-1/2 hover:scale-110 transition duration-500">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src={galler3} />
              </div>
              <div class="md:p-2 p-1 w-1/2 hover:scale-110 transition duration-500">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src={g6} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
