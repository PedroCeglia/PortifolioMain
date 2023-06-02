// Light Thema
const lightBackgroundColor = {
    bc0:"#ffffff", // White
    bc1:"#fffcff", // "Rosa Claro"
    bc2:"#9A7B0" , //(rosa claro suave)
    bc3:"#78C0E0", // (Azul claro Pastel)
    bc4:"#b1d3ff", // Azul Claro
    bc5:"#eae7ff", // Lavanda
    bc6:"#52c1ff", // Azul Céu
    bc7:"#00b2ff" // Azul
}
const lightColor = {
    c1:"#333333",  // Dark
    c2:"#F6F7F7", // Light
    c3:"#000000",  // Black  
    c4:"#ffffff"  // White
}
export const lightTheme = {
    backgroundColor:lightBackgroundColor,
    color:lightColor,
    getDarkColorRGBA:(opacityField)=>{
        return `rgba(48,48,48,${opacityField})`
    },
    getLightColorRGBA:(opacityField)=>{
        return `rgba(245,245,245,${opacityField})`
    }
}
export default lightTheme
