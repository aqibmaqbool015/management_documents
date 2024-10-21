"use client";
import Head from 'next/head';
import CustomInput from '../components/input';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, socials } from '../constant';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();

    const handleSignUpClick = (e) => {
        e.preventDefault();
        router.push('/signup');
    };

    const handleForgotClick = (e) => {
        e.preventDefault();
        router.push('/forgot');
    };

    const image = {
        image: '/login.png',
        logo: '/logo.svg',
        mail: '/mail.svg',
        key: '/key.svg',

    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    }, [email, password]);

    const validateForm = () => {
        let validationErrors = {};

        if (!email) {
            validationErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is invalid.';
        }
        if (!password) {
            validationErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be atleast 6 letters.';
        }

        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            router.push('/dashboard')
            console.log('Form Submitted successfully!');
        } else {
            console.log('Form has errors, please correct them.');
        }
    };

    const inputFields = [
        {
            label: 'Email',
            type: 'email',
            value: email,
            change: (e) => setEmail(e.target.value),
            id: 'email',
            name: 'email',
            placeholder: 'Enter your email',
            labelClass: 'text-[17px] text-customBlue',
            icon: image.mail,
            error: errors.email,
        },
        {
            label: 'Password',
            type: 'password',
            value: password,
            change: (e) => setPassword(e.target.value),
            id: 'password',
            name: 'password',
            placeholder: 'Enter your password',
            labelClass: 'text-[17px] text-customBlue',
            icon: image.key,
            error: errors.password,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            <Head>
                <title>Login Page</title>
            </Head>

            <div className="w-full md:w-[50%] flex flex-col items-center">
                <div className='text-left w-full'>
                    <img src={image.logo} alt="Car Dealership"
                        className='w-[140px] h-auto' />
                </div>

                <div className="max-w-md w-full py-5 px-4 md:px-0">
                    <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
                        Sign In
                    </h1>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {inputFields.map((field) => (
                            <CustomInput
                                key={field.id}
                                label={field.label}
                                type={field.type}
                                value={field.value}
                                id={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                labelClass={field.labelClass}
                                icon={field.icon}
                                onChange={field.change}
                                error={field.error}
                            />
                        ))}

                        <div className="mt-[10px]">
                            <div className="text-sm text-right">
                                <a
                                    className="font-medium text-customGradiantFrom cursor-pointer"
                                    onClick={handleForgotClick}
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            // disabled={!isFormValid}
                            className={`mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            Sign In
                        </button>

                        <h6 className="text-2xl font-normal mb-8 text-center text-[15px] text-customText">
                            Don’t have an account?{' '}
                            <span
                                className="text-customGradiantFrom font-medium cursor-pointer"
                                onClick={handleSignUpClick}
                            >
                                Sign Up
                            </span>
                        </h6>
                    </form>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        {
                            socials.map((item, index) => {
                                return (
                                    <div key={index} className=' text-center border  border-customBg py-2 px-2 rounded-[8px]'>
                                        <Link href="#">
                                            <div className='flex items-center justify-center'>
                                                <img src={item.image} alt="" className='w-[21px] inline-block h-auto' />
                                                <p className='mx-3 text-customBlue text-[16px] font-medium capitalize '>
                                                    {item.title}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <img src={image.image} alt="Car Dealership" className='h-full w-full' />
            </div>
        </div>
    );
}
