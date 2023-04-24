import { createEffect, createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  createEffect(() => {
    console.log("Count changed", count());
    console.log("Count changed", count());
    console.log("Count changed 2", count2());
  });

  createEffect(() => {
    sessionStorage.setItem("count", count());
  });

  return (
    <>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
      <button onClick={() => setCount2(count2() + 1)}>{count2()}</button>
    </>
  );
}

export default App;
