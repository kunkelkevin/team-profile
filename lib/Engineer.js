const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name,id,email,github){
        super(name,id,email);
        this.github= github;
    }

    getGithub () {
        return `<li class="list-group-item">ID: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>`;
    }

    getRole(){
        return 'engineer';
      }
}

module.exports = Engineer;