import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import profile from "../../assets/image/mt-1944-team-img02.png";
import logo from "../../assets/image/software-asset-management-services.jpg";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import NavbarForHr from "../../Pages/HrDashboard/NavbarForHr";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut, setVerifiedUser, verifiedUser, setInitialUserSelectedStatus } = useAuth();
    const [theme, setTheme] = useState("light");
    const [userWithRole, setUserWithRole] = useState(null);
    const axiosEmployee = useAxiosEmployee();
    

    useEffect(() => {
        if (user?.email) {
            const getUserWithEmail = async () => {
                try {
                    const result = await axiosEmployee.get(`/users/${user?.email}`);
                    if (result?.status === 200) {
                        // console.log(result)
                        setVerifiedUser(result?.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            getUserWithEmail();
        }
    }, [user]);

    useEffect(() => {
        setUserWithRole(verifiedUser);
      }, [verifiedUser]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");

        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });
    const navItemForHr = (
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
            {/* <li>
        <NavLink to="/customRequestList">Custom Request List</NavLink>
      </li> */}
            <li>
                <NavLink to="/myEmployeeList">My Employee List</NavLink>
            </li>
            {/* <li>
        <NavLink to="/addEmployee">Add Employee</NavLink>
      </li> */}
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
        </>
    );
    const navItemForUser = (
        <>
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
        </>
    );
    return (
        <div>
            <div className="navbar bg-blue-800 bg-opacity-60  z-10 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-blue-700 rounded-box w-52"
                        >
                            {user?.email ? (
                                <>{navItemForUser}</>
                            ) : (
                                <>
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "border-2 border-sky-500 font-bold text-white"
                                                    : "font-bold text-white"
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setInitialUserSelectedStatus('employee')}
                                            to="/JoinEmployee"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "border-2 border-sky-500 font-bold text-white"
                                                    : "font-bold text-white"
                                            }
                                        >
                                            Join as an Employee
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            onClick={() => setInitialUserSelectedStatus('hr')}
                                            to="/manager"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "border-2 border-sky-500 font-bold text-white"
                                                    : "font-bold text-white"
                                            }
                                        >
                                            Join as an HR Manager
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <div className="btn-circle avatar">
                            {user?.email ? (
                                <img className="rounded-full" src={user?.photoURL} alt="" />
                            ) : (
                                <>
                                    <img
                                        className="btn-circle avatar rounded-full"
                                        src={logo}
                                        alt=""
                                    />
                                </>
                            )}
                        </div>
                        Asset Each
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {!userWithRole ? (
                            <>
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "border-2 border-sky-500 font-bold text-white"
                                                : "font-bold text-white"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/JoinEmployee"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "border-2 border-sky-500 font-bold text-white"
                                                : "font-bold text-white"
                                        }
                                    >
                                        Join as an Employee
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/manager"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "border-2 border-sky-500 font-bold text-white"
                                                : "font-bold text-white"
                                        }
                                    >
                                        Join as an HR Manager
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                {
                                    userWithRole?.role === 'employee' ? navItemForUser : null
                                }
                                {
                                    userWithRole?.role === 'hr' ?  navItemForHr 
                                    : null
                                }
                            </>
                        ) }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control w-52 ">
                        <label className="cursor-pointer label">
                            <span className="label-text"></span>
                            <input
                                type="checkbox"
                                className="toggle toggle-secondary "
                                onChange={handleToggle}
                            />
                        </label>
                    </div>
                    {user?.email ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10">
                                    <img
                                        className="rounded-full"
                                        alt="user photo"
                                        src={user?.photoURL || profile}
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <button className="btn btn-sm btn-ghost">
                                        {user?.displayName || "User Name not found"}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            logOut();
                                            
    navigate('/login');
                                            }}
                                        className="btn btn-sm btn-ghost"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="btn hover:bg-sky-500">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
