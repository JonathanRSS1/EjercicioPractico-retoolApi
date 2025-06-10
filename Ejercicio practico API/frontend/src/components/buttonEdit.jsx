const Button = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-gradient-to-r from-blue-800 to-indigo-700 hover:from-blue-700 hover:to-indigo-600 text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default Button;
