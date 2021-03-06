/**
 * ipfs-search API
 * Search files and directories on the [Interplanetary Filesystem](https://ipfs.io/) through the [ipfs-search.com](https://ipfs-search.com) search API.
 *
 * OpenAPI spec version: 1.0.2
 * Contact: info@ipfs-search.com
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("metadatahashGet", () => {
    const hash: api.Hash = "QmcDCte64xtxqTVzdWnT5MG9yi3dFsNuLZjAyess4RJFWc"
    return expect(instance.metadatahashGet(hash, {})).resolves.toBeTruthy()
  })
  test("searchGet", () => {
    const q: string = "q_example"
    const type: api.Type = undefined
    const page: number = 56
    return expect(instance.searchGet(q, type, page, {})).resolves.toBeTruthy()
  })
})

