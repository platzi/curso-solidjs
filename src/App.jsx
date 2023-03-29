import { createEffect, createSignal } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log("count changed", count());
  });

  return (
    <>
      <h1>Count: {count()}</h1>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </>
  );
}

export default App;
