import { useEffect, useState } from "react";
import useAxiosEmployee from "../../Hooks/useAxiosEmployee";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AllRequest = () => {
    const [allRequests, setAllRequests] = useState([]);
    const { verifiedUser } = useAuth();
    const axiosEmployee = useAxiosEmployee();
    useEffect(() => {
        const getUserWithStatus = async () => {
            try {
                const result = await axiosEmployee.get(`/users/?status=pending`);
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

    const handleAccept = async (id) => {
        try {
            const result = await axiosEmployee.put(`/status_update/${id}`, { owner: verifiedUser?.email });
            if (result?.status === 200) {
                Swal.fire({
                    title: "Accepted!",
                    text: "You Accepted the hr",
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
            const result = await axiosEmployee.delete(`/reject_request/${id}`);
            if (result?.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "You rejected an asset!",
                    icon: "success"
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Email of Requester</th>
                            <th>Name of Requester</th>
                            <th>Request Date</th>
                            <th>Additional note</th>
                            <th>Status</th>
                            <th>Approve Button</th>
                            <th>Reject Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allRequests?.length > 0 ? (
                            allRequests.map((request, i) => (<tr key={i} className="bg-base-200">
                                <th>{i + 1}</th>
                                <td>{request?.companyName}</td>
                                <td>Quality Control Specialist</td>
                                <td>{request?.email}</td>
                                <td>{request?.name}</td>
                                <td>{request?.date}</td>
                                <td>This system is ok</td>
                                <td>{request?.status}</td>
                                <td><button onClick={() => handleAccept(request?._id)} className="btn bg-green-300 py-1">Accept</button></td>
                                <td><button onClick={() => handleReject(request?._id)} className="btn bg-red-300 py-1">Reject</button></td>
                            </tr>
                            ))) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequest;
