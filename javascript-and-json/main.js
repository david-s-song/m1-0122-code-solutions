var books = [
  {
    isbn: '9780743273565',
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald'
  },
  {
    isbn: '9780330241441',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  },
  {
    isbn: '9787543321724',
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  }
];

console.log('typeof books:', typeof books);

var jBooks = JSON.stringify(books);
console.log('books:', jBooks);
console.log('typeof jBooks:', typeof jBooks);

var student = '{"id" : "949309", "name" : "david"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentObj = JSON.parse(student);
console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
