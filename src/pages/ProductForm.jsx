import { useState } from "react";
import { createProduct, updateProduct } from "../api/productApi";

export default function ProductForm({ product, onClose }) {
  const [name, setName] = useState(product?.name || "");
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [inStock, setInStock] = useState(product?.inStock || true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, quantity, inStock };
    if(product) await updateProduct(product._id, data);
    else await createProduct(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <form className="bg-white p-4 rounded" onSubmit={handleSubmit}>
        <h2>{product ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h2>
        <input type="text" placeholder="Tên" value={name} onChange={e => setName(e.target.value)} className="border p-1 w-full my-2"/>
        <input type="number" placeholder="Số lượng" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="border p-1 w-full my-2"/>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)} />
          Còn hàng
        </label>
        <div className="mt-2 flex gap-2">
          <button type="submit" className="btn btn-primary">Lưu</button>
          <button type="button" onClick={onClose} className="btn btn-secondary">Hủy</button>
        </div>
      </form>
    </div>
  );
}
