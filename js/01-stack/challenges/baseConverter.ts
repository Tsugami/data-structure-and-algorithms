import Stack from '../Stack';

export function baseConverter(decNumber: number, base: number, remStack: Stack<string>): string {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(String(rem));
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}
