import cors from "cors";

const cors_config = { origin: '*' };
const corsMiddleware = cors(cors_config);

export default corsMiddleware;