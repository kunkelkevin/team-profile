const Manager = require("../lib/Manager");

test("Creates a Manager object", () => {
  const manager = new Manager("Jane Doe", 123, "jane@email.com", "555-1234");

  expect(manager.name).toBe("Jane Doe");
  expect(manager.id).toBe(123);
  expect(manager.email).toBe("jane@email.com");
  expect(manager.officeNumber).toBe("555-1234");
});

test("officeNumber return the manager's phone number", () => {
  const manager = new Manager("Jane Doe", 123, "jane@email.com", "555-1234");
  const officeNumber = manager.getNumber();

  expect(officeNumber).toEqual(expect.stringContaining("555-1234"));
});

test("getRole returns Manager", () => {
  const manager = new Manager("Jane Doe", 123, "jane@email.com", "555-1234");
  const role = manager.getRole();

  expect(role).toEqual(expect.stringContaining("manager"));
});
