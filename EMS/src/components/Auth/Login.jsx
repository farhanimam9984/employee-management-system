import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className=" min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center px-4 py-8">
      {/* Header section at top of page */}
      <div className="w-full text-center mb-8">
        <h1  className="text-5xl  font-bold mb-16">Please Login Here!!</h1>
      </div>

      {/* Form container */}
      <div className="w-full max-w-md bg-gray-800 rounded-xl border-3 border-emerald-600 p-8 shadow-lg">
        <form  onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-3 border-green-500 font-medium text-lg py-2 px-6 rounded-full placeholder:text-black' type="email" placeholder='Enter your Email' 
                />
                
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent  border-3 border-green-500 font-medium text-lg py-2 px-6 rounded-full mt-5 placeholder:text-black ' type="password" placeholder='Enter  your Password' />
                <button className=' cursor-pointer mt-7 text-black border-none outline-none hover:bg-green-700 font-semibold bg-blue-600 text-lg py-2 px-8  rounded-full placeholder:text-white'>Login</button>
            </form>
      </div>
    </div>
  );
};

export default Login;
