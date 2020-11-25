export interface RecipeBuilder {
    getRecipe(weight: number, unit: string): Object
}