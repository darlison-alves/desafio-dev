import { Transform, TransformCallback } from "stream";

export class NormalizeTransform extends Transform {
  constructor() {
    super({ objectMode: true })
  }

  _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback): void {
    console.log('chuck', chunk)

    return chunk;
  }
}