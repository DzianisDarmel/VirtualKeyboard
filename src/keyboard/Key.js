class Key {
  constructor({ code, key }, shift = false, capsLock = false, lang = 'EN', active = false) {
      this.code = code;
      this.key = key;
      this.shift = shift;
      this.capsLock = capsLock;
      this.lang = lang;
      this.active = active;
    }
  
    render = () => {
      const element = document.createElement('button');
      element.classList.add('keyboard__key', 'key');
      if (this.active) {
        element.classList.add('keyboard__key', 'key', 'active');
      } else {
        element.classList.add('keyboard__key', 'key');
      }
      element.setAttribute('data-key', this.code);
      if (this.key === 'Backspace' || this.key === 'Shift' || this.key === 'Enter' || this.key === 'CapsLock') {
        element.classList.add('keyboard__key_long');
      } else if (this.key === 'Delete' || this.key === 'Tab') {
        element.classList.add('keyboard__key_medium');
      }
      if (this.key === 'CapsLock') {
        const elementContent = document.createElement('span');
        if (this.capsLock) {
          elementContent.classList.add('circle', 'press');
        } else {
          elementContent.classList.add('circle');
        }
        element.append(elementContent);
      }
      const elementContent = document.createElement('span');
      elementContent.classList.add('key__descr');
      if (this.key instanceof Array) {
        const [enDown, enUp, ruDown, ruUp] = this.key;
        if (this.capsLock) {
          if (this.shift === false) {
            if (this.code.indexOf('Digit') !== -1 || this.code === 'Backquote' || this.code === 'Minus' || this.code === 'Equal') {
              if (this.lang === 'EN') {
                elementContent.innerHTML = enDown;
              } else {
                elementContent.innerHTML = ruDown;
              }
            } else if (this.lang === 'EN') {
              elementContent.innerHTML = enUp;
            } else {
              elementContent.innerHTML = ruUp;
            }
          } else if (this.shift === true) {
            if (this.code.indexOf('Digit') !== -1 || this.code === 'Backquote' || this.code === 'Minus' || this.code === 'Equal') {
              if (this.lang === 'EN') {
                elementContent.innerHTML = enUp;
              } else {
                elementContent.innerHTML = ruUp;
              }
            } else if (this.lang === 'EN') {
              elementContent.innerHTML = enDown;
            } else {
              elementContent.innerHTML = ruDown;
            }
          }
        } else if (this.capsLock === false) {
          if (this.shift === false) {
            if (this.lang === 'EN') {
              elementContent.innerHTML = enDown;
            } else {
              elementContent.innerHTML = ruDown;
            }
          } else if (this.shift === true) {
            if (this.lang === 'EN') {
              elementContent.innerHTML = enUp;
            } else {
              elementContent.innerHTML = ruUp;
            }
          }
        }
        element.setAttribute('data-type', 'printed');
      } else if (this.code === 'Space' || this.code === 'ArrowRight' || this.code === 'ArrowLeft' || this.code === 'ArrowUp' || this.code === 'ArrowDown') {
        element.setAttribute('data-type', 'printed');
        elementContent.innerHTML = this.key;
      } else {
        element.setAttribute('data-type', 'control');
        elementContent.innerHTML = this.key;
      }
      element.append(elementContent);
  
      return element;
    };
  }
  
  export default Key;