import { AddTodoProps } from "../types"
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg"
import { v4 as uuidv4 } from "uuid"

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
    <input
      type="text"
      id="inputId"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-2 text-grey-dark mr-2"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
  </form>
)
