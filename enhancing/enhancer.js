module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhanced = item.enhancement;
  if (enhanced < 20){
    enhanced += 1;
  }

  return { 
    ...item,
    enhancement: enhanced
  };
}

function fail(item) {
  let { enhancement, durability } = item;

  if (enhancement < 15) {
    durability -= 5;
  } else if (enhancement >= 15) {
    durability -= 10;
  } else if (enhancement >= 17) {
    enhancement -= 1;
  }

  return { 
    ...item,
    enhancement,
    durability
  };
}

function repair(item) {
  if(typeof item !== 'object'){
    return false;
  } else {
    return { 
      ...item,
      durability: 100 
    };
  }
}

function get(item) {
  let { name } = item;

  item.enhancement !== 0
    ? name = `[+${item.enhancement}] ${item.name}`
    : null;
  return { 
    ...item,
    name
  };
}
