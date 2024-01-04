/* ==== FIXEDNAV ==== */
/* ================== */

const fixedNav = document.querySelector(".top-nav");
window.addEventListener("scroll", function(e){
    if(window.scrollY > 150){
        fixedNav.classList.add("fixed");
    }else{
        fixedNav.classList.remove("fixed");
    }
})

/* ==== SHOW-SIDEBAR ==== */
/* ====================== */
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".close-sidebar a");
const showSidebar = document.querySelector(".show-sidebar a");

showSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.add("show");
})
closeSidebar.addEventListener("click", function(e){
    e.preventDefault();
    sidebar.classList.remove("show");
})

/* ===== STATISTIC-PROJECTS ==== */
/* ============================= */

const statisticProjects = [...document.querySelectorAll(".statistic-projects h2")];

let start = [0, 0, 0];
let increaseNumber;

window.addEventListener("scroll", function(e){

    const statisticProjects = document.querySelector(".statistic-projects");

    if(window.scrollY > statisticProjects.getBoundingClientRect().top + 1000){
        increaseNumber = setInterval(increment, 100);
    }
})

function increment(){

    statisticProjects.forEach((item, index)=>{
        
        let number = start[index];

        if(index == 0){
            if(number == 30){
                item.textContent = `${30}`;
            }else{
                howManyIncrement(item, index, 1);
            }
        }else if(index == 1){
            if(number == 1000){
                item.textContent = `${1000}`;
            }else{
                howManyIncrement(item, index, 10);
            }
        }else{
            if(number == 100){
                item.textContent = `${100}%`;
                clearInterval(increaseNumber);
            }else{
                howManyIncrement(item, index, 1);
            } 
        }
    })
}

function howManyIncrement(item, index, step){
    start[index] = start[index] + step;
    item.textContent = `${start[index]}`;
}


/* ==== COPY-RIGHT ==== */
/* ==================== */

const copyRight = document.querySelector(".copy-right span");
copyRight.textContent = `${new Date().getFullYear()}`;