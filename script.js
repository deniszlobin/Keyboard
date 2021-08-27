class Keyboard {
  keys = document.querySelectorAll(".button");
  textArea = document.querySelector("#text-area");
  write = function (target) {
    return /index_[1-9]/g.test(target.id)
      ? target.textContent
      : target.id === "space"
      ? " "
      : "";
  };
  _toLow = function() {
    keyboard.cancelCaps(keyboard.keys);
    keyboard.keys.id = capslock.removeEventListener("click", keyboard._toLow);
    keyboard.keys.id = capslock.addEventListener("click", keyboard._toUpp);
  }
  _toUpp = function() {
    keyboard.capslock(keyboard.keys);
    keyboard.keys.id = capslock.removeEventListener("click", keyboard._toUpp);
    keyboard.keys.id = capslock.addEventListener("click", keyboard._toLow)
  }
  _letters = function (event) {
    keyboard.textArea.innerHTML += keyboard.write(
      event.target,
      keyboard.textArea
    );
  };
  _backSpace = function() {
    let str = keyboard.textArea.innerHTML;
    str = str.substring(0, str.length - 1);
    keyboard.textArea.innerHTML = str;
}
  capslock = function (keys) {
    for (const elem of keys) {
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toUpperCase();
      }
    }
  };
  cancelCaps = function (keys) {
    for (const elem of keys) {
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toLowerCase();
      }
    }
  };
  init = function () {
    document.addEventListener("DOMContentLoaded", function () {
        for (const elem of keyboard.keys) {
            elem.addEventListener('click', keyboard._letters)
        }
    
    keyboard.keys.id = backspace.addEventListener("click", keyboard._backSpace)

    keyboard.keys.id = capslock.addEventListener("click", keyboard._toUpp)
    keyboard.keys.id = capslock.addEventListener("click", keyboard._toLow)
  });
};
}

const keyboard = new Keyboard();
keyboard.init();
