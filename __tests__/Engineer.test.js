const Engineer = require("../lib/Engineer");

test("Creates a Engineer object", () => {
  const engineer = new Engineer("Bob Johnson", 123, "bob@email.com", "bobj");

  expect(engineer.name).toBe("Bob Johnson");
  expect(engineer.id).toBe(123);
  expect(engineer.email).toBe("bob@email.com");
  expect(engineer.github).toBe("bobj");
});

test("getGithub return the GitHub username", () => {
  const engineer = new Engineer("Bob Johnson", 123, "bob@email.com", "bobj");
  const github = engineer.getGithub();

  expect(github).toEqual(expect.stringContaining("bobj"));
});

test("getRole returns Engineer", () => {
  const engineer = new Engineer("Bob Johnson", 123, "bob@email.com", "bobj");
  const role = engineer.getRole();

  expect(role).toEqual(expect.stringContaining("engineer"));
});
