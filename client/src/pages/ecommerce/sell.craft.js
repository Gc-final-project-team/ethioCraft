import React from "react"
import ThemeSwitcher from "../ThemeSwitcher"



const Sell = () => {
   return(
    <body class="bg-gray-50 dark:bg-gray-900 h-fit">
    <ThemeSwitcher />
   
    
<div class="bg-white dark:bg-gray-900  border-4 rounded-lg relative m-3">

    <div class="flex items-start justify-between p-5 border-b rounded-t">
    <p class="text-center  font-bold text-2xl text-slate-800 dark:text-white sm:text-4xl ">Sell <span class="text-red-600 dark:text-yellow-400">craft</span>
        </p>
       
        
    </div>

    <div class="p-6 space-y-6">
        <form action="#">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label for="product-name" class="text-sm font-medium text-gray-900 dark:text-white block mb-2">Product Name</label>
                    <input type="text" name="product-name" id="product-name" class="shadow-sm bg-gray-50  dark:bg-slate-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required=""></input>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="category" class="text-sm font-medium text-gray-900 dark:text-white block mb-2">Category</label>
                    <input type="text" name="category" id="category" class="shadow-sm bg-gray-50  dark:bg-slate-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required=""></input>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="brand" class="text-sm font-medium text-gray-900 dark:text-white block mb-2">Photo </label>
                   
      <input type="file" onchange="loadFile(event)" class="block w-full text-sm dark:text-white
        file:mr-4  file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 dark:file:bg-slate-600 dark:file:text-white file:text-violet-700
        hover:file:bg-violet-100 dark:hover:file:bg-slate-500
        hadow-sm bg-gray-50  dark:bg-slate-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600  p-2.5" 
      />
   
                
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="price" class="text-sm font-medium text-gray-900 dark:text-white block mb-2">Price</label>
                    <input type="number" name="price" id="price" class="shadow-sm bg-gray-50  dark:bg-slate-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""></input>
                </div>
                <div class="col-span-full">
                    <label for="product-details" class="text-sm font-medium text-gray-900 dark:text-white block mb-2">Product Details</label>
                    <textarea id="product-details" rows="6" class="bg-gray-50 border  dark:bg-slate-600 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"></textarea>
                </div>
            </div>
            <div class="p-3 border-t border-gray-200 rounded-b">
        <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
    </div>

        </form>
    </div>

    
</div>
</body>

)
}

export default Sell