const Employee = require('./Employee');

class Intern extends Employee{
    constructor (name,id,email,school){
        super(name,id,email);
        this.school= school;
    }

    getSchool () {
        return `<li class="list-group-item">ID: ${this.school}</li>`;
    }

    getRole(){
        return '<h2 class="card-subtitle"><i class="bi bi-book"></i> Intern</h2>';
      }
}

module.exports = Intern;