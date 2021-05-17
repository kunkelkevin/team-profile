const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name,id,email,github){
        super(name,id,email);
        this.github= github;
    }

    getGithub () {
        return `<li class="list-group-item">ID: <a href=${this.github} target="_blank">${this.github}</a></li>`;
    }

    getRole(){
        return '<h2 class="card-subtitle"><i class="bi bi-eyeglasses"></i></i> Engineer</h2>';
      }
}

module.exports = Engineer;