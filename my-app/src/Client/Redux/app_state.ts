import { VacationModel } from "../Models/VacationModel";

export class AppState {
  public vacantionState!: VacationModel[];
  public filteredVacations!: VacationModel[];
  public currentUserName!: string;
  public currentAdminStatus!: string;
}
