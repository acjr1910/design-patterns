// Client

import TextDocument from "./TextDocument";
import TextDocumentHistory from "./TextDocumentHistory";

const document = new TextDocument('', 'Helvetica', 12);
const history = new TextDocumentHistory();

document.setContent('Hello');
history.push(document.createState());

document.setContent('Hello World');
history.push(document.createState());

document.setContent('Hello World!');
document.setFontName('Verdana');
document.setFontSize(16);
history.push(document.createState());

document.setContent('Hello World!!!');
document.setFontName('Comic Sans');
document.setFontSize(14);

console.log('current state:\n', document.toString());

document.restore(history.pop());

console.log('current state after restore:\n', document.toString());