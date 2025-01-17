import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./header.module.scss"

const Header = () => {
  const [version, setVersion] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const versionParam = params.get('version');
    if (versionParam) {
      setVersion(versionParam);
    }
  }, [location]);

  return (
    <div className={s.header}>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">

        <li><Link to="investment-calculator">InvestmentCalculator</Link></li>

      </ul>
    </div >
  );
};

export default Header;