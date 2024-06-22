import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure, { axiosSecure } from "./useAxiosSecure";

const userManager = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isManager, isPending: isManagerLoading } = useQuery({
    queryKey: [user?.email, "isManager"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data?.hr;
    },
    // enabled: !!localStorage.getItem("access-token"),
  });

  return [isManager, isManagerLoading];
};

export default userManager;
