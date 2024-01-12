const prodsMenu = document.querySelector('.prodsMenu')
const prodsBlock = document.querySelector('.prodsBlock')

const prodsArr = localStorage.getItem('products').split(',')
prodsArr.forEach(item => {
    let newElem = document.createElement('a')
    newElem.setAttribute('href', '#')
    newElem.setAttribute('class', item)
    newElem.textContent = item
    prodsMenu.appendChild(newElem)
    newElem.addEventListener('click', function(param) {
        prodsBlock.textContent = ''
        showReviews(item)
    })
})

function showReviews(product) {
    const reviews = localStorage.getItem(product).split(',')
    console.log(reviews);
    reviews.forEach(review => {
        let newReview = document.createElement('p')
        newReview.textContent = review
        prodsBlock.appendChild(newReview)
    });
}