import { useSelector } from "react-redux";

import { displaySidebarSelector } from "@/features/sidebarSlice";
import { useTheme } from "../theme-provider/theme-provider";
import AsideMenu from "./asideMenu";

const Logo = () => {
  const { theme } = useTheme();
  const logo = theme == "light" ? "logo-light.png" : "logo-dark.png";

  return (
    <div className="w-[90px] mx-auto mt-8 ">
      <img src={logo} />
    </div>
  );
};

const Sidebar = () => {
  const showSidebar: any = useSelector(displaySidebarSelector);
  
  return (
    <section className={`w-[20vw] bg-card/50  ${!showSidebar && "w-[5vw]"}   `}>
      {showSidebar && <Logo />}
      {/* <Menu /> */}
      <AsideMenu />
    </section>
  );
};

export default Sidebar;
