import  express from 'express';
const router = express.Router();
export default router;


/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'Home' });
  
});

/* GET home page. */
router.get('/home', function(req, res, next)
{
  res.render('index', { title: 'Home' });
  
});

/* GET About page. */
router.get('/about', function(req, res, next)
{
  res.render('index', { title: 'About' });
  
});

/* GET Projects page. */
router.get('/projects', function(req, res, next)
{
  res.render('index', { title: 'Projects' });
  
});

/* GET home page. */
router.get('/services', function(req, res, next)
{
  res.render('index', { title: 'Services' });
  
});

router.get('/contact', function(req, res, next)
{
  res.render('index', { title: 'Services' });
  
});

// module.exports = router;   // javascript

