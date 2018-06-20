using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TraineeWebApi.Models
{
    public class Student
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int GroupId { get; set; }

        public Group Group { get; set; }
        public ICollection<StudentSubject> StudentSubjects { get; set; }
        //public ICollection<Subject> Subjects { get; set; }


        public Student()
        {
            StudentSubjects = new List<StudentSubject>();
        }

    }
}


