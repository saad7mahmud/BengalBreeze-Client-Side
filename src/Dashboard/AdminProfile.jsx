import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  console.log(user);

  return (
    <div>
      Admin Profile:
      <div className="bg-gray-800 m-10 p-10 rounded-lg ">
        {user ? <p>Name: {user?.displayName}</p> : ""}
        {user ? <p>Email: {user?.email}</p> : ""}
        {isAdmin ? <p>Role: Admin</p> : ""}

        {user ? (
          <label className="btn btn-ghost btn-circle avatar">
            <div className=" rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
        ) : (
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/HTC51Wq/icon.jpg" />
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
