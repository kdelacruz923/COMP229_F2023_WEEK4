import  express from 'express';
const router = express.Router();
export default router;


/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'Express' });
  console.log(`Request received for: ${req.url}`);
  next();
});

// module.exports = router;   // javascript

