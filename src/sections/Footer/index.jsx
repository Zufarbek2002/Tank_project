import Disclaimer from "../../components/Disclaimer"
import ForClient from "../../components/ForClient"
import Maps from "../../components/Maps"

const Footer = () => {
  return (
    <div className="bg-main-bg">
        <div className="container mx-auto px-4 pt-10 flex flex-col gap-10">
            <ForClient />
            <Maps />
            <div className="pt-40 sm:pt-16 md:pt-14 lg:pt-0">
                <Disclaimer />
            </div>
        </div>
    </div>
  )
}

export default Footer