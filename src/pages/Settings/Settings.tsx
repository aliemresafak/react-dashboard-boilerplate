import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/core/components/ui/tabs";
import Content from "@/core/layouts/Content";

const SettingsPage = () => {
  return (
    <Content title="Settings">
      <Tabs defaultValue="mainSettings" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="mainSettings">Main Settings</TabsTrigger>
          <TabsTrigger value="brand">Brand</TabsTrigger>
          <TabsTrigger value="model">Model</TabsTrigger>
        </TabsList>
        <TabsContent value="mainSettings">MainSettings</TabsContent>
        <TabsContent value="brand">Brand</TabsContent>
        <TabsContent value="model">Model</TabsContent>
      </Tabs>
    </Content>
  );
};

export default SettingsPage;
