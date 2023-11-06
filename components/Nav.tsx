import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  fName: string;
  lName: string;
  role: number;
};

function Navbar() {
  const [user, setUser] = useState<User>();

  const getUser = async () => {
    const userData = await axios.get("http://localhost:3000/users/getUser", {
      params: {
        id: 4,
      },
    });

    setUser(userData.data);
  };
  useEffect(() => {
    void getUser();
  }, []);
  return (
    <>
      <div className=" w-full h-20 bg-blue-500 absolute top-0 flex">
        <div className="w-1/2 h-full flex pl-16 items-center">
          <p className="text-white mr-4 font-semibold text-lg">
            Knowledge Streams
          </p>
          <p className="text-white ml-4 p-2 font-normal text-sm cursor-pointer border border-gray-300">
            Visit Website
          </p>
        </div>
        <div className="w-1/2 h-full flex pr-16 items-center justify-end ">
          <div className="flex-col flex justify-center items-center h-full border-x px-4">
            <p className="text-white mr-4 font-normal text-md">
              {user?.fName + " " + user?.lName || "First Name"}
            </p>
            <p className="text-white mr-4 font-normal text-sm">
              {user?.role == 1 ? "Intructor" : "Trainee"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
