const users = {}; // Simulación de base de datos

function generateResetLink(email) {
  if (!users[email]) {
    throw new Error('User not found');
  }
  // Genera un enlace simulado con un token de restablecimiento
  const resetToken = Math.random().toString(36).substring(2);
  const resetLink = `https://example.com/reset-password?token=${resetToken}`;
  return resetLink;
}

function resetPassword(email, newPassword, token) {
  if (!users[email]) {
    throw new Error('User not found');
  }
  // Simulación de verificación del token (siempre válido en este ejemplo)
  if (token === 'valid_token') {
    users[email].password = newPassword;
    return true;
  } else {
    throw new Error('Invalid token');
  }
}

module.exports = { generateResetLink, resetPassword };
