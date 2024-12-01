const assertEqual = (actual, expected) => {
    if (actual === expected) {
      console.log(`🟢Assertion passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🔴Assertion failed: ${actual} !== ${expected}`);
    }
  
  };
  
//   // TEST CODE
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1, 1);

const countOnly = function (allItems, itemsToCount) {
    const results = {};
  
    for (const item of allItems) {
      console.log(item);
    }
  
    return results;
  };

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  
 

  console.log(assertEqual(result1["Jason"], 1));
  console.log(assertEqual(result1["Karima"], undefined));
  console.log(assertEqual(result1["Fang"], 2));
  console.log(assertEqual(result1["Agouhanna"], undefined));

const results = {};
return results;