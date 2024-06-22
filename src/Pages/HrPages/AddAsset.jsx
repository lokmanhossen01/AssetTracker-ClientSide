import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddAsset = () => {
    const {verifiedUser} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosSecure = useAxiosSecure();

    // console.log(verifiedUser)

    const onSubmit = async (data) => {
      const bodyData = {...data, email: verifiedUser?.email};

        try {
            const result = await axiosSecure.post(`/assets`, bodyData);
            if (result?.status === 200) {
                console.log(result);
                reset();
                Swal.fire({
                    title: "Good job!",
                    text: "You created an asset successfully!",
                    icon: "success"
                  });
                // setVerifiedUser(result?.data);
            }
        } catch (error) {
            console.log(error);
        }
      
      // Add your form submission logic here
    };

    // <div>
    //   <div className="flex gap-4">
    //     <label className="form-control w-full max-w-xs">
    //       <div className="label">
    //         <span className="label-text">Product Name</span>
    //       </div>
    //       <input
    //         type="text"
    //         placeholder="Type here"
    //         className="input input-bordered w-full max-w-xs"
    //       />
    //     </label>
    //     <label className="form-control w-full max-w-xs">
    //       <div className="label">
    //         <span className="label-text">Product Type</span>
    //       </div>
    //       <input
    //         type="text"
    //         placeholder="Type here"
    //         className="input input-bordered w-full max-w-xs"
    //       />
    //     </label>
    //   </div>
    //   <div className="">
    //     <label className="form-control w-full max-w-xs">
    //       <div className="label">
    //         <span className="label-text">Product Quantity</span>
    //       </div>
    //       <input
    //         type="text"
    //         placeholder="Type here"
    //         className="input input-bordered items-center"
    //       />
    //     </label>
    //   </div>
    //   <div className="btn btn-primary my-4 text-center">
    //     <input type="submit" value="Add Button" />
    //   </div>
    // </div>
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full max-w-xs ${errors.productName ? 'input-error' : ''}`}
              {...register('productName', { required: 'Product Name is required' })}
            />
            {errors.productName && <p className="text-red-500">{errors.productName.message}</p>}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Type</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full max-w-xs ${errors.productType ? 'input-error' : ''}`}
              {...register('productType', { required: 'Product Type is required' })}
            />
            {errors.productType && <p className="text-red-500">{errors.productType.message}</p>}
          </label>
        </div>
        <div className="mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Product Quantity</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className={`input input-bordered w-full max-w-xs ${errors.productQuantity ? 'input-error' : ''}`}
              {...register('productQuantity', { required: 'Product Quantity is required', valueAsNumber: true })}
            />
            {errors.productQuantity && <p className="text-red-500">{errors.productQuantity.message}</p>}
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-4">Add Button</button>
        </div>
      </form>
    </div>
  );
};

export default AddAsset;
