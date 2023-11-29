import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageAdvertise = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/properties/ad");
      return res.data;
    },
  });

  // Add To Advertise
  const handleAddAdvertise = (property) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Advertise",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/add-advertise/property/${property._id}`)
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              Swal.fire({
                title: "Propery Advertised!",
                text: "Property has been advertised",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };
  // Reject Property
  const handleRemoveAdvertise = (property) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove Advertise",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/remove-advertise/property/${property._id}`)
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              Swal.fire({
                title: "Advertise Removed",
                text: "The advertise has been removed",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>Manage Advertise:</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Property Information</th>
              <th>Agent Information</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, idx) => (
              <tr key={property._id}>
                <td>{idx + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={property.propertyImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{property.propertyTitle}</div>
                      <div className="text-sm opacity-50">
                        Location: {property.propertyLocation}
                      </div>
                      <div className="text-sm opacity-50">
                        Price Range: {property.minPrice}-{property.maxPrice}
                      </div>
                      <div className="text-sm opacity-50">
                        Verification: {property.isAdvertised}
                      </div>
                      <div className="text-sm opacity-50">
                        Advertise Status: {property.isAdvertised}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <div className="flex">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={property.agentImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="badge badge-ghost badge-sm">
                        {property.agentName}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        {property.agentEmail}
                      </span>
                    </div>
                  </div>
                </td>
                {property.isAdvertised == "yes" ? (
                  <tr>
                    <td>
                      <button
                        onClick={() => handleRemoveAdvertise(property)}
                        className="btn"
                      >
                        Remove Advertise
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>
                      <button
                        onClick={() => handleAddAdvertise(property)}
                        className="btn"
                      >
                        Advertise
                      </button>
                    </td>
                  </tr>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdvertise;
