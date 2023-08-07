import StyleGlobal from '@/styles/global'
import EstruturaPagina from '@/components/Estruturas/EstruturaPagina'
import StyledComponentsRegistry from '@/styles/styledComponentRegistry'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EstruturaPagina>
        <StyledComponentsRegistry>
          <StyleGlobal/>
          {children}
        </StyledComponentsRegistry>
      </EstruturaPagina>
    </html>
  )
}
