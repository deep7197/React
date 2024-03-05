export default function Tabs ({children ,buttons, ButtonContainer = "menu"}){
    // var ButtonContainer = buttonContainer;
    return <>
    <ButtonContainer>{buttons}</ButtonContainer>
    {/* <menu>
        {buttons}
    </menu> */}
    {children}
    </>
}