import Image from "next/image"
import Menu from '../../public/images/menuMobile.svg'

const ButtonNav = () => {
  return (
    <>
      <div className="md:hidden">
        <Image src={Menu} width={24} height={24} alt="Menu button" />
      </div>
    </>
  )
}

export default ButtonNav