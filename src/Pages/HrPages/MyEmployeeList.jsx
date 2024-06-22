import { useEffect, useState } from "react";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyEmployeeList = () => {
    const [myEmployees, setMyEmployees] = useState([]);
    const { verifiedUser } = useAuth();
    const axiosEmployee = useAxiosEmployee();
    useEffect(() => {
        if (verifiedUser?.email) {
            const getUserWithStatus = async () => {
                try {
                    const result = await axiosEmployee.get(`/my_employees/${verifiedUser?.email}`);
                    if (result?.status === 200) {
                        setMyEmployees(result?.data)
                        // setVerifiedUser(result?.data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            getUserWithStatus();
        }
    }, [verifiedUser]);

    const handleRemoveTeam = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUserFunc(id);
            }
        });
    }

    async function deleteUserFunc(id) {
        try {
            const result = await axiosEmployee.delete(`/reject_request/${id}`);
            if (result?.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "You removed an team!",
                    icon: "success"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(myEmployees);

    return (
        <div>
            <div>
                {/* TODO:  this section use to all company member details */}
                <h1 className="text-center text-4xl text-blue-500">This is My Team</h1>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {myEmployees?.length > 0 ? myEmployees?.map((item, i) => <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl">
                        {/* <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                        />
                    </figure> */}
                        <div className="flex justify-center py-5">
                            <div className="avatar">
                                <div className="w-24 mask mask-hexagon">
                                    <img src={item?.photo ? item?.photo : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {/* TODO:name of member */}
                            <h2 className="card-title">Name: {item?.name}</h2>
                            <h2>Member Type: {item?.role?.toUpperCase()}</h2>

                            {/* TODO: create a delete operation and decreased the one by one member */}

                            <input
                                className=" btn  btn-primary"
                                type="submit"
                                onClick={() => handleRemoveTeam(item?._id)}
                                value="Remove Team"
                            />
                        </div>
                    </div>) : null}
                </div>
            </div>
        </div>
    );
};

export default MyEmployeeList;
