// simple asynchrounous function
function fetchData(callback) {
    setTimeout(()=> {
        callback('peanut butter');
    }, 1000);
}

module.exports = fetchData;

// promises

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut butter'), 1000);
    });
}

module.exports = fetchPromise;

// async and await
// above example
