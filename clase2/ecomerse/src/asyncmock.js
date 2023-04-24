const productos = [
    {nombre: "Hojas", precio: 3500, id:1, tamaño: "12x25", img: "./munhodeco/1 (2).jpg"},
    {nombre: "Hoja1s", precio: 3500, id:2, tamaño: "12x25", img: "./munhodeco/1 (2).jpg"},
    {nombre: "Hojas2", precio: 3500, id:3, tamaño: "12x25", img:"/munhodeco/1 (3).jpg"},
    {nombre: "Hojas3", precio: 3500, id:4, tamaño: "12x25", img:"./munhodeco/1 (4).jpg"},
    {nombre: "Hojas3", precio: 3500, id:5, tamaño: "12x25", img:"./munhodeco/1 (5).jpg"},
    {nombre: "Hojas3", precio: 3500, id:6, tamaño: "12x25", img:"./munhodeco/1 (2).jpg"},
    {nombre: "Hojas3", precio: 3500, id:7, tamaño: "12x25", img:"./munhodeco/1 (4).jpg"},
    {nombre: "Hojas3", precio: 3500, id:8, tamaño: "12x25", img:"./munhodeco/2.jpg"},
    {nombre: "Hojas3", precio: 3500, id:9, tamaño: "12x25", img:"./munhodeco/1 (4).jpg"},
    {nombre: "Hojas3", precio: 3500, id:10, tamaño: "12x25", img:"./munhodeco/1 (3).jpg"},
    {nombre: "Hojas3", precio: 3500, id:11, tamaño: "12x25", img:"./munhodeco/1 (2).jpg"},
    {nombre: "Hojas3", precio: 3500, id:12, tamaño: "12x25", img:"./munhodeco/2.jpg"},
    {nombre: "Hojas3", precio: 3500, id:13, tamaño: "12x25", img:"./munhodeco/1 (3).jpg"},
    {nombre: "Hojas3", precio: 3500, id:14, tamaño: "12x25", img:"./munhodeco/1 (5).jpg"},


    
]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos);
        },1000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           const producto = productos.find(prod => prod.id === id);
           resolve(producto);
        },2000)
    })
}