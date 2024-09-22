const { generateResetLink, resetPassword } = require('../src/recetPassword');

// Simulamos algunos usuarios
const users = {
  'user@example.com': { password: 'old_password' },
};

describe('generateResetLink', () => {
  test('debe generar un enlace de restablecimiento para un usuario existente', () => {
    const email = 'user@example.com';
    const link = generateResetLink(email);
    expect(link).toContain('https://example.com/reset-password');
  });

  test('debe arrojar un error si el usuario no existe', () => {
    const email = 'nonexistent@example.com';
    expect(() => generateResetLink(email)).toThrow('User not found');
  });
});

describe('resetPassword', () => {
  test('debe restablecer la contraseña si el token es válido', () => {
    const email = 'user@example.com';
    const result = resetPassword(email, 'new_password', 'valid_token');
    expect(result).toBe(true);
  });

  test('debe arrojar un error si el token es inválido', () => {
    const email = 'user@example.com';
    expect(() => resetPassword(email, 'new_password', 'invalid_token')).toThrow('Invalid token');
  });
});
