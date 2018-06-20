using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TraineeWebApi.Models
{
    public class UniverContext : DbContext
    {

        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects  { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<StudentSubject> StudentSubjects { get; set; }


    }
}