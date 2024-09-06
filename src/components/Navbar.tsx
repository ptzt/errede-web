import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/images/logo.svg"
import ButtonNav from "./ButtonNav"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-14 md:h-16 top-0 bg-white overflow-hidden">
        <div className="w-auto mx-5 md:mx-16 px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={Logo} className="w-[102px] md:w-28 h-6 md:h-[26px]" alt={"Logo Errede"} />
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p>Inicio</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Nosotros</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Productos</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Novedades</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Dónde comprar</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Recursos</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>Contacto</p>
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