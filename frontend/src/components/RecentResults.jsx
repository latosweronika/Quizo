function RecentResults({results}) {
  return (
    <section className="mt-8 rounded-xl  p-6 shadow" style={{backgroundColor: "var(--card)"}}>

      <h2 className="mb-4 text-xl font-bold text-slate-800">
        Leatest results
      </h2>


      <div className="space-y-3">

        {results.map((result) => (
          <div
            key={result.name}
            className="flex justify-between border-b pb-2"
          >
            <span>
              {result.name}
            </span>

            <span className="font-bold text-green-600">
              {result.score}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default RecentResults;