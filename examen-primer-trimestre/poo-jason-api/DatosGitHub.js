// Creamos la "Clase DatosGitHub" y le añadimos un constructor con 4 parametros
class DatosGitHub {
    constructor(login, id, email, public_repos) {
        this.login = login;
        this.id = id;
        this.email = email;
        this.public_repos = public_repos;
    }

    datosRecibidos() {
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
    }
}

var datosGitHubInstance = new DatosGitHub('ejemplo', 123, 'ejemplo@email.com', 5);
datosGitHubInstance.datosRecibidos();
