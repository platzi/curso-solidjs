export function Todo() {
  return (
    <>
      <input
        type="checkbox"
        checked={(console.log("test"), todo.completed)}
        onChange={() => {
          setTodos(
            produce((todos) => {
              todos[index()].completed = !todos[index()].completed;
            })
          );
        }}
      />
      <span
        onDblClick={(e) => {
          e.target.setAttribute("contenteditable", true);
          e.target.focus();
        }}
        onBlur={(e) => {
          e.target.setAttribute("contenteditable", false);
          setTodos(
            produce((todos) => {
              todos[index()].text = e.target.innerText;
            })
          );
        }}
      >
        <Show when={todo.completed} fallback={todo.text}>
          <s style="pointer-events: none">{todo.text}</s>
        </Show>
      </span>
      <button onClick={() => removeTodo(index())}>❌</button>
    </>
  );
}
