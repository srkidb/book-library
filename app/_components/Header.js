import logo from "@/public/logo.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className="p-2 m-2">
      <header className="relative flex flex-row border-b-2">
        <div className="border-gray-50 border rounded-full border-opacity-10">
          <Image src={logo} alt="logo image" width={100} height={100} />
        </div>
        <div className="absolute m-10 right-5 font-semibold lg:text-3xl text-white">
          <h1>Srdjan's Book Library project</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
