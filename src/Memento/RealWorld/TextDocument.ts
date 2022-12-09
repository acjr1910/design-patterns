import TextDocumentState, { ITextDocumentState } from "./TextDocumentState";

export default class TextDocument {

  private content: string;

  private fontName: string;

  private fontSize: number;

  constructor(content, fontName, fontSize) {
    this.content = content;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }

  public toString(): string {
    return `TextDocument: {
      content=${this.content},
      fontName=${this.fontName},
      fontSize=${this.fontSize}
    }`;
  }

  public createState() {
    return new TextDocumentState(this.content, this.fontName, this.fontSize);
  }

  public restore(state: ITextDocumentState) {
    this.content = state.getContent();
    this.fontName = state.getFontName();
    this.fontSize = state.getFontSize();

  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void { 
    this.content = content;
  }

  public getFontName(): string {
    return this.fontName;
  }

  public setFontName(fontName: string): void { 
    this.fontName = fontName;
  }

  public getFontSize(): number {
    return this.fontSize;
  }

  public setFontSize(fontSize: number): void { 
    this.fontSize = fontSize;
  }
}