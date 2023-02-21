process.stdout.write('hello from spinner1.js... \rheyyy\n');
let count = 100;
let arr = ["|", "/", "-" , "\\"];
for (let i = 0; i < 4; i ++){
  setTimeout(() => {
    process.stdout.write('\r'+arr[i]+'   \n');
  }, count);
  count += 200;
}