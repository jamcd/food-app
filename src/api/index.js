
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const fakeDatabase = {
  recipes: [
    {
      id: 1,
      name: 'Tenderstem broccoli bread bake',
      ingredients: [
        {
          name: 'butter',
          quantity: '2 tbsp'
        },
        {
          name: 'flour',
          quantity: '2 tbsp'
        },
        {
          name: 'broccoli',
          quantity: '300g'
        },
        {
          name: 'mustard',
          quantity: '1 tbsp'
        },
        {
          name: 'milk',
          quantity: '400ml'
        },
        {
          name: 'cheese',
          quantity: '60g'
        },
        {
          name: 'bread',
          quantity: '2 slices'
        },
        {
          name: 'parmesan',
          quantity: '1 serving'
        }
      ]
    },
    {
      id: 2,
      name: 'Spring green fried rice & eggs',
      ingredients: [
        {
          name: 'vegetable oil',
          quantity: '1 tbsp'
        },
        {
          name: 'eggs',
          quantity: '3'
        },
        {
          name: 'spring onions',
          quantity: '1 bunch'
        },
        {
          name: 'green chilli',
          quantity: '1'
        },
        {
          name: 'ginger',
          quantity: '2cm chunk'
        },
        {
          name: 'garlic',
          quantity: '1 clove'
        },
        {
          name: 'spring greens',
          quantity: '150g'
        },
        {
          name: 'rice',
          quantity: '250g'
        },
        {
          name: 'soy sauce',
          quantity: '1tbsp'
        },
      ]
    }
  ]
}

export const fetchRecipesFromDB = id => delay(500).then(() => {
  if (id === 'all') {
    return fakeDatabase.recipes
  } else if (Number.isInteger(id)) {
    return fakeDatabase.recipes.filter(recipe => recipe.id === id)
  } else {
    throw new Error(`Recipe of id: ${id} does not exist`)
  }
})