/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import MarketStatus from '../sport/enum/MarketStatus';
import Runner from '../sport/Runner';
import KeyLineDescription from '../sport/KeyLineDescription';
export default class MarketBook extends JsonMember {
    private marketId;
    private isMarketDataDelayed;
    private status;
    private betDelay;
    private bspReconciled;
    private complete;
    private inplay;
    private numberOfWinners;
    private numberOfRunners;
    private numberOfActiveRunners;
    private lastMatchTime;
    private totalMatched;
    private totalAvailable;
    private crossMatching;
    private runnersVoidable;
    private version;
    private runners;
    private keyLineDescription;
    constructor(marketId?: string, isMarketDataDelayed?: boolean | null, status?: MarketStatus, betDelay?: number | null, bspReconciled?: boolean | null, complete?: boolean | null, inplay?: boolean | null, numberOfWinners?: number | null, numberOfRunners?: number | null, numberOfActiveRunners?: number | null, lastMatchTime?: Date | null, totalMatched?: number | null, totalAvailable?: number | null, crossMatching?: boolean | null, runnersVoidable?: boolean | null, version?: number | null, runners?: Runner[], keyLineDescription?: KeyLineDescription);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getMarketId(): string;
    setMarketId(marketId: string): void;
    getIsMarketDataDelayed(): boolean | null;
    setIsMarketDataDelayed(isMarketDataDelayed: boolean | null): void;
    getStatus(): MarketStatus;
    setStatus(status: MarketStatus): void;
    getBetDelay(): number | null;
    setBetDelay(betDelay: number | null): void;
    getBspReconciled(): boolean | null;
    setBspReconciled(bspReconciled: boolean | null): void;
    getComplete(): boolean | null;
    setComplete(complete: boolean | null): void;
    getInplay(): boolean | null;
    setInplay(inplay: boolean | null): void;
    getNumberOfWinners(): number | null;
    setNumberOfWinners(numberOfWinners: number | null): void;
    getNumberOfRunners(): number | null;
    setNumberOfRunners(numberOfRunners: number | null): void;
    getNumberOfActiveRunners(): number | null;
    setNumberOfActiveRunners(numberOfActiveRunners: number | null): void;
    getLastMatchTime(): Date | null;
    setLastMatchTime(lastMatchTime: Date | null): void;
    getTotalMatched(): number | null;
    setTotalMatched(totalMatched: number | null): void;
    getTotalAvailable(): number | null;
    setTotalAvailable(totalAvailable: number | null): void;
    getCrossMatching(): boolean | null;
    setCrossMatching(crossMatching: boolean | null): void;
    getRunnersVoidable(): boolean | null;
    setRunnersVoidable(runnersVoidable: boolean | null): void;
    getVersion(): number | null;
    setVersion(version: number | null): void;
    getRunners(): Runner[];
    setRunners(runners: Runner[]): void;
    getKeyLineDescription(): KeyLineDescription;
    setKeyLineDescription(keyLineDescription: KeyLineDescription): void;
}
