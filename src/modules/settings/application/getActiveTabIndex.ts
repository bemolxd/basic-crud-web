export const getActiveTabIndex = (path: string) => {
  const baseURL = "/settings";

  switch (path) {
    case baseURL:
      return 0;
    case `${baseURL}/change-password`:
      return 1;
    case `${baseURL}/cookies`:
      return 2;
    case `${baseURL}/privacy`:
      return 3;
    default:
      return 0;
  }
};
