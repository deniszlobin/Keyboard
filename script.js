class Keyboard {
  keys = document.querySelectorAll(".button");
  textArea = document.querySelector("#text-area");
  write = function (target) {
    switch (true) {
      case /index_[1-9]/g.test(target.id):
        return target.textContent;

      case target.id === "space":
        return " ";
      default:
        return "";
    }
  };
  capslock = function (keys) {
    for (const elem of keys) {
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toUpperCase()
      }
      
    }
  }
  cancelCaps = function (keys) {
    for (const elem of keys) {
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toLowerCase()
      }
      
    }
  }
}

const keyboard = new Keyboard();
document.addEventListener("DOMContentLoaded", function () {
  for (const elem of keyboard.keys) {
    elem.addEventListener("click", function letters(event) {
      keyboard.textArea.innerHTML += keyboard.write(
        event.target,
        keyboard.textArea
      );
    });
  }
  keyboard.keys.id = backspace.addEventListener("click", function () {
      let str = keyboard.textArea.innerHTML
      str = str.substring(0, str.length - 1)
      keyboard.textArea.innerHTML = str
      
  });
  keyboard.keys.id = capslock.addEventListener('click', function toUpp() {
   keyboard.capslock(keyboard.keys)
   keyboard.keys.id = capslock.removeEventListener('click', toUpp)
   keyboard.keys.id = capslock.addEventListener('click', function toLow() {
    keyboard.cancelCaps(keyboard.keys)
    keyboard.keys.id = capslock.removeEventListener('click', toLow)
    keyboard.keys.id = capslock.addEventListener('click', toUpp)
   })
  })
  
});


