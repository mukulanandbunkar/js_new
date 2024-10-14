const scroll1 = document.getElementById('scroll');
const scroll2 = document.getElementById('scroll2');
const  scrollContainer = document.getElementById('scroll-container');


console.log(scrollContainer);

// scroll1.addEventListener('scroll' , () => {
//     console.log('this is render');
// })


// const onScrollHandler = (event) => {
//     console.log(event, 'this is triggered');
//     console.log(scroll2.clientHeight, scroll2.scrollHeight, scroll2.scroll);
// }

scrollContainer.addEventListener('scroll' , (event) => {
    console.log(scrollContainer.clientHeight, scrollContainer.scrollHeight, scrollContainer.scrollTop);
    const percentscroll = scrollContainer.scrollTop/(scrollContainer.scrollHeight - scrollContainer.clientHeight) * 100;
    console.log(Math.round(percentscroll));

})

const  scrollToBottom = () => {
    scrollContainer.scrollTo(0,scrollContainer.scrollHeight)
}


const  scrollToTop = () => {
    scrollContainer.scrollTo(0,0)
}