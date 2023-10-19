import "./App.css";

function App() {
  const onUsernameChange = (username: string) => {
    console.log(username);
  };

  const onPasswordChange = (username: string) => {
    console.log(username);
  };
  return (
    <>
      <div className="flex bg-slate-700 w-screen h-screen justify-center flex-col items-center ">
        <div className="flex bg-slate-500 items-center w-1/4 h-full flex-col justify-center item-center">
          <h1 className="flex font-bold text-xl">Login Form</h1>
          <div>
            <label>UserName</label>
            <input
              type="text"
              className="m-2 p-2 rounded-md"
              required
              placeholder="Your name"
              onChange={(e) => {
                onUsernameChange(e.target.value);
              }}
            />

            <label>Passward</label>
            <input
              type="password"
              required
              className="m-2 p-2 rounded-md"
              onChange={(e) => {
                onPasswordChange(e.target.value);
              }}
            />
          </div>
          <div className="bg-white rounded-md h-8 w-12 m-4">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
