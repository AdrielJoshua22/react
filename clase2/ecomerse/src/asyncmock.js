const productos = [
    {nombre: "Hojas", precio: 3500, id:1, tamaño: "12x25", img: "./munhodeco/cuadrohojas.jpg"},
    {nombre: "Hoja1s", precio: 3500, id:2, tamaño: "12x25", img: "./munhodeco/cuadrosmile.jpg"},
    {nombre: "Hojas2", precio: 3500, id:3, tamaño: "12x25", img:""},
    {nombre: "Hojas3", precio: 3500, id:4, tamaño: "12x25", img:""},
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos);
        },2000)
    })
}