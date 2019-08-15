export interface IMenuAction {
  name: string;
  action: () => any;

  class?: string;
  disabled?: () => boolean;
}
