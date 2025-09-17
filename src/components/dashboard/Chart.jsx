import useIsMobile from "@/hooks/useIsMobile";
import {
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

const data01 = [
  { category: "cheese", order: 400, price: 1200 },
  { category: "milk", order: 300, price: 900 },
  { category: "snack", order: 300, price: 600 },
  { category: "vegetables", order: 200, price: 500 },
  { category: "fruits", order: 200, price: 700 },
  { category: "fruits", order: 200, price: 700 },
];

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
          <strong className="font-bold text-green mr-1/2">Category :</strong>{" "}
          {data.category}
        </p>
        <p className="text-sm">
          <strong className="font-bold text-green mr-1/2">Orders :</strong>{" "}
          {data.order}
        </p>
        <p className="text-sm">
          <strong className="font-bold text-green mr-1/2">Total Price :</strong>{" "}
          ${data.price}
        </p>
      </div>
    );
  }
  return null;
};

export default function Chart() {
  const isMobile = useIsMobile();
  console.log(isMobile);
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
            data={data01}
            dataKey="order"
            nameKey="category"
            cx="50%"
            cy="45%"
            innerRadius={90}
            outerRadius={120}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data01.map((entry, index) => (
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
