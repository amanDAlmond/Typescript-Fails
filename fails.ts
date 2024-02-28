type Word = 'a' | 'list' | 'of' | 'words' | 'i';

type Nonsense = 'blork' | 'ywth';

type Letter = 'a' | 'i';

type StringsOfLetters = Word | Nonsense;

const doWordStuff = (args: { word: StringsOfLetters }) => {
  console.log(args);
  return args.word;
};

const aLetter: Letter = 'a';
const args = { word: aLetter };
const typed = doWordStuff(args);

const aLetter2 = 'a';
const args2 = { word: aLetter2 };
const typed2 = doWordStuff(args2);

const aLetter3 = 'a' as const;
const args3 = { word: aLetter3 };
const typed3 = doWordStuff(args3);

const aWord = 'list';
const args4 = { word: aWord };
const typed4 = doWordStuff(args4);

type AnObject = {
  key: Word | Nonsense;
};

type ASpecificObject = {
  key: Letter;
};

const doObjectStuff = (args: AnObject) => {
  console.log('Not Important');
  return args.key;
};

const doSpecificObjectStuff = (specificArgs: ASpecificObject) => {
  console.log('Not Important');
  return specificArgs.key;
};

const stuffFactory = (objectFunction: (args: AnObject) => any) => {
  console.log('Really not important');
  return objectFunction;
};

// Typescript SUCCESSFULLY casts ASpecificObject to AnObject here
const aSpecificObject: ASpecificObject = {
  key: 'a',
};
const typed5 = doObjectStuff(aSpecificObject);

// Typescript COMPLETELY FAILS TO DO THE SAME HERE
const typed6 = stuffFactory(doSpecificObjectStuff);
