const { Circle, Square, Triangle } = require("../lib/shapes");

// Test for specified color
test("Render Circle with Specified Color", () => {
    const shape = new Circle();
    shape.setColor("blue"); // Set color using color keyword

    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="blue" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

test("Render Square with Specified Color", () => {
    const shape = new Square();
    shape.setColor("red"); // Set color using color keyword

    const expectedSVG = '<rect x="55" y="20" width="190" height="190" fill="red" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

test("Render Triangle with Specified Color", () => {
    const shape = new Triangle();
    shape.setColor("green"); // Set color using color keyword

    const expectedSVG = '<polygon points="150,10 250,190 50,190" fill="green" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

// Test for hexadecimal color
test("Render Circle with Hexadecimal Color", () => {
    const shape = new Circle();
    shape.setColor("#FF5733"); // Set color using hexadecimal value

    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="#FF5733" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

test("Render Square with Hexadecimal Color", () => {
    const shape = new Square();
    shape.setColor("#AABBCC"); // Set color using hexadecimal value

    const expectedSVG = '<rect x="55" y="20" width="190" height="190" fill="#AABBCC" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

test("Render Triangle with Hexadecimal Color", () => {
    const shape = new Triangle();
    shape.setColor("#123456"); // Set color using hexadecimal value

    const expectedSVG = '<polygon points="150,10 250,190 50,190" fill="#123456" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});
