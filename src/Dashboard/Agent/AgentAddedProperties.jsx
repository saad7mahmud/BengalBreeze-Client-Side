import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AgentAddedProperties = () => {
  const axiosSecure = useAxiosSecure();
  const { data: properties = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agent-properties");
      return res.data;
    },
  });

  return (
    <div>
      <h1>Agent Added Properties:</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Property Information</th>
              <th>Agent Information</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property._id}>
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
                    </div>
                  </div>
                </td>
                <td>
                  <br />
                  <div className="flex">
                    {" "}
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
                <th>
                  <button className="btn">Update</button>
                </th>
                <th>
                  <button className="btn">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentAddedProperties;
