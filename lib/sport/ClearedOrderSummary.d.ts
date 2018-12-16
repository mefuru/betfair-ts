/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import PersistenceType from '../sport/enum/PersistenceType';
import OrderType from '../sport/enum/OrderType';
import Side from '../sport/enum/Side';
import ItemDescription from '../sport/ItemDescription';
export default class ClearedOrderSummary extends JsonMember {
    private eventTypeId;
    private eventId;
    private marketId;
    private selectionId;
    private handicap;
    private betId;
    private placedDate;
    private persistenceType;
    private orderType;
    private side;
    private itemDescription;
    private betOutcome;
    private priceRequested;
    private settledDate;
    private lastMatchedDate;
    private betCount;
    private commission;
    private priceMatched;
    private priceReduced;
    private sizeSettled;
    private profit;
    private sizeCancelled;
    private customerOrderRef;
    private customerStrategyRef;
    constructor(eventTypeId?: string, eventId?: string, marketId?: string, selectionId?: number | null, handicap?: number | null, betId?: string, placedDate?: Date | null, persistenceType?: PersistenceType, orderType?: OrderType, side?: Side, itemDescription?: ItemDescription, betOutcome?: string, priceRequested?: number | null, settledDate?: Date | null, lastMatchedDate?: Date | null, betCount?: number | null, commission?: number | null, priceMatched?: number | null, priceReduced?: boolean | null, sizeSettled?: number | null, profit?: number | null, sizeCancelled?: number | null, customerOrderRef?: string, customerStrategyRef?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getEventTypeId(): string;
    setEventTypeId(eventTypeId: string): void;
    getEventId(): string;
    setEventId(eventId: string): void;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getSelectionId(): number | null;
    setSelectionId(selectionId: number | null): void;
    getHandicap(): number | null;
    setHandicap(handicap: number | null): void;
    getBetId(): string;
    setBetId(betId: string): void;
    getPlacedDate(): Date | null;
    setPlacedDate(placedDate: Date | null): void;
    getPersistenceType(): PersistenceType;
    setPersistenceType(persistenceType: PersistenceType): void;
    getOrderType(): OrderType;
    setOrderType(orderType: OrderType): void;
    getSide(): Side;
    setSide(side: Side): void;
    getItemDescription(): ItemDescription;
    setItemDescription(itemDescription: ItemDescription): void;
    getBetOutcome(): string;
    setBetOutcome(betOutcome: string): void;
    getPriceRequested(): number | null;
    setPriceRequested(priceRequested: number | null): void;
    getSettledDate(): Date | null;
    setSettledDate(settledDate: Date | null): void;
    getLastMatchedDate(): Date | null;
    setLastMatchedDate(lastMatchedDate: Date | null): void;
    getBetCount(): number | null;
    setBetCount(betCount: number | null): void;
    getCommission(): number | null;
    setCommission(commission: number | null): void;
    getPriceMatched(): number | null;
    setPriceMatched(priceMatched: number | null): void;
    getPriceReduced(): boolean | null;
    setPriceReduced(priceReduced: boolean | null): void;
    getSizeSettled(): number | null;
    setSizeSettled(sizeSettled: number | null): void;
    getProfit(): number | null;
    setProfit(profit: number | null): void;
    getSizeCancelled(): number | null;
    setSizeCancelled(sizeCancelled: number | null): void;
    getCustomerOrderRef(): string;
    setCustomerOrderRef(customerOrderRef: string): void;
    getCustomerStrategyRef(): string;
    setCustomerStrategyRef(customerStrategyRef: string): void;
}
