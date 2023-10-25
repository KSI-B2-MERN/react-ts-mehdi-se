function Navbar() {
  return (
    <>
      <div className=" w-screen bg-white h-15 pl-5 pt-2  flex justify-center items-center ">
        <img
          className="pl-20"
          src="https://media.licdn.com/dms/image/C4D0BAQH0EF3lzfrlcg/company-logo_200_200/0/1674827366370/knowledge_streams_tech_logo?e=2147483647&v=beta&t=TlURYjpr_aT-SxPGi2bkfevqRTpfloz7LCLZmy7c_0s"
          width={120}
          alt=""
        />
        <p className="font-bold text-black pl-5 ">Knowledge Streams</p>
        <div className="flex justify-end w-full ">
          <button className=" flex justify-end bg-blue-500 mr-8 p-1">
            Log in
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
