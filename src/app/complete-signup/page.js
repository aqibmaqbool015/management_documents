"use client";
import Head from 'next/head';
import CustomInput from '../components/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, socials } from '../constant';
import Link from 'next/link';

export default function CompleteSignup() {
  const router = useRouter();

  const handleSignUpClick = (e) => {
    e.preventDefault();
    router.push('/login');
  };


  const image = {
    image: '/signup2.png',
    logo: '/logo.svg',
    mail: '/mail.svg',
    key: '/key.svg',
    calendar: '/calendar.svg',
    user: '/user.svg',

  };

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const legalName = [
    {
      label: 'Legal Name',
      type: 'text',
      id: 'text',
      name: 'text',
      placeholder: 'First Name',
      labelClass: 'text-[17px] text-customBlue font-medium',
      icon: image.user

    },
    {
      type: 'text',
      id: 'text_name',
      name: 'text_name',
      placeholder: 'Last Name',
      labelClass: 'text-[17px] text-customBlue font-medium',
      icon: image.user

    },
  ];
  const inputFields = [
    {
      label: 'Date of birth',
      type: 'date',
      id: 'date',
      name: 'date',
      placeholder: 'Enter Date of birth',
      labelClass: 'text-[17px] text-customBlue font-medium',
      icon: image.calendar

    },
    {
      label: 'Contact information',
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      labelClass: 'text-[17px] text-customBlue font-medium',
      icon: image.mail

    },
  ];
  const inputField = [
    {
      label: 'Create Password',
      type: 'password',
      id: 'password',
      name: 'password',
      placeholder: ' Password',
      labelClass: 'text-[17px] text-customBlue font-medium',
      icon: image.key

    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('#');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="w-full md:w-[50%] relative">
        <img src={image.image} alt="Car Dealership" className='h-full w-full' />
        <div className='text-left w-full'>
          <img src={image.logo} alt="Car Dealership"
            className='w-[140px] h-auto absolute left-3 top-3' />
        </div>
      </div>
      <div className="w-full md:w-[50%] flex flex-col items-center">


        <div className="max-w-md w-full py-5 px-4 md:px-0">
          <h1 className="text-2xl font-semibold mb-2 text-center text-[30px] text-customBlue">
            Complete Signup
          </h1>

          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>

            {legalName.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                labelClass={field.labelClass}
                onChange={handleInputChange}
                icon={field.icon}
              />
            ))}

            <p className='text-2xl font-normal mb-5 text-[14px] leading-normal
                    text-customBlue'>
              Make sure this matches the name on your government ID. If you go by another name, you can add a  <Link href='' className='underline'>
                preferred first name.</Link>
            </p>

            {inputFields.map((field) => (
              <CustomInput
                key={field.id}
                label={field.label}
                type={field.type}
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                labelClass={field.labelClass}
                onChange={handleInputChange}
                icon={field.icon}
              />
            ))}

            <div className='!mt-7'>
              <p className='text-2xl font-normal mb-5 text-[14px] leading-normal
                    text-customBlue'>
                By selecting Agree and continue, i agree to FRNSH <Link href='' className='underline'>
                  Terms of Services</Link>, <Link href='' className='underline'>
                  Payment Terms</Link> and acknowledge the <Link href='' className='underline'>
                  Privacy Policy.</Link>
              </p>
              {inputField.map((field) => (
                <CustomInput
                  key={field.id}
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formValues[field.name]}
                  labelClass={field.labelClass}
                  onChange={handleInputChange}
                  icon={field.icon}
                />
              ))}

              <div className='!mt-7'>
                <Button name='Continue' />
              </div>
            </div>

          </form>

        </div>
      </div>


    </div>
  );
}
