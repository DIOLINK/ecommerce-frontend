import ThemeController from '@/app/_components/Theme/Controller';
interface INavbarComponentProps {
  title: string;
}

const NavbarComponent = ({ title }: INavbarComponentProps) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </div>
  );
};
export default NavbarComponent;
