import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

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
