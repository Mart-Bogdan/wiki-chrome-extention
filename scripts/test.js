(function () {

var translateTarget = document.getElementsByClassName('interlanguage-link-target');

function getLink(collection, lang)
{
		var out = null;
		var pattern;
		var srctitle;
		var langImg = {
			ua: "https://cdn3.iconfinder.com/data/icons/finalflags/16/Ukraine-Flag.png",
			en: "https://cdn2.iconfinder.com/data/icons/flags/flags/16/united-kingdom-great-britain.png",
			ru: "https://cdn1.iconfinder.com/data/icons/famfamfam_flag_icons/ru.png",
		};

		switch (lang) {
		  case "en":
			pattern = /en/i;
			srctitle = langImg.en;
			break;
		  case "ru":
			pattern = /ru/i;
			srctitle = langImg.ru;
			break;
		  case "ua":
			pattern = /uk/i;
			srctitle = langImg.ua;
			break;
		  default:
			pattern = /en/i;
			srctitle = langImg.en;
		}
		
		for(var i=0; i<collection.length;i++)
			if(pattern.test(collection[i])) {
                out = " <a href=" + collection[i] + "><img src='" + srctitle + "'/>" + lang + "</a>";
            }
        if(out){
        	return out;
		}
		if(langImg[lang]){
        	return checkParrent(window.location.href, lang, langImg[lang]);
        }
		return null;
}

function selectPattern(lang)
{
		var pattern = null;
		switch (lang) {
		  case "en":
			pattern = /en/i;
			break;
		  case "ru":
			pattern = /ru/i;
			break;
		  case "ua":
			pattern = /uk/i;
			break;
		  default:
			pattern = /en/i;
		}
		return pattern;
}
function getDefault(srctitle, lang)
{
		var out = null;
		var collection = document.getElementsByClassName('interlanguage-link-target');
		for(var i=0; i<collection.length;i++)
			if(/ru/i.test(collection[i]))
				out = " <a href=" + collection[i] + "><img src='" + srctitle + "'/>" + lang + "</a>";
			
		out = out || "<img src='" + srctitle + "'/>" + lang;
		return out;
}

function checkParrent(url, lang, img)
{
	var out = null;
	var collection = document.getElementsByClassName('interlanguage-link-target');
	if(selectPattern(lang).test(url))
		out = getDefault(img,"<-"); // return value
	return out;
}

var h = document.getElementById('firstHeading');
var linksSection = [
	getLink(translateTarget, "en"),
	getLink(translateTarget, "ua"),
	getLink(translateTarget, "ru")
	]
	.filter(function (t) { return !!t; })
	.join(", ");
h.innerHTML += linksSection;

})()