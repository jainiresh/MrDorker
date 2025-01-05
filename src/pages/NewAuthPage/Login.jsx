import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGithub, signInWithGoogle } from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [Data, setData] = useState(initialState);
  const { password, email } = Data;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required!");
    } else if (!password) {
      toast.error("Password is required!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          dispatch({ type: "USER_LOGIN_REQUEST_V2", payload: userCredentials.user });
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
              toast.error("Invalid email id!");
              break;
            case "auth/user-not-found":
              toast.error("User not registered!");
              break;
            case "auth/wrong-password":
              toast.error("Wrong password!");
              break;
            case "auth/too-many-requests":
              toast.error("Too many attempts, try later!");
              break;
            default:
              toast.error("Something went wrong!");
          }
        });
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const signInWithGoogleHandler = async () => {
    const metadataResponse = await signInWithGoogle();
    dispatch({ type: "USER_LOGIN_REQUEST_V2", payload: metadataResponse });
  };

  return (
    <div
    className="flex items-center justify-center h-[94vh] bg-gradient-to-br from-gray-900 via-black to-purple-900"
  >
    <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl text-center w-[90%] max-w-lg">
      <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
      <p className="text-gray-400 mb-6">Sign in to continue</p>
      <form onSubmit={handlesubmit} className="space-y-8" style={{ paddingBottom: '1rem' }}>
        <div className="relative">
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full p-3 rounded-full bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
      <div className="flex items-center justify-center my-6">
        <div className="border-t border-gray-500 w-20" />
        <span className="mx-3 text-gray-400">OR</span>
        <div className="border-t border-gray-500 w-20" />
      </div>
      <button
        onClick={signInWithGoogleHandler}
        className="w-full py-3 rounded-full bg-gray-900 text-white font-medium flex items-center justify-center hover:bg-gray-800 transition duration-300"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png"
          alt="google"
          className="h-6 mr-2"
        />
        Login with Google
      </button>
      {/* <button
        onClick={signInWithGithub}
        className="w-full py-3 rounded-full bg-gray-900 text-white font-medium flex items-center justify-center hover:bg-gray-800 transition duration-300 my-4"
      >
        <img
          src={require("../../assets/Github.png")}
          alt="github"
          className="h-6 mr-2"
        />
        Login with GitHub
      </button> */}
      <p className="text-gray-400 mt-8">
        Don't have an account?{" "}
        <Link to="/register" className="text-purple-400 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </div>
  
  );
};

export default Login;
