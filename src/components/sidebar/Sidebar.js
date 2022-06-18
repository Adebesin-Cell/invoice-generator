import { useContext } from "react";
import NavigationContext from "../../store/navigation-context";

const Sidebar = function (props) {
  const ctx = useContext(NavigationContext);

  console.log(ctx.pathname);

  return <div className='sidebar'>&nbsp;</div>;
};

export default Sidebar;
