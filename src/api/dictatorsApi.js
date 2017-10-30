import delay from './delay';
import { fidel, raul, batista, rick } from '../images'
const dictators = [
  {
    id: '1',
    firstName: 'Fulgencio',
    lastName: 'Batista',
    inOffice: "October 1940 - October 1944",
    image: batista
  },
  {
    id: '2',
    firstName: 'Fidel',
    lastName: 'Castro',
    inOffice: "December 1976  - February 2008",
    image: fidel
  },
  {
    id: '3',
    firstName: 'Raúl',
    lastName: 'Castro',
    inOffice: "February 2008 - present",
    image: raul
  },
  {
    id: '4',
    firstName: 'Rick',
    lastName: 'Martínez',
    inOffice: "October 2017 - present",
    image: rick
  }
];

class DictatorsApi {
  static getAllDictators() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], dictators));
      }, delay);
    });
  }
}

export default DictatorsApi;