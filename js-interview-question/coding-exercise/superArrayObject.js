/**
 * Count the occurrence of keys and convert the result into array of 
 * objects where each object belongs to one key and it's occurrence (count).
 * 
 * Example:-
 * [
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
    ] 

    SHOULD BE CONVERTED TO =
    [
    { language: 'JavaScript', count: 2 },
    { language: 'C++', count: 1 },
    { language: 'TypeScript', count: 1 }
    ]
 */

const sampleInput1 = [
  { language: "JavaScript" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "C++" },
];

const sampleInput2 = 
[
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' },
]

const getOccurance = (array, target) => {
  const occuranceObj = {};
  array.forEach((element) => {
    if (occuranceObj[element[target]]) {
      occuranceObj[element[target]]++;
    } else {
      occuranceObj[element[target]] = 1;
    }
  });
  return occuranceObj;
};

const converKeyToOccurance = (target, array) => {
  const occuranceObj = getOccurance(array, target);
  let superArr = [];
  for (const key in occuranceObj) {
    superArr = [...superArr, { [target]: key, count: occuranceObj[key] }];
  }
  return superArr;
};

console.log(converKeyToOccurance("language", sampleInput1));

console.log(converKeyToOccurance("framework", sampleInput2));
