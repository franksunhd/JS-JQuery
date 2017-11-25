//实现去掉字符串右空格
String.prototype.rtrim = function() {
  return this.replace(/\s+$/ig , "");
};

//实现去掉字符串的左空格
String.prototype.ltrim = function() {
  return this.replace(/^\s+/ig , "");
};
