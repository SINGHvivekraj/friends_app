import React from 'react'
import { useForm } from 'react-hook-form'

function Form({changeData}) {
    const {register, handleSubmit,reset} = useForm();
    const print=(data)=>{
        let data_added={...data,isFriend:false}
        console.log(data);
        changeData(data_added)
        reset();
    }


  return (
    <form className="form flex flex-col gap-2 " onSubmit={handleSubmit(data=>print(data))}>
          <input {...register('name')} type="text" className="bg-zinc-100 p-2 rounded-md outline-none" placeholder="Enter your name"  />
          <input {...register('img')} type="text" placeholder="Enter image link" className="bg-zinc-100 p-2 rounded-md outline-none" />
          <button type="submit" className=" bg-blue-500 rounded-md px-4 py-2 bottom-2 text-white  ">Register User</button>
        </form>
  )
}

export default Form