import logo2 from "../assets/undone.png";
function Navbar() {
    return (
      <header class="text-white-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img style={{width:"55px",height:"55px"}} src={logo2}></img>
          <span class="ml-3 text-xl">Undone</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
         
        </nav>
        <a href="#discl">
        <button style={{color:'white'}} class="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Disclaimer
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </a>
      </div>
    </header>
    );
  }
  
  export default Navbar;
  