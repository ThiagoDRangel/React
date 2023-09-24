import ListingBody from "./components/ListingBody";
import { useState } from "react";
import { ContextProductCount } from "./utils/context-products";

function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);

  return (
    <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
      <ListingBody />
    </ContextProductCount.Provider>
  )
}

export default App;

