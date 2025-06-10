const buttonWelcome = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
};

export default buttonWelcome;
