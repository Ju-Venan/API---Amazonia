import { v4 as uuid4 } from "uuid";
import { fileURLToPath } from "url";
import { format } from "date-fns";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid4()}\t${message}\n`;

  try {
    const logsDir = path.join(__dirname, "..", "logs");
    if (!fs.existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }

    await fsPromises.appendFile(path.join(logsDir, logFileName), logItem);
  } catch (err) {
    console.log("Erro na função LogEvents", err);
  }
};

const logger = (req, res, next) => {
  logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}`,
    "Log_de_requisicao.log"
  );
  next();
};

export { logger, logEvents };
