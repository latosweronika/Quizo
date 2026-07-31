function DashboardCard({ icon, title, description, button }) {
  return (
    <div className="rounded-xl  p-6 shadow transition hover:-translate-y-1 hover:shadow-lg" style={{backgroundColor: "var(--card)"}}>

      <h3 className="text-xl font-bold" style={{ color: "var(--text)"}}>
        {icon} {title}
      </h3>

      <p className="mt-2" style={{ color: "var(--text)"}}>
        {description}
      </p>

      <button
          className="
          mt-4
          rounded-lg
          px-4 py-2
          font-semibold
          text-white
          hover:opacity-90
        "
        style={{ backgroundColor: "var(--primary)"}}
      >
        {button}
      </button>

    </div>
  );
}

export default DashboardCard;