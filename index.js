let opciones = ["piedra", "papel", "tijera"];
let index_user, index_computer
// imput imagen de la parte de resultados
let option_user_display = document.getElementById("eleccionuser");
let option_computer_display = document.getElementById("eleccionpc");
let result_label = document.getElementById("leyenda_correspondiente");
let div_opciones = document.getElementById("opciones")
let div_resultados = document.getElementById("resultados")

 console.log(result_label)

 // setear opciones user/compu
const getOption = (opcion) => {
    let eleccion_user = opcion
    index_user = opciones.indexOf(eleccion_user);
    index_computer = Math.floor(Math.random() * 3);  //indice random pc
    // setear imagenes correspondientes a elecciones
    option_user_display.src = setimage(index_user);
    option_computer_display.src = setimage(index_computer); 

    //llama logica del juego 
    gamelogic()
}

const checkresult = (index_computer, index_user) =>{
    if((index_computer-1) === index_user) {
        result_label.innerText = "has perdido"
        console.log ("has perdido");
    } else {
        result_label.innerText = "has ganado"
        console.log("has ganado");
    }
}


// colocar imagenes correspondientes de acuerdo al indice de opciones
const gamelogic = () => {
    div_opciones.style.display = "none";
    div_resultados.style.display = "block";
    console.log(index_computer, index_user)
    if (index_user === index_computer) {
        result_label.innerText = "empate"
        console.log("empate");
    } else if (index_user === 0) {
        checkresult(index_computer, index_user);
    } else if (index_user === 1){
        checkresult(index_computer, index_user);
    } else {
        index_computer += 3;
        checkresult(index_computer, index_user);
    };

}

// colocar imagen correspondiente

const setimage = (index) => {
    let src_image;
    if (index === 0) {
        src_image = "piedras.png";
    } else if (index === 1) {
        src_image = "papel.png";
    } else {
        src_image = "tijeras.png";
    }
    return src_image;
}

const resetgame = () => {
    div_opciones.style.display = "block";
    div_resultados.style.display = "none";
}