// nested objects
type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
  pages?: number; //optional property
};

const book: Book = {
  author: { firstName: "Nachli", lastName: "Machialli" },
  name: "The Princes",
  pages: 33,
};
const result1 = book.pages;
console.log(result1);
