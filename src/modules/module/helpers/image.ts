export function getUrlWithUserFileLocation(hash: string, userId: string) {
  return `${process.env.KNN_PROXY_URL}/${userId}/${hash}`;
}

export function getUserFileLocation(hash: string, userId: string) {
  return `${userId}/${hash}`;
}
