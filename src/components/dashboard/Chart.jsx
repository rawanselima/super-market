import useIsMobile from "@/hooks/useIsMobile";
import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import useSalesMonth from "./useSalesMonth";
import Spinner from "../common/Spinner";
import Error from "../common/Error";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#8dd1e1",
  "#d0ed57",
  "#a4de6c",
  "#ffbb28",
  "#ff8042",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p className="text-sm">
          <strong className="font-bold text-green mr-1/2">Category :</strong>
          {data.category}
        </p>
        <p className="text-sm">
          <strong className="font-bold text-green mr-1/2">Orders :</strong>
          {data.totalOrders}
        </p>
        <p className="text-sm">
          <strong className="font-bold text-green mr-1/2">Total Price :</strong>
          ${data.totalSales.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

export default function Chart({ allOrders }) {
  const isMobile = useIsMobile();
  const { data, isLoading, isError } = useSalesMonth(allOrders);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="xl:w-1/2 w-full h-[400px] min-h-[400px] p-5  border-1 rounded border-light-green">
      <h2 className="text-dark-green text-xl mb-3 font-bold">
        Category Sales Last Month
      </h2>
      <ResponsiveContainer className="w-full h-[350px]">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          {isMobile ? (
            <div className="mt-10">
              <Legend layout="horizontal" align="center" />
            </div>
          ) : (
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          )}

          <Pie
            data={data}
            dataKey="totalSales"
            nameKey="category"
            cx="50%"
            cy="45%"
            innerRadius={90}
            outerRadius={120}
            label={({ name, value }) => `${name}: ${value.toFixed(2)}`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
