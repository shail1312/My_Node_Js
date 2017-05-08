
var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Shailesh'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(101, (userObject) =>{
  console.log(userObject);
});
