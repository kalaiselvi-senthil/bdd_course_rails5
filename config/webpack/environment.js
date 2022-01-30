const { environment } = require('@rails/webpacker')

// Add the following lines
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    // $: 'jquery/src/jquery',
    // jQuery: 'jquery/src/jquery'
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}))
// End new addition

module.exports = environment
