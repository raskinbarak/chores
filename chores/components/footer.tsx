import { ThemeSwitcher } from "./theme-switcher";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10">
      <div className="py-3 flex items-center justify-center text-sm">
        <ThemeSwitcher />
        <div className="text-foreground/60">
          © {new Date().getFullYear()} Chores
        </div>
      </div>
    </footer>
  );
};
