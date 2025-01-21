import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/Wrappers/Sidebar";

const Sidebar = () => {
  return (
    <Wrapper>
      <div id="menu-links">
        {links.map(({ text, path, icon}) => (
          <NavLink to={path} key={text} end>
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        ))}
      </div>
    </Wrapper>
  );
};
export default Sidebar;
