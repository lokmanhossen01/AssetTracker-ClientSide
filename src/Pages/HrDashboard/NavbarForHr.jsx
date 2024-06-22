import { NavLink } from "react-router-dom";
import userManager from "../../Hooks/userManager";
import NavbarForEmployee from "../EmployeePage/NavbarForEmployee";

const NavbarForHr = () => {
  const [isManager] = userManager();
  return (
    <div className="">
      <div className="w-64 min-h-screen bg-blue-600 ">
        <ul className="menu p-4">
          {isManager ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/assetList">Asset List</NavLink>
              </li>
              <li>
                <NavLink to="/addAsset">Add Asset</NavLink>
              </li>
              <li>
                <NavLink to="/allRequest">All Request</NavLink>
              </li>
              <li>
                <NavLink to="/customRequestList">Custom Request List</NavLink>
              </li>
              <li>
                <NavLink to="/myEmployeeList">My Employee List</NavLink>
              </li>
              <li>
                <NavLink to="/addEmployee">Add Employee</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </>
          ) : (
            <>
              <NavbarForEmployee></NavbarForEmployee>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavbarForHr;
