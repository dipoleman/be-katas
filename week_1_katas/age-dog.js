const ageDog = (dog, num) => {
    const newDog = {...dog}
    newDog.age = dog.age + num
    return newDog
};

module.exports = ageDog;

