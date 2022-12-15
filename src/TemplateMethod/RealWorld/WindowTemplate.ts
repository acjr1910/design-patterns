export default class WindowTemplate {
  public close(): void {
    this.onClosing();

    console.log('Executing required operations for all windows');

    this.onClosed();
  };

  protected onClosing(): void {}

  protected onClosed(): void {}
}