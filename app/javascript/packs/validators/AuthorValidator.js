const AuthorValidator = (input) => {
  let errors = [];
  const words = input.split(' ');
  if (words.length < 2) {
    errors.push('Less than two words');
  } else {
    words.map((word) => {
      const firstCharacter = word[0];
      if (word.length <= 2) {
        errors.push('Word length is less than 2 symbols')
      }
      if(firstCharacter != firstCharacter.toUpperCase()){
        errors.push(`First character of word ${word} is not capitalized`);
      }
    });
  }
  if (input.indexOf('.') < 0) {
    errors.push('Doesn\'t contain dot');
  }
  return errors;
};
export default AuthorValidator;