const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
  const employee = new Employee("John Smith", 123, "john@email.com");

  expect(employee.name).toBe("John Smith");
  expect(employee.id).toBe(123);
  expect(employee.email).toBe("john@email.com");
});
