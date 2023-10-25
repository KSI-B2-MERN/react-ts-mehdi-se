import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onemailChange = (email: string) => {
    setemail(email);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const login = async () => {
    console.log("email", email);
    console.log("password", password);

    const loginRes = await axios.post("http://localhost:3000/user/createUser", {
      username: email,
      password: password,
    });

    if (loginRes.data) {
      alert("logged in successfuly");
    } else {
      alert("incorrect username/password");
    }
  };

  return (
    <>
      <div className="flex w-screen h-screen bg-blue-200 justify-center p-10 items-center ">
        <div className="h-full w-1/4 flex flex-col justify-center">
          <h1>Login</h1>
          <p>Provide your valid login credentials</p>
          <div className="w-full flex flex-col ">
            <label className="text-gray-500">Email</label>
            <input
              className=" border-2   border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
              required
              placeholder="Enter your Email"
              type="email"
              onChange={(e) => {
                void onemailChange(e.target.value);
              }}
            />
            <label className="text-gray-500 mt-2">Password</label>
            <input
              className=" border-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
              required
              type="password"
              onChange={(e) => {
                void onPasswordChange(e.target.value);
              }}
            />
          </div>
          <div className="w-full  flex flex-col mt-6 items-center ">
            <button
              className=" border-2 py-2 px-8 rounded-md w-72 bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
              onClick={() => {
                void login();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
