"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [signUpResponse, setSignUpResponse] = useState({});

  const [formInput, setFormInput] = useState({
    userEmail: "",
    password: "",
    repassword: "",
  });

  const [code, setCode] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      formInput.userEmail === "" ||
      formInput.password === "" ||
      formInput.repassword === "" ||
      formInput.password !== formInput.repassword
    )
      return;

    const signUpData = {
      userEmail: formInput.userEmail,
      password: formInput.password,
      adminRole: "admin",
    };

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, signUpData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const responseData = response.data.data;
        setSignUpResponse(responseData);
        setStep(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleTokenVerify = async () => {
  //   if (code === "") return false;

  //   let verified = false;

  //   const verifyData = {
  //     userEmail: formInput.userEmail,
  //     token: code,
  //   };

  //   await axios
  //     .post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/auth/verify2FAToken`,
  //       verifyData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       console.log("error123");
  //       verified = true;
  //     })
  //     .catch((error) => {
  //       console.log("error123");
  //       console.log(error);
  //     });

  //   return verified;
  // };

  const handleSignUp2fa = async (e) => {
    e.preventDefault();

    if (code === "") return;

    const verifyData = {
      userEmail: formInput.userEmail,
      token: code,
    };

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/verify2FAToken`,
        verifyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        const loginData = {
          userEmail: formInput.userEmail,
          password: formInput.password,
          token: code,
        };

        await axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, loginData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
            router.push("/analytics");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className='flex items-center justify-center w-screen h-screen bg-slate-100'>
      <div className='w-full max-w-lg p-2 m-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full px-6 py-6 lg:px-8'>
          <h3 className='mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white'>
            {step === 0 ? "Signup" : "2FA Setup"}
          </h3>
          {step === 0 ? (
            <form className='space-y-3' action='#'>
              <div>
                <label
                  htmlFor='userEmail'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Login ID
                </label>
                <input
                  type='email'
                  name='userEmail'
                  id='userEmail'
                  value={formInput.userEmail}
                  onChange={handleInputChange}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='name@company.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Set Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={formInput.password}
                  onChange={handleInputChange}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='repassword'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Re-enter Password
                </label>
                <input
                  type='password'
                  name='repassword'
                  id='repassword'
                  value={formInput.repassword}
                  onChange={handleInputChange}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              <button
                // onClick={() => setStep(1)}
                onClick={handleSignUp}
                type='button'
                className='w-full px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Next
              </button>
            </form>
          ) : (
            <form className='space-y-4' action='#'>
              <div className='w-full flex flex-col justify-center items-center space-y-2'>
                <img src={signUpResponse.qrCodeUrl} className='h-40 w-40' />
                <p className='text-sm'>Scan the QR Code in Authenticator App</p>
              </div>
              <div>
                <label
                  htmlFor='code'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  2FA Code
                </label>
                <input
                  name='code'
                  onChange={(e) => setCode(e.target.value)}
                  value={code}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Enter 2FA Code'
                  required
                />
              </div>

              <button
                onClick={handleSignUp2fa}
                type='button'
                className='w-full px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Sign up
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
