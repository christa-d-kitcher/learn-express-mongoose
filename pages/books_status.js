let BookInstance = require('../models/bookinstance');

//SUBMIT THIS 

exports.show_all_books_status = async function(res) {
  

  try{
    let results = await BookInstance.find({status : 'Available'}).exec()
    return res.send([results]);
  }
  
  catch(err) {
    console.log('Could not get available books ' + err);
  }
}


