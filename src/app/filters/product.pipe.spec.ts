import { ProductFilterPipe } from "./product.pipe";



describe('ProductPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
