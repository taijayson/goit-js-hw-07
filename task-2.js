const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')

const items = ingredients.map((item) => {
    const ingredientsItem = document.createElement('li')
    ingredientsItem.textContent = item;
    return ingredientsItem;
})

ingredientsList.append(...items);
// console.log(ingredientsList)
