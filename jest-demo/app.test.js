const app = require ('./app')

test('should equal 0.3 when 0.1 and 0.2 are passed', () => {
    //something goes here
    expect(app.add(0.1,0.2)).toBeCloseTo(0.3, 5);
})

// test('should contain person2 in the array', () => {
//     expect(app.array).toContain('Person2');
// })