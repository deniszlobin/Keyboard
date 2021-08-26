class Keyboard {
  keys = document.querySelectorAll(".button");
  textArea = document.querySelector("#text-area");
  write = function (target) {
    switch (true) {
      // тут тогда тебе надо не свитч кейс, а условия просто, в тернарном виде просто ретёрн
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
      // В этом цикле же запишется все равно только одно че-то, тут можно как раз сделать find по ключам и записать сразу
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toUpperCase()
      }
      
    }
  }
  cancelCaps = function (keys) {
    for (const elem of keys) {
    // Такая же хуйня
      if (/index_[1-9]/g.test(elem.id)) {
        elem.innerHTML = elem.innerHTML.toLowerCase()
      }
      
    }
  }
}

const keyboard = new Keyboard();
document.addEventListener("DOMContentLoaded", function () {
  // Тут логика клавиатуры в клиентском коде, здесь должны быть только вызовы методов класса, например: const keyboard = new Keyboard(); keyboard.init();
  // в методе инита, уже накидываешь листенеры
  for (const elem of keyboard.keys) {
    elem.addEventListener("click", function letters(event) {
      //А сами функции надо сделать именованными методами приватными т.е. тут например _onKeyClick
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
   // Вот это место надо разобрать на методы обязательно, читается жоска
   keyboard.capslock(keyboard.keys)
   keyboard.keys.id = capslock.removeEventListener('click', toUpp)
   keyboard.keys.id = capslock.addEventListener('click', function toLow() {
    keyboard.cancelCaps(keyboard.keys)
    keyboard.keys.id = capslock.removeEventListener('click', toLow)
    keyboard.keys.id = capslock.addEventListener('click', toUpp)
   })
  })
  
});


