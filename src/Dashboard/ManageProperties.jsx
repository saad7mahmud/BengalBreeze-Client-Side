import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agent-properties");
      return res.data;
    },
  });

  // Verify Property
  const handleVerifyProperty = (property) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Verify",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/verify/property/${property._id}`).then((data) => {
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              title: "Propery Verified!",
              text: "Property has been visible",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // Reject Property
  const handleRejectProperty = (property) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Reject",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/reject/property/${property._id}`).then((data) => {
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              title: "Propery Rejected!",
              text: "Property won't be added on the website",
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
      <h1>Manage Properties:</h1>
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
                        Verification: {property.verificationStatus}
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
                {property.verificationStatus == "pending" ? (
                  <tr>
                    <td>
                      <button
                        onClick={() => handleVerifyProperty(property)}
                        className="btn"
                      >
                        Verify
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRejectProperty(property)}
                        className="btn"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ) : property.verificationStatus == "verified" ? (
                  <th>
                    <td className="text-sm opacity-50">
                      {property.verificationStatus}
                    </td>
                  </th>
                ) : (
                  property.verificationStatus == "rejected" && (
                    <th>
                      <td className="text-sm opacity-50">
                        {property.verificationStatus}
                      </td>
                    </th>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProperties;
