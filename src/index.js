import 'bootstrap';

document.querySelectorAll('.styleelement').forEach(function(e) {
  let count = 0;
  e.addEventListener('click', function() {
    count++;
    if (count % 2 === 0) {
      this.style.backgroundColor = "#e5e5e5";
      this.style.padding = "24px"
      this.style.color = "#000"
      this.style.fontWeight = "normal";
      this.style.borderBottomWidth = "1px";
    } else {
      this.style.backgroundColor = "#fff";
      this.style.paddingLeft = "40px"
      this.style.color = "#DF4E3C"
      this.style.fontWeight = "bold";
      this.style.borderWidth = "0";
    }
  })
});
