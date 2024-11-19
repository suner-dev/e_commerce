export class Library {
  #books = new Map()
  #categories = new Set()
  #authors = new Map()

  constructor() {
  }

  get books(){
    return this.#books
  }

  get categories() {
    return this.#categories
  }

  get authors() {
    return this.#authors
  }

  addBook(book) {
    this.#addCategories(book.category)
    this.#addAuthor(book.author)

    if (!this.#books.has(book.id)) {
      this.#books.set(book.id, book)
    }
  }

  #addCategories(category) {
    if (!this.#categories.has(category)) {
      this.#categories.add(category)
    }
  }

  #addAuthor(author) {
    if (!this.#authors.has(author.id)) {
      this.#authors.set(author.id, author)
    }
  }
}