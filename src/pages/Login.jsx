// // import { useFileHandler, useInputValidation } from "6pp";
// // import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
// // import {
// //   Avatar,
// //   Button,
// //   Container,
// //   IconButton,
// //   Paper,
// //   Stack,
// //   TextField,
// //   Typography,
// // } from "@mui/material";
// // import axios from "axios";
// // import React, { useState } from "react";
// // import toast from "react-hot-toast";
// // import { useDispatch } from "react-redux";
// // import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
// // import { bgGradient } from "../constants/color";
// // import { server } from "../constants/config";
// // import { userExists } from "../redux/reducers/auth";
// // import { usernameValidator } from "../utils/validators";

// // const Login = () => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const toggleLogin = () => setIsLogin((prev) => !prev);

// //   const name = useInputValidation("");
// //   const bio = useInputValidation("");
// //   const username = useInputValidation("", usernameValidator);
// //   const password = useInputValidation("");

// //   const avatar = useFileHandler("single");

// //   const dispatch = useDispatch();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     const toastId = toast.loading("Logging In...");
// //     setIsLoading(true);

// //     const config = {
// //       withCredentials: true,
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     };

// //     try {
// //       const { data } = await axios.post(
// //         `${server}/api/v1/user/login`,
// //         {
// //           username: username.value,
// //           password: password.value,
// //         },
// //         config
// //       );

// //       dispatch(userExists(data.user));
// //       toast.success(data.message, {
// //         id: toastId,
// //       });

// //       localStorage.setItem("hasReloaded", "true");
// //       window.location.reload();
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Something Went Wrong", {
// //         id: toastId,
// //       });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();

// //     const toastId = toast.loading("Signing Up...");
// //     setIsLoading(true);

// //     const formData = new FormData();
// //     formData.append("avatar", avatar.file);
// //     formData.append("name", name.value);
// //     formData.append("bio", bio.value);
// //     formData.append("username", username.value);
// //     formData.append("password", password.value);

// //     const config = {
// //       withCredentials: true,
// //       headers: {
// //         "Content-Type": "multipart/form-data",
// //       },
// //     };

// //     try {
// //       const { data } = await axios.post(
// //         `${server}/api/v1/user/new`,
// //         formData,
// //         config
// //       );

// //       dispatch(userExists(data.user));
// //       toast.success(data.message, {
// //         id: toastId,
// //       });

// //       localStorage.setItem("hasReloaded", "true");
// //       window.location.reload();
// //     } catch (error) {
// //       toast.error(error?.response?.data?.message || "Something Went Wrong", {
// //         id: toastId,
// //       });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div
      
// //         >
// //           {isLogin ? (
// //             <>
// //               <section className="py-4 md:py-8 dark:bg-gray-800">
// //     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
// //       <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
// //         <img className="w-8 h-8 mr-2" src="data:image/png;base64,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" alt="osher.ai logo" />
// //         ChatUp
// //       </a>
// //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
// //         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
// //           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
// //             Sign in to your account
// //           </h1>

          

// //           <div className="flex items-center">
// //             <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
// //             <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
// //             <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
// //           </div>

// //           <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
// //             <div>
// //               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
// //               <input type="text" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName"  value={username.value}
// //                   onChange={username.changeHandler}  />
// //             </div>
// //             <div>
// //               <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
// //               <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password.value}
// //                   onChange={password.changeHandler}/>
// //             </div>
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-start">
// //                 <div className="flex items-center h-5">
// //                   <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" />
// //                 </div>
// //                 <div className="ml-3 text-sm">
// //                   <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
// //                 </div>
// //               </div>
// //               <a href="" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</a>
// //             </div>
// //             <button type="submit" className="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full" disabled={isLoading}>
// //             Login
// //             </button>
// //             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
// //               Don’t have an account yet? <span onClick={toggleLogin} className="font-medium  text-teal-600 hover:underline dark:text-teal-500">SignUp</span>
// //             </p>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   </section>
// //             </>
// //           ) : (
// //             <>
          
