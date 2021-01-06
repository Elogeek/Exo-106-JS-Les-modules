import * as utils from './HTML.js';

let result = document.getElementById("result");

result.append(utils.newDiv(), utils.newLabel("E-mail"), utils.newImput("E-mail"), utils.newLabel("password"),utils.newImput("password"));