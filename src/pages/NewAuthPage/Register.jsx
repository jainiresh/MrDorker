import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, signInWithGithub } from "../../firebase.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (fullName === "") {
      toast.error("Full Name is required!");
      return; 
    } else if (password === "") {
      toast.error("Password is required!");
      return; 
    } else if (password.length < 8) {
      toast.error("Password must atleast be of 8 characters!");
      return; 
    } else if (email === "") {
      toast.error("Email-id is required!");
      return; 
    }

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: fullName }); 
      user.displayName = fullName
      dispatch({type:'USER_LOGIN_REQUEST_V2', payload: user}); 
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast.error("Email already registered, login to continue");
      } else {
        console.log('Errored ',err)
        toast.error("Error occured, please try again");
      }
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  return (
    <div
  style={{
    display: 'flex',
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  className="bg-gradient-to-br from-gray-900 via-black to-purple-900"
>
  <div
    style={{
      paddingLeft: '5rem',
      paddingRight:'5rem',
      borderRadius: '1rem',
    }}
    className="shadow-lg bg-gray-800"
  >
    <div className="p-8">
    <h1 className="text-3xl text-white font-semibold text-center mt-5">
      Registration
    </h1>
    <p className="text-gray-400 leading-5 text-center mb-4">
      Fill in the details to register
    </p>
    {error && <div className="text-center text-red-500">{error.message}</div>}
    <form
      onSubmit={handlesubmit}
      className="flex flex-col justify-center items-center"
    >
      <label className="relative">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="my-2 w-[270px] bg-gray-900 xs:w-[360px] md:w-[450px] px-6 py-3 rounded-full outline-none border-[1px] border-gray-400 focus:border-purple-400 text-white transition duration-200"
        />
        <span className="absolute top-3 text-gray-500 left-6 transition duration-300">
          {fullName ? "" : "Full Name"}
        </span>
      </label>
      <label className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-2 w-[270px] bg-gray-900 xs:w-[360px] md:w-[450px] px-6 py-3 rounded-full outline-none border-[1px] border-gray-400 focus:border-purple-400 text-white transition duration-200"
        />
        <span className="absolute top-3 text-gray-500 left-6 transition duration-300">
          {email ? "" : "Email"}
        </span>
      </label>
      <label className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="my-2 w-[270px] xs:w-[360px] md:w-[450px] px-6 py-3 rounded-full outline-none border-[1px] border-gray-400 focus:border-purple-400 bg-gray-900 text-white transition duration-200"
        />
        <span className="absolute top-3 text-gray-500 left-6 transition duration-300">
          {password ? "" : "Password"}
        </span>
      </label>
      <div className="flex items-center my-4">
        <input
          id="terms"
          type="checkbox"
          className="w-5 h-5 rounded-full text-purple-500 bg-gray-800 border-gray-500 focus:ring-purple-500"
        />
        <label
          htmlFor="terms"
          className="ml-4 text-sm font-medium text-gray-300"
        >
          I agree to the{" "}
          <span className="text-purple-400 hover:underline">
            terms & conditions
          </span>{" "}
          and{" "}
          <span className="text-purple-400 hover:underline">
            privacy policy
          </span>
        </label>
      </div>
      <button
        type="submit"
        className="w-[270px] xs:w-[360px] md:w-[450px] py-3 bg-purple-500 hover:bg-purple-700 text-white text-base font-medium rounded-full transition duration-300"
      >
        Submit
      </button>
    </form>
    <div className="flex items-center justify-center my-5 text-gray-500">
      <div className="border-t-[1px] border-gray-400 w-[150px] mr-2"></div>
      OR
      <div className="border-t-[1px] border-gray-400 w-[150px] ml-2"></div>
    </div>
    <div className="flex flex-col items-center">
      <button
        onClick={() => signInWithGoogle()}
        className="w-[270px] xs:w-[360px] md:w-[450px] py-3 bg-gray-900 hover:bg-gray-200 text-white text-sm font-medium rounded-full flex items-center justify-center transition duration-300"
      >
        <img
          src={require("../../assets/Google.png")}
          alt="Google"
          className="h-5 mr-2"
        />
        Register With Google
      </button>
      {/* <button
        onClick={() => signInWithGithub()}
        className="w-[270px] xs:w-[360px] md:w-[450px] py-3 bg-gray-900 hover:bg-gray-300 text-white text-sm font-medium rounded-full flex items-center justify-center mt-4 transition duration-300"
      >
        <img
          src={require("../../assets/Github.png")}
          alt="GitHub"
          className="h-6 mr-2"
        />
        Register With GitHub
      </button> */}
      </div>
      <div className="text-gray-400 mt-4">
        Already have an account?{" "}
        <Link to={"/login"}>
          <span className="text-purple-400 hover:underline">Login</span>
        </Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default Register;
