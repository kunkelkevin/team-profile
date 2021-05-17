
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

getName() {
  return `<h2 class="card-title">${this.name}</h2>`;
}

getId() {
  return `<li class="list-group-item">ID: ${this.id}</li>`;
}

getEmail() {
  return `<li class="list-group-item">Email: ${this.email}</li>`;
}

getRole(){
  return '<h2 class="card-subtitle"><i class="bi bi-clock-history"></i> Employee</h2>';
}

}
module.exports = Employee;
