import { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Sidebar from "../../components/sidebar";
import Taskbar from "../../components/taskbar";
import axios from "axios";

type Users = {
  fName: string;
  lName: string;
  username: string;
  id: number;
};

function UserComponent({ user }: { user: Users }) {
  return (
    <>
      <div className="w-full h-1/6  flex justify-around">
        <p className="text-gray-700 text-xl font-normal">{`ID ${user.id}`}</p>
        <p className="text-gray-700 text-xl font-normal">{`Name ${
          user.fName + " " + user.lName
        }`}</p>
        <p className="text-gray-700 text-xl font-normal">{`Username ${user.username}`}</p>
      </div>
    </>
  );
}

function Home() {
  const [users, setUsers] = useState<Users[]>([]);

  const getAllUsers = async () => {
    const userData = await axios.get("http://localhost:3000/users/getAllUsers");

    console.log("userData ", userData.data);

    setUsers(userData.data);
  };
  useEffect(() => {
    void getAllUsers();
  }, []);
  return (
    <>
      <div className=" w-screen h-screen bg-slate-100">
        <Nav />

        <div className="w-full h-full  pt-28 pl-8 pb-8 flex">
          <Sidebar />
          <div className="w-10/12 h-full px-8 ">
            <div className="w-full h-full">
              <Taskbar Task={"Manage Trainees"} />
              <div className="w-full h-5/6 pt-8 ">
                <div className="w-full h-full bg-white shadow-lg p-4 ">
                  <div className="w-full h-full bg-white  ">
                    {users ? (
                      <>
                        {users.map((user) => {
                          return <UserComponent user={user} />;
                        })}
                      </>
                    ) : (
                      <>
                        <p className="text-gray-700 text-xl font-normal">
                          No Result
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
