import AheadscaleInstall, { InstallProps } from "./AheadscaleInstall";
import { OperatingSystem } from "@/interfaces/OperatingSystem";
export default function LinuxTab(props: Readonly<InstallProps>) {
 return <AheadscaleInstall {...props} platform="Linux" os={OperatingSystem.LINUX} />;
}
