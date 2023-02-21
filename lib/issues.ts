import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

/**
 * A function that is used to create a new issue on GitHub. This is directly
 * connected to the suggestion text from the website. Note that the token provided
 * belongs to the author's personal account, however it is exclusively limited to
 * creating issues in the target repository minimizing the potential for abuse.
 * @param content
 * @param token
 */
export async function createIssue(
  content: string,
  token: string
): Promise<void> {
  const issue = {
    title: "Suggestion created via website",
    body: content,
    labels: ["suggestion"],
  }
  fetch(`https://api.github.com/repos/${publicRuntimeConfig.repo}/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`,
    },
    body: JSON.stringify(issue),
  })
    .then(() => console.log("Issue created"))
    .catch((err) => console.error("Failed to create issue", err))
}
