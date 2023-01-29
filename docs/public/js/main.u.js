var katex_config = {
	delimiters: 
	[
		{left: "$$", right: "$$", display: true},
  		{left: "$", right: "$", display: false}
	]
};

var script = document.createElement('script');
script.type = 'text/javaScript';
script.src = 'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/KaTeX/0.15.2/contrib/auto-render.min.js';
script.onload = 'renderMathInElement(document.body,katex_config)';
document.getElementsByTagName('head')[0].appendChild(script);