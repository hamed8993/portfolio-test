import { LanguagesList } from "@/src/configs/language-select.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import useChangeLocale from "@/src/hooks/use-change-locale";

const FlagElement = ({ flagClass }: { flagClass: string }) => {
  return <i className={`fi fi-${flagClass} rounded-full`} />;
};

export default function LanguageSelect() {
  const { currentLocale, setLocale } = useChangeLocale();
  const currentFlagClass: string = LanguagesList?.find(
    (langItem) => langItem.localeKey == currentLocale
  )?.flagClass as string;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <FlagElement flagClass={currentFlagClass} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-primary-300 bg-primary-50 dark:bg-gray-700">
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={setLocale}
          className="flex flex-col justify-center"
        >
          {LanguagesList?.map((langItem) => (
            <DropdownMenuRadioItem
              className="flex items-center gap-x-2 justify-end cursor-pointer"
              value={langItem.localeKey}
            >
              <i>{langItem.label}</i>{" "}
              <FlagElement flagClass={langItem.flagClass} />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
