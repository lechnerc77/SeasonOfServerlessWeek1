export class MessageUtility {

    getMessageObject(validWeightInput: boolean, validUnitInput: boolean, validRecipeType: boolean): JSON {

        let messages: Array<string> = []

        if (validRecipeType === false) {
            messages.push("The recipe type is invalid")
        }

        if (validWeightInput === false) {
            messages.push("The weight value is invalid. It must be greater than zero")
        }

        if (validUnitInput === false) {
            messages.push("The weight unit is invalid")
        }

        const messageObj = JSON.parse(JSON.stringify(messages))

        return messageObj

    }
}