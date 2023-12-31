import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AllProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-properties/verified");
      return res.data;
    },
  });

  //   const handleDetails = (property) => {
  //     console.log(property._id);
  //   };

  return (
    <div>
      <h1 className="text-3xl font-medium text-center m-10">
        Showing All Properties
      </h1>
      <h1 className=" font-medium text-center mb-10">
        Total Admin Verified Property: {properties.length}
      </h1>
      <div className="flex flex-wrap justify-center gap-5 m-10">
        {properties.map((property) => (
          <div key={property._id}>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={property.propertyImage}
                  alt="Shoes"
                  className="rounded-xl  max-h-40 "
                />
              </figure>
              <div className="card-body  ">
                <p className="text-xl font-bold text-center">
                  {property.propertyTitle}
                </p>
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
                      //   onClick={() => handleDetails(property)}
                      className="btn w-full btn-neutral"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
