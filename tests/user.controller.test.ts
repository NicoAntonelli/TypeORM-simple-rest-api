import { getUsers } from "../src/controllers/user.controller"
import { User } from "../src/entity/User"
const fetchUrl = require("fetch").fetchUrl;

describe("get all users", () => {
    it("should get every user in db", async () => {
    try {
        await fetchUrl("http://localhost:3000/api/users", function(error, meta, body) {
          expect(meta.status).toEqual(200);
          expect(body).toHaveLength(8);
          // Fetch doesn't seems to work. I must have to switch to Axios, or use Supertest directly
        });
    } catch(e) {
        console.log(e);
    }
    });
});
