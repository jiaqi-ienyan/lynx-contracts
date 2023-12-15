import { AggregatorAbiFactory, Erc20AbiFactory, StethAbiFactory, WstethAbiFactory, LdoAbiFactory, WithdrawalQueueAbiFactory, } from './factories';
export const createContractGetter = (factory) => {
    const providerCache = new WeakMap();
    return (address, signerOrProvider, cacheSeed = 0) => {
        const cacheByAddressKey = `${address}-${cacheSeed}`;
        let cacheByAddress = providerCache.get(signerOrProvider);
        let contract = cacheByAddress === null || cacheByAddress === void 0 ? void 0 : cacheByAddress[cacheByAddressKey];
        if (!cacheByAddress) {
            cacheByAddress = {};
            providerCache.set(signerOrProvider, cacheByAddress);
        }
        if (!contract) {
            contract = factory.connect(address, signerOrProvider);
            cacheByAddress[cacheByAddressKey] = contract;
        }
        return contract;
    };
};
export const getAggregatorContract = createContractGetter(AggregatorAbiFactory);
export const getERC20Contract = createContractGetter(Erc20AbiFactory);
export const getSTETHContract = createContractGetter(StethAbiFactory);
export const getWSTETHContract = createContractGetter(WstethAbiFactory);
export const getLDOContract = createContractGetter(LdoAbiFactory);
export const getWithdrawalQueueContract = createContractGetter(WithdrawalQueueAbiFactory);
