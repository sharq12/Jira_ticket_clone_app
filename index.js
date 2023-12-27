const addButton = document.querySelector(".add-btn");
const modalContEle = document.querySelector(".modal-cont");
const mainContainerEle = document.querySelector(".main-cont");
const priorityColorEle = document.querySelector(".priority-color");
const priorityColorEleAll = document.querySelectorAll(".priority-color");
const textareaEle = document.querySelector(".textarea-cont");
const toolboxColorContEle = document.querySelectorAll(".color");
let flag = false;

console.log(typeof (priorityColorEleAll));
let arrOfTickets = [];
// let filterredArr = [];

// add btn click -> flag = true-> display modal 
//                  flag = false-> modal hide 

// modalContELE.style.dislay = flex -> show , else none ->to hide (by default display:none)

addButton.addEventListener("click", (event) => {
    flag = !flag;
    if (flag) {
        modalContEle.style.display = "flex";
    } else {
        modalContEle.style.display = "none";
    }
});

// priorityColorEle.addEventListener("click", (event)=>{
//     let textValue = textareaEle.value;
//     createTicket(textValue);
//     textareaEle.value = "";
//     modalContEle.style.display = "none";
//     flag = false;

// });

priorityColorEleAll.forEach((ele) => {
        ele.addEventListener("click", (event) => {
        let textValue = textareaEle.value;
        createTicket(textValue, event.target.classList[1], Date.now());
        arrOfTickets = [...arrOfTickets,{textValue:textValue, color:event.target.classList[1], id:Date.now()}];
        textareaEle.value = "";
        modalContEle.style.display = "none";
        console.log(arrOfTickets);
        flag = false;
    })
})

toolboxColorContEle.forEach((ele)=>{
        ele.addEventListener("click", (event)=>{
            debugger;
         mainContainerEle.innerHTML = "";
        let filterredArr = arrOfTickets.filter(item=>item.color === event.target.classList[0]);   // problem - filtering a single value only 
        console.log({filterredArr});
        filterredArr.forEach((item)=>{
            createTicket(item.textValue, item.color, item.id);
        })
    })

})

// function to create ticket
const createTicket = (textValue, priorityColor, id) => {

    const ticketContainerEle = document.createElement("div");
    ticketContainerEle.setAttribute("class", "ticket-cont");
    ticketContainerEle.innerHTML = `
                                <div class="task-color ${priorityColor}"></div>
                                <div class="task-id">${id}</div>
                                <div class="task-area">${textValue}</div>`;
    mainContainerEle.appendChild(ticketContainerEle);
}

