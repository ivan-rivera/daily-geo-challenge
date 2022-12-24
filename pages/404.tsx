import ErrorPage from "../components/root/ErrorPage"

export const code = 404
export const message = "Oops! This page does not exist!"

/**
 * Custom 404 Page Not Found
 * @constructor
 */
export default function ErrorPage404() {
  return <ErrorPage code={code} message={message} />
}
