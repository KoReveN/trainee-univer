"use strict";
//document.write(Math.PI + "</br>");
//document.write("testttt");

class Student
{
  constructor (id, name, age,groupID)
  {
    this.id = id;
    this.name = name;
    this.age = age;
    this.groupID = groupID;
  }
}


class StudentSubject
{
  constructor (id, studentID, subjectID, lessons_fill, avg_mark, exam_mark)
  {
    this.id = id;
    this.studentID = studentID;
    this.subjectID = subjectID;
    this.lessons_fill = lessons_fill;
    this.losson_mark = avg_mark;
    this.exam_mark = exam_mark;
  }
}


class GroupSubject
{
  constructor (groupID, subjectID)
  {
    this.groupID = groupID;
    this.subjectID = subjectID;
  }
}

class Subject
{
  constructor (id, name, teacher, lessons_count)
  {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons_count = lessons_count;
  }

}


class Group
{
  constructor (id, name)
  {
    this.id = id;
    this.name = name;
  }

}




var Students = [
  new Student(1, "Петров", 19, 1),
  new Student(2, "Смирнов", 19, 1),
  new Student(3, "Олег", 19, 1),
  new Student(4, "Саша", 19, 1),
  new Student(5, "Никита", 19, 2),
  new Student(6, "Лена", 19, 2),
  new Student(7, "Света", 19, 2),
  new Student(8, "Настя", 19, 2),
  new Student(9, "Оксана", 19, 3),
  new Student(10, "Миша", 19, 3),
  new Student(11, "Женя", 19, 3),
  new Student(12, "Павел", 19, 3)
];


var Groups = [
  new Group (1, "КП-051"),
  new Group (2, "РЕ-032"),
  new Group (3, "КС-051")
];


var Subjects = [
  new Subject(1, "Математика","Федосеева А.Г.",120),
  new Subject(2, "История","Астахов В.С.",98),
  new Subject(3, "Физика","Куприн А.И.",67),
  new Subject(4, "Химия","Никитин Р.Н.",85),
  new Subject(5, "ООП","Мищенко К.А.",167),
  new Subject(6, "Геометрия","Реплянчук А.С.",202),
];



var GroupsSubjects = [
  new GroupSubject(1,1),
  new GroupSubject(1,2),
  new GroupSubject(1,3),
  new GroupSubject(1,4),
  new GroupSubject(1,5),
  new GroupSubject(1,6),
  new GroupSubject(2,1),
  new GroupSubject(2,5),
  new GroupSubject(2,6),
  new GroupSubject(3,1),
  new GroupSubject(3,2),
  new GroupSubject(3,3),
  new GroupSubject(3,4)

];


var StudentsSubjects = [];

 var j = 1;
for (var i = 0; i < Students.length; i++) {
  for (var y = 0; y < Subjects.length; y++) {

    for (var q = 0; q < GroupsSubjects.length; q++) {
      if (GroupsSubjects[q].groupID == Students[i].groupID &
      GroupsSubjects[q].subjectID == y+1) {

             // losson fill - random from max in subject
            StudentsSubjects[j-1] = new StudentSubject(j, i+1, y+1, getRandomInt(10, Subjects[y].lessons_count),getRandomInt(50,99),getRandomInt(50,99));
      //      console.log(StudentsSubjects[j-1]);
            j++;
      }
    }
  }
}

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}




// Получить список ID предметов у группы
function getListSubjectIdForGroup(groupID) {
  // Получаю масим индексов предметов в выбранной группе
  var grSubjectsId = [];
  for (var i = 0; i < GroupsSubjects.length; i++) {
    if (GroupsSubjects[i].groupID == groupID) {
      grSubjectsId[grSubjectsId.length] = GroupsSubjects[i].subjectID;
    }
  }
  return grSubjectsId;
}

