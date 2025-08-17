import {useState} from "react";

export default function Counter () {
  const [n, setN] = useState(0);
  return (
      <div>
        <button onClick={ () => setN((n - 1))} > - </button>
        {n}
        <button onClick={ () => setN( n + 1)} > + </button>
      </div>
  );
}