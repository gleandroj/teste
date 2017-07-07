/**
 * Created by gasiq01 on 06/07/2017.
 */

export default class ApiService {

    constructor($http, $q){
        this.http = $http;
        this.$q = $q;
    }

    getCurrentUser(){
        let defer = this.$q.defer();

        this.http.get('/api/user').then((response)=>{
            defer.resolve(response.data);
        },(response)=>{
            defer.reject(response.data);
        });

        return defer.promise;
    }

    getTitulos(){
        let defer = this.$q.defer();

        this.http.get('/api/titulos').then((response)=>{
            defer.resolve(response.data);
        },(response)=>{
            defer.reject(response.data);
        });

        return defer.promise;
    }

    createTitulo(titulo){
        let defer = this.$q.defer();

        this.http.post('/api/titulos', titulo).then((response)=>{
            defer.resolve(response.data);
        },(response)=>{
            defer.reject(response.data);
        });

        return defer.promise;
    }


    deleteTitulo(titulo){
        let defer = this.$q.defer();

        this.http.delete('/api/titulos/' + titulo.id).then((response)=>{
            defer.resolve(response.data);
        },(response)=>{
            defer.reject(response.data);
        });

        return defer.promise;
    }

}

ApiService.$inject = ['$http', '$q'];