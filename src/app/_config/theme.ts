export const THEME = {
  localKey: 'theme',
  dark: 'dracula',
  light: 'nord',
  dataTheme: 'data-theme',
  controller: 'theme-controller',
  changeMode(mode: string): string {
    return mode === this.light ? this.dark : this.light
  },
}
