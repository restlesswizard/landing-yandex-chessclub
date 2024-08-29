const scrollers = document.querySelectorAll(".running-line__scroller");

function addAnimation() {
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".running-line__content");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

addAnimation();
