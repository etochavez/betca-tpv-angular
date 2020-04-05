export interface Shopping {
  articleId: string;
  code: string;
  description: string;
  retailPrice: number;
  amount: number;
  discount?: number;
  shoppingState?: ShoppingState;
}

export enum ShoppingState {
  NOT_COMMITTED = 'NOT_COMMITTED',
  REQUIRE_PROVIDER = 'REQUIRE_PROVIDER',
  IN_STOCK = 'IN_STOCK',
  COMMITTED = 'COMMITTED'
}
