import ExplorerActionGenerator from '../../Actions/Explorer';
import { ApiAsset, ApiCollection, ApiConfig, ApiLog, ApiOffer, ApiSchema, ApiSchemaStats, ApiTemplate, ApiTemplateStats, ApiTransfer } from './Types';
declare type Fetch = (input?: Request | string, init?: RequestInit) => Promise<Response>;
declare type ApiArgs = {
    fetch?: Fetch;
    rateLimit?: number;
};
interface GreylistParams {
    collection_blacklist?: string;
    collection_whitelist?: string;
}
interface HideOffersParams {
    hide_offers?: boolean;
    hide_sales?: boolean;
}
interface PrimaryBoundaryParams {
    ids?: string;
    lower_bound?: string;
    upper_bound?: string;
}
interface DateBoundaryParams {
    before?: number;
    after?: number;
}
export interface AssetParams extends GreylistParams, HideOffersParams, PrimaryBoundaryParams, DateBoundaryParams {
    owner?: string;
    burned?: boolean;
    collection_name?: string;
    schema_name?: string;
    template_id?: number;
    match?: string;
    authorized_account?: string;
    is_transferable?: boolean;
    is_burnable?: boolean;
    only_duplicate_templates?: boolean;
    order?: string;
    sort?: string;
    [key: string]: any;
}
export interface CollectionParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    author?: string;
    match?: string;
    authorized_account?: string;
    notify_account?: string;
    order?: string;
    sort?: string;
}
export interface SchemaParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    collection_name?: string;
    schema_name?: string;
    match?: string;
    authorized_account?: string;
    order?: string;
    sort?: string;
}
export interface TemplateParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    collection_name?: string;
    schema_name?: string;
    authorized_account?: string;
    template_id?: string;
    max_supply?: number;
    issued_supply?: number;
    is_transferable?: boolean;
    is_burnable?: boolean;
    order?: string;
    sort?: string;
    [key: string]: any;
}
export interface TransferParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    account?: string;
    sender?: string;
    recipient?: string;
    asset_id?: string;
    order?: string;
    sort?: string;
}
export interface OfferParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    account?: string;
    sender?: string;
    recipient?: string;
    is_recipient_contract?: boolean;
    asset_id?: string;
    order?: string;
    sort?: string;
}
export interface AccountParams extends GreylistParams, PrimaryBoundaryParams, DateBoundaryParams {
    match?: string;
    collection_name?: string;
    schema_name?: string;
    template_id?: string;
}
export declare type DataOptions = {
    [key: string]: any;
};
export default class ExplorerApi {
    readonly action: Promise<ExplorerActionGenerator>;
    private readonly endpoint;
    private readonly namespace;
    private readonly fetchBuiltin;
    constructor(endpoint: string, namespace: string, args: ApiArgs);
    getConfig(): Promise<ApiConfig>;
    getAssets(options?: AssetParams, page?: number, limit?: number, data?: DataOptions): Promise<ApiAsset[]>;
    countAssets(options: AssetParams, data?: DataOptions): Promise<number>;
    getAsset(id: string): Promise<ApiAsset>;
    getAssetStats(id: string): Promise<ApiAsset>;
    getAssetLogs(id: string, page?: number, limit?: number, order?: string): Promise<ApiLog[]>;
    getCollections(options?: CollectionParams, page?: number, limit?: number): Promise<ApiCollection[]>;
    countCollections(options?: CollectionParams): Promise<number>;
    getCollection(name: string): Promise<ApiCollection>;
    getCollectionStats(name: string): Promise<ApiCollection>;
    getCollectionLogs(name: string, page?: number, limit?: number, order?: string): Promise<ApiLog[]>;
    getSchemas(options?: SchemaParams, page?: number, limit?: number): Promise<ApiSchema[]>;
    countSchemas(options?: SchemaParams): Promise<number>;
    getSchema(collection: string, name: string): Promise<ApiSchema>;
    getSchemaStats(collection: string, name: string): Promise<ApiSchemaStats>;
    getSchemaLogs(collection: string, name: string, page?: number, limit?: number, order?: string): Promise<ApiLog[]>;
    getTemplates(options?: TemplateParams, page?: number, limit?: number, data?: DataOptions): Promise<ApiTemplate[]>;
    countTemplates(options?: TemplateParams, data?: DataOptions): Promise<number>;
    getTemplate(collection: string, id: string): Promise<ApiTemplate>;
    getTemplateStats(collection: string, name: string): Promise<ApiTemplateStats>;
    getTemplateLogs(collection: string, id: string, page?: number, limit?: number, order?: string): Promise<ApiLog[]>;
    getTransfers(options?: TransferParams, page?: number, limit?: number): Promise<ApiTransfer[]>;
    countTransfers(options?: TransferParams): Promise<number>;
    getOffers(options?: OfferParams, page?: number, limit?: number): Promise<ApiOffer[]>;
    countOffers(options?: OfferParams): Promise<number>;
    getOffer(id: string): Promise<ApiOffer>;
    getAccounts(options?: AccountParams, page?: number, limit?: number): Promise<Array<{
        account: string;
        assets: string;
    }>>;
    getBurns(options?: AccountParams, page?: number, limit?: number): Promise<Array<{
        account: string;
        assets: string;
    }>>;
    countAccounts(options?: AccountParams): Promise<number>;
    getAccount(account: string, options?: GreylistParams & HideOffersParams): Promise<{
        assets: string;
        collections: Array<{
            collection: ApiCollection;
            assets: string;
        }>;
    }>;
    getAccountCollection(account: string, collection: string): Promise<{
        templates: Array<{
            template_id: string;
            assets: string;
        }>;
        schemas: Array<{
            schema_name: string;
            assets: string;
        }>;
    }>;
    getAccountBurns(account: string, options?: GreylistParams & HideOffersParams): Promise<{
        assets: string;
        collections: Array<{
            collection: ApiCollection;
            assets: string;
        }>;
    }>;
    fetchEndpoint(path: string, args: any): Promise<any>;
    countEndpoint(path: string, args: any): Promise<number>;
}
export {};
