import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const redirectToSignUp = () => {
    // Use the `navigate` function to go to the sign-up page
    navigate("/login");
  };

  return (
    <>
      <div className="h-screen w-screen text-black flex justify-center">
        <div className=" bg-blue-200 w-screen flex flex-col items-center justify-center">
          <h1>Sign Up</h1>
          <div className="flex flex-col">
            <label className="mt-2 ">First name</label>
            <input
              className="rounded-md border-black border-2 pl-2 "
              type="text"
              placeholder="Muntazir"
              required
            />
            <label className="mt-2 ">Last name</label>
            <input
              className="rounded-md border-black border-2 pl-2"
              placeholder="Mehdi"
              type="text"
              required
            />
            <label className="mt-2 ">Username</label>
            <input
              className="rounded-md border-black border-2 pl-2"
              placeholder="Mehdi-SE"
              type="text"
              required
            />
            <label className="mt-2 ">Email</label>
            <input
              className="rounded-md border-black border-2 pl-2"
              placeholder="mehdi@gmail.com"
              type="email"
              required
            />
            <label className="">Password</label>
            <input
              className="rounded-md border-black border-2 pl-2"
              type="password"
              required
            />
            <label className="">Confirm password</label>
            <input
              className="rounded-md border-black border-2 pl-2"
              type="password"
              required
            />
            <p>
              Already Registered
              <input
                className=" hover:pointer text-red-950 font-bold hover:cursor-pointer"
                type="button"
                value="Login"
                onClick={redirectToSignUp}
              />{" "}
            </p>
            <div className="mt-2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
