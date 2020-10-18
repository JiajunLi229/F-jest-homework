import axios from "axios";
import getUsers from "../users";

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    await getUsers();
    expect(axios.get).toHaveBeenCalledTimes(1);
    await expect(getUsers()).resolves.toEqual({});
  });
});
