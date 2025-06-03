var item = 1

function changeItem(num, newtext) {
  const paragraphs = document.querySelectorAll('p');
  if (num >= 0 && num < paragraphs.length) {
    paragraphs[num].textContent = newtext;
  } 
  paragraphs[paragraphs.length - 1].textContent = ""
}


function selectItem(item) {
if (item == 1) {
changeItem(0, "▶ Start Game ◀")
} 
if (item == 2) {
changeItem(1,"▶ How to Play ◀")
} 
if (item == 3) {
changeItem(2, "▶ Rewards ◀")
} 
if (item == 4) {
changeItem(3, "▶ Quit Game ◀")
} 
}

function deselectItem(item) {
if (item == 1) {
changeItem(0, "Start Game")
} 
if (item == 2) {
changeItem(1,"How to Play")
} 
if (item == 3) {
changeItem(2, "Rewards")
} 
if (item == 4) {
changeItem(3, "Quit Game")
} 
}

function deselectItem(item) {
if (item == 1) {
changeItem(0, "Start Game")
} 
if (item == 2) {
changeItem(1,"How to Play")
} 
if (item == 3) {
changeItem(2, "Rewards")
} 
if (item == 4) {
changeItem(3, "Quit Game")
} 
}

function runItem(item) {
if (item == 1) {
alert("submisson form not ready yet :(")
} 
if (item == 2) {
window.location.href = "/howtoplay.html"
} 
if (item == 3) {
window.location.href = "/rewards.html"
} 
if (item == 4) {
window.location.href = "https://hackclub.com"
} 
}

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'ArrowUp':
      if (item > 1){
        deselectItem(item)
        item -= 1
        selectItem(item)
      }
      break;
    case 'ArrowDown':
     if (item < 4){
        deselectItem(item)
        item += 1
        selectItem(item)
      }
      break;
    case "Enter":
    runItem(item)
    break;
  }
});

