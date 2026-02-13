import { Providers } from "./providers"

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
