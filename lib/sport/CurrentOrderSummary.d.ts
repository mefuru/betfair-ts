/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import PriceSize, { IPriceSizeOptions } from '../sport/PriceSize';
export interface ICurrentOrderSummaryOptions {
    betId: string;
    marketId: string;
    selectionId: number;
    handicap: number;
    priceSize: PriceSize | IPriceSizeOptions;
    bspLiability: number;
    side: Side | string;
    status: OrderStatus | string;
    persistenceType: PersistenceType | string;
    orderType: OrderType | string;
    placedDate: Date | string;
    matchedDate: Date | string;
    averagePriceMatched?: number;
    sizeMatched?: number;
    sizeRemaining?: number;
    sizeLapsed?: number;
    sizeCancelled?: number;
    sizeVoided?: number;
    regulatorAuthCode?: string;
    regulatorCode?: string;
    customerOrderRef?: string;
    customerStrategyRef?: string;
}
export default class CurrentOrderSummary extends JsonMember {
    private betId;
    private marketId;
    private selectionId;
    private handicap;
    private priceSize;
    private bspLiability;
    private side;
    private status;
    private persistenceType;
    private orderType;
    private placedDate;
    private matchedDate;
    private averagePriceMatched?;
    private sizeMatched?;
    private sizeRemaining?;
    private sizeLapsed?;
    private sizeCancelled?;
    private sizeVoided?;
    private regulatorAuthCode?;
    private regulatorCode?;
    private customerOrderRef?;
    private customerStrategyRef?;
    constructor(options: ICurrentOrderSummaryOptions);
    toJson(): ICurrentOrderSummaryOptions;
    getBetId(): string;
    setBetId(betId: string): void;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getSelectionId(): number;
    setSelectionId(selectionId: number): void;
    getHandicap(): number;
    setHandicap(handicap: number): void;
    getPriceSize(): PriceSize;
    setPriceSize(priceSize: PriceSize): void;
    getBspLiability(): number;
    setBspLiability(bspLiability: number): void;
    getSide(): Side;
    setSide(side: Side): void;
    getStatus(): OrderStatus;
    setStatus(status: OrderStatus): void;
    getPersistenceType(): PersistenceType;
    setPersistenceType(persistenceType: PersistenceType): void;
    getOrderType(): OrderType;
    setOrderType(orderType: OrderType): void;
    getPlacedDate(): Date;
    setPlacedDate(placedDate: Date): void;
    getMatchedDate(): Date;
    setMatchedDate(matchedDate: Date): void;
    getAveragePriceMatched(): number | undefined;
    setAveragePriceMatched(averagePriceMatched: number): void;
    getSizeMatched(): number | undefined;
    setSizeMatched(sizeMatched: number): void;
    getSizeRemaining(): number | undefined;
    setSizeRemaining(sizeRemaining: number): void;
    getSizeLapsed(): number | undefined;
    setSizeLapsed(sizeLapsed: number): void;
    getSizeCancelled(): number | undefined;
    setSizeCancelled(sizeCancelled: number): void;
    getSizeVoided(): number | undefined;
    setSizeVoided(sizeVoided: number): void;
    getRegulatorAuthCode(): string | undefined;
    setRegulatorAuthCode(regulatorAuthCode: string): void;
    getRegulatorCode(): string | undefined;
    setRegulatorCode(regulatorCode: string): void;
    getCustomerOrderRef(): string | undefined;
    setCustomerOrderRef(customerOrderRef: string): void;
    getCustomerStrategyRef(): string | undefined;
    setCustomerStrategyRef(customerStrategyRef: string): void;
}
