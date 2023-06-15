import '@/styles/globals.css'
import { Nunito } from 'next/font/google'
import '@/styles/style.css'
import Footer from '@/components/footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Pogoda na Pomorzu',
  description: 'Wyszukaj miasta na pomorzu i sprawdź pogodę do tygodnia w przód'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={nunito.className}>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
