/*
const fetchData = require("./asyncy");

test('data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});
*/

const fetchPromise = require("./asyncy");

test('the data is peanut butter', () => {
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

// if error is found
/*
test('the fetch fails with error', () => {
    return expect(fetchPromise()).rejects.toThrow('error');
});
*/

// async await

test('the data is peanut butter', async() => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});
