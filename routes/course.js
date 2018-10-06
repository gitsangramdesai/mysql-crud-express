var express = require('express');
var router = express.Router();
var Course = require('../models/Course');


/*getbyid */
router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    Course.getCourseById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }else {
    Course.getAllCourses(function (err, rows) {
      if (err) {
        console.log("error");
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

/*save new */
router.post('/', function (req, res, next) {
  console.log(req.body);
  Course.addCourse(req.body, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(req.body);//or return count for 1 &amp;amp;amp; 0
    }
  });
});

/*delete */
router.delete('/:id', function (req, res, next) {
  Course.deleteCourse(req.params.id, function (err, count) {
    if (err) {
      res.json(err);
    } else {
      res.json(count);
    }
  });
});

/*update*/
router.put('/:id', function (req, res, next) {
  Course.updateCourse(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
