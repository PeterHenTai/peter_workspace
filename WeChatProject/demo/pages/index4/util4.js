
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// Get date
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // return [year, month, day].map(formatNumber).join('/')
  return [month, day].map(formatNumber).join('/')
}


function last_days(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    result.push(formatDate(d))
  }

  return result;
}


module.exports = {
  formatDate: formatDate,
  last_days: last_days
}