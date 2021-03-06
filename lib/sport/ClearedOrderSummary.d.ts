/**
 * Copyright 2020 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
import ItemDescription, { IItemDescriptionOptions } from '../sport/ItemDescription';
export interface IClearedOrderSummaryOptions {
    eventTypeId?: string;
    eventId?: string;
    marketId?: string;
    selectionId?: number;
    handicap?: number;
    betId?: string;
    placedDate?: Date | string;
    persistenceType?: PersistenceType | string;
    orderType?: OrderType | string;
    side?: Side | string;
    itemDescription?: ItemDescription | IItemDescriptionOptions;
    betOutcome?: string;
    priceRequested?: number;
    settledDate?: Date | string;
    lastMatchedDate?: Date | string;
    betCount?: number;
    commission?: number;
    priceMatched?: number;
    priceReduced?: boolean;
    sizeSettled?: number;
    profit?: number;
    sizeCancelled?: number;
    customerOrderRef?: string;
    customerStrategyRef?: string;
}
export default class ClearedOrderSummary extends JsonMember {
    private eventTypeId?;
    private eventId?;
    private marketId?;
    private selectionId?;
    private handicap?;
    private betId?;
    private placedDate?;
    private persistenceType?;
    private orderType?;
    private side?;
    private itemDescription?;
    private betOutcome?;
    private priceRequested?;
    private settledDate?;
    private lastMatchedDate?;
    private betCount?;
    private commission?;
    private priceMatched?;
    private priceReduced?;
    private sizeSettled?;
    private profit?;
    private sizeCancelled?;
    private customerOrderRef?;
    private customerStrategyRef?;
    constructor(options: IClearedOrderSummaryOptions);
    toJson(): IClearedOrderSummaryOptions;
    getEventTypeId(): string | undefined;
    setEventTypeId(eventTypeId: string): void;
    getEventId(): string | undefined;
    setEventId(eventId: string): void;
    getMarketId(): string | undefined;
    setMarketId(marketId: string): void;
    getSelectionId(): number | undefined;
    setSelectionId(selectionId: number): void;
    getHandicap(): number | undefined;
    setHandicap(handicap: number): void;
    getBetId(): string | undefined;
    setBetId(betId: string): void;
    getPlacedDate(): Date | undefined;
    setPlacedDate(placedDate: Date): void;
    getPersistenceType(): PersistenceType | undefined;
    setPersistenceType(persistenceType: PersistenceType): void;
    getOrderType(): OrderType | undefined;
    setOrderType(orderType: OrderType): void;
    getSide(): Side | undefined;
    setSide(side: Side): void;
    getItemDescription(): ItemDescription | undefined;
    setItemDescription(itemDescription: ItemDescription): void;
    getBetOutcome(): string | undefined;
    setBetOutcome(betOutcome: string): void;
    getPriceRequested(): number | undefined;
    setPriceRequested(priceRequested: number): void;
    getSettledDate(): Date | undefined;
    setSettledDate(settledDate: Date): void;
    getLastMatchedDate(): Date | undefined;
    setLastMatchedDate(lastMatchedDate: Date): void;
    getBetCount(): number | undefined;
    setBetCount(betCount: number): void;
    getCommission(): number | undefined;
    setCommission(commission: number): void;
    getPriceMatched(): number | undefined;
    setPriceMatched(priceMatched: number): void;
    getPriceReduced(): boolean | undefined;
    setPriceReduced(priceReduced: boolean): void;
    getSizeSettled(): number | undefined;
    setSizeSettled(sizeSettled: number): void;
    getProfit(): number | undefined;
    setProfit(profit: number): void;
    getSizeCancelled(): number | undefined;
    setSizeCancelled(sizeCancelled: number): void;
    getCustomerOrderRef(): string | undefined;
    setCustomerOrderRef(customerOrderRef: string): void;
    getCustomerStrategyRef(): string | undefined;
    setCustomerStrategyRef(customerStrategyRef: string): void;
}
