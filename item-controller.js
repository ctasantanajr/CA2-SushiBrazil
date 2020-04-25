var Item = require('./models/item');

exports.createItem = function(req, res) { 
    var newitem = new Item({item: req.body.item, price: req.body.price, section: req.body.sec_n});
    newitem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }

        res.json(item); 
});
};

/*exports.createItem = function(req, res) { 
    var newitem = new Item(req.body);
    newitem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.json(item); 
});
};*/

exports.getItems = function(req, res) {

  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.render('index', {
        data: items,
    })
    //res.redirect('back');
  }); 
};

/*exports.getItems = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
};*/

exports.getItem = function(req, res) {
  Item.findOne({item: req.params.item}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
     res.redirect('back');
  }); 
};

exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({item: req.params.item}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
     res.redirect('back');
  }); 
};

exports.deleteItem = function(req, res) {
  Item.findOneAndRemove({item: req.params.item}, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.redirect('back');
  }); 
};