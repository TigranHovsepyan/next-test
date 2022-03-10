import Head from "next/head"
import A from "./A"

export const MainContainer = ({children}) => {
  return (
    <>
      <Head>
        <meta keywords="nextjs"></meta>
      </Head>
      <div>
        <A text="Main" href="/" />
        <A text="User" href="/users" />
      </div>
      <div>
        {children}
      </div>
    </>
  )
}
