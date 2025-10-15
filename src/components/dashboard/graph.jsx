import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useFetchOrdersYear from "./useFetchOrdersYear";
import Spinner from "../common/Spinner";
import Error from "../common/Error";
export default function Graph({ allOrders }) {
  const { data, isLoading, isError } = useFetchOrdersYear(allOrders);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer className="w-full h-full">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="totalSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
