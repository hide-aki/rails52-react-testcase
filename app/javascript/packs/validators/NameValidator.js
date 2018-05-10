const nameValidator = (input) => {
  let errors = [];
  const words = input.split(' ');
  if (words.length < 2) {
    errors.push('Less than two words');
  } else {
    words.map((word) => {
      if (word.length <= 2) {
        errors.push('Word length is less than 2 symbols')
      }
    })
    const firstWord = words[0];
    const firstCharacter = firstWord[0];
    if(firstCharacter != firstCharacter.toUpperCase()){
      errors.push('First character of word is not capitalized');
    }
  }
  if (input.indexOf('.') < 0) {
    errors.push('Doesn\'t contain dot');
  }
  return errors;
};
export default nameValidator;