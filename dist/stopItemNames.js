"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVICE_NAMES = exports.PROCESS_NAMES = void 0;
// Name of the process to terminate (example: notepad.exe)
exports.PROCESS_NAMES = [
    'OpenWith.exe', // microsoft store opener
    'msedgewebview2.exe', // microsoft edge browser
    // 'SearchHost.exe', // windows search ...
    // 'RuntimeBroker.exe', // legitimate, essential Microsoft Windows system process located in C:\Windows\System32 that manages permissions for Universal Windows Platform (UWP) apps.
    'spoolsv.exe', // Print Spooler, disable if no printer
    'FaxService.exe', // Fax service, disable if unused
    'WMPNetworkSvc.exe', // Windows Media Player Network Sharing, for media streaming
    'XblGameSave.exe', // Xbox Game Save, only needed for Xbox games
    'XboxAppServices.exe', // Xbox services, disable if not using Xbox apps
    'PhoneExperienceHost.exe', // Your Phone / Phone Link, disable if not linking phone
    'MapsBroker.exe', // Windows Maps service, safe to disable
    'RetailDemo.exe', // Retail Demo mode, disable if not used
    'ContactSupport.exe', // Get Help app, safe to disable
    'SupportAssistAgent.exe', // Dell SupportAssist, OEM service, safe to disable
    'OneDrive.exe', // Microsoft OneDrive, disable sync if not needed
    'OfficeClickToRun.exe', // Microsoft Office background, disable if not using Office
    'SearchUI.exe', // Cortana/Search, can disable in settings
    'CompatTelRunner.exe', // Windows Compatibility Telemetry, safe to disable
    'NvContainerLocalSystem.exe', // NVIDIA services, only needed for Control Panel and telemetry
    'NvBackend.exe', // NVIDIA background service, disable if not using GeForce Experience
    'AdobeGCClient.exe', // Adobe Creative Cloud background, safe to disable
    'msedge.exe', // Microsoft Edge browser, disable if not using
    'msedge_pwa_launcher.exe', // Edge PWA launcher, disable if not using Progressive Web Apps
    'EdgeGameAssist.exe', // Edge Game Assist service, disable if not using Edge for gaming
    'BrowserBroker.exe', // Edge/Chromium sandbox, safe to disable if browser not running
    'MicrosoftEdgeUpdate.exe', // Edge update service, disable if not needed
    'WindowsAlarms.exe', // Windows Alarms, safe to disable
    'WindowsCameraFrameServer.exe', // Camera service, disable if not using webcam
    'WindowsFeedbackHub.exe', // Feedback Hub, safe to disable
    'MicrosoftTeams.exe', // Teams background, disable if not using Teams
    'TeamsMachineInstaller.exe', // Teams background installer, safe to disable
    'People.exe', // Windows Contacts, safe to disable
    'OneSyncSvc.exe', // Sync service for Mail & Calendar, disable if unused
    'WaaSMedicSvc.exe', // Windows Update Medic Service, can disable temporarily
    'WindowsPushNotificationsUserService.exe', // Push notifications, disable if not needed
    'WindowsSecurityHealthService.exe', // Health service for Windows Security, safe to disable for gaming
    'OfficeBackgroundTaskHandler.exe', // Office background tasks, disable if not using Office
    'Microsoft.Photos.exe', // Photos app background, safe to disable
    'WindowsStore.exe', // Microsoft Store, safe to disable if not using
    'LockApp.exe', // Lock screen app, safe to disable if not using lock screen
    'ConnectedDevicesPlatformUserSvc.exe', // Sync for connected devices, safe to disable
    'SecurityHealthSystray.exe', // Windows Security tray icon, safe to disable
    'ServiceShell.exe', // Microsoft Office / Click-to-Run, disable if not using Office
    'PrintNotify.exe', // Dell/HP printer service, disable if no printer
    'MessagingService.exe', // Messaging app, safe to disable
    'XboxNetApiSvc.exe', // Xbox networking, disable if not using Xbox features
    'BrowserUpdate.exe', // Generic browser update process, disable if not needed
    'GoogleUpdate.exe', // Chrome/Google update, safe to disable
    'wslservice.exe', // Windows Subsystem for Linux
    'embeddings-server.exe', //  self-hosted server application used for generating AI text embeddings locally, rather than a built-in Windows component.
    'full-line-inference.exe', // ML process
    'tmInstall.exe', // Unknown installer
    'CloudExperienceHost.exe', // Windows setup / welcome screens, safe to disable
    'AggregatorHost.exe', // Windows telemetry
    'WindowsPackageManagerServer.exe', // Windows package manager
    'backgroundTaskHost.exe', // Windows system process, primarily a host for Cortana and Microsoft Store app background activities
    'CrossDeviceResume.exe', // This executable is associated with the Cross Device Resume (XDR) feature, which allows continuity between Windows apps and apps on other platforms, enabling users to resume activities across devices.
    'WinStore.App.exe', // Microsoft Windows Store
    // 'OpenConsole.exe', // Non-critical console utility
    // 'SystemSettings.exe', // Microsoft Windows system process, called "Settings"
    // 'TextInputHost.exe' // TextInputHost.exe is responsible for the text input process for Universal Windows Platform (UWP) apps. (auto restart)
    // 'StartMenuExperienceHost.exe', // StartMenuExperienceHost.exe is a legitimate Windows process that is responsible for managing the Start menu (auto restart)
    // 'ShellHost.exe', // system process in Microsoft Windows that is part of the operating system's user interface management framework. It primarily works to support and manage shell-related functions, such as rendering modern UWP (Universal Windows Platform) app interfaces and handling certain visual elements of the Windows Shell (auto restart)
    // 'ShellExperienceHost.exe', // manages core GUI elements like the Start Menu, Taskbar, Action Center, and desktop wallpaper slideshows
    // '', //
];
exports.SERVICE_NAMES = [
    'wuauserv', // windows update
    'WSearch', // windows search
    'MicrosoftEdgeElevationService', // microsoft edge browser
    'edgeupdate', // microsoft edge
    'edgeupdatem', // microsoft edge
    'InstallService', // Microsoft Store Install Service
    'DiagTrack', // Microsoft telemetry
    'dptftcs', // Intel telemetry service
    'InventorySvc', // Device inventory / enterprise-related
    'DusmSvc', // Data Usage Monitoring
    'TrkWks', // Distributed Link Tracking Client
    'SSDPSRV', // UPnP / SSDP (rarely needed)
    'OneSyncSvc_', // Mail, Calendar, Contacts sync
    'cbdhsvc_', // Cloud clipboard synchronization
    'CDPSvc', // Connected Devices Platform
    'CDPUserSvc_', // Per-user Connected Devices Platform
    'DevicesFlowUserSvc_', // Device discovery / pairing flow
    'DsSvc', // Delivery Optimization (P2P updates)
    'PhoneSvc', // Phone Link service
    'TapiSrv', // Telephony API service
    'SstpSvc', // SSTP VPN service
    'RasMan', // Remote Access / VPN manager
    'SharedAccess', // Internet Connection Sharing (ICS)
    'WpnService', // Push notifications (system-wide)
    'TokenBroker', // Microsoft account auth broker (UWP)
    // 'TimeBrokerSvc', // Background tasks for UWP apps (auto restart)
    // 'WpnUserService_', // a critical Windows service responsible for managing local and push notifications for Windows apps, including tile updates, toast notifications, and raw data
    ///////////////////////////////////////////////////////////
    'DPS', // Diagnostic Policy Service (safe if you don't use Windows diagnostics)
    'NcbService', // Network Connection Broker (Store/UWP apps)
    'ShellHWDetection', // AutoPlay (disable if not needed)
    'UsoSvc', // Update Orchestrator (disable only if you manage updates manually)
    'wlidsvc', // Microsoft Account Sign-in Assistant
    'WSAIFabricSvc', // Windows Subsystem for Android (if unused)
    // 'hidserv', // Human Interface Device (disable if no special HID devices) (necessary for multimedia buttons)
    // 'RmSvc', // Radio Management (airplane mode, radios) (blocked by windows)
    // 'StateRepository', // UWP app state (disable if no Store apps) (blocked by windows)
    // 'SystemEventsBroker', // UWP background events (blocked by windows)
    // 'TextInputManagementService', // Touch/IME/text suggestions (blocked by windows)
    // 'TimeBrokerSvc', // Background tasks for UWP apps (auto restart)
    // 'webthreatdefusersvc_', // Web threat protection (Defender-related)
    // 'FontCache', // Windows Font Cache (minor performance impact if disabled) (blocked by windows)
    // 'WinHttpAutoProxySvc', // Auto proxy detection (blocked by windows)
    // 'UdkUserSvc_', // Per-user UDK service (blocked by windows)
    // 'NPSMSvc_', // Per-user Network Policy Service (blocked by windows)
    // 'camsvc', // Capability Access Manager (safe if Store apps not used) (disable wifi on stop!!!)
];
