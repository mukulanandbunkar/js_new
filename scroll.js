const scroll1 = document.getElementById("scroll");
const scroll2 = document.getElementById("scroll2");
const scrollContainer = document.getElementById("scroll-container");
const indicator = document.getElementById("indicator")
indicator.style.width = `${0}%`
console.log(scrollContainer);

// scroll1.addEventListener('scroll' , () => {
//     console.log('this is render');
// })

// const onScrollHandler = (event) => {
//     console.log(event, 'this is triggered');
//     console.log(scroll2.clientHeight, scroll2.scrollHeight, scroll2.scroll);
// }

scrollContainer.addEventListener("scroll", (event) => {
  console.log(
    scrollContainer.clientHeight,
    scrollContainer.scrollHeight,
    scrollContainer.scrollTop
  );
  const percentscroll =
    (scrollContainer.scrollTop /
      (scrollContainer.scrollHeight - scrollContainer.clientHeight)) *
    100;
    indicator.style.width = `${Math.round(percentscroll)}%`
  console.log(Math.round(percentscroll));
});

const scrollToBottom = () => {
  scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
};

const scrollToTop = () => {
  scrollContainer.scrollTo(0, 0);
};


const array = ["a", "b"];
const elements = [0, 1, 21];
elements.push.apply(array, elements);
console.log(array);



const converCurry = (fn) => {
    return function curry (...args) {
        if(args.length >= fn.length) {
            
        }
    }
} 


