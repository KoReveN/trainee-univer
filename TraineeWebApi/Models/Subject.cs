using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TraineeWebApi.Models
{
    public class Subject
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Teacher { get; set; }
        public int LessonCount { get; set; }

        public ICollection<Group> Groups { get; set; }
        public ICollection<StudentSubject> StudentSubjects { get; set; }
        //public ICollection<Student> Students { get; set; }


        public Subject()
        {
            Groups = new List<Group>();
            StudentSubjects = new List<StudentSubject>();
        }
    }
}

//class Subject
//{
//    constructor(id, name, teacher, lessons_count)
//    {
//        this.id = id;
//        this.name = name;
//        this.teacher = teacher;
//        this.lessons_count = lessons_count;
//    }

//}