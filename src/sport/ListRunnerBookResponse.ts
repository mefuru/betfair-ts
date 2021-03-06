/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import MarketBook, { IMarketBookOptions } from '../sport/MarketBook';

export interface IListRunnerBookResponseOptions {
    marketBooks?: (MarketBook | IMarketBookOptions)[];
}

export default class ListRunnerBookResponse extends JsonResponse {
    private marketBooks?: MarketBook[];

    constructor(options: (MarketBook | IMarketBookOptions)[]) {
        super();
        if (this.validateJson(options)) {
            if (options) {
                this.marketBooks = this.arrayFromJson(options, MarketBook);
            }
        }
    }

    public toJson(): IListRunnerBookResponseOptions {
        throw new Error('not implemented');
    }

    public getMarketBooks(): MarketBook[] | undefined {
        return this.marketBooks;
    }
    public setMarketBooks(marketBooks: MarketBook[]): void {
        this.marketBooks = marketBooks;
    }

}
