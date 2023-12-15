import { BaseContract } from '@ethersproject/contracts';
import { Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
export interface Factory<C extends BaseContract> {
    connect(address: string, signerOrProvider: Signer | Provider): C;
}
export declare const createContractGetter: <C extends BaseContract>(factory: Factory<C>) => (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => C;
export declare const getAggregatorContract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").AggregatorAbi;
export declare const getERC20Contract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").Erc20Abi;
export declare const getSTETHContract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").StethAbi;
export declare const getWSTETHContract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").WstethAbi;
export declare const getLDOContract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").LdoAbi;
export declare const getWithdrawalQueueContract: (address: string, signerOrProvider: Signer | Provider, cacheSeed?: number) => import("./generated").WithdrawalQueueAbi;
