var db = require('../dbconnection'); //reference of dbconnection.js

var Course = {
    getAllCourses: function (callback) {
        return db.query("Select * from course", callback);
    },
    getCourseById: function (id, callback) {
        return db.query("select * from course where Id=?", [id], callback);
    },
    addCourse: function (Course, callback) {
        return db.query("Insert into course values(?,?)", [Course.Id, Course.Name], callback);
    },
    deleteCourse: function (id, callback) {
        return db.query("delete from course where Id=?", [id], callback);
    },
    updateCourse: function (id, Course, callback) {
        return db.query("update course set Name=? where Id=?", [Course.Name, id], callback);
    }
};
module.exports = Course;