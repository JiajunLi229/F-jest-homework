import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const result = register("username", "password");
    await expect(result).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here

    verifyUsername.mockImplementation(() => false);
    await expect(register("username", "password")).rejects.toThrow(
      "wrong username or password"
    );
  });
});
