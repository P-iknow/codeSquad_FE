const obj = {
  // carousel__header
  header: '.carousel__header',
  headerItems: '.carousel__header--item',

  // carousel__main
  carousel: '.carousel__main',
  container: '.carousel__container',
  item: '.carousel__item',
  items: '.carousel__item',
  prev: '.prev',
  next: '.next',

  // 설정 정보
  duration: 200,
  easing: 'ease-out',
};

const func = ({
  header,
  headerItems,
  carousel,
  container,
  item,
  items,
  prev,
  next,
  duration,
  easing,
}) => {
  console.log(
    header,
    headerItems,
    carousel,
    container,
    item,
    items,
    prev,
    next,
    duration,
    easing,
  );
};

func(obj);
