using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TraineeWebApi.Models;

namespace TraineeWebApi.Controllers
{
    public class StudentSubjectsController : ApiController
    {
        private UniverContext db = new UniverContext();

        // GET: api/StudentSubjects
        public IQueryable<StudentSubject> GetStudentSubjects()
        {
            //return db.StudentSubjects.Include(s => s.Subject); // Работает
            return db.StudentSubjects.Include(s => s.Subject).Include(s => s.Student);//

            //.Include(s => s.Student).Include(s => s.Subject)

            //foreach (var item in w)
            //{
            //    var aaa = item.ExamMark;
            //}
            //return w;
        }


        // GET: api/StudentSubjects/5
        public IQueryable<StudentSubjectInfo> GetStudentSubjects(int id)
        {
            //.Include(s => s.Student).Include(s => s.Subject)
            var wsdw = db.StudentSubjects.Include(s => s.Student).Include(s => s.Subject)
                .Where(s => s.SubjectID == id)
                .Select(s => new StudentSubjectInfo
                {
                    StudentID = s.StudentID,
                    SubjectID = s.SubjectID,
                    LessonsFill = s.LessonsFill,
                    LessonMark = s.LessonMark,
                    ExamMark = s.ExamMark,
                    Name = s.Student.Name,
                    LessonCount = s.Subject.LessonCount,
                    GroupId = s.Student.GroupId
                });

            /// var sdas = wsdw;
            foreach (var item in wsdw)
            {
                var t = item.LessonCount;

    }
            //.Include(s => s.Student).Include(s => s.Subject)
            return wsdw;
        }



        //// GET: api/StudentSubjects/5
        //[ResponseType(typeof(StudentSubject))]
        //public IHttpActionResult GetStudentSubject(int id)
        //{
        //    StudentSubject studentSubject = db.StudentSubjects.Find(id);
        //    if (studentSubject == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(studentSubject);
        //}

        // PUT: api/StudentSubjects/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudentSubject(int id, StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentSubject.Id)
            {
                return BadRequest();
            }

            db.Entry(studentSubject).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentSubjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/StudentSubjects
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult PostStudentSubject(StudentSubject studentSubject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StudentSubjects.Add(studentSubject);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = studentSubject.Id }, studentSubject);
        }

        // DELETE: api/StudentSubjects/5
        [ResponseType(typeof(StudentSubject))]
        public IHttpActionResult DeleteStudentSubject(int id)
        {
            StudentSubject studentSubject = db.StudentSubjects.Find(id);
            if (studentSubject == null)
            {
                return NotFound();
            }

            db.StudentSubjects.Remove(studentSubject);
            db.SaveChanges();

            return Ok(studentSubject);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentSubjectExists(int id)
        {
            return db.StudentSubjects.Count(e => e.Id == id) > 0;
        }
    }





}


