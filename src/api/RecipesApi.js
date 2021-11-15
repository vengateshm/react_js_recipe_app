const categoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const getAllCategories = async () => {
    try {
        const response = await fetch(categoriesUrl);
        const allCategories = await response.json();
        return allCategories.categories;
    } catch (error) {
        console.log(error);
    }
};