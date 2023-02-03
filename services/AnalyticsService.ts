import {
  Analytics,
  isSupported,
  logEvent,
  setUserProperties,
} from "@firebase/analytics"
import { getAnalytics } from "../firebase/setup"

type EventProps = Record<string, string | number>

export default class AnalyticsService {
  private static get instance(): Analytics {
    return getAnalytics()
  }
  private static submit(fn: () => void): void {
    try {
      isSupported()
        .then(fn)
        .then(() => console.log("Event submitted"))
        .catch((e) => console.error("Analytics not supported", e))
    } catch (e) {
      console.error("Error logging event submit", e)
    }
  }
  static logEvent(name: string, details: EventProps = {}): void {
    this.submit(() => logEvent(this.instance, name, details))
  }
  static setUserProperties(details: EventProps): void {
    this.submit(() => setUserProperties(this.instance, details))
  }
}
