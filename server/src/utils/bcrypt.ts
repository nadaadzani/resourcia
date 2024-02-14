import bcrypt from "bcryptjs";
const salt = 10;
export const hashPassword = (input: string) => bcrypt.hashSync(input, salt);
export const comparePassword = (input: string, hashedPassword: string) =>
  bcrypt.compareSync(input, hashedPassword);
