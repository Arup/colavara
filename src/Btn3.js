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

function Btn3() {
    return (
        <button
            onClick={()=>{console.log('Arrow inline fn clicked')}}>
            Arrow Inline function Click it!
        </button>
    )
}

export default Btn3;