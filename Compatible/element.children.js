function getElementChildren(e){
	if(e.children){
		return e.children;
	}else{
	/* compatible other browse */
	  var i, len, children = [];
		var child = element.firstChild;
		if(child != element.lastChild){
			while(child != null){
				if(child.nodeType == 1){
				children.push(child);
				}
			  child = child.nextSibling;
			}
		}else{
			children.push(child);
		}return children;
	}
}
