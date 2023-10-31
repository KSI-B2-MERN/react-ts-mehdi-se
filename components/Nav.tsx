function Nav() {
  return (
    <>
      <div className=" w-screen bg- h-15 bg-blue-500 pl-5 pt-2  flex justify-center items-center ">
        <img
          className="pl-20"
          src="https://media.licdn.com/dms/image/C4D0BAQH0EF3lzfrlcg/company-logo_200_200/0/1674827366370/knowledge_streams_tech_logo?e=2147483647&v=beta&t=TlURYjpr_aT-SxPGi2bkfevqRTpfloz7LCLZmy7c_0s"
          width={120}
          alt=""
        />
        <p className="font-bold text-black pl-5 ">Knowledge Streams</p>
        <div className="flex justify-end w-full ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
export default Nav;
