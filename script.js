const body = document.querySelector("body"),
     nav = document.querySelector("nav"),
     modeToggle = document.querySelector(".dark-light"),
     searchToggle = document.querySelector(".searchToggle"),
     sidebarClose = document.querySelector(".sidebarClose"),
     sidebarOpen = document.querySelector(".sidebarOpen");


     let getMode = localStorage.getItem("mode");
     if(getMode && getMode === "dark-mode"){
        body.classList.add("dark");
     }

// javaScript to toggle dark and light mode

modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh.

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
    }
    else{
        localStorage.setItem("mode" , "dark-mode");
    }
})

//  javascript code to toggle search box 
searchToggle.addEventListener("click" , ()=>{
    searchToggle.classList.toggle("active");
 })  

//  javaScript code to toggle sidebar

sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
})

body.addEventListener("click" , (e) =>{
    let clickedElement = e.target;
    if(!clickedElement.classList.contains("sidebarOpen") && !clickedElement.classList.contains("menu")){
        nav.classList.remove("active");
    }
})