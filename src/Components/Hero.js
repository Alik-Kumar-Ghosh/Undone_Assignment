import img1 from "../assets/5272.jpg";
function Hero() {
    return (
        <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md:w-auto px-1 py-1 md:flex-row flex-col items-center">
          <div class="max-w-sm md:max-w-lg  m-16   mb-10 md:mb-0">
            <img style={{width:"auto",height:"auto"}} class="object-cover object-center rounded" alt="hero" src={img1}></img>
          </div>
          <div class="lg:flex-grow ml-auto flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Undone Assignment 
            </h1>
            <p class="mb-8 leading-relaxed">Make corrupted assignment pdf files in seconds</p>
            <div class="flex justify-center">
            <a href="#down1"><button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Download</button></a>
            <a href="#down2"> <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Working</button></a>
            </div>
          </div>
        </div>
      </section>
  );}
  
  export default Hero;
