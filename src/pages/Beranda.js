import React from "react";
import {useEffect} from "react";
import {initFlowbite} from "flowbite";
import Pesanan from "../pages/Pesanan";
import { Link } from "react-router-dom";
    function Beranda() {
        return (
          <div>
            <div className="px-10 flex justify-between h-[10vh] shadow-md mb-5 content-center py-3">
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
            </div>
            
      
                <div className="items-center text-center container mb-10 bg-big-1 h-[60vh] text-white content-center md:h-[80vh] sm:h-[100vh] ">
                    <h1 className="text-5xl font-bold w-100 mb-2">Revolusi Pembelajaran: Temukan<br></br> Ilmu Baru melalui Platform Video <br></br>Interaktif!</h1>
                    <p className="w-100 mb-4">Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu,<br></br> Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
                    <button type="button" class=" w-[50vh] focus:outline-none text-white bg-[#38D189] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Temukan Video Course Untuk Dipelajari!</button>
                </div>

                <div className="container mb-5">
                    <p className="font-bold text-3xl mb-2">Koleksi Video Pembelajaran Unggulan</p>
                    <p className="mb-4">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
                </div>
                <div className="container flex gap-5 mb-5">
                    <p>Semua Kelas</p>
                    <p>Dunia</p>
                    <p>Desain</p>
                    <p>Pengembangan Diri</p>
                    <p>Bisnis</p>
                </div>
            <div className=" container  mx-auto  bg-[#F8F8F8] rounded-md shadow-md grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 ">
            
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson12.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava1.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson21.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava2.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson31.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava3.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson41.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava4.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson51.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava5.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg ">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson61.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava6.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson71.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava7.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson81.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava8.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl shadow-lg">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src={process.env.PUBLIC_URL + '/lesson91.png'} alt='image'/>
                    </div>
                        <h6 className="text-xl md:text-2xl font-medium mt-3">Big 4 Auditor Finansial Analyst</h6>
                        <p className="text-slate-500 text-sm mt-3 mb-3">Mulai transformasi dengan instruktur profesional, harga terjangkau, dan</p>
                    <div className="flex mb-3 gap-2">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/ava9.png'} alt='image'/>
                    </div>
                    <div>
                        <p className="font-bold text-medium">Jenna Ortega</p>
                        <p className="text-sm">Senior Accotant di Gojek</p>
                    </div>
                </div>
                    <div className="flex flex-row justify-between items-center">
                        <img src={process.env.PUBLIC_URL + '/rate.png'} alt='image'/>
                    <p className="font-bold text-green-950 text-2xl">300K</p>
                </div>
                </div>
            </div>
            </div>
                <div className="items-center container bg-big-2 w-[300vh] text-white text-center h-[60vh] mt-5 mb-5 flex-col content-center">
                    <div >
                        <h5 className="">NEWSLETTER</h5>
                        <p className="text-bold text-4xl mb-2">Mau Belajar Lebih Banyak</p>
                        <p className="mt-2">Daftarkan dirimu untuk mendapatkan informasi terbaru dan </p>
                        <p className="mb-4">penawaran spesial dari program-program terbaik hariesok.id</p>
                        <div className="px-80 relative">
                            <input type="email" id="email" class=" items-center justify-center content-center shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90vh] h-[8vh] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Masuukkan Emailmu"/>
                            <button type="button" class=" absolute top-1/2 right-80 -translate-y-1/2 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Subcribe</button>
                        </div>
                    </div> 
                </div>
                <div className="flex container justify-between shadow-md">
                    <div className="">
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='image'/>
                        <p className="font-bold">Gali Potensi Anda Melalui Pembelajaran </p>
                        <p className="font-bold">Video di hariesok.id!</p>
                        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                        <p>+62-877-7123-1234</p>
                    </div >
                        
                    <div className="flex gap-5">
                        <div>
                            <h5 className="font-bold">Kategori</h5>
                            <p>Digital & Teknologi</p>
                            <p>Pemasaran</p>
                            <p>Manajemen Bisnis</p>
                            <p>Pengembangan Diri</p>
                            <p>Desain</p>
                        </div>
                        <div>
                            <h5 className="font-bold">Perusahaan</h5>
                            <p>Tentang Kami</p>
                            <p>FAQ</p>
                            <p>Kebijakan Privasi</p>
                            <p>Ketentuan Layanan</p>
                            <p>Bantuan</p>
                        </div>
                        <div>
                            <h5 className="font-bold">Komunitas</h5>
                            <p>Tips Sukses</p>
                            <p>Blog</p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-between container mt-5">
                    <div className="text-gray-500">
                        <p>@2023 Gerobak Sayur All Rights Reserved.</p>
                    </div>
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt='image'/>
                        <img src={process.env.PUBLIC_URL + '/fb.png'} alt='image'/>
                        <img src={process.env.PUBLIC_URL + '/ig.png'} alt='image'/>
                        <img src={process.env.PUBLIC_URL + '/tt.png'} alt='image'/>
                    </div>

                </div>
          </div>
          
        );
      }

export default Beranda