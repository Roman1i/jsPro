const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    const name = document.getElementById('name').value.toLowerCase()
    const review = document.getElementById('review').value
    const lsData = localStorage.getItem(name)
    if (lsData) {
        const appendet = [lsData, review]
        localStorage.setItem(name, appendet)
    } else {
        const products = localStorage.getItem('products')
        if (products) {
            localStorage.setItem('products', [products, name])
        } else {
            localStorage.setItem('products', [name])
        }
        const newData = [review]
        localStorage.setItem(name, newData)
    }
    document.getElementById('name').value = ''
    document.getElementById('review').value = ''
})

