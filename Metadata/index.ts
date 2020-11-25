import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { RecipeType } from "../RecipeFramework/recipevalues"
import { mass } from "units-converter"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Metadata function processed a request.')

    const metadataType = context.bindingData.type
    let result

    switch (metadataType) {
        case "Unit":
            result = mass().list()
            break
        case "Recipe":
            result = { "value": RecipeType.Turkey }
            break
        default:
            result = "Please provide a type (Unit or Recipe) to fetch the allowed input values"
    }

    context.res = {
        body: result
    }

}

export default httpTrigger;