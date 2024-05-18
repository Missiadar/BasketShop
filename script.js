const btn = document.getElementById("btn");
if(btn){
    btn.addEventListener("click", ()=>{
        let target = document.getElementById('product1');
        let targetPosition = target.offsetTop - 130; 
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    })
}

const btn2 = document.getElementById("footer_btn");
if(btn2){
    btn2.addEventListener("click", ()=>{
        let target2 = document.getElementById('hero');
        let targetPosition = target2.offsetTop - 100; 
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    })
}


fetch("./data/db.json").then(response => response.json()).then(data => {
    const container = document.getElementById('products-container');
    data.products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "pro";
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
        </div>`;

        container.appendChild(productElement);

        const imgProductsElement = productElement.querySelector(".img_products");
        const containerProductElement = productElement.querySelector(".img_cont")
        if (product.id >= 6 && product.id <= 10) {
            imgProductsElement.classList.add("img_no_shoes");
            containerProductElement.classList.add("img_no_shoe");
        }
        if(product.id == 3){
           const ChangeElement = productElement.querySelector(".img_cont")
           ChangeElement.style.height = "207px"
        }
        if(product.id == 4){
            const ChangeElement = productElement.querySelector(".img_cont")
            ChangeElement.style.height = "213px"
         }
         if(product.id == 5){
            const ChangeElement = productElement.querySelector(".img_cont")
            ChangeElement.style.height = "210px"
         }
    });
});

const bar = document.querySelector('.btn_burger');
const close = document.querySelector('.close');
const nav = document.querySelector('.navbar');
if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
