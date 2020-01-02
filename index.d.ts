// Type definitions for api.uptimerobot.com v2
// Project: https://uptimerobot.com/api
// Definitions by: Jim Le <jim@height.io>
// Typescript version: 3.7.4

export = Uptimerobot
export as namespace Uptimerobot

declare namespace Uptimerobot {

  export interface Pagination {
    offset: number;
    limit: number;
    total: number;
  }

  /** A user account */
  export interface Account {
    /** the account e-mail */
    email: string;
    /** The max number of monitors that can be created for the account */
    monitor_limit: number;
    /** The min monitoring interval (in seconds) supported by the account */
    monitor_interval: number;
    /** the number of "up" monitors */
    up_monitors: number;
    /** the number of "down" monitors */
    down_monitors: number;
    /** the number of "paused" monitors */
    paused_monitors: number;
  }

  export interface AccountListSuccessResponse {
    stat: 'ok' | 'fail'
    account: Account
  }

  /** Response object for Bad requests */
  export interface ErrorResponse {
    stat: 'ok' | 'fail';
    error: {
      type: string;
      parameter_name: string;
      passed_value?: string;
      message?: string;
    };
  }

  /** An alert contact */
  export interface AlertContact {
    /** The ID of the alert contact. */
    id: number;
    /** Friendly name of the alert contact (for making it easier to distinguish
     * from others)
     */
    friendly_name: string;
    type: number;
    status: number;
    /** Alert contact's address/phone. */
    value: string;
  }

  /** Request parameters for retrieving a list of Alert Contacts */
  export interface AlertContactListRequest {
    /** If not used, will return all alert contacts in an account. Else, it is
     * possible to define any number of alert contacts with their IDs like:
     * alert_contacts=236-1782-4790
     */
    alert_contacts?: string;
    /** Used for pagination */
    offset?: number;
    /** Used for pagination */
    limit?: number;
  }

  /** Request parameters for creating or editing an Alert Contact */
  export interface AlertContactRequest {
    /** The id of the Alert Contact */
    id?: number;
    /** The type of the Alert Contact */
    type?: number;
    /** Friendly name of the alert contact (for making it easier to distinguish
     * from others)
     */
    friendly_name?: string;
    /** Alert contact's address/phone. When editing: Can only be used if it is a
     * web-hook alert contact
     */
    value?: string;
  }

  /** Request parameters for creating an Alert Contact */
  export interface AlertContactCreateRequest
    extends Omit<AlertContactRequest, 'id'> {
    /** The type of Alert Contact */
    type: number;
  }

  /** Request parameters for editing an Alert Contact */
  export interface AlertContactEditRequest
    extends Omit<AlertContactRequest, 'type'> {
    /** The id of the Alert Contact */
    id: number;
  }

  /** Request parameters for deleting an Alert Contact */
  export interface AlertContactDeleteRequest {
    /** The id of the Alert Contact */
    id: number;
  }

  /** Response object for a paginated list of Alert Contacts */
  export interface AlertContactListResponse {
    stat: 'ok' | 'fail'
    limit: number;
    offset: number;
    total: number;
    alert_contacts: AlertContact[];
  }

  /** Response object when creating an Alert Contact */
  export interface AlertContactCreateResponse {
    stat: 'ok' | 'fail'
    alertcontact: Pick<AlertContact, 'id' | 'status'>;
  }

  /** Response object when editing an Alert Contact */
  export interface AlertContactEditResponse {
    stat: 'ok' | 'fail'
    alertcontact: Pick<AlertContact, 'id'>;
  }

  /** Response object when deleting an Alert Contact */
  export interface AlertContactDeleteResponse {
    stat: 'ok' | 'fail'
    alertcontact: Pick<AlertContact, 'id'>;
  }

  /** A log for a Monitor */
  export interface Log {
    /** type of log event */
    type: number;
    /** Unix Time. The date and time of the log (inherits the user's timezone
     * setting).
     */
    datetime: number;
    /** The duration of the downtime in seconds. */
    duration: number;
    /** the reason of the downtime (if exists). */
    reason?: {
      /** type of log event */
      code: number;
      /** detail of log event */
      detail: string;
    };
  }

