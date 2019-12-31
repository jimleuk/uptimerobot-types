const pagination: UptimeRobot.Pagination = {
  limit: 1,
  offset: 2,
  total: 3,
};

const errorResponse: UptimeRobot.ErrorResponse = {
  stat: UptimeRobot.Stat.ok,
  error: {
    type: UptimeRobot.ErrorType.invalidParameter,
    parameter_name: 'api_key',
  },
};

const errorResponse2: UptimeRobot.ErrorResponse = {
  stat: UptimeRobot.Stat.ok,
  error: {
    type: UptimeRobot.ErrorType.invalidParameter,
    parameter_name: 'api_key',
    passed_value: 'abc123',
  },
};

const errorResponse3: UptimeRobot.ErrorResponse = {
  stat: UptimeRobot.Stat.ok,
  error: {
    type: UptimeRobot.ErrorType.invalidParameter,
    parameter_name: 'api_key',
    passed_value: 'abc123',
    message: 'This parameter is invalid',
  },
};

const account: UptimeRobot.Account = {
  email: 'jim@example.com',
  monitor_limit: 10,
  monitor_interval: 5000,
  up_monitors: 1,
  down_monitors: 2,
  paused_monitors: 0,
};

const alertContact: UptimeRobot.AlertContact = {
  id: 0,
  friendly_name: 'myAlert',
  type: UptimeRobot.AlertContact.Type.email,
  status: UptimeRobot.AlertContact.State.pending,
  value: 'jim@example.com',
};

const alertContactRequest: UptimeRobot.AlertContact.ListRequest = {
  alert_contacts: '0',
  offset: 0,
  limit: 50,
};

const alertContactRequest2: UptimeRobot.AlertContact.ListRequest = {
  offset: 0,
  limit: 50,
};

const alertContactResponse: UptimeRobot.AlertContact.ListResponse = {
  stat: UptimeRobot.Stat.ok,
  offset: 0,
  limit: 50,
  total: 10,
  alert_contacts: [alertContact],
};

const createAlertContactRequest: UptimeRobot.AlertContact.CreateRequest = {
  type: UptimeRobot.AlertContact.Type.email,
  friendly_name: 'MyAlertContact',
  value: 'jim@example.com',
};

const createAlertContactResponse: UptimeRobot.AlertContact.CreateResponse = {
  stat: UptimeRobot.Stat.ok,
  alertcontact: alertContact,
};

const editAlertContactRequest1: UptimeRobot.AlertContact.EditRequest = {
  id: 0,
  friendly_name: 'MyAlertContact2',
  value: 'jim@example.com2',
};

const editAlertContactRequest2: UptimeRobot.AlertContact.EditRequest = {
  id: 0,
};

const editAlertContactResponse1: UptimeRobot.AlertContact.EditResponse = {
  stat: UptimeRobot.Stat.ok,
  alertcontact: alertContact,
};

const editAlertContactResponse2: UptimeRobot.AlertContact.EditResponse = {
  stat: UptimeRobot.Stat.ok,
  alertcontact: { id: 0 },
};

const deleteAlertContactRequest: UptimeRobot.AlertContact.DeleteRequest = {
  id: 0,
};

const deleteAlertContactResponse1: UptimeRobot.AlertContact.DeleteResponse = {
  stat: UptimeRobot.Stat.ok,
  alertcontact: alertContact,
};

const deleteAlertContactResponse2: UptimeRobot.AlertContact.DeleteResponse = {
  stat: UptimeRobot.Stat.ok,
  alertcontact: { id: 0 },
};

const log1: UptimeRobot.Monitor.Log = {
  type: UptimeRobot.Monitor.LogType.started,
  datetime: 1234567890,
  duration: 5000,
  reason: {
    code: UptimeRobot.Monitor.LogType.started,
    detail: 'This monitor was started',
  },
};

const log2: UptimeRobot.Monitor.Log = {
  type: UptimeRobot.Monitor.LogType.started,
  datetime: 1234567890,
  duration: 5000,
};

const monitor1: UptimeRobot.Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: UptimeRobot.Monitor.Type.https,
  sub_type: UptimeRobot.Monitor.SubType.none,
  keyword_type: UptimeRobot.Monitor.KeywordType.none,
  keyword_value: 'myKeyword',
  http_username: 'admin',
  http_password: '',
  port: 80,
  interval: 500,
  status: UptimeRobot.Monitor.State.new,
  create_datetime: 1234567890,
  monitor_group: 0,
  is_group_main: 0,
  logs: [log1, log2],
};

