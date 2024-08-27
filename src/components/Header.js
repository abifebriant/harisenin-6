import React from 'react'
import {useEffect} from "react";
import {initFlowbite} from "flowbite";
import Pesanan from "../pages/Pesanan";
import { Link } from "react-router-dom";

function Header () {
  return (
    <div><div className="px-10 flex justify-between h-[10vh] shadow-md mb-5 content-center py-3">
    <div>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='image'/>
    </div>

    <div className="flex gap-2">
    
<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Kategori <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
<div>Bonnie Green</div>
<div class="font-medium truncate">name@flowbite.com</div>
</div>
<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
<li>
<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
</li>
<li>
<Link to="Pesanan"><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pesanan Saya</a></Link>
</li>
<li>
<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
</li>
</ul>
<div class="py-2">
<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
</div>
</div>


    <img src={process.env.PUBLIC_URL + '/ava-account.png'} alt='image'/>
    </div>
</div></div>
  )
}

export default Header;