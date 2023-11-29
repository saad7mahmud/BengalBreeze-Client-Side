import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAgent = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAgent } = useQuery({
    queryKey: [user.email, "isAgent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user.email}`);
      return res.data?.agent;
    },
  });
  return [isAgent];
};

export default useAgent;
