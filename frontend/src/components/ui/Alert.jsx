function Alert({ children, type = "error" }) {
  const styles = {
    error: "bg-red-100 text-red-700",
    success: "bg-green-100 text-green-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <div className={`rounded-lg p-3 text-sm ${styles[type]}`}>
      {children}
    </div>
  );
}

export default Alert;