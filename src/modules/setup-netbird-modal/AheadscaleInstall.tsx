import React from "react";
import TabsContentPadding, { TabsContent } from "@components/Tabs";
import { pkgsDownloadUrl } from "@utils/netbird";
import { OperatingSystem } from "@/interfaces/OperatingSystem";

export type InstallProps = {
 setupKey?: string; setupKeyContent?: React.ReactNode; setupKeyPlaceholder?: string;
 showSetupKeyInfo?: boolean; hostname?: string;
};
export default function AheadscaleInstall({ platform, os, ...props }: InstallProps & { platform: string; os: OperatingSystem }) {
 const choices = platform === "macOS" ? [{name:"Apple Silicon (arm64)",path:"macos/arm64"}] : [
  {name:"ARM64",path:(platform === "Windows" ? "windows/" : "linux/")+"arm64"},
  {name:"Intel / AMD (x64)",path:(platform === "Windows" ? "windows/" : "linux/")+"x64"},
 ];
 return <TabsContent value={String(os)}><TabsContentPadding>
  <h2 className="font-medium text-lg mb-3">Install Aheadscale on {platform}</h2>
  <p className="text-sm text-nb-gray-300 mb-4">{platform === "Windows" ? "Use Windows 11 for ARM64, or Windows 10/11 for x64." : platform === "Linux" ? "Ubuntu 24.04 or a compatible newer system." : "For Macs with Apple Silicon."}</p>
  <div className="flex flex-wrap gap-3 mb-5">{choices.map(choice => <a key={choice.path} href={pkgsDownloadUrl(choice.path)} target="_blank" rel="noreferrer" className="bg-netbird text-white rounded-md px-4 py-2 text-sm">Download {choice.name}</a>)}</div>
  <p className="text-sm mb-3">Choose the public installer in the archive. For Linux desktop, choose the .deb without _cli and install it with your package manager.</p>
  <p className="text-sm mb-4">Open Aheadscale and select Connect. Sign in or create your account in the browser; Aheadscale connects automatically.</p>
  {props.setupKeyContent}
  {(props.setupKey || props.setupKeyPlaceholder) && <pre className="text-sm whitespace-pre-wrap">aheadscale up --setup-key {props.setupKey || props.setupKeyPlaceholder}</pre>}
 </TabsContentPadding></TabsContent>;
}
