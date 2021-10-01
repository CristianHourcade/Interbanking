//  getElementById toma por id un elemento
//  getElementsByClassName toma los elementos de la misma clase array
//  getElementsByTagName toma los elementos de la misma etiqueta array

const li = document.getElementsByTagName("li") // Array de tipo HTML Collection

Array.from(li).forEach(elemento => {
    elemento.onclick = (event) => {
        location.href= "/"+event.target.getAttribute("data-route");
    }
})


// Onsubmit
// function validarDatos(event){
//     event.preventDefault();
//     // console.log(event)
// }

// document.getElementsByTagName('form')[0].onsubmit = (event) => {
//     event.preventDefault();
//     console.log(event);
// }

document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault();

    // if(event.target.children[0].getAttribute("name") == email){
        
    // }
})

