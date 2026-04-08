const login = require('./login');

describe('Login Function', () => {
    
    it('should return true for correct credentials', () => {
        expect(login('admin', '12345')).toBe(true);
    });

    it('should return false for incorrect credentials', () => {
        expect(login('admin', 'wrongpassword')).toBe(false);
        expect(login('user', '12345')).toBe(false);
    });
});