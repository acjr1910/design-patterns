import WindowTemplate from "./WindowTemplate";

export default class ChatWindow extends WindowTemplate {
  protected onClosing() {
      console.log('Processing chat window close');
  }

  protected onClosed() {
      console.log('Processing required after window has been closed');
  }
}