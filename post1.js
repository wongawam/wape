function $_GET(n){
	var o = {};
	return window.location.href.replace(location.hash, "").replace(/[?&]+([^=&]+)=?([^&]*)?/gi, function(n, i, a){o[i] = void 0 !== a ? a : ""}),n ? o[n] ? o[n] : null : o
}
