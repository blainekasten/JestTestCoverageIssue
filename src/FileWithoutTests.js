class Foo {
  constructor(arg1:number) {
    this.baz = 'lorem ipsum';

    if (arg1 === 3) {
      this.baz = 'ipsum lorem';
    }
  }
}

module.exports = Foo;
