import {
  Stat,
  Pagination,
  ErrorResponse,
  ErrorType,
  LogType,
  AlertContactType,
  AlertContactState,
  MonitorType,
  MonitorSubType,
  MonitorState,
  MonitorKeywordType,
  MonitorHttpMethod,
  MonitorHttpMethodContentType,
  MonitorHttpMethodPostType,
  MWindowType,
  MWindowState,
  PSPSort,
  PSPState,
  PSPType,
  Log,
  Account,
  AlertContact,
  Monitor,
  MWindow,
  PSP,
} from '.';

const pagination: Pagination = {
  limit: 1,
  offset: 2,
  total: 3,
};

const errorResponse: ErrorResponse = {
  stat: Stat.ok,
  error: {
    type: ErrorType.invalidParameter,
    parameter_name: 'api_key',
  },
};

const errorResponse2: ErrorResponse = {
  stat: Stat.ok,
  error: {
    type: ErrorType.invalidParameter,
    parameter_name: 'api_key',
    passed_value: 'abc123',
  },
};

const errorResponse3: ErrorResponse = {
  stat: Stat.ok,
  error: {
    type: ErrorType.invalidParameter,
    parameter_name: 'api_key',
    passed_value: 'abc123',
    message: 'This parameter is invalid',
  },
};

const account: Account = {
  email: 'jim@example.com',
  monitor_limit: 10,
  monitor_interval: 5000,
  up_monitors: 1,
  down_monitors: 2,
  paused_monitors: 0,
};

const alertContact: AlertContact = {
  id: 0,
  friendly_name: 'myAlert',
  type: AlertContactType.email,
  status: AlertContactState.pending,
  value: 'jim@example.com',
};

const alertContactRequest: AlertContact.ListRequest = {
  alert_contacts: '0',
  offset: 0,
  limit: 50,
};

const alertContactRequest2: AlertContact.ListRequest = {
  offset: 0,
  limit: 50,
};

const alertContactResponse: AlertContact.ListResponse = {
  stat: Stat.ok,
  offset: 0,
  limit: 50,
  total: 10,
  alert_contacts: [alertContact],
};

const createAlertContactRequest: AlertContact.CreateRequest = {
  type: AlertContactType.email,
  friendly_name: 'MyAlertContact',
  value: 'jim@example.com',
};

const createAlertContactResponse: AlertContact.CreateResponse = {
  stat: Stat.ok,
  alertcontact: alertContact,
};

const editAlertContactRequest1: AlertContact.EditRequest = {
  id: 0,
  friendly_name: 'MyAlertContact2',
  value: 'jim@example.com2',
};

const editAlertContactRequest2: AlertContact.EditRequest = {
  id: 0,
};

const editAlertContactResponse1: AlertContact.EditResponse = {
  stat: Stat.ok,
  alertcontact: alertContact,
};

const editAlertContactResponse2: AlertContact.EditResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 },
};

const deleteAlertContactRequest: AlertContact.DeleteRequest = {
  id: 0,
};

const deleteAlertContactResponse1: AlertContact.DeleteResponse = {
  stat: Stat.ok,
  alertcontact: alertContact,
};

const deleteAlertContactResponse2: AlertContact.DeleteResponse = {
  stat: Stat.ok,
  alertcontact: { id: 0 },
};

const log1: Log = {
  type: LogType.started,
  datetime: 1234567890,
  duration: 5000,
  reason: {
    code: LogType.started,
    detail: 'This monitor was started',
  },
};

const log2: Log = {
  type: LogType.started,
  datetime: 1234567890,
  duration: 5000,
};

const monitor1: Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: MonitorType.https,
  sub_type: MonitorSubType.none,
  keyword_type: MonitorKeywordType.none,
  keyword_value: 'myKeyword',
  http_username: 'admin',
  http_password: '',
  port: 80,
  interval: 500,
  status: MonitorState.new,
  create_datetime: 1234567890,
  monitor_group: 0,
  is_group_main: 0,
  logs: [log1, log2],
};

const monitor2: Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: MonitorType.https,
  interval: 500,
  status: MonitorState.new,
  create_datetime: 1234567890,
};

const monitorListRequest1: Monitor.ListRequest = {
  monitors: '0',
  types: [MonitorType.http, MonitorType.https, MonitorType.keyword].join('-'),
  statuses: [MonitorState.warn, MonitorState.down].join('-'),
  custom_uptime_ratios: '7-30-45',
  custom_uptime_ranges: '1465440758_1466304758-1434682358_1434855158',
  all_time_uptime_ratio: 0,
  all_time_uptime_durations: 0,
  logs: 1,
  logs_start_date: 1234567890,
  logs_end_date: 1234567890,
  log_types: [LogType.down, LogType.paused].join('-'),
  logs_limit: 50,
  response_times: 0,
  response_times_limit: 100,
  response_times_average: 500,
  response_times_start_date: 123456789,
  response_times_end_date: 123456789,
  alert_contacts: 1,
  mwindows: '0-1-2',
  ssl: 0,
  custom_http_headers: 0,
  custom_http_statuses: 0,
  timezone: 0,
  offset: 0,
  limit: 50,
  search: 'myMonitor',
};

const monitorListRequest2: Monitor.ListRequest = {};

const monitorListResponse: Monitor.ListResponse = {
  stat: Stat.ok,
  pagination,
  monitors: [monitor1, monitor2],
};

