export interface DrinkApiResType {
  drinks: {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strInstructions: string;
    strInstructionsES?: string;
    strInstructionsDE?: string;
    strInstructionsFR?: string;
    strInstructionsIT?: string;
    'strInstructionsZH-HANS'?: string;
    'strInstructionsZH-HANT'?: string;
  }[];
}
export interface DrinkType {
  id: string;
  name: string;
  category?: string;
  image: string;
}

export interface DrinkDetailType extends DrinkType {
  ingredients: {
    name: string;
    measure: string;
  }[];
  instructions: {
    language: string;
    text: string;
  }[];
}

export interface DrinksByIngredientApiResType {
  drinks: {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  }[];
}

export interface IngredientApiResType {
  ingredients: {
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
  }[];
}

export interface IngredientType {
  name: string;
  description: string;
  type: string;
  alcohol: string;
  image: string;
}
