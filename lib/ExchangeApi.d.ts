import CreateDeveloperAppKeysRequest from './account/CreateDeveloperAppKeysRequest';
import DeveloperApp from './account/DeveloperApp';
import GetDeveloperAppKeysResponse from './account/GetDeveloperAppKeysResponse';
import GetAccountFundsRequest from './account/GetAccountFundsRequest';
import AccountFundsResponse from './account/AccountFundsResponse';
import TransferFundsRequest from './account/TransferFundsRequest';
import TransferResponse from './account/TransferResponse';
import AccountDetailsResponse from './account/AccountDetailsResponse';
import GetVendorClientIdResponse from './account/GetVendorClientIdResponse';
import GetApplicationSubscriptionTokenRequest from './account/GetApplicationSubscriptionTokenRequest';
import GetApplicationSubscriptionTokenResponse from './account/GetApplicationSubscriptionTokenResponse';
import ActivateApplicationSubscriptionRequest from './account/ActivateApplicationSubscriptionRequest';
import ActivateApplicationSubscriptionResponse from './account/ActivateApplicationSubscriptionResponse';
import CancelApplicationSubscriptionRequest from './account/CancelApplicationSubscriptionRequest';
import CancelApplicationSubscriptionResponse from './account/CancelApplicationSubscriptionResponse';
import UpdateApplicationSubscriptionRequest from './account/UpdateApplicationSubscriptionRequest';
import UpdateApplicationSubscriptionResponse from './account/UpdateApplicationSubscriptionResponse';
import ListApplicationSubscriptionTokensRequest from './account/ListApplicationSubscriptionTokensRequest';
import ListApplicationSubscriptionTokensResponse from './account/ListApplicationSubscriptionTokensResponse';
import ListAccountSubscriptionTokensResponse from './account/ListAccountSubscriptionTokensResponse';
import GetApplicationSubscriptionHistoryRequest from './account/GetApplicationSubscriptionHistoryRequest';
import GetApplicationSubscriptionHistoryResponse from './account/GetApplicationSubscriptionHistoryResponse';
import GetAccountStatementRequest from './account/GetAccountStatementRequest';
import AccountStatementReport from './account/AccountStatementReport';
import ListCurrencyRatesRequest from './account/ListCurrencyRatesRequest';
import ListCurrencyRatesResponse from './account/ListCurrencyRatesResponse';
import GetAuthorisationCodeRequest from './account/GetAuthorisationCodeRequest';
import AuthorisationResponse from './account/AuthorisationResponse';
import TokenRequest from './account/TokenRequest';
import VendorAccessTokenInfo from './account/VendorAccessTokenInfo';
import GetVendorDetailsRequest from './account/GetVendorDetailsRequest';
import VendorDetails from './account/VendorDetails';
import RevokeAccessToWebAppRequest from './account/RevokeAccessToWebAppRequest';
import RevokeAccessToWebAppResponse from './account/RevokeAccessToWebAppResponse';
import ListAuthorizedWebAppsResponse from './account/ListAuthorizedWebAppsResponse';
import IsAccountSubscribedToWebAppRequest from './account/IsAccountSubscribedToWebAppRequest';
import IsAccountSubscribedToWebAppResponse from './account/IsAccountSubscribedToWebAppResponse';
import GetAffiliateRelationRequest from './account/GetAffiliateRelationRequest';
import GetAffiliateRelationResponse from './account/GetAffiliateRelationResponse';
import HeartbeatRequest from './heartbeat/HeartbeatRequest';
import HeartbeatReport from './heartbeat/HeartbeatReport';
import ListEventTypesRequest from './sport/ListEventTypesRequest';
import ListEventTypesResponse from './sport/ListEventTypesResponse';
import ListCompetitionsRequest from './sport/ListCompetitionsRequest';
import ListCompetitionsResponse from './sport/ListCompetitionsResponse';
import ListTimeRangesRequest from './sport/ListTimeRangesRequest';
import ListTimeRangesResponse from './sport/ListTimeRangesResponse';
import ListEventsRequest from './sport/ListEventsRequest';
import ListEventsResponse from './sport/ListEventsResponse';
import ListMarketTypesRequest from './sport/ListMarketTypesRequest';
import ListMarketTypesResponse from './sport/ListMarketTypesResponse';
import ListCountriesRequest from './sport/ListCountriesRequest';
import ListCountriesResponse from './sport/ListCountriesResponse';
import ListVenuesRequest from './sport/ListVenuesRequest';
import ListVenuesResponse from './sport/ListVenuesResponse';
import ListMarketCatalogueRequest from './sport/ListMarketCatalogueRequest';
import ListMarketCatalogueResponse from './sport/ListMarketCatalogueResponse';
import ListMarketBookRequest from './sport/ListMarketBookRequest';
import ListMarketBookResponse from './sport/ListMarketBookResponse';
import ListRunnerBookRequest from './sport/ListRunnerBookRequest';
import ListRunnerBookResponse from './sport/ListRunnerBookResponse';
import ListCurrentOrdersRequest from './sport/ListCurrentOrdersRequest';
import CurrentOrderSummaryReport from './sport/CurrentOrderSummaryReport';
import ListClearedOrdersRequest from './sport/ListClearedOrdersRequest';
import ClearedOrderSummaryReport from './sport/ClearedOrderSummaryReport';
import PlaceOrdersRequest from './sport/PlaceOrdersRequest';
import PlaceExecutionReport from './sport/PlaceExecutionReport';
import CancelOrdersRequest from './sport/CancelOrdersRequest';
import CancelExecutionReport from './sport/CancelExecutionReport';
import ReplaceOrdersRequest from './sport/ReplaceOrdersRequest';
import ReplaceExecutionReport from './sport/ReplaceExecutionReport';
import UpdateOrdersRequest from './sport/UpdateOrdersRequest';
import UpdateExecutionReport from './sport/UpdateExecutionReport';
import ListMarketProfitAndLossRequest from './sport/ListMarketProfitAndLossRequest';
import ListMarketProfitAndLossResponse from './sport/ListMarketProfitAndLossResponse';
import SetDefaultExposureLimitForMarketGroupsRequest from './sport/SetDefaultExposureLimitForMarketGroupsRequest';
import SetDefaultExposureLimitForMarketGroupsResponse from './sport/SetDefaultExposureLimitForMarketGroupsResponse';
import SetExposureLimitForMarketGroupRequest from './sport/SetExposureLimitForMarketGroupRequest';
import SetExposureLimitForMarketGroupResponse from './sport/SetExposureLimitForMarketGroupResponse';
import RemoveDefaultExposureLimitForMarketGroupsRequest from './sport/RemoveDefaultExposureLimitForMarketGroupsRequest';
import RemoveDefaultExposureLimitForMarketGroupsResponse from './sport/RemoveDefaultExposureLimitForMarketGroupsResponse';
import RemoveExposureLimitForMarketGroupRequest from './sport/RemoveExposureLimitForMarketGroupRequest';
import RemoveExposureLimitForMarketGroupResponse from './sport/RemoveExposureLimitForMarketGroupResponse';
import ListExposureLimitsForMarketGroupsRequest from './sport/ListExposureLimitsForMarketGroupsRequest';
import ListExposureLimitsForMarketGroupsResponse from './sport/ListExposureLimitsForMarketGroupsResponse';
import UnblockMarketGroupRequest from './sport/UnblockMarketGroupRequest';
import UnblockMarketGroupResponse from './sport/UnblockMarketGroupResponse';
import GetExposureReuseEnabledEventsResponse from './sport/GetExposureReuseEnabledEventsResponse';
import AddExposureReuseEnabledEventsRequest from './sport/AddExposureReuseEnabledEventsRequest';
import AddExposureReuseEnabledEventsResponse from './sport/AddExposureReuseEnabledEventsResponse';
import RemoveExposureReuseEnabledEventsRequest from './sport/RemoveExposureReuseEnabledEventsRequest';
import RemoveExposureReuseEnabledEventsResponse from './sport/RemoveExposureReuseEnabledEventsResponse';
export default class ExchangeApi {
    private authToken;
    private loginEndPoint;
    private applicationKey;
    constructor(applicationKey: string);
    login(username: string, password: string): Promise<boolean>;
    logout(): void;
    listEventTypes(request: ListEventTypesRequest): Promise<ListEventTypesResponse>;
    listCompetitions(request: ListCompetitionsRequest): Promise<ListCompetitionsResponse>;
    listTimeRanges(request: ListTimeRangesRequest): Promise<ListTimeRangesResponse>;
    listEvents(request: ListEventsRequest): Promise<ListEventsResponse>;
    listMarketTypes(request: ListMarketTypesRequest): Promise<ListMarketTypesResponse>;
    listCountries(request: ListCountriesRequest): Promise<ListCountriesResponse>;
    listVenues(request: ListVenuesRequest): Promise<ListVenuesResponse>;
    listMarketCatalogue(request: ListMarketCatalogueRequest): Promise<ListMarketCatalogueResponse>;
    listMarketBook(request: ListMarketBookRequest): Promise<ListMarketBookResponse>;
    listRunnerBook(request: ListRunnerBookRequest): Promise<ListRunnerBookResponse>;
    listCurrentOrders(request: ListCurrentOrdersRequest): Promise<CurrentOrderSummaryReport>;
    listClearedOrders(request: ListClearedOrdersRequest): Promise<ClearedOrderSummaryReport>;
    placeOrders(request: PlaceOrdersRequest): Promise<PlaceExecutionReport>;
    cancelOrders(request: CancelOrdersRequest): Promise<CancelExecutionReport>;
    replaceOrders(request: ReplaceOrdersRequest): Promise<ReplaceExecutionReport>;
    updateOrders(request: UpdateOrdersRequest): Promise<UpdateExecutionReport>;
    listMarketProfitAndLoss(request: ListMarketProfitAndLossRequest): Promise<ListMarketProfitAndLossResponse>;
    setDefaultExposureLimitForMarketGroups(request: SetDefaultExposureLimitForMarketGroupsRequest): Promise<SetDefaultExposureLimitForMarketGroupsResponse>;
    setExposureLimitForMarketGroup(request: SetExposureLimitForMarketGroupRequest): Promise<SetExposureLimitForMarketGroupResponse>;
    removeDefaultExposureLimitForMarketGroups(request: RemoveDefaultExposureLimitForMarketGroupsRequest): Promise<RemoveDefaultExposureLimitForMarketGroupsResponse>;
    removeExposureLimitForMarketGroup(request: RemoveExposureLimitForMarketGroupRequest): Promise<RemoveExposureLimitForMarketGroupResponse>;
    listExposureLimitsForMarketGroups(request: ListExposureLimitsForMarketGroupsRequest): Promise<ListExposureLimitsForMarketGroupsResponse>;
    unblockMarketGroup(request: UnblockMarketGroupRequest): Promise<UnblockMarketGroupResponse>;
    getExposureReuseEnabledEvents(): Promise<GetExposureReuseEnabledEventsResponse>;
    addExposureReuseEnabledEvents(request: AddExposureReuseEnabledEventsRequest): Promise<AddExposureReuseEnabledEventsResponse>;
    removeExposureReuseEnabledEvents(request: RemoveExposureReuseEnabledEventsRequest): Promise<RemoveExposureReuseEnabledEventsResponse>;
    createDeveloperAppKeys(request: CreateDeveloperAppKeysRequest): Promise<DeveloperApp>;
    getDeveloperAppKeys(): Promise<GetDeveloperAppKeysResponse>;
    getAccountFunds(request: GetAccountFundsRequest): Promise<AccountFundsResponse>;
    transferFunds(request: TransferFundsRequest): Promise<TransferResponse>;
    getAccountDetails(): Promise<AccountDetailsResponse>;
    getVendorClientId(): Promise<GetVendorClientIdResponse>;
    getApplicationSubscriptionToken(request: GetApplicationSubscriptionTokenRequest): Promise<GetApplicationSubscriptionTokenResponse>;
    activateApplicationSubscription(request: ActivateApplicationSubscriptionRequest): Promise<ActivateApplicationSubscriptionResponse>;
    cancelApplicationSubscription(request: CancelApplicationSubscriptionRequest): Promise<CancelApplicationSubscriptionResponse>;
    updateApplicationSubscription(request: UpdateApplicationSubscriptionRequest): Promise<UpdateApplicationSubscriptionResponse>;
    listApplicationSubscriptionTokens(request: ListApplicationSubscriptionTokensRequest): Promise<ListApplicationSubscriptionTokensResponse>;
    listAccountSubscriptionTokens(): Promise<ListAccountSubscriptionTokensResponse>;
    getApplicationSubscriptionHistory(request: GetApplicationSubscriptionHistoryRequest): Promise<GetApplicationSubscriptionHistoryResponse>;
    getAccountStatement(request: GetAccountStatementRequest): Promise<AccountStatementReport>;
    listCurrencyRates(request: ListCurrencyRatesRequest): Promise<ListCurrencyRatesResponse>;
    getAuthorisationCode(request: GetAuthorisationCodeRequest): Promise<AuthorisationResponse>;
    token(request: TokenRequest): Promise<VendorAccessTokenInfo>;
    getVendorDetails(request: GetVendorDetailsRequest): Promise<VendorDetails>;
    revokeAccessToWebApp(request: RevokeAccessToWebAppRequest): Promise<RevokeAccessToWebAppResponse>;
    listAuthorizedWebApps(): Promise<ListAuthorizedWebAppsResponse>;
    isAccountSubscribedToWebApp(request: IsAccountSubscribedToWebAppRequest): Promise<IsAccountSubscribedToWebAppResponse>;
    getAffiliateRelation(request: GetAffiliateRelationRequest): Promise<GetAffiliateRelationResponse>;
    heartbeat(request: HeartbeatRequest): Promise<HeartbeatReport>;
    private performRequest;
}
