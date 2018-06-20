//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using TraineeWebApi.Models;

//namespace TraineeWebApi.Controllers
//{
//    public class StudentSubjectInfoController : ApiController
//    {
//        private UniverContext db = new UniverContext();

//        // GET: api/StudentSubjectInfo
//        public IEnumerable<string> Get()
//        {
//            return new string[] { "value1", "value2" };
//        }

//        // GET: api/StudentSubjectInfo/5
//        public IQueryable<StudentSubjectInfo> GetStudentSubjectsInfo(int id)
//        {
//            var ww = db.StudentSubjects           //.Include(s => s.Student).Include(s => s.Subject)
//                .Where(s => s.SubjectID == id)
//                .Select(s => new StudentSubjectInfo
//                {
//                    Name = s.Student.Name,
//                    LessonCount = s.Subject.LessonCount,
//                    LessonsFill = s.LessonsFill,
//                    LessonMark = s.LessonMark,
//                    ExamMark = s.ExamMark,
//                    SubjectID = s.SubjectID
//                });

//            return ww;
//        }

//        // POST: api/StudentSubjectInfo
//        public void Post([FromBody]string value)
//        {
//        }

//        // PUT: api/StudentSubjectInfo/5
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE: api/StudentSubjectInfo/5
//        public void Delete(int id)
//        {
//        }
//    }
//}
