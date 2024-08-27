import React from 'react'
import Header from '../components/Header'
import { EmployeeData } from '../components/EmployeeData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Pesanan () {
  
  const [data, setData] = useState([]);
  const [judulVideo, setjudulVideo] = useState('');
  const [namaPengisi, setNamaPengisi] = useState('');
  const [harga, setHarga] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData)},[]);

  const handleEdit = (id) =>{
    const dt = data.filter(item => item.id === id)
    if (dt !== undefined)
    {
      setIsUpdate(true);
      setId(id);
      setjudulVideo(dt[0].judulVideo);
      setNamaPengisi(dt[0].namaPengisi);
      setHarga(dt[0].harga);
    }
  }

  const handleDelete = (id) => {
    if(id > 0)
      {
        if(window.confirm("Are you sure to delete this item?"))
          {const dt = data.filter(item => item.id !== id);
        setData(dt);}
      }   
  }

  const handleSave = (e) =>{
    let error = '';

    if(judulVideo === '')
      error += 'Masukkan Judul, ';

    if (namaPengisi === '')
      error += 'Masukkan Nama, ';

    if (harga <= 0)
      error += 'Masukkan Harga. ';

    if (error === ''){

      e.preventDefault();
      const dt = [...data];
      const newObject = {
      id : EmployeeData.length + 1,
      judulVideo : judulVideo,
      namaPengisi : namaPengisi,
      harga : harga
    }
    dt.push(newObject);
    setData(dt)
    }
    else {
      alert(error)
    } 
  }

  const handleUpdate = () =>{
    const index = data.map((item) => {
      return item.id
    }).indexOf(id);

    const dt = [...data];
    dt[index].judulVideo = judulVideo;
    dt[index].namaPengisi = namaPengisi;
    dt[index].harga = harga;

    setData(dt);
    handleClear();
  }

  const handleClear = (id) =>{
    setId('');
    setjudulVideo('');
    setNamaPengisi('');
    setHarga('');
    setIsUpdate(false);
  }


  return (
    <div>

      <Header/>

      <div className='flex justify-center'>
      <div>
        <label>Judul Video : 
          <input type='text' placeholder='Masukkan Judul' onChange={(e) => setjudulVideo(e.target.value)} value={judulVideo} ></input>
        </label>
      </div>
      <div>
        <label>Pengisi Video : 
          <input type='text' placeholder='Masukkan Nama' onChange={(e) => setNamaPengisi(e.target.value)} value={namaPengisi} ></input>
        </label>
      </div>
      <div>
        <label>Harga : 
          <input type='text' placeholder='Masukkan Harga' onChange={(e) => setHarga(e.target.value)} value={harga} ></input>
        </label>
      </div>
      <div>
        {
          !isUpdate ?
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(e) => handleSave(e)}>Save</button>
          :
          <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleUpdate()}>Update</button>
        }
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleClear()}>Clear</button> 
      </div>
      </div>
    <div className='items-center'>
      <div className='flex justify-center items-center'>
        <h1 className='font-blod py-10 text-2xl text-center'>Pesanan Saya</h1>
      </div>
      
      <div className='flex justify-center'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 justify-center'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <td >Sr.No</td>
          <td>Id</td>
          <td>Judul Video</td>
          <td>Nama Pengisi</td>
          <td>Harga</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.judulVideo}</td>
                <td>{item.namaPengisi}</td>
                <td>{item.harga}</td>
                <td>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleEdit(item.id)}>Edit</button>
                <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
      </div>
    
    </div>
    
    </div>
  )
}

export default Pesanan