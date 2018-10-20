
let scss = require('node-sass');
let fs = require('fs');

if (fs.existsSync(__dirname + '/sees.css')) {
    fs.unlinkSync(__dirname + '/sees.css');
}

scss.render({file: __dirname + '/css.scss'}, function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    fs.writeFileSync(__dirname + '/sees.css', result.css);
});
