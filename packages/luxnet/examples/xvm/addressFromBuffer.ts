import { Lux, Buffer } from "lux/dist"
import { XVMAPI } from "lux/dist/apis/xvm"
import { UTXOSet, UTXO } from "lux/dist/apis/platformvm"
import { Output } from "lux/dist/common"
// Change the networkID to affect the HRP of the bech32 encoded address
// NetworkID - Bech32 Address - ChainPrefix-HRP1AddressChecksum
//         0 - X-custom19rknw8l0grnfunjrzwxlxync6zrlu33yeg5dya
//         1 - X-lux19rknw8l0grnfunjrzwxlxync6zrlu33y2jxhrg
//         2 - X-cascade19rknw8l0grnfunjrzwxlxync6zrlu33ypmtvnh
//         3 - X-denali19rknw8l0grnfunjrzwxlxync6zrlu33yhc357h
//         4 - X-everest19rknw8l0grnfunjrzwxlxync6zrlu33yn44wty
//         5 - X-testnet19rknw8l0grnfunjrzwxlxync6zrlu33yxqzg0h
//      1337 - X-custom19rknw8l0grnfunjrzwxlxync6zrlu33yeg5dya
//     12345 - X-local19rknw8l0grnfunjrzwxlxync6zrlu33ynpm3qq
const networkID: number = 12345
const lux: Lux = new Lux(undefined, undefined, undefined, networkID)
const xchain: XVMAPI = lux.XChain()

const main = async (): Promise<any> => {
  const utxoset: UTXOSet = new UTXOSet()
  utxoset.addArray([
    "11Zf8cc55Qy1rVgy3t87MJVCSEu539whRSwpdbrtHS6oh5Hnwv1gz8G3BtLJ73MPspLkD93cygZufT4TPYZCmuxW5cRdPrVMbZAHfb6uyGM1jNGBhBiQAgQ6V1yceYf825g27TT6WU4bTdbniWdECDWdGdi84hdiqSJH2y",
    "11Zf8cc55Qy1rVgy3t87MJVCSEu539whRSwpdbrtHS6oh5Hnwv1NjNhqZnievVs2kBD9qTrayBYRs91emGTtmnu2wzqpLstbAPJDdVjf3kjwGWywNCdjV6TPGojVR5vHpJhBVRtHTQXR9VP9MBdHXge8zEBsQJAoZhTbr2"
  ])
  const utxos: UTXO[] = utxoset.getAllUTXOs()

  utxos.map((utxo: UTXO): void => {
    const output: Output = utxo.getOutput()
    const addresses: string[] = output
      .getAddresses()
      .map((x: Buffer): string => {
        const addy: string = xchain.addressFromBuffer(x)
        return addy
      })
    console.log(addresses)
  })
}

main()
