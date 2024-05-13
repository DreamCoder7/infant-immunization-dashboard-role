import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

import { AiOutlineHome } from "react-icons/ai";
import { GrUserAdmin, GrUserFemale } from "react-icons/gr";
import { TbReport } from "react-icons/tb";
import { BsHospital } from "react-icons/bs";
import { FaChildren, FaUserDoctor } from "react-icons/fa6";
import { WiTime7 } from "react-icons/wi";
import { RiSpeakLine } from "react-icons/ri";

import { selectCurrentUser } from "@/features/authSlice";
import { displaySidebarSelector } from "@/features/sidebarSlice";
import { RoleType } from "@/utils/types/enum";

type MenuItem = {
  icon: ReactElement;
  title: string;
  href: string;
  manageBy?: RoleType[];
};

const menuItems: MenuItem[] = [
  {
    icon: <AiOutlineHome />,
    title: "Dashboard",
    href: "/dashboard",
    manageBy: [RoleType.SUPER, RoleType.ADMIN],
  },
  {
    icon: <BsHospital />,
    title: "Health stations",
    href: "/health-stations",
    manageBy: [RoleType.SUPER, RoleType.ADMIN],
  },
  {
    icon: <FaUserDoctor />,
    title: "Health Profs",
    href: "/health-professionals",
    manageBy: [RoleType.MANAGER],
  },
  {
    icon: <TbReport />,
    title: "Reports",
    href: "/reports",
    manageBy: [RoleType.SUPER, RoleType.ADMIN],
  },
  {
    icon: <WiTime7 />,
    title: "Appointments",
    href: "/appointments",
    manageBy: [RoleType.RECEPTION, RoleType.HEALTH_PROFETIONAL],
  },
  {
    icon: <GrUserFemale />,
    title: "Mothers",
    href: "/mothers",
    manageBy: [RoleType.RECEPTION, RoleType.HEALTH_PROFETIONAL],
  },
  {
    icon: <FaChildren />,
    title: "Children",
    href: "/children",
    manageBy: [RoleType.RECEPTION, RoleType.HEALTH_PROFETIONAL],
  },
  {
    icon: <RiSpeakLine />,
    title: "Vaccines",
    href: "/vaccines",
    manageBy: [RoleType.SUPER, RoleType.ADMIN],
  },
  {
    icon: <GrUserAdmin />,
    title: "Admins",
    href: "/admins",
  },
  {
    icon: <RiSpeakLine />,
    title: "News",
    href: "/news",
    manageBy: [RoleType.SUPER, RoleType.ADMIN],
  },
];

const AsideMenu = () => {
  const currentUser = useSelector(selectCurrentUser);
  const showSidebar: any = useSelector(displaySidebarSelector);

  return (
    <ul
      className={`${
        showSidebar ? "mt-14" : "mt-24"
      } flex flex-col gap-3 px-8 text-foreground/80 `}
    >
      {menuItems
        .filter((item) =>
          item.manageBy?.includes(currentUser?.role as RoleType)
        )
        .map((menuItem: MenuItem, index: number) => (
          <Link to={menuItem.href} key={index}>
            <div
              className={`flex items-center gap-3  transition-all duration-200    ${
                showSidebar ? "px-3 py-2 hover:bg-[#007aff]" : "justify-center"
              }  rounded-sm`}
            >
              <div className={`${!showSidebar && "mb-4"}`}>{menuItem.icon}</div>
              <h2 className={` ${!showSidebar ? "hidden" : "block text-sm"}`}>
                {menuItem.title}
              </h2>
            </div>
          </Link>
        ))}
    </ul>
  );
};

export default AsideMenu;
