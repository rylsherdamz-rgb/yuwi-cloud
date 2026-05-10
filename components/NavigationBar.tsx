import { useTheme } from "@/hooks/useTheme"
import { Moon } from "lucide-react"


export default function NavigationBar() {

  const theme = useTheme();

  const { setThemeMode, mode } = theme



  return <div
    style={{
      backgroundColor: theme.background,
      color: theme.textPrimary,
    }}
    className="rounded-2xl  w-full h-20 shadow-md flex px-5  justify-between ">

    <div className="">

    </div>

    <div className="flex justify-center items-center">
      <div
        onClick={() => {
          setThemeMode(mode === "dark" ? "light" : "dark")
        }}
        style={{
          backgroundColor: theme.card
        }}
        className="rounded-full p-2  flex justify-center items-center w-10  shadow-md h-10">
        <Moon size={18}
          color={theme.accent}
          className="rounded-full w-full h-full p-1 "
          style={{
            backgroundColor: theme.accentMuted
          }}

        />
      </div>
    </div>



  </div>
}
