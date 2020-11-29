var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
     res.sendFile('homepage.html', {root: 'views'})
});

router.get('/add', function(req, res, next) {
     res.sendFile('add.html', {root: 'views'})
});

router.get('/show', function(req, res, next) {
     res.sendFile('show.html', {root: 'views'})
});

router.get('/find', function(req, res, next) {
     res.sendFile('find.html', {root: 'views'})
});

router.get('/remove', function(req, res, next) {
     res.sendFile('remove.html', {root: 'views'})
});

router.get('/update', function(req, res, next) {
     res.sendFile('update.html', {root: 'views'})
});

router.get('/extra_credit', function(req, res, next) {
     res.sendFile('extra_credit.html', {root: 'views'})
});

module.exports = router;
