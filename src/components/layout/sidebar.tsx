import { SidebarChatItem } from "./sidebar/sidebarChatItem";
import { SidebarNewsItem } from "./sidebar/sidebarNewsItem";
import { SidebarSection } from "./sidebar/sidebarSection";
import { EmailOutlined, BookmarkBorder, Cake, DescriptionOutlined, Videocam, GroupOutlined, Share, AssuredWorkloadOutlined } from '@mui/icons-material'

export const SideBar = () => {
    return (
        <div className="h-full w-full flex flex-col bg-sidebar">
            <SidebarSection
                icon={<EmailOutlined color="primary"/>}
                title="Comunicaciones"
            >
                <div className="flex flex-col gap-2 mb-4">
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet asda asd a"
                    />
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                </div>
            </SidebarSection>
            <SidebarSection
                icon={<BookmarkBorder color="primary"/>}
                title="Noticias"
            >
                <div className="flex flex-col gap-2 mb-4">
                    <SidebarNewsItem
                        icon={<Cake/>}
                        title="Cumpleaños"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                    <SidebarNewsItem
                        icon={<AssuredWorkloadOutlined/>}
                        title="Capacitaciones"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                    <SidebarNewsItem
                        icon={<Share/>}
                        title="Link de interés"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                    <SidebarNewsItem
                        icon={<Videocam />}
                        title="Video"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                    <SidebarNewsItem
                        icon={<GroupOutlined />}
                        title="Actividades"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                    <SidebarNewsItem
                        icon={<DescriptionOutlined />}
                        title="Documento"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </div>
            </SidebarSection>
        </div>
    );
}
