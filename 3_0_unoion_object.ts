// Union of types
const books =
  Math.random() > 0.5
    ? { name: "The Princes", origin: "Itely", pages: 25 }
    : { name: "Understand yourself", origin: "Pakistan", words: 25 };
console.log(books);

// another examples
type PoemwithPages = { name: string; pages: number; rymes?: number };
type poemwithRymes = { name: string; rymes: number; pages?: number };
type Poem = PoemwithPages | poemwithRymes;
const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Princes", pages: 25 }
    : { name: "The Princes", rymes: 25 };

poem.name;
poem.pages;
poem.rymes;

type imranInPakistan = { name: string; age: number; type: string };

type imranInOverseas = {
  name: string;
  age: number;
  type: string;
  niclname: string;
};

type Imran = imranInPakistan | imranInOverseas;

const imran: Imran =
  Math.random() > 0.5
    ? { name: "Imran", age: 35, type: "Pakistan" }
    : { name: "Imran", age: 22, type: "Overseas", niclname: "Alexander" };

if (imran.type === "pakistan") {
  console.log(`He is pakistani so call him ${imran.name}`);
} else {
  console.log(`He is not pakistani so call him ${imran.name}`);
}
