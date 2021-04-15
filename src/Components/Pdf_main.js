import img2 from "../assets/4529164.jpg";
import axios from "axios";
function clicked(){
  var val = document.getElementById("inp").value;
  if(val==''){
    alert("Please enter your assignment name first ");
  }          
  else if(val.includes('#')||val.includes('<')||val.includes('>')
  ||val.includes('%')||val.includes('&')||val.includes('*')||val.includes('{')
  ||val.includes('}')||val.includes('?')||val.includes('/')||val.includes('\\')||val.includes('$')||val.includes('+')||val.includes('!')
  ||val.includes('`')||val.includes('\'')||val.includes('|')||val.includes('=')||val.includes(':')||val.includes('@')){
    alert("Please enter valid name")
  }
  // Displaying the value
  else{
    axios.get('Assignment.pdf')
  .then(function(response){
    const url = window.URL
             .createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', val+".pdf");
                    document.body.appendChild(link);
                    link.click();
                    console.log("Downloaded")
  })
  .catch(function(error){
    console.log(error);
  });
  }
  }
function clicked2(){
  axios.get('Assignment.pdf')
  .then(function(response){
    const url = window.URL
             .createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', "Assignment.pdf");
                    document.body.appendChild(link);
                    link.click();
                    console.log("Downloaded")
  })
  .catch(function(error){
    console.log(error);
  });
}
function Pdf_main() {
   
    return (
      <section class="text-gray-600 body-font">
        <a id="down1"></a>
      <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img2}></img>
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Give your assignment name here</h1>
          <p class="mb-8 leading-relaxed">This site will itself create pdf and per your custom assignment name although you have the option to download with default name now the only hassel you have is to upload files to your college or school site.</p>
          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">Assignment name : </label>
              <input maxLength="100" type="text" id="inp" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-blue-200 focus:bg-transparent border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={clicked}>Download</button>
          </div>
          <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Please give your assignment name here</p>
          <div class="flex">
            <button onClick={clicked2} class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none" >
              Download with default name
            </button>
          </div>
        </div>
      </div>
    </section>
   );
  }
  
  export default Pdf_main;