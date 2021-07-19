var data_div = document.getElementById("data");

const jwel = [
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 20000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 25000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 1000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 300,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 20000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 25000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 1000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 300,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 20000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 25000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 1000,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    },
    {
        name: "Gold Chain",
        brand: "Evara",
        price: 300,
        img: 'https://i.pinimg.com/originals/6d/46/94/6d4694742d307b84158e317eda9f866c.jpg'
    }

]
if (localStorage.getItem('jwel') == null) {
    localStorage.setItem('jwel', JSON.stringify(jwel));
}
function showCatlogue(d) {
    
    let jwel = d
    let div_j = document.getElementById('jwel')
    // keep it null when sorting
    div_j.innerHTML = null;

    jwel.forEach(function (el) {
        let div = document.createElement('div')

        let p_name = document.createElement('p')
        p_name.innerText = el.name;

        let p_brand = document.createElement('p')
        p_brand.innerText = el.brand;

        let p_price = document.createElement('p')
        p_price.innerHTML = el.price;

        let img = document.createElement('img')
        img.src = el.img

        let btn = document.createElement('button')
        btn.textContent = "ADD TO CART";

        btn.addEventListener("click", function () {
            
            showcart();
        });
        btn.style.display = "block";

        div.append(img, p_name, p_brand, p_price, btn);

        div_j.append(div)
    })
}
showCatlogue(JSON.parse(localStorage.getItem('jwel')));
// sorting
function priceLH() {
    let jwel = JSON.parse(localStorage.getItem('jwel'))

    jwel.sort(function (a, b) {
        return a.price - b.price;
    })
    showCatlogue(jwel);
}
function priceHL() {
    let jwel = JSON.parse(localStorage.getItem('jwel'))

    jwel.sort(function (a, b) {
        return b.price - a.price;
    })
    showCatlogue(jwel);
}
// cart
function addToCart(obj) {
    let arr;
    if (arr == null) {
        arr = []
    }
    else {
        arr = JSON.parse(localStorage.getItem('cart'))
    }
    arr.push(obj);

    localStorage.setItem('cart', JSON.stringify(arr))
    showCatlogue();

}
function showcart() {
    window.location.href = "cart.html"
}
function alertAdded() {
    let jwels = localStorage.getItem("cart");
    let arrz = JSON.parse(jwels);

    for (var i = 0; i < arrz.length; i++){
        if (arrz[i.name == arrz[i + 1].name]) {
            alert("")
        }
    }
}
