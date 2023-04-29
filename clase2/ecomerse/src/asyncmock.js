const productos = [
    {nombre: "minimalista", precio: 3500, id:"1", tamaño: "12x25", img: "/munhodeco/1.jfif", categoria:'cuadros-minimalistas'},
    {nombre: "flores", precio: 3500, id:"2", tamaño: "12x25", img: "/munhodeco/2.jpg",categoria:'cuadros-flores'},
    {nombre: "flores-two", precio: 3500, id:"4", tamaño: "12x25", img:"/munhodeco/4.jpg",categoria:'cuadros-flores'},
    {nombre: "minimalista", precio: 3500, id:"5", tamaño: "12x25", img:"/munhodeco/5.jpg",categoria:'cuadros-minimalistas'},
    {nombre: "flores-three", precio: 3500, id:"6", tamaño: "12x25", img:"/munhodeco/6.jpg",categoria:'cuadros-flores'},
    {nombre: "minimalista-three", precio: 3500, id:"7", tamaño: "12x25", img:"/munhodeco/7.jpg",categoria:'cuadros-minimalistas'},



    
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

