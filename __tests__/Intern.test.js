const Intern = require("../lib/Intern");

test("Creates a Intern object", () => {
  const intern = new Intern(
    "Mary Jane",
    123,
    "mary@email.com",
    "High University"
  );

  expect(intern.name).toBe("Mary Jane");
  expect(intern.id).toBe(123);
  expect(intern.email).toBe("mary@email.com");
  expect(intern.school).toBe("High University");
});

test("getSchool return the school name", () => {
  const intern = new Intern(
    "Mary Jane",
    123,
    "mary@email.com",
    "High University"
  );
  const school = intern.getSchool();

  expect(school).toEqual(expect.stringContaining("High University"));
});

test("getRole returns Intern", () => {
  const intern = new Intern(
    "Mary Jane",
    123,
    "mary@email.com",
    "High University"
  );
  const role = intern.getRole();

  expect(role).toEqual(expect.stringContaining("intern"));
});
