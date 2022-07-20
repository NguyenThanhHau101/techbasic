let container = document.getElementById('container');
container.style.width = "1000px";
container.style.height = "1000px";
for(let i = 1; i <= 40; i++){
  let item = document.createElement('div');
  item.classList.add('item');
  container.appendChild(item);
}

