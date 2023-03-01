const pool = require("../../config/database");
module.exports = {
  createNews: (data, callBack) => {
    pool.query(
      `insert into blog_table(title,  summary, content, hero_img, user_id, category_id, status) 
                values(?,?,?,?,?,?,?)`,
      [
        data.title,
        data.summary,
        data.content,
        data.hero_img,
        data.user_id,
        data.category_id,
        data.status,
      ],
      (error, results, fields) => {
        if (error) {
          console.log('/\\\/\/\\\/',error);
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  createCat: (data, callBack) => {
    console.log('dekhona',data);
    pool.query(
      `insert into category(title) 
                values(?)`,
      [
        data.category,
      
      ],
      (error, results, fields) => {
        if (error) {
          console.log('/\\\/\/\\\/',error);
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  createComment: (data, callBack) => {
    console.log('dekhona',data);
    pool.query(
      `insert into blog_comment(blog_id, comment, user_id, published_at) 
                values(?,?,?,?)`,
      [
        data.blog_id,
        data.comment,
        data.user_id,
        data.published_at
      
      ],
      (error, results, fields) => {
        if (error) {
          console.log('/\\\/\/\\\/',error);
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  createLike: (data, callBack) => {
    console.log('dekhona',data);
    pool.query(
      `insert into blog_like(blog_id, user_id) 
                values(?,?)`,
      [
        data.blog_id,
        data.user_id,
      
      ],
      (error, results, fields) => {
        if (error) {
          console.log('/\\\/\/\\\/',error);
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  getNews: (callBack) => {
    pool.query(`select * from blog_table`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getComment: (callBack) => {
    pool.query(`select * from blog_comment`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getCategory: (callBack) => {
    pool.query(`select * from category`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getLike: (callBack) => {
    pool.query(`select * from blog_like`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
   getNewsByUserId: (id, callBack) => {
    pool.query(
      `select * from blog_table where user_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
   getNewsById: (id, callBack) => {
    pool.query(
      `select * from blog_table where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log('-0-0-0-1-0-0-0-0-', results);
        return callBack(null, results);
      }
    );
  },
  updateNews: (data, callBack) => {
    pool.query(
      `update blog_table set title=?, summary
      =?, hero_img=? where id = ?`,
      [
        data.title,
        
        data.summary,
        data.hero_img,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteNews: (data, callBack) => {
    pool.query(
      `delete from blog_table where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteLike: (data, callBack) => {
    pool.query(
      `delete from blog_like where user_id = ?`,
      [data.user_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
