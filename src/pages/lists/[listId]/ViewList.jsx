import Home from "@/pages/Home.jsx"
export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
    },
  },
})

const ViewList = (props) => {
  const {
    params: { listId },
  } = props
  return <Home listId={listId}></Home>
}

export default ViewList
