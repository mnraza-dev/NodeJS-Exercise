import path from "path";
console.log(path.basename("/home/user/documents/example.txt"));

console.log(path.extname("/home/user/documents/example.txt"));

console.log(path.basename("/home/user/documents/example.txt", ".txt"));

console.log(path.dirname("/home/user/documents/example.txt"));

console.log(path.join("/home/user/documents", "example.txt"));

console.log(path.resolve("/home/user/documents", "..", "example.txt"));

console.log(path.isAbsolute("/home/user/documents"));

console.log(
  path.relative("/home/user/documents", "/home/user/documents/example.txt")
);

console.log(path.parse("/home/user/documents/example.txt"));

console.log(
  path.format({ root: "/", dir: "/home/user/documents", base: "example.txt" })
);

console.log(path.win32.parse("C:\\Users\\User\\Documents\\example.txt"));

console.log(path.posix.parse("/home/user/documents/example.txt"));

console.log(path.sep);

console.log(path.delimiter);

console.log(path.normalize("/home/user/documents/../example.txt"));

console.log(path.isAbsolute("example.txt"));

console.log(path.isAbsolute("./example.txt"));

console.log(path.isAbsolute("../example.txt"));

console.log(path.join("mnraza", "documents", "React-App", "src", "App.js"));
// move a level up in the directory structure
console.log(
  path.join("mnraza", "documents", "React-App", "src", "App.js", "..")
);

