
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
  return `<li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>`;
}

getRole(){
  return 'employee';
}

}
module.exports = Employee;
