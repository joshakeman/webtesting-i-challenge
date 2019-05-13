module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if (item.enhancement === 20) {
    return { ...item }
  } else {
    item.enhancement++
    return { ...item }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100

  return { ...item };
}

function get(item) {
  return { ...item };
}
