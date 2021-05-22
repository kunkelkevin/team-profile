const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");

  expect(employee.name).toBe("John Smith");
  expect(employee.id).toBe(123);
  expect(employee.email).toBe("john@email.com");
});

test("getName return the employee name", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");
  const name = employee.getName();

  expect(name).toEqual(expect.stringContaining("John Smith"));
});

test("getId return the a string", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");
  const id = employee.getId();

  expect(id).toEqual(expect.stringContaining("123"));
});

test("getEmail return a string with email", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");
  const email = employee.getEmail();

  expect(email).toEqual(expect.stringContaining("john@email.com"));
});

test("getRole returns Employee", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");
  const role = employee.getRole();

  expect(role).toEqual(expect.stringContaining("employee"));
});
