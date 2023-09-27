// function Btn() {
//     const clickHandler = () => console.log('Clicked');
//     return (
//         <button 
//             onClick={clickHandler}>
//         Click it!
//         </button>
//     )
// }

// export default Btn;

function Btn2() {
    return (
        <button
            onClick={function(){console.log('Inline fn clicked')}}>
            Inline anonymous function Click it!
        </button>
    )
}

export default Btn2;