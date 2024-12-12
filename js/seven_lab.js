fetch('https://dummyjson.com/products?limit=0')
    .then(res => res.json())
    .then(json => {
        let card = document.getElementById('product');
        let search_bar = document.getElementById('search_bar');
        let search_button = document.getElementById('search_button');
        let drop_button = document.getElementById('drop_button');
        let products = json.products;
        function display_products(products_display) {
            card.innerHTML = '';
            products_display.forEach(product => {
                let productElement = document.createElement('div');
                productElement.innerHTML = `
          <p class="text_card">${product.title}</p>
          <p class="text_card">${product.description}</p>
          <p class="text_card">Price: $${product.price}</p>
          <img src="${product.thumbnail}">
          <button type="button" class="card_button" id="${product.id - 1}" onclick="SoloCardDisplay(this.id)">Просмотр</button>
        `;
                card.append(productElement);
            });
        }
        display_products(products);

        if (document.getElementById('drop_button').style.display == "none") {
            document.getElementById('search_button').style.display = "block";
        }
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(json_all => {
                let all_products = json_all.products;
                search_button.addEventListener('click', () => {
                    let text = search_bar.value.toLowerCase();
                    if (text.length != 0) {
                        document.getElementById('search_button').style.display = "none";
                        document.getElementById('drop_button').style.display = "block";
                        document.getElementById('sum').style.display = "block";
                        let filter = all_products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );
                        let filter_main = products.filter(product =>
                            product.title.toLowerCase().includes(text) || product.description.toLowerCase().includes(text)
                        );

                        document.getElementById("sum").textContent = "Всего совпадений найдено: " + filter.length + " | " + "Совпадений из диапазона: " + filter_main.length;
                        display_products(filter_main);
                    }
                });
                drop_button.addEventListener('click', () => {
                    document.getElementById('search_bar').value = "";
                    document.getElementById('search_button').style.display = "block";
                    document.getElementById('drop_button').style.display = "none";
                    document.getElementById('sum').style.display = "none";
                    display_products(products);
                });
            })
    })

function SoloCardDisplay(i) {
    onclick = function () {
        fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(solo_json => {
                let card_solo = document.getElementById('solo_product');
                let one_product = solo_json.products;
                card_solo.innerHTML = '';
                let solo_productElement = document.createElement('div');
                solo_productElement.innerHTML = `
                    <p class="text_card">${one_product[i].title}</p>
                    <p class="text_card">${one_product[i].description}</p>
                    <p class="text_card">Price: $${one_product[i].price}</p>
                    <img src="${one_product[i].thumbnail}">
                    <button type="button" class="card_button" id="card_button" onclick="SoloCardHide()">Закрыть</button>
                  `;
                card_solo.append(solo_productElement);
            })
        document.getElementById('solo_card').style.display = "block";
        document.getElementById('solo_card').style.position = "fixed";
        document.body.style.overflow = "hidden";
        document.body.style.userSelect = "none";
    }
}


function SoloCardHide() {
    onclick = function () {
        document.getElementById('solo_card').style.display = "none";
        document.getElementById('solo_card').style.position = "absolute";
        document.body.style.overflow = "auto";
        document.body.style.userSelect = "auto";
    }
}


function AddCard() {
    document.getElementById('new_card_main').style.display = "block";
    document.getElementById('new_card_main').style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
}


let outsideProduct;

function HideNew() {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: document.getElementById("name_product").value,
            description: document.getElementById("description_product").value,
            price: document.getElementById("cost_product").value,
        })
    })
        .then(res => res.json())
        .then((createdProduct) => {
            outsideProduct = createdProduct;
            console.log(createdProduct)
            let new_card_solo = document.getElementById('new_product');
            let new_solo_productElement = document.createElement('div');
            new_solo_productElement.innerHTML = `
                    <p class="text_card">${createdProduct.title}</p>
                    <p class="text_card">${createdProduct.description}</p>
                    <p class="text_card">Price: $${createdProduct.price}</p>
                    <button type="button" class="card_button" id="${createdProduct.id}" onclick="NewCard()">Просмотр</button>
                  `;
            new_card_solo.append(new_solo_productElement);
            document.getElementById('new_card_main').style.display = "none";
            document.getElementById('new_card_main').style.position = "absolute";
            document.body.style.overflow = "auto";
            document.body.style.userSelect = "auto";
        })
}

function NewCard() {
    document.getElementById('new_solo_card').style.display = "block";
    document.getElementById('new_solo_card').style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
    let new_card = document.getElementById('new_product_disp');
    new_card.innerHTML = '';
    let new_productElement = document.createElement('div');
    new_productElement.innerHTML = `
    <p class="text_card">${outsideProduct.title}</p>
    <p class="text_card">${outsideProduct.description}</p>
    <p class="text_card">Price: $${outsideProduct.price}</p>
    <button type="button" class="card_button" id="card_button" onclick="NewCardHide()">Закрыть</button>
  `;
    new_card.append(new_productElement);

};

function NewCardHide() {
    document.getElementById('new_solo_card').style.display = "none";
    document.getElementById('new_solo_card').style.position = "absolute";
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
}
