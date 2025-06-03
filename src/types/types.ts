import { JSX } from "react";

export type RecipeType = {
    id?: string;
  
    map?(arg0: (item: any, index: any) => JSX.Element): import("react").ReactNode;
    name: string,
    image: string,
    category: string,
    area?: string,
    video?: string,
    instruction?: string;
    ingredients?: string[]; 
    
}


// export interface AllRecipeCardProps {
//     recipe: RecipeType;
// }


