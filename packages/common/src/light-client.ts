import type {Api} from "@lodestar/api/beacon";
import {ApiError, routes} from "@lodestar/api";
import type {Bytes32} from "@lodestar/types";
import {
    type GenesisData,
    Lightclient,
    LightclientEvent,
    RunStatusCode
} from "@lodestar/light-client";
import {getClient} from "@lodestar/api";
import {createChainForkConfig} from "@lodestar/config";
import {networksChainConfig} from "@lodestar/config/networks";
import {getLcLoggerConsole} from "@lodestar/light-client/utils";

async function getGenesisData(api: Pick<Api, "beacon">): Promise<GenesisData> {
    const res = await api.beacon.getGenesis();
    ApiError.assert(res);

    return {
        genesisTime: Number(res.response.data.genesisTime),
        genesisValidatorsRoot: res.response.data.genesisValidatorsRoot,
    };
}

async function getSyncCheckpoint(api: Pick<Api, "beacon">): Promise<Bytes32> {
    const res = await api.beacon.getStateFinalityCheckpoints("head");
    ApiError.assert(res);
    return res.response.data.finalized.root;
}

export function createClient() {
    const config = createChainForkConfig(networksChainConfig.mainnet);
    const logger = getLcLoggerConsole({logDebug: Boolean(process.env.DEBUG)});
    return getClient({urls: ["https://lodestar-mainnet.chainsafe.io"]}, {config});
}