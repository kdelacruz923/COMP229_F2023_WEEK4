import  express from 'express';
const router = express.Router();
export default router;


/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index', { title: 'Express' });
});

// module.exports = router;   // javascript

console.log(path.join(__dirname, 'node_module', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'));
