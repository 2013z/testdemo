const fs = require('fs');
const globby = require('globby');

globby(['./*.vue']).then(paths => {
    paths.forEach(path => {
        let str = fs.readFileSync(path, 'utf-8');
        const reg = /(doc\.zego\.im\/CN\/)(\d*)/g;
        if (str.match(reg)) {
            str = str.replace(reg, function(x, $1, $2) {
                const res = $1 + (parseInt($2) + 1500);
                // console.log(path, $1, $2, res);
                return res;
            });
            fs.writeFileSync(path, str);
        }
    });
});
