import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('Cleartech | Send us a message');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        axios.post(process.env.REACT_APP_CONTACT_API, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay'
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            const { response } = error;
            if (response && response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay'
                );
            }
            if (response && response.data.errors) {
                setErrors(response.data.errors);
            }
        });
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className="flex justify-center items-center mt-8 w-full bg-gray-50 py-12 lg:py-24">
    <div className="container mx-auto my-8 px-4 lg:px-20">
        <form className="flex justify-center" onSubmit={sendEmail}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <h1 className="font-semibold text-center text-gray-700 uppercase text-3xl">Póngase en Contacto</h1>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <input
                            name="first_name"
                            className="w-full bg-gray-100 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Nombre*"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors.first_name && 
                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                        }
                    </div>
                    <div>
                        <input
                            name="last_name"
                            className="w-full bg-gray-100 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Apellido*"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors.last_name && 
                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                        }
                    </div>
                    <div>
                        <input
                            name="email"
                            className="w-full bg-gray-100 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors.email && 
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        }
                    </div>
                    <div>
                        <input
                            name="phone_number"
                            className="w-full bg-gray-100 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            placeholder="Teléfono*"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyUp={clearErrors}
                        />
                        {errors.phone_number && 
                            <p className="text-red-500 text-sm">{errors.phone_number}</p>
                        }
                    </div>
                </div>
                <div className="my-6">
                    <textarea
                        name="message"
                        placeholder="Su mensaje*"
                        className="w-full h-32 bg-gray-100 text-gray-800 mt-2 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={clearErrors}
                    ></textarea>
                    {errors.message && 
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    }
                </div>
                <div className="my-4 w-full lg:w-1/3">
                    <button type="submit" id="submitBtn" className="uppercase text-sm  transition duration-300 ease-in-out font-bold tracking-wide bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Enviar Mensaje
                    </button>
                </div>
            </div>
        </form>
        {/* <div className="w-full lg:w-2/6 px-8 py-6 ml-auto bg-gray-800 rounded-lg mt-8 lg:-mt-96">
            <div className="flex flex-col text-white">
                <div className="flex my-4 w-full">
                    <div className="flex flex-col">
                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                        <p className="text-lg">Our Address</p>
                        <p className="text-gray-400">123 Street, City, Country</p>
                    </div>
                </div>
                <div className="flex my-4 w-full">
                    <div className="flex flex-col">
                        <i className="fas fa-phone-alt pt-2 pr-2" />
                        <p className="text-lg">Call Us</p>
                        <p className="text-gray-400">Tel: 095900417</p>
                    </div>
                </div>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                        <path d="M4.982 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-.5 7h1v10H4v-10zM11.5 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-1.5 6h1v10h-1v-10zM21 9h-2.5a.5.5 0 0 0-.5.5v.5h-1v1h1v5h1v-5h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"></path>
                                    </svg>
                                </a>
                            </div>
            </div>
        </div> */}
    </div>
</div>

            <Footer />
        </>
    );
};

export default Contact;
