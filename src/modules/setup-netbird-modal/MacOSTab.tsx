import AheadscaleInstall, { InstallProps } from "./AheadscaleInstall";
import { OperatingSystem } from "@/interfaces/OperatingSystem";
export default function MacOSTab(props: Readonly<InstallProps>) {
 return <AheadscaleInstall {...props} platform="macOS" os={OperatingSystem.APPLE} />;
}
