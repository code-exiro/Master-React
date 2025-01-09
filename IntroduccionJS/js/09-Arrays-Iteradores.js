/*
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

for(let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias[i])
}
*/

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

/*
forEach
const arrayforEach = tecnologias.forEach(function(cualquiercosa){ //no genera un arreglo nuevo
    return cualquiercosa
})
*/
tecnologias.forEach(function(cualquiercosa){
    console.log(cualquiercosa)
})

//map 
const arrayMap = tecnologias.map(function(cualquiercosa){ //si genera un arreglo nuevo
    return "Hola"
})

//for ... of
for(let cualquiercosa of tecnologias){
    console.log(cualquiercosa)
}

//console.log(arrayforEach) //undefined
console.log(arrayMap)



