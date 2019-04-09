const rp = jest.genMockFromModule('request-promise');

function get(options) {
  console.log(options);
  return new Promise((resolve) => {resolve({})});
}


rp.get = get;

module.exports = rp;