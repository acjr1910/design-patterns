// Caretaker

import { ITextDocumentState } from './TextDocumentState';

export default class TextDocumentHistory {
    private states: ITextDocumentState[] = [];

    push(state: ITextDocumentState) {
        this.states.push(state);
    }

    pop() {
        return this.states.pop();
    }
}
