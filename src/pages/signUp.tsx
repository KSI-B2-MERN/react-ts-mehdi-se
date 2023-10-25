function signUP() {
  return (
    <>
      <div className="h-screen w-screen text-black flex justify-center">
        <div className=" bg-blue-200 w-screen flex flex-col items-center justify-center">
          <div className="flex flex-col">
            <h1 className=" text-black flex justify-start">Sign-Up</h1>

            <label className="mt-2 " placeholder="Your name">
              First name
            </label>
            <input
              className="rounded-md border-black border-2"
              type="text"
              required
            />

            <label className="mt-2 " placeholder="Your name">
              Last name
            </label>
            <input
              className="rounded-md border-black border-2"
              type="text"
              required
            />

            <label className="mt-2 " placeholder="Your name">
              Username
            </label>
            <input
              className="rounded-md border-black border-2"
              type="text"
              required
            />

            <label className="mt-2 " placeholder="Your name">
              Email
            </label>
            <input
              className="rounded-md border-black border-2"
              type="email"
              required
            />

            <label className="">Password</label>
            <input
              className="rounded-md border-black border-2"
              type="password"
              required
            />

            <label className="">Confirm password</label>
            <input
              className="rounded-md border-black border-2"
              type="password"
              required
            />
          </div>

          <div className="mt-4 bg-blue-500 ">
            <button>Sign-Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default signUP;
