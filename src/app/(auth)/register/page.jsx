"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [show, setShow]=useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const photo = watch("photo");

  const handleRegister = async (data) => {
    const { name, email, password, photo } = data;
    // console.log(name, email);
    const imagField = photo[0];
    const formData = new FormData();
    formData.append("image", imagField);
    try {
      const imgbbResponse = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const imgbbData = await imgbbResponse.json();
      const photoURL = imgbbData.data.display_url;

      const { data: res, error } = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: photoURL,
        callbackURL: "/",
      });
      console.log(res, error);
      if(error){
        toast.warning(error.message)
      }
      if(res){
        toast.success('Thank You for your created account')
        setTimeout(()=>{
          router.push('/')
        },1500)
      }
    } catch (error) {
      toast.warning(error.message,{
        position:'top-center'
      });
    }
  };
  console.log(watch("photo"));
  return (
    <div className="container mx-auto h-screen flex flex-col items-center justify-center bg-purple-100">
      <div className="border-2 border-zinc-200 shadow-sm px-20 py-10 rounded-2xl flex flex-col">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1 className="text-center font-bold text-xl mb-4">
            Register your account
          </h1>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your Email</legend>
            <input
              type="text"
              className="input outline-none"
              {...register("name", { required: "Name field is required" })}
              placeholder="Type here Name"
            />
          </fieldset>
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Upload your Photo</legend>
            <input
              type="file"
              className="file-input outline-none"
              {...register("photo", { required: "Image field is required" })}
            />
          </fieldset>

          {photo && photo[0] && (
            <div className="w-20 h-20 border-2 inline-flex rounded-full border-red-200 shadow-2xl">
              <Image
                className="rounded-full"
                width={100}
                height={50}
                src={URL.createObjectURL(photo[0])}
                alt="user photo"
              />
            </div>
          )}

          {errors.photo && (
            <p className="text-xs text-red-500">{errors.photo.message}</p>
          )}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your Email</legend>
            <input
              type="email"
              className="input outline-none"
              {...register("email", { required: "Email is required" })}
              placeholder="Type here email"
            />
          </fieldset>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Enter your password</legend>
            <input
              type={show?'text':"password"}
              className="input w-full outline-none"
              {...register("password", { required: "Password is required" })}
              placeholder="Type here password"
            />
            <span className="absolute right-2.5 top-4 cursor-pointer" onClick={()=>setShow(!show)}>{show?<FaEyeSlash/>:<FaEye/>}</span>
          </fieldset>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}

          <button className="btn btn-sm w-full mt-3 btn-neutral">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
