const itemsByTag = 
    document.querySelectorAll('.item')
console.log(`В списке ${itemsByTag.length} категории.`)


itemsByTag.forEach((item) => {
    const text = item.firstElementChild.textContent
    console.log(text)
})
    

