export function formatTimeDifference(curDate, pubDate) {
  const timeDifference = curDate.getTime() - pubDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference === 0) {
    return "today";
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else if (daysDifference < 7) {
    return `${daysDifference} days ago`;
  } else if (daysDifference <= 30) {
    const weeksDifference = Math.floor(daysDifference / 7);
    return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
  } else if (daysDifference <= 365) {
    const monthsDifference = Math.floor(daysDifference / 30);
    return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
  } else {
    const yearsDifference = Math.floor(daysDifference / 365);
    return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} ago`;
  }
}