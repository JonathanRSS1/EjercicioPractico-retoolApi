const ButtonDelete = ({ type = "button", onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default ButtonDelete;
