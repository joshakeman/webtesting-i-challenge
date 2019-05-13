module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  item.durability = 100
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
