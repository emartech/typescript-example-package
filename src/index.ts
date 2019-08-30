import { Sum } from './algebra/sum';

export const sum = (a: number, b: number) => new Sum().execute(a, b);
