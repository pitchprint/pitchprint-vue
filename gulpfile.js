const gulp = require('gulp'),
        fs = require('fs'),
 exec = require('child_process').exec;

gulp.task('default', async function() {
    await new Promise((_res, _rej) =>{
        exec('curl ifconfig.me', function(err, stdout, stderr) {
            if (err) _rej(err);
            else {
                const _output = `module.exports = {
                        ip: '${stdout}'
                    }`;
                fs.writeFileSync('./my_ip.js', _output);
                _res(1);
            }
        });
    });
});
