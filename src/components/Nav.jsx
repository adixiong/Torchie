import { useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineWebAsset } from "react-icons/md";

const Nav = () => {
  const location = useLocation();

  const navItems = [
    {
      title: "Home",
      path: "/",
      icon: <GoHomeFill size={20} />,
    },
    {
      title: "Web Client",
      path: "/web-client",
      icon: <MdOutlineWebAsset size={20} />,
    },
    {
      title: "About Us",
      path: "/about-us",
      icon: <HiMiniUsers size={20} />,
    },
  ];

  return (
    <div className="flex items-center justify-center m-auto fixed top-0 w-full bg-white z-10">
      {navItems.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          className={`text-sm flex items-center gap-2 py-5 px-4 relative after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:bg-black after:w-0 after:transition-all after:duration-500 ${
            location.pathname === item.path
              ? "after:w-full text-[#070055]"
              : "text-gray-500"
          }`}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
