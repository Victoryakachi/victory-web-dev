// The web is built with HTML strings like <em>Yay</em> which draws Yay as italic text. 
// In this example, the "em" tag makes <em> and </em> which surround the word "Yay". 
// Given tag and word strings, create the HTML string with tags around the word, e.g. <em>Yay</em>.

// Examples

// makeTags('em', 'Yay') → <em>Yay</em>
// makeTags('em', 'Hello') → <em>Hello</em>
// makeTags('cite', 'Yay') → <cite>Yay</cite>

function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}
console.log(makeTags('em', 'Yay'))
console.log(makeTags('em', 'Hello'))
console.log(makeTags('cite', 'Yay'))