import { Box, ListItem } from "@mui/material";
import { SidebarChatItem } from "./sidebar/sidebarChatItem";
import { SidebarNewsItem } from "./sidebar/sidebarNewsItem";
import { SidebarSection } from "./sidebar/sidebarSection";
import { EmailOutlined, BookmarkBorder, Cake, DescriptionOutlined, Videocam, GroupOutlined, Share, AssuredWorkloadOutlined } from '@mui/icons-material'
import { blueGrey } from "@mui/material/colors";

export const SideBar = () => {
    return (
        <Box sx={{ backgroundColor: blueGrey[50], height: '100%' }}>
            <SidebarSection
                icon={<EmailOutlined color="primary" />}
                title="Comunicaciones"
                alert="Tienes 45 mensajes"
            >
                <ListItem>
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet asda asd a"
                    />
                </ListItem>
                <ListItem>
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarChatItem
                        from="Samantha William"
                        message="Lorem ipsum dolor sit amet"
                    />

                </ListItem>
            </SidebarSection>
            <SidebarSection
                icon={<BookmarkBorder color="primary" />}
                title="Noticias"
            >
                <ListItem>
                    <SidebarNewsItem
                        icon={<Cake />}
                        title="Cumpleaños"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarNewsItem
                        icon={<AssuredWorkloadOutlined />}
                        title="Capacitaciones"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarNewsItem
                        icon={<Share />}
                        title="Link de interés"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarNewsItem
                        icon={<Videocam />}
                        title="Video"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarNewsItem
                        icon={<GroupOutlined />}
                        title="Actividades"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
                <ListItem>
                    <SidebarNewsItem
                        icon={<DescriptionOutlined />}
                        title="Documento"
                        subtitle="Lorem ipsum dolor sit amet"
                    />
                </ListItem>
            </SidebarSection>
        </Box>
    );
}
