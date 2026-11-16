// Given two strings, append them together (known as "concatenation") and return the result. 
// However, if the concatenation creates a double-char (the same character twice in a row), 
// then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc

function conCat(a,b){
    if (a.length > 0 && b.length > 0 && a[a.length - 1] === b[0]) {
        return a + b.slice(1);
    }
    return a + b;
}