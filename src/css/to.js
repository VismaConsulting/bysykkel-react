
let less = require('less');
let fs = require('fs');
let input = fs.readFileSync(__dirname + '/css.less', 'utf8');

if (fs.existsSync(__dirname + '/sees.css')) {
    fs.unlinkSync(__dirname + '/sees.css');
}

less.render(input, {}, function (err, result) {
    fs.writeFileSync(__dirname + '/sees.css', result.css);
});
