import dayjs from "dayjs";
import "dayjs/locale/pl";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("pl");
dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);

export { dayjs };
