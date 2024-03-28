import React from "react"
import ThemeSwitcher from "../ThemeSwitcher";
import image4 from "../../images/logooo.jpg";
import eventImg from "../../images/event.png";


const Event = () => {
    return(
        <>
          <nav className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900">
  
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-10 w-auto" src={image4} alt="Your Company"></img>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <a href="#" className=" text-gray-800 hover:text-yellow-400 dark:text-slate-50 dark:hover:text-blue-50 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
            <a href="#services" className="text-gray-800 hover:text-yellow-400   dark:text-slate-50 dark:hover:text-blue-50rounded-md px-3 py-2 text-sm font-medium">Events</a>
           
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       
      
      <a
        className="block w- rounded dark:text-white px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        href="/login"
      >
       Login
      </a>
      
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </button>
            
          </div>

        
          {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>  */}
        </div>
        <div className="relative ml-3">
          <div>
            <ThemeSwitcher/>
           
            
          </div>

        
        
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">

    <div className="space-y-1 px-2 pb-3 pt-2">
     
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-600  hover:text-gray-900 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-600  hover:text-gray-900 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-600  hover:text-gray-900 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
 
</nav>
<section class= "py-20  text-gray-600 body-font bg-gray-50 dark:bg-slate-900">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className="text-3xl text-black dark:text-white font-extrabold sm:text-5xl">
        Ethio craft 
        <strong className="font-extrabold text-red-700  dark:text-yellow-300 sm:block"> Events </strong>
      </h1>

      <p className="mt-4 dark:text-white sm:text-xl/relaxed ">
      Discover the beauty of Ethiopian craftsmanship at the Ethio Craft event. Join us for exhibitions,
             workshops, cultural performances, a craft marketplace, talks.
    
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 dark:bg-white dark:text-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600  dark:text-white shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img class="object-cover object-center rounded" alt="hero" src={eventImg}></img>
        </div>
    </div>
</section>
  


      
<section className=" pl-6 bg-gray-50 dark:bg-slate-900" >
<div className="pb-11">
    <h2 class=" text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
     Secure your spot in craft events
    </h2>
    </div>
<div className="flex justify-center items-center">
<div class=" relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
        <input type="text" class=" justify-centerrounded-md p-3 w-full ring-1 ring-inset ring-gray-300" placeholder="Search"></input>

        <button type="submit" class="absolute right-6 top-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-7 h-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
        </button>

    </div>
    </div>
 <div class=" pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-fit  m-auto">

  <div class="container flex justify-start">
  <div class="transition-transform duration-500 transform ease-in-out hover:scale-105 w-fit h-fit">
    <div class="max-w-sm py-20">
      <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">I'm supper dog for you.</h1>
          <p class="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
          <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
        </div>
        <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">$150</span>
        </div>
      </div>
    </div>
  </div>
  </div>



  <div class="container flex justify-start">
    <div class="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
    <div class="max-w-sm py-20">
      <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">I'm supper dog for you.</h1>
          <p class="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
          <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
        </div>
        <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">$150</span>
        </div>
      </div>
      </div>
    </div>
  </div>


  <div class="container flex justify-start">
  <div class="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
    <div class="max-w-sm py-20">
      <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
        <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
        <div class="py-6 px-8 rounded-lg bg-white">
          <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">I'm supper dog for you.</h1>
          <p class="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
          <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
        </div>
        <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
          <span class="text-md">$150</span>
        </div>
      </div>
    </div>
  </div>
  </div>

</div>
</section>
</>
)
}

export default Event