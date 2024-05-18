console.log(3)
fetch("./data/db.json").then(response => response.json()).then(data => {
    console.log(1)
    const container = document.getElementById('products-container');
    data.products.forEach(product => {
        const productElement = document.createElement("div")
        productElement.className = "pro"
        productElement.innerHTML = `
        <div class="img_cont">
                    <img class="img_products" src="${product.img}" alt="">
                </div>
                <div class="cont_des">
                    <div class="des">
                        <span>${product.title}</span>
                        <h5>${product.body}</h5>
                    </div>
                    <div class="bottom_des">
                        <h4>${product.price}</h4>
                        <button class="btn_product">Купить</button>
                    </div>
                </div>`
                container.appendChild(productElement)
                console.log(2)
    });
})
.catch(e => console.log(e))