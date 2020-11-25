import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { RecipeFactory } from "../RecipeFramework/recipefactory"
import { InputValidator } from "../RecipeFramework/validator"
import { MessageUtility } from "../RecipeFramework/messageutil"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Recipe function processed a request.')

    let typeInput: string = req.body.recipetype
    const weightInput: number = req.body.weight
    let unitInput: string = req.body.unit

    typeInput = typeInput.toLowerCase()
    unitInput = unitInput.toLowerCase()
    
    const inputValidator = new InputValidator()

    const validWeightInput = inputValidator.isWeightValid(weightInput)
    const validUnitInput = inputValidator.isUnitValid(unitInput)
    const validRecipeType = RecipeFactory.isRecipeTypeSupported(typeInput)

    if (validWeightInput === true && validUnitInput === true && validRecipeType === true) {
        const recipeFactory = new RecipeFactory()

        try {
            const recipeBuilder = recipeFactory.getRecipeBuilderByType(typeInput)

            const recipe = recipeBuilder.getRecipe(weightInput, unitInput)

            context.res = {
                body: recipe
            }

        }
        catch (error) {
            context.log.error('An unexpected arror was thrown in fetching the recipe.')
            context.log.error(error)
            context.res = {
                status: 500,
                body: "Houston we really have a problem here"
            }
        }

    }
    else {
        context.log('Invalid input parameters');

        const messageUtil = new MessageUtility()

        const messageObject = messageUtil.getMessageObject(validWeightInput, validUnitInput, validRecipeType)

        context.res = {
            status: 400,
            body: messageObject
        }

    }
}

export default httpTrigger;