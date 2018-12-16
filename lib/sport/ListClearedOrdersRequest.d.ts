/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonRequest from '../JsonRequest';
import BetStatus from '../sport/enum/BetStatus';
import RunnerId from '../sport/RunnerId';
import Side from '../sport/enum/Side';
import TimeRange from '../common/TimeRange';
import GroupBy from '../sport/enum/GroupBy';
export default class ListClearedOrdersRequest extends JsonRequest {
    private betStatus;
    private eventTypeIds;
    private eventIds;
    private marketIds;
    private runnerIds;
    private betIds;
    private customerOrderRefs;
    private customerStrategyRefs;
    private side;
    private settledDateRange;
    private groupBy;
    private includeItemDescription;
    private locale;
    private fromRecord;
    private recordCount;
    constructor(betStatus?: BetStatus, eventTypeIds?: Set<string>, eventIds?: Set<string>, marketIds?: Set<string>, runnerIds?: RunnerId[], betIds?: Set<string>, customerOrderRefs?: Set<string>, customerStrategyRefs?: Set<string>, side?: Side, settledDateRange?: TimeRange, groupBy?: GroupBy, includeItemDescription?: boolean | null, locale?: string, fromRecord?: number | null, recordCount?: number | null);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetStatus(): BetStatus;
    setBetStatus(betStatus: BetStatus): void;
    getEventTypeIds(): Set<string>;
    setEventTypeIds(eventTypeIds: Set<string>): void;
    getEventIds(): Set<string>;
    setEventIds(eventIds: Set<string>): void;
    getMarketIds(): Set<string>;
    setMarketIds(marketIds: Set<string>): void;
    getRunnerIds(): RunnerId[];
    setRunnerIds(runnerIds: RunnerId[]): void;
    getBetIds(): Set<string>;
    setBetIds(betIds: Set<string>): void;
    getCustomerOrderRefs(): Set<string>;
    setCustomerOrderRefs(customerOrderRefs: Set<string>): void;
    getCustomerStrategyRefs(): Set<string>;
    setCustomerStrategyRefs(customerStrategyRefs: Set<string>): void;
    getSide(): Side;
    setSide(side: Side): void;
    getSettledDateRange(): TimeRange;
    setSettledDateRange(settledDateRange: TimeRange): void;
    getGroupBy(): GroupBy;
    setGroupBy(groupBy: GroupBy): void;
    getIncludeItemDescription(): boolean | null;
    setIncludeItemDescription(includeItemDescription: boolean | null): void;
    getLocale(): string;
    setLocale(locale: string): void;
    getFromRecord(): number | null;
    setFromRecord(fromRecord: number | null): void;
    getRecordCount(): number | null;
    setRecordCount(recordCount: number | null): void;
}
