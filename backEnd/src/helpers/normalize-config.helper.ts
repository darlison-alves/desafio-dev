import * as moment from "moment";

export const configFile = {
  type: {
    start: 0,
    end: 1,
    name: 'Tipo',
    format: (value) => parseInt(value)
  },
  data: {
    start: 1,
    end: 9,
    name: 'data',
    format: (value) => moment(value).utc().format('yyyy-MM-DD')
  },
  amount: {
    start: 9,
    end: 19,
    name: 'valor',
    format: (value) => (value / 100)
  },
  document: {
    start: 19,
    end: 30,
    name: 'cpf',
    format: (value) => value
  },
  card: {
    start: 30,
    end: 42,
    name: 'cartao',
    format: (value) => value
  },
  hour: {
    start: 42,
    end: 48,
    name: 'Tipo',
    format: (value) => value
  },
  storeOwner: {
    start: 48,
    end: 62,
    name: 'Tipo',
    format: (value) => value
  },
  storeName: {
    start: 62,
    end: 81,
    name: 'Tipo',
    format: (value) => value
  }
}