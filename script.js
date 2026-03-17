const role = document.querySelector(".role")

const roles = [
"Computer Science Student",
"Java Developer",
"Problem Solver"
]

let i = 0

setInterval(()=>{

role.innerHTML = roles[i]

i++

if(i===roles.length){
i=0
}

},2000)


