const queDao = require("../dao/queDao");
const queService = {
  save: (data) => {
    console.log(2);
    const res = queDao.save(data);
    return res;
  },
};

module.exports = queService;
