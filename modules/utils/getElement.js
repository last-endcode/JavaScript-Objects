export default function (selection) {
  const element = document.querySelector(selection);
  // if exist getElement if not false
  if (element) {
    return element;
  }
  throw Error(`Your element can't find ${selection}`);
}
