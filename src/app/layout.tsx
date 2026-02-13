import { Providers } from "./providers"
import "./globals.css"

const layout = ({children}:  {children: React.ReactNode}) => {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default layout
