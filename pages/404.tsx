import ErrorPage from "../components/root/ErrorPage";

/**
 * Custom 404 Page Not Found
 * @constructor
 */
export default function ErrorPage404() {
  return <ErrorPage code={404} message="Oops! This page does not exist!" />;
}