// //               <section className="py-10 my-auto dark:bg-gray-900">
// //                 <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
// //                   <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
// //                     <div>
// //                       <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
// //                         Profile
// //                       </h1>
// //                       <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
// //                       <form onSubmit={handleSignUp}>
// //                         <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
// //                           <div
// //                             className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
// //                             style={{ backgroundImage: `url(${avatar.preview })` }}
// //                           >
// //                             <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
// //                               <input
// //                                 type="file"
// //                                 name="profile"
// //                                 id="upload_profile"
// //                                 hidden
// //                                 required
// //                                 onChange={avatar.changeHandler}
// //                               />
// //                               <label htmlFor="upload_profile">
// //                                 <svg
// //                                   data-slot="icon"
// //                                   className="w-6 h-5 text-blue-700"
// //                                   fill="none"
// //                                   strokeWidth="1.5"
// //                                   stroke="currentColor"
// //                                   viewBox="0 0 24 24"
// //                                   xmlns="http://www.w3.org/2000/svg"
// //                                   aria-hidden="true"
// //                                 >
// //                                   <path
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                     d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
// //                                   ></path>
// //                                   <path
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                     d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
// //                                   ></path>
// //                                 </svg>
// //                               </label>
// //                             </div>
// //                           </div>
// //                         </div>
// //                         <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile</h2>
// //                         <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
// //                           <div className="w-full mb-4 mt-6">
// //                             <label htmlFor="" className="mb-2 dark:text-gray-300"> Name</label>
// //                             <input
// //                               type="text"
// //                               className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
// //                               placeholder="First Name"
// //                               value={name.value}
// //                               onChange={name.changeHandler}
// //                             />
// //                           </div>
// //                           <div className="w-full mb-4 lg:mt-6">
// //                             <label htmlFor="" className="dark:text-gray-300">Username </label>
// //                             <input
// //                               type="text"
// //                               className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
// //                               placeholder="Username"
// //                               value={username.value}
// //                               onChange={username.changeHandler}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
// //                           <div className="w-full">
// //                             <h3 className="dark:text-gray-300 mb-2">Bio</h3>
// //                             <input
// //                               type="text"
// //                               className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
// //                               placeholder="Bio"
// //                               value={bio.value}
// //                               onChange={bio.changeHandler}
// //                             />
// //                           </div>
// //                           <div className="w-full">
// //                             <h3 className="dark:text-gray-300 mb-2">Password</h3>
// //                             <input
// //                               type="password"
// //                               className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
// //                               placeholder="Password"
// //                               value={password.value}
// //                               onChange={password.changeHandler}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="w-full rounded-lg bg-[#74eca0] mt-4 text-white text-lg font-semibold">
// //                           <button type="submit" className="w-full p-4 " disabled={isLoading}>Create...</button>
// //                         </div>
// //                         <p>Already have an account ..! <span onClick={toggleLogin}>Login</span></p>
// //                       </form>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </section>
// //             </>
// //           )}
      
// //     </div>
// //   );
// // };

// // export default Login;

