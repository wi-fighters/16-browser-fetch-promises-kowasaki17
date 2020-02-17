// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here 
const modal = document.getElementById("myModal");

let promiseOfModal = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        resolve(modal)
    }, 2000);
})
promiseOfModal.then(function(modal){
    modal.style.display = "block";
})
modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})