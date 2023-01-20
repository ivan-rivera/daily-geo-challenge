import ErrorPage from "../../components/root/ErrorPage"
import { ComponentMeta } from "@storybook/react"
import { code as code404, message as message404 } from "../../pages/404"
import { code as code500, message as message500 } from "../../pages/500"
import React from "react"
import { baseDecorators } from "../lib/decorators"

export default {
  title: "Pages/Error Page",
  component: ErrorPage,
  decorators: baseDecorators(),
} as ComponentMeta<typeof ErrorPage>

export const PageNotFound404 = {
  args: {
    code: code404,
    message: message404,
  },
}

export const ServerError500 = {
  args: {
    code: code500,
    message: message500,
  },
}
