const Bar = require.requireActual('../FileWithTests');

describe('Bar', () => {
  it('sets baz', () => {
    const bar = new Bar();
    expect(bar.baz).toBeDefined();
  });
});
