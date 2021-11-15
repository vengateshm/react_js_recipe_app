import { getAllCategories } from "./api/RecipesApi";
import { useState, useEffect } from "react";
import CategoryGrid from "./components/CategoryGrid";
import CircularIndeterminate from "./components/CircularIndeterminate";

window.showAlertMessage = function (message) {
  alert(message);
};

function App() {
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    getAllCategories()
      .then((result) => {
        setAllCategories(result);
      })
      .catch((e) =>
        console.log(e)
      );
  }, []);

  return (
    (allCategories ? <CategoryGrid categories={allCategories} /> : <CircularIndeterminate />)
  );
}

export default App;
