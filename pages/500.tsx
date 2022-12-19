import ErrorPage from "../components/root/ErrorPage";

/**
 * Custom 500 Server Error
 * @constructor
 */
export default function ErrorPage500() {
  return (
    <ErrorPage code={500} message="Oops! Looks like something went wrong!" />
  );
}
