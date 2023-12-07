const armarCarrito = () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalboton = document.createElement ("h1");
    modalboton.innerText = "X";
    modalboton.className = "modal-header-button"; 

    modalboton.addEventListener("click" , () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalboton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
        `;
        modalContainer.append(carritoContent)

        let eliminar = document.createElement("span");
        eliminar.innerText = "❎";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto)
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalCompra = document.createElement("div")
    totalCompra.className ="total-content"
    totalCompra.innerHTML = `Total a pagar: ${total} $`; 
    modalContainer.append(totalCompra);
};

verCarrito.addEventListener("click", armarCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
    });

    armarCarrito();
};