function Button({ children, className }) {
    return <button className="nl-auto rounded bg-blue px-4 py-2 text-white hover: bg-blue-600" >
        {children}
        </button>;
}

export default Button;