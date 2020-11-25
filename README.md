# Season of Serverless - Challenge Week 1
This repository contains the solution for the Season of Serverless Challenge week 1 aka "The Perfect Turkey" via Azure Functions in TypeScript

## Solution Components
The solution is a simple Azure Function that provides a GET endpoint. Based on the input handed over via the request body the recipe is determined and returned to the caller. Here is a sample body for a call
```
{
    "recipetype": "Turkey",
    "weight": "26",
    "unit": "lb"
}
```
The units need not be lb, they will be converted in the API. 

In addition metadata endpoints are provided for the valid values of the `recipetype` (currently only "turkey") and the available `units`. 

## Internal Design
The function executes a validation of the input data via a validator class. If the input is valid the creation of the recipe is delegated to a class factory. Based on the `recipetype` the factory creates an instance of the corresponding class and the function calls the `getRecipe` interface method of the class.
In case of invalid input data the returned data is processed via a message utility depending on the different errors. 

The function for the metadata (valid input values) has a customized HTTP route and returns the metadata for units and recipe types depending on the route.

## How to execute
You can run the functions locally via `npm run start`. Several HTTP calls are available in the file `requests.http` (required: [REST CLient extension in VSCode](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))

## Possible improvements
* Provide openAPI specification
* Provide Unit Tests