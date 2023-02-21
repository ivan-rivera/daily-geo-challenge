import {
  Analytics,
  isSupported,
  logEvent,
  setUserProperties,
} from "@firebase/analytics"
import { getAnalytics } from "../firebase/setup"
import { ifBackendEnabled } from "../lib/backend"
import { store } from "../store/store"

type EventProps = Record<string, string | number>

/**
 * Analytics service. This class is used to handle GA events.
 * Note that the analytics service also classifies as a backend service.
 */
export default class AnalyticsService {
  private static get instance(): Analytics {
    const fbOpts = store.getState().session.fbOpts
    return getAnalytics(fbOpts)
  }
  @ifBackendEnabled()
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
