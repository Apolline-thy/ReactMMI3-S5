function Button({ children, className }) {
  return (
    <button
      className={
        "${className} nl-auto bg-blue hover: rounded bg-blue-600 px-4 py-2 text-white"
      }
    >
      {children}
    </button>
  );
}

export default Button;
