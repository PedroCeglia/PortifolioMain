import EstruturaPagina from '@/components/EstruturaPagina'

export const metadata = {
  title: 'PedroCeglia | Portifólio',
  description: 'Web Developer Portifolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <EstruturaPagina>
        {children}
      </EstruturaPagina>
    </html>
  )
}
