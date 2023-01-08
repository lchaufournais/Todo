import Button from "@/components/ui/Button.jsx"
import { useCallback } from "react"
import { useContext } from "@/components/business/ContextProvider.jsx"
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router.js"
import routes from "@/routes.js"

const FilterButton = (props) => {
  const { listId } = props
  const { isChecked, updateIsChecked } = useContext()
  const router = useRouter()

  const handleClickFilter = useCallback(() => {
    updateIsChecked(!isChecked)
    router.push(routes.view.list(listId))
  }, [routes, listId, updateIsChecked, isChecked])
  return (
    <Button onClick={handleClickFilter} className="flex justify-end">
      {isChecked ? (
        <CheckIcon className="w-5 ml-2" />
      ) : (
        <CheckCircleIcon className="w-5 ml-2" />
      )}
    </Button>
  )
}

export default FilterButton