const monitor2: UptimeRobot.Monitor = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: UptimeRobot.Monitor.Type.https,
  interval: 500,
  status: UptimeRobot.Monitor.State.new,
  create_datetime: 1234567890,
};

const monitorListRequest1: UptimeRobot.Monitor.ListRequest = {
  monitors: '0',
  types: [
    UptimeRobot.Monitor.Type.http,
    UptimeRobot.Monitor.Type.https,
    UptimeRobot.Monitor.Type.keyword,
  ].join('-'),
  statuses: [
    UptimeRobot.Monitor.State.warn,
    UptimeRobot.Monitor.State.down,
  ].join('-'),
  custom_uptime_ratios: '7-30-45',
  custom_uptime_ranges: '1465440758_1466304758-1434682358_1434855158',
  all_time_uptime_ratio: 0,
  all_time_uptime_durations: 0,
  logs: 1,
  logs_start_date: 1234567890,
  logs_end_date: 1234567890,
  log_types: [
    UptimeRobot.Monitor.LogType.down,
    UptimeRobot.Monitor.LogType.paused,
  ].join('-'),
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

const monitorListRequest2: UptimeRobot.Monitor.ListRequest = {};

const monitorListResponse: UptimeRobot.Monitor.ListResponse = {
  stat: UptimeRobot.Stat.ok,
  pagination,
  monitors: [monitor1, monitor2],
};

const createMonitorRequest1: UptimeRobot.Monitor.CreateRequest = {
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: UptimeRobot.Monitor.Type.https,
  sub_type: UptimeRobot.Monitor.SubType.none,
  port: 80,
  keyword_type: UptimeRobot.Monitor.KeywordType.none,
  keyword_value: 'myKeyword',
  interval: 5000,
  http_username: 'admin',
  http_password: '',
  http_method: UptimeRobot.Monitor.HttpMethod.get,
  post_type: UptimeRobot.Monitor.HttpMethodPostType.keyValue,
  post_value: 'myPostValue',
  post_content_type: UptimeRobot.Monitor.HttpMethodContentType.json,
  alert_contacts: '0-1-2',
  custom_http_headers: 'myCustomHttpHeaders',
  custom_http_statuses: 'myCustomHttpStatuses',
  ignore_ssl_errors: 0,
};

const createMonitorRequest2: UptimeRobot.Monitor.CreateRequest = {
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  type: UptimeRobot.Monitor.Type.https,
};

const createMonitorResponse: UptimeRobot.Monitor.CreateResponse = {
  stat: UptimeRobot.Stat.ok,
  monitor: {
    id: 0,
    status: UptimeRobot.Monitor.State.new,
  },
};

const editMonitorRequest1: UptimeRobot.Monitor.EditRequest = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
  sub_type: UptimeRobot.Monitor.SubType.none,
  port: 80,
  keyword_type: UptimeRobot.Monitor.KeywordType.none,
  keyword_value: 'myKeyword',
  interval: 5000,
  http_username: 'admin',
  http_password: '',
  http_method: UptimeRobot.Monitor.HttpMethod.get,
  post_type: UptimeRobot.Monitor.HttpMethodPostType.keyValue,
  post_value: 'myPostValue',
  post_content_type: UptimeRobot.Monitor.HttpMethodContentType.json,
  alert_contacts: '0-1-2',
  custom_http_headers: 'myCustomHttpHeaders',
  custom_http_statuses: 'myCustomHttpStatuses',
  ignore_ssl_errors: 0,
};

const editMonitorRequest2: UptimeRobot.Monitor.EditRequest = {
  id: 0,
  friendly_name: 'myMonitor',
  url: 'https://example.com',
};

const editMonitorResponse: UptimeRobot.Monitor.EditResponse = {
  stat: UptimeRobot.Stat.ok,
  monitor: { id: 0 },
};

const deleteMonitorRequest: UptimeRobot.Monitor.DeleteRequest = {
  id: 0,
};

const deleteMonitorResponse: UptimeRobot.Monitor.DeleteResponse = {
  stat: UptimeRobot.Stat.ok,
  monitor: { id: 0 },
};

const resetMonitorRequest: UptimeRobot.Monitor.ResetRequest = {
  id: 0,
};

const resetMonitorResponse: UptimeRobot.Monitor.ResetResponse = {
  stat: UptimeRobot.Stat.ok,
  monitor: { id: 0 },
};

