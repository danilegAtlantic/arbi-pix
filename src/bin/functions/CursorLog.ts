import { format } from "date-fns";

enum colorReference {
    Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",
    FgBlack = "\x1b[30m",
    FgRed = "\x1b[31m",
    FgGreen = "\x1b[32m",
    FgYellow = "\x1b[33m",
    FgBlue = "\x1b[34m",
    FgMagenta = "\x1b[35m",
    FgCyan = "\x1b[36m",
    FgWhite = "\x1b[37m",
    FgGray = "\x1b[90m",
    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgWhite = "\x1b[47m",
    BgGray = "\x1b[100m",
};

function tintText(color: colorReference, text: string): string {
    return `${color}${text}\x1b[0m`;
};

function getDate(): string {
    return format(new Date(), "dd/MM/yyyy HH:mm:ss");
}

export function logWarning(): string {
    return `-[${tintText(colorReference.FgYellow, "warning")}]- ${tintText(colorReference.FgCyan, getDate())}`;
};

export function logError(): string {
    return `-[${tintText(colorReference.FgRed, "error")}]- ${tintText(colorReference.FgCyan, getDate())}`;
};

export function logSuccess(): string {
    return `-[${tintText(colorReference.FgGreen, "success")}]- ${tintText(colorReference.FgCyan, getDate())}`;
};

export function tint(str: string): string {
    return `(${tintText(colorReference.FgCyan, str)})-`;
};

export function simpleLog(printType: PrintLogType, logMessage: string) {
    if (printType == 'ERROR') console.log(logError(), logMessage);
    if (printType == 'WARNING') console.log(logWarning(), logMessage);
    if (printType == 'SUCCESS') console.log(logSuccess(), logMessage);
};

export type PrintLogType =
    | 'ERROR'
    | 'WARNING'
    | 'SUCCESS';

export default (printType: PrintLogType, catchFileName: string, error?: any) => {
    if (printType == 'ERROR') console.log(logError(), tint(catchFileName), error);
    if (printType == 'WARNING') console.log(logWarning(), tint(catchFileName), error);
    if (printType == 'SUCCESS') console.log(logSuccess(), tint(catchFileName), error);
};