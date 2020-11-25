import { RecipeBuilder } from "./recipeinterface"
import { mass } from "units-converter"
import { IngredientType, CookingTimeType, AmountUnit, TimeUnit } from "./recipevalues"

export class TurkeyRecipeBuilder implements RecipeBuilder {
    getRecipe(weight: number, unit: string): Object {

        const weightObj = mass(weight).from(unit).to('lb')
        let weightRaw = weightObj.value

        if (typeof weightRaw === "string") {
            weightRaw = +weightRaw
        }
        const weightFinal = (weightRaw).toFixed(2)

        const saltValue = +(0.05 * weightFinal).toFixed(2)
        const waterValue = +(0.66 * weightFinal).toFixed(2)
        const brownSugarValue = +(0.13 * weightFinal).toFixed(2)
        const shallotsValue = +(0.2 * weightFinal).toFixed(2)
        const garlicValue = +(0.4 * weightFinal).toFixed(2)
        const peppercornsValue = +(0.13 * weightFinal).toFixed(2)
        const driedJuniperBerriesValue = +(0.13 * weightFinal).toFixed(2)
        const freshRosemaryValue = +(0.13 * weightFinal).toFixed(2)
        const thymeValue = +(0.06 * weightFinal).toFixed(2)

        const brineDurationValue = +(2.4 * weightFinal).toFixed(2)
        const roastDurationValue = +(15 * weightFinal).toFixed(2)

        let recipeResult = {
            "ReceiptName": "The Perfect Holiday Turkey",
            "Chefs": "Jen Looper, Darren Butler and Eric Yu",
            "Ingredients": [
                {
                    "Ingredient": IngredientType.Salt,
                    "Value": saltValue,
                    "Unit": AmountUnit.Cups
                },
                {
                    "Ingredient": IngredientType.Water,
                    "Value": waterValue,
                    "Unit": AmountUnit.Gallons
                },
                {
                    "Ingredient": IngredientType.Bsugar,
                    "Value": brownSugarValue,
                    "Unit": AmountUnit.Cups
                },
                {
                    "Ingredient": IngredientType.Shallots,
                    "Value": shallotsValue,
                    "Unit": AmountUnit.Number
                },
                {
                    "Ingredient": IngredientType.Garlic,
                    "Value": garlicValue,
                    "Unit": AmountUnit.Number
                },
                {
                    "Ingredient": IngredientType.Peppercorns,
                    "Value": peppercornsValue,
                    "Unit": AmountUnit.Tablespoons
                },
                {
                    "Ingredient": IngredientType.DriedJuniperBerries,
                    "Value": driedJuniperBerriesValue,
                    "Unit": AmountUnit.Tablespoons
                },
                {
                    "Ingredient": IngredientType.FreshRosemary,
                    "Value": freshRosemaryValue,
                    "Unit": AmountUnit.Tablespoons
                },
                {
                    "Ingredient": IngredientType.Thyme,
                    "Value": thymeValue,
                    "Unit": AmountUnit.Tablespoons
                },
            ],
            "CookingTimes": [
                {
                    "CookingTimeType": CookingTimeType.BrineTime,
                    "Duration": brineDurationValue,
                    "Timeunit": TimeUnit.hours
                },
                {
                    "CookingTimeType": CookingTimeType.RoastTime,
                    "Duration": roastDurationValue,
                    "Timeunit": TimeUnit.minutes
                }
            ]

        }

        return recipeResult
    }

}