// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());
  // 정답
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  console.log(fruits.split(","));
  // 두개만 반환
  console.log(fruits.split(",", 2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  const newArray = [...array];
  console.log(newArray);
  // 정답
  const array2 = [1, 2, 3, 4, 5];
  array2.splice(0, 2);
  console.log(array2);
  // 어레이를 유지하면 값을 추출
  const array3 = [1, 2, 3, 4, 5];
  const result = array3.slice(2, 5);
  console.log("원본:", array3, "추출:", result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
// Q5. find a student with the score 90
{
  for (let student of students) {
    if (student.score === 90) console.log(student);
  }
  // 정답
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students

{
  const studentsArray = new Array();
  for (let student of students) {
    if (student.enrolled) studentsArray.push(student);
  }
  console.log(studentsArray);
  // 정답
  const enrolledStudents = students.filter((student) => student.enrolled);
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreArray = new Array();
  for (let student of students) {
    scoreArray.push(student.score);
  }
  console.log(scoreArray);
  // 정답
  const scores = students.map((student) => student.score);
  console.log(scores);
}

// Q8. check if there is a student with the score lower than 50
{
  const scoreArray = new Array();
  for (let student of students) {
    scoreArray.push(student.score);
  }
  console.log(!scoreArray.every((value) => value >= 50));
  // 정답
  const existLowerThan50 = students.some((student) => student.score < 50);
  console.log(existLowerThan50);
  const exist2LowerThan50 = !students.every((student) => student.score >= 50);
  console.log(exist2LowerThan50);
}
console.clear();
// Q9. compute students' average score
{
  let total = new Number();
  for (let student of students) {
    total = total + student.score;
  }
  console.log(total / students.length);
  // 2nd
  const reducer2 = (accumulator, currentValue) =>
    accumulator + currentValue.score;
  const sum = students.reduce(reducer2, 0);
  const average = sum / students.length;
  console.log(average);

  //정답
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scoreArray = new Array();
  for (let student of students) {
    scoreArray.push(student.score);
  }
  console.log(scoreArray.toString());
  // 정답
  const scoreString = students.map((student) => student.score).join();
  console.log(scoreString);

  // 응용 50점 이하는 출력 제외
  const scoreFilterString = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(scoreString);
  // // 루프를 세번 돌게됨 reduce를 사용해 한번에 가능하게 해본다.
  const scoreOnceString = students.reduce((prev, curr, index) => {
    let comar = ",";
    if (index === 1) {
      comar = "";
    }
    if (curr.score >= 50) return `${prev}${comar}${curr.score}`;
    else return prev;
  }, "");
  console.log(scoreOnceString);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scoreArray = new Array();
  for (let student of students) {
    scoreArray.push(student.score);
  }
  scoreArray.sort();
  console.log(scoreArray.toString());
  // 정답
  const scores = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(scores);
}
