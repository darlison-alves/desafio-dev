import { configFile } from "./normalize-config.helper"

export class NormalizeFileUpload {
  public static toJSON(line: string) {
    const obj = {}
    
    for (const key of Object.keys(configFile)) {
      let config = configFile[key];
      const normalized = NormalizeFileUpload.substring(line, config.start, config.end)
      // console.log('normalized',key, normalized)
      obj[key] = config.format(normalized);
    }
    return obj;   
  }

  public static substring(text: string, start: number, end: number) {
    return text.substring(start, end)
  }
}