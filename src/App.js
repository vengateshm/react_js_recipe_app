import { getAllCategories } from "./api/RecipesApi";
import { useState, useEffect } from "react";
import CategoryGrid from "./components/CategoryGrid";
import { Alert } from "@mui/material";


window.showAlertMessage = function(message){
  alert(message);
};

function App() {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((result) => {
        console.log("Data");
        console.log(result);
        setAllCategories(result);
        window.showAlertMessage("Meal categories loaded");
      })
      .catch((e) =>
        console.log(e)
      );
  }, []);

  return (
    <CategoryGrid categories={allCategories} />
  );
}

export default App;
