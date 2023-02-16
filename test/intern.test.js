const Intern = require('../lib/Intern');

// Creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Tyrese', 1, 'tyreseking11@gmail.com', 'GT');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Tyrese', 1, 'tyreseking11@gmail.com', 'GT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Tyrese', 1, 'tyreseking11@gmail.com', 'GT');

    expect(intern.getRole()).toEqual("Intern");
});