  /** A Monitor is akin to a scheduled task/job */
  export interface Monitor {
    id: number;
    /** The friendly name of the monitor. */
    friendly_name: string;
    /** the URL/IP of the monitor. */
    url: string;
    type: number;
    sub_type?: number;
    keyword_type?: number;
    /** Used only for "Keyword monitoring (monitor>type = 2)" and shows "if the
     * monitor will be flagged as down when the keyword exists or not exists".
     * The value of the keyword.
     */
    keyword_value?: string;
    /** Used for password-protected web pages (HTTP Basic Auth). Available for
     * HTTP and keyword monitoring.
     */
    http_username?: string;
    /** Used for password-protected web pages (HTTP Basic Auth). Available for
     * HTTP and keyword monitoring.
     */
    http_password?: string;
    /** Used only for "Port monitoring (monitor>type = 4)" and shows the port
     * monitored.
     */
    port?: number;
    /** the interval for the monitoring check (300 seconds by default). */
    interval: number;
    status: number;
    /** creation time of Monitor in unix timestamp format */
    create_datetime: number;
    monitor_group?: number;
    /** 0 - false, 1 - true */
    is_group_main?: 0 | 1;
    /** all events logged for this Monitor. Only available if requested
     * (ie. ?logs=1)
     */
    logs?: Log[];
  }

  /** Request parameters for retrieving a collection of Monitors */
  export interface MonitorListRequest {
    /** If not used, will return all monitors in an account. Else, it is
     * possible to define any number of monitors with their IDs like:
     * monitors=15830-32696-83920
     */
    monitors?: string;
    /** If not used, will return all monitors types (HTTP, keyword, ping..) in
     * an  account. Else, it is possible to define any number of monitor types
     * like: types=1-3-4
     */
    types?: string;
    /** If not used, will return all monitors statuses (up, down, paused) in an
     * account. Else, it is possible to define any number of monitor statuses
     * like: statuses=2-9
     */
    statuses?: string;
    /** Defines the number of days to calculate the uptime ratio(s) for. Ex:
     * custom_uptime_ratios=7-30-45 to get the uptime ratios for those periods
     */
    custom_uptime_ratios?: string;
    /** Defines the ranges to calculate the uptime ratio(s) for. Ex:
     * custom_uptime_ranges=1465440758_1466304758 to get the uptime ratios for
     * those periods. It is possible to send multiple ranges like
     * 1465440758_1466304758-1434682358_1434855158
     */
    custom_uptime_ranges?: string;
    /** Returns the "all time uptime ratio". It will slow down the response a
     * bit and, if not really necessary, suggest not using it. Default is 0.
     * 0 - false or 1 - true
     */
    all_time_uptime_ratio?: 0 | 1;
    /** Returns the "all time durations of up-down-paused events". It will slow
     * down the response a bit and, if not really necessary, suggest not using
     * it. Default is 0. 0 - false or 1 - true
     */
    all_time_uptime_durations?: 0 | 1;
    /** Defines if the logs of each monitor will be returned. Should be set to 1
     * for getting the logs. Default is 0. 0 - false or 1 - true
     */
    logs?: 0 | 1;
    /** PRO: works only for the Pro Plan as 24 hour+ logs are kept only in the
     * Pro Plan, formatted as Unix time and must be used with logs_end_date
     */
    logs_start_date?: number;
    /** PRO: works only for the Pro Plan as 24 hour+ logs are kept only in the
     * Pro Plan, formatted as Unix time and must be used with logs_start_date
     */
    logs_end_date?: number;
    /** The types of logs to be returned with a usage like: log_types=1-2-98).
     * If  empty, all log types are returned.
     */
    log_types?: string;
    /** The number of logs to be returned in descending order. If empty, all
     * logs are returned.
     */
    logs_limit?: number;
    /** Defines if the response time data of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    response_times?: 0 | 1;
    /** The number of response time logs to be returned (descending order). If
     * empty, last 24 hours of logs are returned (if response_times_start_date
     * and response_times_end_date are not used)
     */
    response_times_limit?: number;
    /** By default, response time value of each check is returned. The API can
     * return average values in given minutes. Default is 0. For ex: the Uptime
     * Robot dashboard displays the data averaged/grouped in 30 minutes
     */
    response_times_average?: number;
    /** Formatted as Unix time and must be used with response_times_end_date)
     * (response_times_end_date - response_times_start_date can't be more than
     * 7 days)
     */
    response_times_start_date?: number;
    /** Formatted as Unix time and must be used with response_times_start_date
     * (response_times_end_date - response_times_start_date can't be more than
     * 7 days)
     */
    response_times_end_date?: number;
    /** Defines if the alert contacts set for the monitor to be returned Default
     * is 0. 0 - false or 1 - true
     */
    alert_contacts?: 0 | 1;
    /** The maintenance windows for the monitor which can be mentioned with
     * their IDs like 345-2986-71
     */
    mwindows?: string;
    /** Defines if SSL certificate info for each monitor will be returned.
     * 0 - false or 1 - true
     */
    ssl?: 0 | 1;
    /** Defines if the custom HTTP headers of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    custom_http_headers?: 0 | 1;
    /** Defines if the custom HTTP statuses of each monitor will be returned.
     * Should be set to 1 for getting them. Default is 0. 0 - false or 1 - true
     */
    custom_http_statuses?: 0 | 1;
    /** Defines if the user's timezone should be returned. Should be set to 1
     * for getting it. Default is 0. 0 - false or 1 - true
     */
    timezone?: 0 | 1;
    /** Used for pagination */
    offset?: number;
    /** Used for pagination */
    limit?: number;
    /** A keyword of your choice to search within url and friendly_name and get
     * filtered results
     */
    search?: string;
  }

