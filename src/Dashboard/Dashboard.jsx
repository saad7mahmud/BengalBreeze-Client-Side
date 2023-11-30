import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAgent from "../Hooks/useAgent";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isAgent] = useAgent();
  console.log("Admin", isAdmin);
  console.log("Agent", isAgent);

  return (
    <div>
      <div>
        <div className="flex">
          <div className="min-h-screen p-5 bg-gray-800">
            {isAdmin ? (
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
                  <NavLink to="/dashboard/manage-reviews">
                    {" "}
                    Manage Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-advertise">
                    Manage Advertise
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reported-properties">
                    Reported Property
                  </NavLink>
                </li>
              </ul>
            ) : isAgent ? (
              <ul className="space-y-2 menu">
                <li>
                  <NavLink to="/dashboard/agent-profile">Agent Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-property">Add Property</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/agent-added-properties">
                    Agent Added Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/agent-sold-properties">
                    Agent Sold Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/requested-properties">
                    Requested Properties
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 menu">
                <li>
                  <NavLink to="/dashboard/user-profile">User Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user-wishlist">User Wishlist</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/property-bought">
                    Property Bought
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-reviews">My Reviews</NavLink>
                </li>
              </ul>
            )}
            <hr className="m-5" />
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-9 mx-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
