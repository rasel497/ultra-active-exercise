
/* // for db

// use local storage to manage cart data
const addToDb = id => {
    let addToExcerciseDetails = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('exercise-time');
    if (storedCart) {
        addToExcerciseDetails = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = addToExcerciseDetails[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        addToExcerciseDetails[id] = newQuantity;
    }
    else {
        addToExcerciseDetails[id] = 1;
    }
    localStorage.setItem('exercise-time', JSON.stringify(addToExcerciseDetails));
}

//01 for Cart local storage store date long time [A-08]
const getStoreCart = () => {
    let addToExcerciseDetails = {};
    //01 get the shopping cart from local storage
    const storedCart = localStorage.getItem('exercise-time');
    if (storedCart) {
        addToExcerciseDetails = JSON.parse(storedCart);
    }
    return addToExcerciseDetails;
}


export {
    addToDb,
    //getStoreCart for store local storage excercise detials
    getStoreCart,
}

*/