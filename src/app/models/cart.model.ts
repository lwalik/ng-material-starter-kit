export interface CartModel {
  readonly id: number;
  readonly userId: number;
  readonly date: Date;
  readonly products: Record<string,string>[];
}
