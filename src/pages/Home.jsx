import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">InventoryLite</h1>
      <Link to="/products" className="btn btn-primary">
        Quản lý sản phẩm
      </Link>
      <Link to="/chart" className="btn btn-primary">
        THống kê
      </Link>
    </div>
  );
}
