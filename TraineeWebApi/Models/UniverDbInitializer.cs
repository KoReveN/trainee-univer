using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TraineeWebApi.Models
{
    
        //DropCreateDatabaseAlways
    public class UniverDbInitializer : DropCreateDatabaseIfModelChanges<UniverContext>
    {
        protected override void Seed(UniverContext db)
        {
            Group g1 = new Group { Name = "КП-051" };
            Group g2 = new Group { Name = "РЕ-032" };
            Group g3 = new Group { Name = "КС-051" };


            Subject sub1 = new Subject { Name = "Математика", Teacher = "Федосеева А.Г.", LessonCount = 120 };
            Subject sub2 = new Subject { Name = "История", Teacher = "Астахов В.С.", LessonCount = 98 };
            Subject sub3 = new Subject { Name = "Физика", Teacher = "Куприн А.И.", LessonCount = 67 };
            Subject sub4 = new Subject { Name = "Химия", Teacher = "Никитин Р.Н.", LessonCount = 85 };
            Subject sub5 = new Subject { Name = "ООП", Teacher = "Мищенко К.А.", LessonCount = 167 };
            Subject sub6 = new Subject { Name = "Геометрия", Teacher = "Реплянчук А.С.", LessonCount = 202 };


            Student s1 = new Student { Name = "Петров", Age = 17, Group = g1 };
            Student s2 = new Student { Name = "Смирнов", Age = 19, Group = g1 };
            Student s3 = new Student { Name = "Олег", Age = 20, Group = g1 };
            Student s4 = new Student { Name = "Саша", Age = 21, Group = g1 };
            Student s5 = new Student { Name = "Никита", Age = 21, Group = g2 };
            Student s6 = new Student { Name = "Лена", Age = 19, Group = g2 };
            Student s7 = new Student { Name = "Света", Age = 18, Group = g2 };
            Student s8 = new Student { Name = "Настя", Age = 20, Group = g2 };
            Student s9 = new Student { Name = "Оксана", Age = 20, Group = g3 };
            Student s10 = new Student { Name = "Миша", Age = 21, Group = g3 };
            Student s11 = new Student { Name = "Женя", Age = 19, Group = g3 };
            Student s12 = new Student { Name = "Павел", Age = 18, Group = g3 };


            g1.Subjects = new List<Subject> { sub1, sub2, sub3, sub4, sub5, sub6 };
            g2.Subjects = new List<Subject> { sub1, sub5, sub6 };
            g3.Subjects = new List<Subject> { sub1, sub2, sub3, sub4 };


            List<Group> gList = new List<Group> { g1, g2, g3 };
            List<Subject> subList = new List<Subject> { sub1, sub2, sub3, sub4, sub5, sub6 };
            List<Student> sList = new List<Student> { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12 };


            List<StudentSubject> ssList = GetStudentSubjectList(sList);


            db.Groups.AddRange(gList);
            db.Students.AddRange(sList);
            db.Subjects.AddRange(subList);
            db.StudentSubjects.AddRange(ssList);


            base.Seed(db);
        }



        private List<StudentSubject> GetStudentSubjectList(List<Student> sList)
        {
            List<StudentSubject> ssList = new List<StudentSubject>();
            Random rand = new Random();


            foreach (Student student in sList)
            {
                foreach (Subject subject in student.Group.Subjects)
                {
                    ssList.Add(new StudentSubject {
                        Student = student,
                        Subject = subject,
                        LessonsFill = rand.Next(0, subject.LessonCount),
                        LessonMark = rand.Next(0,100),
                        ExamMark = rand.Next(0,100)
                    });

                }
            }

            return ssList;
        }

    }
}



