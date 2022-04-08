export default {
	
    slugify: function(text)
    {
      text = removeAccents( text ) ; 
      
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')           // Replace spaces with -
          .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
          .replace(/\-\-+/g, '-')         // Replace multiple - with single -
          .replace(/^-+/, '')             // Trim - from start of text
          .replace(/-+$/, '');            // Trim - from end of text
    } , 
    
    removeAccents : function (strAccents) {
      var strAccents = strAccents.split('');
      var strAccentsOut = new Array();
      var strAccentsLen = strAccents.length;
      var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
      var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
      for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
          strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
          strAccentsOut[y] = strAccents[y];
      }
      strAccentsOut = strAccentsOut.join('');
      return strAccentsOut;
    
    } , 

    arrayUnique : function (array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
        return a;
    }
}