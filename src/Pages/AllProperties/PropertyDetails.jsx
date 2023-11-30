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
    </div>
  );
};

export default PropertyDetails;
