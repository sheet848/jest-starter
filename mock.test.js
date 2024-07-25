//mock functions and spies

// mock function : fake implementations of real functions
// spies: tools that are used to track the behaviours of those functions so they track behaviouts such as 
//        whether the function has been called or how many times it has been called or with what arguments the function was called with

test('mock implementation of a basic function', ()=> {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
});

test('spying on a method of an object', () => {
    const video = {
        play() {
            return true;
        },
    };

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalledWith();
    spy.mockRestore();
});
