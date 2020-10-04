export class Product {
  constructor(productHash) {
    this.infos = productHash;
  }

  id() {
    return this.infos._id;
  }

  name() {
    return this.infos.name;
  }

  description() {
    return this.infos.description;
  }

  price() {
    return this.infos.price / 100;
  }

  image() {
    return this.infos.imageUrl;
  }

  colors() {
    return this.infos.colors;
  }

  numberOfColors() {
    return this.colors().length;
  }

  toJSON() {
    return this.infos;
  }
}
