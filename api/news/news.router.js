const { getNews, getCategory, createNews, createCat, createComment, getComment, getLike, createLike, updateNews, updateNewsStatus,deleteNews, deleteLike, getNewsByUserId, getNewsById
} = require("./news.controller");

const router = require("express").Router();
const multer = require('multer')
//const upload = multer({ dest: 'images/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Frontend/public/assets/img')
    },
    filename: function (req, file, cb) {
       
        cb(null, 'post-slide-1.jpg')
    }
})

const upload = multer({ storage: storage })

const multipleUpload = upload.fields([{ name: 'file1'},{ name: 'file2' },{ name: 'file3'}])
router.post('/uploadfile', multipleUpload, (req, res)=> {
    
    if(req.files){
        console.log("files uploaded");
        console.log(req.files);

    }

});






router.get("/", getNews);
router.get("/category", getCategory);
router.get("/getcomment", getComment);
router.get("/getlike", getLike);
router.get("/user/:id", getNewsByUserId);
router.get("/:id", getNewsById);
router.post("/add", createNews);
router.post("/addcat", createCat);
router.post("/addcomment", createComment);
router.post("/addlike", createLike);
router.put("/update/:id", updateNews);
router.put("/updatestatus/:id",  updateNewsStatus);
router.put("/delete/:id", deleteNews);
router.put("/adddislike/:id", deleteLike);

// router.get('/images/:imageName', (req, res) => {
//     const imageName = req.params.imageName
//     const readStream = fs.createReadStream(`images/${imageName}`)
//     readStream.pipe(res)
//   })


module.exports = router;