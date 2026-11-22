function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}

function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://cadillacgrupobelden.com/wp-content/uploads/2023/12/Cadillac-Escalade-1600.webp",
        moto: "https://www.yamahadelzulia.com/cdn/shop/files/2024-Yamaha-MT09.webp?v=1728421569&width=1920",
        bicicleta: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyzScRFJcmI5jdAwn4eBN07Sl08dqM7pGpmbFXk0_VvYkNNJSCIRxurY&s=10"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}