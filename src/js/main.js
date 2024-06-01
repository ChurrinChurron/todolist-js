let showDesc = document.querySelectorAll(".showMore");
let plusTask = document.querySelector("#plusTask");
let tabNewTask = document.querySelector(".newTask");
/* REGISTER DATA AND ADD TASK */
let titleForm = document.querySelector("#taskName");
let descForm = document.querySelector("#desc");
let title = document.querySelector("#title");
let lista = document.querySelector("ul");
let addTask = document.querySelector("#addTask");
let deleteAll = document.getElementById("dlt");

const leadsFromLocalStorage = localStorage.getItem("tarea")

// let info = [];

if (leadsFromLocalStorage) {
    lista.innerHTML = leadsFromLocalStorage
    // render(info)
}

/*CICLO A LOS BOTONES PARA MOSTRAR LA DESCRIPCION Y SU FUNCION DE CLICK*/


for(let show of showDesc) {

    show.addEventListener("click", () => {

        show.classList.toggle("show");
        show.classList.contains("show") ? show.innerHTML = "- Hide details" : show.innerHTML = "+ View more details";

        console.log("dddd");
    })
}

/*FUNCION PARA ACTIVAR EL BOTON DE AÑADIR TASK Y SE MUESTRE LA OTRA PESTAÑA*/

plusTask.addEventListener("click", () => {

    tabNewTask.classList.add("open");
})

// let objeto = {}

// function render(info) {

//     let output = "";

//     for(let i = 0; i <info.length; i++) {

//         output += `<li>
//         <h2>${info[i][0]}</h2>
//         <h4>Descripción:</h4>
//         <br/>
//         <p>${info[i][1]}</p>
//         </li>`;
//     }

//     lista.innerHTML = output
// }

/*FUNCION PARA AGREGAR EL TASK*/

addTask.addEventListener("click", () => {

    let titleFormDef = titleForm.value.trim();
    let descFormDef = descForm.value.trim();

    if((titleFormDef === "") && (descFormDef === "")) {

        alert("Fill the Task Name and the Task Description!");

    } else {

            const createTask = document.createElement("li");
            const boton = document.createElement("button");
            const span = document.createElement("span");

            boton.className = "showMore";
            boton.innerHTML = "+ View more details";

            span.className = "dltTodo";
            span.innerHTML = "X";

                createTask.innerHTML += `
                        <h2 id="title">${titleForm.value}</h2>
                        <p id="description">${descForm.value}</p>
                        `;

                        boton.addEventListener("click", () => {
                            
                            boton.classList.toggle("show");
                            boton.classList.contains("show") ? boton.innerHTML = "- Hide details" : boton.innerHTML = "+ View more details";
                        })

                        span.addEventListener("click", () => {
                            span.parentElement.remove();
                        })
                        
                        createTask.prepend(boton);
                        createTask.prepend(span);
                        lista.append(createTask);
                        
        tabNewTask.classList.remove("open");

        // info.push([titleForm.value, descForm.value])

        localStorage.setItem("tarea", lista.innerHTML); 

        // render(info)

        console.log(lista);
        
        titleForm.value = "";
        descForm.value = "";
        }
    })

    deleteAll.addEventListener("click",  () =>  {
        localStorage.clear();
        lista.innerHTML = ""
        // info = [];
        // render(info);
    })


                // console.log(JSON.parse(localStorage.getItem("tarea")));

                // function render(info) {
                //     let listTodo = {
                //         'title': titleForm.value,
                //         'month': monthForm.value,
                //         'year': yearForm.value,
                //         'descrip': descForm.value 
                //     };
                //     for (let i = 0; i < info.length; i++) {
                //         listTodo +=  `
                //         <h2 id="title">${titleForm.value}</h2>
                //         <div class="date">
                //             <p><b>Due Date</b></p>
                //             <time id="dateData">${monthForm.value}/${yearForm.value}</time>
                //         </div>
                //         <p id="description">${descForm.value}</p>
                //         `;
                //     }
                //     ulEl.innerHTML = listTodo
                // }

                            // let listTodo = {
            //     'title': titleForm.value,
            //     'month': monthForm.value,
            //     'year': yearForm.value,
            //     'descrip': descForm.value 
            // };


            // const createTask = document.createElement("li");
            // const boton = document.createElement("button");

            // boton.className = "showMore";
            // boton.innerHTML = "+ View more details";


            //     createTask.innerHTML += `
            //             <h2 id="title">${titleForm.value}</h2>
            //             <div class="date">
            //                 <p><b>Due Date</b></p>
            //                 <time id="dateData">${monthForm.value}/${yearForm.value}</time>
            //             </div>
            //             <p id="description">${descForm.value}</p>
            //             `;

            //             boton.addEventListener("click", () => {
                            
            //                 boton.classList.toggle("show");
            //                 boton.classList.contains("show") ? boton.innerHTML = "- Hide details" : boton.innerHTML = "+ View more details";
            //             })
                        
            //             createTask.prepend(boton);
            //             lista.append(createTask);