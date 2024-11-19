// let products = [{
//
//     title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//
//     title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
// }, {
//
//     title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// }, {
//
//     title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// }, {
//
//     title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//     title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
// }, {
//     title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// }, {
//
//     title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// }, {
//
//     title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//
//     title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
// }, {
//
//     title: 'milk', price: 22, image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// }, {
//
//     title: 'juice', price: 27, image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// }, {
//
//     title: 'tomato', price: 47, image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//
//     title: 'tea', price: 15, image: 'https://www.assamicaagro.in/cdn/shop/articles/Untitled_design_26_1200x1200.png?v=1592799889'
// },];
//
// // title price image
//
//
// let productsBlock = document.getElementsByClassName('products')[0];
//
// for (const product of products) {
//     let productBlock = document.createElement('div');
//     productBlock.classList.add('product');
//
//     let h2 = document.createElement('h2');
//     h2.innerText = product.title;
//     productBlock.appendChild(h2);
//
//     let image = document.createElement('img');
//     image.src = product.image;
//     productBlock.appendChild(image);
//
//
//     productsBlock.appendChild(productBlock);
//
// }


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.username}  ${user.email}  ${user.phone}`;
            document.body.appendChild(div);
        }
    });

