// Memento

export interface ITextDocumentState {
    getContent(): string;
    getFontName(): string;
    getFontSize(): number;
}

export default class TextDocumentState implements ITextDocumentState  {

    private content: string;

    private fontName: string;

    private fontSize: number;

    constructor(content: string, fontName: string, fontSize: number) {
        this.content = content;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    getContent() { return this.content; }

    getFontName() { return this.fontName; }

    getFontSize() { return this.fontSize; }

}
