import WelcomeItems from "./WelcomeItems"
import WelcomeFooter from "./WelcomeFooter"
import BrandCard from "../display/BrandCard"

/**
 * Welcome: card component
 * @constructor
 */
export default function Welcome() {
  return (
    <BrandCard my={20}>
      <WelcomeItems />
      <WelcomeFooter />
    </BrandCard>
  )
}
