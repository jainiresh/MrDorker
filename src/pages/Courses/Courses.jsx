import React, { useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { courses } from "../../constants/constants";
import Carousel from "./Carousel/Carousel";
import './Carousel/Courses.css'


const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formState, setFormState] = useState({
        course: selectedCourse?.heading || "",
        name: "",
        email: "",
        phone: "",
        customMessage: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setFormState({ course: course.heading });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/courses/buyCourse`,
                formState
            );
            alert("Course buy request submitted successfully!");
            setIsModalOpen(false); // Close modal after submission
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("Failed to submit the request. Please try again.");
        }
    };

    return (
        <>
            {
                isModalOpen ? <div
                className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50"
                style={{
                  backgroundImage: "url('/wallpaper.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-lg p-8 w-11/12 md:w-1/3 shadow-2xl transform transition-transform duration-300 hover:scale-105">
                  <h2 className="text-3xl font-bold mb-6 text-center text-white border-b-4 border-purple-500 pb-4">
                    Buy Request Form
                  </h2>
          
                  <div className="mb-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">
                      {selectedCourse?.heading}
                    </h3>
          
                    <p className="text-lg text-gray-200">
                      <span className="text-2xl text-[gold] font-semibold">
                        INR {selectedCourse?.price}
                      </span>
                      <span className="text-m text-gray-400 line-through ml-2">
                        {selectedCourse?.slashedPrice}
                      </span>
                    </p>
                  </div>
          
                  <form onSubmit={handleFormSubmit}>
                    {/* Selected Course Field */}
                    <label htmlFor="course" className="block text-gray-300 mb-2">
                      Selected Course:
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formState.course}
                      readOnly
                      className="w-full p-3 rounded-lg bg-violet-600 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      style={{ fontWeight: "bold" }}
                    />
          
                    {/* Bug Hunter Name Field */}
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Bug Hunter Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Bug Hunter Would I Be Called"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
          
                    {/* Email Field */}
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="bac-expert@email.com"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
          
                    {/* Phone Number Field */}
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 909xxxxxx5"
                      value={formState.phone}
                      required
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
          
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Custom Price / Message:
                    </label>
                    <input
                      type="text"
                      id="customMessage"
                      name="customMessage"
                      placeholder="I would like to purchase the course, but im 500 short, can i go ahead and pay the partial later ?"
                      value={formState.customMessage}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
          
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[gold] text-black font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                    >
                      Submit
                    </button>
          
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div> :
                <div
                    className="text-white p-8 min-h-screen"
                    style={{
                        backgroundImage: "url('/wallpaper.jpg')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                    }}

                >
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <h1 className="text-4xl font-bold mb-8 text-center">
                                Explore Our Courses
                            </h1>
                            <div className="grid grid-cols-2 gap-8">
                                {courses.map((course) => (
                                    <div
                                        key={course.id}
                                        className={`p-6 rounded-lg shadow-lg transition-all cursor-pointer hover:bg-purple-800 ${selectedCourse?.id === course.id
                                                ? "bg-purple-800"
                                                : "bg-gray-800"
                                            }`}
                                        onClick={() => handleCourseSelect(course)}
                                    >
                                        <span style={{ fontStyle: "italic" }}>
                                            ~ For {course.target}
                                        </span>
                                        <div style={{ paddingTop: "1rem" }}>
                                            <h2
                                                className="text-3xl font-semibold mb-5"
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {course.heading}
                                            </h2>
                                            <p className="text-gray-300" style={{ fontWeight: "bold" }}>
                                                {course.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: "10rem" }}>
                                {selectedCourse == null && (
                                    <div className="text-center">
                                        <h1 className="text-4xl font-bold mb-8 animate-blink flex items-center justify-center space-x-2">
                                            <span>Choose A Course Above</span>
                                            <span className="animate-hand-point">👆</span>
                                        </h1>
                                    </div>
                                )}
                            </div>

                            {selectedCourse && (
                                <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-2xl hover:shadow-purple-700 transition-all duration-300 transform">
                                    <h2 className="text-4xl font-bold mb-6 text-center text-white border-b-2 border-purple-600 pb-4">
                                        {selectedCourse.heading}
                                    </h2>
                                    <p className="text-lg mb-6 text-gray-300 leading-relaxed text-center">
                                        {selectedCourse.description}
                                    </p>

                                    <div
                                        className="mb-8 grid grid-cols-3 gap-4"
                                        style={{ display: "flex" }}
                                    >
                                        <Carousel images={selectedCourse.images} />
                                    </div>

                                    <div style={{ display: "flex", width: "100%" }}>
                                        <div className="mb-8 flex-1">
                                            <h3 className="text-4xl font-semibold mb-4 text-purple-400">
                                                Course Content:
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                {selectedCourse.content.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="pl-2 border-l-4 border-r-4 border-purple-500 hover:bg-purple-700 hover:text-white p-2 rounded transition-all"
                                                        style={{ listStyleType: "none" }}
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-8 flex-1">
                                            <h3 className="text-4xl font-semibold mb-4 text-purple-400">
                                                Benefits:
                                            </h3>
                                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                {selectedCourse.benefits.map((benefit, index) => (
                                                    <li
                                                        key={index}
                                                        className="pl-2 border-l-4 border-r-4 border-purple-500 hover:bg-purple-700 hover:text-white p-2 rounded transition-all"
                                                        style={{ listStyleType: "none" }}
                                                    >
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="button-poss">


                                        <button className="button" onClick={() => setIsModalOpen(true)}>
                                            <svg
                                                height="24"
                                                width="24"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Buy</span>
                                        </button>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Courses;

