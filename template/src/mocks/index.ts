import { setupWorker } from "msw";

import todoHandlers from "./todos";

export default setupWorker(...todoHandlers);
