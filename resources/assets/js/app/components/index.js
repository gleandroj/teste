/**
 * Created by gasiq01 on 06/07/2017.
 */

export * from './header/header.component';

import headerComponent from './header/header.component';
import cardComponent from './card/card.component';
import avatarComponent from './avatar/avatar.component';

let componentsModule = angular.module('teste.components', []);

componentsModule.component(headerComponent.selector, headerComponent);
componentsModule.component(cardComponent.selector, cardComponent);
componentsModule.component(avatarComponent.selector, avatarComponent);

export default componentsModule.name;