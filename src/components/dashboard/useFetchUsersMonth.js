import { allUsers } from "@/services/APIUsers";
import { useQuery } from "@tanstack/react-query";
import { format, subMonths } from "date-fns";

export default function useFetchUsersMonth() {
  const currentDate = new Date(Date.now());
  const lastDate = subMonths(currentDate, 1);

  const currentMonthAndYear = format(currentDate, "yyyy-MM");
  const lastMonthAndYear = format(lastDate, "yyyy-MM");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["usersMonth", currentMonthAndYear],

    queryFn: async () => {
      const allUsersSigh = await allUsers();
      const nowMonth = allUsersSigh.filter((user) => {
        const userDate = format(user.createdAt, "yyyy-MM");
        return userDate === currentMonthAndYear;
      });

      const lastMonth = allUsersSigh.filter((user) => {
        const userDate = format(user.createdAt, "yyyy-MM");
        return userDate === lastMonthAndYear;
      });

      const nowMonthUsers = nowMonth.length;
      const lastMonthUsers = lastMonth.length;

      const percentageForUsers =
        lastMonthUsers === 0
          ? nowMonthUsers > 0
            ? 100
            : 0
          : ((nowMonthUsers - lastMonthUsers) / lastMonthUsers) * 100;

      return {
        allUsersSigh,
        nowMonth,
        lastMonth,
        nowMonthUsers,
        lastMonthUsers,
        percentageForUsers,
      };
    },
    staleTime: 0,
  });

  return { data, isLoading, isError };
}
