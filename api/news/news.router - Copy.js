const { getNews,getCategory,createNews,createCat,createComment,getComment,getLike,createLike,updateNews,deleteNews,deleteLike,getNewsByUserId,getNewsById
 } = require("./news.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const multer = require('multer')
//const upload = multer({ dest: 'images/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../Frontend/public/assets/img')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, 'post-slide-1.jpg')
    }
  })
  
  const upload = multer({ storage: storage })
  






router.get("/",  getNews);
router.get("/category",  getCategory);
router.get("/getcomment", getComment);
router.get("/getlike", getLike);
router.get("/user/:id",   getNewsByUserId);
router.get("/:id",   getNewsById);
router.post("/add", createNews);
router.post("/addcat", createCat);
router.post("/addcomment", createComment);
router.post("/addlike", createLike);
router.put("/update/:id", updateNews);
router.put("/delete/:id", deleteNews);
router.put("/adddislike/:id", deleteLike);

// router.get('/images/:imageName', (req, res) => {
//     const imageName = req.params.imageName
//     const readStream = fs.createReadStream(`images/${imageName}`)
//     readStream.pipe(res)
//   })
  
router.post('/images', upload.single('image'), (req, res) => {
    // const imagePath = req.file.path
    // console.log(imagePath)
    // const description = req.body.description
  
    // Save this data to a database probably
  
   // console.log(description, imagePath)
   // res.send({description, imagePath})
  })
module.exports = router;