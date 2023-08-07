// Dark Thema
const darkBackgroundColor = {
    bc0:"#000000", // Black
    bc1:"#333333", // Dark
    bc2:"#1a6dab", // rgb(0, 12, 23) 
    bc3:"#1a6dab", // 
    bc4:"#1d96c2", // 
    bc5:"#6ed0e4", //  
    bc6:"#cbefed", // White Gray
    bc7:"#f8efed", // White
}
const darkColor = {
    c1:"#F6F7F7", // Light 
    c2:"#333333",  // Dark
    c3:"#ffffff", // White
    c4:"#000000"  // Black

}
const imageBackGround = {
    ibg1:"url(./assets/background/background-1.png)",
    ibg2:"url(./assets/background/background-2.png)",
    ibg3:"url(./assets/background/background-3.png)"
}
const rgbaFunctions = {
    getDarkColorRGBA:(opacityField)=>{
        return `rgba(48,48,48,${opacityField})`
    },
    getLightColorRGBA:(opacityField)=>{
        return `rgba(245,245,245,${opacityField})`
    },
    getColor1RGBA:(opacityField)=>{
        return `rgba(15, 54, 84,${opacityField})`
    },
    getColor2RGBA:(opacityField)=>{
        return `rgba(0, 44, 79,${opacityField})`
    }    
}
const darkTheme = {
    backgroundColor:darkBackgroundColor,
    imageBackGround,
    color:darkColor,
    rgbaFunctions,
    createSimpleGradient:(color1, color2)=>{
        return `linear-gradient(to right, ${color1}, ${color2});`
    }
}
export default darkTheme
