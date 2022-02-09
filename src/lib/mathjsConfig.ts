import { create, evaluateDependencies } from 'mathjs';

const { evaluate } = create({ evaluateDependencies });

export { evaluate };
