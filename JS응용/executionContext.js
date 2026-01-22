const color = 'blue';

const firstLevel = () => {
  let color = 'red';
  
  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1)
  };
  
  secondLevel();
  console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)