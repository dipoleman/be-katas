const treatDoggos = (dogs) => {
    const newDogs = [...dogs]
    newDogs.forEach(({...dog})=>{
        dog.hasRabies = false
    })
    return newDogs
};

module.exports = treatDoggos;
