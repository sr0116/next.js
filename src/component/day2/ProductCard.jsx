export  default function ProductCard({name, price, tags=[]}) { // { 감싸줘야 됨}
  return (
      <div className=" border border-gray-200 dark:border-gray-700 p-4">
        <div className="text-base text-2xl font-semibold text-purple-500">{name}</div>
        <div className="mt-1 text-3xl  text-blue-600 ">{price.toLocaleString()}원</div>
        <div className="mt-3 flex gap-2 flex-wrap">
          {tags.map((t,i)=> (
              <span key={i} className="px-2 py-0.5 text-xs  bg-red-400 dark:bg-gray-800  text-gray-700 dark:text-gray-200">
              #{t}
              </span>
          ))}
        </div>
      </div>
  );
}