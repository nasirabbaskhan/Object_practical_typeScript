// Union of types
const books = Math.random() > 0.5
    ? { name: "The Princes", origin: "Itely", pages: 25 }
    : { name: "Understand yourself", origin: "Pakistan", words: 25 };
console.log(books);
const poem = Math.random() > 0.5
    ? { name: "The Princes", pages: 25 }
    : { name: "The Princes", rymes: 25 };
poem.name;
poem.pages;
poem.rymes;
const imran = Math.random() > 0.5
    ? { name: "Imran", age: 35, type: "Pakistan" }
    : { name: "Imran", age: 22, type: "Overseas", niclname: "Alexander" };
if (imran.type === "pakistan") {
    console.log(`He is pakistani so call him ${imran.name}`);
}
else {
    console.log(`He is not pakistani so call him ${imran.name}`);
}
export {};
