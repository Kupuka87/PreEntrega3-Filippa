const shopContenido = document.getElementById("shopContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

/**Productos */

/** Fin Productos**/


let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio} $</p>
    `;

    shopContenido.append(content);

    let comprar = document.createElement ("boton")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
        });
       
    });
});





