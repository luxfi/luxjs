/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PChainTransaction } from './PChainTransaction';
import type { PrimaryNetworkChainInfo } from './PrimaryNetworkChainInfo';

export type ListPChainTransactionsResponse = {
    /**
     * A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted or empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    transactions: Array<PChainTransaction>;
    chainInfo: PrimaryNetworkChainInfo;
};

