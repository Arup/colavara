function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>;
    const lightMode = <h1>Light Mode is on</h1>;
    function clickHandle (){
        darkModeOn=!darkModeOn;
    }
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
        <button
            onClick={clickHandle}>
            Switch Mode!
        </button>
        </div>
    )
}

export default ModeToggler