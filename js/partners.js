const renderItems = (data) => {
    console.log(data);
}

renderItems.array.forEach((element) => {
    console.log(element);
});

fetch('https://delivery-9e42c-default-rtdb.firebaseio.com/db/partners.json')
.then((response) => response.json())
.then((data) => {
    renderItems(data);
})
.catch((error) => {
    console.log(error);
})
.finally(console.log('finally'))