  /** Request parameters for creating or editing a Monitor */
  interface MonitorRequest {
    /** The id of the monitor */
    id?: number;
    /** The friendly name of the monitor */
    friendly_name?: string;
    /** The URL/IP of the monitor */
    url?: string;
    type?: number;
    sub_type?: number;
    /** Required for port monitoring */
    port?: number;
    keyword_type?: number;
    /** Required for keyword monitoring */
    keyword_value?: string;
    /** In seconds */
    interval?: number;
    /** Used for password-protected web pages (HTTP Basic Auth). Available for
     * HTTP and keyword monitoring.
     */
    http_username?: string;
    /** Used for password-protected web pages (HTTP Basic Auth). Available for
     * HTTP and keyword monitoring.
     */
    http_password?: string;
    /** The HTTP method to be used */
    http_method?: number
    /** The format of data to be sent with POST, PUT, PATCH, DELETE, OPTIONS
     * HTTP methods
     */
    post_type?: number
    /** Must be sent as a JSON object. The data to be sent with POST, PUT,
     * PATCH, DELETE, OPTIONS HTTP methods
     */
    post_value?: string;
    /** sets the Content-Type for POST, PUT, PATCH, DELETE, OPTIONS HTTP methods
     */
    post_content_type?: number;
    /** The alert contacts to be notified when the monitor goes up/down.
     * Multiple alert_contact>ids can be sent like
     * alert_contacts=457_0_0-373_5_0-8956_2_3 where alert_contact>ids are
     * seperated with - and threshold + recurrence are seperated with _.
     * For ex: alert_contacts=457_5_0 refers to 457 being the
     * alert_contact>id,5 being the threshold and 0 being the recurrence.
     * PRO: As the threshold and recurrence is only available in the Pro Plan,
     * they are always 0 in the Free Plan
     */
    alert_contacts?: string;
    /** Must be sent as a JSON object. Used for setting custom HTTP headers for
     * the monitor
     */
    custom_http_headers?: string;
    /** Must be sent as 404:0_200:1 to accept 404 as down and 200 as up */
    custom_http_statuses?: string;
    /** For ignoring SSL certificate related errors. 0 - false or 1 - true. */
    ignore_ssl_errors?: 0 | 1;
  }

