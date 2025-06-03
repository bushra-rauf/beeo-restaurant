
import { Typography, Button, Container, Paper, Box } from '@mui/material'
import RecipeCard from '@/components/RecipeCard'
import { RecipeType } from '@/types/types'

let mealToShow : RecipeType ;

const RecipeDetailPage = async({params}: {params: Promise<{recipe: string}>}) => {
 const {recipe} = await params; 
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/Lookup.php?i=${recipe}`)
        const data = await response.json()
        console.log(recipe)
    
      if (!data.meals) {

  return
}
        const recipeData:any = data.meals[0];
        const savedIngredients: string[] = [];
     
        //  console.log(recipeData)
        const keys: string[] = Object.keys(recipeData).filter(item => item.includes("strIngredient"));

        for (let i = 0; i < keys.length; i ++) {
            if(recipeData[keys[i]]) {
              savedIngredients.push(recipeData[keys[i]] + " - " + recipeData[`strMeasure${i + 1}`])
            } else {
                break;
            }
          }
        
        mealToShow = {
            name: recipeData.strMeal,
            image: recipeData.strMealThumb,
            category: recipeData.strCategory,
            area: recipeData.strArea,
            instruction: recipeData.strInstructions,
            video: recipeData.strYoutube,
            ingredients: savedIngredients
            
        }
         
      } catch (error) {
        console.error("Error fetching recipe:", error)
      }

  return (
    <Container sx={{ mt: 4, mb: 7}} maxWidth="sm">
       {mealToShow ? <RecipeCard {...mealToShow} /> : <Typography>Loading recipe...</Typography>}
    </Container>
  )
}

export default RecipeDetailPage
