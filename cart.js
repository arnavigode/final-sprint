var data_div = document.getElementById("data");

function addElem() {
    let div = document.createElement('div')

        let p_name = document.createElement('p')
        p_name.innerText = el.name;

        let p_brand = document.createElement('p')
        p_brand.innerText = el.brand;

        let p_price = document.createElement('p')
        p_price.innerHTML = el.price;

        let img = document.createElement('img')
        img.src = el.img

        div.append(img, p_name, p_brand, p_price);

        div_j.append(div)

}
function displayCart() {
    let data = JSON.parse(localStorage.getItem('cart'));

    data_div.innerHTML = null;

    data.forEach(function (el) {
        addElem(el)
    })
    showcartItem()
    // showValue()
}
displayCart()

function showcartItem() {
    let items = document.getElementById('items')
    let prod = localStorage.getItem('cart');
    let arrz = JSON.parse(prod);

    var res = "Total Items :" + " " + arrz.length;
    items.innerHTML = res;
}
function adress() {
    window.location.href="cart2.html"
}
function payments(){
        window.location.href = "payments.html"
    }
