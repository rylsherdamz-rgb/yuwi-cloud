import { useTheme } from "@/hooks/useTheme"
import { Moon, Sun, Download } from "lucide-react"


export default function NavigationBar() {

  const theme = useTheme();

  const { setThemeMode, mode, isDark } = theme



  return <div
    style={{
      backgroundColor: theme.background,
      color: theme.textPrimary,
    }}
    className="rounded-2xl  w-full h-20 shadow-md flex px-5  justify-between ">

    <div className="flex justify-center gap-x-2 items-center font-black">
      <div style={{
        backgroundColor: theme.accentMuted
      }} className="w-18 h-18 rounded-2xl ">

      </div>
    </div>

    <div className="flex justify-center gap-x-5 items-center">
      {/* toggleTheme */}
      <div
        onClick={() => {
          setThemeMode(mode === "dark" ? "light" : "dark")
        }}
        style={{
          backgroundColor: theme.card
        }}
        className="rounded-full p-2  flex justify-center items-center w-10  shadow-md h-10">
        {
          !isDark ? (
            <Moon size={18}
              color={theme.accent}
              className="rounded-full w-full h-full p-1 "
              style={{
                backgroundColor: theme.accentMuted
              }}

            />) : (
            <Sun size={18}
              color={theme.accent}
              className="rounded-full w-full h-full p-1 "
              style={{
                backgroundColor: theme.accentMuted
              }}

            />

          )
        }

      </div>

      {/* download button */}
      <button
        style={{
          backgroundColor: theme.card,
          border: isDark ? `1px solid ${theme.accent}` : "none",
        }}
        className="w-35 duration-500 transition-transform outline-none ease-in-out hover:-translate-y-1   py-1 rounded-lg flex-row gap-x-3 px-2 shadow-md pointer items-center justify-center  flex h-10">
        <p
          style={{
            color: theme.textPrimary
          }}
          className="text-sm">
          Get the app
        </p>
        <Download size={18}
          color={theme.accent}
          style={{
            backgroundColor: theme.card
          }}
        />
      </button>
    </div>



  </div >
}
