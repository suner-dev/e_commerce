import { Book } from './book'
import { Author } from './author'
import { Library } from './library'

const author = new Author(
  'John Doe',
  1991,
  'Smart and love writing'
)
const book1 = new Book(
  'The rabbit',
  author,
  'Fiction',
  7,
  '2015'
)
 const librairie = new Library()

librairie.addBook(book1)

console.log(librairie.books)
console.log(librairie.categories)
console.log(librairie.authors)