const mWindow: UptimeRobot.MWindow = {
  id: 0,
  user: 0,
  type: UptimeRobot.MWindow.Type.weekly,
  friendly_name: 'myMWindow',
  start_time: '00:00',
  duration: 5000,
  value: '4-1',
  status: 0,
};

const mWindowRequest1: UptimeRobot.MWindow.ListRequest = {
  mwindows: '0-1-2',
  offset: 0,
  limit: 50,
};

const mWindowRequest2: UptimeRobot.MWindow.ListRequest = {
  offset: 0,
  limit: 50,
};

const mWindowResponse: UptimeRobot.MWindow.ListResponse = {
  stat: UptimeRobot.Stat.ok,
  pagination,
  mwindows: [mWindow],
};

const createMWindowRequest1: UptimeRobot.MWindow.CreateRequest = {
  friendly_name: 'myMWindow',
  type: UptimeRobot.MWindow.Type.weekly,
  value: '1',
  duration: 5000,
  start_time: '00:00',
};

const createMWindowRequest2: UptimeRobot.MWindow.CreateRequest = {
  friendly_name: 'myMWindow',
  type: UptimeRobot.MWindow.Type.weekly,
  value: '1',
};

const createMWindowResponse: UptimeRobot.MWindow.CreateResponse = {
  stat: UptimeRobot.Stat.ok,
  mwindow: {
    id: 0,
    status: UptimeRobot.MWindow.State.active,
  },
};

const editMWindowRequest1: UptimeRobot.MWindow.EditRequest = {
  id: 0,
  friendly_name: 'myMWindow',
  value: '1',
  duration: 5000,
  start_time: '00:00',
};

const editMWindowRequest2: UptimeRobot.MWindow.EditRequest = {
  id: 0,
};

const editMWindowResponse: UptimeRobot.MWindow.EditResponse = {
  stat: UptimeRobot.Stat.ok,
  mwindow: { id: 0 },
};

const deleteMWindowRequest2: UptimeRobot.MWindow.DeleteRequest = {
  id: 0,
};

const deleteMWindowResponse: UptimeRobot.MWindow.DeleteResponse = {
  stat: UptimeRobot.Stat.ok,
  mwindow: { id: 0 },
};

const psp: UptimeRobot.PSP = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  sort: UptimeRobot.PSP.Sort.friendlyNameAsc,
  status: UptimeRobot.PSP.State.active,
  standard_url: 'https://example.com',
  custom_url: 'https://custom.example.com',
};

const pspRequest1: UptimeRobot.PSP.ListRequest = {
  psps: '0-1-2',
  offset: 0,
  limit: 50,
};

const pspRequest2: UptimeRobot.PSP.ListRequest = {
  offset: 0,
  limit: 50,
};

const pspResponse: UptimeRobot.PSP.ListResponse = {
  stat: UptimeRobot.Stat.ok,
  offset: 0,
  limit: 50,
  total: 10,
  psps: [psp],
};

const createPspRequest1: UptimeRobot.PSP.CreateRequest = {
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  type: UptimeRobot.PSP.Type.all,
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '',
  sort: UptimeRobot.PSP.Sort.friendlyNameAsc,
  status: UptimeRobot.PSP.State.active,
};

const createPspRequest2: UptimeRobot.PSP.CreateRequest = {
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  type: UptimeRobot.PSP.Type.all,
};

const createPspResponse: UptimeRobot.PSP.CreateResponse = {
  stat: UptimeRobot.Stat.ok,
  psp: { id: 0 },
};

const editPspRequest1: UptimeRobot.PSP.EditRequest = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
  custom_domain: 'https://example.com',
  hide_url_links: 1,
  password: '',
  sort: UptimeRobot.PSP.Sort.friendlyNameAsc,
  status: UptimeRobot.PSP.State.active,
};

const editPspRequest2: UptimeRobot.PSP.EditRequest = {
  id: 0,
  friendly_name: 'myPsp',
  monitors: '0-1-2',
};

const editPspResponse: UptimeRobot.PSP.EditResponse = {
  stat: UptimeRobot.Stat.ok,
  psp: { id: 0 },
};

const deletePspRequest2: UptimeRobot.PSP.DeleteRequest = {
  id: 0,
};

const deletePspResponse: UptimeRobot.PSP.DeleteResponse = {
  stat: UptimeRobot.Stat.ok,
  psp: { id: 0 },
};
