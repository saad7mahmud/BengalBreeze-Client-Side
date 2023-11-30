import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserWishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const loggedEmail = user?.email;
  const { data: wishlists = [], refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/user-wishlists/?loggedUserEmail=${loggedEmail}`
      );
      return res.data;
    },
  });

  // Delete Property

  const handleDeleteWishlist = (wishlist) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlists/${wishlist._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Wishlist has been deleted.",
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
      <h1>User Wishlist</h1>
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
            {wishlists.map((wishlist, idx) => (
              <tr key={wishlist._id}>
                <td>{idx + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={wishlist.propertyImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{wishlist.propertyTitle}</div>
                      <div className="text-sm opacity-50">
                        Location: {wishlist.propertyLocation}
                      </div>
                      <div className="text-sm opacity-50">
                        Price Range: {wishlist.minPrice}-{wishlist.maxPrice}
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
                        src={wishlist.agentImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="badge badge-ghost badge-sm">
                        {wishlist.agentName}
                      </span>
                      <span className="badge badge-ghost badge-sm">
                        {wishlist.agentEmail}
                      </span>
                    </div>
                  </div>
                </td>
                <th>
                  <button className="btn">Make Offer</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteWishlist(wishlist)}
                    className="btn"
                  >
                    Remove from wishlist
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserWishlist;
