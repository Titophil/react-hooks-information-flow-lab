import React, {useState} from "react";

function Header({onDarkModeClick}){
const [isDark, setIsDark] = useState(false)
const Appclass= isDark? "dark": "light"

function handleClick(){
    setIsDark((prevMode)=> !prevMode)
    if(onDarkModeClick){
        onDarkModeClick()
    }

}
return(
    <div>
        <h2>Shopster</h2>
        <button className={Appclass} onClick={handleClick}>Dark Mode
            {setIsDark? "dark":"light"}
        </button>
    </div>
)
}

export default Header