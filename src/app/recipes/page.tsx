'use client'
import { RecipeType } from "@/types/types"
import { Box, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import AllRecipeCard from '@/components/AllRecipeCard'

const RecipePage = () => {
    const [recipe, setRecipe] = useState<RecipeType[]>([])
    const fetchRecipe = async (): Promise<void> => {
      const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
      let allMeals: RecipeType[] = []
      for(let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        console.log(letters)
        try {
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
           
           const data = await response.json();
           console.log(`fetch data:`,data)
        if (data) {
            const recipeData = data.meals.map((item: any) => ({
            id: item.idMeal,
            name: item.strMeal,
            image: item.strMealThumb,
            category: item.strCategory
        }));
           allMeals = [...allMeals, ...recipeData]
           setRecipe(allMeals)
    }
            
        } catch(error){
            console.log(`something went worg ${error}`)
        }
    }
}

     useEffect (() => {
             fetchRecipe()
         }, [])
    return(
        <Box sx={{display: 'flex', flexWrap:'wrap', gap: 2, justifyContent:'center', p: 4,}}>
            {recipe ? (
                recipe.map((item, index) =>(
                    <Box key = {index} sx= {{flex:'32%'}}>
                    <AllRecipeCard  recipe={item}/> 
                    </Box>
                ) )
           
            ) : (
                <Typography>Loading...</Typography>
            )}
        </Box>
    )
}

export default RecipePage