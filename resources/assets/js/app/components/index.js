/**
 * Created by gasiq01 on 06/07/2017.
 */

import headerComponent from './header/header.component';
import avatarComponent from './avatar/avatar.component';
import tituloFormComponent from './titulo-form/titulo-form.component';
import tituloListComponent from './titulo-list/titulo-list.component';

let componentsModule = angular.module('teste.components', []);

componentsModule.component(headerComponent.selector, headerComponent);
componentsModule.component(avatarComponent.selector, avatarComponent);
componentsModule.component(tituloFormComponent.selector, tituloFormComponent);
componentsModule.component(tituloListComponent.selector, tituloListComponent);

export default componentsModule.name;