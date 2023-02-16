const Engineer = require('../library/Engineer');

// Creates engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Tyrese', 1, 'tyreseking11@gmail.com', 'TyreseKing');

    expect(engineer.github).toEqual(expect.any(String));
});

// Gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Tyrese', 1, 'tyreseking11@gmail.com', 'TyreseKing');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Tyrese', 1, 'tyreseking11@gmail.com', 'TyreseKing');

    expect(engineer.getRole()).toEqual("Engineer");
});