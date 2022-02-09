import { evaluate } from './mathjsConfig';

export class ResultHandler {
  private result = '';

  get() {
    return this.result || '0';
  }

  add(digit: string) {
    if (digit === 'C') {
      this.result = '';
      return this;
    }

    this.result += digit;
    return this;
  }

  evaluate() {
    try {
      this.result = evaluate(this.result);
    } catch (error) {
      this.result = '';
    }
    return this;
  }
}
