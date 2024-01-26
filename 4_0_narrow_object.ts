type PoemwithPages = { name: string; pages: number };
type poemwithRymes = { name: string; rymes: number };
type Poem = PoemwithPages | poemwithRymes;

const poem: Poem =
  Math.random() > 0.5 // ternory operator
    ? { name: "The Princes", pages: 25 }
    : { name: "The Princes", rymes: 25 };

if ("pages" in poem) {
  console.log(poem.pages);
} else {
  console.log(poem.rymes);
}
