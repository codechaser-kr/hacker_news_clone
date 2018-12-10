String.prototype.string = function(len) {
  var s = "",
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function(len) {
  return "0".string(len - this.length) + this;
};
Number.prototype.zf = function(len) {
  return this.toString().zf(len);
};
Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  let weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];
  let d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      case "yy":
        return (d.getFullYear() % 1000).zf(2);
      case "MM":
        return (d.getMonth() + 1).zf(2);
      case "dd":
        return d.getDate().zf(2);
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours().zf(2);
      case "hh":
        let h = null;
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case "mm":
        return d.getMinutes().zf(2);
      case "ss":
        return d.getSeconds().zf(2);
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
};

export const urlParse = url => {
  let result = /^(http[s]?):\/\/(www.)?([^:/\s]*)[/]?([a-zA-Z0-9_/?&.=\-~]*)$/.exec(
    url
  );

  return result ? result[3] : url;
};

export const ago = timestamp => {
  const current = new Date().getTime() / 1000;
  const min = Math.abs(current - timestamp) / 60;
  if (min < 60) {
    return Math.floor(min) + " minutes ago";
  }
  const hour = Math.abs(min / 60);
  if (hour < 24) {
    return Math.floor(hour) + " hour ago";
  }
  const day = Math.floor(hour / 24); // 일
  if (day < 30) {
    return Math.floor(day) + " day ago";
  }
  const month = Math.floor(day / 30); //달
  if (month < 12) {
    return Math.floor(month) + " month ago";
  }
  return new Date(timestamp).format("yyyy-MM-dd");
};

export const decodeHtml = html => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
