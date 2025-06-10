import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Titulo from "../components/Title";
import InputText from "../components/InputText";
import Button from "../components/buttonEdit";
import useDataProducts from "../hooks/products/useDataProduct";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Products = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProducts(methods);

  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="mb-8"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/home"
          className="inline-block mb-4 px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition"
        >
          ⬅ Volver
        </Link>
        <Titulo titulo={id ? "✏️ Editar Producto" : "➕ Registrar Producto"} />
        <p className="text-sm text-gray-600 mt-2">
          Completa el siguiente formulario para {id ? "actualizar" : "agregar"} un producto.
        </p>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <InputText
              type="text"
              name="producto"
              label="Nombre del Producto"
              placeholder="Ej: Zapato Deportivo"
              register={register}
              errors={errors}
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <InputText
              type="text"
              name="categoria"
              label="Categoría"
              placeholder="Ej: Calzado"
              register={register}
              errors={errors}
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <InputText
              type="number"
              name="stock"
              label="Stock"
              placeholder="Ej: 100"
              register={register}
              errors={errors}
            />
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <InputText
              type="number"
              step= "any"
              name="precio"
              label="Precio"
              placeholder="Ej: 49.99"
              register={register}
              errors={errors}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button type="submit" text={id ? "Actualizar" : "Guardar Producto"} />
        </motion.div>
      </form>
    </motion.div>
  );
};

export default Products;
