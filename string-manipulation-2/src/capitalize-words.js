/* exported capitalizeWords */
function capitalizeWords(string) {
  var captialFirst = string.toLowerCase().split(' ');
  for (var i = 0; i < captialFirst.length; i++) {
    captialFirst[i] = captialFirst[i][0].toUpperCase() + captialFirst[i].slice(1);
  } return captialFirst.join(' ');
}
