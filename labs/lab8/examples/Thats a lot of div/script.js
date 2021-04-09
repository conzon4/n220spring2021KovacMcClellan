let colorBoyo = 0;
for (i = 0; i < 100; i++) {
  colorBoyo = colorBoyo + 2;
  let i = document.createElement("div");
  i.style.backgroundColor = 'rgb('+colorBoyo+', '+colorBoyo+', '+colorBoyo+')';
  document.body.appendChild(i);
  i.style.width = "20px";
  i.style.height = "20px";
  i.style.float = "left";
  i.style.cssFloat = "left";
}
