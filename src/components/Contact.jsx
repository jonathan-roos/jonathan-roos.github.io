import React from 'react';
import Title from './Title' ;

function Contact() {
    return (
        <div className="flex flex-col mx-auto">
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
                        className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-pink-500 dark:to-teal-900 drop-shadow-md hover:scale-105 transition-all dark:shadow-white"
                    >
                        Contact Me
                    </button>
                </form>
            </div>
            <div className="flex flex-col mt-14 mx-auto justify-center">
                <div className="flex justify-center items-center">
                    <a
                        className="flex flex-col w-full md:w-7/12 justify-center px-5"
                        href="https://www.linkedin.com/in/jonathan-roos-5b358b181/"
                        target="_blank"
                    >
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="dark:fill-white fill-black w-12 h-12 flex flex-col hover:fill-stone-400 dark:hover:fill-stone-600 transition-all"
                            viewBox="0 0 24 24" 
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                        </svg>
                    </a>
                    <a
                        className="flex flex-col w-full md:w-7/12 justify-center px-5"
                        href="https://www.instagram.com/jonathan.roos/"
                        target="_blank"
                    >
                    <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="dark:fill-white fill-black w-12 h-12 flex flex-col hover:fill-stone-400 dark:hover:fill-stone-600 transition-all"
                            viewBox="0 0 24 24" 
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/>
                        </svg>
                    </a>
                    <a
                        className="flex flex-col w-full md:w-7/12 justify-center px-5"
                        href="https://github.com/jonathan-roos"
                        target="_blank"
                    >
                    <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:fill-white fill-black w-12 h-12 flex flex-col hover:fill-stone-400 dark:hover:fill-stone-600 transition-all"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;