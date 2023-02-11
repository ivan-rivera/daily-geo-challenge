import getConfig from "next/config"

const { publicRuntimeConfig } = getConfig()

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
