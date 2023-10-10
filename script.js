document.addEventListener("DOMContentLoaded", function () {
    // Paso 1: Declarar variables y constantes necesarias
    const precioProducto = 50; // Precio unitario del producto
    const cantidadInput = document.getElementById("cantidad");
    const subtotalSpan = document.getElementById("subtotal");
    const agregarButton = document.getElementById("agregar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");

    // Paso 2: Agregar eventos para interactuar con la página
    cantidadInput.addEventListener("input", calcularSubtotal);
    agregarButton.addEventListener("click", agregarAlCarrito);

    // Paso 3: Función para calcular el subtotal en tiempo real
    agregarButton.addEventListener("click",(calcularSubtotal));
    function calcularSubtotal() {
        const cantidad = parseInt(cantidadInput.value);
        const subtotal = precioProducto * cantidad;
    
        // Actualizar el contenido del elemento subtotal
        subtotalSpan.innerHTML = subtotal;
    }
    

    // Paso 4: Función para agregar productos al carrito
    let totalCarrito = 0;
    function agregarAlCarrito() {
        const cantidad = parseInt(cantidadInput.value);
        const subtotal = precioProducto * cantidad;
        var li = document.createElement("li");
        li.innerHTML = `Producto : Producto 1 <br>
                        Cantidad: ${cantidadInput.value} <br>
                        Subtotal: ${subtotalSpan.innerHTML} <br>`;
        listaCarrito.appendChild(li);

        totalCarrito += subtotal;
        cantidadInput.value = "1";
        subtotalSpan.textContent = `${precioProducto}`;

        calcularTotalCarrito()
        console.log(agregarAlCarrito)
    }
    
    
    // Paso 5: Función para calcular el total del carrito
    function calcularTotalCarrito() {
        // Completar esta función para calcular el total del carrito
        totalSpan.textContent = `${totalCarrito}`;
        
    }
    
});
