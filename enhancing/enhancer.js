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



  // When enhancement fails

  //   If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  //   If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
  //   If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

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
