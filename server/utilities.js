const INITAL_COST = 400;

upgradeCost = (currentLevel) => {
  let res = 1;
  let exp = currentLevel + 1;
  while (exp--) {
    res *= INITAL_COST;
  }
  return res;
}

calculateResources = (resources, lastChange, level) => {
    return resources + Math.ceil((new Date() - lastChange) * level / 1000);
}

module.exports = {
  calculateResources : calculateResources,
  upgradeCost : upgradeCost
};