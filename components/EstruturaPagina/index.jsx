import Header from "./Header"
export default function EstruturaPagina({children}){
    return(
        <body>
            <Header/>
            {children}
            footer
        </body>
    )
}