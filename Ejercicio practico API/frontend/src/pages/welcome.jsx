
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/buttonWelcome";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700">
      {/* Fondo dinámico con opacidad */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0.4 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-500 to-pink-500 blur-3xl"
      />

      {/* Círculos animados */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-80 h-80 bg-pink-400 opacity-30 rounded-full top-10 left-10"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full bottom-10 right-10"
      />

      {/* Contenido principal con animación de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl max-w-3xl p-10 text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          ¡Bienvenido a <span className="text-blue-300">TecnoMarket!</span>
        </h1>
        <p className="text-lg mb-8 text-gray-100">
          Proyecto académico del Instituto Técnico “Nuevo Horizonte” para gestionar el{" "}
          <strong>inventario de productos tecnológicos</strong> durante la feria estudiantil. <br />
          Registra, actualiza y controla el stock de tu tienda ficticia fácilmente con esta app web interactiva.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={handleAccept}
            text="Comenzar"
            className="transition transform duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;
