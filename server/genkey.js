const bcrypt = require("bcryptjs");

async function hashPassword() {
  const plainPassword = "admin123";  // Replace with your password
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  console.log(hashedPassword);
}

hashPassword();

