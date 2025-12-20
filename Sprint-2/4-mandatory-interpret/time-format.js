function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> It is called 3 times, It is called once for hours, once for minutes, and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 (The first call is for totalHours. to be 0).

// c) What is the return value of pad is called for the first time?
// =============> "00" (The input num was 0. 0 becomes "0", and padding it with a zero at the start results in "00").


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1 Explanation: The return statement processes the template string from left to right. The last expression in the template literal is ${pad(remainingSeconds)}. 
// Since remainingSeconds was calculated as 1 (because 61 % 60 = 1), the value 1 is passed into pad as the argument num.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> "01" Explanation: On the last call, the input num is 1. The function converts this number to the string "1". 
// The .padStart(2, "0") method sees that the length is 1, so it adds one "0" to the front to make the length 2. The result is "01".
