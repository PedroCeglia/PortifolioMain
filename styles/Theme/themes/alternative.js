// Alternative Thema
const alternativeBackgroundColor = {
    bc1:"#FFA07A", // (salmon claro)
    bc2:"#9400D3", //  (roxo escuro)
    bc3:"#FFD700", //  (amarelo ouro)
    bc4:"#00CED1", //  (azul turquesa claro) 
    dark:"#333333",
}
const alternativeColor = {
    c1:"#F6F7F7", // Light
    c2:"#333333",  // Dark
    c3:"#ffffff",  // White
    black:"#000000"  // Black 
}
const alternativeTheme = {
    backgroundColor:alternativeBackgroundColor,
    color:alternativeColor,
    getDarkColorRGBA:(opacityField)=>{
        return `rgba(48,48,48,${opacityField})`
    },
    getLightColorRGBA:(opacityField)=>{
        return `rgba(245,245,245,${opacityField})`
    }
}
export default alternativeTheme