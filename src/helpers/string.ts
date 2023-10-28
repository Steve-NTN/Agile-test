const FORMAT_DATETIME = (value = "", type = "datetime") => {
  try {
    let valueParts = value.split("T");
    let date = valueParts[0]?.split("-")?.reverse()?.join("/");
    let time = valueParts[1]?.split(":").slice(0, 2)?.join(":");

    switch (type) {
      case "datetime":
        return `${time} ${date}`;
      case "date":
        return date;
      case "time":
        return time;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const FORMAT_CURRENCY = (amount?: number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });
  return formatter.format(amount || 0).replaceAll(".", ",");
};


export const IS_VALID_STRING = (string?: string) => {
  return string && string?.toString()?.trim() !== "" ? true : false;
};

export { FORMAT_DATETIME };
