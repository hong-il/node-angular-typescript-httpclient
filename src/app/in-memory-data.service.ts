import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hong-il' },
      { id: 12, name: 'github.com/hong-il' },
      { id: 13, name: 'truth' },
    ];
    return {heroes};
  }
}