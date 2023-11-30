import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const PropertyDetails = () => {
  const { user } = useContext(AuthContext);

  const property = useLoaderData();
  console.log(property);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleAddWishList = (property) => {
    console.log("wish", property);

    // Send this user to DB
    const propertiesInfo = {
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyerImage: user?.photoURL,
      propertyId: property._id,
      agentName: property.agentName,
      agentEmail: property.agentEmail,
      agentImage: property.agentImage,
      propertyTitle: property.propertyTitle,
      propertyLocation: property.propertyLocation,
      propertyImage: property.propertyImage,
      minPrice: property.minPrice,
      maxPrice: property.maxPrice,
      verificationStatus: property.verificationStatus,
      isAdvertised: property.isAdvertised,
      isAddedByFraud: property.isAddedByFraud,
    };
    console.log(propertiesInfo);
    axiosPublic.post("/property/wishlists", propertiesInfo).then((res) => {
      console.log(res.data.insertedId);
      Swal.fire({
        icon: "success",
        title: "Property Successfully Added to Wishlist",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard/user-wishlist");
    });
  };

  const handleGiveReview = async (e) => {
    console.log(e);
    e.preventDefault();

    const form = e.target;
    const review = form.review.value;
    const reviewInMilliseconds = Date.now();
    const reviewFormattedTime = new Date().toLocaleTimeString();

    // Send this user to DB
    const reviewerInfo = {
      reviewerEmail: user?.email,
      reviewerName: user?.displayName,
      reviewerImage: user?.photoURL,
      review,
      nowInMilliseconds: reviewInMilliseconds,
      formattedTime: reviewFormattedTime,
      propertyId: property._id,
      agentName: property.agentName,
      agentEmail: property.agentEmail,
      agentImage: property.agentImage,
      propertyTitle: property.propertyTitle,
      propertyLocation: property.propertyLocation,
      propertyImage: property.propertyImage,
      minPrice: property.minPrice,
      maxPrice: property.maxPrice,
      verificationStatus: property.verificationStatus,
      isAdvertised: property.isAdvertised,
      isAddedByFraud: property.isAddedByFraud,
    };
    axiosPublic.post("/reviews", reviewerInfo).then((res) => {
      console.log(res);
      navigate("/dashboard/my-reviews");
    });

    Swal.fire("Review Successfully Sent ");
  };

  return (
    <div>
      <h1 className="text-3xl font-medium text-center mt-10">
        Property Details
      </h1>
      <h1 className="  text-center mt-3 mb-10">
        Here is the details of the property
      </h1>
      <div className="flex flex-wrap justify-center p-10 gap-5 m-10 shadow-md shadow-teal-800">
        <figure className="px-10 pt-10">
          <img
            src={property.propertyImage}
            alt="Shoes"
            className="rounded-xl max-h-80 "
          />
        </figure>
        <div>
          <div className="card w-96 bg-base-100 ">
            <div className="card-body  ">
              <p className="text-4xl font-bold">{property.propertyTitle}</p>
              <p className="">Location: {property.propertyLocation}</p>
              {/* <hr /> */}
              <div className="flex flex-row-reverse items-center gap-3">
                <div>
                  {" "}
                  <p className="">Agent Name: {property.agentName}</p>
                  <p className="">Agent Mail: {property.agentEmail}</p>
                </div>
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={property.agentImage}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              {/* <hr /> */}
              <p>Verification Status: {property.verificationStatus}</p>
              <p>
                {" "}
                Price Range: ${property.minPrice}-{property.maxPrice} USD
              </p>
              <div className="card-actions ">
                <Link to={`/all-properties/${property._id}`}>
                  {" "}
                  <button
                    onClick={() => handleAddWishList(property)}
                    className="btn mt-10 btn-neutral"
                  >
                    Add to wishlist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Review */}
      <div className="flex m-10 justify-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-accent"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Give Review
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div>
              <form onSubmit={handleGiveReview}>
                <div className="relative h-11 m-4">
                  <input
                    type="text"
                    name="review"
                    required
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Write Your Review Here
                  </label>
                </div>

                <input
                  className="hover:cursor-pointer flex m-10 mx-auto select-none rounded-lg bg-gradient-to-tr from-[#32a374] to-[#57b38d] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  value="Send Review"
                />
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PropertyDetails;
