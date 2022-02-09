import { displayResult } from './displayResult';
import { ResultHandler } from './resultHandler';

export class App {
  private readonly buttonsContainer = document.getElementById(
    'buttons'
  ) as HTMLDivElement;
  private readonly evaluateButton = document.getElementById(
    'evaluate'
  ) as HTMLButtonElement;
  private readonly resultHandler = new ResultHandler();

  init() {
    this.buttonsContainer.addEventListener('click', (e) => {
      const target = e.target;

      if (target instanceof HTMLButtonElement) {
        displayResult(this.resultHandler.add(target.innerText).get());
      }
    });

    this.evaluateButton.addEventListener('click', () => {
      displayResult(this.resultHandler.evaluate().get());
    });
  }
}
