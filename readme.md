# @types/uptimerobot

* Types for [api.uptimerobot.com](https://uptimerobot.com) v2
* Includes a mix of types for api request and response objects
* All namespaced under `UptimeRobot`

## Usage

Official API docs can be found here: https://uptimerobot.com/api

```
// eg. 1
const myMonitor: UptimeRobot.Monitor = {
  type: UptimeRobot.Monitor.Type.https,
  ...
}

// eg. 2
const fetchMonitors = async (
  params: UptimeRobot.Monitor.ListRequest
): UptimeRobot.Monitor.ListResponse | UptimeRobot.ErrorResponse => {
  return await fetch(url, params)
}
```

## Reference

```
UptimeRobot {
  enum Stat
  enum Pagination
  Account
  AlertContact {
    enum Type
    enum State
    ListRequest
    ListResponse
    CreateRequest
    CreateResponse
    EditRequest
    EditResponse
    DeleteRequest
    DeleteResponse
  }
  Monitor {
    enum Type
    enum SubType
    enum KeywordType
    enum State
    enum LogType
    enum HttpMethod
    enum HttpMethodPostType
    enum HttpMethodContentType
    Log
    ListRequest
    ListResponse
    CreateRequest
    CreateResponse
    EditRequest
    EditResponse
    DeleteRequest
    DeleteResponse
    ResetRequest
    ResetResponse
  }
  MWindow {
    enum Type
    enum State
    ListRequest
    ListResponse
    CreateRequest
    CreateResponse
    EditRequest
    EditResponse
    DeleteRequest
    DeleteResponse
  }
  PSP {
    enum State
    enum Sort
    enum Type
    ListRequest
    ListResponse
    CreateRequest
    CreateResponse
    EditRequest
    EditResponse
    DeleteRequest
    DeleteResponse
  }
}
```

## Licence

MIT
