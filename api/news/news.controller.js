const { getNews,getCategory,createNews,createCat,createComment,getComment,createLike,getLike,updateNews,updateNewsStatus,deleteNews,deleteLike, getNewsByUserId,getNewsById
} = require("./news.service");

module.exports = {
  createNews: (req, res) => {
    const body = req.body;
    console.log(body);
    createNews(body, (err, results) => {
      
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createCat: (req, res) => {
    const body = req.body;
    console.log(body);
    createCat(body, (err, results) => {
      
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  
  createComment: (req, res) => {
    const body = req.body;
    console.log(body);
    createComment(body, (err, results) => {
      console.log('=3-------1=',results);
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createLike: (req, res) => {
    const body = req.body;
    console.log(body);
    createLike(body, (err, results) => {
      console.log('=3-------1=',results);
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database Connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
   getNewsByUserId: (req, res) => {
    const id = req.params.id;
    getNewsByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
   getNewsById: (req, res) => {
    const id = req.params.id;
    getNewsById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getNews: (req, res) => {
    getNews((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        //success: 1,
        data: results,
      });
    });
  },
  getCategory: (req, res) => {
    getCategory((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        //success: 1,
        data: results,
      });
    });
  },
  getComment: (req, res) => {
    getComment((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        //success: 1,
        data: results,
      });
    });
  },
  getLike: (req, res) => {
    getLike((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        //success: 1,
        data: results,
      });
    });
  },
  updateNews: (req, res) => {
    const body = req.body;
  
    updateNews(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  updateNewsStatus: (req, res) => {
    const body = req.body;
    updateNewsStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteNews: (req, res) => {
    const data = req.body;
    deleteNews(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "...Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "News deleted successfully",
        
      });
    });
  },
  deleteLike: (req, res) => {
    const data = req.body;
    deleteLike(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "...Record not found",
        });
      }
      return res.json({
        success: 1,
        message: "News deleted successfully",
        
      });
    });
  },

};
