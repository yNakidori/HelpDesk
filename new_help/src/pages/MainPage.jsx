import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">WELCOME TO ASSIST-PRO</h1>
        <p className="text-lg">
          Explore the power of AssistPro - Your Ultimate Support Management Solution.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* Left column container */}
        <div
          className="px-4 md:px-0 rounded-b-lg lg:rounded-l-lg lg:rounded-br-none flex items-center justify-center mb-4 lg:mb-0"
          style={{
            background:
              'linear-gradient(to left, rgb(165, 180, 252), rgb(192, 132, 252))',
          }}
        >
          <div className="px-4 py-6 text-white md:mx-6 md:p-12">
            <h4 className="mb-6 flex items-center text-xl font-semibold">
              <i className="mr-2 fas fa-sign-in-alt"></i> LOGIN INTO YOUR ACCOUNT
            </h4>
            <p className="text-sm text-justify">
              Log in to your account and explore the features of AssistPro. Stay connected, manage your support tickets, and enjoy a seamless experience with our platform.
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                Login
              </button>
            </div>
          </div>
        </div>
        {/* Right column container with background and description */}
        <div
          className="rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none justify-center"
          style={{
            background:
              'linear-gradient(to right, rgb(165, 180, 252), rgb(192, 132, 252))',
          }}
        >
          <div className="px-4 py-6 text-white md:mx-6 md:p-12">
            <h4 className="flex items-center mb-6 text-xl font-semibold">
              <i className="mr-2 fas fa-user-plus"></i> REGISTER YOUR ACCOUNT
            </h4>
            <p className="text-sm text-justify">
              Ready to join AssistPro? Register your account now and unlock a world of possibilities. Enjoy fast ticket opening, efficient support management, and enhanced user satisfaction. Your journey with AssistPro begins here!
            </p>
            <div className="mt-4">
              <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Additional content outside the main blocks */}
      <div className="mt-8 text-center">
        <p className="text-xl">Learn more about AssistPro's features and benefits.</p>
        <a href="#" className="text-blue-500 hover:underline">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default MainPage;
