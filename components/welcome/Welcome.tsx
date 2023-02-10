import WelcomeItems from "./WelcomeItems"
import WelcomeFooter from "./WelcomeFooter"
import BrandCard from "../display/BrandCard"
import React from "react"

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
