const useSpinner = () => {
  let spinner = ['|', '/', '-', '\\', '|', '/ ', '-', '\\', '|'];
  let timeout = 100;

  for (const spin of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}    `);
    }, timeout);
    timeout += 200;
  }
};

useSpinner();
