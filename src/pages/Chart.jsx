import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { getProductStats } from "../api/productApi";

export default function ProductPieChart() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getProductStats().then((res) => setStats(res.data));
  }, []);

  return (
    <div style={{ width: "400px", height: "400px", margin: "auto" }}>
      <h2>Thống kê sản phẩm</h2>
      <PieChart
        series={[
          {
            data: stats.map((item, index) => ({
              id: index,
              value: item.value,
              label: item.name,
            })),
          },
        ]}
        width={400}
        height={300}
      />
    </div>
  );
}
