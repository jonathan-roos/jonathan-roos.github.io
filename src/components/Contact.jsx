import React from 'react';
import Title from './Title' ;

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/b6569c9b-b5b9-411c-bca4-cdd21e13bc16"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focusLoutline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        cols="30"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"    
                        className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-pink-500 dark:to-teal-900 drop-shadow-md"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;