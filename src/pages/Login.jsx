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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [ispassOpen,setispassOpen]=useState(false)

  const togglePassword=()=>setispassOpen(!ispassOpen)
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
  const email = useInputValidation("");

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
          email: email.value,
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
    formData.append("email", email.value);

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
        InstaChat
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login into your account
          </h1>

          

          <div className="flex items-center">
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            <div className="px-5 text-center text-gray-500 dark:text-gray-400"></div>
            <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          </div>

          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" name="login" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"  value={email.value}
                  onChange={email.changeHandler}  />
            </div>
            <div  className="relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type={ispassOpen ? "text" :"password"} name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={password.value}
                  onChange={password.changeHandler}/>
                   <div className="absolute top-[38px] right-0 mr-3" onClick={togglePassword}>
                          {ispassOpen ? (
                            <Visibility sx={{ color: "black", fontSize: "20px" }} />
                          ) : (
                            <VisibilityOff sx={{ color: "black", fontSize: "20px" }} />
                          )}
                        </div>
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
          <Link to="/forgotpassword"><span className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500">Forgot password?</span></Link>
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
                className="mt-2 p-4 w-full border-2 rounded-lg text-black dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Username"
                value={username.value}
                onChange={username.changeHandler}
              />
            </div>
            <div className="w-full mb-4 mt-6">
              <label htmlFor="" className="mb-2 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg text-black dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="First Name"
                value={name.value}
                onChange={name.changeHandler}
              />
            </div>
           
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full">
              <h3 className="dark:text-gray-300 mb-2">Email</h3>
              <input
                type="email"

                className="mt-2 p-4 w-full border-2 rounded-lg text-black dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Email"
                value={email.value}
                onChange={email.changeHandler}
              />
            </div>
            <div className="w-full">
              <h3 className="dark:text-gray-300 mb-2">Bio</h3>
              <input
                type="text"

                className="mt-2 p-4 w-full border-2 rounded-lg text-black dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Bio"
                value={bio.value}
                onChange={bio.changeHandler}
              />
            </div>
            <div className="w-full relative">
              <h3 className="dark:text-gray-300 mb-2">Password</h3>
              <input
                type={ispassOpen ? "text" : "password"}
                className="mt-2 p-4 w-full border-2 rounded-lg text-black dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                placeholder="Password"
                value={password.value}
                onChange={password.changeHandler}
              />
              {
                <div className="absolute top-[57px] right-0 mr-3" onClick={togglePassword}>
               { ispassOpen ? 
                <Visibility sx={{color:"black"}}/>
             : 
                <VisibilityOff sx={{color:"black"}}/>}
              </div>
              }
             
            </div>
          </div>
          <div className="w-full rounded-lg bg-[#024d1d] mt-4 text-white text-lg font-semibold">
            <button type="submit" className="w-full p-4" disabled={isLoading}>Create</button>
          </div>
          <p className="mt-4 text-center dark:text-gray-300">
            Already have an account? <span className="text-[#0de0c7] ml-[10px] font-bold cursor-pointer" onClick={toggleLogin}>Login</span>
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



