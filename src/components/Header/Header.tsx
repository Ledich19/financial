import { Link } from "react-router-dom";
import s from "./header.module.scss"

const Header = () => {

  return (
    <div className={s.header}>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box w-[100%]">

        <li><Link to="investment-calculator">InvestmentCalculator</Link></li>

      </ul>
    </div >
  );
};

export default Header;