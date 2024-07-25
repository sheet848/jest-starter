//const sum = require('./sum');

// BASICS

// test ('description', testFunction)
/*
test('adds 1 and 2 = 3', ()=> {
    expect(sum(1,2)).toBe(3);
});

test('2 plus 2 = 4', ()=>{
    expect(2+2).toBe(4);
});

// MATCHERS

test('object assignment', ()=> {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2 });
});

test('null is falsy', ()=> {
    const n = null;  //0 , false
    expect(n).toBeFalsy();
});

test('one is truthy', ()=> {
    const n = 1;
    expect(n).toBeTruthy();
});
*/

// false result
/*
test('one is truthy', ()=> {
    const n = 1;
    expect(n).toBeFalsy();
});
*/

const myFunction = require('./sum');

test('throws on invalid input', ()=> {
    expect(()=> {
        myFunction('fvgvi');
    }).toThrow();
});
