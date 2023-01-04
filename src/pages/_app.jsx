import ContextProvider from "@/components/business/ContextProvider.jsx"
import "@/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default App
