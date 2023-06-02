import StyleGlobal from '@/styles/global'
import EstruturaPagina from '@/components/EstruturaPagina'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyleGlobal/>

      <EstruturaPagina>
        {children}
      </EstruturaPagina>
    </html>
  )
}
