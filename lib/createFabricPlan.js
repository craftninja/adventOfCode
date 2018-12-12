module.exports = data => {
  const fabricPlan = [];
  orders = data.split("\n").forEach(order => {
    if (!order) return;
    const origin = order.match(/\d+,\d+/)[0].split(',');
    const originX = Number(origin[0]);
    const originY = Number(origin[1]);
    const size = order.match(/\d+x\d+/)[0].split('x');
    const width = Number(size[0]);
    const height = Number(size[0]);
    for (var x = originX; x < width + originX; x++) { //width
      for (var y = originY; y < height + originY; y++) { //height
        if (!fabricPlan[y]) fabricPlan[y] = []
        fabricPlan[y][x] = (fabricPlan[y][x] ? fabricPlan[y][x] +=1 : 1)
      };
    };
  });
  return fabricPlan;
};
