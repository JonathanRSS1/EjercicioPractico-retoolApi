import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Button from "../components/buttonEdit";
import ButtonDelete from "../components/ButtonDelete";
import useFetchProduct from "../hooks/products/useFetchProducts";
import useProductActions from "../hooks/products/useProductAction";

const Home = () => {
  const { products, getProducts } = useFetchProduct();
  const { deleteProduct, handleUpdateProduct } = useProductActions(getProducts);

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Encabezado */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Title titulo="🛒 Lista de productos" />
            <p className="text-sm text-gray-600 mt-1">
              Información de los productos registrados.
            </p>
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start lg:self-auto"
        >
          <Link
            to="/products"
            className="text-lg font-semibold text-white bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            ➕ Agregar producto
          </Link>
        </motion.div>
      </div>

      {/* Tabla de productos */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Producto</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Precio</th>
              <th className="px-4 py-3 text-left">Categoría</th>
              <th className="px-4 py-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <motion.tr
                key={product.id}
                className="border-b hover:bg-blue-50 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="px-4 py-3">{product.producto}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">${product.precio}</td>
                <td className="px-4 py-3">{product.categoria}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col lg:flex-row gap-2">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        text="Editar"
                        onClick={() => handleUpdateProduct(product.id)}
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <ButtonDelete
                        text="Eliminar"
                        onClick={() => deleteProduct(product.id)}
                      />
                    </motion.div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Home;
