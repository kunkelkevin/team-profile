const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber= officeNumber;
    }

    getNumber () {
        return `<li class="list-group-item">ID: ${this.officeNumber}</li>`;
    }

    getRole(){
        return '<h2 class="card-subtitle"><i class="bi bi-door-open"></i> Manager</h2>';
      }
}

module.exports = Manager;