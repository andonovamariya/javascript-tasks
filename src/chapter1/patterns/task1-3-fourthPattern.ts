console.log("Fourth pattern:");
const MAX_NUMBER: number = 5;
fourthPattern(MAX_NUMBER);

export function fourthPattern(maxNumber: number): void {
  let row: string = "",
    i: number,
    j: number,
    k: number,
    max: number = maxNumber;

  for (i = 0; i <= max; i++) {
    for (j = 1; j <= max - i + 1; j++) {
      row += " ";
    }
    for (k = 1; k <= i; k++) {
      row += k;
    }
    row += "\n";
  }

  for (i = 1; i <= max - 1; i++) {
    for (j = 1; j <= i + 1; j++) {
      row += " ";
    }

    for (k = 1; k <= max - i; k++) {
      row += k;
    }
    row += "\n";
  }

  console.log(row);
}
