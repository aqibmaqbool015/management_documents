"use client";
import Head from 'next/head';
import CustomInput from '../components/input';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../constant';

export default function NewPassword() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/login')
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
        if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };
    const placeholders = ['1', '2', '3', '4', '5', '6'];



    const image = {
        image: '/create.png',
        logo: '/logo.svg',
        key: '/key.svg',
        check: '/check.svg',
        checks: '/checks.svg',
        eyeOff: '/eye-off.svg',
        cross: '/cross.svg'
    };

    const message = [
        {
            icon: image.checks,
            text: 'Password must be between 8 to 32 character.',
        },
        {
            icon: image.checks,
            text: 'Must contain a uppercase character.',
        },
        {
            icon: image.checks,
            text: 'Must contain a number.',
        },
        {
            icon: image.check,
            text: 'Must contain one special character.',
        },
    ]

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    }, [password, newPassword])

    const validateForm = () => {
        let validationErrors = {};

        if (!password) {
            validationErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            validationErrors.password = 'Password must be atleast 6 letters.'
        }
        if (!newPassword) {
            validationErrors.newPassword = 'Password is required.';
        } else if (newPassword.length < 6) {
            validationErrors.newPassword = 'Password must be atleast 6 letters.';
        }

        setErrors(validationErrors);
        setIsFormValid(Object.keys(validationErrors).length === 0)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            openModal();
            console.log('Form submitted successfuly!');

        } else {
            console.log(('Form has errors, please correct them.'));

        }
    }

    const inputFields = [
        {
            label: 'New Password',
            type: 'password',
            id: 'password',
            name: 'password',
            value: password,
            change: (e) => setPassword(e.target.value),
            placeholder: 'Enter your password',
            labelClass: 'text-[17px] text-customBlue',
            icon: image.key,
            eye: image.eyeOff,
            error: errors.password,

        },
        {
            label: 'Confirm New Password',
            type: 'password',
            id: 'typePassword',
            name: 'typePassword',
            value: newPassword,
            change: (e) => setNewPassword(e.target.value),
            placeholder: 'Enter re-type password',
            labelClass: 'text-[17px] text-customBlue',
            icon: image.key,
            eye: image.eyeOff,
            error: errors.newPassword
        },
    ];



    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            <Head>
                <title>Create Password</title>
            </Head>

            <div className="w-full md:w-[50%] flex flex-col items-center">
                <div className='text-left w-full'>
                    <img src={image.logo} alt="Car Dealership"
                        className='w-[140px] h-auto' />
                </div>

                <div className="max-w-md w-full py-5 px-4 md:px-0">
                    <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
                        Create new password
                    </h1>
                    <h6 className="text-2xl font-normal mb-8 text-center text-[14px] leading-normal
                    text-customBlue">
                        Enter the email of your account and we will send the email to reset your password.
                    </h6>

                    <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
                        {inputFields.map((field) => (
                            <CustomInput
                                key={field.id}
                                label={field.label}
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                value={field.value}
                                placeholder={field.placeholder}
                                labelClass={field.labelClass}
                                onChange={field.change}
                                icon={field.icon}
                                eye={field.eye}
                                error={field.error}
                            />
                        ))}

                        <div className='my-5'>
                            {
                                message.map((item, index) => {
                                    return (
                                        <div className='flex items-center '>
                                            <img src={item.icon} alt='' className='w-[15px] h-[15px] object-contain inline-block ' />
                                            <p className='mx-2 text-[14px] text-customBlue font-normal '>
                                                {item.text}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='!mt-7'>
                            {/* <Button name='Reset Password' onClick={openModal} /> */}
                            <button
                                type="submit"
                                // disabled={!isFormValid}
                                className={`mt-4 w-full border-transparent rounded-[8px] py-3 px-4 shadow-sm text-sm font-medium text-white bg-gradient-to-r from-customGradiantFrom to-customGradiantTo ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                Reset Password
                            </button>
                            <button className='mt-5 border-customBlue text-customBlue
                            w-full flex justify-center py-3 px-4 border rounded-[8px] text-sm font-medium '
                            >
                                Back
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div className="w-full md:w-[50%]">
                <img src={image.image} alt="Car Dealership" className='h-full w-full' />
            </div>

            {isModalOpen && (
                <div id="myModal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-[550px] overflow-y-auto">
                        <div className="p-4 relative">
                            <div className="absolute right-3 top-4">
                                <img src={image.cross} alt="Close" className="w-[20px] h-auto cursor-pointer" onClick={closeModal} />
                            </div>

                            <h4 className='text-[26px] text-center font-medium text-customBlue capitalize mt-4'>
                                Enter OTP Code
                            </h4>
                            <div className=''>
                                <h6 className='text-[20px] font-semibold capitalize mt-4 text-transparent bg-clip-text bg-gradient-to-r from-customGradiantFrom to-customGradiantTo'>
                                    Check your email
                                </h6>
                                <p className='text-customBlue text-[16px] font-normal '>
                                    We,ve sent a 6-digit confirmation OTP code to <b>username@gmail.com</b>. Make sure you enter correct code.
                                </p>
                                <div className='text-center md:mt-4'>
                                    {Array(6)
                                        .fill("")
                                        .map((_, index) => (
                                            <input
                                                key={index}
                                                type="number"
                                                maxLength="1"
                                                placeholder={placeholders[index]}
                                                className="w-10 h-16 text-center text-lg border border-customBg rounded-[8px] focus:outline-none focus:border-customGradiantFrom appearance-none placeholder-customBlue mx-2 md:my-3 my-2"
                                                onInput={(e) => handleInput(e, index)}
                                                ref={(el) => (inputRefs.current[index] = el)}
                                            />
                                        ))}

                                    <div className='px-10 mt-4'>
                                        <Button name='Continue' onClick={handleClick} />
                                        <p className='text-customText underline text-[16px] font-normal mt-3'>
                                            Resend Code
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
