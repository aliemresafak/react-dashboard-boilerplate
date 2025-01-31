import { RepairType } from "./types";

export const mocksData: RepairType[] = [
  {
    uuid: "690606bb-bb33-4cc3-a9a3-55f8b07970b2",
    customer: {
      uuid: "0073d52b-464a-438b-8b08-ab404ca409c5",
      firstName: "Laura",
      lastName: "Munoz",
      fullName: "Laura Munoz",
      phoneNumber: "+240353285602",
    },
    code: "k29LTRsg",
    spareParts: [
      {
        uuid: "f62bb91e-6f68-409d-8b83-317860782919",
        name: "iPhone 6 Screen",
        brand: "Apple",
        model: "iPhone 12 Pro",
        price: 1000.0,
        priceWithCurrency: "1000.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
    ],
    phoneLock: null,
    simLock: null,
    latestStatus: "REPAIRED",
    discountRate: 20,
    invoiceNumber: 1,
  },
  {
    uuid: "94123940-b4b5-47ea-86bc-00edfee61898",
    customer: {
      uuid: "0111675a-02c5-41ef-ad14-cc682859e5c4",
      firstName: "Summer",
      lastName: "Williamson",
      fullName: "Summer Williamson",
      phoneNumber: "+38135454093",
    },
    code: "8p6scYIW",
    spareParts: [
      {
        uuid: "d9caf549-3e98-4fe7-9832-9dec4dbcea4b",
        name: "iPhone 6 Battery",
        brand: "Apple",
        model: "iPhone 6",
        price: 500.0,
        priceWithCurrency: "500.0 €",
        amount: 50,
        leftAmount: 50,
        tempAmount: 0,
      },
      {
        uuid: "f62bb91e-6f68-409d-8b83-317860782919",
        name: "iPhone 6 Screen",
        brand: "Apple",
        model: "iPhone 12 Pro",
        price: 1000.0,
        priceWithCurrency: "1000.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
    ],
    phoneLock: null,
    simLock: null,
    latestStatus: "WAITING_REPAIR",
    discountRate: null,
    invoiceNumber: 2,
  },
  {
    uuid: "334ba02f-4995-475e-aa25-d05a1cc40470",
    customer: {
      uuid: "0066d327-8795-41dd-97b8-79517af4aa15",
      firstName: "Sharon",
      lastName: "Ali",
      fullName: "Sharon Ali",
      phoneNumber: "+2382550242",
    },
    code: "wllvj6lu",
    spareParts: [
      {
        uuid: "7f1ef437-76e8-4dd1-8624-57576d403903",
        name: "iPhone 15 Screen",
        brand: "Apple",
        model: "iPhone 15",
        price: 1200.0,
        priceWithCurrency: "1200.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
      {
        uuid: "d9caf549-3e98-4fe7-9832-9dec4dbcea4b",
        name: "iPhone 6 Battery",
        brand: "Apple",
        model: "iPhone 6",
        price: 500.0,
        priceWithCurrency: "500.0 €",
        amount: 50,
        leftAmount: 50,
        tempAmount: 0,
      },
      {
        uuid: "f62bb91e-6f68-409d-8b83-317860782919",
        name: "iPhone 6 Screen",
        brand: "Apple",
        model: "iPhone 12 Pro",
        price: 1000.0,
        priceWithCurrency: "1000.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
    ],
    phoneLock: null,
    simLock: null,
    latestStatus: "REPAIRED",
    discountRate: 15,
    invoiceNumber: 3,
  },
  {
    uuid: "b5282383-ece0-4fff-941e-e3a7ab5f6e7a",
    customer: {
      uuid: "0111675a-02c5-41ef-ad14-cc682859e5c4",
      firstName: "Summer",
      lastName: "Williamson",
      fullName: "Summer Williamson",
      phoneNumber: "+38135454093",
    },
    code: "FtK82uIM",
    spareParts: [
      {
        uuid: "7f1ef437-76e8-4dd1-8624-57576d403903",
        name: "iPhone 15 Screen",
        brand: "Apple",
        model: "iPhone 15",
        price: 1200.0,
        priceWithCurrency: "1200.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
      {
        uuid: "b6a7eb68-a669-4516-b29b-45845093817f",
        name: "iPhone 15 Battery",
        brand: "Apple",
        model: "iPhone 15",
        price: 500.0,
        priceWithCurrency: "500.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
    ],
    phoneLock: null,
    simLock: null,
    latestStatus: null,
    discountRate: null,
    invoiceNumber: 4,
  },
  {
    uuid: "4f794627-3e0e-416b-924c-8d86828a00c8",
    customer: {
      uuid: "0111675a-02c5-41ef-ad14-cc682859e5c4",
      firstName: "Summer",
      lastName: "Williamson",
      fullName: "Summer Williamson",
      phoneNumber: "+38135454093",
    },
    code: "tJTOMBOd",
    spareParts: [
      {
        uuid: "ba36b1b6-27c6-46e7-b6bc-600916f40c4a",
        name: "iPhone 6 Yan Sanayi",
        brand: "Apple",
        model: "iPhone 6s",
        price: 100.0,
        priceWithCurrency: "100.0 €",
        amount: 10,
        leftAmount: 10,
        tempAmount: 0,
      },
    ],
    phoneLock: null,
    simLock: null,
    latestStatus: "REPAIRED",
    discountRate: null,
    invoiceNumber: 5,
  },
];
