import { RecipeBuilder } from "./recipeinterface"
import { TurkeyRecipeBuilder } from "./turkeyrecipe"
import { RecipeType } from "./recipevalues"

export class RecipeFactory {

    static isRecipeTypeSupported(recipetype: string) {
        let isvalid = false

        if ((<any>Object).values(RecipeType).includes(recipetype)) {
            isvalid = true

        }
        return isvalid
    }

    public getRecipeBuilderByType(recipetype: string): RecipeBuilder {

        if (recipetype === RecipeType.Turkey) {
            const recipeBuilder = new TurkeyRecipeBuilder()
            return recipeBuilder
        }
        else {
            throw new Error("The recipe type is not yet supported")
        }
    }
}