/*Arrays o Arreglos 

const tecnologias = [205, 340, 423, true, "React.js"]

console.table(tecnologias)
console.log(tecnologias[0]) //205
console.log(tecnologias[2]) //423
*/
/*
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
tecnologias[4] = 'Next.js'
tecnologias[5] = 'Java'
tecnologias[10] = 'C++'

console.table(tecnologias)
*/
/*
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
tecnologias.push('Nest.js') //push es mutates

const nuevoArreglo = [...tecnologias, 'Nest.js'] //Genera un arreglo nuevo y no afecta al original

console.table(tecnologias)
console.table(nuevoArreglo)
*/
/*
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
tecnologias.shift()  //shift es mutates

console.table(tecnologias)
*/
/* 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const tecnologias2 = tecnologias.filter(function(tech) {
    if(tech !== 'HTML'){
        return tech
    }
})

console.log(tecnologias2)
*/
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

const tecnologias2 = tecnologias.map(function(tech) { //.map no mutation
    if(tech === 'Node.js') {
        return 'Nest.js'
    } else {
        return tech
    }
})    

console.log(tecnologias2)





