class Bar {
  constructor(arg1:string) {
    this.baz = 'lorem ipsum';

    if (arg1 === '3') {
      this.baz = 'ipsum lorem';
    }
  }
}

module.exports = Bar;
