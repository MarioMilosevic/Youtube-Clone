export function formatTimeDifference(curDate, pubDate) {
  const timeDifference = curDate.getTime() - pubDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (daysDifference === 0) {
    if (hoursDifference === 0) {
      const minutesDifference = Math.floor(timeDifference / (1000 * 60));
      if (minutesDifference < 1) {
        return "just now";
      } else if (minutesDifference === 1) {
        return "1 minute ago";
      } else {
        return `${minutesDifference} minutes ago`;
      }
    } else if (hoursDifference === 1) {
      return "1 hour ago";
    } else {
      return `${hoursDifference} hours ago`;
    }
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
export const currentDate = new Date();

export const generatePublishedDate = (publishTime:string) => {
  const publishedDate = new Date(publishTime?.substring(0, 10));
  return publishedDate;
};
