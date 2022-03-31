import React from 'react';
// import { useLocation } from 'react-router-dom';
import { Navigation } from 'react-minimal-side-navigation/lib';
import Icon from "awesome-react-icons"

const Navigationbar = () => {
    // const location = useLocation();
  return (
    <div>
        <Navigation 
            // activeItemId={location.pathname}
            // onSelect={({ itemId }) => {
            //   history.push(itemId);
            // }}
            items = {[
                {
                    title: "Admin",
                    itemId: "Admin",
                    elemBefore: () => <Icon name = "user-group" />,
                    subNav: [
                        // {
                        //     title: "Admin",
                        //     // itemId: "/about/projects",
                        // },
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // }
                    ]
                },
                {
                    title: "Knowledge Base",
                    itemId: "Knowledge",
                    elemBefore: () => <Icon name = "square-check" />,
                    subNav: [
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // },
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // }
                    ]
                },
                {
                    title: "Train SAM",
                    itemId: "train",
                    elemBefore: () => <Icon name = "square-check" />,
                    subNav: [
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // },
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // }
                    ]
                },
                {
                    title: "Agent Inbox",
                    itemId: "Agent",
                    elemBefore: () => <Icon name = "user-group" />,
                    subNav: [
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // },
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // }
                    ]
                },
                {
                    title: "Help Center",
                    itemId: "help",
                    elemBefore: () => <Icon name = "user-group" />,
                    subNav: [
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // },
                        // {
                        //     title: "Projects",
                        //     itemId: "/about/projects",
                        // }
                    ]
                },
                {
                    title: "Analytics",
                    itemId: "analytics",
                    elemBefore: () => <Icon name = "user-group" />,
                    subNav: [
                        {
                            title: "Teams",
                            // itemId: "/about/projects",
                        },
                        {
                            title: "Knowledge Base",
                            // itemId: "/about/projects",
                        },
                        {
                            title: "Training SAM",
                            // itemId: "/about/projects",
                        },
                        {
                            title: "Help Center",
                            // itemId: "/about/projects",
                        }
                    ]
                }
                
                
            ]}
        />
    </div>
  )
}

export default Navigationbar;