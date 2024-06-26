import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import style from './layout.module.css'
import { Header } from "../components/header"


export const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  )
}