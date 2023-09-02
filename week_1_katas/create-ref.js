const createRef = (inputArray, key1, key2) => {
    const things = [...inputArray]
    const ref = {}
    things.forEach((thing)=>{
        ref[thing[key1]] = thing[key2]
    })
    return ref
};

module.exports = createRef;
