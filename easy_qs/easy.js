//
var majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (const key in obj) {
    if (obj[key] > nums.length / 2) {
      // console.log('this is key of obj', key);
      return parseInt(key);
    }
  }
  // return 'no majority found'
};

// console.log(majorityElement([1,2,1,2,2,3]));

//2774.

// Array.prototype.upperBound = function (target) {
//   let left = 0;
//   let right = this.length;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     if (this[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   return right;
// };

// [1, 4, 5].upperBound(2); // -1

//    [3, 4, 6, 6, 6, 6, 7].upperBound(6); // 5
// //  l         m         r

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
};

// console.log("index is", binarySearch([3, 4, 6, 6, 6, 6, 7], 7)); //5
// console.log("index is", binarySearch([1, 4, 5], 2)); //-1

//Hacker rank problem:

function plusMinus(arr) {
  // Write your code here
  let pluses = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros += 1;
    } else if (arr[i] < 0) {
      negatives += 1;
    } else if (arr[i] > 0) {
      pluses += 1;
    }
  }
  let plusRatio = (pluses / arr.length).toFixed(6);
  let minusRatio = (negatives / arr.length).toFixed(6);
  let zeroRatio = (zeros / arr.length).toFixed(6);

  return [plusRatio, minusRatio, zeroRatio];
}

// console.log(plusMinus([-1, -2, 1, 2, 4, 5, 0, 0]));

function generateStaircase(n) {
  const staircase = [];

  // Build the 2D array
  for (let i = 0; i < n; i++) {
    const row = [];

    // Add spaces
    for (let j = 0; j < n - i - 1; j++) {
      row.push(" ");
    }

    // Add hashtags
    for (let k = 0; k < i + 1; k++) {
      row.push("#");
    }

    staircase.push(row);
  }

  // Print the 2D array
  for (let i = 0; i < n; i++) {
    console.log(staircase[i].join(""));
  }
}

// Example usage:
// generateStaircase(5); // Change the argument to the desired height (e.g., 5)

// async function sleep(millis) {
//     await(setTimeout(100))
// }

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi!");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve(`Extra information + ${response}`);
  });
}

// makeRequest("Facebook")
//   .then((response) => {
//     console.log("Response received");
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Async and await helps to make promises easier to use.

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received");

    const processedRequest = await processRequest(response);
    console.log(processedRequest);
  } catch (error) {
    console.log(error);
  }
}

doWork();

//415. Add Strings

var addStrings = function (num1, num2) {
  let first = num1.length - 1;
  let second = num2.length - 1;
  let carry = 0;
  let result = "";

  // Iterate through both strings as long as there are digits left in either string
  while (first >= 0 || second >= 0 || carry > 0) {
    let digit1 = first >= 0 ? parseInt(num1[first]) : 0;
    let digit2 = second >= 0 ? parseInt(num2[second]) : 0;

    // Calculate the sum of two digits and the carry
    let sum = digit1 + digit2 + carry;

    // Calculate the new carry for the next iteration
    carry = Math.floor(sum / 10);

    // Prepend the current digit to the result string
    result = (sum % 10) + result;

    // Move to the next digit
    first--;
    second--;
  }

  return result;
};
//35. Search Insert Position:

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

//2723
var addTwoPromises = async function (promise1, promise2) {
  let values = await Promise.all([promise1, promise2]);
  return values.reduce((a, b) => a + b, 0);
};

//#2715

var cancellable = function (fn, args, t) {
  const timeout = setTimeout(function () {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timeout);
  };
};

// 2727:
var isEmpty = function (obj) {
  let keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
};

//

var removeElement = function (nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m);

  //join n elements of nums2 into the nums1 array:
  nums1.push(...nums2.slice(0, n));

  //now sort the array, so the TC is O(m+n):
  nums1.sort((a, b) => a - b);

  //bubble sort method:
  //   for (let i = 1; i < m+n; i++) {
  //     if (nums1[i-1] || nums1[i-1] === 0) {
  //       if (nums1[i] < nums1[i-1]) {
  //         let tmp = nums1[i-1]
  //         nums1[i-1] = nums1[i]
  //         nums1[i] = tmp
  //         i = i-2
  //       }
  //     }
  //   }

  //return nums1 as a result:
  return nums1;
};
