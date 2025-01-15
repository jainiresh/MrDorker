import React, { useState } from 'react';
import axios from 'axios';
import { courses } from '../../constants/constants';

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [formState, setFormState] = useState({ course: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);



    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setFormState({ course: course.heading });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://example.com/api/buy-request', formState);
            alert('Course buy request submitted successfully!');
            setIsModalOpen(false); // Close modal after submission
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('Failed to submit the request. Please try again.');
        }
    };


    return (
        <div className="min-h-screen text-white p-8"
            style={{ backgroundImage: "url('/wallpaper.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Courses</h1>
                    <div className="grid grid-cols-2 gap-8">
                        {courses.map((course) => (
                            <div key={course.id}
                                className={`p-6 rounded-lg shadow-lg transition-all cursor-pointer hover:bg-purple-800 ${selectedCourse?.id === course.id ? 'bg-purple-800' : 'bg-gray-800'
                                    }`}
                                onClick={() => handleCourseSelect(course)}>
                                <span style={{ fontStyle: 'italic' }}>~ For {course.target}</span>
                                <div style={{ paddingTop: '1rem' }}>
                                    <h2 className="text-3xl font-semibold mb-5" style={{ fontWeight: 'bold' }}>{course.heading}</h2>
                                    <p className="text-gray-300" style={{ fontWeight: 'bold' }}>{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '10rem' }}>
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
                        <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-2xl hover:shadow-purple-700 transition-all duration-300 transform hover:scale-105">
                            <h2 className="text-4xl font-bold mb-6 text-center text-white border-b-2 border-purple-600 pb-4">
                                {selectedCourse.heading}
                            </h2>
                            <p className="text-lg mb-6 text-gray-300 leading-relaxed text-center">
                                {selectedCourse.description}
                            </p>

                            <div className="mb-8 grid grid-cols-3 gap-4">
                                <p>Image carousel here centered</p>
                                {/* <img
                                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-purple-700 transition-all duration-300"
                                    src={selectedCourse.images[0]} // Assuming the first image path
                                    alt="Collage Image 1"
                                />
                                <img
                                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-purple-700 transition-all duration-300"
                                    src={selectedCourse.images[0]} // Assuming the second image path
                                    alt="Collage Image 2"
                                />
                                <img
                                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-purple-700 transition-all duration-300"
                                    src={selectedCourse.images[0]} // Assuming the third image path
                                    alt="Collage Image 3"
                                /> */}
                            </div>

                            <div style={{ display: 'flex', width: '100%' }}>
                                <div className="mb-8 flex-1">
                                    <h3 className="text-4xl font-semibold mb-4 text-purple-400">
                                        Course Content:
                                    </h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {selectedCourse.content.map((item, index) => (
                                            <li
                                                key={index}
                                                className="pl-2 border-l-4 border-r-4 border-purple-500 hover:bg-purple-700 hover:text-white p-2 rounded transition-all"
                                                style={{ listStyleType: 'none' }}
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
                                                style={{ listStyleType: 'none' }}
                                            >
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>

            {/* Buy Request Button */}
            {selectedCourse != null && <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-[50vh] right-8 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition w-[20rem]"
            >
                <b style={{ fontSize: '1.5rem' }}>Buy this</b><br /> {selectedCourse.id == 1 ? `Upgrade my bug bounty game` : `Get into Bug hunting right away !`}
            </button>}

            {/* Buy Request Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 rounded-lg p-8 w-11/12 md:w-1/3 shadow-2xl transform transition-transform duration-300 hover:scale-105">
                        <h2 className="text-3xl font-bold mb-6 text-center text-white border-b-4 border-purple-500 pb-4">
                            Buy Request Form
                        </h2>

                        <div className="mb-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">{selectedCourse?.heading}</h3>

                            <p className="text-lg text-gray-200">
                                <span className="text-2xl text-[gold] font-semibold">INR {selectedCourse?.price}</span>
                                <span className="text-m text-gray-400 line-through ml-2">{selectedCourse?.slashedPrice}</span>
                            </p>
                        </div>

                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="course" className="block text-gray-300 mb-2">Selected Course:</label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formState.course}
                                readOnly
                                className="w-full p-3 rounded-lg bg-gray-700 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[gold] text-black font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                            >
                                Submit
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105"
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Courses;
