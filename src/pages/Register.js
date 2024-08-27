

function Register() {
  return (
    <div>
      <div className="px-10 h-[10vh] shadow-md mb-5 content-center py-3">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='image'/>
      </div>

      <div className="bg-[#F8F8F8] h-[180vh] flex">
      <div className="container m-auto h-[140vh] items-center bg-[#FFFFFF] rounded-md shadow-md">
        <div className="items-center">
          
          <div className="h-[80vh] p-4">
          <div className="h-[20vh]">
            <h1 className="text-black text-3xl font-bold text-center">
              Pendaftaran Akun
            </h1>
            <p className="text-center">Yuk daftarkan akunmu sekarang juga</p>
          </div>

          <div>
          <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <label for="name" class=" text-xl font-bold text-bold dark:text-white">Nama Lengkap*</label>
              <input type="name" id="name" class="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nadin Amizah" />
            </div>
            <div class="mb-5">
              <label for="email" class=" text-xl font-bold text-bold dark:text-white">E-mail*</label>
              <input type="email" id="email" class="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="babymonster@yg.co.id"/>
            </div>
            <div className="mb-5">
                <label for="name" class=" text-xl font-bold text-bold dark:text-white">No Hp*</label>
            </div>
            <div className="flex">
                <img src={process.env.PUBLIC_URL + '/indo.png'} alt='image'/>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">+62<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg></button>
                <input type="name" id="name" class="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="897774547878" />
            </div>
            <div class="mb-5 relative h-[15vh]">
              <label for="password" class="block mb-2 text-xl font-bold text-black-900 dark:text-white">Kata Sandi*</label>
              <input type="password" id="password" class="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="**********" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye-slash-fill absolute top-1/2 right-3 -translate-y-1/8" viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
              </svg>
              <label for="password" class="block mb-2 text-xl font-bold text-black-900 dark:text-white">Konfirmasi Kata Sandi*</label>
              <input type="password" id="password" class="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="**********" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye-slash-fill absolute top-1/2 right-3 translate-y-20" viewBox="0 0 16 16">
              <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
              <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
              </svg>
              <p className="absolute right-0">Lupa Password ?</p>
            </div>
            <div className="mt-8">
                <hr></hr>
            </div>
            
            <div className="mt-20">
            <button type="button" class="w-full focus:outline-none text-white bg-[#3ECF4C] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Daftar</button>
            <button type="button" class="text-[#3ECF4C] w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Masuk</button>
            <div className="mt-5 grid grid-cols-3 items-center"><hr className="border-gray-400"></hr><p class="text-center text-gray-400">atau</p><hr className="border-gray-400"></hr></div>
            
            <button type="button" class="text-white w-full mt-5  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg class="w-4 h-4 me-2 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
            </svg>
            Sign in with Google
            </button>
            </div>
          </form>
          </div>
          </div>

        </div>
      </div>
      </div>
    </div>
    
  );
}

export default Register;
