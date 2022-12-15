import WindowTemplate from "./WindowTemplate";

export default class Window extends WindowTemplate {
  protected onClosing() {
      console.log('Processing window close');
  }

  protected onClosed() {}
}