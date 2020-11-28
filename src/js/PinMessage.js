/* eslint-disable import/no-cycle */
import api from './ApiConnector';

class PinMessage {
  constructor() {
    this.id = undefined;
    this.html = undefined;
    this.pinArea = document.getElementById('messages-pin'); // Зона где закрепляется сообщение.
    this.messagesList = document.getElementById('messages-list'); // Список выведенных сообщений.
  }

  pinned(msg, sendServer = true) { // Закрепить сообщение
    if (this.id) return false;
    this.id = msg.id;
    this.html = (msg.html).cloneNode(true);
    this.html.classList.add('pin');
    this.html.classList.remove('hidden');
    this.html.getElementsByClassName('dell-btn')[0].remove();
    const pinBtn = this.html.getElementsByClassName('pin-btn')[0];
    pinBtn.classList.remove('hidden');
    pinBtn.onclick = this.unPinned.bind(this);
    if (sendServer) api.pinnedMessage(this.id); // Отправляем данные на сервер
    this.pinArea.append(this.html);
    return true;
  }

  unPinned() { // Открепить сообщение
    api.unPinnedMessage(); // Удаляем данные на сервере
    const serchMsg = this.messagesList.querySelector(`[data-id="${this.id}"]`);
    if (serchMsg) serchMsg.classList.remove('hidden');

    this.id = undefined;
    this.html = undefined;
    this.pinArea.innerHTML = '';
  }
}

const pinMsg = new PinMessage();

export default pinMsg;
