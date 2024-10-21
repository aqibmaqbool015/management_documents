"use client";
import Head from 'next/head';
import CustomInput from '../components/input';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPage() {
    const router = useRouter();

    const image = {
        image: '/login.png',
        logo: '/logo.svg',
        mail: '/mail.svg',
    };

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Track if form has been submitted

    useEffect(() => {
        if (submitted) {
            validateForm();
        }
    }, [email, submitted]);

    const validateForm = () => {
        let validationErrors = {};
        if (!email) {
            validationErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is invalid.';
        }
        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true); // Mark form as submitted
        validateForm();
        if (isFormValid) {
            router.push('/new-password');
            console.log('Form submitted successfully!');
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
            error: errors.email, // Display error based on validation
        },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            <Head>
                <title>Forgot Password</title>
            </Head>

            <div className="w-full md:w-[50%] flex flex-col items-center">
                <div className='text-left w-full'>
                    <img src={image.logo} alt="Car Dealership"
                        className='w-[140px] h-auto' />
                </div>

                <div className="max-w-md w-full py-5 px-4 md:px-0">
                    <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
                        Forgot Password
                    </h1>
                    <h6 className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal
                    text-customBlue">
                        Enter the email of your account and we will send the email to reset your password.
                    </h6>

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
                                onChange={field.change}
                                icon={field.icon}
                                error={submitted ? field.error : null} // Only show error after submit
                            />
                        ))}

                        <div className='!mt-7'>
                            <button
                                type="submit"
                                className="mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo"
                            >
                                Next
                            </button> 
                            <button className='mt-5 border-customBlue text-customBlue
                            w-full flex justify-center py-3 px-4 border rounded-[8px] text-sm font-medium '>
                                Back
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <img src={image.image} alt="Car Dealership" className='h-full w-full' />
            </div>
        </div>
    );
}
