const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')




const getAllUsers = (req, res) => {
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) {
      return handleSQLError()
    }
    return res.json(rows);
  })
}



const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [ req.params.id ])

  pool.query(sql, (err, rows) => {
    if (err) {
      return handleSQLError(err)
    }
    console.log(rows)
    return res.json(rows);
  })
}



const createUser = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
  sql = mysql.format(sql, [ firstName, lastName ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError()
    return res.json({ newId: results.insertId });
  })
}




const updateUserById = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE users SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError()
    return res.status(204).json();
  })
}



// const deleteUserById = (req, res) => {
//   let sql = "DELETE FROM users WHERE id = ?"
//   sql = mysql.format(sql, [ req.params.id ])

//   pool.query(sql, (err, results) => {
//     if (err) return handleSQLError(res, err)
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   })
// }

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  // deleteUserById
}





// * Create the following routes inside `users.js`
// * Then move the function syntax to the  controllers file
// * comment-out the router.route when translated to the controllers file

// * GET /users
//   * Return all user
// router.get("/users", (req, res) => {
//     res.json(users);
// })

// * GET /users/:id
//   * Return just the user that matches the path param (id)
// router.get("/users/:id", (req, res) => {
//     let myid = req.params.userId
//     let foundUser = users.find(x => x._id == myid);
//     res.json(foundUser);
// })

// * POST /users
//   * Create a new user (sampleUser). 
//   * Find a way to increment the id so that we always insert the next available id in the list. 
//   * Currently we have users 1-10 (_data/index_). The next user should be 11
// router.post("/users/:id", (req, res) => {
//         let myid = req.params.userId
//         users[myid].name = "Johnny";
//         res.json(users[myid]);
//         res.send('success-jte')
// })


// * PUT /users/:id
//   * Update one user matching the path param (id). 
//   * You may again use the sampleUser code as your "body" for this request
// router.put("/users/:id", (req, res) => {
//     res.json(users);
// })



// * DELETE /users/:id
//   * Delete one user by it's id
// router.delete("/users/:id", (req, res) => {

// })

// You may chose to alter these routes so they appear as ('/', '/:id') in your users file,
// and then prefix them all with '/users' when we import them into index.. 
// but you are not required to do so.




