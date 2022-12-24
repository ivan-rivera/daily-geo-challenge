import ErrorPage from "../components/root/ErrorPage"

export const code = 500
export const message = "Oops! Something went wrong!"

/**
 * Custom 500 Server Error
 * @constructor
 */
export default function ErrorPage500() {
  return <ErrorPage code={code} message={message} />
}
