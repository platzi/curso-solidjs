import { createEffect, createSignal, For, Show } from "solid-js";

function App() {
  const [darkMode, setDarkMode] = createSignal(false);

  createEffect(() => {
    document.body.classList.toggle("dark", darkMode());
  });

  function toggleDarkMode() {
    setDarkMode(!darkMode());
  }

  const [todos, setTodos] = createSignal([
    { text: "Abrazar un pinguino", completed: true },
    { text: "Saludar pinguino", completed: false },
    { text: "Tomarle foto a un pinguino", completed: false },
  ]);

  return (
    <div class="w-full h-full min-h-screen flex items-center justify-center dark:bg-gray-600 dark:text-white">
      <button
        class="text-2xl fixed top-0 right-0"
        onClick={() => toggleDarkMode()}
      >
        {darkMode() ? "🌞" : "🌚"}
      </button>

      <div>
        <h1 class="text-2xl text-center">Solid Todo App</h1>
        <input class="border dark:text-black" type="text" />
        <button class="px-2 border">Add</button>
        <ul>
          <For each={todos()} fallback={"No hay elementos"}>
            {(todo) => (
              <li>
                <input type="checkbox" checked={todo.completed} />
                <span>
                  <Show when={todo.completed} fallback={todo.text}>
                    <s style="pointer-events: none">{todo.text}</s>
                  </Show>
                </span>
                <button>❌</button>
              </li>
            )}
          </For>
        </ul>
        <p class="text-sm mt-4">Completed count: {0}</p>
      </div>
    </div>
  );
}

export default App;