// import { useFileHandler, useInputValidation } from "6pp";
// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { server } from "../constants/config";
// import { userExists } from "../redux/reducers/auth";
// import { usernameValidator } from "../utils/validators";

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [avatar, setAvatar] = useState({
//     preview: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png',
//     file: null
//   });
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAvatar({
//         preview: URL.createObjectURL(file),
//         file
//       });}}
    

//   const toggleLogin = () => setIsLogin((prev) => !prev);

//   const name = useInputValidation("");
//   const bio = useInputValidation("");
//   const username = useInputValidation("", usernameValidator);
//   const password = useInputValidation("");

//   // const avatar = useFileHandler("single");

//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const toastId = toast.loading("Logging In...");
//     setIsLoading(true);

//     const config = {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const { data } = await axios.post(
//         `${server}/api/v1/user/login`,
//         {
//           username: username.value,
//           password: password.value,
//         },
//         config
//       );

//       dispatch(userExists(data.user));
//       toast.success(data.message, {
//         id: toastId,
//       });

//       localStorage.setItem("hasReloaded", "true");
//       window.location.reload();
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something Went Wrong", {
//         id: toastId,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     const toastId = toast.loading("Signing Up...");
//     setIsLoading(true);

//     const formData = new FormData();
//     formData.append("avatar", avatar.file);
//     formData.append("name", name.value);
//     formData.append("bio", bio.value);
//     formData.append("username", username.value);
//     formData.append("password", password.value);

//     const config = {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     try {
//       const { data } = await axios.post(
//         `${server}/api/v1/user/new`,
//         formData,
//         config
//       );

//       dispatch(userExists(data.user));
//       toast.success(data.message, {
//         id: toastId,
//       });

//       localStorage.setItem("hasReloaded", "true");
//       window.location.reload();
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something Went Wrong", {
//         id: toastId,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className=""
      
//         >
//           {isLogin ? (
//             <>
//    <div className="">
//    <section className="py-4 md:py-8 dark:bg-gray-800">
//     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//         <img className="w-8 h-8 mr-2" src="data:image/png;base64,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" alt="osher.ai logo" />
//         ChatUp
//       </a>
//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//         <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//           <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//             Sign in to your account
//           </h1>

          

//           <div className="flex items-center">
//             <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
//             <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
//             <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
//           </div>

//           <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
//               <input type="text" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName"  value={username.value}
//                   onChange={username.changeHandler}  />
//             </div>
//             <div>
//               <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//               <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password.value}
//                   onChange={password.changeHandler}/>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
//                 </div>
//               </div>
//               <a href="" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</a>
//             </div>
//             <button type="submit" className="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full" disabled={isLoading}>
//             Login
//             </button>
//             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//               Don’t have an account yet? <span onClick={toggleLogin} className="font-medium  text-teal-600 hover:underline dark:text-teal-500">SignUp</span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
//    </div>
//             </>
//           ) : (
//             <>
          
//               <section className="py-10 my-auto dark:bg-gray-900">
//   <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
//     <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
//       <div>
//         <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
//           Profile
//         </h1>
//         <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
//         <form onSubmit={handleSignUp}>
//           <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
//             <div
//               className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url(${avatar.preview})` }}
//             >
//               <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
//                 <input
//                   type="file"
//                   name="profile"
//                   id="upload_profile"
//                   hidden
//                   required
//                   onChange={handleAvatarChange}
//                 />
//                 <label htmlFor="upload_profile">
//                   <svg
//                     data-slot="icon"
//                     className="w-6 h-5 text-blue-700"
//                     fill="none"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
//                     ></path>
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
//                     ></path>
//                   </svg>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile</h2>
//           <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
//             <div className="w-full mb-4 mt-6">
//               <label htmlFor="" className="mb-2 dark:text-gray-300">Username</label>
//               <input
//                 type="text"
//                 className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
//                 placeholder="Username"
//                 value={username.value}
//                 onChange={username.changeHandler}
//               />
//             </div>
//             <div className="w-full mb-4 mt-6">
//               <label htmlFor="" className="mb-2 dark:text-gray-300">Name</label>
//               <input
//                 type="text"
//                 className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
//                 placeholder="First Name"
//                 value={name.value}
//                 onChange={name.changeHandler}
//               />
//             </div>
           
//           </div>
//           <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
//             <div className="w-full">
//               <h3 className="dark:text-gray-300 mb-2">Bio</h3>
//               <input
//                 type="text"
//                 className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
//                 placeholder="Bio"
//                 value={bio.value}
//                 onChange={bio.changeHandler}
//               />
//             </div>
//             <div className="w-full">
//               <h3 className="dark:text-gray-300 mb-2">Password</h3>
//               <input
//                 type="password"
//                 className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
//                 placeholder="Password"
//                 value={password.value}
//                 onChange={password.changeHandler}
//               />
//             </div>
//           </div>
//           <div className="w-full rounded-lg bg-[#024d1d] mt-4 text-white text-lg font-semibold">
//             <button type="submit" className="w-full p-4" disabled={isLoading}>Create</button>
//           </div>
//           <p className="mt-4 text-center dark:text-gray-300">
//             Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleLogin}>Login</span>
//           </p>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>

//             </>
//           )}
      
//     </div>
//   );
// };

// export default Login;

import { useInputValidation } from "6pp";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { server } from "../constants/config";
import { userExists } from "../redux/reducers/auth";
import { usernameValidator } from "../utils/validators";
import signupBg from '../assets/images/signup.jpg'
import logo from '../assets/images/logo.png'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [avatar, setAvatar] = useState({
    preview: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png',
    file: null
  });
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar({
        preview: URL.createObjectURL(file),
        file
      });}}
    

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  // const avatar = useFileHandler("single");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging In...");
    setIsLoading(true);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        {
          username: username.value,
          password: password.value,
        },
        config
      );

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });

      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Signing Up...");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name.value);
    formData.append("bio", bio.value);
    formData.append("username", username.value);
    formData.append("password", password.value);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/new`,
        formData,
        config
      );

      dispatch(userExists(data.user));
      toast.success(data.message, {
        id: toastId,
      });

      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something Went Wrong", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=""
      
        >
          {isLogin ? (
            <>
   <div className={" bg bg-[url(https://img.freepik.com/premium-vector/seamless-pattern-with-different-social-media-icons_405287-75.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user)]"}>
   <section className=" py-40 md:py-8 dark:bg-gray-800">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-8 h-8 mr-2" src={logo} alt="osher.ai logo" />
        ChatUp
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>

          

          <div className="flex items-center">
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
              <input type="text" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="UserName"  value={username.value}
                  onChange={username.changeHandler}  />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password.value}
                  onChange={password.changeHandler}/>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-teal-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-teal-600 dark:ring-offset-gray-800" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</a>
            </div>
            <button type="submit" className="text-white bg-teal-600 py-1.5 px-4 rounded font-bold w-full" disabled={isLoading}>
            Login
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <span onClick={toggleLogin} className="font-medium  text-teal-600 hover:underline dark:text-teal-500">SignUp</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
   </div>
            </>
          ) : (
            <div className={`bg-no-repeat bg-cover bg-center text-[#c2ede8]`} style={{ backgroundImage: `url(${signupBg})` }}>
          
              <section className="py-5 md:py-10 my-auto dark:bg-gray-900">
  <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
      <div>
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
          Profile
        </h1>
        <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
        <form onSubmit={handleSignUp}>
          <div className="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center ">
            <div
              className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${avatar.preview})` }}
            >
              <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                <input
                  type="file"
                  name="profile"
                  id="upload_profile"
                  hidden
                  required
                  onChange={handleAvatarChange}
                />
                <label htmlFor="upload_profile">
                  <svg
                    data-slot="icon"
                    className="w-6 h-5 text-blue-700"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile</h2>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full mb-4 mt-6">
              <label htmlFor="" className="mb-2 dark:text-gray-300">Username</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Username"
                value={username.value}
                onChange={username.changeHandler}
              />
            </div>
            <div className="w-full mb-4 mt-6">
              <label htmlFor="" className="mb-2 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="First Name"
                value={name.value}
                onChange={name.changeHandler}
              />
            </div>
           
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full">
              <h3 className="dark:text-gray-300 mb-2">Bio</h3>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Bio"
                value={bio.value}
                onChange={bio.changeHandler}
              />
            </div>
            <div className="w-full">
              <h3 className="dark:text-gray-300 mb-2">Password</h3>
              <input
                type="password"
                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Password"
                value={password.value}
                onChange={password.changeHandler}
              />
            </div>
          </div>
          <div className="w-full rounded-lg bg-[#024d1d] mt-4 text-white text-lg font-semibold">
            <button type="submit" className="w-full p-4" disabled={isLoading}>Create</button>
          </div>
          <p className="mt-4 text-center dark:text-gray-300">
            Already have an account? <span className="text-[#c2ede8] cursor-pointer" onClick={toggleLogin}>Login</span>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

            </div>
          )}
      
    </div>
  );
};

export default Login;



