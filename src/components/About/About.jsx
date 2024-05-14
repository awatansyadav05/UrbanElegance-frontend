import React from 'react'
import about from "../../assets/about.jpg"
import aboutus from "../../assets/aboutus.jpg"

const About = () => {
  return (
    <>
      <div>
      <img className="object-cover w-full object-center h-[200px] mt-5" src="https://www2.hm.com/content/dam/global_campaigns/season_09/beauty/7929/7929-banner-3x1.jpeg" draggable="false"/>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h2 className='text-white font-bold text-4xl'>
          About Us
        </h2>
        </div>
      </div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={about}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The  <h3 className='font-bold text-2xl font-mono'>Urban<span className='text-red-500'>Elegance</span></h3>
        
      </h1>
      <p className="mb-8 leading-relaxed">The UrbanElegance Foundation is a long-term commitment from the Stefan Persson family, the founders and main owners of the UrbanElegance Group.

As a philanthropic foundation, they find, fund and facilitate disruptive innovations, initiatives and research with the vision to enable an inclusive and planet positive textile industry.</p>
     
    </div>
  </div>
</section>
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Work with the best
        
      </h1>
      <p className="mb-8 leading-relaxed">The best people make the best teams. And we put all
our efforts into finding the right people that fit into
our high-performing inclusive teams. Everyone has a
voice on the table and diversity of thoughts, styles
and actions is celebrated. From a category leader to a
wishmaster, we are all bound together and guided by
our values of audacity, bias for action, customer-first,
integrity and inclusion.</p>

     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src= {aboutus} />
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default About
