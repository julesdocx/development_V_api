const Helpers = require('../utils/helpers.js');

describe('helpers test', () => {
    test('test if function generates something', () => {
        expect(Helpers.generateUUID()).not.toBeUndefined()
    })
    // test('test if output is UUID', () => {
    //     expect(Helpers.generateUUID()).toMatch(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/)
    // })
    test('test if string length is ok', () => {
        expect(Helpers.checkTitleLength()).toBeFalsy()
        expect(Helpers.checkTitleLength(2)).toBeFalsy()
        expect(Helpers.checkTitleLength([])).toBeFalsy()
        expect(Helpers.checkTitleLength(`Development 5 Test Titel`).length).toBeLessThan(101);
    })
});



