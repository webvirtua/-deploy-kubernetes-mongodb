var Product = require('../models/product');

exports.productCreate = function (req, res) {
    var product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        }
    );

    product.save(function (err, productResult) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }

        res.statusCode = 201;
        res.json(productResult)
    })
};

exports.productDetails = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.json(product);
    })
};

exports.productAll = function (req, res) {
    Product.find({}, function (err, product) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.json(product);
    })
};

exports.productUpdate = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    });
};

exports.productDelete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
                
        if (err) {
            res.statusCode = 404;
            return res.json(err);
        }
        res.statusCode = 204;
        res.send('');
    })
};