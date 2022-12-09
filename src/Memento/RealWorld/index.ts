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

document.printState();

document.restore(history.pop());

document.printState();