import TabsContentPadding, { TabsContent } from "@components/Tabs";
import { OperatingSystem } from "@/interfaces/OperatingSystem";

export default function IOSTab() {
  return (
    <TabsContent value={String(OperatingSystem.IOS)}>
      <TabsContentPadding>
        <h2 className="font-medium text-lg mb-3">Aheadscale for iOS</h2>
        <p className="text-sm text-nb-gray-300">
          Приложение Aheadscale для iOS пока не опубликовано. Для тестирования
          доступны Windows, Linux и macOS на Apple Silicon.
        </p>
        <a
          href="https://github.com/pomozoff/aheadscale-client/blob/aheadscale/docs/aheadscale/user-guide.md"
          target="_blank"
          rel="noreferrer"
          className="text-netbird mt-4 inline-block"
        >
          Доступные клиенты Aheadscale
        </a>
      </TabsContentPadding>
    </TabsContent>
  );
}
