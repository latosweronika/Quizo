function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        p-8
        shadow-md
        style={{ backgroundColor: "var(--card)" }}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;