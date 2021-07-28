import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-gray-800 w-100">
      <div className="container mx-auto flex justify-between items-center px-5  h-16 text-white font-bold">
        <Link href="/">
          <a className="text-xl  uppercase hover:text-yellow-300">Asrhad</a>
        </Link>
        <ul className="flex">
          <li className="text-l  uppercase ml-5">
            <Link href="/">
              <a className="hover:text-yellow-300">Home</a>
            </Link>
          </li>
          <li className="text-l hover:text-yellow-300 uppercase ml-5">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="text-l hover:text-yellow-300 uppercase ml-5">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
