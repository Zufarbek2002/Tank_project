import ContactFooter from "../../components/ContactFooter";
import Disclaimer from "../../components/Disclaimer"
import ForClient from "../../components/ForClient"
import LastFooter from "../../components/LastFooter";
import Maps from "../../components/Maps"

const Footer = () => {
  return (
    <div className="bg-main-bg">
      <div className="container mx-auto xl:px-20 px-4 pt-10 flex flex-col gap-10">
        <ForClient />
        <Maps />
        <div className="pt-40 sm:pt-16 md:pt-14 lg:pt-0">
          <Disclaimer />
          <ContactFooter />
          <LastFooter />
        </div>
      </div>
    </div>
  );
}

export default Footer