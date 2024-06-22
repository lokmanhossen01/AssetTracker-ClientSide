import { FaSearch } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AssetListPage = () => {
    const [allAssets, setAllAssets] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState("");
    const [finalQueryText, setFinalQueryText] = useState("");
    const [filterOptions, setFilterOptions] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState('');


    useEffect(() => {
        const handleGetFiltersOptions = async () => {
            try {
                const result = await axiosSecure.get(`/assets/productTypes`);
                if (result?.status === 200) {
                    setFilterOptions(result?.data)
                    // setVerifiedUser(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        handleGetFiltersOptions();
    }, [finalQueryText]);

    useEffect(() => {
        const handleGetAssets = async () => {
            try {
                const result = await axiosSecure.get(`/assets/?searchTerm=${finalQueryText}&productType=${selectedCharacter}`);
                if (result?.status === 200) {
                    setAllAssets(result?.data)
                    // setVerifiedUser(result?.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        handleGetAssets();
    }, [finalQueryText, selectedCharacter]);

    useEffect(() => {
        const getFinalQueryText = setTimeout(() => {
            setFinalQueryText(searchText);
        }, 1500);

        return () => clearTimeout(getFinalQueryText);
    }, [searchText])

    const handleSearchQuery = (event) => {
        const { value } = event.target;

        setSearchText(value);
    };



    const handleSelectChange = (event) => {
        setSelectedCharacter(event.target.value);
    };

    const handleUpdate = async (id) => {
        // try {
        //     const result = await axiosEmployee.put(`/status_update/${id}`);
        //     console.log(result)
        //     // if (result?.status === 200) {
        //     //     // setAllRequests(result?.data)
        //     //     // setVerifiedUser(result?.data);
        //     // }
        // } catch (error) {
        //     console.log(error);
        // }
    }
    const handleDelete = async (id) => {
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
                deleteAsset(id);
            }
        });


        // try {
        //     const result = await axiosSecure.delete(`/assets/${id}`);
        //     if (result?.status === 200) {
        //         Swal.fire({
        //             title: "Good job!",
        //             text: "You deleted an assets!",
        //             icon: "success"
        //           });
        //         // setAllRequests(result?.data)
        //         // setVerifiedUser(result?.data);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    async function deleteAsset(id) {
        try {
            const result = await axiosSecure.delete(`/assets/${id}`);
            if (result?.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "You deleted an assets!",
                    icon: "success"
                });
                // setAllRequests(result?.data)
                // setVerifiedUser(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(allAssets)
    return (
        <div>
            {/* TODO: filter in the available/ out of stock and asset type returnable/nonreturnable */}
            <div className=" md:flex items-center gap-5">

                <label className="input input-bordered flex items-center gap-2 w-full max-w-xs my-4">
                    <input type="text" className="grow " placeholder="Search" value={searchText}
                        onChange={handleSearchQuery} />
                    <FaSearch></FaSearch>
                </label>
                <select
                    className="select w-full max-w-xs border-2 border-gray-200"
                    value={selectedCharacter}
                    onChange={handleSelectChange}
                >
                    <option disabled value="">
                        Pick your favorite Simpson
                    </option>
                    {filterOptions?.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
            {/* TODO:top of the page sort product */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Type</th>
                            <th>Product Quantity</th>
                            <th>Date Added</th>
                            <th>Update Button</th>
                            <th>Delete Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAssets?.length > 0 ? (
                            allAssets.map((assets, i) => (<tr key={i} className="bg-base-200">
                                <th>1</th>
                                <td>{assets?.productName}</td>
                                <td>{assets?.productType}</td>
                                <td>{assets?.productQuantity}</td>
                                <td>20/5/25</td>
                                <td><button onClick={() => handleUpdate(assets?._id)} className="btn bg-green-300 py-1">Update</button></td>
                                <td><button onClick={() => handleDelete(assets?._id)} className="btn bg-red-300 py-1">Delete</button></td>
                            </tr>
                            ))) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetListPage;
