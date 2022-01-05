export const renderColorStatus = (status: string) => {
  switch (status) {
    case "Done":
      return "success";
    case "Pending":
      return "warning";
    default:
      return "default";
  }
};
