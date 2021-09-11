import dayjs from "dayjs";
import "dayjs/locale/pl";
import relativeTime from "dayjs/plugin/relativeTime";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("pl");
dayjs.extend(relativeTime);
dayjs.extend(LocalizedFormat);

export { dayjs };
