using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TraineeWebApi.Models
{
    public class Group
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Student> Students { get; set; }
        public ICollection<Subject> Subjects { get; set; }
       

        public Group()
        {
            Students = new List<Student>();
            Subjects = new List<Subject>();
        }
    }
}


//class Group
//{
//    constructor(id, name)
//    {
//        this.id = id;
//        this.name = name;
//    }

//}


//class GroupSubject
//{
//    constructor(groupID, subjectID)
//    {
//        this.groupID = groupID;
//        this.subjectID = subjectID;
//    }
//}

