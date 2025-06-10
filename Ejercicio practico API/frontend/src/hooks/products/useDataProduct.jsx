
import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProduct from "./useFetchProducts";

const useDataProduct = (methods) => {
  const { getProductById, getProducts } = useFetchProduct();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  const saveProductForm = async (dataForm) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("No se pudo agregar el producto");
        throw new Error("Error al guardar producto");
      }

      toast.success("Producto guardado correctamente");
      navigate("/home");
    } catch (error) {
      console.log("Error al guardar:", error);
    } finally {
      reset();
      getProducts();
    }
  };

  const editProduct = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        toast.error("No se pudo actualizar el producto");
        throw new Error("Error al actualizar producto");
      }

      toast.success("Producto actualizado correctamente");
      navigate("/home");
    } catch (error) {
      console.error("Error actualizando producto:", error);
      toast.error("Error al actualizar producto");
    } finally {
      reset();
      getProducts();
    }
  };

  const handleProductAction = (dataForm) => {
    if (id) {
      editProduct(dataForm);
    } else {
      saveProductForm(dataForm);
    }
  };

  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  const loadProduct = async () => {
    if (id) {
      const product = await getProductById(id);
      if (product) {
        reset({
          producto: product?.producto,
          stock: product?.stock,
          precio: product?.precio,
          categoria: product?.categoria,
        });
      }
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleProductAction),
    errors,
    getProductById,
    handleUpdateProduct,
    loadProduct,
  };
};

export default useDataProduct;
