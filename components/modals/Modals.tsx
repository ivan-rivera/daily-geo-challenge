import AboutModal from "./About";
import ContactModal from "./Contact";
import TroubleshootingModal from "./Troubleshooting";
import HowItWorksModal from "./HowItWorks";

/**
 * Collection of modals available on the main page
 * @constructor
 */
export default function Modals() {
  return (
    <>
      <AboutModal />
      <TroubleshootingModal />
      <ContactModal />
      <HowItWorksModal />
    </>
  );
}
