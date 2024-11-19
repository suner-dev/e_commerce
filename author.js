export class Author {
  static #counter = 0
  #id
  #name
  #birthYear
  #biography

  constructor(name, birthYear, biography) {
    this.#name = name
    this.#birthYear = birthYear
    this.#biography = biography
    this.#id = ++Author.#counter
  }

  get name() {
    return this.#name
  }

  get year() {
    return this.#birthYear
  }

  get biography() {
    return this.#biography
  }

  get id() {
    return this.#id
  }

  set name(value) {
    this.#name = value
  }

  set year(value) {
    this.#birthYear = value
  }

  set biography(value) {
    this.#biography = value
  }
}