function CategoryCard({ name }) {
  return (
    <div
      className="
        cursor-pointer
        rounded-xl
        p-5
        text-center
        font-semibold
        shadow
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
      style={{ color: "var(--text)", backgroundColor: "var(--card)",}}
    >
      {name}
    </div>
  );
}

export default CategoryCard;