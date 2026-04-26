"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {

  const [show, setShow]=useState(false)

    const {register, handleSubmit, formState:{errors}}=useForm()

    const handleLogin=async(data)=>{

      const {data:res, error}=await authClient.signIn.email({
          email: data.email,
          password: data.password,
          callbackURL: '/',
          redirect: '/'
          })
if(error){
  toast.warning(error.message)
}
if(res){
toast.success("success Login",{
  position:"top-center",
})
}
    }
console.log(errors)
  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-purple-100">
      <div className="border-2 border-zinc-200 shadow-sm px-20 py-10 rounded-2xl flex flex-col">
        <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="text-center font-bold text-xl mb-4">Login your account</h1>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your name</legend>
            <input type="email" className="input outline-none" {...register('email',{required:'Email is required'})} placeholder="Type here email" />  
          </fieldset>
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend ">Enter your password</legend>
            <input type={show?'text':'password'} className="input w-full outline-none" {...register('password',{required:'Password is required'})} placeholder="Type here password" /> 
            <span className="absolute right-2.5 top-4 cursor-pointer" onClick={()=>setShow(!show)}>{show?<FaEyeSlash/>:<FaEye/>}</span> 
          </fieldset>
          {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

          <button className="btn btn-sm w-full mt-3 btn-neutral">Login Now</button>
        </form>
        <p className="text-xs mt-3">are you new user? Please <Link href={'/register'} className="text-green-500 text-xs">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
