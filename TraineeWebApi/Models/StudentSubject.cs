using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TraineeWebApi.Models
{
    public class StudentSubject
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int StudentID { get; set; }
        public int SubjectID { get; set; }
        public int LessonsFill { get; set; } // Посещено часов
        public float LessonMark { get; set; } // Средний бал
        public float ExamMark { get; set; } // Экзамен

        public Student Student { get; set; }
        public Subject Subject { get; set; }
    }


    public class StudentSubjectInfo 
    {
        public int StudentID { get; set; }
        public int SubjectID { get; set; }
        public int LessonsFill { get; set; } // Посещено часов
        public float LessonMark { get; set; } // Средний бал
        public float ExamMark { get; set; } // Экзамен
        public string Name { get; set; }
        public int LessonCount { get; set; }
        public int GroupId { get; set; }
        


    }
}



// 


//class StudentSubject
//{
//    constructor(id, studentID, subjectID, lessons_fill, avg_mark, exam_mark)
//    {
//        this.id = id;
//        this.studentID = studentID;
//        this.subjectID = subjectID;
//        this.lessons_fill = lessons_fill;
//        this.losson_mark = avg_mark;
//        this.exam_mark = exam_mark;
//    }
//}