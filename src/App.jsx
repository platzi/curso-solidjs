import { createEffect, createMemo, createSignal, For, Show } from "solid-js";

function App() {
  const [darkMode, setDarkMode] = createSignal(false);

  createEffect(() => {
    document.body.classList.toggle("dark", darkMode());
  });

  function toggleDarkMode() {
    setDarkMode(!darkMode());
  }

  const [todos, setTodos] = createSignal([]);

  const [newItem, setNewItem] = createSignal("");

  function addTodo() {
    const [text, setText] = createSignal(newItem());
    const [completed, setCompleted] = createSignal(false);

    if (newItem()) {
      setTodos([...todos(), { text, completed, setText, setCompleted }]);
      setNewItem("");
    }
  }

  function removeTodo(index) {
    const newTodos = [...todos()];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completedCount = createMemo(
    () => todos().filter((todo) => todo.completed()).length
  );

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
        <input
          class="border dark:text-black"
          type="text"
          value={newItem()}
          onInput={(e) => setNewItem(e.target.value)}
        />
        <button class="px-2 border" onClick={addTodo}>
          Add
        </button>
        <ul>
          <For each={todos()} fallback={"No hay elementos"}>
            {(todo, index) => (
              <li>
                <input
                  type="checkbox"
                  checked={(console.log("test"), todo.completed())}
                  onChange={() => {
                    todo.setCompleted(!todo.completed());
                  }}
                />
                <span
                  onDblClick={(e) => {
                    e.target.setAttribute("contenteditable", true);
                    e.target.focus();
                  }}
                  onBlur={(e) => {
                    e.target.setAttribute("contenteditable", false);
                    todo.setText(e.target.innerText);
                  }}
                >
                  <Show when={todo.completed()} fallback={todo.text()}>
                    <s style="pointer-events: none">{todo.text()}</s>
                  </Show>
                </span>
                <button onClick={() => removeTodo(index())}>❌</button>
              </li>
            )}
          </For>
        </ul>
        <p class="text-sm mt-4">
          Completed count: {console.log("completed", completedCount())}
        </p>
      </div>
    </div>
  );
}

export default App;
