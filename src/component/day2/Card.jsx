
export  default  function Card ({title, children, right}) {
  return (
      <section className=" border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {right}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
      </section>
  );
}