const createMonitorRequest1: Monitor.CreateRequest = {
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: MonitorType.https,
  sub_type: MonitorSubType.none,
  port: 80,
  keyword_type: MonitorKeywordType.none,
  keyword_value: 'myKeyword',
  interval: 5000,
  http_username: 'admin',
  http_password: '',
  http_method: MonitorHttpMethod.get,
  post_type: MonitorHttpMethodPostType.keyValue,
  post_value: 'myPostValue',
  post_content_type: MonitorHttpMethodContentType.json,
  alert_contacts: '0-1-2',
  custom_http_headers: 'myCustomHttpHeaders',
  custom_http_statuses: 'myCustomHttpStatuses',
  ignore_ssl_errors: 0,
};

const createMonitorRequest2: Monitor.CreateRequest = {
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: MonitorType.https,
};

const createMonitorResponse: Monitor.CreateResponse = {
  stat: Stat.ok,
  monitor: {
    id: 0,
    status: MonitorState.new,
  },
};

const editMonitorRequest1: Monitor.EditRequest = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  sub_type: MonitorSubType.none,
  port: 80,
  keyword_type: MonitorKeywordType.none,
  keyword_value: 'myKeyword',
  interval: 5000,
  http_username: 'admin',
  http_password: '',
  http_method: MonitorHttpMethod.get,
  post_type: MonitorHttpMethodPostType.keyValue,
  post_value: 'myPostValue',
  post_content_type: MonitorHttpMethodContentType.json,
  alert_contacts: '0-1-2',
  custom_http_headers: 'myCustomHttpHeaders',
  custom_http_statuses: 'myCustomHttpStatuses',
  ignore_ssl_errors: 0,
};

const editMonitorRequest2: Monitor.EditRequest = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
};

const editMonitorResponse: Monitor.EditResponse = {
  stat: Stat.ok,
  monitor: { id: 0 },
};

const deleteMonitorRequest: Monitor.DeleteRequest = {
  id: 0,
};

const deleteMonitorResponse: Monitor.DeleteResponse = {
  stat: Stat.ok,
  monitor: { id: 0 },
};

const resetMonitorRequest: Monitor.ResetRequest = {
  id: 0,
};

const resetMonitorResponse: Monitor.ResetResponse = {
  stat: Stat.ok,
  monitor: { id: 0 },
};

const mWindow: MWindow = {
  id: 0,
  user: 0,
  type: MWindowType.weekly,
  friendly_name: 'myMWindow',
  start_time: '00:00',
  duration: 5000,
  value: '4-1',
  status: 0,
};

const mWindowRequest1: MWindow.ListRequest = {
  mwindows: '0-1-2',
  offset: 0,
  limit: 50,
};

const mWindowRequest2: MWindow.ListRequest = {
  offset: 0,
  limit: 50,
};

const mWindowResponse: MWindow.ListResponse = {
  stat: Stat.ok,
  pagination,
  mwindows: [mWindow],
};

const createMWindowRequest1: MWindow.CreateRequest = {
  friendly_name: 'myMWindow',
  type: MWindowType.weekly,
  value: '1',
  duration: 5000,
  start_time: '00:00',
};

const createMWindowRequest2: MWindow.CreateRequest = {
  friendly_name: 'myMWindow',
  type: MWindowType.weekly,
  value: '1',
};

const createMWindowResponse: MWindow.CreateResponse = {
  stat: Stat.ok,
  mwindow: {
    id: 0,
    status: MWindowState.active,
  },
};

const editMWindowRequest1: MWindow.EditRequest = {
  id: 0,
  friendly_name: 'myMWindow',
  value: '1',
  duration: 5000,
  start_time: '00:00',
};

const editMWindowRequest2: MWindow.EditRequest = {
  id: 0,
};

const editMWindowResponse: MWindow.EditResponse = {
  stat: Stat.ok,
  mwindow: { id: 0 },
};

const deleteMWindowRequest2: MWindow.DeleteRequest = {
  id: 0,
};

const deleteMWindowResponse: MWindow.DeleteResponse = {
  stat: Stat.ok,
  mwindow: { id: 0 },
};

const psp: PSP = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  sort: PSPSort.friendlyNameAsc,
  status: PSPState.active,
  standard_url: 'https://example.com',
  custom_url: 'https://custom.example.com',
};

const pspRequest1: PSP.ListRequest = {
  psps: '0-1-2',
  offset: 0,
  limit: 50,
};

const pspRequest2: PSP.ListRequest = {
  offset: 0,
  limit: 50,
};

const pspResponse: PSP.ListResponse = {
  stat: Stat.ok,
  offset: 0,
  limit: 50,
  total: 10,
  psps: [psp],
};

const createPspRequest1: PSP.CreateRequest = {
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  type: PSPType.all,
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '',
  sort: PSPSort.friendlyNameAsc,
  status: PSPState.active,
};

const createPspRequest2: PSP.CreateRequest = {
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  type: PSPType.all,
};

const createPspResponse: PSP.CreateResponse = {
  stat: Stat.ok,
  psp: { id: 0 },
};

const editPspRequest1: PSP.EditRequest = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '',
  sort: PSPSort.friendlyNameAsc,
  status: PSPState.active,
};

const editPspRequest2: PSP.EditRequest = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
};

const editPspResponse: PSP.EditResponse = {
  stat: Stat.ok,
  psp: { id: 0 },
};

const deletePspRequest2: PSP.DeleteRequest = {
  id: 0,
};

const deletePspResponse: PSP.DeleteResponse = {
  stat: Stat.ok,
  psp: { id: 0 },
};
