import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Select from "react-select";

const roleOptions = [
  { value: "1", label: "Student" },
  { value: "2", label: "Teacher" },
];

function SignUp() {
  const [fName, setFName] = useState<string>("");
  const [lName, setLName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const [signup, setSignup] = useState<boolean>(false);

  const onFNameChange = (fName: string) => {
    setFName(fName);
  };
  const onLNameChange = (lName: string) => {
    setLName(lName);
  };

  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onRoleChange = (role: string) => {
    setRole(role);
  };
  const signUp = async () => {
    const loginRes = await axios.post("http://localhost:3000/auth/signUp", {
      fName: fName,
      lName: lName,
      username: username,
      password: password,
      role: role,
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
        {signup ? (
          <>
            <div className="flex justify-end items-end h-auto w-1/2 ">
              <div className="flex justify-center flex-col  m-auto mt-14 mb-4  w-72 h-auto rounded-xl bg-white border-slate-500 border-2">
                <label className="ml-3 mt-4">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First name"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onFNameChange(e.target.value);
                  }}
                />
                <label className="ml-3 mt-4">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onLNameChange(e.target.value);
                  }}
                />
                <label className="ml-3 mt-4">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onUsernameChange(e.target.value);
                  }}
                />
                <label className="ml-3 mt-4">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onPasswordChange(e.target.value);
                  }}
                />
                <label className="ml-3 mt-4">Role</label>
                <Select
                  className="bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  isSearchable={true}
                  options={roleOptions}
                  placeholder="Select Role"
                  onChange={(e) => {
                    void onRoleChange(e?.value || "");
                  }}
                />
                <button
                  className=" bg-gray-400  mt-6 m-auto w-32 p-1 rounded-md text-black"
                  onClick={() => {
                    void signUp();
                  }}
                >
                  Sign Up
                </button>
                <label className="m-auto mt-2">Or</label>
                <button
                  className="bg-gray-400  mt-2 mb-2 m-auto w-40 p-1 rounded-md text-black"
                  onClick={() => {
                    setSignup(false);
                  }}
                >
                  Log in
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end items-end w-1/2 ">
              <div className="flex justify-center flex-col  m-auto mt-14  w-72 h-80 rounded-xl bg-white border-slate-500 border-2">
                <label className="ml-3 mt-4">Username</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onUsernameChange(e.target.value);
                  }}
                />
                <label className="ml-3 mt-4">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className=" bg-gray-300 ml-2 mt-1  w-64 p-1 rounded-md text-black "
                  onChange={(e) => {
                    void onPasswordChange(e.target.value);
                  }}
                />
                <button className=" bg-gray-400  mt-6 m-auto w-32 p-1 rounded-md text-black">
                  Login
                </button>
                <label className="m-auto mt-0">Or</label>
                <button
                  className="bg-gray-400  mt-0 m-auto w-40 p-1 rounded-md text-black"
                  onClick={() => {
                    setSignup(true);
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default SignUp;
