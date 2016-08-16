高级用法//bd
function escapeHTML(htmlStr) {
escape = htmlStr.replace(/(\<|\>|\&|\")/g, function($0, $1) {
    return {
        "\<": "&lt;"
        , "\>": "&gt;"
        , "\&": "&amp;"
        ,"\"": "&quot;"
    }[$1];
});
    alert(escape);
}
escapeHTML('<input type="text" name="mobile"> ')
console.log(escape);
