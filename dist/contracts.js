"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithdrawalQueueContract = exports.getLDOContract = exports.getWSTETHContract = exports.getSTETHContract = exports.getERC20Contract = exports.getAggregatorContract = exports.createContractGetter = void 0;
var factories_1 = require("./factories");
var createContractGetter = function (factory) {
    var providerCache = new WeakMap();
    return function (address, signerOrProvider, cacheSeed) {
        if (cacheSeed === void 0) { cacheSeed = 0; }
        var cacheByAddressKey = "".concat(address, "-").concat(cacheSeed);
        var cacheByAddress = providerCache.get(signerOrProvider);
        var contract = cacheByAddress === null || cacheByAddress === void 0 ? void 0 : cacheByAddress[cacheByAddressKey];
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
exports.createContractGetter = createContractGetter;
exports.getAggregatorContract = (0, exports.createContractGetter)(factories_1.AggregatorAbiFactory);
exports.getERC20Contract = (0, exports.createContractGetter)(factories_1.Erc20AbiFactory);
exports.getSTETHContract = (0, exports.createContractGetter)(factories_1.StethAbiFactory);
exports.getWSTETHContract = (0, exports.createContractGetter)(factories_1.WstethAbiFactory);
exports.getLDOContract = (0, exports.createContractGetter)(factories_1.LdoAbiFactory);
exports.getWithdrawalQueueContract = (0, exports.createContractGetter)(factories_1.WithdrawalQueueAbiFactory);
