import { FaSearch } from "react-icons/fa";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const MyAsset = () => {
    const [allRequests, setAllRequests] = useState([]);
    const { verifiedUser } = useAuth();
    const axiosEmployee = useAxiosEmployee();
    useEffect(() => {
        const getUserWithStatus = async () => {
            try {
                const result = await axiosEmployee.get(`/assets`);
                if (result?.status === 200) {
                    setAllRequests(result?.data)
                    // setVerifiedUser(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUserWithStatus();
    }, []);

    console.log(allRequests)

    const handleAccept = async (id) => {
        try {
            const result = await axiosEmployee.put(`/assets/request/${id}`, { owner: verifiedUser?.email });
            if (result?.status === 200) {
                Swal.fire({
                    title: "Requested!",
                    text: "You Requested the asset",
                    icon: "success"
                });
                // setAllRequests(result?.data)
                // setVerifiedUser(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleReject = async (id) => {
        try {
            const result = await axiosEmployee.put(`/assets/cancel/${id}`, { owner: verifiedUser?.email });
            if (result?.status === 200) {
                Swal.fire({
                    title: "Canceled!",
                    text: "You Canceled the asset",
                    icon: "success"
                });
                // setAllRequests(result?.data)
                // setVerifiedUser(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div>
                <label className="input input-bordered flex items-center gap-2 border-blue-500 my-4  w-1/4">
                    <input type="text" className="grow" placeholder="Search" />
                    <FaSearch></FaSearch>
                </label>
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Availability</th>
                            <th>Request Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allRequests?.length > 0 ? (
                            allRequests.map((request, i) => (<tr key={i} className="bg-base-200">
                                <th>{i + 1}</th>
                                <td>{request?.productName}</td>
                                <td>{request?.productType}</td>
                                <td>{request?.availability}</td>

                                {request?.requestStatus !== "pending" ? <td><button onClick={() => handleAccept(request?._id)} className="btn bg-green-300 py-1" disabled={request?.availability === "Available" ? false : true}>Request</button></td>:
                                <td><button onClick={() => handleReject(request?._id)} className="btn bg-red-300 py-1">Cancel</button></td>}
                            </tr>
                            ))) : null}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyAsset;
