/**
 * Created by gasiq01 on 06/07/2017.
 */

export class headerComponentController{

    constructor(){}

    $onInit(){}

    $onChanges(changesObj){}

    $onDestroy(){}

    $postLink(){}

}

export let headerComponent = {
    selector: 'appHeader',
    bindings: {

    },
    controller: headerComponentController,
    controllerAs: '$component',
    template: 'Header Component is working'
};

export default headerComponent;