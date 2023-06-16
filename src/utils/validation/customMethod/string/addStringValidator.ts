import addMinAndMax from './internal/minAndMax';
import addPassword from './internal/password';
import addRequiredLetters from './internal/requiredLetters';
import addUsableLetters from './internal/usableLetters';

const addStringValidator = () => {
  addMinAndMax();
  addRequiredLetters();
  addUsableLetters();
  addPassword();
};

export default addStringValidator;
