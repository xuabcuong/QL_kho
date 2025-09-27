import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../api/productApi";
import ProductForm from "./ProductForm";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await getProducts({ page, limit });
    setProducts(res.data.products);
    setTotal(res.data.total);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="p-4">
      <button className="btn btn-primary" onClick={() => setShowForm(true)}>
        Thêm sản phẩm
      </button>
      {showForm && (
        <ProductForm
          product={editProduct}
          onClose={() => {
            setShowForm(false);
            fetchProducts();
          }}
        />
      )}
      <table className="table-auto w-full mt-4 border">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Số lượng</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>{p.inStock ? "Còn" : "Hết"}</td>
              <td>
                <button
                  onClick={() => {
                    setEditProduct(p);
                    setShowForm(true);
                  }}
                >
                  Sửa
                </button>
                <button onClick={() => handleDelete(p._id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className="px-2 py-1 border"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
