const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber= officeNumber;
    }

    getNumber () {
        return `<li class="list-group-item">Office #: ${this.officeNumber}</li>`;
    }

    getRole(){
        return 'manager';
      }
}

module.exports = Manager;