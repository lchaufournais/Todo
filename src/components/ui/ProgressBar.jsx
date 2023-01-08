const ProgressBar = (props) => {
  const { lengthTodoChecked, lengthTodo } = props
  const setPercentage = () => {
    if (0 === lengthTodoChecked || 0 === lengthTodo) {
      return 0
    }
    return (lengthTodoChecked / lengthTodo) * 100
  }

  const percentage = setPercentage()
  return (
    <div className="h-1 mr-2 bg-gray-300">
      <div
        style={{ width: `${percentage}%` }}
        className=" h-full bg-green-400"
      ></div>
    </div>
  )
}

export default ProgressBar
