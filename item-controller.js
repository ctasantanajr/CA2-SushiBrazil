var Item = require('./models/item');


exports.createItem = function(req, res) { 
    var newitem = new Item({item: req.body.item, price: req.body.price, section: req.body.sec});
    newitem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(item); 
     
        
});
};


exports.getItems = function(req, res) {

  Item.find({},null,{sort: {section: 1}}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.render('index', {
        data: items,
    })
    //res.redirect('back');
  }); 
};


exports.getItem = function(req, res) {
  Item.findOne({item: req.params.item}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item); 
    //res.redirect('back');
  }); 
};

exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({item: req.params.item}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
     //res.redirect('back');
  }); 
};

exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
     res.json(item); 
     
        //res.locals.redirect = "/";
        
        //res.locals.redirect('back');
  }); 
};