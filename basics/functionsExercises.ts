function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me`;
}

function isLeapYear(year: number): boolean {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else return false;
}