  /** Request parameters for creating a monitor */
  export interface MonitorCreateRequest extends Omit<MonitorRequest, 'id'> {
    /** The friendly name of the monitor */
    friendly_name: string;
    /** The URL/IP of the monitor */
    url: string;
    /** The type of Monitor */
    type: number;
  }

  /** Request parameters for editing a monitor */
  export interface MonitorEditRequest extends Omit<MonitorRequest, 'type'> {
    /** The id of the monitor */
    id: number;
  }

  /** Request parameters for deleting a monitor */
  export interface MonitorDeleteRequest {
    /** The id of the monitor */
    id: number;
  }

  /** Request parameters for reseting a monitor */
  export interface MonitorResetRequest {
    /** The id of the monitor */
    id: number;
  }

  /** Response object for a paginated list of Monitors */
  export interface MonitorListResponse {
    stat: 'ok' | 'fail'
    pagination: Pagination;
    monitors: Monitor[];
  }

  /** Response object when creating a Monitor */
  export interface MonitorCreateResponse {
    stat: 'ok' | 'fail'
    monitor: Pick<Monitor, 'id' | 'status'>;
  }

  /** Response object when editing a Monitor */
  export interface MonitorEditResponse {
    stat: 'ok' | 'fail'
    monitor: Pick<Monitor, 'id'>;
  }

  /** Response object when deleting a Monitor */
  export interface MonitorDeleteResponse {
    stat: 'ok' | 'fail'
    monitor: Pick<Monitor, 'id'>;
  }

  /** Response object when resetting a Monitor */
  export interface MonitorResetResponse {
    stat: 'ok' | 'fail'
    monitor: Pick<Monitor, 'id'>;
  }

  /** A maintenance window */
  export interface MWindow {
    id: number;
    /** TODO: the property "user" has no description in official docs */
    user: number;
    type: number;
    /** Friendly name of the maintenance window (for making it easier to
     * distinguish from others)
     */
    friendly_name: string;
    /** Start time of the maintenance windows. Unix time for type=1 and HH:mm for
     * other types
     */
    start_time: string;
    /** Duration of the maintenance windows in minutes */
    duration: number;
    /** Seperated with "-" and used only for weekly and monthly maintenance
     * windows
     */
    value: string;
    /** The status of the maintenance window. 0 - paused or 1 - active */
    status: number;
  }

  /** Request parameters for a paginated list of Maintenance Windows */
  export interface MWindowListRequest {
    /** If not used, will return all mwindows in an account. Else, it is possible
     * to define any number of mwindows with their IDs like:
     * mwindows=236-1782-4790
     */
    mwindows?: string;
    /** Used for pagination */
    offset?: number;
    /** Used for pagination */
    limit?: number;
  }

  export interface MWindowRequest {
    /** The Id of the maintenance window */
    id?: number;
    /** The type of maintenance window */
    type?: number;
    /** Friendly name of the maintenance window (for making it easier to
     * distinguish from others)
     */
    friendly_name?: string;
    /** Only needed for weekly and monthly maintenance windows and must be sent
     * like 2-4-5 for Tuesday-Thursday-Friday or 10-17-26 for the days of the
     * month
     */
    value?: string;
    /** start time of the maintenance windows. Unix time for type=1 and HH:mm
     * for other types.
     */
    start_time?: string;
    /** How many minutes the maintenance window will be active for */
    duration?: number;
  }

  export interface MWindowCreateRequest extends Omit<MWindowRequest, 'id'> {
    /** The type of maintenance window */
    type: number;
    /** Friendly name of the maintenance window (for making it easier to
     * distinguish from others)
     */
    friendly_name: string;
    /** Only needed for weekly and monthly maintenance windows and must be sent
     * like 2-4-5 for Tuesday-Thursday-Friday or 10-17-26 for the days of the
     * month
     */
    value: string;
  }

  export interface MWindowEditRequest extends Omit<MWindowRequest, 'type'> {
    /** The Id of the maintenance window */
    id: number;
  }

