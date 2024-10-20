import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Image from "next/image";
const homepage = () => {
  return (
    <div>

      <Header/>

  {/*HERO*/}

  <div>
<section id = "home" className="bg-[url('/CAKE3.png')] h-screen bg-no-repeat bg-cover bg-center
       positon-fixed bg-opacity-0.25 ">
        <div />                               
        </section>
</div>

 {/*ABOUT PAGE*/}

<div>
<section id = "about" className="bg-[url('/aboutcake.jpg')] h-screen bg-no-repeat bg-cover bg-center
       positon-fixed bg-opacity-0.25 ">
        <div >                             
            <br />
       
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-lightbrown font-bold font-poppins mx-8 mt-8 flex items-center 
                                 justify-center underline text-shadow-md">  ABOUT US</h1>

          <div className="text-xxs sm:text-xs md:text-sm lg:text-base font-poppins mx-10 sm:mx-11 md:mx-8 lg:mx-11 text-lightbrown flex items-center 
                                 justify-center min-h-screen text-center -translate-y-36  overflow-hidden lg:-mt-10 sm:mt-54 ">

         Nestled in the heart of Greenwood, Delizia offers a charming retreat for pastry lovers.
         With its vintage decor and the aroma of freshly baked cakes, it invites passersby into 
         a world of rustic charm. Our shop prides itself on handcrafted pastries and artisanal
         bread, made using locally sourced, organic ingredients. From our famous cinnamon swirls
         to our hearty sourdough loaves, each item tells a story of tradition and passion.
                       <br /><br />
        
         Our commitment extends beyond delicious baked goods. We are a hub for the community,
         hosting weekly baking workshops and supporting local events. Our aim is not just to be a bakery,
         but a gathering place that nurtures warmth and togetherness.
        <br /><br />
            
             Step into Delizia, where every bite is a taste of home and every visit feels like a warm embrace.
             Join us for a pastry, a smile, and a moment of bliss.<br /><br />
          </div>
        </div>
        </section>
</div>

 {/* ITEMS PAGE*/}

<section id = "items" className="bg-[url('/R.jpeg')] h-screen bg-no-repeat bg-cover bg-center
       positon-fixed bg-opacity-50"><br />
    <div>
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-center text-brown font-bold  font-poppins">Some Special Items</h1></div>
        <div className='flex flex-start gap-10 overflow-hidden'>
  <div className="bg-lightpink border-2 border-white p-2.5 text-center rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-3.5 ml-16 mt-16">
    <Image src="/choco.webp" alt="swiss roll coffee flavoured" width={500} height={500} />
    <h1 className="mt-2 text-lg text-amber-900">DARK CHOCOLATE CAKE</h1>
  </div>
  <div className="bg-lightpink border-2 border-white p-2.5 text-center rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-3.5 mt-16">
    <Image src="/savory.webp" alt="wedding cake" width={500} height={500}></Image>
    <h1 className="mt-2 text-lg text-amber-900">SPECIAL SAVORY CAKE</h1>
  </div>
  <div className="bg-lightpink border-2 border-white p-2.5 text-center rounded-xl transition-transform duration-300 ease-in-out hover:-translate-y-3.5 mr-16 mt-16">
    <Image src="/CHOCO CAKE.jpg" alt="wedding cake" width={500} height={500} />
    <h1 className="mt-2 text-lg text-amber-900">DAIRY MILK CAKE</h1>
  </div>
</div>
      </section>

      {/*CONTACT PAGE*/}
      
      <section id = "contact" className="bg-[url('/s.jpg')] bg-cover bg-center h-96 position-fixed bg-no-repeat opacity-">
    <div>
    
    <h1 className="text-lg sm:text-3xl md:text-7xl lg:text-7xl text-center text-brown font-bold  font-poppins mb-6">Contact Us</h1></div>
    <h2 className="text-center  text-pink font-poppins ">
    <p className="sm:text-xs md:text-base lg:text-lg font-thin">If you'd like to order something or complain anything, feel free to reach out. We are always open to answer our customers.</p>
    <div className="underline sm:text-xs md:text-base lg:text-lg"><br />
     Email: <a href="mailto:deliziapk@hotmail.com">deliziapk@hotmail.com</a><br />
    Phone No: <a href="tel:+1234567890">+123-456-7890</a>
    </div>
    </h2>
  </section>
      <Footer/>
    </div>
  )
}

export default homepage;
