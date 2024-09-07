"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logo.svg"
import ButtonNav from "./ButtonNav"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  return (
    <>
      <div className="w-full h-14 md:h-16 top-0 bg-white overflow-hidden">
        <div className="w-auto mx-5 md:mx-16 px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={Logo} className="w-[102px] md:w-28 h-6 md:h-[26px]" alt={"Logo Errede"} />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p className={isActive("/") ? "text-greenText" : ""}>Inicio</p>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <p className={isActive("/nosotros") ? "text-greenText" : ""}>Nosotros</p>
                </Link>
              </li>
              <li>
                <Link href="/productos">
                  <p className={isActive("/productos") ? "text-greenText" : ""}>Productos</p>
                </Link>
              </li>
              <li>
                <Link href="/novedades">
                  <p className={isActive("/novedades") ? "text-greenText" : ""}>Novedades</p>
                </Link>
              </li>
              <li>
                <Link href="/donde-comprar">
                  <p className={isActive("/donde-comprar") ? "text-greenText" : ""}>Dónde comprar</p>
                </Link>
              </li>
              <li>
                <Link href="/recursos">
                  <p className={isActive("/recursos") ? "text-greenText" : ""}>Recursos</p>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <p className={isActive("/contacto") ? "text-greenText" : ""}>Contacto</p>
                </Link>
              </li>
            </ul>
            <ButtonNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar