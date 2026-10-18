import TabsContentPadding, { TabsContent } from "@components/Tabs";
import { OperatingSystem } from "@/interfaces/OperatingSystem";

export default function AndroidTab() {
  return (
    <TabsContent value={String(OperatingSystem.ANDROID)}>
      <TabsContentPadding>
        <h2 className="font-medium text-lg mb-3">Aheadscale for Android</h2>
        <p className="text-sm text-nb-gray-300">
          Приложение Aheadscale для Android пока не опубликовано. Для
          тестирования доступны Windows, Linux и macOS на Apple Silicon.
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
