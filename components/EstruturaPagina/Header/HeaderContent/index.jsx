import { 
    HeaderContentStyledComponent,
    MenuToggle, MenuToggleLabel, MenuToggleLabelSpan,
    LogoHeaderStyledComponent
} from "./style"

export default function HeaderContent({menuIsOpen, handleMenuToggle}){
    return(
        <HeaderContentStyledComponent>
            <LogoHeader/>
            <HeaderMenuToggle 
                menuIsOpen={menuIsOpen} 
                handleMenuToggle={handleMenuToggle}
            />
        </HeaderContentStyledComponent>
    )
}

function HeaderMenuToggle({menuIsOpen, handleMenuToggle}){
    return(
        <>        
        <MenuToggle
            type="checkbox"
            id="menu-toggle-header"
            checked={menuIsOpen}
            onChange={handleMenuToggle}
        />
        <MenuToggleLabel
            htmlFor="menu-toggle-header"
        >
            <MenuToggleLabelSpan menuIsOpen={menuIsOpen}
            ></MenuToggleLabelSpan>
        </MenuToggleLabel>
        </>

    )
}

function LogoHeader(){
    return(
        <LogoHeaderStyledComponent>
            PedroCeglia | Portifolio
        </LogoHeaderStyledComponent>
    )
}