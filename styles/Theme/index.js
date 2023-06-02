// Import All Themes
import darkTheme from "./themes/dark"
import lightTheme from "./themes/light"
import alternativeTheme from "./themes/alternative"

// Setting Initial Theme
const defaultTheme = darkTheme
let theme = defaultTheme


export const setTheme = (name)=>{
    if(name != null)
        verifyNameAndSetTheme(name)
}
const themeNames  = {
    ALTERNATIVE:"Alternative",
    DARK:"Dark",
    LIGHT:"Light"
}
function verifyNameAndSetTheme(name){
    if(name==themeNames.DARK)
        theme = darkTheme

    if(name==themeNames.LIGHT)
        theme = lightTheme
    
    if(name==themeNames.ALTERNATIVE)
        theme = alternativeTheme      
}
export default theme

 
