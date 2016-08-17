function escapeHTML(htmlStr){
htmlStr = htmlStr.replace(/[<>&"]/g,function(m0) {
	switch(m0){
	case '<':
	   return '&lt;';
	case '>':
	   return '&gt;';
	case '&':
	   return '&amp;';
	case '"':
	   return '&quot;';
    };
});
return htmlStr;
}
var a = escapeHTML('<input type="text" name="mobile">');
alert(a);
