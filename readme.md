# uptimerobot-types

This repo provides Typescript typings for the Uptimerobot API v2.

**Note**: This is not a 100% representation of the API Spec and updates are best effort. Please refer to [https://uptimerobot.com/api](https://uptimerobot.com/api) for the official API documentation.

**Note**: This document is not affliated with Uptime Robot Service Provider Ltd. Issues and/or support should relating to this library be directed to the project's [issue tracker](https://github.com/jimleuk/uptimerobot-types/issues).

## Usage

```
// eg. 1 via namespace
const myMonitor: Uptimerobot.Monitor = {
  type: MonitorType.https,
  ...
}

// eg. 2 via module
import { MonitorListRequest, MonitorListResponse } from 'uptimerobot'

const fetchMonitors = async (params: MonitorListRequest): MonitorListResponse =>
  await fetch(url, params)
```

## Reference

```
Uptimerobot {
  Account
  AlertContact
  AlertContactListRequest
  AlertContactListResponse
  AlertContactCreateRequest
  AlertContactCreateResponse
  AlertContactEditRequest
  AlertContactEditResponse
  AlertContactDeleteRequest
  AlertContactDeleteResponse
  Log
  Monitor
  MonitorListRequest
  MonitorListResponse
  MonitorCreateRequest
  MonitorCreateResponse
  MonitorEditRequest
  MonitorEditResponse
  MonitorDeleteRequest
  MonitorDeleteResponse
  MonitorResetRequest
  MonitorResetResponse
  MWindow
  MWindowListRequest
  MWindowListResponse
  MWindowCreateRequest
  MWindowCreateResponse
  MWindowEditRequest
  MWindowEditResponse
  MWindowDeleteRequest
  MWindowDeleteResponse
  PSP
  PSPListRequest
  PSPListResponse
  PSPCreateRequest
  PSPCreateResponse
  PSPEditRequest
  PSPEditResponse
  PSPDeleteRequest
  PSPDeleteResponse
}
```

## Related

* [Official Uptimerobot API documentation](https://uptimerobot.com/api)
* [Unofficial Uptimerobot client for node/browser](https://github.com/jimleuk/uptimerobot-js)
* [Unofficial Uptimerobot openAPI 3.0 documentation](https://github.com/jimleuk/uptimerobot-swagger)

## LICENCE

MIT