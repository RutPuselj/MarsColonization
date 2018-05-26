const INITAL_COST = 400;

upgradeCost = currentLevel => {
  let res = INITAL_COST;
  let exp = currentLevel;
  while (exp--) {
    res *= 2;
  }
  return res;
};

calculateResources = (resources, lastChange, level) => {
  return (
    resources + Math.ceil((new Date() - lastChange) * level / 1000)
  );
};

module.exports = {
  calculateResources: calculateResources,
  upgradeCost: upgradeCost
};
