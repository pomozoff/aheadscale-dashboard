import AheadscaleInstall, { InstallProps } from "./AheadscaleInstall";
import { OperatingSystem } from "@/interfaces/OperatingSystem";
export default function WindowsTab(props: Readonly<InstallProps>) {
 return <AheadscaleInstall {...props} platform="Windows" os={OperatingSystem.WINDOWS} />;
}
