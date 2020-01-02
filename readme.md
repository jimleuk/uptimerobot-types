# @types/uptimerobot
Types for [api.uptimerobot.com](https://uptimerobot.com) v2

## Usage

Official API docs can be found here: https://uptimerobot.com/api

```
// eg. 1 via namespace
const myMonitor: Uptimerobot.Monitor = {
  type: MonitorType.https,
  ...
}

// eg. 2 via module
import { MonitorListRequest, MonitorListResponse, ErrorResponse } from 'uptimerobot'

const fetchMonitors = async (
  params: MonitorListRequest
): MonitorListResponse | ErrorResponse =>
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

## Licence

MIT
