export class NotificationsService {
  private static instance: NotificationsService;

  private _deviceToken: string;
  // private _notificationEnabled: boolean; // Da usare per sapere se l'utente ha attivato le notifiche o meno

  get deviceToken(): string {
    return this._deviceToken ?? '';
  }
  
  set deviceToken(value) {
    this._deviceToken = value;
  }

  // get notificationEnabled(): boolean {
  //   return this._notificationEnabled ?? false;
  // }

  // set notificationEnabled(value) {
  //   this._notificationEnabled = value;
  // }

  private constructor() {
    // Costruttore privato
    this._deviceToken = '';
    // this._notificationEnabled = false;
  }

  public static getInstance(): NotificationsService {
    if (!NotificationsService.instance) {
        NotificationsService.instance = new NotificationsService();
    }
    return NotificationsService.instance;
  }
}
