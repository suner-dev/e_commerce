export class Book {
  static #counter = 0
  #id
  #title
  #author
  #category
  #edition
  #year

  constructor(title, author, category, edition, year) {
    this.#title = title
    this.#author = author
    this.#category = category
    this.#edition = edition
    this.#year = year
    this.#id = ++Book.#counter;
  }

  get title() {
    return this.#title
  }

  get author() {
    return this.#author
  }

  get category() {
    return this.#category
  }

  get edition() {
    return this.#edition
  }

  get year() {
    return this.#year
  }

  get id() {
    return this.#id
  }

  set title(value) {
    this.#title = value
  }

  set author(value) {
    this.#author = value
  }

  set category(value) {
    this.#category = value
  }

  set edition(value) {
    this.#edition = value
  }

  set year(value) {
    this.#year = value
  }
}