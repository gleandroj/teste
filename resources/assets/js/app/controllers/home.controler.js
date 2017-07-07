/**
 * Created by gasiq01 on 06/07/2017.
 */

export default class homeController{

    constructor(apiService, currentUser){
        this.api = apiService;
        this.currentUser = currentUser;
        this.titulos = [];
        this.showList = false;
        this.showForm = false;
        this.getTitulos();
    }

    getTitulos(){
        this.api.getTitulos().then((titulos)=>{
            this.titulos = titulos;
        });
    }

    showTituloForm($event){
        this.showForm = true;
        this.showList = false;
    }

    submitTitulo(titulo){
        this.loading = true;
        this.api.createTitulo(titulo).then((titulo)=>{
            alert('Titulo salvo com sucesso!');
            this.titulos.push(titulo);
            this.showForm = false;
            this.showList = true;
            this.loading = false;
        }, (err)=>{
            this.loading = false;
            alert("Erro ao salvar o título, tente novamente.");
        });
    }

    deleteTitulo(titulo){
        this.loading = true;
        this.api.deleteTitulo(titulo).then(()=>{
            alert('Titulo deletado com sucesso!');
            this.titulos = this.titulos.filter( t => t.id !== titulo.id);
            this.showForm = false;
            this.showList = true;
            this.loading = false;
        });
    }
}

homeController.$inject = ['ApiService', 'CurrentUser'];