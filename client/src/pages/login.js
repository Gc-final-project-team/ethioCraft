
import React from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import image4 from "../images/females.jpg"

const Login = () => {
   
   return(
      
   
      <body class="bg-gray-50 dark:bg-gray-900 h-full">
         <ThemeSwitcher className=""/>
         <section class="flex flex-col md:flex-row h-screen dark:bg-gray-900  items-center">

<div class="bg-white dark:bg-gray-900  hidden lg:block w-fit md:w-1/2 xl:w-fit h-screen">
  <img src={image4} alt="" class="w-fit h-min object-cover pl-10 max-w-lg rounded-lg"></img>
</div>

<div class="bg-white dark:bg-gray-900 w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div class="w-full h-100">

    <h1 class="text-xl md:text-2xl  dark:text-white font-bold leading-tight mt-2">Log in to your account</h1>

    <form class="mt-6" action="#" method="POST">
      <div>
        <label class="block text-gray-700 dark:text-white">Email Address</label>
        <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700 dark:text-white">Password</label>
        <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required></input>
      </div>

      <div class="text-right mt-2">
        <a href="/" class="text-sm font-semibold text-gray-700 hover:text-blue-700 dark:text-white  focus:text-blue-700">Forgot Password?</a>
      </div>

      <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Log In</button>
    </form>

    <hr class="my-6 border-gray-300 w-full"></hr>

    <div class="mt-5 grid space-y-4">
                            <button
                                class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                <div class="relative flex items-center space-x-4 justify-center">
                                    <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        class="absolute left-0 w-5" alt="google logo"></img>
                                    <span
                                        class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                        with Google
                                    </span>
                                </div>
                            </button>
                          </div>
                          
                            
    <p class="mt-3 dark:text-white">Need an account? <a href="/signup" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account</a></p>


  </div>
</div>

</section>
       
    
    </body>

   )
}

export default Login