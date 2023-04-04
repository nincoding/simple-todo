import TodoItemInputField from "./components/TodoItemInputField";
import TodoItemList from "./components/TodoItemList";

function App() {

  return (
    <div className="App">
      <TodoItemInputField onCreate={() => {}}/>
      <TodoItemList todoItemList={[]}/>
    </div>
  )
}

export default App