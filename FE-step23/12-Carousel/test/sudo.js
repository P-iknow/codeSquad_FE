const Pagenation = class {
  constructor({
    carousel,
    carouselMain,
    container,
    item,
    items,
    config = {
      duration: 200,
      easing: 'ease-out',
    },
  }) {
    this.publisher = null; // sta
    this.carousel = document.querySelector(carousel);
    this.carouselMain = this.carousel.querySelector(carouselMain);
    this.container = this.carousel.querySelector(container);
    this.item = this.carousel.querySelector(item);
    this.items = this.carousel.querySelectorAll(items);
    this.itemWidth = this.item.offsetWidth;
    this.itemsLength = this.items.length;
    this.config = config;
  }

  setCarouselSize() {
    this.carouselMain.style.width = `${this.item.offsetWidth}px'`;
    this.carouselMain.style.height = `${this.item.offsetHeight}px`;
  }

  insertClone() {
    const firstItem = this.items[0];
    const lastItem = this.items[this.items.length - 1];

    this.container.insertBefore(
      lastItem.cloneNode(true),
      this.container.firstChild,
    );
    this.container.appendChild(firstItem.cloneNode(true));
  }

  reportEvent(e) {
    if (this.isTransitioning) return;
    const { direction } = e.target.closest('arrow').dataset;
    const { name } = this.constructor;
    this.publisher.setState({ direction });
    this.publisher.updateState(name);
  }

  attachEvent() {
    const arrow = this.carousel.querySelector('.arrow');
    arrow.addEventListener('click', e => this.reportEvent(e));
    this.container.addEventListener('transitionend', () =>
      this.transitionStatsToggle(),
    );
  }

  isClone(currentItem) {
    return currentItem === 0 || currentItem === this.itemsLength + 1;
  }

  update({ offset, currentItem }) {
    this.moveMain(offset);
    if (this.isClone(currentItem)) this.fakeMove({ offset, currentItem });
  }

  moveMain(offset) {
    this.transitionStatsToggle();
    this.container.style.transition = `transform ${this.config.duration}ms ${
      this.config.easing
    }`;
    this.container.style.transform = `translate3D(${offset}px, 0, 0)`;
  }

  fakeMove(state) {
    let { offset, currentItem } = state;
    // setState
    if (currentItem === 0) {
      offset -= this.itemsLength * this.itemWidth;
      currentItem += this.itemsLength;
    } else {
      offset += this.itemsLength * this.itemWidth;
      currentItem -= this.itemsLength;
    }
    this.publisher.setState({ offset, currentItem });
    // pagenation
    setTimeout(() => this.moveWithoutAnimation(offset), this.config.duration);
  }

  // pagenation
  moveWithoutAnimation(offset) {
    this.container.style.transition = 'none';
    this.container.style.transform = `translate3D(${offset}px, 0, 0)`;
  }
};

const Nav = class {
  constructor({ nav, navItem }) {
    this.navItemName = navItem;
    this.nav = document.querySelector(nav);
    this.navItems = [...this.nav.querySelectorAll(navItem)];
  }

  reportEvent(e) {
    const { index } = e.target.closest(this.navItemName).dataset;
    const { name } = this.constructor;
    this.publisher.setState({ currNavItem: index });
    this.publisher.updateState(name);
  }

  attachEvent() {
    this.navItems.forEach(card =>
      card.addEventListener('click', e => this.clickHeaderItem(e)),
    );
  }

  // nav
  moveNav(prevNavItem, currNavItem) {
    const maxIndex = this.this.navItems.length;
    const minIndex = 0;
    if (currNavItem === maxIndex) currNavItem = minIndex;
    else if (currNavItem === minIndex) currNavItem = maxIndex - 1;

    this.navItems[prevNavItem].classList.remove('active');
    this.navItems[currNavItem].classList.add('active');
    this.publisher.setState({ prevNavItem: currNavItem });
  }

  // nav
  clickNavItem({ target }) {
    const clickedIndex = this.getHeaderIndex(
      target.closest('.carousel__header--item'),
    );
    const currentItem = this.currentItem - 1;
    this.offset += this.itemWidth * (currentItem - clickedIndex);
    this.moveNav(clickedIndex);
    this.moveMain();
    this.currentItem = clickedIndex + 1;
  }
};

class Carousel {
  constructor({
    carousel,
    nav,
    navItems,
    carouselMain,
    container,
    item,
    items,
    config = {
      duration: 200,
      easing: 'ease-out',
    },
    currentItem = 1,
  }) {
    this.carousel = document.querySelector(carousel);
    // nav
    this.nav = this.carousel.querySelector(nav);
    this.navItems = [...this.nav.querySelectorAll(navItems)];

    // carousel__main
    this.carouselMain = this.carousel.querySelector(carouselMain);
    this.container = this.carousel.querySelector(container);
    this.item = this.carousel.querySelector(item);
    this.items = this.carousel.querySelectorAll(items);
    this.itemWidth = this.item.offsetWidth;
    this.offset = -this.itemWidth;
    this.currentItem = currentItem;
    this.itemsLength = this.items.length;
    this.config = config;
    this.isTransitioning = false;
  }

  init() {
    this.setCarouselSize();
    this.attachEvent();
    this.insertClone();
    this.moveWithoutAnimation();
    this.carouselMain.style.opacity = 1;
  }

  // pagenation, nava
  attachEvent() {
    const prev = this.carousel.querySelector('.prev');
    const next = this.carousel.querySelector('.next');
    prev.addEventListener('click', () => this.moveToPrev());
    next.addEventListener('click', () => this.moveToNext());
    this.navItems.forEach(card =>
      card.addEventListener('click', e => this.clickHeaderItem(e)),
    );
    this.container.addEventListener('transitionend', () =>
      this.transitionStatsToggle(),
    );
  }

  // setState
  moveToNext() {
    if (!this.isTransitioning) {
      this.offset -= this.itemWidth;
      this.moveMain();
      this.currentItem++;
      if (this.isClone()) this.fakeMove();
      this.moveNav(this.currentItem - 1);
    }
  }

  // setState
  moveToPrev() {
    if (!this.isTransitioning) {
      this.offset += this.itemWidth;
      this.moveMain();
      this.currentItem--;
      if (this.isClone()) this.fakeMove();
      this.moveNav(this.currentItem - 1);
    }
  }

  // model 것
  transitionStatsToggle() {
    this.isTransitioning = this.isTransitioning ? false : true;
  }

  // model
  isClone(currentItem) {
    return currentItem === 0 || currentItem === this.itemsLength + 1;
  }
}

export default Carousel;
