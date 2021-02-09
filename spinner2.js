let rotations = 5;

for (let j = 0; j < rotations * 600; j += 600) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 0 + j);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 200 + j);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 400 + j);
  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, 600 + j);
}