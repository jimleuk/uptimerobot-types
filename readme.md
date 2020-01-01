# @types/uptimerobot

* Types for [api.uptimerobot.com](https://uptimerobot.com) v2
* Includes a mix of enums and interfaces for api request and response objects

## Usage

Official API docs can be found here: https://uptimerobot.com/api

```

// eg. 1
import { Monitor, MonitorType } from 'uptimerobot'

const myMonitor: Monitor = {
  type: MonitorType.https,
  ...
}

// eg. 2
import { MonitorListRequest, MonitorListResponse, ErrorResponse } from 'uptimerobot'

const fetchMonitors = async (
  params: MonitorListRequest
): MonitorListResponse | ErrorResponse =>
  await fetch(url, params)
```

## Reference

```
  enum Stat
  enum Pagination
  Account
  AlertContact
  enum AlertContactType
  enum AlertContactState
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
  enum MonitorType
  enum MonitorSubType
  enum MonitorKeywordType
  enum MonitorState
  enum MonitorLogType
  enum MonitorHttpMethod
  enum MonitorHttpMethodPostType
  enum MonitorHttpMethodContentType
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
  enum MWindowType
  enum MWindowState
  MWindowListRequest
  MWindowListResponse
  MWindowCreateRequest
  MWindowCreateResponse
  MWindowEditRequest
  MWindowEditResponse
  MWindowDeleteRequest
  MWindowDeleteResponse
  PSP
  enum PSPState
  enum PSPSort
  enum PSPType
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
