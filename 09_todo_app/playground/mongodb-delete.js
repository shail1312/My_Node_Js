// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Go home it\'s to late'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Go with tobo'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').find({name:'Shailesh', location:'Allahabad'}).toArray().then((result) => {
      db.collection('Users').findOneAndDelete({_id: new ObjectID(result[0]._id)}).then((res)=>{
        console.log(res);
      });
  }, (err) => {
      console.log('Unable to find ',err);
  });
  //db.close();
});
