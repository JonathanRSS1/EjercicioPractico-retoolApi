
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useProductActions = (getProducts) => {
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Producto eliminado correctamente");
      console.log("Producto eliminado:", response);
      getProducts();
    } catch (error) {
      console.error("Error eliminando producto:", error);
      toast.error("Error al eliminar el producto");
    }
  };

  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return {
    deleteProduct,
    handleUpdateProduct,
  };
};

export default useProductActions;
