// console.log("This is object file");
interface Imran {
  name: { firstName: string; middleName: string; lastName: string };
  age: number;
  residence: string;
  teaching: boolean;
  dob: Date;
  certification: string[];
}

let imran: Imran = {
  name: { firstName: "Nasir", middleName: "Abbas", lastName: "Mughal" },
  age: 9,
  residence: "multan",
  teaching: true,
  dob: new Date(),
  certification: ["javaScript", "Web development", "Web 3.0", "AWS"],
};
let ageof = imran.dob;
console.log(ageof);
