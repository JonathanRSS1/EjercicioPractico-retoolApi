import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching product:", error);
      toast.error("Error fetching product");
      return null;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    getProductById,
    getProducts,
  };
};

export default useFetchProduct;