const createFabricPlan = require('./createFabricPlan');

module.exports = (data) => {
  const fabricPlan = createFabricPlan(data);
  const overages = flatten(fabricPlan).reduce((overageSum, unit) => {
    return unit > 1 ? overageSum +=1 : overageSum
  }, 0);
  return overages;
};

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((flattenedArray, array) => {
    return flattenedArray.concat(array);
  }, []);
};
