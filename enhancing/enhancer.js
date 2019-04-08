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
  return { ...item };
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
  return { ...item };
}
