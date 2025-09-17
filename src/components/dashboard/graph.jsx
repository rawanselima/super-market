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

const data = [
  {
    name: "Jan",
    sales: 4000,
    orders: 2400,
  },
  {
    name: "Feb",
    sales: 3000,
    orders: 1398,
  },
  {
    name: "Marc",
    sales: 2000,
    orders: 9800,
  },
  {
    name: "April",
    sales: 2780,
    orders: 3908,
  },
  {
    name: "May",
    sales: 1890,
    orders: 4800,
  },
  {
    name: "June",
    sales: 2390,
    orders: 3800,
  },
  {
    name: "July",
    sales: 3490,
    orders: 4300,
  },
];

export default function Graph() {
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="orders"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
