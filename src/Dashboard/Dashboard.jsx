import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAgent from "../Hooks/useAgent";

const Dashboard = () => {
  const isAdmin = useAdmin();
  const isAgent = useAgent();
  console.log("Logged In by: Admin", isAdmin);
  console.log("Logged In by: Agent", isAgent);

  return (
    <div className="flex">
      <div className="min-h-screen p-5 bg-gray-800">
        <ul className="space-y-2 menu">
          <li>
            <NavLink to="/dashboard/admin-profile">Admin Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-properties">
              Manage Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-users"> Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-reviews"> Manage Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-advertise">Manage Advertise</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reported-properties">
              Reported Property
            </NavLink>
          </li>
        </ul>
        <hr className="m-5" />
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
