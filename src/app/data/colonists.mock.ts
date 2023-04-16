import {MarsColonistsModel} from "../models/mars-colonists.model";

export const colonistsMock: MarsColonistsModel[] = [
  {
    firstName: 'Franek', lastName: 'Kowalski', children: [
      {
        firstName: 'Mariola',
        lastName: 'Bukała',
        children: [
          {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '13.09.2000'},
          {firstName: 'Marta', lastName: 'Materna', children: [], dateOfBirth: '20.04.1997'},
          {firstName: 'Karolina', lastName: 'Materna', children: [], dateOfBirth: '26.08.1980'},
        ],
        dateOfBirth: '13.09.2000'
      },
      {
        firstName: 'Marta', lastName: 'Materna', children: [
          {firstName: 'Mariola', lastName: 'Bukała', children: [], dateOfBirth: '13.09.2000'},
          {firstName: 'Marta', lastName: 'Materna', children: [], dateOfBirth: '20.04.1997'},
          {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '26.08.1980'},
        ],
        dateOfBirth: '20.04.1997'
      },
      {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '26.08.1980'},
    ], dateOfBirth: '23.10.1999'
  },
  {
    firstName: 'Mariusz',
    lastName: 'Prędki',
    children: [
      {
        firstName: 'Marek',
        lastName: 'Bukała',
        children: [
          {firstName: 'Konrad', lastName: 'Materna', children: [], dateOfBirth: '20.03.1997'},
          {firstName: 'Ferdynand', lastName: 'Kiepski', children: [], dateOfBirth: '26.06.1980'}],
        dateOfBirth: '13.01.2000'
      },],
    dateOfBirth: '13.09.2000'
  },
  {
    firstName: 'Justyna', lastName: 'Grzyb', children: [], dateOfBirth: '02.09.1987'
  },
  {
    firstName: 'Marek', lastName: 'Żarówka', children: [{
      firstName: 'Mariola',
      lastName: 'Bukała',
      children: [
        {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '13.09.2000'},
        {firstName: 'Marta', lastName: 'Materna', children: [], dateOfBirth: '20.04.1997'},
        {firstName: 'Karolina', lastName: 'Materna', children: [], dateOfBirth: '26.08.1980'},
      ],
      dateOfBirth: '13.09.2000'
    },
      {
        firstName: 'Marta', lastName: 'Materna', children: [
          {firstName: 'Mariola', lastName: 'Bukała', children: [], dateOfBirth: '13.09.2000'},
          {firstName: 'Marta', lastName: 'Materna', children: [], dateOfBirth: '20.04.1997'},
          {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '26.08.1980'},
        ],
        dateOfBirth: '20.04.1997'
      },
      {firstName: 'Karolina', lastName: 'Bukała', children: [], dateOfBirth: '26.08.1980'},],
    dateOfBirth: '23.11.2002'
  },
  {firstName: 'Paweł', lastName: 'Kret', children: [], dateOfBirth: '24.01.2000'},
  {firstName: 'Iga', lastName: 'Żarów', children: [], dateOfBirth: '11.06.2001'},
  {firstName: 'Magda', lastName: 'Kowalski', children: [], dateOfBirth: '11.09.1998'},
  {firstName: 'Piotr', lastName: 'Opal', children: [], dateOfBirth: '08.07.1996'},
  {firstName: 'Karol', lastName: 'Błażej', children: [], dateOfBirth: '28.02.2003'},
  {firstName: 'Karolina', lastName: 'Kobylska', children: [], dateOfBirth: '20.06.1994'},
]
