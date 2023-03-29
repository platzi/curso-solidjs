import { createEffect, createMemo, createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  // Signals Derivadas
  const doubleCount = () => count() * 2;

  // Signals Memoizadas
  const isDivisibleByThree = createMemo(() => count() % 3 === 0);

  createEffect(() => {
    console.log("count changed", count());
  });

  createEffect(() => {
    console.log("isDivisibleByThree changed", isDivisibleByThree());
  });

  return (
    <>
      <h1>Count: {count()}</h1>
      <h2>Double: {doubleCount()}</h2>
      <h2>Is divisible by three: {isDivisibleByThree() ? "Yes" : "No"}</h2>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </>
  );
}

export default App;
