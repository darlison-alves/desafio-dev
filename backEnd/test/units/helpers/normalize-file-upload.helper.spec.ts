import { NormalizeFileUpload } from "../../../src/helpers/normalize-file-upload.helper"

const TIPO = "3";
const itemMock = {
  type: 3,
  data: '2019-03-01',
  amount: 142,
  document: "09620676017",
  card: '4753****3153',
  hour: '153453',
  storeOwner: 'JOÃO MACEDO',
  storeName: 'BAR DO JOÃO'
}

describe('#helpers', () => {
  describe('normalize file upload', () => {
    it('Should return object json normalize', () => {
      const line = '3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ';
      const object: any = NormalizeFileUpload.toJSON(line)
      expect(object).toEqual(itemMock);
    })

    it('Should get type of transaction', () => {
      const result = NormalizeFileUpload.substring('3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ', 0, 1);
      expect(result).toBe(TIPO)
    })
  })
})
