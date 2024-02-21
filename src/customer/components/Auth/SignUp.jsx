import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import logo from "../../../assets/img/logo.svg"
import swal from 'sweetalert'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { register1 } from "../../../State/Auth/Action";

// import UserContext from "../context/UserContext";

function SignUp() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  // const { auth } = useSelector(store)

  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    const { firstName, lastName, gender, mobile, email, password } = data;
    const formData = { firstName, lastName, gender, mobile, email, password };
    try {
      await axios.post("http://127.0.0.1:8080/auth/signup", formData)
        .then((res) => {
          // if (res.data.message == "Signup Successfully") {
          //   console.log(res);
          //   toast.success("Registration Successful..! Welcome");
          // }
          // else {
          //   toast.success("Email already exist for another user");
          // }
          console.log(res.data.message);
        });
      event.target.reset();
      swal("Registered..!", "Congratulations..!", "success").then(() => navigate("/Login"));
    }
    catch (error) {
      event.target.reset();
      swal("Email already exist!!!", "Try again", "error").then(() => navigate("/signup"));
    }
    dispatch(register1(formData))
  };

  // const RegisterForm = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault()

  //     const data = new FormData(event.currentTarget);

  //     const userData = {
  //       firstName: data.get('firstName'),
  //       lastName: data.get('lastName'),
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     }

  //     console.log("userData", userData)
  //   }


  return (
    <main className="w-full flex flex-col items-center justify-center pb-10 py-4 bg-stone-50">
      <div className="max-w-xxl p-8 shadow-xl rounded-md ">
        <div className="max-w-xl w-full text-gray-600">
          <div className="text-center">
            <img src={logo} width={150} className="mx-auto" />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 font-bold text-3xl">Sign-up</h3>
              <p className="">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-red-600 hover:text-red-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="flex">
              <div>
                <label className="font-medium">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                  {...register("firstName", { required: { value: true, message: 'first name is required' } })}
                />
                <p className='error'>{errors.firstName?.message}</p>
                {/* <label htmlFor="inputFirstName">First name</label> */}
              </div>
              <div>
                <label className="font-medium">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full mt-2 ml-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                  {...register("lastName", { required: { value: true, message: 'last name is required' } })}
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Invalid Email'
                  },
                  required: { value: true, message: 'Email is required' }
                })}
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                {...register("password", {
                  required: { value: true, message: 'Password is required' }
                })}
              />
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                {...register("confirmPassword", { required: { value: true, message: 'confirm password is required' } })}
              />
            </div>
            <div>
              <label className="font-medium">Mobile Number</label>
              <input
                type="tel"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
                {...register("mobile", { required: { value: true, message: 'mobile is required' } })}
              />
            </div>
            <div className="mb-3">
              <select className="form-select py-3" id="inputGender" aria-label="Gender" {...register("gender", { required: { value: true, message: 'gender is required' } })}>
                <option value="">Gender</option>
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
                <option value={'other'}>Other</option>
              </select>
              <p className='error'>{errors.gender?.message}</p>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
              Sign Up
            </button>
            <div className="text-center">
              <Link to="/Forgot-Password" className="hover:text-red-600">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );

}

export default SignUp;
