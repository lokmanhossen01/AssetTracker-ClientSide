import { NavLink } from "react-router-dom";

const NavbarForEmployee = () => {
  return (
    <div>
      <div className="w-64 min-h-screen bg-blue-600">
        <ul className="menu p-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/myAssets">My Assets</NavLink>
          </li>
          <li>
            <NavLink to="/team">My Team</NavLink>
          </li>
          <li>
            <NavLink to="/requestAsset">Request Asset</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarForEmployee;
