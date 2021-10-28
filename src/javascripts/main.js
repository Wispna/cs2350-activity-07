// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
let number = 1;
 for (x=0; x<12; x++) {
    for (y=0; y<12; y++) {
        document.write(number*x);
    }
 }
document.write('<div class="box">' + 4 + '</div>');