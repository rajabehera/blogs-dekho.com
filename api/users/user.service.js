const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into user_info(name, dob, email, password) 
                values(?,?,?,?)`,
      [
        data.name, 
        data.dob,
        data.email, 
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select id, email, name, role, status, verified from user_info`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserById: (id, callBack) => {
    pool.query(
      `select id,  email, name from user_info where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update user_info set name=?, email=?, password=? where id = ?`,
      [
       data.name, data.email, data.password,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log('ass---pass',data)
        return callBack(null, results);
      }
    );
  },
  updateUserVerified: (data, callBack) => {
    pool.query(
      `update user_info set verified=? where id = ?`,
      [
       data.verified,
       data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUserStatus: (data, callBack) => {
    pool.query(
      `update user_info set status=? where id = ?`,
      [
       data.status,
       data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from user_info where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from user_info where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if(!results){
          return callBack(results);
        }
        console.log('-------------results----------',results[0])
        return callBack(null, results[0]);
      }
    );
  },
};
