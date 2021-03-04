const itemsByTag = 
    document.querySelectorAll('.item')
console.log(`В списке ${itemsByTag.length} категории.`)


itemsByTag.forEach((item) => {
    const text1 = item.firstElementChild.textContent;
    console.log(`Категория: ${text1}`)
    const text2 = item.lastElementChild.children.length;
    console.log(`Количество элементов: ${text2}`)
})
    

