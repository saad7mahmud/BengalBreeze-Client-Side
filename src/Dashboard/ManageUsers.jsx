import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Delete Users

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // Make Admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((data) => {
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              title: "Admin Assigned!",
              text: "User has been assigned as an admin.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // Make Agent
  const handleMakeAgent = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Agent",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/agent/${user._id}`).then((data) => {
          if (data.data.modifiedCount > 0) {
            Swal.fire({
              title: "Agent Assigned!",
              text: "User has been assigned as an agent.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // Mark as fraud
  // const handleMarkFraud = (user) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Mark as Add",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.patch(`/properties/fraud/${user.email}`).then((data) => {
  //         if (data.data.modifiedCount > 0) {
  //           Swal.fire({
  //             title: "Marked as Fraud",
  //             text: "Properties added by fraud has been unpublished",
  //             icon: "success",
  //           });
  //           refetch();
  //         }
  //       });
  //       axiosSecure.patch(`/users/fraud/${user.email}`).then((data) => {
  //         if (data.data.modifiedCount > 0) {
  //           // Swal.fire({
  //           //   title: "Marked as Fraud",
  //           //   text: "Properties added by fraud has been unpublished",
  //           //   icon: "success",
  //           // });
  //           refetch();
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      Manage Users: {users.length}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Basic Information</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user?.name}</div>
                        <div className="text-sm opacity-50">{user?.email}</div>
                        <div className="text-sm opacity-50">
                          Role: {user?.role}
                        </div>
                        <div className="text-sm opacity-50">
                          isFraud: {user?.isFraud}
                        </div>
                      </div>
                    </div>
                  </td>

                  <th>
                    {user?.role == "admin" ? (
                      "Role: admin"
                    ) : user?.isFraud == "yes" ? (
                      "Fraud"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn  "
                      >
                        Make Admin
                      </button>
                    )}
                  </th>

                  <th>
                    {" "}
                    {user?.role == "agent" || user?.role == "admin" ? (
                      !(user?.role == "admin") && `Role: ${user?.role}`
                    ) : (
                      <button
                        onClick={() => handleMakeAgent(user)}
                        className="btn  "
                      >
                        Make Agent
                      </button>
                    )}
                  </th>
                  <th>
                    {user?.role == "agent" && !(user?.isFraud == "yes") ? (
                      <button
                        // onClick={() => handleMarkFraud(user)}
                        className="btn  "
                      >
                        Mark as Fraud
                      </button>
                    ) : (
                      ""
                    )}
                  </th>
                  <th>
                    {user?.role == "admin" ? (
                      "You can't delete admin"
                    ) : (
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn "
                      >
                        Delete User
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
