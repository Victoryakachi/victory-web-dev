// You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2.
// If they are all 2, return 10. Otherwise if they are all the same, return 5.
// If both b and c are different from a, return 1. Otherwise, return 0.

// Examples

// redTicket(2, 2, 2) → 10
// redTicket(2, 2, 1) → 0
// redTicket(0, 0, 0) → 5

function redTicket(a, b, c) {
    const otherValues = new Set([b, c]);

    if (a === b && b === c) {
        return a === 2 ? 10 : 5;
    }

    return otherValues.has(a) ? 0 : 1;
}