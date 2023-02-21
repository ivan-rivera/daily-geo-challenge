import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

/**
 * Decorator that checks whether the backend is enabled or disabled and if it is
 * enabled, then it runs the function as normal, otherwise it returns a predefined
 * promise.
 * @param ifDisabled - the value to return if the backend is disabled (default to undefined)
 */
export function ifBackendEnabled<T>(ifDisabled: T | undefined = undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      if (publicRuntimeConfig.backendEnabled) {
        return originalMethod.apply(this, args)
      } else {
        return new Promise((resolve) => {
          resolve(ifDisabled)
        })
      }
    }
    return descriptor
  }
}
