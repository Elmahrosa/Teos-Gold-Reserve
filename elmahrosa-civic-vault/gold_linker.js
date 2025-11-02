export function logToORCID(contributor, asset, amount, timestamp) {
  return {
    orcid_id: "0009-0002-6498-5569",
    contributor,
    asset,
    amount,
    timestamp,
    entry: `Verified trade of ${amount} ${asset} by ${contributor} logged in chapter_resurrection.md`
  };
}
