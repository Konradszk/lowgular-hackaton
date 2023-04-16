export interface MarsColonistsModel {
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly children: MarsColonistsModel[];
  readonly siblings: MarsColonistsModel[];
}
