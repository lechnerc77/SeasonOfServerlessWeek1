import { mass } from "units-converter"

export class InputValidator {

    isUnitValid(unit: string): boolean {

        let availableValues = mass().list()

        let valid = false;

        for (var index = 0; index < availableValues.length; ++index) {

            var massValue = availableValues[index]

            if (massValue.unit == unit) {
                valid = true;
                break;
            }
        }
        return valid
    }

    isWeightValid(weight: number): boolean {
        const valid = (weight > 0) ? true : false
        return valid
    }
}

