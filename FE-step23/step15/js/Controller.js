import { controller as config } from './config.js';
import { debounce } from '../../PLib/index.js';

const { delay } = config;

class Controller {
  constructor() {
    this.inputEl = document.querySelector(config.inputEl);
    this.resultEl = document.querySelector(config.resultEl);
    this.resultItem = this.resultEl.querySelector(config.resultItem);
    this.handelSuggestions = debounce(this.handelSuggestions.bind(this), delay);
    this.init();
  }

  init() {
    this.attatchEvent();
  }

  attatchEvent() {
    this.inputEl.addEventListener('keyup', e => {
      this.doByInputKey(e);
    });
    this.inputEl.addEventListener('focus', _ => {
      this.resultView.renderRecentQuery(Array.from(this.model.recentQueryList));
    });
  }

  doByInputKey(e) {
    e.preventDefault();
    switch (e.keyCode) {
      // down arrow
      case 40:
        if (this.resultItem || this.nextElementSibling) {
          this.resultItem.classList.toggle('onselect');
          this.resultItem = this.resultItem.nextElementSibling;
        } else {
          this.resultItem = this.resultEl.querySelector(
            `.${config.resultItem}`
          );
        }
        this.resultItem.classList.toggle('onselect');
        this.inputEl.value = this.resultItem.dataset.value;
        break;
      case 38:
        break;
      // enters
      case 13:
        this.model.addRecentQuery(e.target.value);
        break;

      default:
        this.handelSuggestions(e.target.value);
    }
  }

  handelSuggestions(query) {
    const { suggesionData, recentQueryList } = this.model;
    if (query.trim() === '')
      this.resultView.renderRecentQuery(Array.from(recentQueryList));
    else {
      suggesionData.then(data => {
        this.resultView.renderSuggestion(data, query);
      });
    }
  }
}

export default Controller;
