import { hashPassword, validatePassword } from "../src/utils/encrypt.util";

describe("all encrypt.util functions should be defined", () => {
    it("hashPassword should be defined", () => {
        expect(hashPassword).toBeDefined()
    });
    
    it("validatePassword should be defined", () => {
        expect(validatePassword).toBeDefined()
    });
});

describe("stored hash should match with hashed password if the user is the same", () => {
    // Arrange
    const myPassword = "veryfrightening";
    const storedHash = hashPassword(myPassword);
    // Act
    it("different users with same password should have different hashes", async () => {
        expect(await hashPassword(myPassword)).not.toBe(await storedHash);
    });
    it("comparation between user's password and stored hash should return true", async () => {
         expect(await validatePassword(myPassword, await storedHash)).toBe(true);
    });
});
