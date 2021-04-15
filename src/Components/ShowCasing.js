import working1 from "../assets/Working1.png";
import working2 from "../assets/Working2.png";
function ShowCasing() {
    return (
        <section class="text-gray-600 body-font">
        <a id="down2"></a>
        <div class="container px-1 py-24 mx-auto">
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Working</h1>
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={working1}></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Arobat Reader</h2>
              <p class="leading-relaxed text-base">In case of Adobe Arobat Reader your assignment pdf file will look like this.</p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src={working2}></img>
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Google Chrome</h2>
              <p class="leading-relaxed text-base">In case you open your assignment pdf in your broswer it will look like this </p>
            </div>
          </div>
        </div>
      </section>
   );
  }
  
  export default ShowCasing;