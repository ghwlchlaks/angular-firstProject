import { BookPricePipe } from './book-price.pipe';

describe('BookPricePipe', () => {
  it('create an instance', () => {
    const pipe = new BookPricePipe();
    expect(pipe).toBeTruthy();
  });
});
