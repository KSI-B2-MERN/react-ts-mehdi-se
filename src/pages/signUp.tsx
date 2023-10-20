import axios from "axios";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const login = async () => {
    console.log("username", username);
    console.log("password", password);

    const loginRes = await axios.post("http://localhost:3000/user/createUser", {
      username: username,
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
      <div className="flex w-screen h-screen bg-white justify-center items-center ">
        <div className="h-full w-1/6 flex flex-col justify-center">
          <div className="w-full flex flex-col ">
            <label className="text-gray-500">Username</label>
            <input
              className=" border-2   border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
              required
              placeholder="your username"
              type="text"
              onChange={(e) => {
                void onUsernameChange(e.target.value);
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
              disabled={!(username && password)}
              className=" border-2 py-2 px-8 rounded-md w-32 bg-blue-500 text-white disabled:bg-gray-300  focus:outline-none"
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

export default SignUp;