  export interface MWindowDeleteRequest {
    /** The Id of the maintenance window */
    id: number;
  }

  /** Response object for a paginated list of Maintenance Windows */
  export interface MWindowListResponse {
    stat: 'ok' | 'fail'
    pagination: Pagination;
    mwindows: MWindow[];
  }

  /** Response object for creating a Maintenance Window */
  export interface MWindowCreateResponse {
    stat: 'ok' | 'fail'
    mwindow: Pick<MWindow, 'id' | 'status'>;
  }

  /** Response object for editing a Maintenance Window */
  export interface MWindowEditResponse {
    stat: 'ok' | 'fail'
    mwindow: Pick<MWindow, 'id'>;
  }

  /** Response object for deleting a Maintenance Window */
  export interface MWindowDeleteResponse {
    stat: 'ok' | 'fail'
    mwindow: Pick<MWindow, 'id'>;
  }

  /** a public status page */
  export interface PSP {
    id: number;
    /** Friendly name of the status page (for making it easier to distinguish from
     *  others)
     */
    friendly_name: string;
    /** The list of monitorIDs to be displayed in status page (the values are
     * seperated with "-" or 0 for all monitors)
     */
    monitors: string;
    /** The sort order of the status page */
    sort: number;
    /** The status of the status page. 0 - paused or 1 - active */
    status: number;
    /** The uptimerobot.com hosted url eg. https://stats.uptimerobot.com/12345 */
    standard_url: string;
    /** The domain or subdomain that the status page will run on. eg.
     * "https://status.mydomain.com"
     */
    custom_url: string;
  }

  export interface PSPListRequest {
    /** If not used, will return all public status pages in an account. Else, it
     * is possible to define any number of public status pages with their IDs
     * like: psps=236-1782-4790
     */
    psps?: string;
    /** Used for Pagination */
    offset?: number;
    /** Used for Pagination */
    limit?: number;
  }

  export interface PSPRequest {
    /** The Id of the status page */
    id?: number;
    /** The type of status page */
    type?: number;
    /** Friendly name of the status page (for making it easier to distinguish from
     *  others)
     */
    friendly_name?: string;
    /** The monitors to be displayed can be sent as 15830-32696-83920. Or 0 for
     * displaying all monitors
     */
    monitors?: string;
    /** The domain or subdomain that the status page will run on. eg.
     * "https://status.mydomain.com"
     */
    custom_domain?: string;
    /** require this password to access the status page */
    password?: string;
    /** Sort monitors on the status page */
    sort?: number;
    /** PRO: For hiding the Uptime Robot links and only available in the Pro
     * Plan. 0 - false or 1 - true
     */
    hide_url_links?: 0 | 1;
    /** Sets the state of the status page */
    status?: number;
  }

  export interface PSPCreateRequest extends Omit<PSPRequest, 'id'> {
    /** The type of status page */
    type: number;
    /** Friendly name of the status page (for making it easier to distinguish from
     *  others)
     */
    friendly_name: string;
    /** The monitors to be displayed can be sent as 15830-32696-83920. Or 0 for
     * displaying all monitors
     */
    monitors: string;
  }

  export interface PSPEditRequest extends Omit<PSPRequest, 'type'> {
    /** The Id of the status page */
    id: number;
  }

  export interface PSPDeleteRequest {
    /** The Id of the status page */
    id: number;
  }

  /** Response object for a paginated list of public status pages */
  export interface PSPListResponse {
    stat: 'ok' | 'fail'
    limit: number;
    offset: number;
    total: number;
    psps: PSP[];
  }

  /** Response object for creating a public status page */
  export interface PSPCreateResponse {
    stat: 'ok' | 'fail'
    psp: Pick<PSP, 'id'>;
  }
  /** Response object for editing a public status page */
  export interface PSPEditResponse {
    stat: 'ok' | 'fail'
    psp: Pick<PSP, 'id'>;
  }

  /** Response object for deleting a public status page */
  export interface PSPDeleteResponse {
    stat: 'ok' | 'fail'
    psp: Pick<PSP, 'id'>;
  }

}