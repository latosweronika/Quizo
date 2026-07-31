function Hero({name}) {
  return (
    <section className="mb-8 rounded-xl  p-8 text-white shadow" style={{ backgroundColor: "var(--primary)"}}>
      <h2 className="text-3xl font-bold">
        Hi {name}
      </h2>

      <p className="mt-2 text-blue-100">
        Ready to study?
      </p>
    </section>
  );
}

export default Hero;